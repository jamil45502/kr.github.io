class Init {

    constructor() {
        // setup debugging and defaults
        this.debug = false
        this.eventStackDebugging = false
        this.navigationMenus = {
            'header-item': 'header',
            'menu-top': 'header',
            'site-builder-footer': 'footer',
            'action-bar-widget--mobileMenu': 'hamburger menu'
        };
    }

    setNavigationLocation(locationClass) {
        if (this.navigationMenus[locationClass]) {
            return this.navigationMenus[locationClass];
        }
        return 'Undefined Navigation Menu'
    }

    /**
     * Function to set location based on click event
     */
    setLocation(document, obj, ele) {
        // header ctas
        if (document.querySelector('.site-builder-header') != null && ele.target.closest('.site-builder-header')) {
            return 'header'
        }

        if (document.querySelector('.header-item') != null && ele.target.closest('.header-item')) {
            return 'header'
        }

        // action bar modal ctas
        if (document.querySelector('.modal--action-bar') != null && ele.target.closest('.modal--action-bar')) {
            return 'action bar'
        }

        // vdp component ctas
        if (document.querySelector('.vdp-component-row') != null && ele.target.closest('.vdp-component-row')) {
            return 'vdp components';
        }

        // vdp sidebar ctas
        if (document.querySelector('.vdp-pricebox-cta-button') != null && ele.target.closest('.vdp-pricebox-cta-button')) {
            return 'vdp sidebar';
        }

        // vrp vehicle card ctas
        if (document.querySelector('.hit') != null && ele.target.closest('.hit')) {
            return 'vehicle card';
        }

        if (document.querySelector('.hit img') != null && document.querySelector('.hit img').contains(ele.target)) {
            return 'image'
        }
        if (document.querySelector('.hit .result-title') != null && document.querySelector('.hit .result-title').contains(ele.target)) {
            return 'title'
        }
        return 'body';
    }

    setElementType(document, obj, ele) {
        // header ctas
        if (document.querySelector('.site-builder-header') != null && ele.target.closest('.site-builder-header')) {
            return 'header'
        }

        if (document.querySelector('.header-item') != null && ele.target.closest('.header-item')) {
            return 'feader'
        }

        // footer ctas
        if (document.querySelector('.footer') != null && ele.target.closest('.footer')) {
            return 'footer'
        }

        // forms
        if (document.querySelector('form') != null && ele.target.closest('form')) {
            return 'form'
        }

        // modal ctas
        if (document.querySelector('.modal') != null && ele.target.closest('.modal')) {
            return 'popup'
        }

        // vdp / vrp component ctas
        if (document.querySelector('.vdp') != null && ele.target.closest('.vdp')) {
            return 'item-details';
        }

        if (document.querySelector('.hit') != null && ele.target.closest('.hit')) {
            return 'item-details';
        }

        return '';
    }

    setPageName() {
        let path = window.location.pathname
        let action_location = document.title
        if (path == '/') {
            action_location = 'home page'
        }
        if (path.includes('/new-vehicles') || path.includes('/used-vehicles')) {
            action_location = 'item-list'
        }
        if (path.includes('inventory/new-') || path.includes('inventory/used-')) {
            action_location = 'item'
        }
        return action_location
    }

    setPageType() {
        let path = window.location.pathname
        let page_type = 'custom'
        if (path == '/') {
            page_type = 'home'
        }
        if (path.includes('/new-vehicles') || path.includes('/used-vehicles')) {
            page_type = 'item-list'
        }
        if (path.includes('inventory/')) {
            page_type = 'item'
        }
        if (path.includes('contact')) {
            page_type = 'contact'
        }
        if (path.includes('service')) {
            page_type = 'service'
        }
        if (path.includes('parts')) {
            page_type = 'parts'
        }
        if (path.includes('vehicle-configurator')) {
            page_type = 'build_to_order'
        }
        if (path.includes('recall')) {
            page_type = 'recall'
        }
        if (path.includes('finance') || path.includes('credit-application')) {
            page_type = 'finance'
        }
        if (path.includes('trade')) {
            page_type = 'trade'
        }
        if (path.includes('employment') || path.includes('careers')) {
            page_type = 'employment'
        }
        if (path.includes('commercial')) {
            page_type = 'commercial'
        }

        return page_type
    }

    /**
     * Called from creditiq.js to set the specific action_location needed for events
     */
    setActionLocation() {
        let path = window.location.pathname
        let action_location = 'credit'

        if (path.includes('/new-vehicles') || path.includes('/used-vehicles')) {
            action_location = 'vrp'
        }
        if (path.includes('inventory/')) {
            action_location = 'vdp'
        }

        return action_location
    }

    /**
     * Function to add location to specific searches, stored in localStorage
     */
    searchLocationListener() {

        // home page advanced search
        const homePageAdvancedSearch = document.querySelector("#homepage-advanced-search button.advanced-search-btn");
        if (homePageAdvancedSearch != null) {
            homePageAdvancedSearch.addEventListener("click", function(e) {
                new Init().setLocalStorage("search", "Homepage Advanced Search")
            })
        }

        // action bar search
        const actionBarSearch = document.querySelector(".keyword-search")
        if (actionBarSearch != null) {
            actionBarSearch.addEventListener("submit", function(e) {
                new Init().setLocalStorage("search", "Action Bar Search")
            })
        }
    }

    isVehicleInfoPresent() {
        let vehicle = [];
        if (window.inventory_localization !== undefined) {
            if (window.inventory_localization.vehicle !== undefined) {
                return vehicle = new Init().getVehicleInfo(window.inventory_localization.vehicle)
            }
        }
        vehicle['vehicle_type'] = ''
        vehicle['vehicle_make'] = ''
        vehicle['vehicle_model'] = ''
        vehicle['vehicle_body'] = ''
        vehicle['vehicle_trim'] = ''
        vehicle['vehicle_color'] = ''
        vehicle['vehicle_year'] = ''
        vehicle['vehicle_stock'] = ''
        vehicle['vehicle_vin'] = ''
        vehicle['vehicle_price'] = ''
        vehicle['vehicle_category'] = ''
        vehicle['vehicle_fuel_type'] = ''
        vehicle['inventory_date'] = ''
        return vehicle
    }

    /**
     * Function to parse vehicle data 
     */
    getVehicleInfo(vehicleData) {
        const vehicle = []
        if (vehicleData.body != null) {
            vehicleData.bodystyle = vehicleData.body
        }
        if (vehicleData.original_price != null) {
            vehicleData.price = vehicleData.original_price.toString().replace('$', '').replace(',', '')
        }
        if (vehicleData.our_price != null) {
            vehicleData.price = vehicleData.our_price.toString().replace('$', '').replace(',', '')
        }
        vehicleData.price = vehicleData.price.toString()
        if (vehicleData.price.includes('span')) {
            vehicleData.price = ''
        }
        vehicleData.year = vehicleData.year.toString()
        vehicle['vehicle_type'] = (vehicleData.type != null ? new Init().textToLowerCase(vehicleData.type) : '')
        vehicle['vehicle_make'] = (vehicleData.make != null ? new Init().textToLowerCase(vehicleData.make) : '')
        vehicle['vehicle_model'] = (vehicleData.model != null ? new Init().textToLowerCase(vehicleData.model) : '')
        vehicle['vehicle_body'] = (vehicleData.bodystyle != null ? new Init().textToLowerCase(vehicleData.bodystyle) : '')
        vehicle['vehicle_trim'] = (vehicleData.trim != null ? new Init().textToLowerCase(vehicleData.trim) : '')
        vehicle['vehicle_color'] = (vehicleData.ext_color != null ? new Init().textToLowerCase(vehicleData.ext_color) : '')
        vehicle['vehicle_year'] = (vehicleData.year != null ? vehicleData.year : '')
        vehicle['vehicle_stock'] = (vehicleData.stock != null ? vehicleData.stock : '')
        vehicle['vehicle_vin'] = (vehicleData.vin != null ? vehicleData.vin : '')
        vehicle['vehicle_price'] = (vehicleData.price != null ? vehicleData.price : '')
        vehicle['vehicle_category'] = (vehicleData.category != null ? new Init().textToLowerCase(vehicleData.category) : '')
        vehicle['vehicle_fuel_type'] = (vehicleData.fueltype != null ? new Init().textToLowerCase(vehicleData.fueltype) : '')
        vehicle['inventory_date'] = ''
        return vehicle
    }

    /**
     * Function to remove localStorage variable
     */
    setLocalStorage(key, value) {
        window.localStorage.setItem(key, value)
    }

    /**
     * Function to remove localStorage variable
     */
    getLocalStorage(key) {
        return window.localStorage.getItem(key)
    }

    /**
     * Function to remove localStorage variable
     */
    removeLocalStorage(key) {
        window.localStorage.removeItem(key)
    }

    /**
     * Function to push events either to console or eventstack
     */
    pushEvent(args) {
        let googleSend = {
            'send_to': window.EventStackLead.measurementIDs
        }
        let allArgs = {
            ...args,
            ...googleSend
        }

        this.sendEvent(allArgs);
    }

    /**
     * Sends out event to console or eventstack for Radar
     */
    sendEvent(allArgs) {
        if (new Init().debug == true) {
            // Log in browser for testing
            console.group('Radar Debugging')
            console.log(allArgs)
            console.groupEnd()
        } else {
            // Add to Event Stack
            try {
                window.di_eventstack.emitEvent(allArgs)
            } catch (error) {
                console.group('Radar Events: ' + error + ' (' + allArgs.type + ')')
                console.log('Arguments: ' + JSON.stringify(allArgs))
                console.groupEnd()
            }
        }
        // Add to Data Layer
        allArgs.event = allArgs.type.replace('website.', '')
        delete allArgs.type
        window.dataLayer.push(allArgs)
        this.ascDataLayer(allArgs)
    };

    /**
     * Custom ASC data layer used on all events
     */
    ascDataLayer(args) {
        var userLang = navigator.language || navigator.userLanguage;
        let dataLayerAttributes = {
            'measurement_ids': window.EventStackLead.measurementIDs,
            'store_name': this.textToLowerCase(window.EventStackLead.dealername),
            'oem_code': window.EventStackLead.oem_code,
            'oem_brand': window.EventStackLead.oem_brand,
            'affiliation': 'dealer_inspire',
            'language': userLang,
            'currency': 'usd',
            'page_type': this.setPageType(),
            'items': (this.setPageType() == 'item-list' ? this.itemListResults() : {}),
            'platform_custom': {}
        }
        let eventName = (args.event ? ? '')
        delete args.event
        let allArgs = {
            'event': eventName,
            args
        }
        window.asc_datalayer = window.asc_datalayer || [dataLayerAttributes]
        window.asc_datalayer.events = window.asc_datalayer.events || []
        window.asc_datalayer.events.push(allArgs)
    }

    /**
     * Get a list of all vehicles on VRP based on .hits class
     */
    itemListResults() {
        var vehicleFull = []
        var results = document.querySelectorAll('#hits .result-wrap')
        if (results) {
            results.forEach(function(element) {
                if (element.dataset.vehicle) {
                    var vehicleData = {}
                    var rawData = JSON.parse(element.dataset.vehicle)
                    vehicleData.item_category = ""
                    vehicleData.item_fuel_type = rawData.fueltype
                    vehicleData.item_inventory_date = ""
                    vehicleData.item_color = rawData.ext_color
                    vehicleData.item_payment = "finance"
                    vehicleData.item_condition = rawData.type
                    vehicleData.item_year = rawData.year
                    vehicleData.item_make = rawData.make
                    vehicleData.item_model = rawData.model
                    vehicleData.item_type = rawData.bodystyle
                    vehicleData.item_variant = rawData.trim
                    vehicleData.item_id = rawData.vin
                    vehicleData.item_number = rawData.stock
                    vehicleData.item_price = rawData.price.toString()
                    vehicleFull.push(vehicleData)
                }
            })
        }
        return vehicleFull
    }

    /**
     * Convert text to title case instead of all lowercase or uppercase
     */
    toTitleCase(str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    };

    /**
     * Convert text to lower case
     */
    textToLowerCase(str) {
        return str.toLowerCase()
    }

    /**
     * Gets parents based on data- attributes
     */
    getParentNodeWithAttribute(el, tagName) {
        while (el && el.parentNode) {
            el = el.parentNode;

            if ('getAttribute' in el && el.getAttribute(tagName)) {
                return el;
            }
        }

        return null;
    }

    /**
     * Get parents if data- is not available, based on class of parent, returns array
     */
    parents(node) {
        let current = node,
            list = [];
        while (current.parentNode != null && current.parentNode != document.documentElement) {
            list.push(current.parentNode);
            current = current.parentNode;
        }
        return list
    }

    /**
     * Get element css background color 
     */
    getElementColor(e) {
        const styles = window.getComputedStyle(e.target);
        let css_color = ''
        let bgProperty = styles.getPropertyValue("background-color")

        if (bgProperty) {
            css_color = new Init().rgb2hex(styles.getPropertyValue("background-color"))
        }

        return css_color
    }

    /**
     * Convert rgb to hex 
     */
    rgb2hex(rgb) {
        if (rgb === null) {
            return ''
        }
        let rgbArr = rgb.split("(")[1].split(")")[0];
        rgbArr = rgbArr.split(",");
        var hex = rgbArr.map(function(x) {
            x = parseInt(x).toString(16);
            return (x.length == 1) ? "0" + x : x;
        })
        if (hex === null) {
            return ''
        }
        return "#" + hex.join("");
    }

}

/**
 * Add loader events, if event stack debugging is enabled, show output
 */
window.addEventListener('load', function() {
    const init = new Init()
    init.searchLocationListener()
    if (init.eventStackDebugging == true) {
        window.di_eventstack.enableDebugging()
    }
})