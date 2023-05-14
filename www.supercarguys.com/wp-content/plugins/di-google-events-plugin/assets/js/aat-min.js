window.DIGATRegistry = window.DIGATRegistry || [], DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/calculator/estimate-payment-finish.json#": function(e) {
        var a = e.custom_data.hasOwnProperty("text") ? e.custom_data.text : e.label;
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on " + e.custom_data.location + a
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/slide-click.json#": function(e) {
        var a = "Clicks on Image in Carousel on " + e.custom_data.location;
        return e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") && (a = e.custom_data.ga.label), {
            action: "Click",
            category: "Navigation",
            label: a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/slide-pagination.json#": function(e) {
        var a = e.custom_data.location,
            t = "Clicks on Image on " + a;
        if (e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label")) t = e.custom_data.ga.label;
        else if (e.custom_data.asset.hasOwnProperty("direction")) {
            t = "Clicks on " + ("previous" === e.custom_data.element.direction ? "Previous" : "Next") + " Image in Carousel on " + a
        } else {
            var n = e.custom_data.asset.hasOwnProperty("position") ? e.custom_data.asset.position : null;
            null !== n && n++, t = "Clicks on Page " + n + " in Carousel on " + a
        }
        return {
            action: "Click",
            category: "Navigation",
            label: t
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/flex-slide/slide-click.json#": function(e) {
        var a = "Clicks on Image in Carousel on " + e.custom_data.location;
        return e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") && (a = e.custom_data.ga.label), {
            action: "Click",
            category: "Navigation",
            label: a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/flex-slide/slide-interaction.json#": function(e) {
        var a = e.custom_data.location,
            t = "Clicks on Image on " + a;
        e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") ? t = e.custom_data.ga.label : t = e.custom_data.asset.hasOwnProperty("direction") ? "Clicks on " + ("previous" === e.custom_data.asset.direction ? "Previous" : "Next") + " Image in Carousel on " + a : "Clicks on " + (e.custom_data.asset.hasOwnProperty("position") ? "Image " + e.custom_data.asset.position : "Thumbnail Image") + " in Carousel on " + a;
        return {
            action: "Click",
            category: "Navigation",
            label: t
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/flex-slide/slide-pagination.json#": function(e) {
        var a = "Clicks on Carousel Pagination",
            t = e.custom_data.location;
        if (e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label")) a = e.custom_data.ga.label;
        else if (e.custom_data.asset.hasOwnProperty("direction")) {
            a = "Clicks on " + ("previous" === e.custom_data.asset.direction ? "Previous" : "Next") + " Page in Carousel on " + t
        } else {
            var n = e.custom_data.asset.hasOwnProperty("position") ? e.custom_data.asset.position : null;
            null !== n && n++, a = "Clicks on Page " + n + " in Carousel on " + t
        }
        return {
            action: "Click",
            category: "Navigation",
            label: a
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/gallery/lightbox-click.json#": function(e) {
        var a = "Clicks on Image in Carousel on " + e.custom_data.location;
        return e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") && (a = e.custom_data.ga.label), {
            action: "Click",
            category: "Navigation",
            label: a
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/owl/slide-click.json#": function(e) {
        var a = "Clicks on Image in Carousel on " + e.custom_data.location;
        return e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") && (a = e.custom_data.ga.label), {
            action: "Click",
            category: "Navigation",
            label: a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/owl/slide-interaction.json#": function(e) {
        var a = e.custom_data.location,
            t = "Clicks on Image on " + a;
        e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") ? t = e.custom_data.ga.label : t = e.custom_data.asset.hasOwnProperty("direction") ? "Clicks on " + ("previous" === e.custom_data.asset.direction ? "Previous" : "Next") + " Image in Carousel on " + a : "Clicks on " + (e.custom_data.asset.hasOwnProperty("position") ? "Image " + e.custom_data.asset.position : "Thumbnail Image") + " in Carousel on " + a;
        return {
            action: "Click",
            category: "Navigation",
            label: t
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/owl/slide-pagination.json#": function(e) {
        var a = "Clicks on Carousel Pagination",
            t = e.custom_data.location;
        if (e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label")) a = e.custom_data.ga.label;
        else if (e.custom_data.asset.hasOwnProperty("direction")) {
            a = "Clicks on " + ("previous" === e.custom_data.asset.direction ? "Previous" : "Next") + " Page in Carousel on " + t
        } else {
            var n = e.custom_data.asset.hasOwnProperty("position") ? e.custom_data.asset.position : null;
            null !== n && n++, a = "Clicks on Page " + n + " in Carousel on " + t
        }
        return {
            action: "Click",
            category: "Navigation",
            label: a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/owl/slide-popup-view.json#": function(e) {
        var a = "Clicks to Expand Carousel Image on " + e.custom_data.location;
        return e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") && (a = e.custom_data.ga.label), {
            action: "Click",
            category: "Navigation",
            label: a
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/quicklook/fullscreen-view.json#": function(e) {
        var a = "Clicks to Expand Carousel Image on " + e.custom_data.location;
        return e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") && (a = e.custom_data.ga.label), {
            action: "Click",
            category: "Navigation",
            label: a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/quicklook/slide-click.json#": function(e) {
        var a = "Clicks on Image in Carousel on " + e.custom_data.location;
        return e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") && (a = e.custom_data.ga.label), {
            action: "Click",
            category: "Navigation",
            label: a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/quicklook/slide-pagination.json#": function(e) {
        var a = "Clicks on Carousel Pagination",
            t = e.custom_data.location;
        if (e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label")) a = e.custom_data.ga.label;
        else if (e.custom_data.asset.hasOwnProperty("direction")) {
            a = "Clicks on " + ("previous" === e.custom_data.asset.direction ? "Previous" : "Next") + " Page in Carousel on " + t
        } else {
            var n = e.custom_data.asset.hasOwnProperty("position") ? e.custom_data.asset.position : null;
            null !== n && n++, a = "Clicks on Page " + n + " in Carousel on " + t
        }
        return {
            action: "Click",
            category: "Navigation",
            label: a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/quicklook/thumbnail-pagination.json#": function(e) {
        var a = e.custom_data.location,
            t = "Clicks on Image on " + a;
        e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") ? t = e.custom_data.ga.label : t = e.custom_data.asset.hasOwnProperty("direction") ? "Clicks on " + ("previous" === e.custom_data.asset.direction ? "Previous" : "Next") + " Image in Carousel on " + a : "Clicks on " + (e.custom_data.asset.hasOwnProperty("position") ? "Image " + e.custom_data.asset.position : "Thumbnail Image") + " in Carousel on " + a;
        return {
            action: "Click",
            category: "Navigation",
            label: t
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/quicklook/thumbnail-view.json#": function(e) {
        var a = e.custom_data.location,
            t = "Clicks on Image on " + a;
        e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") ? t = e.custom_data.ga.label : t = e.custom_data.asset.hasOwnProperty("direction") ? "Clicks on " + ("previous" === e.custom_data.asset.direction ? "Previous" : "Next") + " Image in Carousel on " + a : "Clicks on " + (e.custom_data.asset.hasOwnProperty("position") ? "Image " + e.custom_data.asset.position : "Thumbnail Image") + " in Carousel on " + a;
        return {
            action: "Click",
            category: "Navigation",
            label: t
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/quicklook/video-click.json#": function(e) {
        var a = e.custom_data.location,
            t = "Clicks " + e.custom_data.asset.action + " in Carousel on " + a;
        return e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") ? t = e.custom_data.ga.label : "Play" === e.custom_data.asset.action ? t = "Clicks to Begin Carousel Slideshow on " + a : "Pause" == e.custom_data.asset.action && (t = "Clicks to Stop Carousel Slideshow on " + a), {
            action: "Click",
            category: "Navigation",
            label: t
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/royal/link-click.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on 'Slider' Button"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/royal/slide-click.json#": function(e) {
        var a = "Clicks on Image in Carousel on " + e.custom_data.location;
        return e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") && (a = e.custom_data.ga.label), {
            action: "Click",
            category: "Navigation",
            label: a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/royal/slide-interaction.json#": function(e) {
        var a = e.custom_data.location,
            t = "Clicks on Image on " + a;
        e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") ? t = e.custom_data.ga.label : t = e.custom_data.asset.hasOwnProperty("direction") ? "Clicks on " + ("previous" === e.custom_data.asset.direction ? "Previous" : "Next") + " Image in Carousel on " + a : "Clicks on " + (e.custom_data.asset.hasOwnProperty("position") ? "Image " + e.custom_data.asset.position : "Thumbnail Image") + " in Carousel on " + a;
        return {
            action: "Click",
            category: "Navigation",
            label: t
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/royal/slide-pagination.json#": function(e) {
        var a = "Clicks on Carousel Pagination",
            t = e.custom_data.location;
        if (e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label")) a = e.custom_data.ga.label;
        else if (e.custom_data.asset.hasOwnProperty("direction")) {
            a = "Clicks on " + ("previous" === e.custom_data.asset.direction ? "Previous" : "Next") + " Page in Carousel on " + t
        } else {
            var n = e.custom_data.asset.hasOwnProperty("position") ? e.custom_data.asset.position : null;
            null !== n && n++, a = "Clicks on Page " + n + " in Carousel on " + t
        }
        return {
            action: "Click",
            category: "Navigation",
            label: a
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/swiper/slide-click.json#": function(e) {
        var a = "Clicks on Image in Carousel on " + e.custom_data.location;
        return e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") && (a = e.custom_data.ga.label), {
            action: "Click",
            category: "Navigation",
            label: a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/swiper/slide-interaction.json#": function(e) {
        var a = e.custom_data.location,
            t = "Clicks on Image on " + a;
        e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") ? t = e.custom_data.ga.label : t = e.custom_data.asset.hasOwnProperty("direction") ? "Clicks on " + ("previous" === e.custom_data.asset.direction ? "Previous" : "Next") + " Image in Carousel on " + a : "Clicks on " + (e.custom_data.asset.hasOwnProperty("position") ? "Image " + e.custom_data.asset.position : "Thumbnail Image") + " in Carousel on " + a;
        return {
            action: "Click",
            category: "Navigation",
            label: t
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/slider/Unknown-slide-click.json#": function(e) {
        return {
            action: "Click",
            category: "Navigation",
            label: e.custom_data.hasOwnProperty("ga") && e.custom_data.ga.hasOwnProperty("label") ? e.custom_data.ga.label : "Clicks on Image in Carousel on " + e.custom_data.location
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/directions/get-directions.json#": function(e) {
        return {
            action: "Click",
            category: "Contact",
            label: "Click to Get Directions on " + e.custom_data.platform
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/directions/get-directions.json#": function(e) {
        return {
            action: "Click",
            category: "Contact",
            label: "Click to Get Directions on " + e.custom_data.device_type
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/form/form-paging-finance.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on Finance Continue Button"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/form/form-submitted-finance.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on Finance App Submit Button"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/form/form-start.json#": function(e) {
        var a = "";
        return e.custom_data.form.type && (a = (a = e.custom_data.form.type + " ").charAt(0).toUpperCase() + a.slice(1).toLowerCase()), {
            action: "Form Start",
            category: "Interface",
            label: "Clicks to start " + a + e.custom_data.form.name + " Form Submission"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/form/form-submitted.json#": function(e) {
        var a = lo_di_ga_tracking.form_mapping[e.custom_data.form.id],
            t = lo_di_ga_tracking.form_types[a.form_type],
            n = t.name,
            o = a.title;
        if (t.record_location && (e.custom_data.hasOwnProperty("location") && "string" == typeof e.custom_data.location ? (n = e.custom_data.location + " " + n, o = e.custom_data.location + " " + o) : e.custom_data.hasOwnProperty("lead") && e.custom_data.lead.hasOwnProperty("entry") && "string" == typeof e.custom_data.lead.entry.source_url && (-1 === e.custom_data.lead.entry.source_url.indexOf("/inventory/") ? (n = "VRP " + n, o = "VRP " + o) : (n = "VDP " + n, o = "VDP " + o))), t.record_inventory_type && e.custom_data.hasOwnProperty("lead") && e.custom_data.lead.hasOwnProperty("entry") && "string" == typeof e.custom_data.lead.entry.type) {
            var r = e.custom_data.lead.entry.type;
            o = o + " - " + (r = r.charAt(0).toUpperCase() + r.slice(1).toLowerCase())
        }
        return {
            action: n,
            category: "Dealer Inspire Lead Submission",
            label: o
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/inventory-search/filter-advanced-field-change.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on " + e.custom_data.filter_type + " VRP Filter with values '" + e.custom_data.value + "'"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/inventory-search/filter-change-header-toggle.json#": function(e) {
        var a = "collapse" === e.custom_data.new_state ? "Close" : "Open";
        return {
            action: "Click",
            category: "Search",
            label: "Clicks on " + e.custom_data.location + " Search Filter " + a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/inventory-search/filter-change-option-toggle-panel.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on " + ("collapse" === e.custom_data.new_state ? "Hide" : "Show") + " All Filters"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/inventory-search/filter-change-option-toggle-panel.json#": function(e) {
        var a = "unclicked" === e.custom_data.new_state ? "Uncheck" : "Check";
        return {
            action: "Click",
            category: "Search",
            label: "Clicks on " + e.custom_data.location + " Checkbox to " + a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/inventory-search/filter-change-option.json#": function(e) {
        return {
            action: "Click",
            category: "Search",
            label: "Clicks on " + e.custom_data.location + " " + e.custom_data.filter_type + " Filter " + e.custom_data.value
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/inventory-search/order-update.json#": function(e) {
        var a = e.custom_data.hasOwnProperty("text") ? e.custom_data.text : e.custom_data.value + " " + e.custom_data.direction;
        return {
            action: "Click",
            category: "Search",
            label: "Clicks on " + e.custom_data.location + " " + a + " Sort Selection"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/inventory-search/search-button.json#": function(e) {
        return {
            action: "Click",
            category: "Search",
            label: "Clicks on Search Button"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/inventory-search/search-button.json#": function(e) {
        return {
            action: "Click",
            category: "Search",
            label: "Clicks on Search Box" + (e.custom_data.search.in_overlay ? " in Search Overlay" : "")
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/inventory-search/search-button.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on VRP View " + ("grid" === e.custom_data.type ? "Grid" : "List")
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/map/map-click.json#": function(e) {
        return {
            action: "Click",
            category: "Contact",
            label: "Clicks on Map"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/map/map-start.json#": function(e) {
        return {
            action: "Click",
            category: "Contact",
            label: "Clicks on Enter Your Starting Address Box"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/map/map-submit.json#": function(e) {
        return {
            action: "Click",
            category: "Contact",
            label: "Click to Get Directions on " + e.custom_data.platform
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/navigation/menu-navigation.json#": function(e) {
        var a = e.custom_data.navigation.position + " Nav";
        switch (e.custom_data.navigation.position) {
            case "topNav":
                a = "Nav";
                break;
            case "fatNav":
                a = "Fat Nav";
                break;
            case "bottomNav":
            case "footerNav":
                a = "Footer Nav";
                break;
            case "sidebar":
                a = "Hamburger Nav";
                break;
            case "quickNav":
                a = "Quick Nav";
                break;
            case "hamburger":
                a = "Hamburger Nav"
        }
        return {
            action: "Click",
            category: e.label,
            label: "Clicks on '" + e.custom_data.navigation.display + "' in " + a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/navigation/menu-navigation.json#": function(e) {
        var a = e.custom_data.action.context + " Nav";
        switch (e.custom_data.action.context) {
            case "topNav":
                a = "Nav";
                break;
            case "fatNav":
                a = "Fat Nav";
                break;
            case "bottomNav":
            case "footerNav":
                a = "Footer Nav";
                break;
            case "sidebar":
                a = "Hamburger Nav";
                break;
            case "quickNav":
                a = "Quick Nav";
                break;
            case "hamburger":
                a = "Hamburger Nav"
        }
        return {
            action: "Click",
            category: e.label,
            label: "Clicks on '" + e.custom_data.action.text + "' in " + a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/navigation/scroll-tracking.json#": function(e) {
        return {
            category: "Interface",
            action: "Scroll",
            label: "Scroll to " + e.custom_data.scroll.distance,
            interactive: !1
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/navigation/usp-display.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on " + ("collapse" == e.custom_data.new_state ? "Close" : "Open") + " USP Tab"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/navigation/usp-display.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on " + ("collapse" == e.custom_data.action.intent ? "Close" : "Open") + " USP Tab"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/navigation/usp-link.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on " + e.custom_data.text + " in USP"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/navigation/usp-link.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on " + e.custom_data.action.text + " in USP"
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/platform/cta.json#": function(e) {
        var a = "",
            t = e.custom_data.hasOwnProperty("location") ? e.custom_data.location + " " : "",
            n = e.custom_data.button;
        if ("CTA" === e.label) a = "Clicks on " + t + " '" + n.text + "' CTA";
        else {
            var o = "";
            n.text ? o = "'" + n.text + "' " : n.hasOwnProperty("interface") && n.interface.indexOf("slider") ? o = "'Slider' " : n.hasOwnProperty("interface") && "personalizer" === n.interface ? labbuttonTypeel = "'Personalizer' " : n.hasOwnProperty("type") && "shopping tool" == n.type && (o = "'Shopping Tool' "), a = "Clicks on " + o + "Button"
        }
        return {
            action: "Click",
            category: "Interface",
            label: a
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/platform/footer-tab.json#": function(e) {
        return {
            action: "Click",
            category: "Navigation",
            label: "Clicks on Footer " + e.custom_data.tab_type + " Tab"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/platform/footer-tab.json#": function(e) {
        return {
            action: "Click",
            category: "Navigation",
            label: "Clicks on Footer " + e.custom_data.action.context + " Tab"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/platform/play-video.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks to Play Video"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/platform/play-video.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks to Play Video"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/platform/saved-vehicles-login-button.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on Saved Vehicles Login button"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/platform/saved-vehicles.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on Saved Vehicle"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/platform/saved-vehicles.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on Saved Vehicle"
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/site-search/algolia-search-click.json#": function(e) {
        return {
            action: "Click",
            category: "Search",
            label: "Clicks on Search Box" + (e.custom_data.search.in_overlay ? " in Search Overlay" : "")
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/site-search/home-page-filter.json#": function(e) {
        return {
            action: "Click",
            category: "Search",
            label: "Clicks on " + ("search anything" === e.custom_data.filter_type ? "Home Page Search Bar" : e.custom_data.filter_type + " Search Option") + " on " + e.custom_data.platform
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/site-search/search-anything-interaction.json#": function(e) {
        return {
            action: "Click",
            category: "Search",
            label: "Clicks on Overlay Search Box on " + e.custom_data.platform
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/site-search/search-anything-magnifying-glass.json#": function(e) {
        return {
            action: "Click",
            category: "Search",
            label: "Clicks on Overlay Search Anything Submit Button on " + e.custom_data.platform
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/site-search/start-search-button.json#": function(e) {
        return {
            action: "Click",
            category: "Search",
            label: "Clicks on Search Button"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/site-search/toggle-search-overlay.json#": function(e) {
        return {
            action: "Click",
            category: "Search",
            label: "Clicks on '" + e.custom_data.new_state + "' Search Overlay"
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/telephone/call.json#": function(e) {
        return {
            action: "Click",
            category: "Contact",
            label: "Click to Call on " + e.custom_data.platform
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/telephone/call.json#": function(e) {
        return {
            action: "Click",
            category: "Contact",
            label: "Click to Call on " + e.custom_data.device_type
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/third-party/a2a-click.json#": function(e) {
        return {
            action: "Click",
            category: "Engage",
            label: "Clicks on " + e.custom_data.platform + " on VDP Social"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/third-party/a2a-click.json#": function(e) {
        return {
            action: "Click",
            category: "Engage",
            label: "Clicks on " + e.custom_data.action.intent + " on VDP Social"
        }
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/vdp/check-availability.json#": function(e) {
        var a = "custom" !== e.custom_data.tool.type ? e.custom_data.tool.type : e.custom_data.tool.text,
            t = null;
        e.custom_data.hasOwnProperty("vehicle") && e.custom_data.vehicle.hasOwnProperty("type") && (t = e.custom_data.vehicle.type), DIGAT.sendEvent({
            action: "Click",
            category: "Interface",
            label: "Clicks on '" + a + "' in " + t + " VDP Shopping Tools"
        })
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/vdp/check-availability.json#": function(e) {
        var a = e.custom_data.hasOwnProperty("vehicle") && e.custom_data.vehicle.hasOwnProperty("type") ? e.custom_data.vehicle.type + " " : "";
        DIGAT.sendEvent({
            action: "Click",
            category: "Interface",
            label: "Clicks on '" + e.custom_data.action.intent + "' in " + a + "VDP Shopping Tools"
        })
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/vdp/main-cta.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on VDP Main CTA"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/vdp/save-vehicle.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on '" + e.label + "' in " + e.custom_data.location + " Action Links"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/vdp/save-vehicle.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on 'Save Vehicle' in VDP Action Links"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/vdp/schedule-test-drive.json#": function(e) {
        "custom" !== e.custom_data.tool.type ? e.custom_data.tool.type : e.custom_data.tool.text;
        var a = null;
        e.custom_data.hasOwnProperty("vehicle") && e.custom_data.vehicle.hasOwnProperty("type") && (a = e.custom_data.vehicle.type), DIGAT.sendEvent({
            action: "Click",
            category: "Interface",
            label: "Clicks on 'Schedule Test Drive' in " + a + " VDP Shopping Tools"
        })
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/vdp/schedule-test-drive.json#": function(e) {
        var a = e.custom_data.hasOwnProperty("vehicle") && e.custom_data.vehicle.hasOwnProperty("type") ? e.custom_data.vehicle.type + " " : "";
        DIGAT.sendEvent({
            action: "Click",
            category: "Interface",
            label: "Clicks on 'Schedule Test Drive' in " + a + "VDP Shopping Tools"
        })
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/vdp/shopping-tool.json#": function(e) {
        var a = e.custom_data.hasOwnProperty("tool") ? "tool" : "button",
            t = "" !== e.custom_data[a].text ? e.custom_data[a].text : e.custom_data[a].type,
            n = "";
        e.custom_data.hasOwnProperty("vehicle") && e.custom_data.vehicle.hasOwnProperty("type") && (n = e.custom_data.vehicle.type), DIGAT.sendEvent({
            action: "Click",
            category: "Interface",
            label: "Clicks on '" + t + "' in " + n + " VDP Shopping Tools"
        })
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/vdp/view-full-motion.json#": function(e) {
        var a = null;
        e.custom_data.hasOwnProperty("vehicle") && e.custom_data.vehicle.hasOwnProperty("type") && (a = e.custom_data.vehicle.type), DIGAT.sendEvent({
            action: "Click",
            category: "Interface",
            label: "Clicks on 'Full Motion Video' in " + a + " VDP Shopping Tools"
        })
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/vdp/window-sticker.json#": function(e) {
        var a = null;
        e.custom_data.hasOwnProperty("vehicle") && e.custom_data.vehicle.hasOwnProperty("type") && (a = e.custom_data.vehicle.type), DIGAT.sendEvent({
            action: "Click",
            category: "Interface",
            label: "Clicks on 'Window Sticker' in " + a + " VDP Shopping Tools"
        })
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/vdp/window-sticker.json#": function(e) {
        var a = e.custom_data.hasOwnProperty("vehicle") && e.custom_data.vehicle.hasOwnProperty("type") ? e.custom_data.vehicle.type + " " : "";
        DIGAT.sendEvent({
            action: "Click",
            category: "Interface",
            label: "Clicks on 'Window Sticker' in " + a + " VDP Shopping Tools"
        })
    }
}]), DIGATRegistry = [].concat(DIGATRegistry, [{
    "https://schemas.dealerinspire.com/roxanne/v1/event/vrp/button.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on VRP '" + e.custom_data.button.text + "' CTA"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/vrp/cta.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on VRP '" + e.custom_data.button.text + "' CTA"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/vrp/click-thumbnail.json#": function(e) {
        return {
            action: "Click",
            category: "Navigation",
            label: "Clicks on Image on VRP"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/vrp/main-cta.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on VRP Main CTA"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/vrp/show-more.json#": function(e) {
        return {
            action: "Click",
            category: "Navigation",
            label: 'Clicks on "more" to go to the VDP'
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/vrp/show-more.json#": function(e) {
        return {
            action: "Click",
            category: "Navigation",
            label: 'Clicks on "more" to go to the VDP'
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/vrp/vehicle-action-link.json#": function(e) {
        return {
            action: "Click",
            category: "Navigation",
            label: "Clicks on '" + e.custom_data.text + "' in VRP Action Links"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/vrp/vehicle-action-link.json#": function(e) {
        return {
            action: "Click",
            category: "Navigation",
            label: "Clicks on '" + e.custom_data.action.text + "' in VRP Action Links"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/vrp/vehicle-details.json#": function(e) {
        return {
            action: "Click",
            category: "Navigation",
            label: "Clicks on View Details on VRP"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/vrp/vehicle-details.json#": function(e) {
        return {
            action: "Click",
            category: "Navigation",
            label: "Clicks on View Details on VRP"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1/event/vrp/vehicle-save.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on 'Save Vehicle' in VRP Action Links"
        }
    }
}, {
    "https://schemas.dealerinspire.com/roxanne/v1.1/event/vrp/vehicle-save.json#": function(e) {
        return {
            action: "Click",
            category: "Interface",
            label: "Clicks on 'Save Vehicle' in VRP Action Links"
        }
    }
}]), window.DIGATRegistry = window.DIGATRegistry || [];
var DIGAT = {
    isConsoleLogEmitting: !0,
    DIDatalayerReady: !1,
    DIDatalayer: null,
    eventQueue: [],
    currentData: {},
    currentGAParameters: {
        category: null,
        action: null,
        label: null,
        interactive: null
    },
    noCaptureNotice: "No capture has been categorized for this data",
    productSource: "",
    registeredCallbacks: {},
    init: function() {
        void 0 !== lo_di_ga_tracking.env && "production" == lo_di_ga_tracking.env && (DIGAT.isConsoleLogEmitting = !1), window.dispatchEvent(new CustomEvent("di_init_broadcast", {
            detail: {
                product: {
                    name: "Arnold Action Tracking",
                    version: lo_di_ga_tracking.version,
                    contact: "#roxanne-support"
                }
            }
        })), DIGAT.console.group("Initiating Arnold Action Tracking", !0), DIGAT.console.log("Initiating"), DIGAT.DIDatalayerReady ? DIGAT.bindToDIEvent() : DIGAT.console.log("DI Data Layer is not ready", "warn"), DIGAT.console.groupEnd()
    },
    rememberData: function(e) {
        arguments.length > 0 ? DIGAT.currentData = e : DIGAT.currentData = {}
    },
    setEventAction: function(e) {
        DIGAT.currentGAParameters.action = e
    },
    bindToDIEvent: function() {
        window.addEventListener("di_event", function(e, a) {
            if (void 0 === e.detail || "object" != typeof e.detail) return DIGAT.console.log("No event data was provided"), void console.log(e);
            if (e.detail.hasOwnProperty("custom_data") && "object" != typeof e.detail.custom_data && (e.detail.custom_data = JSON.parse(e.detail.custom_data)), DIGAT.checkModuleIsAllowed(e.detail)) {
                window.DIGATRegistry.length > 0 && DIGAT.addCallbacksFromRegistry();
                var t = DIGAT.findRegisteredEventVersion(e.detail);
                t ? DIGAT.triggerEventCapture(e.detail, t) : DIGAT.triggerLegacyEventCapture(e.detail)
            }
        })
    },
    addCallbacksFromRegistry: function() {
        window.DIGATRegistry.forEach(function(e) {
            for (var a in e) {
                var t = e[a];
                if ("function" == typeof t) {
                    var n = DIGAT.getSchemaElements(a),
                        o = n.product,
                        r = n.event,
                        c = n.version;
                    DIGAT.registeredCallbacks[o] = DIGAT.registeredCallbacks[o] || [], DIGAT.registeredCallbacks.hasOwnProperty(o) || (DIGAT.registeredCallbacks[o] = {}), DIGAT.registeredCallbacks[o].hasOwnProperty(r) || (DIGAT.registeredCallbacks[o][r] = {}), DIGAT.registeredCallbacks[o][r].hasOwnProperty(c) || (DIGAT.registeredCallbacks[o][r][c] = []);
                    var i = !0;
                    DIGAT.registeredCallbacks[o][r][c].every(function(e) {
                        if (DIGAT.callbacksMatch(t, e)) return i = !1, !1
                    }), i && DIGAT.registeredCallbacks[o][r][c].push(t)
                }
            }
        }), window.DIGATRegistry = []
    },
    getSchemaElements: function(e) {
        var a = /(http[s]?:.+)\/v([0-9.]+)\/(.*)/gm.exec(e);
        return {
            product: a[1],
            version: a[2],
            event: a[3]
        }
    },
    callbacksMatch: function(e, a) {
        var t = /['"\s]/gm;
        return (e = e.toString().replace(t, "")) === (a = a.toString().replace(t, ""))
    },
    findRegisteredEventVersion: function(e) {
        if (!e.hasOwnProperty("reference")) return !1;
        DIGAT.console.log("Finding events for " + e.reference);
        var a = DIGAT.getSchemaElements(e.reference),
            t = a.product,
            n = a.event,
            o = a.version;
        if (!DIGAT.registeredCallbacks.hasOwnProperty(t)) return !1;
        if (!DIGAT.registeredCallbacks[t].hasOwnProperty(n)) return !1;
        if (DIGAT.registeredCallbacks[t][n].hasOwnProperty(o)) return o;
        DIGAT.console.log("Cannot find an event handler for this version (" + o + ") of the event. Searching for compatible versions.");
        for (var r = Object.keys(DIGAT.registeredCallbacks[t][n]).sort(), c = r.length - 1; c >= 0; c--)
            if (DIGAT.compareVersions(o, r[c]) && DIGAT.registeredCallbacks[t][n].hasOwnProperty(r[c])) return DIGAT.console.log("Found compatible event version (" + r[c] + ")."), r[c];
        return !1
    },
    triggerEventCapture: function(e, a) {
        DIGAT.console.group("Capturing events for " + e.reference, !0);
        var t = DIGAT.getSchemaElements(e.reference),
            n = t.product,
            o = t.event,
            r = t.version,
            c = DIGAT.registeredCallbacks[n][o][a];
        for (var i in r != a && DIGAT.console.log("Using alternative events registered to " + n + "/v" + a + "/" + o), c) {
            var s = c[i](e);
            DIGAT.sendEvent(s)
        }
        DIGAT.console.groupEnd()
    },
    compareVersions: function(e, a) {
        "use strict";
        for (var t, n, o = e.split("."), r = a.split("."), c = Math.max(o.length, r.length), i = 0, s = 0; s < c && !i; s++)(t = parseInt(o[s], 10) || 0) < (n = parseInt(r[s], 10) || 0) && (i = 1), t > n && (i = -1);
        return 0 >= i
    },
    triggerLegacyEventCapture: function(e) {
        delete e.data_layer, DIGAT.console.log(e.name + " triggered"), ga(function() {
            DIGAT.console.log(e.name + " capture");
            var a = e.name;
            switch (void 0 !== e.label && e.label && (a = a + " " + e.label), DIGAT.console.group("Capturing " + a + " event", !0), DIGAT.rememberData(e), DIGAT.console.table(e), DIGAT.determineProductSource(), e.name) {
                case "click":
                    DIGAT.legacyEvent.capture.click();
                    break;
                case "change":
                    DIGAT.legacyEvent.capture.change();
                    break;
                case "form_submit":
                case "Form Submission":
                    DIGAT.legacyEvent.capture.formSubmit();
                    break;
                case "DI Vehicle Configurator":
                    DIGAT.legacyEvent.capture.vcEvent();
                    break;
                default:
                    DIGAT.console.log(DIGAT.noCaptureNotice)
            }
            DIGAT.console.groupEnd()
        })
    },
    checkModuleIsAllowed: function(e) {
        if (0 === lo_di_ga_tracking.allowed_modules.length) return !0;
        if (!e.hasOwnProperty("custom_data") || !e.custom_data.hasOwnProperty("source")) return !1;
        var a = typeof e.custom_data.source,
            t = null;
        return "string" === a ? t = e.custom_data.source : "object" === a && e.custom_data.source.hasOwnProperty("name") && (t = e.custom_data.source.name), lo_di_ga_tracking.allowed_modules.indexOf(t) > -1
    },
    determineProductSource: function() {
        DIGAT.productSource = "", DIGAT.currentData.hasOwnProperty("custom_data") && (DIGAT.currentData.custom_data.hasOwnProperty("source") ? DIGAT.currentData.custom_data.source.hasOwnProperty("name") ? DIGAT.productSource = DIGAT.currentData.custom_data.source.name : DIGAT.productSource = DIGAT.currentData.custom_data.source : DIGAT.currentData.custom_data.hasOwnProperty("product") && DIGAT.currentData.custom_data.product.hasOwnProperty("name") && (DIGAT.productSource = DIGAT.currentData.custom_data.product.name)), DIGAT.console.log("Product Source discovered", DIGAT.productSource)
    },
    send: function(e, a) {
        for (var t in DIGAT.console.log("Attempting to send event to Analytics", "info"), parametersToSend = DIGAT.currentGAParameters, a) void 0 !== parametersToSend[t] && (parametersToSend[t] = a[t]);
        var n = DIGAT.fieldsObject.generate(e, parametersToSend);
        window.dispatchEvent(new CustomEvent("di_arnold", {
            detail: {
                hitType: e,
                parameters: parametersToSend
            }
        })), DIGAT.currentGAParameters = {
            category: null,
            action: null,
            label: null,
            interactive: null
        }, DIGAT.console.group("Sending event to Analytics", !0);
        try {
            ga(function() {
                DIGAT.console.log(n);
                for (var e = 0; e < lo_di_ga_tracking.account_ids.length; e++) lo_di_ga_tracking.account_ids.length > 0 && DIGAT.console.log("Account ID: " + lo_di_ga_tracking.account_ids[e]), ga(lo_di_ga_tracking.namespace + "_" + e + ".send", n)
            })
        } catch (e) {
            DIGAT.console.log("Could not send ga event: " + e, "error")
        }
        DIGAT.console.table({
            fieldsObject: n
        }), DIGAT.rememberData(), DIGAT.console.groupEnd()
    },
    sendEvent: function(e) {
        DIGAT.send("event", e)
    },
    compare: function(e, a, t) {
        var n = !1;
        return arguments.length > 3 && arguments[3] && (n = !0), DIGAT.DIDatalayer.compare(e, a, t, n)
    },
    compareArray: function(e, a) {
        var t = !1;
        return arguments.length > 2 && arguments[2] && (t = !0), DIGAT.DIDatalayer.compareArray(e, a, t)
    },
    compareToRecord: function(e, a, t, n) {
        if (DIGAT.compare(e, a, t, !0)) {
            var o = DIGAT.record[n];
            "function" == typeof o && o.apply(null, fnparams)
        }
    },
    fieldsObject: {
        generate: function(e, a) {
            DIGAT.console.group("Generating fieldsObject from arguments", !0), DIGAT.console.log("Incoming arguments", "info"), DIGAT.console.table({
                hitType: e,
                parameters: a
            });
            var t = {
                hitType: e,
                nonInteraction: 0
            };
            for (var n in a) "category" == n && (t.eventCategory = a[n]), "action" == n && (t.eventAction = a[n]), "label" == n && (t.eventLabel = a[n]), "interactive" == n && !1 === a[n] && (t.nonInteraction = 1);
            return DIGAT.console.log("Generated fieldsObject", "info"), DIGAT.console.table(t), DIGAT.console.groupEnd(), t
        }
    },
    validation: {
        hitType: function(e) {
            return e = e.toLowerCase(), -1 !== jQuery.inArray(e, ["pageview", "screenview", "event", "transaction", "item", "social", "exception", "timing"]) ? e : (DIGAT.console.log("The hitType, " + e + " is invalid.", "warn"), !1)
        }
    },
    console: {
        showNotices: function() {
            return !(void 0 === DIGAT.isConsoleLogEmitting || !DIGAT.isConsoleLogEmitting)
        },
        log: function(e) {
            if (!DIGAT.console.showNotices()) return !1;
            "object" == typeof e && (e = JSON.stringify(e)), e = "Arnold Action Tracking: " + e;
            if ("undefined" == typeof console || void 0 === console.log) return console = {}, !1;
            arguments.length > 1 ? "info" == arguments[1] ? console.info(e) : "warn" == arguments[1] ? console.warn(e) : "error" == arguments[1] && console.error(e) : console.log(e)
        },
        table: function(e) {
            if (!DIGAT.console.showNotices()) return !1;
            "undefined" != typeof console && void 0 !== console.table ? console.table(e) : DIGAT.console.log(message)
        },
        group: function(e) {
            if (!DIGAT.console.showNotices()) return !1;
            e = "Arnold Action Tracking: " + e;
            var a = !(void 0 === arguments[1] || !arguments[1]);
            "undefined" != typeof console && void 0 !== console.group ? a ? console.groupCollapsed(e) : console.group(e) : DIGAT.console.log(e)
        },
        groupEnd: function() {
            if (!DIGAT.console.showNotices()) return !1;
            "undefined" != typeof console && void 0 !== console.groupEnd && console.groupEnd()
        }
    },
    legacyEvent: {
        capture: {
            click: function() {
                DIGAT.console.group("Processing click " + DIGAT.currentData.label, !0), DIGAT.setEventAction("Click"), "Dealer Rater" == DIGAT.productSource ? DIGAT.legacyEvent.record.dealerRater.click() : "Action Bar" == DIGAT.productSource ? DIGAT.legacyEvent.record.actionBar.click() : "inventory-display-plugin" == DIGAT.productSource ? DIGAT.legacyEvent.record.inventoryDisplay.click() : "Online Shopper Plugin" == DIGAT.productSource ? DIGAT.legacyEvent.record.onlineShopper.click() : DIGAT.currentData.label.indexOf("CTA") >= 0 || "Button" == DIGAT.currentData.label ? DIGAT.legacyEvent.record.roxanne.click.cta() : DIGAT.currentData.label.indexOf(" Tab") >= 0 ? DIGAT.legacyEvent.record.roxanne.click.tab() : DIGAT.legacyEvent.record.roxanne.click.other(), DIGAT.console.groupEnd()
            },
            change: function() {
                DIGAT.console.group("Processing change " + DIGAT.currentData.label, !0), DIGAT.setEventAction("Change"), "inventory-display-plugin" == DIGAT.productSource ? DIGAT.legacyEvent.record.inventoryDisplay.change() : DIGAT.console.log(DIGAT.noCaptureNotice), DIGAT.console.groupEnd()
            },
            formSubmit: function() {
                DIGAT.console.group("Processing form_submit", !0), "Action Bar" === DIGAT.productSource ? DIGAT.legacyEvent.record.actionBar.form_submit() : DIGAT.console.log(DIGAT.noCaptureNotice), DIGAT.console.groupEnd()
            },
            vcEvent: function() {
                DIGAT.console.group("Processing Vehicle Configurator Event", !0), DIGAT.legacyEvent.record.vehicleConfigurator.click(), DIGAT.console.groupEnd()
            }
        },
        record: {
            actionBar: {
                click: function() {
                    if ("Trigger Action Bar Item" == DIGAT.currentData.label) {
                        var e = DIGAT.currentData.custom_data.button.label,
                            a = DIGAT.currentData.custom_data.page_type;
                        DIGAT.sendEvent({
                            category: "Action Bar",
                            label: "Clicks on " + e + " - " + a
                        })
                    }
                },
                form_submit: function() {
                    var e = DIGAT.currentData.custom_data.form.name,
                        a = DIGAT.currentData.custom_data.page_type;
                    DIGAT.sendEvent({
                        action: "Form Submission",
                        category: "Action Bar",
                        label: "Form Submission on " + e + " - " + a
                    })
                }
            },
            dealerRater: {
                click: function() {
                    if ("Show Specialists" == DIGAT.currentData.label) DIGAT.sendEvent({
                        category: "Dealer Rater",
                        label: "Clicks on Show Our Specialists"
                    });
                    else if ("Show Salesman Information" == DIGAT.currentData.label) {
                        var e = "Salesperson";
                        void 0 !== DIGAT.currentData.custom_data.salesman && void 0 !== DIGAT.currentData.custom_data.salesman.name && (e = DIGAT.currentData.custom_data.salesman.name), DIGAT.sendEvent({
                            category: "Dealer Rater",
                            label: "Clicks on " + e
                        })
                    }
                }
            },
            inventoryDisplay: {
                change: function() {
                    if (-1 != DIGAT.currentData.label.indexOf(" Search")) "Inventory Search" == DIGAT.currentData.label ? DIGAT.sendEvent({
                        category: "Search",
                        label: "Updates Lightning VRP Search - " + DIGAT.currentData.custom_data.text
                    }) : "Inventory Search - No Results" == DIGAT.currentData.label && DIGAT.sendEvent({
                        category: "Inventory Search",
                        label: "Zero Inventory Results - " + DIGAT.currentData.custom_data.results.query
                    });
                    else if (DIGAT.currentData.label.indexOf(" Filter") > -1 && "Inventory Slider Filter" == DIGAT.currentData.label) {
                        var e = "$" + DIGAT.currentData.custom_data.filter.from + "-$" + DIGAT.currentData.custom_data.filter.to,
                            a = DIGAT.currentData.custom_data.filter.field ? DIGAT.currentData.custom_data.filter.field + " - " : "";
                        DIGAT.sendEvent({
                            category: "Search",
                            action: "Click",
                            label: "Clicks on Lightning VRP - Inventory Slider Filter - " + a + e
                        })
                    }
                },
                click: function() {
                    if ("VRP Details" == DIGAT.currentData.label) DIGAT.sendEvent({
                        category: "Navigation",
                        label: "Clicks on View Details on VRP"
                    });
                    else if (DIGAT.currentData.label.indexOf(" Toggle") > -1)
                        if ("Inventory Type Toggle" == DIGAT.currentData.label) DIGAT.sendEvent({
                            category: "Search",
                            label: "Clicks on Lightning VRP - Inventory Type Toggle - " + DIGAT.currentData.custom_data.filter.value + " - " + DIGAT.currentData.custom_data.filter.text
                        });
                        else if ("Inventory Payment Search Toggle" == DIGAT.currentData.label) DIGAT.sendEvent({
                        category: "Search",
                        label: "Clicks on Lightning VRP - Inventory Payment Search Toggle - " + DIGAT.currentData.custom_data.text
                    });
                    else if ("Inventory Facet Toggle" == DIGAT.currentData.label) {
                        var e = "yes" == DIGAT.currentData.custom_data.filter.enabled ? "Show" : "Hide";
                        DIGAT.sendEvent({
                            category: "Search",
                            label: "Clicks on Lightning VRP - Inventory Facet Toggle - " + DIGAT.currentData.custom_data.filter.field + " - " + e + " - " + DIGAT.currentData.custom_data.filter.value
                        })
                    } else if ("Inventory Feature Toggle" == DIGAT.currentData.label) {
                        e = "yes" == DIGAT.currentData.custom_data.filter.enabled ? "Show" : "Hide";
                        DIGAT.sendEvent({
                            category: "Search",
                            label: "Clicks on Lightning VRP - Inventory Feature Toggle - " + e + " - " + DIGAT.currentData.custom_data.filter.value
                        })
                    } else "Inventory View Toggle" == DIGAT.currentData.label && DIGAT.sendEvent({
                        category: "Search",
                        label: "Clicks on Lightning VRP " + DIGAT.currentData.custom_data.view + " view"
                    });
                    else if (DIGAT.currentData.label.indexOf(" Filter") > -1)
                        if ("Inventory Slider Filter" == DIGAT.currentData.label) {
                            var a = "$" + DIGAT.currentData.custom_data.filter.from + "-$" + DIGAT.currentData.custom_data.filter.to,
                                t = DIGAT.currentData.custom_data.filter.field ? DIGAT.currentData.custom_data.filter.field + " - " : "";
                            DIGAT.sendEvent({
                                category: "Search",
                                label: "Clicks on Lightning VRP - Inventory Slider Filter - " + t + a
                            })
                        } else "Inventory Remove Filter" == DIGAT.currentData.label && DIGAT.sendEvent({
                            category: "Search",
                            label: "Clicks on Lightning VRP - Inventory Remove Filter - " + DIGAT.currentData.custom_data.filter.field
                        });
                    else if (DIGAT.currentData.label.indexOf(" Search") > -1)
                        if ("Inventory Show Facet Search" == DIGAT.currentData.label) {
                            e = "yes" == DIGAT.currentData.custom_data.enabled ? "Show" : "Hide";
                            DIGAT.sendEvent({
                                category: "Search",
                                label: "Clicks on Lightning VRP - Inventory Show Facet Search - " + e + " - " + DIGAT.currentData.custom_data.text
                            })
                        } else "Inventory Search" == DIGAT.currentData.label ? DIGAT.sendEvent({
                            category: "Search",
                            label: "Clicks on Lightning VRP Search Bar"
                        }) : "Inventory Clear Search" == DIGAT.currentData.label && DIGAT.sendEvent({
                            category: "Search",
                            label: "Clicks on Lightning VRP Clear Search"
                        });
                    else if (DIGAT.currentData.label.indexOf(" Page") > -1) "Inventory Page" == DIGAT.currentData.label ? DIGAT.sendEvent({
                        category: "Search",
                        label: "Clicks on Lightning VRP - Pagination - Page " + DIGAT.currentData.custom_data.new_page
                    }) : "Inventory Next Page" == DIGAT.currentData.label ? DIGAT.sendEvent({
                        category: "Search",
                        label: "Clicks on Lightning VRP - Next Page - Page " + DIGAT.currentData.custom_data.new_page
                    }) : "Inventory Previous Page" == DIGAT.currentData.label && DIGAT.sendEvent({
                        category: "Search",
                        label: "Clicks on Lightning VRP - Previous Page - Page " + DIGAT.currentData.custom_data.new_page
                    });
                    else if ("Clicks on Form CTA" == DIGAT.currentData.label) DIGAT.sendEvent({
                        category: "Interface",
                        label: "Clicks on VRP Main CTA on LVRP"
                    });
                    else if ("OS Show Payment Options" == DIGAT.currentData.label) DIGAT.sendEvent({
                        category: "Interface",
                        label: "Clicks on Show Payment Options Button on LVRP"
                    });
                    else if ("OS Explore Payment Options" == DIGAT.currentData.label) DIGAT.sendEvent({
                        category: "Interface",
                        label: "Clicks on Explore Payment Options Button on LVRP"
                    });
                    else if ("Clicks on URL CTA" == DIGAT.currentData.label || "Clicks on Virtual Tour Bot Flow CTA" == DIGAT.currentData.label || "Clicks on Trade Pending Bot Flow CTA" == DIGAT.currentData.label) {
                        var n = DIGAT.currentData.custom_data.buttonLabel ? "'" + DIGAT.currentData.custom_data.buttonLabel + "' " : "";
                        DIGAT.sendEvent({
                            category: "Interface",
                            label: "Clicks on " + n + "Button on LVRP"
                        })
                    } else "Clicks on Unlock Price CTA" == DIGAT.currentData.label ? DIGAT.sendEvent({
                        category: "Interface",
                        label: "Clicks on Unlock Your Price on LVRP"
                    }) : "Advanced Pricing Modal CTA" == DIGAT.currentData.label ? DIGAT.sendEvent({
                        category: "Interface",
                        label: "Clicks on Advanced Pricing Button on LVRP"
                    }) : "Customize Payment Modal CTA" == DIGAT.currentData.label ? DIGAT.sendEvent({
                        category: "Interface",
                        label: "Clicks on Customize Payment Button on LVRP"
                    }) : "Vehicle Details" == DIGAT.currentData.label ? DIGAT.sendEvent({
                        category: "Interface",
                        label: DIGAT.currentData.custom_data.label
                    }) : DIGAT.console.log(DIGAT.noCaptureNotice)
                }
            },
            onlineShopper: {
                click: function() {
                    "CTA" == DIGAT.currentData.label && DIGAT.sendEvent({
                        category: "Navigation",
                        label: DIGAT.currentData.custom_data.page_type + " - Clicks on Online Shopper Button"
                    })
                }
            },
            roxanne: {
                click: {
                    cta: function() {
                        "Online Shopper CTA" == DIGAT.currentData.label && DIGAT.sendEvent({
                            category: "Navigation",
                            label: DIGAT.currentData.custom_data.location + " - Clicks on Online Shopper Button"
                        })
                    },
                    other: function() {
                        "OS Show Payment Options" == DIGAT.currentData.label && DIGAT.sendEvent({
                            category: "Interface",
                            label: "Clicks on Show Payment Options CTA"
                        })
                    },
                    tab: function() {
                        if ("Conversations Tab" == DIGAT.currentData.label) {
                            var e = "Chat",
                                a = DIGAT.currentData.custom_data.provider.device_type.charAt(0).toUpperCase() + DIGAT.currentData.custom_data.provider.device_type.slice(1),
                                t = "Button";
                            "sms" == DIGAT.currentData.custom_data.provider.tab_type && (e = "SMS"), "Mobile" == a && (t = "Tab"), DIGAT.sendEvent({
                                category: "Navigation",
                                label: "Clicks on Conversations " + e + " " + t + " on " + a
                            })
                        }
                    }
                }
            },
            vehicleConfigurator: {
                click: function() {
                    var e = DIGAT.currentData.name,
                        a = DIGAT.currentData.label,
                        t = DIGAT.currentData.custom_data;
                    switch (a) {
                        case "Vehicle Configurator - Unlock Summary":
                            DIGAT.sendEvent({
                                category: "Dealer Inspire Lead Submission",
                                action: "Sales",
                                label: a
                            });
                            break;
                        case "Build and Price models loaded":
                            DIGAT.sendEvent({
                                category: e,
                                action: "Load",
                                label: a
                            });
                            break;
                        case "Exterior color changed":
                        case "Interior color changed":
                        case "Requesting quote":
                        case "Requesting appointment":
                        case "Viewing inventory":
                            DIGAT.sendEvent({
                                category: e,
                                action: "Click",
                                label: a
                            });
                            break;
                        case "Category changed":
                            DIGAT.sendEvent({
                                category: e,
                                action: "Click",
                                label: "Category changed to " + t.category
                            });
                            break;
                        case "Model selected":
                            DIGAT.sendEvent({
                                category: e,
                                action: "Click",
                                label: a + ": " + t.vehicle.year + " " + t.vehicle.make + " " + t.vehicle.model
                            });
                            break;
                        case "Trim selected":
                            DIGAT.sendEvent({
                                category: e,
                                action: "Click",
                                label: a + ": " + t.vehicle.year + " " + t.vehicle.make + " " + t.vehicle.model + " " + t.vehicle.trim
                            });
                            break;
                        case "Step changed":
                            DIGAT.sendEvent({
                                category: e,
                                action: "Click",
                                label: a + " from " + t.step.previous + " to " + t.step.next
                            });
                            break;
                        case "Powertrain selected":
                            DIGAT.sendEvent({
                                category: e,
                                action: "Click",
                                label: a + ": " + t.vehicle.year + " " + t.vehicle.make + " " + t.vehicle.model + " " + t.vehicle.trim + " " + t.vehicle.powertrain
                            });
                            break;
                        case "Colors selected":
                            DIGAT.sendEvent({
                                category: e,
                                action: "Click",
                                label: a + ": " + t.exterior_color + " exterior and " + t.interior_color
                            });
                            break;
                        case "Packages selected":
                            DIGAT.sendEvent({
                                category: e,
                                action: "Click",
                                label: a + ": " + t.packages.join(", ")
                            });
                            break;
                        case "Summary viewed":
                            DIGAT.sendEvent({
                                category: e,
                                action: "Summary",
                                label: a + ": " + t.vehicle.year + " " + t.vehicle.make + " " + t.vehicle.model + " " + t.vehicle.trim + " " + t.vehicle.powertrain + " with " + t.vehicle.packages.join(", ") + " configured at $" + t.vehicle.price.toLocaleString()
                            });
                            break;
                        default:
                            DIGAT.console.log(DIGAT.noCaptureNotice)
                    }
                }
            }
        }
    }
};

function LaunchDIGAT() {
    if (DIGAT.DIDatalayerReady) try {
        DIGAT.init()
    } catch (e) {
        DIGAT.console.log("DIGAT initiation exception ..." + e, "warn")
    }
}
jQuery(document).bind("di_datalayer_ready", function(e, a) {
    DIGAT.DIDatalayerReady = !0, DIGAT.DIDatalayer = a, LaunchDIGAT()
});