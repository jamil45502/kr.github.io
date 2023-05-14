var cciiqname;
var cciiqid;

function CarClicksData(accid) {
    var cctidname = "ACCNTID2";
    var ccuidname = "ACCNUID2";
    var ccpgidname = "ACCNPG2";
    var cctidqsname = "ACCNTID";
    var ccuidqsname = "ACCNUID";
    cciiqname = "ACCIIQID";
    var cctid = GetCarClicksCookie(cctidname);
    var ccuid = GetCarClicksCookie(ccuidname);
    var ccpgid = GetCarClicksCookie(ccpgidname);
    cciiqid = GetCarClicksCookie(cciiqname);

    var accp = window.location.href;

    if (ccpgid !== encodeURIComponent(accp) || document.referrer === "") {
        SetCarClicksCookie(ccpgidname, encodeURIComponent(accp));

        if (accp.indexOf('utm_source=carclicksnetwork.com') > 0) {

            var acctermindex = accp.indexOf("utm_term=");

            if (acctermindex > 0) {
                var accterm = accp.substring(acctermindex + "utm_term=".length);
                var accterms = accterm.split('~');

                //added this code to address change in delimiter from a semi colon to a ~
                if (accterms.length !== 5)
                    accterms = accterm.split(';');

                if (accterms.length === 5 && accterms[4].length >= 32) {
                    var trackingId = accterms[4].substring(0, 32);

                    if ((cctid == null) || (cctid.length === 0) || trackingId !== cctid) {
                        cctid = trackingId;

                        SetCarClicksCookie(cctidname, cctid);

                        var ccscript = document.createElement('script');
                        ccscript.type = 'text/javascript';
                        ccscript.async = true;

                        ccscript.src = (document.location.protocol || 'http:') + '//cars.aimcarclicks.com/Analytics/Post/?cid=' + accid + '&tid=' + cctid;

                        var ccscript2 = document.getElementsByTagName('script')[0];
                        ccscript2.parentNode.insertBefore(ccscript, ccscript2);
                    }
                }
            }
        }

        if ((ccuid == null) || (ccuid.length == 0)) {
            ccuid = uuidv4();

            SetCarClicksCookie(ccuidname, ccuid);
        }

        var http = new XMLHttpRequest();
        var url = (document.location.protocol || 'http:') + '//cars.aimcarclicks.com/Analytics/StatsProfile/';

        var profile = "";
        //if ((cciiqid === null || cciiqid === undefined || cciiqid === "") && document.referrer.split('/')[2] != window.location.hostname) {
        //    profile = encodeURIComponent(GetProfile());
        //	if(IsNothing(profile) || profile === undefined || profile === null || profile === 'null')
        //		profile = "";
        //}

        var params = "ACCID=" + accid;
        params += "&" + ccuidqsname + "=" + ccuid;
        params += "&" + cctidqsname + "=" + cctid;
        params += "&Page=" + encodeURIComponent(window.location.pathname.substring(window.location.pathname.lastIndexOf('\\') + 1));
        params += "&Domain=" + encodeURIComponent(document.domain);
        params += "&URL=" + encodeURIComponent(document.URL);
        params += "&Referrer=" + encodeURIComponent(document.referrer);
        params += "&iiqId=" + cciiqid;
        params += "&profile=" + profile;

        http.open('POST', url, true);

        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() { //Call a function when the state changes.
            if (http.readyState == 4 && http.status == 200) {
                console.log(http.responseText);
            }
        }
        http.send(params);
    }
}

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
}

function GetCarClicksCookie(name) {
    //first try checking local storage, then check for a cookie

    var value = localStorage.getItem(name);

    if (value === null) {
        name = name + "=";

        var cstart = document.cookie.indexOf(name);
        if (cstart === -1)
            return null;

        cstart += (name.length);
        var cend = document.cookie.indexOf(";", cstart);
        if (cend === -1)
            cend = document.cookie.length;

        value = document.cookie.substring(cstart, cend);
    }

    return value;
}

function SetCarClicksCookie(name, value) {
    //first try setting local storage, then try setting a cookie

    localStorage.setItem(name, value);

    if (localStorage.getItem(name) === null) {
        //if local storage doesn't seem to work, try setting the cookie

        var currDate = new Date();

        currDate.setDate(currDate.getDate() + 7);

        document.cookie = (name + "=" + value + "; expires=" + currDate.toGMTString() + "; path=/; Secure; SameSite=None;");
    }
}

//INTENTID PROFILE METHOD
function GetProfile() {
    var url = "https://api.intentiq.com/profiles_engine/ProfilesEngineServlet?at=39&mi=10&dpi=472289008&pt=17&dpn=1&dpt=[ACTION]"; 
    var apiRes;

    try {
        apiRes = httpGet(url);

        try {
            cciiqid = JSON.parse(apiRes).ctrid;

            if (cciiqid !== undefined && cciiqid !== null && cciiqid !== "" && cciiqid !== "NOTFOUND00")
                SetCarClicksCookie(cciiqname, cciiqid);
            else
                cciiqid = "";
        } catch (err) {
            cciiqid = "";
        }
    } catch (err) {
        apiRes = "";
    }

    return apiRes;
}

//INTENT IQ HELPER METHOD
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.withCredentials = true;
    xmlHttp.send(null);
    return xmlHttp.responseText;
}