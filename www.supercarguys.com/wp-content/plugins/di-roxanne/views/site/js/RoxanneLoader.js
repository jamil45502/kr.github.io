(function(i, s, o, g, r, a, m) {
    i['RoxanneObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    // TODO: remove this conditional if we go live with roxannejs endpoint.
    if (RoxanneLocalization.env != 'production' && RoxanneLocalization.env != 'development') {
        const x = new XMLHttpRequest();
        x.onload = function() {
            a = s.createElement(o);
            m = s.getElementsByTagName(o)[0];
            a.type = 'text/javascript';
            a.text = this.responseText;
            if (a.text.length) {
                m.parentNode.insertBefore(a, m);
            }
        };
        x.open('POST', g.site_url, true);
        x.setRequestHeader('Content-type', 'application/json');
        x.withCredentials = true;
        const data = JSON.stringify({
            referrer: s.referrer,
            visitId: g.visit_id
        });
        x.send(data);
    } else {
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g.site_url;
        m.parentNode.insertBefore(a, m);
    }
})(window, document, 'script', RoxanneLocalization, 'roxanne');