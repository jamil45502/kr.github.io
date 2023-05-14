(() => {
    "use strict";
    var e = {
            361: (e, t) => {
                t["conversations.cta_click"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.initiation_location && (s = "initiation_location")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.initiation_location && "string" != typeof t.initiation_location) return e.errors = [{
                            instancePath: r + "/initiation_location",
                            schemaPath: "#/properties/initiation_location/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        }], !1
                    }
                    return e.errors = null, !0
                }, t["conversations.engagement"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.visitor_engagement && (s = "visitor_engagement")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.visitor_engagement && "string" != typeof t.visitor_engagement) return e.errors = [{
                            instancePath: r + "/visitor_engagement",
                            schemaPath: "#/properties/visitor_engagement/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        }], !1
                    }
                    return e.errors = null, !0
                }, t.page_click = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.clientX && (s = "clientX") || void 0 === t.clientY && (s = "clientY") || void 0 === t.path && (s = "path") || void 0 === t.target && (s = "target")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.clientX) {
                            let s = t.clientX;
                            const a = 0;
                            if ("number" != typeof s || !isFinite(s)) return e.errors = [{
                                instancePath: r + "/clientX",
                                schemaPath: "#/properties/clientX/type",
                                keyword: "type",
                                params: {
                                    type: "number"
                                },
                                message: "must be number"
                            }], !1;
                            var o = 0 === a
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.clientY) {
                                let s = t.clientY;
                                const a = 0;
                                if ("number" != typeof s || !isFinite(s)) return e.errors = [{
                                    instancePath: r + "/clientY",
                                    schemaPath: "#/properties/clientY/type",
                                    keyword: "type",
                                    params: {
                                        type: "number"
                                    },
                                    message: "must be number"
                                }], !1;
                                o = 0 === a
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.path) {
                                    const s = 0;
                                    if (!Array.isArray(t.path)) return e.errors = [{
                                        instancePath: r + "/path",
                                        schemaPath: "#/properties/path/type",
                                        keyword: "type",
                                        params: {
                                            type: "array"
                                        },
                                        message: "must be array"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o)
                                    if (void 0 !== t.target) {
                                        let s = t.target;
                                        const a = 0;
                                        if (!s || "object" != typeof s || Array.isArray(s)) return e.errors = [{
                                            instancePath: r + "/target",
                                            schemaPath: "#/properties/target/type",
                                            keyword: "type",
                                            params: {
                                                type: "object"
                                            },
                                            message: "must be object"
                                        }], !1;
                                        o = 0 === a
                                    } else o = !0
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t.page_load = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.url && (s = "url")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.url && "string" != typeof t.url) return e.errors = [{
                            instancePath: r + "/url",
                            schemaPath: "#/properties/url/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        }], !1
                    }
                    return e.errors = null, !0
                }, t["website.action_bar_click"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.element_text && (s = "element_text")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.element_text && "string" != typeof t.element_text) return e.errors = [{
                            instancePath: r + "/element_text",
                            schemaPath: "#/properties/element_text/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        }], !1
                    }
                    return e.errors = null, !0
                }, t["website.asc_click_to_call"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.comm_phone_number && (s = "comm_phone_number") || void 0 === t.department && (s = "department") || void 0 === t.page_type && (s = "page_type") || void 0 === t.affiliation && (s = "affiliation")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.comm_phone_number) {
                            const s = 0;
                            if ("string" != typeof t.comm_phone_number) return e.errors = [{
                                instancePath: r + "/comm_phone_number",
                                schemaPath: "#/properties/comm_phone_number/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.department) {
                                const s = 0;
                                if ("string" != typeof t.department) return e.errors = [{
                                    instancePath: r + "/department",
                                    schemaPath: "#/properties/department/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.page_type) {
                                    const s = 0;
                                    if ("string" != typeof t.page_type) return e.errors = [{
                                        instancePath: r + "/page_type",
                                        schemaPath: "#/properties/page_type/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o)
                                    if (void 0 !== t.affiliation) {
                                        const s = 0;
                                        if ("string" != typeof t.affiliation) return e.errors = [{
                                            instancePath: r + "/affiliation",
                                            schemaPath: "#/properties/affiliation/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_cta_interaction"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.page_type && (s = "page_type") || void 0 === t.action_location && (s = "action_location")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.page_type) {
                            const s = 0;
                            if ("string" != typeof t.page_type) return e.errors = [{
                                instancePath: r + "/page_type",
                                schemaPath: "#/properties/page_type/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o)
                            if (void 0 !== t.action_location) {
                                const s = 0;
                                if ("string" != typeof t.action_location) return e.errors = [{
                                    instancePath: r + "/action_location",
                                    schemaPath: "#/properties/action_location/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0
                    }
                    return e.errors = null, !0
                }, t["website.asc_element_configuration"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.page_type && (s = "page_type")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.page_type) {
                            const s = 0;
                            if ("string" != typeof t.page_type) return e.errors = [{
                                instancePath: r + "/page_type",
                                schemaPath: "#/properties/page_type/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.item_results) {
                                const s = 0;
                                if ("string" != typeof t.item_results) return e.errors = [{
                                    instancePath: r + "/item_results",
                                    schemaPath: "#/properties/item_results/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.item_package) {
                                    const s = 0;
                                    if ("string" != typeof t.item_package) return e.errors = [{
                                        instancePath: r + "/item_package",
                                        schemaPath: "#/properties/item_package/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.item_interior_color) {
                                        const s = 0;
                                        if ("string" != typeof t.item_interior_color) return e.errors = [{
                                            instancePath: r + "/item_interior_color",
                                            schemaPath: "#/properties/item_interior_color/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o) {
                                        if (void 0 !== t.item_color) {
                                            const s = 0;
                                            if ("string" != typeof t.item_color) return e.errors = [{
                                                instancePath: r + "/item_color",
                                                schemaPath: "#/properties/item_color/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0;
                                        if (o) {
                                            if (void 0 !== t.item_power_train) {
                                                const s = 0;
                                                if ("string" != typeof t.item_power_train) return e.errors = [{
                                                    instancePath: r + "/item_power_train",
                                                    schemaPath: "#/properties/item_power_train/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                o = 0 === s
                                            } else o = !0;
                                            if (o) {
                                                if (void 0 !== t.item_type) {
                                                    const s = 0;
                                                    if ("string" != typeof t.item_type) return e.errors = [{
                                                        instancePath: r + "/item_type",
                                                        schemaPath: "#/properties/item_type/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    o = 0 === s
                                                } else o = !0;
                                                if (o) {
                                                    if (void 0 !== t.item_variant) {
                                                        const s = 0;
                                                        if ("string" != typeof t.item_variant) return e.errors = [{
                                                            instancePath: r + "/item_variant",
                                                            schemaPath: "#/properties/item_variant/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        o = 0 === s
                                                    } else o = !0;
                                                    if (o) {
                                                        if (void 0 !== t.item_make) {
                                                            const s = 0;
                                                            if ("string" != typeof t.item_make) return e.errors = [{
                                                                instancePath: r + "/item_make",
                                                                schemaPath: "#/properties/item_make/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string"
                                                            }], !1;
                                                            o = 0 === s
                                                        } else o = !0;
                                                        if (o) {
                                                            if (void 0 !== t.item_model) {
                                                                const s = 0;
                                                                if ("string" != typeof t.item_model) return e.errors = [{
                                                                    instancePath: r + "/item_model",
                                                                    schemaPath: "#/properties/item_model/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "string"
                                                                    },
                                                                    message: "must be string"
                                                                }], !1;
                                                                o = 0 === s
                                                            } else o = !0;
                                                            if (o) {
                                                                if (void 0 !== t.item_year) {
                                                                    const s = 0;
                                                                    if ("string" != typeof t.item_year) return e.errors = [{
                                                                        instancePath: r + "/item_year",
                                                                        schemaPath: "#/properties/item_year/type",
                                                                        keyword: "type",
                                                                        params: {
                                                                            type: "string"
                                                                        },
                                                                        message: "must be string"
                                                                    }], !1;
                                                                    o = 0 === s
                                                                } else o = !0;
                                                                if (o) {
                                                                    if (void 0 !== t.item_condition) {
                                                                        const s = 0;
                                                                        if ("string" != typeof t.item_condition) return e.errors = [{
                                                                            instancePath: r + "/item_condition",
                                                                            schemaPath: "#/properties/item_condition/type",
                                                                            keyword: "type",
                                                                            params: {
                                                                                type: "string"
                                                                            },
                                                                            message: "must be string"
                                                                        }], !1;
                                                                        o = 0 === s
                                                                    } else o = !0;
                                                                    if (o) {
                                                                        if (void 0 !== t.item_category) {
                                                                            const s = 0;
                                                                            if ("string" != typeof t.item_category) return e.errors = [{
                                                                                instancePath: r + "/item_category",
                                                                                schemaPath: "#/properties/item_category/type",
                                                                                keyword: "type",
                                                                                params: {
                                                                                    type: "string"
                                                                                },
                                                                                message: "must be string"
                                                                            }], !1;
                                                                            o = 0 === s
                                                                        } else o = !0;
                                                                        if (o) {
                                                                            if (void 0 !== t.item_fuel_type) {
                                                                                const s = 0;
                                                                                if ("string" != typeof t.item_fuel_type) return e.errors = [{
                                                                                    instancePath: r + "/item_fuel_type",
                                                                                    schemaPath: "#/properties/item_fuel_type/type",
                                                                                    keyword: "type",
                                                                                    params: {
                                                                                        type: "string"
                                                                                    },
                                                                                    message: "must be string"
                                                                                }], !1;
                                                                                o = 0 === s
                                                                            } else o = !0;
                                                                            if (o) {
                                                                                if (void 0 !== t.item_price) {
                                                                                    const s = 0;
                                                                                    if ("string" != typeof t.item_price) return e.errors = [{
                                                                                        instancePath: r + "/item_price",
                                                                                        schemaPath: "#/properties/item_price/type",
                                                                                        keyword: "type",
                                                                                        params: {
                                                                                            type: "string"
                                                                                        },
                                                                                        message: "must be string"
                                                                                    }], !1;
                                                                                    o = 0 === s
                                                                                } else o = !0;
                                                                                if (o) {
                                                                                    if (void 0 !== t.event_action_result) {
                                                                                        const s = 0;
                                                                                        if ("string" != typeof t.event_action_result) return e.errors = [{
                                                                                            instancePath: r + "/event_action_result",
                                                                                            schemaPath: "#/properties/event_action_result/type",
                                                                                            keyword: "type",
                                                                                            params: {
                                                                                                type: "string"
                                                                                            },
                                                                                            message: "must be string"
                                                                                        }], !1;
                                                                                        o = 0 === s
                                                                                    } else o = !0;
                                                                                    if (o) {
                                                                                        if (void 0 !== t.event_action) {
                                                                                            const s = 0;
                                                                                            if ("string" != typeof t.event_action) return e.errors = [{
                                                                                                instancePath: r + "/event_action",
                                                                                                schemaPath: "#/properties/event_action/type",
                                                                                                keyword: "type",
                                                                                                params: {
                                                                                                    type: "string"
                                                                                                },
                                                                                                message: "must be string"
                                                                                            }], !1;
                                                                                            o = 0 === s
                                                                                        } else o = !0;
                                                                                        if (o) {
                                                                                            if (void 0 !== t.product_name) {
                                                                                                const s = 0;
                                                                                                if ("string" != typeof t.product_name) return e.errors = [{
                                                                                                    instancePath: r + "/product_name",
                                                                                                    schemaPath: "#/properties/product_name/type",
                                                                                                    keyword: "type",
                                                                                                    params: {
                                                                                                        type: "string"
                                                                                                    },
                                                                                                    message: "must be string"
                                                                                                }], !1;
                                                                                                o = 0 === s
                                                                                            } else o = !0;
                                                                                            if (o) {
                                                                                                if (void 0 !== t.element_state) {
                                                                                                    const s = 0;
                                                                                                    if ("string" != typeof t.element_state) return e.errors = [{
                                                                                                        instancePath: r + "/element_state",
                                                                                                        schemaPath: "#/properties/element_state/type",
                                                                                                        keyword: "type",
                                                                                                        params: {
                                                                                                            type: "string"
                                                                                                        },
                                                                                                        message: "must be string"
                                                                                                    }], !1;
                                                                                                    o = 0 === s
                                                                                                } else o = !0;
                                                                                                if (o) {
                                                                                                    if (void 0 !== t.element_type) {
                                                                                                        const s = 0;
                                                                                                        if ("string" != typeof t.element_type) return e.errors = [{
                                                                                                            instancePath: r + "/element_type",
                                                                                                            schemaPath: "#/properties/element_type/type",
                                                                                                            keyword: "type",
                                                                                                            params: {
                                                                                                                type: "string"
                                                                                                            },
                                                                                                            message: "must be string"
                                                                                                        }], !1;
                                                                                                        o = 0 === s
                                                                                                    } else o = !0;
                                                                                                    if (o) {
                                                                                                        if (void 0 !== t.element_subtype) {
                                                                                                            const s = 0;
                                                                                                            if ("string" != typeof t.element_subtype) return e.errors = [{
                                                                                                                instancePath: r + "/element_subtype",
                                                                                                                schemaPath: "#/properties/element_subtype/type",
                                                                                                                keyword: "type",
                                                                                                                params: {
                                                                                                                    type: "string"
                                                                                                                },
                                                                                                                message: "must be string"
                                                                                                            }], !1;
                                                                                                            o = 0 === s
                                                                                                        } else o = !0;
                                                                                                        if (o) {
                                                                                                            if (void 0 !== t.element_title) {
                                                                                                                const s = 0;
                                                                                                                if ("string" != typeof t.element_title) return e.errors = [{
                                                                                                                    instancePath: r + "/element_title",
                                                                                                                    schemaPath: "#/properties/element_title/type",
                                                                                                                    keyword: "type",
                                                                                                                    params: {
                                                                                                                        type: "string"
                                                                                                                    },
                                                                                                                    message: "must be string"
                                                                                                                }], !1;
                                                                                                                o = 0 === s
                                                                                                            } else o = !0;
                                                                                                            if (o) {
                                                                                                                if (void 0 !== t.element_text) {
                                                                                                                    const s = 0;
                                                                                                                    if ("string" != typeof t.element_text) return e.errors = [{
                                                                                                                        instancePath: r + "/element_text",
                                                                                                                        schemaPath: "#/properties/element_text/type",
                                                                                                                        keyword: "type",
                                                                                                                        params: {
                                                                                                                            type: "string"
                                                                                                                        },
                                                                                                                        message: "must be string"
                                                                                                                    }], !1;
                                                                                                                    o = 0 === s
                                                                                                                } else o = !0;
                                                                                                                if (o) {
                                                                                                                    if (void 0 !== t.element_value) {
                                                                                                                        const s = 0;
                                                                                                                        if ("string" != typeof t.element_value) return e.errors = [{
                                                                                                                            instancePath: r + "/element_value",
                                                                                                                            schemaPath: "#/properties/element_value/type",
                                                                                                                            keyword: "type",
                                                                                                                            params: {
                                                                                                                                type: "string"
                                                                                                                            },
                                                                                                                            message: "must be string"
                                                                                                                        }], !1;
                                                                                                                        o = 0 === s
                                                                                                                    } else o = !0;
                                                                                                                    if (o) {
                                                                                                                        if (void 0 !== t.element_color) {
                                                                                                                            const s = 0;
                                                                                                                            if ("string" != typeof t.element_color) return e.errors = [{
                                                                                                                                instancePath: r + "/element_color",
                                                                                                                                schemaPath: "#/properties/element_color/type",
                                                                                                                                keyword: "type",
                                                                                                                                params: {
                                                                                                                                    type: "string"
                                                                                                                                },
                                                                                                                                message: "must be string"
                                                                                                                            }], !1;
                                                                                                                            o = 0 === s
                                                                                                                        } else o = !0;
                                                                                                                        if (o) {
                                                                                                                            if (void 0 !== t.element_position) {
                                                                                                                                const s = 0;
                                                                                                                                if ("string" != typeof t.element_position) return e.errors = [{
                                                                                                                                    instancePath: r + "/element_position",
                                                                                                                                    schemaPath: "#/properties/element_position/type",
                                                                                                                                    keyword: "type",
                                                                                                                                    params: {
                                                                                                                                        type: "string"
                                                                                                                                    },
                                                                                                                                    message: "must be string"
                                                                                                                                }], !1;
                                                                                                                                o = 0 === s
                                                                                                                            } else o = !0;
                                                                                                                            if (o)
                                                                                                                                if (void 0 !== t.element_order) {
                                                                                                                                    const s = 0;
                                                                                                                                    if ("string" != typeof t.element_order) return e.errors = [{
                                                                                                                                        instancePath: r + "/element_order",
                                                                                                                                        schemaPath: "#/properties/element_order/type",
                                                                                                                                        keyword: "type",
                                                                                                                                        params: {
                                                                                                                                            type: "string"
                                                                                                                                        },
                                                                                                                                        message: "must be string"
                                                                                                                                    }], !1;
                                                                                                                                    o = 0 === s
                                                                                                                                } else o = !0
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_element_texts"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.element_text && (s = "element_text") || void 0 === t.element_text_selection && (s = "element_text_selection") || void 0 === t.page_type && (s = "page_type") || void 0 === t.element_value && (s = "element_value") || void 0 === t.element_state && (s = "element_state")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.element_text) {
                            const s = 0;
                            if ("string" != typeof t.element_text) return e.errors = [{
                                instancePath: r + "/element_text",
                                schemaPath: "#/properties/element_text/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.element_text_selection) {
                                const s = 0;
                                if ("string" != typeof t.element_text_selection) return e.errors = [{
                                    instancePath: r + "/element_text_selection",
                                    schemaPath: "#/properties/element_text_selection/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.page_type) {
                                    const s = 0;
                                    if ("string" != typeof t.page_type) return e.errors = [{
                                        instancePath: r + "/page_type",
                                        schemaPath: "#/properties/page_type/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.element_value) {
                                        const s = 0;
                                        if ("string" != typeof t.element_value) return e.errors = [{
                                            instancePath: r + "/element_value",
                                            schemaPath: "#/properties/element_value/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o)
                                        if (void 0 !== t.element_state) {
                                            const s = 0;
                                            if ("string" != typeof t.element_state) return e.errors = [{
                                                instancePath: r + "/element_state",
                                                schemaPath: "#/properties/element_state/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_form_engagement"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.form_name && (s = "form_name") || void 0 === t.department && (s = "department") || void 0 === t.page_type && (s = "page_type") || void 0 === t.comm_type && (s = "comm_type") || void 0 === t.comm_outcome && (s = "comm_outcome") || void 0 === t.element_text && (s = "element_text") || void 0 === t.form_type && (s = "form_type")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.lead_name) {
                            const s = 0;
                            if ("string" != typeof t.lead_name) return e.errors = [{
                                instancePath: r + "/lead_name",
                                schemaPath: "#/properties/lead_name/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.form_category) {
                                const s = 0;
                                if ("string" != typeof t.form_category) return e.errors = [{
                                    instancePath: r + "/form_category",
                                    schemaPath: "#/properties/form_category/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.form_name) {
                                    const s = 0;
                                    if ("string" != typeof t.form_name) return e.errors = [{
                                        instancePath: r + "/form_name",
                                        schemaPath: "#/properties/form_name/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.department) {
                                        const s = 0;
                                        if ("string" != typeof t.department) return e.errors = [{
                                            instancePath: r + "/department",
                                            schemaPath: "#/properties/department/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o) {
                                        if (void 0 !== t.page_type) {
                                            const s = 0;
                                            if ("string" != typeof t.page_type) return e.errors = [{
                                                instancePath: r + "/page_type",
                                                schemaPath: "#/properties/page_type/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0;
                                        if (o) {
                                            if (void 0 !== t.comm_type) {
                                                const s = 0;
                                                if ("string" != typeof t.comm_type) return e.errors = [{
                                                    instancePath: r + "/comm_type",
                                                    schemaPath: "#/properties/comm_type/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                o = 0 === s
                                            } else o = !0;
                                            if (o) {
                                                if (void 0 !== t.comm_outcome) {
                                                    const s = 0;
                                                    if ("string" != typeof t.comm_outcome) return e.errors = [{
                                                        instancePath: r + "/comm_outcome",
                                                        schemaPath: "#/properties/comm_outcome/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    o = 0 === s
                                                } else o = !0;
                                                if (o) {
                                                    if (void 0 !== t.element_text) {
                                                        const s = 0;
                                                        if ("string" != typeof t.element_text) return e.errors = [{
                                                            instancePath: r + "/element_text",
                                                            schemaPath: "#/properties/element_text/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        o = 0 === s
                                                    } else o = !0;
                                                    if (o)
                                                        if (void 0 !== t.form_type) {
                                                            const s = 0;
                                                            if ("string" != typeof t.form_type) return e.errors = [{
                                                                instancePath: r + "/form_type",
                                                                schemaPath: "#/properties/form_type/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string"
                                                            }], !1;
                                                            o = 0 === s
                                                        } else o = !0
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_form_submission"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.submission_id && (s = "submission_id") || void 0 === t.form_name && (s = "form_name") || void 0 === t.department && (s = "department") || void 0 === t.page_location && (s = "page_location") || void 0 === t.page_type && (s = "page_type") || void 0 === t.comm_type && (s = "comm_type") || void 0 === t.comm_status && (s = "comm_status") || void 0 === t.element_text && (s = "element_text") || void 0 === t.form_type && (s = "form_type")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.submission_id) {
                            const s = 0;
                            if ("string" != typeof t.submission_id) return e.errors = [{
                                instancePath: r + "/submission_id",
                                schemaPath: "#/properties/submission_id/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.form_name) {
                                const s = 0;
                                if ("string" != typeof t.form_name) return e.errors = [{
                                    instancePath: r + "/form_name",
                                    schemaPath: "#/properties/form_name/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.department) {
                                    const s = 0;
                                    if ("string" != typeof t.department) return e.errors = [{
                                        instancePath: r + "/department",
                                        schemaPath: "#/properties/department/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.page_location) {
                                        const s = 0;
                                        if ("string" != typeof t.page_location) return e.errors = [{
                                            instancePath: r + "/page_location",
                                            schemaPath: "#/properties/page_location/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o) {
                                        if (void 0 !== t.page_type) {
                                            const s = 0;
                                            if ("string" != typeof t.page_type) return e.errors = [{
                                                instancePath: r + "/page_type",
                                                schemaPath: "#/properties/page_type/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0;
                                        if (o) {
                                            if (void 0 !== t.comm_type) {
                                                const s = 0;
                                                if ("string" != typeof t.comm_type) return e.errors = [{
                                                    instancePath: r + "/comm_type",
                                                    schemaPath: "#/properties/comm_type/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                o = 0 === s
                                            } else o = !0;
                                            if (o) {
                                                if (void 0 !== t.comm_status) {
                                                    const s = 0;
                                                    if ("string" != typeof t.comm_status) return e.errors = [{
                                                        instancePath: r + "/comm_status",
                                                        schemaPath: "#/properties/comm_status/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    o = 0 === s
                                                } else o = !0;
                                                if (o) {
                                                    if (void 0 !== t.element_text) {
                                                        const s = 0;
                                                        if ("string" != typeof t.element_text) return e.errors = [{
                                                            instancePath: r + "/element_text",
                                                            schemaPath: "#/properties/element_text/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        o = 0 === s
                                                    } else o = !0;
                                                    if (o)
                                                        if (void 0 !== t.form_type) {
                                                            const s = 0;
                                                            if ("string" != typeof t.form_type) return e.errors = [{
                                                                instancePath: r + "/form_type",
                                                                schemaPath: "#/properties/form_type/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string"
                                                            }], !1;
                                                            o = 0 === s
                                                        } else o = !0
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_form_submission_other"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.form_name && (s = "form_name") || void 0 === t.department && (s = "department") || void 0 === t.page_location && (s = "page_location") || void 0 === t.page_type && (s = "page_type") || void 0 === t.comm_type && (s = "comm_type") || void 0 === t.comm_status && (s = "comm_status") || void 0 === t.element_text && (s = "element_text") || void 0 === t.form_type && (s = "form_type")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.submission_id) {
                            const s = 0;
                            if ("string" != typeof t.submission_id) return e.errors = [{
                                instancePath: r + "/submission_id",
                                schemaPath: "#/properties/submission_id/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.form_name) {
                                const s = 0;
                                if ("string" != typeof t.form_name) return e.errors = [{
                                    instancePath: r + "/form_name",
                                    schemaPath: "#/properties/form_name/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.department) {
                                    const s = 0;
                                    if ("string" != typeof t.department) return e.errors = [{
                                        instancePath: r + "/department",
                                        schemaPath: "#/properties/department/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.page_location) {
                                        const s = 0;
                                        if ("string" != typeof t.page_location) return e.errors = [{
                                            instancePath: r + "/page_location",
                                            schemaPath: "#/properties/page_location/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o) {
                                        if (void 0 !== t.page_type) {
                                            const s = 0;
                                            if ("string" != typeof t.page_type) return e.errors = [{
                                                instancePath: r + "/page_type",
                                                schemaPath: "#/properties/page_type/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0;
                                        if (o) {
                                            if (void 0 !== t.comm_type) {
                                                const s = 0;
                                                if ("string" != typeof t.comm_type) return e.errors = [{
                                                    instancePath: r + "/comm_type",
                                                    schemaPath: "#/properties/comm_type/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                o = 0 === s
                                            } else o = !0;
                                            if (o) {
                                                if (void 0 !== t.comm_status) {
                                                    const s = 0;
                                                    if ("string" != typeof t.comm_status) return e.errors = [{
                                                        instancePath: r + "/comm_status",
                                                        schemaPath: "#/properties/comm_status/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    o = 0 === s
                                                } else o = !0;
                                                if (o) {
                                                    if (void 0 !== t.element_text) {
                                                        const s = 0;
                                                        if ("string" != typeof t.element_text) return e.errors = [{
                                                            instancePath: r + "/element_text",
                                                            schemaPath: "#/properties/element_text/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        o = 0 === s
                                                    } else o = !0;
                                                    if (o)
                                                        if (void 0 !== t.form_type) {
                                                            const s = 0;
                                                            if ("string" != typeof t.form_type) return e.errors = [{
                                                                instancePath: r + "/form_type",
                                                                schemaPath: "#/properties/form_type/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string"
                                                            }], !1;
                                                            o = 0 === s
                                                        } else o = !0
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_form_submission_parts"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.submission_id && (s = "submission_id") || void 0 === t.form_name && (s = "form_name") || void 0 === t.department && (s = "department") || void 0 === t.page_location && (s = "page_location") || void 0 === t.page_type && (s = "page_type") || void 0 === t.comm_type && (s = "comm_type") || void 0 === t.comm_status && (s = "comm_status") || void 0 === t.element_text && (s = "element_text") || void 0 === t.form_type && (s = "form_type")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.submission_id) {
                            const s = 0;
                            if ("string" != typeof t.submission_id) return e.errors = [{
                                instancePath: r + "/submission_id",
                                schemaPath: "#/properties/submission_id/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.form_name) {
                                const s = 0;
                                if ("string" != typeof t.form_name) return e.errors = [{
                                    instancePath: r + "/form_name",
                                    schemaPath: "#/properties/form_name/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.department) {
                                    const s = 0;
                                    if ("string" != typeof t.department) return e.errors = [{
                                        instancePath: r + "/department",
                                        schemaPath: "#/properties/department/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.page_location) {
                                        const s = 0;
                                        if ("string" != typeof t.page_location) return e.errors = [{
                                            instancePath: r + "/page_location",
                                            schemaPath: "#/properties/page_location/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o) {
                                        if (void 0 !== t.page_type) {
                                            const s = 0;
                                            if ("string" != typeof t.page_type) return e.errors = [{
                                                instancePath: r + "/page_type",
                                                schemaPath: "#/properties/page_type/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0;
                                        if (o) {
                                            if (void 0 !== t.comm_type) {
                                                const s = 0;
                                                if ("string" != typeof t.comm_type) return e.errors = [{
                                                    instancePath: r + "/comm_type",
                                                    schemaPath: "#/properties/comm_type/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                o = 0 === s
                                            } else o = !0;
                                            if (o) {
                                                if (void 0 !== t.comm_status) {
                                                    const s = 0;
                                                    if ("string" != typeof t.comm_status) return e.errors = [{
                                                        instancePath: r + "/comm_status",
                                                        schemaPath: "#/properties/comm_status/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    o = 0 === s
                                                } else o = !0;
                                                if (o) {
                                                    if (void 0 !== t.element_text) {
                                                        const s = 0;
                                                        if ("string" != typeof t.element_text) return e.errors = [{
                                                            instancePath: r + "/element_text",
                                                            schemaPath: "#/properties/element_text/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        o = 0 === s
                                                    } else o = !0;
                                                    if (o)
                                                        if (void 0 !== t.form_type) {
                                                            const s = 0;
                                                            if ("string" != typeof t.form_type) return e.errors = [{
                                                                instancePath: r + "/form_type",
                                                                schemaPath: "#/properties/form_type/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string"
                                                            }], !1;
                                                            o = 0 === s
                                                        } else o = !0
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_form_submission_sales"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.submission_id && (s = "submission_id") || void 0 === t.form_name && (s = "form_name") || void 0 === t.department && (s = "department") || void 0 === t.page_location && (s = "page_location") || void 0 === t.page_type && (s = "page_type") || void 0 === t.comm_type && (s = "comm_type") || void 0 === t.comm_status && (s = "comm_status") || void 0 === t.element_text && (s = "element_text") || void 0 === t.form_type && (s = "form_type")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.submission_id) {
                            const s = 0;
                            if ("string" != typeof t.submission_id) return e.errors = [{
                                instancePath: r + "/submission_id",
                                schemaPath: "#/properties/submission_id/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.form_name) {
                                const s = 0;
                                if ("string" != typeof t.form_name) return e.errors = [{
                                    instancePath: r + "/form_name",
                                    schemaPath: "#/properties/form_name/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.department) {
                                    const s = 0;
                                    if ("string" != typeof t.department) return e.errors = [{
                                        instancePath: r + "/department",
                                        schemaPath: "#/properties/department/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.page_location) {
                                        const s = 0;
                                        if ("string" != typeof t.page_location) return e.errors = [{
                                            instancePath: r + "/page_location",
                                            schemaPath: "#/properties/page_location/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o) {
                                        if (void 0 !== t.page_type) {
                                            const s = 0;
                                            if ("string" != typeof t.page_type) return e.errors = [{
                                                instancePath: r + "/page_type",
                                                schemaPath: "#/properties/page_type/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0;
                                        if (o) {
                                            if (void 0 !== t.comm_type) {
                                                const s = 0;
                                                if ("string" != typeof t.comm_type) return e.errors = [{
                                                    instancePath: r + "/comm_type",
                                                    schemaPath: "#/properties/comm_type/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                o = 0 === s
                                            } else o = !0;
                                            if (o) {
                                                if (void 0 !== t.comm_status) {
                                                    const s = 0;
                                                    if ("string" != typeof t.comm_status) return e.errors = [{
                                                        instancePath: r + "/comm_status",
                                                        schemaPath: "#/properties/comm_status/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    o = 0 === s
                                                } else o = !0;
                                                if (o) {
                                                    if (void 0 !== t.element_text) {
                                                        const s = 0;
                                                        if ("string" != typeof t.element_text) return e.errors = [{
                                                            instancePath: r + "/element_text",
                                                            schemaPath: "#/properties/element_text/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        o = 0 === s
                                                    } else o = !0;
                                                    if (o)
                                                        if (void 0 !== t.form_type) {
                                                            const s = 0;
                                                            if ("string" != typeof t.form_type) return e.errors = [{
                                                                instancePath: r + "/form_type",
                                                                schemaPath: "#/properties/form_type/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string"
                                                            }], !1;
                                                            o = 0 === s
                                                        } else o = !0
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_form_submission_sales_appt"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.submission_id && (s = "submission_id") || void 0 === t.form_name && (s = "form_name") || void 0 === t.department && (s = "department") || void 0 === t.page_location && (s = "page_location") || void 0 === t.page_type && (s = "page_type") || void 0 === t.comm_type && (s = "comm_type") || void 0 === t.comm_status && (s = "comm_status") || void 0 === t.element_text && (s = "element_text") || void 0 === t.form_type && (s = "form_type")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.submission_id) {
                            const s = 0;
                            if ("string" != typeof t.submission_id) return e.errors = [{
                                instancePath: r + "/submission_id",
                                schemaPath: "#/properties/submission_id/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.form_name) {
                                const s = 0;
                                if ("string" != typeof t.form_name) return e.errors = [{
                                    instancePath: r + "/form_name",
                                    schemaPath: "#/properties/form_name/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.department) {
                                    const s = 0;
                                    if ("string" != typeof t.department) return e.errors = [{
                                        instancePath: r + "/department",
                                        schemaPath: "#/properties/department/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.page_location) {
                                        const s = 0;
                                        if ("string" != typeof t.page_location) return e.errors = [{
                                            instancePath: r + "/page_location",
                                            schemaPath: "#/properties/page_location/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o) {
                                        if (void 0 !== t.page_type) {
                                            const s = 0;
                                            if ("string" != typeof t.page_type) return e.errors = [{
                                                instancePath: r + "/page_type",
                                                schemaPath: "#/properties/page_type/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0;
                                        if (o) {
                                            if (void 0 !== t.comm_type) {
                                                const s = 0;
                                                if ("string" != typeof t.comm_type) return e.errors = [{
                                                    instancePath: r + "/comm_type",
                                                    schemaPath: "#/properties/comm_type/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                o = 0 === s
                                            } else o = !0;
                                            if (o) {
                                                if (void 0 !== t.comm_status) {
                                                    const s = 0;
                                                    if ("string" != typeof t.comm_status) return e.errors = [{
                                                        instancePath: r + "/comm_status",
                                                        schemaPath: "#/properties/comm_status/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    o = 0 === s
                                                } else o = !0;
                                                if (o) {
                                                    if (void 0 !== t.element_text) {
                                                        const s = 0;
                                                        if ("string" != typeof t.element_text) return e.errors = [{
                                                            instancePath: r + "/element_text",
                                                            schemaPath: "#/properties/element_text/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        o = 0 === s
                                                    } else o = !0;
                                                    if (o)
                                                        if (void 0 !== t.form_type) {
                                                            const s = 0;
                                                            if ("string" != typeof t.form_type) return e.errors = [{
                                                                instancePath: r + "/form_type",
                                                                schemaPath: "#/properties/form_type/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string"
                                                            }], !1;
                                                            o = 0 === s
                                                        } else o = !0
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_form_submission_service"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.submission_id && (s = "submission_id") || void 0 === t.form_name && (s = "form_name") || void 0 === t.department && (s = "department") || void 0 === t.page_location && (s = "page_location") || void 0 === t.page_type && (s = "page_type") || void 0 === t.comm_type && (s = "comm_type") || void 0 === t.comm_status && (s = "comm_status") || void 0 === t.element_text && (s = "element_text") || void 0 === t.form_type && (s = "form_type")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.submission_id) {
                            const s = 0;
                            if ("string" != typeof t.submission_id) return e.errors = [{
                                instancePath: r + "/submission_id",
                                schemaPath: "#/properties/submission_id/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.form_name) {
                                const s = 0;
                                if ("string" != typeof t.form_name) return e.errors = [{
                                    instancePath: r + "/form_name",
                                    schemaPath: "#/properties/form_name/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.department) {
                                    const s = 0;
                                    if ("string" != typeof t.department) return e.errors = [{
                                        instancePath: r + "/department",
                                        schemaPath: "#/properties/department/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.page_location) {
                                        const s = 0;
                                        if ("string" != typeof t.page_location) return e.errors = [{
                                            instancePath: r + "/page_location",
                                            schemaPath: "#/properties/page_location/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o) {
                                        if (void 0 !== t.page_type) {
                                            const s = 0;
                                            if ("string" != typeof t.page_type) return e.errors = [{
                                                instancePath: r + "/page_type",
                                                schemaPath: "#/properties/page_type/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0;
                                        if (o) {
                                            if (void 0 !== t.comm_type) {
                                                const s = 0;
                                                if ("string" != typeof t.comm_type) return e.errors = [{
                                                    instancePath: r + "/comm_type",
                                                    schemaPath: "#/properties/comm_type/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                o = 0 === s
                                            } else o = !0;
                                            if (o) {
                                                if (void 0 !== t.comm_status) {
                                                    const s = 0;
                                                    if ("string" != typeof t.comm_status) return e.errors = [{
                                                        instancePath: r + "/comm_status",
                                                        schemaPath: "#/properties/comm_status/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    o = 0 === s
                                                } else o = !0;
                                                if (o) {
                                                    if (void 0 !== t.element_text) {
                                                        const s = 0;
                                                        if ("string" != typeof t.element_text) return e.errors = [{
                                                            instancePath: r + "/element_text",
                                                            schemaPath: "#/properties/element_text/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        o = 0 === s
                                                    } else o = !0;
                                                    if (o)
                                                        if (void 0 !== t.form_type) {
                                                            const s = 0;
                                                            if ("string" != typeof t.form_type) return e.errors = [{
                                                                instancePath: r + "/form_type",
                                                                schemaPath: "#/properties/form_type/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string"
                                                            }], !1;
                                                            o = 0 === s
                                                        } else o = !0
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_form_submission_service_appt"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.submission_id && (s = "submission_id") || void 0 === t.form_name && (s = "form_name") || void 0 === t.department && (s = "department") || void 0 === t.page_location && (s = "page_location") || void 0 === t.page_type && (s = "page_type") || void 0 === t.comm_type && (s = "comm_type") || void 0 === t.comm_status && (s = "comm_status") || void 0 === t.element_text && (s = "element_text") || void 0 === t.form_type && (s = "form_type")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.submission_id) {
                            const s = 0;
                            if ("string" != typeof t.submission_id) return e.errors = [{
                                instancePath: r + "/submission_id",
                                schemaPath: "#/properties/submission_id/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.form_name) {
                                const s = 0;
                                if ("string" != typeof t.form_name) return e.errors = [{
                                    instancePath: r + "/form_name",
                                    schemaPath: "#/properties/form_name/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.department) {
                                    const s = 0;
                                    if ("string" != typeof t.department) return e.errors = [{
                                        instancePath: r + "/department",
                                        schemaPath: "#/properties/department/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.page_location) {
                                        const s = 0;
                                        if ("string" != typeof t.page_location) return e.errors = [{
                                            instancePath: r + "/page_location",
                                            schemaPath: "#/properties/page_location/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o) {
                                        if (void 0 !== t.page_type) {
                                            const s = 0;
                                            if ("string" != typeof t.page_type) return e.errors = [{
                                                instancePath: r + "/page_type",
                                                schemaPath: "#/properties/page_type/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0;
                                        if (o) {
                                            if (void 0 !== t.comm_type) {
                                                const s = 0;
                                                if ("string" != typeof t.comm_type) return e.errors = [{
                                                    instancePath: r + "/comm_type",
                                                    schemaPath: "#/properties/comm_type/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                o = 0 === s
                                            } else o = !0;
                                            if (o) {
                                                if (void 0 !== t.comm_status) {
                                                    const s = 0;
                                                    if ("string" != typeof t.comm_status) return e.errors = [{
                                                        instancePath: r + "/comm_status",
                                                        schemaPath: "#/properties/comm_status/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    o = 0 === s
                                                } else o = !0;
                                                if (o) {
                                                    if (void 0 !== t.element_text) {
                                                        const s = 0;
                                                        if ("string" != typeof t.element_text) return e.errors = [{
                                                            instancePath: r + "/element_text",
                                                            schemaPath: "#/properties/element_text/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        o = 0 === s
                                                    } else o = !0;
                                                    if (o)
                                                        if (void 0 !== t.form_type) {
                                                            const s = 0;
                                                            if ("string" != typeof t.form_type) return e.errors = [{
                                                                instancePath: r + "/form_type",
                                                                schemaPath: "#/properties/form_type/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string"
                                                            }], !1;
                                                            o = 0 === s
                                                        } else o = !0
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_item_pageview"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.item_condition && (s = "item_condition") || void 0 === t.item_make && (s = "item_make") || void 0 === t.item_model && (s = "item_model") || void 0 === t.item_type && (s = "item_type") || void 0 === t.item_variant && (s = "item_variant") || void 0 === t.item_color && (s = "item_color") || void 0 === t.item_year && (s = "item_year") || void 0 === t.item_number && (s = "item_number") || void 0 === t.item_id && (s = "item_id") || void 0 === t.item_inventory_date && (s = "item_inventory_date") || void 0 === t.item_price && (s = "item_price") || void 0 === t.item_category && (s = "item_category") || void 0 === t.item_fuel_type && (s = "item_fuel_type") || void 0 === t.page_type && (s = "page_type") || void 0 === t.error_code && (s = "error_code")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.page_type) {
                            const s = 0;
                            if ("string" != typeof t.page_type) return e.errors = [{
                                instancePath: r + "/page_type",
                                schemaPath: "#/properties/page_type/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.error_code) {
                                const s = 0;
                                if ("string" != typeof t.error_code) return e.errors = [{
                                    instancePath: r + "/error_code",
                                    schemaPath: "#/properties/error_code/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.itemlist_condition) {
                                    const s = 0;
                                    if ("string" != typeof t.itemlist_condition) return e.errors = [{
                                        instancePath: r + "/itemlist_condition",
                                        schemaPath: "#/properties/itemlist_condition/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.item_make) {
                                        const s = 0;
                                        if ("string" != typeof t.item_make) return e.errors = [{
                                            instancePath: r + "/item_make",
                                            schemaPath: "#/properties/item_make/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o) {
                                        if (void 0 !== t.item_model) {
                                            const s = 0;
                                            if ("string" != typeof t.item_model) return e.errors = [{
                                                instancePath: r + "/item_model",
                                                schemaPath: "#/properties/item_model/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0;
                                        if (o) {
                                            if (void 0 !== t.item_type) {
                                                const s = 0;
                                                if ("string" != typeof t.item_type) return e.errors = [{
                                                    instancePath: r + "/item_type",
                                                    schemaPath: "#/properties/item_type/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                o = 0 === s
                                            } else o = !0;
                                            if (o) {
                                                if (void 0 !== t.item_variant) {
                                                    const s = 0;
                                                    if ("string" != typeof t.item_variant) return e.errors = [{
                                                        instancePath: r + "/item_variant",
                                                        schemaPath: "#/properties/item_variant/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    o = 0 === s
                                                } else o = !0;
                                                if (o) {
                                                    if (void 0 !== t.item_color) {
                                                        const s = 0;
                                                        if ("string" != typeof t.item_color) return e.errors = [{
                                                            instancePath: r + "/item_color",
                                                            schemaPath: "#/properties/item_color/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        o = 0 === s
                                                    } else o = !0;
                                                    if (o) {
                                                        if (void 0 !== t.item_year) {
                                                            const s = 0;
                                                            if ("string" != typeof t.item_year) return e.errors = [{
                                                                instancePath: r + "/item_year",
                                                                schemaPath: "#/properties/item_year/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string"
                                                            }], !1;
                                                            o = 0 === s
                                                        } else o = !0;
                                                        if (o) {
                                                            if (void 0 !== t.item_number) {
                                                                const s = 0;
                                                                if ("string" != typeof t.item_number) return e.errors = [{
                                                                    instancePath: r + "/item_number",
                                                                    schemaPath: "#/properties/item_number/type",
                                                                    keyword: "type",
                                                                    params: {
                                                                        type: "string"
                                                                    },
                                                                    message: "must be string"
                                                                }], !1;
                                                                o = 0 === s
                                                            } else o = !0;
                                                            if (o) {
                                                                if (void 0 !== t.item_id) {
                                                                    const s = 0;
                                                                    if ("string" != typeof t.item_id) return e.errors = [{
                                                                        instancePath: r + "/item_id",
                                                                        schemaPath: "#/properties/item_id/type",
                                                                        keyword: "type",
                                                                        params: {
                                                                            type: "string"
                                                                        },
                                                                        message: "must be string"
                                                                    }], !1;
                                                                    o = 0 === s
                                                                } else o = !0;
                                                                if (o) {
                                                                    if (void 0 !== t.item_inventory_date) {
                                                                        const s = 0;
                                                                        if ("string" != typeof t.item_inventory_date) return e.errors = [{
                                                                            instancePath: r + "/item_inventory_date",
                                                                            schemaPath: "#/properties/item_inventory_date/type",
                                                                            keyword: "type",
                                                                            params: {
                                                                                type: "string"
                                                                            },
                                                                            message: "must be string"
                                                                        }], !1;
                                                                        o = 0 === s
                                                                    } else o = !0;
                                                                    if (o) {
                                                                        if (void 0 !== t.item_category) {
                                                                            const s = 0;
                                                                            if ("string" != typeof t.item_category) return e.errors = [{
                                                                                instancePath: r + "/item_category",
                                                                                schemaPath: "#/properties/item_category/type",
                                                                                keyword: "type",
                                                                                params: {
                                                                                    type: "string"
                                                                                },
                                                                                message: "must be string"
                                                                            }], !1;
                                                                            o = 0 === s
                                                                        } else o = !0;
                                                                        if (o) {
                                                                            if (void 0 !== t.item_fuel_type) {
                                                                                const s = 0;
                                                                                if ("string" != typeof t.item_fuel_type) return e.errors = [{
                                                                                    instancePath: r + "/item_fuel_type",
                                                                                    schemaPath: "#/properties/item_fuel_type/type",
                                                                                    keyword: "type",
                                                                                    params: {
                                                                                        type: "string"
                                                                                    },
                                                                                    message: "must be string"
                                                                                }], !1;
                                                                                o = 0 === s
                                                                            } else o = !0;
                                                                            if (o)
                                                                                if (void 0 !== t.item_price) {
                                                                                    const s = 0;
                                                                                    if ("string" != typeof t.item_price) return e.errors = [{
                                                                                        instancePath: r + "/item_price",
                                                                                        schemaPath: "#/properties/item_price/type",
                                                                                        keyword: "type",
                                                                                        params: {
                                                                                            type: "string"
                                                                                        },
                                                                                        message: "must be string"
                                                                                    }], !1;
                                                                                    o = 0 === s
                                                                                } else o = !0
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_itemlist_filters"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.element_text && (s = "element_text") || void 0 === t.element_value && (s = "element_value") || void 0 === t.action_location && (s = "action_location") || void 0 === t.item_results && (s = "item_results") || void 0 === t.page_type && (s = "page_type") || void 0 === t.element_text_selection && (s = "element_text_selection") || void 0 === t.element_state && (s = "element_state")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.element_text) {
                            const s = 0;
                            if ("string" != typeof t.element_text) return e.errors = [{
                                instancePath: r + "/element_text",
                                schemaPath: "#/properties/element_text/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.element_value) {
                                const s = 0;
                                if ("string" != typeof t.element_value) return e.errors = [{
                                    instancePath: r + "/element_value",
                                    schemaPath: "#/properties/element_value/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.action_location) {
                                    const s = 0;
                                    if ("string" != typeof t.action_location) return e.errors = [{
                                        instancePath: r + "/action_location",
                                        schemaPath: "#/properties/action_location/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o)
                                    if (void 0 !== t.item_results) {
                                        const s = 0;
                                        if ("string" != typeof t.item_results) return e.errors = [{
                                            instancePath: r + "/item_results",
                                            schemaPath: "#/properties/item_results/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_itemlist_pageview"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.itemlist_type && (s = "itemlist_type") || void 0 === t.item_results && (s = "item_results") || void 0 === t.item_make && (s = "item_make") || void 0 === t.item_type && (s = "item_type") || void 0 === t.item_variant && (s = "item_variant") || void 0 === t.item_model && (s = "item_model") || void 0 === t.item_color && (s = "item_color") || void 0 === t.item_year && (s = "item_year")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.itemlist_type) {
                            const s = 0;
                            if ("string" != typeof t.itemlist_type) return e.errors = [{
                                instancePath: r + "/itemlist_type",
                                schemaPath: "#/properties/itemlist_type/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.item_results) {
                                const s = 0;
                                if ("string" != typeof t.item_results) return e.errors = [{
                                    instancePath: r + "/item_results",
                                    schemaPath: "#/properties/item_results/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.item_make) {
                                    const s = 0;
                                    if ("string" != typeof t.item_make) return e.errors = [{
                                        instancePath: r + "/item_make",
                                        schemaPath: "#/properties/item_make/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.item_type) {
                                        const s = 0;
                                        if ("string" != typeof t.item_type) return e.errors = [{
                                            instancePath: r + "/item_type",
                                            schemaPath: "#/properties/item_type/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o) {
                                        if (void 0 !== t.item_variant) {
                                            const s = 0;
                                            if ("string" != typeof t.item_variant) return e.errors = [{
                                                instancePath: r + "/item_variant",
                                                schemaPath: "#/properties/item_variant/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0;
                                        if (o) {
                                            if (void 0 !== t.item_model) {
                                                const s = 0;
                                                if ("string" != typeof t.item_model) return e.errors = [{
                                                    instancePath: r + "/item_model",
                                                    schemaPath: "#/properties/item_model/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                o = 0 === s
                                            } else o = !0;
                                            if (o) {
                                                if (void 0 !== t.item_color) {
                                                    const s = 0;
                                                    if ("string" != typeof t.item_color) return e.errors = [{
                                                        instancePath: r + "/item_color",
                                                        schemaPath: "#/properties/item_color/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    o = 0 === s
                                                } else o = !0;
                                                if (o)
                                                    if (void 0 !== t.item_year) {
                                                        const s = 0;
                                                        if ("string" != typeof t.item_year) return e.errors = [{
                                                            instancePath: r + "/item_year",
                                                            schemaPath: "#/properties/item_year/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        o = 0 === s
                                                    } else o = !0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.asc_media_interaction"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.creative_name && (s = "creative_name") || void 0 === t.event_action_result && (s = "event_action_result")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.creative_name) {
                            const s = 0;
                            if ("string" != typeof t.creative_name) return e.errors = [{
                                instancePath: r + "/creative_name",
                                schemaPath: "#/properties/creative_name/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o)
                            if (void 0 !== t.event_action_result) {
                                const s = 0;
                                if ("string" != typeof t.event_action_result) return e.errors = [{
                                    instancePath: r + "/event_action_result",
                                    schemaPath: "#/properties/event_action_result/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0
                    }
                    return e.errors = null, !0
                }, t["website.asc_menu_interaction"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.element_text && (s = "element_text") || void 0 === t.action_location && (s = "action_location")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.element_text) {
                            const s = 0;
                            if ("string" != typeof t.element_text) return e.errors = [{
                                instancePath: r + "/element_text",
                                schemaPath: "#/properties/element_text/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o)
                            if (void 0 !== t.action_location) {
                                const s = 0;
                                if ("string" != typeof t.action_location) return e.errors = [{
                                    instancePath: r + "/action_location",
                                    schemaPath: "#/properties/action_location/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0
                    }
                    return e.errors = null, !0
                }, t["website.asc_pageview"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.page_type && (s = "page_type")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.page_type) {
                            const s = 0;
                            if ("string" != typeof t.page_type) return e.errors = [{
                                instancePath: r + "/page_type",
                                schemaPath: "#/properties/page_type/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o)
                            if (void 0 !== t.error_code) {
                                const s = 0;
                                if ("string" != typeof t.error_code) return e.errors = [{
                                    instancePath: r + "/error_code",
                                    schemaPath: "#/properties/error_code/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0
                    }
                    return e.errors = null, !0
                }, t["website.asc_special_offer"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.element_text && (s = "element_text") || void 0 === t.page_type && (s = "page_type")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.element_text) {
                            const s = 0;
                            if ("string" != typeof t.element_text) return e.errors = [{
                                instancePath: r + "/element_text",
                                schemaPath: "#/properties/element_text/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.promotion_name) {
                                const s = 0;
                                if ("string" != typeof t.promotion_name) return e.errors = [{
                                    instancePath: r + "/promotion_name",
                                    schemaPath: "#/properties/promotion_name/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.department) {
                                    const s = 0;
                                    if ("string" != typeof t.department) return e.errors = [{
                                        instancePath: r + "/department",
                                        schemaPath: "#/properties/department/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.page_type) {
                                        const s = 0;
                                        if ("string" != typeof t.page_type) return e.errors = [{
                                            instancePath: r + "/page_type",
                                            schemaPath: "#/properties/page_type/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o) {
                                        if (void 0 !== t.product_name) {
                                            const s = 0;
                                            if ("string" != typeof t.product_name) return e.errors = [{
                                                instancePath: r + "/product_name",
                                                schemaPath: "#/properties/product_name/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0;
                                        if (o) {
                                            if (void 0 !== t.element_position) {
                                                const s = 0;
                                                if ("string" != typeof t.element_position) return e.errors = [{
                                                    instancePath: r + "/element_position",
                                                    schemaPath: "#/properties/element_position/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                o = 0 === s
                                            } else o = !0;
                                            if (o)
                                                if (void 0 !== t.flow_outcome) {
                                                    const s = 0;
                                                    if ("string" != typeof t.flow_outcome) return e.errors = [{
                                                        instancePath: r + "/flow_outcome",
                                                        schemaPath: "#/properties/flow_outcome/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    o = 0 === s
                                                } else o = !0
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.build_and_price_load"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.page_type && (s = "page_type")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.page_type && "string" != typeof t.page_type) return e.errors = [{
                            instancePath: r + "/page_type",
                            schemaPath: "#/properties/page_type/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        }], !1
                    }
                    return e.errors = null, !0
                }, t["website.di_form_submission_other"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.form_name && (s = "form_name") || void 0 === t.department && (s = "department") || void 0 === t.page_location && (s = "page_location") || void 0 === t.page_type && (s = "page_type") || void 0 === t.comm_type && (s = "comm_type") || void 0 === t.comm_status && (s = "comm_status") || void 0 === t.element_text && (s = "element_text") || void 0 === t.form_type && (s = "form_type")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.submission_id) {
                            const s = 0;
                            if ("string" != typeof t.submission_id) return e.errors = [{
                                instancePath: r + "/submission_id",
                                schemaPath: "#/properties/submission_id/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.form_name) {
                                const s = 0;
                                if ("string" != typeof t.form_name) return e.errors = [{
                                    instancePath: r + "/form_name",
                                    schemaPath: "#/properties/form_name/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.department) {
                                    const s = 0;
                                    if ("string" != typeof t.department) return e.errors = [{
                                        instancePath: r + "/department",
                                        schemaPath: "#/properties/department/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o) {
                                    if (void 0 !== t.page_location) {
                                        const s = 0;
                                        if ("string" != typeof t.page_location) return e.errors = [{
                                            instancePath: r + "/page_location",
                                            schemaPath: "#/properties/page_location/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0;
                                    if (o) {
                                        if (void 0 !== t.page_type) {
                                            const s = 0;
                                            if ("string" != typeof t.page_type) return e.errors = [{
                                                instancePath: r + "/page_type",
                                                schemaPath: "#/properties/page_type/type",
                                                keyword: "type",
                                                params: {
                                                    type: "string"
                                                },
                                                message: "must be string"
                                            }], !1;
                                            o = 0 === s
                                        } else o = !0;
                                        if (o) {
                                            if (void 0 !== t.comm_type) {
                                                const s = 0;
                                                if ("string" != typeof t.comm_type) return e.errors = [{
                                                    instancePath: r + "/comm_type",
                                                    schemaPath: "#/properties/comm_type/type",
                                                    keyword: "type",
                                                    params: {
                                                        type: "string"
                                                    },
                                                    message: "must be string"
                                                }], !1;
                                                o = 0 === s
                                            } else o = !0;
                                            if (o) {
                                                if (void 0 !== t.comm_status) {
                                                    const s = 0;
                                                    if ("string" != typeof t.comm_status) return e.errors = [{
                                                        instancePath: r + "/comm_status",
                                                        schemaPath: "#/properties/comm_status/type",
                                                        keyword: "type",
                                                        params: {
                                                            type: "string"
                                                        },
                                                        message: "must be string"
                                                    }], !1;
                                                    o = 0 === s
                                                } else o = !0;
                                                if (o) {
                                                    if (void 0 !== t.element_text) {
                                                        const s = 0;
                                                        if ("string" != typeof t.element_text) return e.errors = [{
                                                            instancePath: r + "/element_text",
                                                            schemaPath: "#/properties/element_text/type",
                                                            keyword: "type",
                                                            params: {
                                                                type: "string"
                                                            },
                                                            message: "must be string"
                                                        }], !1;
                                                        o = 0 === s
                                                    } else o = !0;
                                                    if (o)
                                                        if (void 0 !== t.form_type) {
                                                            const s = 0;
                                                            if ("string" != typeof t.form_type) return e.errors = [{
                                                                instancePath: r + "/form_type",
                                                                schemaPath: "#/properties/form_type/type",
                                                                keyword: "type",
                                                                params: {
                                                                    type: "string"
                                                                },
                                                                message: "must be string"
                                                            }], !1;
                                                            o = 0 === s
                                                        } else o = !0
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.get_directions"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.action_location && (s = "action_location")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.action_location && "string" != typeof t.action_location) return e.errors = [{
                            instancePath: r + "/action_location",
                            schemaPath: "#/properties/action_location/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        }], !1
                    }
                    return e.errors = null, !0
                }, t["website.offers_cta_click"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.element_text && (s = "element_text") || void 0 === t.page_type && (s = "page_type") || void 0 === t.promotion_name && (s = "promotion_name")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.element_text) {
                            const s = 0;
                            if ("string" != typeof t.element_text) return e.errors = [{
                                instancePath: r + "/element_text",
                                schemaPath: "#/properties/element_text/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.page_type) {
                                const s = 0;
                                if ("string" != typeof t.page_type) return e.errors = [{
                                    instancePath: r + "/page_type",
                                    schemaPath: "#/properties/page_type/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o)
                                if (void 0 !== t.promotion_name) {
                                    const s = 0;
                                    if ("string" != typeof t.promotion_name) return e.errors = [{
                                        instancePath: r + "/promotion_name",
                                        schemaPath: "#/properties/promotion_name/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0
                        }
                    }
                    return e.errors = null, !0
                }, t["website.personalizer_click"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.promotion_name && (s = "promotion_name") || void 0 === t.action_location && (s = "action_location") || void 0 === t.click_text && (s = "click_text") || void 0 === t.click_url && (s = "click_url")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.promotion_name) {
                            const s = 0;
                            if ("string" != typeof t.promotion_name) return e.errors = [{
                                instancePath: r + "/promotion_name",
                                schemaPath: "#/properties/promotion_name/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o) {
                            if (void 0 !== t.action_location) {
                                const s = 0;
                                if ("string" != typeof t.action_location) return e.errors = [{
                                    instancePath: r + "/action_location",
                                    schemaPath: "#/properties/action_location/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0;
                            if (o) {
                                if (void 0 !== t.click_text) {
                                    const s = 0;
                                    if ("string" != typeof t.click_text) return e.errors = [{
                                        instancePath: r + "/click_text",
                                        schemaPath: "#/properties/click_text/type",
                                        keyword: "type",
                                        params: {
                                            type: "string"
                                        },
                                        message: "must be string"
                                    }], !1;
                                    o = 0 === s
                                } else o = !0;
                                if (o)
                                    if (void 0 !== t.click_url) {
                                        const s = 0;
                                        if ("string" != typeof t.click_url) return e.errors = [{
                                            instancePath: r + "/click_url",
                                            schemaPath: "#/properties/click_url/type",
                                            keyword: "type",
                                            params: {
                                                type: "string"
                                            },
                                            message: "must be string"
                                        }], !1;
                                        o = 0 === s
                                    } else o = !0
                            }
                        }
                    }
                    return e.errors = null, !0
                }, t["website.personalizer_shown"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.promotion_name && (s = "promotion_name") || void 0 === t.action_location && (s = "action_location")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.promotion_name) {
                            const s = 0;
                            if ("string" != typeof t.promotion_name) return e.errors = [{
                                instancePath: r + "/promotion_name",
                                schemaPath: "#/properties/promotion_name/type",
                                keyword: "type",
                                params: {
                                    type: "string"
                                },
                                message: "must be string"
                            }], !1;
                            var o = 0 === s
                        } else o = !0;
                        if (o)
                            if (void 0 !== t.action_location) {
                                const s = 0;
                                if ("string" != typeof t.action_location) return e.errors = [{
                                    instancePath: r + "/action_location",
                                    schemaPath: "#/properties/action_location/type",
                                    keyword: "type",
                                    params: {
                                        type: "string"
                                    },
                                    message: "must be string"
                                }], !1;
                                o = 0 === s
                            } else o = !0
                    }
                    return e.errors = null, !0
                }, t["website.remove_filter"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.filter_removed && (s = "filter_removed")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.filter_removed && "string" != typeof t.filter_removed) return e.errors = [{
                            instancePath: r + "/filter_removed",
                            schemaPath: "#/properties/filter_removed/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        }], !1
                    }
                    return e.errors = null, !0
                }, t["website.vdp_sharetools_click"] = function e(t, {
                    instancePath: r = "",
                    parentData: s,
                    parentDataProperty: a,
                    rootData: i = t
                } = {}) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return e.errors = [{
                        instancePath: r,
                        schemaPath: "#/type",
                        keyword: "type",
                        params: {
                            type: "object"
                        },
                        message: "must be object"
                    }], !1; {
                        let s;
                        if (void 0 === t.element_text && (s = "element_text")) return e.errors = [{
                            instancePath: r,
                            schemaPath: "#/required",
                            keyword: "required",
                            params: {
                                missingProperty: s
                            },
                            message: "must have required property '" + s + "'"
                        }], !1;
                        if (void 0 !== t.element_text && "string" != typeof t.element_text) return e.errors = [{
                            instancePath: r + "/element_text",
                            schemaPath: "#/properties/element_text/type",
                            keyword: "type",
                            params: {
                                type: "string"
                            },
                            message: "must be string"
                        }], !1
                    }
                    return e.errors = null, !0
                }
            }
        },
        t = {};

    function r(s) {
        var a = t[s];
        if (void 0 !== a) return a.exports;
        var i = t[s] = {
            exports: {}
        };
        return e[s](i, i.exports, r), i.exports
    }
    r.d = (e, t) => {
        for (var s in t) r.o(t, s) && !r.o(e, s) && Object.defineProperty(e, s, {
            enumerable: !0,
            get: t[s]
        })
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e = {};
        r.r(e), r.d(e, {
            emitEvent: () => f,
            enableDebugging: () => s
        });
        let t = !1;

        function s() {
            t = !0
        }

        function a(e, r) {
            if (!t) return;
            const s = new Error;
            console.log(e, r, `\n${s.stack?.substring(6)}`)
        }
        class i {
            name;
            isAdapterInitialized = !1;
            queuedEvents = [];
            constructor(e) {
                this.name = e, this.monitorLoaded()
            }
            sendEvent(...e) {
                if (this.isAdapterInitialized) return a("sending payload to adapter", {
                    adapter: this.name,
                    payload: e
                }), this.egressEvent(...e);
                a("queueing payload for adapter", {
                    adapter: this.name,
                    payload: e
                }), this.queuedEvents.push(e)
            }
            monitorLoaded() {
                let e;
                const t = () => {
                    if (!this.isAdapterInitialized)
                        if (this.isLoaded()) {
                            for (clearInterval(e), a("adapter initialized", {
                                    adapter: this.name
                                }); 0 !== this.queuedEvents.length;) {
                                const e = this.queuedEvents.shift();
                                e && (a("sending payload to adapter", {
                                    adapter: this.name,
                                    payload: e
                                }), this.egressEvent(...e))
                            }
                            this.isAdapterInitialized = !0
                        } else a("adapter not ready, waiting", {
                            adapter: this.name
                        })
                };
                e = setInterval((() => t()), 50)
            }
            isLoaded() {
                throw new Error("Adapter has not implemented isLoaded")
            }
            egressEvent(...e) {
                throw new Error("Adapter has not implemented sendEvent")
            }
        }
        class o extends i {
            constructor() {
                super("ua")
            }
            isLoaded() {
                return "object" == typeof window && void 0 !== window.ga
            }
            egressEvent(...e) {
                window.ga(...e)
            }
        }
        new o;
        const n = {
            gtag: new class extends i {
                constructor() {
                    super("gtag")
                }
                isLoaded() {
                    return "object" == typeof window && void 0 !== window.gtag
                }
                egressEvent(e, t) {
                    const r = { ...t,
                        event_owner: "dealer inspire"
                    };
                    window.gtag("event", e, r), void 0 === window.dataLayer && (window.dataLayer = []), window.dataLayer.push({
                        event: e,
                        ...r
                    })
                }
            },
            ua: new o
        };

        function p(e) {
            return {
                item_condition: e.item_condition ? ? "",
                item_make: e.item_make ? ? "",
                item_model: e.item_model ? ? "",
                item_type: e.item_type ? ? "",
                item_variant: e.item_variant ? ? "",
                item_color: e.item_color ? ? "",
                item_year: e.item_year ? ? "",
                item_number: e.item_number ? ? "",
                item_id: e.item_id ? ? "",
                item_inventory_date: e.item_inventory_date ? ? "",
                item_category: e.item_category ? ? "",
                item_fuel_type: e.item_fuel_type ? ? "",
                item_price: e.item_price ? ? ""
            }
        }

        function m(e) {
            return {
                send_to: e.send_to ? ? ""
            }
        }
        const y = {
                conversationsReducer: function(e, {
                    adapters: t
                }) {
                    const {
                        type: r
                    } = e;
                    return "conversations.cta_click" === r ? t.gtag.sendEvent("conversations_cta_click", {
                        initiation_location: e.initiation_location
                    }) : "conversations.engagement" === r ? t.gtag.sendEvent("conversations_engagement", {
                        visitor_engagement: e.visitor_engagement
                    }) : void 0
                },
                websiteReducer: function(e, {
                    adapters: t
                }) {
                    return "website.action_bar_click" === e.type ? t.gtag.sendEvent("action_bar_click", {
                        element_text: e.element_text,
                        ...m(e)
                    }) : "website.asc_click_to_call" === e.type ? t.gtag.sendEvent("asc_click_to_call", {
                        comm_phone_number: e.comm_phone_number,
                        department: e.department,
                        phone_number_type: `${e.department},${e.comm_phone_number}`,
                        page_type: e.page_type,
                        affiliation: e.affiliation,
                        ...p(e),
                        ...m(e)
                    }) : "website.asc_menu_interaction" === e.type ? t.gtag.sendEvent("asc_menu_interaction", {
                        element_text: e.element_text,
                        action_location: e.action_location,
                        page_type: e.page_type,
                        element_subtype: e.element_subtype,
                        element_type: e.element_type,
                        event_action: e.event_action,
                        ...m(e)
                    }) : "website.asc_search_bar" === e.type ? t.gtag.sendEvent("asc_search_bar", {
                        element_position: e.element_position,
                        element_value: e.element_value,
                        item_results: e.item_results,
                        page_type: e.page_type,
                        ...m(e)
                    }) : "website.asc_cta_interaction" === e.type ? t.gtag.sendEvent("asc_cta_interaction", {
                        element_text: e.element_text,
                        page_type: e.page_type,
                        action_location: e.action_location,
                        element_color: e.element_color,
                        element_order: e.element_order,
                        link_url: e.link_url,
                        event_action_result: e.event_action_result,
                        element_type: e.element_type,
                        event_action: e.event_action,
                        ...p(e),
                        ...m(e)
                    }) : "website.asc_element_texts" === e.type ? t.gtag.sendEvent("asc_element_texts", {
                        element_text: e.element_text,
                        element_text_selection: e.element_text_selection,
                        page_type: e.page_type,
                        element_value: e.element_value,
                        element_state: e.element_state,
                        ...m(e)
                    }) : "website.asc_itemlist_filters" === e.type ? t.gtag.sendEvent("asc_itemlist_filters", {
                        element_text: e.element_text,
                        element_value: e.element_value,
                        action_location: e.action_location,
                        page_type: e.page_type,
                        element_text_selection: e.element_text_selection,
                        element_state: e.element_state,
                        ...m(e)
                    }) : "website.remove_filter" === e.type ? t.gtag.sendEvent("remove_filter", {
                        filter_removed: e.filter_removed,
                        ...m(e)
                    }) : "website.asc_cta_interaction" === e.type ? t.gtag.sendEvent("asc_cta_interaction", {
                        action_location: e.action_location,
                        page_type: e.page_type,
                        ...p(e),
                        ...m(e)
                    }) : "website.asc_itemlist_pageview" === e.type ? t.gtag.sendEvent("asc_itemlist_pageview", {
                        itemlist_type: e.itemlist_type,
                        item_results: e.item_results,
                        item_make: e.item_make,
                        item_type: e.item_type,
                        item_variant: e.item_variant,
                        item_model: e.item_model,
                        item_color: e.item_color,
                        item_year: e.item_year,
                        ...m(e)
                    }) : "website.asc_media_interaction" === e.type ? t.gtag.sendEvent("asc_media_interaction", {
                        event_action_result: e.event_action_result,
                        page_type: e.page_type,
                        affiliation: e.affiliation,
                        media_type: e.media_type,
                        link_url: e.link_url,
                        creative_name: e.creative_name,
                        element_text: e.element_text,
                        event_action: e.event_action,
                        ...p(e),
                        ...m(e)
                    }) : "website.vdp_sharetools_click" === e.type ? t.gtag.sendEvent("vdp_sharetools_click", {
                        element_text: e.element_text,
                        ...m(e)
                    }) : "website.asc_item_pageview" === e.type ? t.gtag.sendEvent("asc_item_pageview", {
                        page_type: e.page_type,
                        error_code: e.error_code,
                        ...p(e),
                        ...m(e)
                    }) : "website.asc_special_offer" === e.type ? t.gtag.sendEvent("asc_special_offer", {
                        page_type: e.page_type,
                        element_text: e.element_text,
                        promotion_name: e.promotion_name,
                        department: e.department,
                        product_name: e.product_name,
                        element_position: e.element_position,
                        flow_outcome: e.flow_outcome,
                        ...m(e)
                    }) : "website.asc_form_engagement" === e.type ? t.gtag.sendEvent("asc_form_engagement", {
                        form_name: e.form_name,
                        department: e.department,
                        page_type: e.page_type,
                        comm_type: e.comm_type,
                        comm_outcome: e.comm_outcome,
                        element_text: e.element_text,
                        form_type: e.form_type,
                        ...p(e),
                        ...m(e)
                    }) : "website.asc_form_submission" === e.type ? t.gtag.sendEvent("asc_form_submission", {
                        submission_id: e.submission_id,
                        form_name: e.form_name,
                        department: e.department,
                        page_location: e.page_location,
                        page_type: e.page_type,
                        comm_type: e.comm_type,
                        comm_status: e.comm_status,
                        element_text: e.element_text,
                        form_type: e.form_type,
                        ...p(e),
                        ...m(e)
                    }) : "website.asc_form_submission_other" === e.type ? t.gtag.sendEvent("asc_form_submission_other", {
                        submission_id: e.submission_id,
                        form_name: e.form_name,
                        department: e.department,
                        page_location: e.page_location,
                        page_type: e.page_type,
                        comm_type: e.comm_type,
                        comm_status: e.comm_status,
                        element_text: e.element_text,
                        form_type: e.form_type,
                        ...m(e)
                    }) : "website.di_form_submission_other" === e.type ? t.gtag.sendEvent("di_form_submission_other", {
                        submission_id: e.submission_id,
                        form_name: e.form_name,
                        department: e.department,
                        page_location: e.page_location,
                        page_type: e.page_type,
                        comm_type: e.comm_type,
                        comm_status: e.comm_status,
                        element_text: e.element_text,
                        form_type: e.form_type,
                        ...m(e)
                    }) : "website.asc_form_submission_sales" === e.type ? t.gtag.sendEvent("asc_form_submission_sales", {
                        submission_id: e.submission_id,
                        form_name: e.form_name,
                        department: e.department,
                        page_location: e.page_location,
                        page_type: e.page_type,
                        comm_type: e.comm_type,
                        comm_status: e.comm_status,
                        element_text: e.element_text,
                        form_type: e.form_type,
                        ...p(e),
                        ...m(e)
                    }) : "website.asc_form_submission_sales_appt" === e.type ? t.gtag.sendEvent("asc_form_submission_sales_appt", {
                        submission_id: e.submission_id,
                        form_name: e.form_name,
                        department: e.department,
                        page_location: e.page_location,
                        page_type: e.page_type,
                        comm_type: e.comm_type,
                        comm_status: e.comm_status,
                        element_text: e.element_text,
                        form_type: e.form_type,
                        ...p(e),
                        ...m(e)
                    }) : "website.asc_form_submission_service" === e.type ? t.gtag.sendEvent("asc_form_submission_service", {
                        submission_id: e.submission_id,
                        form_name: e.form_name,
                        department: e.department,
                        page_location: e.page_location,
                        page_type: e.page_type,
                        comm_type: e.comm_type,
                        comm_status: e.comm_status,
                        element_text: e.element_text,
                        form_type: e.form_type,
                        ...p(e),
                        ...m(e)
                    }) : "website.asc_form_submission_service_appt" === e.type ? t.gtag.sendEvent("asc_form_submission_service_appt", {
                        submission_id: e.submission_id,
                        form_name: e.form_name,
                        department: e.department,
                        page_location: e.page_location,
                        page_type: e.page_type,
                        comm_type: e.comm_type,
                        comm_status: e.comm_status,
                        element_text: e.element_text,
                        form_type: e.form_type,
                        ...p(e),
                        ...m(e)
                    }) : "website.asc_form_submission_parts" === e.type ? t.gtag.sendEvent("asc_form_submission_parts", {
                        submission_id: e.submission_id,
                        form_name: e.form_name,
                        department: e.department,
                        page_location: e.page_location,
                        page_type: e.page_type,
                        comm_type: e.comm_type,
                        comm_status: e.comm_status,
                        element_text: e.element_text,
                        form_type: e.form_type,
                        ...p(e),
                        ...m(e)
                    }) : "website.offers_cta_click" === e.type ? t.gtag.sendEvent("offers_cta_click", {
                        element_text: e.element_text,
                        page_type: e.page_type,
                        promotion_name: e.promotion_name,
                        ...m(e)
                    }) : "website.build_and_price_load" === e.type ? t.gtag.sendEvent("build_and_price_load", {
                        page_type: e.page_type,
                        ...m(e)
                    }) : "website.asc_element_configuration" === e.type ? t.gtag.sendEvent("asc_element_configuration", {
                        page_type: e.page_type,
                        item_results: e.item_results,
                        item_package: e.item_package,
                        item_interior_color: e.item_interior_color,
                        item_color: e.item_color,
                        item_power_train: e.item_power_train,
                        item_type: e.item_type,
                        item_variant: e.item_variant,
                        item_make: e.item_make,
                        item_model: e.item_model,
                        item_year: e.item_year,
                        item_condition: e.item_condition,
                        item_category: e.item_category,
                        item_fuel_type: e.item_fuel_type,
                        item_price: e.item_price,
                        event_action_result: e.event_action_result,
                        event_action: e.event_action,
                        product_name: e.product_name,
                        element_state: e.element_state,
                        element_type: e.element_type,
                        element_subtype: e.element_subtype,
                        element_title: e.element_title,
                        element_text: e.element_text,
                        element_value: e.element_value,
                        element_color: e.element_color,
                        element_position: e.element_position,
                        element_order: e.element_order,
                        ...m(e)
                    }) : "website.personalizer_shown" === e.type ? t.gtag.sendEvent("personalizer_shown", {
                        promotion_name: e.promotion_name,
                        action_location: e.action_location,
                        ...m(e)
                    }) : "website.personalizer_click" === e.type ? t.gtag.sendEvent("personalizer_click", {
                        promotion_name: e.promotion_name,
                        action_location: e.action_location,
                        click_text: e.click_text,
                        click_url: e.click_url,
                        ...m(e)
                    }) : "website.asc_pageview" === e.type ? t.gtag.sendEvent("asc_pageview", {
                        page_type: e.page_type,
                        error_code: e.error_code,
                        ...p(e),
                        ...m(e)
                    }) : void 0
                }
            },
            c = {
                isCompoundEvent: function(e, t, r) {
                    if (!r[r.length - 1].includes(e.type)) return !1;
                    const s = t.map((e => e.type));
                    for (const e of r.slice(0, -1)) {
                        let t = !1;
                        for (const r of e)
                            if (s.includes(r)) {
                                t = !0;
                                break
                            }
                        if (!t) return !1
                    }
                    return !0
                },
                doesClickMatch: function(e, t) {
                    return "page_click" === e.type && e.target.matches(t)
                }
            },
            _ = r(361),
            g = [];

        function f(e) {
            const t = {
                adapters: n,
                utils: c,
                eventHistory: g
            };
            if (! function(e) {
                    if ("object" != typeof e || "string" != typeof e.type) return a("validator failed", {
                        errors: "Invalid eventData",
                        eventData: e
                    }), !1;
                    if ("function" == typeof _[e.type]) {
                        const t = _[e.type](e);
                        return t || a("validator failed", {
                            errors: _[e.type].errors,
                            eventData: e
                        }), t
                    }
                    return a("validator failed", {
                        errors: "Does not exist",
                        eventData: e
                    }), !1
                }(e)) throw new Error("Event does not match schema");
            for (const r in y) try {
                a("reducer called for event", {
                    eventData: e,
                    reducer: r
                }), y[r]({ ...e
                }, t)
            } catch (t) {
                a("reducer threw for event", {
                    error: t,
                    eventData: e,
                    reducer: r
                })
            }
            g.push(e)
        }
        f({
            type: "page_load",
            url: window.location.href
        }), document.addEventListener("click", (e => {
            const {
                clientX: t,
                clientY: r,
                target: s
            } = e;
            f({
                type: "page_click",
                clientX: t,
                clientY: r,
                path: e.composedPath(),
                target: s
            })
        }), !1), "undefined" != typeof window && (window.di_eventstack = e)
    })()
})();