;;;;;;;
var LotlinxLoader = (function() {
    function LotlinxLoader(q) {
        this.debug = false;
        this.dev = false;
        this.testHost = "";
        this.queue = q;
        this.process();
    };
    LotlinxLoader.prototype.domain = function() {
        if (this.dev) {
            if (this.testHost != "") {
                return this.testHost;
            }
            return "https://dev-cm.lotlinx.com";
        }
        return "https://cm.lotlinx.com";
    };;
    LotlinxLoader.prototype.isEncoded = function(str) {
        return typeof str == "string" && decodeURIComponent(str) !== str;
    };;
    LotlinxLoader.prototype.getPageUrl = function() {
        return window.location.href;
    };
    LotlinxLoader.prototype.query = function() {
        var arr = [];
        for (var prop in this.page) {
            var p = this.page[prop];
            if (!this.isEncoded(p))
                p = encodeURIComponent(p);
            arr.push(encodeURIComponent(prop) + "=" + p);
        }
        return arr.join("&");
    };;
    LotlinxLoader.prototype.publisher = function() {
        if (this.page === undefined || this.page.publisher === undefined) {
            return "0";
        }
        return this.page.publisher;
    };;
    LotlinxLoader.prototype.callServer = function(url, parameters, handler) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.withCredentials = true;
        xhr.onload = function() {
            console.debug("OnLoad");
            if (xhr.status != 200) {
                handler.failure(xhr.response);
                return;
            }
            try {
                var resp = JSON.parse(xhr.response);
                if (resp.status !== undefined) {
                    if (resp.status == 'ok' || resp.status == 200) {
                        handler.success(resp);
                        return;
                    }
                }
            } catch (err) {
                console.error(err);
            }
            handler.failure(xhr.response);
            return;
        };
        xhr.onerror = function() {
            console.error("Error");
            console.error(xhr.response);
            handler.failure(xhr.response);
        };
        xhr.send();
    };;
    LotlinxLoader.prototype.setPage = function(page) {
        console.debug("Set page params");
        if (page.id === undefined) {
            page.id = this.genId();
        }
        if (page.debug) {
            this.debug = page.debug;
        }
        if (page.dev) {
            this.dev = page.dev;
            if (page.host) {
                this.testHost = page.host;
            }
        }
        if (page.url === undefined) {
            page.url = this.getPageUrl();
        }
        this.page = page;
    };;
    LotlinxLoader.prototype.track = function(track) {
        console.debug("Track called");
        var url = this.domain() + "/lxtrack/" + String(this.publisher()) + "/getPixelUrls?";
        url = url + this.query();
        var p = this;
        var handler = {
            success: function(response) {
                console.debug("Success calling track");
                if (response.data === undefined) {
                    console.debug("no data returned");
                    return;
                }
                if (Array.isArray(response.data)) {
                    response.data.forEach(function(op) {
                        return p.push(op);
                    });
                }
            },
            failure: function(response) {
                console.debug("Error calling track");
                console.debug(response);
            }
        };
        this.callServer(url, {}, handler);
    };;
    LotlinxLoader.prototype.addPixel = function(pixel) {
        console.debug("Add Pixel");
        if (pixel.src === undefined) {
            console.debug("Undefined pixel src");
            return;
        }
        var img = document.createElement('img');
        img.setAttribute('style', 'width:1px;height:1px;border:none;display:block');
        img.src = pixel.src;
    };;
    LotlinxLoader.prototype.addEvent = function(event) {
        console.debug("Add Event " + event.event);
        var url = this.domain() + "/live/" + String(this.publisher()) + "/event?";
        url = url + this.query() + "&event=" + event.event;
        var pixelOp = {
            "op": "addPixel",
            "src": url
        };
        this.push(pixelOp);
    };;
    LotlinxLoader.prototype.genId = function() {
        var a = Math.random() * 1000000000000000000;
        return String(a);
    };;
    LotlinxLoader.prototype.process = function() {
        var t = this;
        setTimeout(function() {
            t.processActual();
        }, 0);
    };;
    LotlinxLoader.prototype.processActual = function() {
        if (typeof this.page == "undefined") {
            var pageIsSet = false;
            for (var i = 0; i < this.queue.length; i++) {
                if (typeof this.queue[i].op != 'undefined' &&
                    (this.queue[i].op == 'setPage' ||
                        this.queue[i].op == 'setParams')) {
                    var operation = this.queue.splice(i, 1);
                    this.setPage(operation[0]);
                    pageIsSet = true;
                    break;
                }
            }
            if (!pageIsSet)
                return;
        }
        while (this.queue.length > 0) {
            var e = this.queue.shift();
            if (typeof e.op != 'undefined') {
                switch (e.op) {
                    case "setPage":
                    case "setParams":
                        this.setPage(e);
                        break;
                    case "track":
                        this.track(e);
                        break;
                    case "addPixel":
                        this.addPixel(e);
                        break;
                    case "addEvent":
                        this.addEvent(e);
                        break;
                }
                continue;
            }
        }
    };;
    LotlinxLoader.prototype.push = function() {
        var ops = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ops[_i] = arguments[_i];
        }
        for (var i = 0; i < ops.length; i++) {
            console.debug("Push");
            this.queue.push(ops[i]);
        }
        this.process();
    };;
    return LotlinxLoader;
}());
window.LXLoader = (function() {
    if (Array.isArray(window.LXLoader)) {
        return new LotlinxLoader(window.LXLoader);
    } else {
        return new LotlinxLoader([]);
    }
})();