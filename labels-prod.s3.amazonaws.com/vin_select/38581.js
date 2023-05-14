var monroneylabels = {};
if (typeof console === "undefined" || typeof console.log === "undefined") {
    console = {};
    console.log = function(msg) {};
}
monroneylabels.begin = function() {
    monroneylabels.fillStickers();
    //Dealerinspire only -- reload window stickers on Ajax Page Reload
    if (window.$) { //i.e. check for jQuery (all Dealerinspire pages have it)
        $(document).ajaxSuccess(function(event, request, settings) { //i.e. trigger callback on every successful Ajax request
            if ((settings.data) && (settings.data.indexOf("im_ajax_call") > 0)) { //i.e. look for this string specific to Dealerinspire
                monroneylabels.fillStickers("&ajax=dealerinspire"); //i.e. notify MonroneyLabels.com it's a Dealerinspire site
            } else {
                monroneylabels.fillStickers("&ajax=1"); //i.e. it's an ajax site but not dealerinspire
            }
        });
    }
}
monroneylabels.url = function(vin, vendor) {
    return 'https://monroneylabels.com/vins/icon/' + vendor + '/' + monroneylabels.crypt(vin, vendor) + '?ref=' + monroneylabels.crypt(document.location.href, vendor);
}
monroneylabels.fillStickers = function(tag) {
    tag = (tag === undefined) ? '' : tag; //i.e. Internet Explorer breaks with default parameters
    var elements = document.querySelectorAll(".monroney-labels");
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        var year = element.dataset.year;
        var make = element.dataset.make;
        var vendor = element.dataset.vendorId;
        var vin = element.dataset.vin;
        var target = element.dataset.target || "_blank";
        if (monroneylabels.shouldShowSticker(vin, year, make)) {
            elements[i].innerHTML = '<a title="Original Window Sticker" href="' + monroneylabels.url(vin, vendor) + tag + '" target="' + target + '"><img alt="' + make + ' Window Sticker" src="//labels-prod.s3.amazonaws.com/sticker.png"></a>';
        }
    }

    try {
        //i.e. test for jQuery. This can have false positives, so that's why we have the try/catch block
        if (window.$) {
            //i.e. the window stickers appear too small by default on dealer.com websites
            $(".monroney-labels img").css("max-height", "inherit");
        }
    } catch (err) {
        console.log(err.message);
    }
}
try {
    //i.e. test for jQuery. This can have false positives, so that's why we have the try/catch block
    if (window.$) {
        //i.e. show window stickers on Dealer Inspire page 2
        jQuery(document).on('lightning-vrp-did-change', function() {
            monroneylabels.fillStickers();
        })
    }
} catch (err) {
    console.log(err.message);
}
monroneylabels.shouldShowSticker = function(vin, year, make) {
    var newIndex = document.location.href.toLowerCase().indexOf("new");
    if (newIndex > 0) {
        if (document.location.href.toLowerCase().indexOf("new-york") == newIndex ||
            document.location.href.toLowerCase().indexOf("new-jersey") == newIndex ||
            document.location.href.toLowerCase().indexOf("new-hampshire") == newIndex ||
            document.location.href.toLowerCase().indexOf("new-mexico") == newIndex) {} else {
            console.log("[MonroneyLabels] New car page found. Skipping...");
            return false;
        } //If URL contains 'new' it skips the page unless it is a state in which case it does nothing. 
    }
    if (monroneylabels.blacklist.indexOf(vin) >= 0) {
        return false;
    }
    if (monroneylabels.exceptions.indexOf(monroneylabels.vinPattern(vin)) >= 0) {
        return false;
    }
    if (monroneylabels.errors.indexOf(vin) >= 0) {
        return false;
    }
    if (monroneylabels.removed.indexOf(vin) >= 0) {
        return false;
    }
    if (monroneylabels.yellow.indexOf(vin) >= 0) {
        return false;
    }
    //convert year to number
    if (typeof(year) != "number") {
        year = parseInt(year);
    }
    //convert make to lowercase
    make = make.toLowerCase();
    if (make == "mercedes") {
        make = "mercedes-benz";
    }
    if (make == "mercedes benz") {
        make = "mercedes-benz";
    }
    if (make == "land-rover") {
        make = "land rover";
    }

    //CDK - specific section
    //End CDK section



    //check if we have that car
    if ((year >= 1992) && (["acura"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2005) && (["bentley"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2002) && (["bmw", "scion"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 1997) && (["buick", "cadillac", "chevrolet", "gmc", "hummer", "oldsmobile", "saab", "saturn"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2004) && (["chrysler", "dodge", "fiat", "jeep", "pontiac", "ram"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2008) && (["ford", "lincoln", "mercury"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 1990) && (["honda"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2009) && (["hyundai"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2001) && (["infiniti", "nissan"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2012) && (["jaguar"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2007) && (["kia"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2010) && (["land rover"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2000) && (["lexus"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2017) && (["maserati"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2004) && (["mazda"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2014) && (["mercedes-benz", "audi", "alfa romeo", "genesis"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2002) && (["mini"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 1997) && (["porsche"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2006) && (["smart"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2003) && (["subaru"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 1995) && (["toyota"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 1999) && (["mitsubishi"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2015) && (["volkswagen"].indexOf(make) > -1)) {
        return true;
    }
    if ((year >= 2012) && (["volvo"].indexOf(make) > -1)) {
        return true;
    }
    return false;
}
monroneylabels.blacklist = [];
monroneylabels.removed = ["ZARFAEEN2J7581086", "ZARFAEEN2J7576051", "ZARFAEEN6J7589739", "4T1BF1FK2EU746113", "WBA13AL05L7F54899", "YV1A22ML9H1008533", "LVY992ML2JP029563", "5NPE24AF3HH518161", "4S3BNAC63H3035206", "3MW5R1J05M8B61808", "ZARFANBN7K7602956", "WBA5B3C51FD546698", "1C6JJTBG7NL152531", "YV1A22ML2H1009863", "JA4AZ3A30KZ054881", "5TFEM5F15EX077081", "3VWCB7BUXKM240282", "4T1KZ1AK2LU045535", "JF2GTAMC1LH267459", "SALE26EUXP2165947", "SALE26EU4P2128814", "1FTNF1E88PKD53013", "1C4PJLAB4FW530913", "1FTMF1EB8NKF06980", "5YJ3E1EA5PF399635"];
monroneylabels.errors = [];
monroneylabels.yellow = ["1FTRF12247NA15639", "1J4GW58S5XC576539", "ZAM57XSAXE1128145", "4T1BD1FK1HU218363", "KMHFC46FX8A288034", "WP1AA2A24GKA36316", "3B7HC13ZXXG159835", "1FBJS31H6NHA00036", "5YJSA1E26GF159705", "1FTCR14XXRPA19045", "1C4RJEBG5EC221501", "5YJ3E1EB2MF927698", "4JGDF7CE8EA389807", "3VW517AT4FM805751", "1VWBN7A32EC117058", "1FAFP53U25A214058", "1D7HA18N93S169146", "5YJ3E1EC7MF078306", "WAUAF78E77A175777", "1FTSW21P96ED38328", "1FMZU67E21UA37105", "WAU2GAFC2DN073677", "1VWCN7A37DC129757", "JS2YB5A39C6302154", "WP0CA2991SS341552", "1C3CDZAG1EN117618", "SCFEFBBK5BGD14823", "WDC0G8DBXLF694679", "ZPBUA1ZL1NLA20502", "W1Z4EGHY6LT030961", "SCCLMDTU0EHA10397", "WDDGF8AB1DR279428", "7FCTGAAA4NN012744", "SAJWA44C379B12272", "SALYB2EX0KA784202", "7FCTGAAA0NN015463", "1ZVHT88S875312088", "5YJ3E1EA9JF061548", "1FTHX25G6VEA30369", "SCA665C52KUX87159", "SALCP2FX5KH824601", "5NPEU46F46H088527", "2C3CDXCTXKH500220", "1GKKNULS7KZ153606", "WVGAV7AX8FW570954", "4JGDF7CE4DA264964", "7FCTGAAL7NN000654", "1FMYU93185DA03188", "JM1FC3514K0708288", "1FTCR10U9RUB83318", "JF2GPANC3G8309025", "JS2YB5A35C6302393", "5YJSA1E15GF159749", "5YJSA1E21MF425398", "7FCTGAAA3NN007969", "3VW7T7AT0FM803613", "5YJ3E1EA1NF101269", "4JGDF6EE8FA502535", "5YJ3E1EA4KF410066", "ZAM56RRA6F1140136", "LPSED3KA8ML012802", "WDC0G4JB0GF074653", "1GTV2UEC5FZ336578", "1G2WP1216VF356334", "5YJ3E1EA2LF807955", "1ZVFT82H055258979", "5YJ3E1EB2LF667169", "5YJ3E1EA6KF435647", "JTEBU4BF9EK199644", "5TDKZ3DCXKS984150", "WDCTG4EB7GJ210572", "2G2FV22P6V2223767", "5YJYGDEE6MF062357", "WVGAV7AX4FW580879", "1ZVFT84N755211385", "JS2YC5A28B6303489", "3MEHM08197R621699", "2C3CDYBT0DH588026", "1VWCN7A34DC042446", "1G2NE52F53C210901", "WAU2GAFC5DN125335", "5YJ3E1EA4LF716847", "1FTCR10A2VPB18406", "5YJXCAE4XGF003801", "5YJ3E1EA8LF632112", "3GTU2PEJ2JG390666", "WDBSK7BA8CF168115", "5YJSA1E49GF128689", "1VWBT7A37EC065383", "1B7GL23X9VS286002", "JTMK1RFV0MD082419", "5YJSA1H12EFP36049", "5TDKZ3DC7JS947801", "WDDGF4HB6DA767576", "ZFF65LJA3A0168402", "WD3FF4CC5FP146328", "5YJSA1E47JF267954", "7PDSGABL6NN000881", "7PDSGABL6PN000530", "WDDSJ4EB2FN189162", "ZAM57RTA0E1126382", "1P3EW65G5XV503288", "7FCTGAAA7NN009899", "3VW2K7AJXFM203936", "WUAVNAFG6BN002720", "5YJSA1E27JF286552", "WD3PE7CD0JP632782", "ZAM57XSA0G1167880", "1FAHP60A32Y115194", "SALWR2RE8JA185834", "KMHFC46F08A311157", "YV4162UM3K2060113", "1G4BN52P4RR418924", "ZAM57XSA7F1155174", "ZFFKW64A390168811", "SAJNX2746RC191460", "5YJ3E1EBXJF118638", "JF1SF63541H704857", "1G2NW12E7XM766379", "3VWLL7AJ0DM382633", "WVWLF7AU4FW342062", "WDDHF8JB7CA532141", "WAUGGAFC5DN020994", "ZAM45MMA2D0070923", "1FAFP90S15Y401180", "ZAM45MMA8D0070456", "5UXCX4C03LLS39331", "ZAMBB18A140014108", "WDDLJ9BB0CA036434", "5YJXCDE22JF142392", "1B3ER65E4WV401163", "5LMFU27595LJ19059", "SAJDD5EV2JCK55564", "WDDNG7DB8CA420177", "5YJ3E1EC3MF973310", "WAUYGAFC7DN138131", "5YJSA1H1XEFP58638", "WDCYC3HF8EX224579", "5YJSA1CP6DFP25775", "5YJYGDEF4LF011348", "1FAHP34N67W313217", "7FCTGAAA2NN011561", "3VWVA7AT1CM641628", "WDDLJ7DB4CA007827", "SALEWERU6N2081498", "5YJSA1H24EFP63035", "1FAHP60A72Y104604", "1VWCS7A35FC064077", "3VW5X7AT4DM816518", "3VW2B7AJ5HM411158", "1G2WP52K9XF339918", "1FDXE45S31HA35695", "WDDGF4HB3DA800193", "4JGBF8GE5CA788940", "JS2YA5A5XC6300515", "WDDGF8BB9AF460739", "WBSKG9C51BE367830", "5YJ3E1EA2MF941320", "SBM13DAA7GW000196", "WVWDM7AJ4EW008449", "1FTPW14V57KC86998", "YV4L12RN3P1197588", "7JR102FK7LG071802", "SALME15426A214052", "SALWR2RE9JA186636", "YV4AC2HK5L2202495", "1N4AL3AP7HN302480", "YV4102DK3L1585292", "7JR102FK7LG051114", "WDDHF5KB8DA715014", "3VWVS7AT7EM631718", "1FAFP55273A223220", "JTDKB20UX97835433", "JTDKN3DP6C3016094", "WDDKK5GF2BF097217", "JM1NB353830311040", "1FMZU67E51UB32502", "WA1LKAFP1AA038344", "ZAM45VLA4F0129562", "1C4BJWDG2DL547324", "WDDGF5EB6BR160893", "YV4H60CN8P1989126", "2C4RDGEG5DR635561", "1ZVFT80N975299381", "YV4L12PV3P1979635", "1FTRX12V67KB03522", "1FAFP34NX5W207437", "5XYZT3LBXFG236526", "1C4NJCBA4DD115712", "WAUNF78P96A170601", "5NPET46C88H326469", "WBAUP73528VF08594", "1VWCN7A33DC140965", "1C4RJFAG7DC506576", "5NPEG4JA0LH060996", "KM8J33A2XJU717606", "KMHLP4AG9MU156382", "5YJSA1E14GF124474", "1FTNW21P43ED62304", "WVWPP7AU8FW907671", "1VWBN7A30EC092516", "3VWV67ATXDM618867"];
monroneylabels.exceptions = ["19UNC1B0JY", "19UNC1B0KY", "19UNC1B0LY", "19UNC1B0MY"]
monroneylabels.vinPattern = function(vin) {
    return vin.substring(0, 8) + vin.charAt(9) + vin.charAt(10);
}
monroneylabels.crypt = function(t, r) {
    for (var n = ""; r.length < t.length;) r += r;
    for (var e = 0; e < t.length; e++) {
        var h = t[e].charCodeAt(0),
            o = r[e].charCodeAt(0),
            g = h ^ o,
            a = g.toString("16");
        a.length < 2 && (a = "0" + a), n += a
    }
    return n
}
if (window.addEventListener) // W3C standard
{
    window.addEventListener('load', monroneylabels.begin, false);
} else if (window.attachEvent) { // Microsoft
    window.attachEvent('onload', monroneylabels.begin);
} else {
    if (window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            monroneylabels.begin();
            curronload(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = monroneylabels.begin;
    }
}
//i.e. Dealerinspire AJAX fix
document.addEventListener('lightning-vrp-did-change', function(event) {
    monroneylabels.fillStickers();
});
//i.e. end Dealerinspire

//p.s. only link to the S3 version, please!