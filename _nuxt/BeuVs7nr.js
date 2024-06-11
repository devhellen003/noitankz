import {
    a2 as ne,
    a3 as ye,
    r as U,
    K as S,
    a4 as ge,
    J as le,
    v as B,
    a5 as b,
    a6 as be,
    x as _,
    a7 as oe,
    a8 as A,
    a9 as M,
    aa as ee,
    w as Se,
    F as N,
    ab as we,
    ac as p,
    ad as Ee,
    ae as D,
    af as re,
    ag as _e,
    ah as Be,
    L as R,
    o as V,
    z as H,
    A as y,
    a as E,
    C as v,
    ai as Ce,
    b as x,
    aj as Le,
    ak as Te,
    al as Fe,
    E as xe,
    am as Ae,
    an as te,
    ao as ke,
    ap as Oe,
    aq as $e,
    ar as Ve,
    as as He,
    _ as Ie
} from "./BCVtaz4E.js";

function Me(e) {
    let t = {
        called: !1
    };
    return (...l) => {
        if (!t.called) return t.called = !0, e(...l)
    }
}

function I(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}

function F(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}
var j = (e => (e.Finished = "finished", e.Cancelled = "cancelled", e))(j || {});

function Ne(e, t) {
    let l = ne();
    if (!e) return l.dispose;
    let {
        transitionDuration: o,
        transitionDelay: i
    } = getComputedStyle(e), [a, n] = [o, i].map(r => {
        let [s = 0] = r.split(",").filter(Boolean).map(u => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, d) => d - u);
        return s
    });
    return a !== 0 ? l.setTimeout(() => t("finished"), a + n) : t("finished"), l.add(() => t("cancelled")), l.dispose
}

function ae(e, t, l, o, i, a) {
    let n = ne(),
        r = a !== void 0 ? Me(a) : () => {};
    return F(e, ...i), I(e, ...t, ...l), n.nextFrame(() => {
        F(e, ...l), I(e, ...o), n.add(Ne(e, s => (F(e, ...o, ...t), I(e, ...i), r(s))))
    }), n.add(() => F(e, ...t, ...l, ...o, ...i)), n.add(() => r("cancelled")), n.dispose
}

function g(e = "") {
    return e.split(/\s+/).filter(t => t.length > 1)
}
let W = Symbol("TransitionContext");
var De = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(De || {});

function je() {
    return R(W, null) !== null
}

function Pe() {
    let e = R(W, null);
    if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
    return e
}

function Ue() {
    let e = R(K, null);
    if (e === null) throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
    return e
}
let K = Symbol("NestingContext");

function k(e) {
    return "children" in e ? k(e.children) : e.value.filter(({
        state: t
    }) => t === "visible").length > 0
}

function se(e) {
    let t = S([]),
        l = S(!1);
    _(() => l.value = !0), oe(() => l.value = !1);

    function o(a, n = b.Hidden) {
        let r = t.value.findIndex(({
            id: s
        }) => s === a);
        r !== -1 && (M(n, {
            [b.Unmount]() {
                t.value.splice(r, 1)
            },
            [b.Hidden]() {
                t.value[r].state = "hidden"
            }
        }), !k(t) && l.value && (e == null || e()))
    }

    function i(a) {
        let n = t.value.find(({
            id: r
        }) => r === a);
        return n ? n.state !== "visible" && (n.state = "visible") : t.value.push({
            id: a,
            state: "visible"
        }), () => o(a, b.Unmount)
    }
    return {
        children: t,
        register: i,
        unregister: o
    }
}
let ie = ye.RenderStrategy,
    P = U({
        props: {
            as: {
                type: [Object, String],
                default: "div"
            },
            show: {
                type: [Boolean],
                default: null
            },
            unmount: {
                type: [Boolean],
                default: !0
            },
            appear: {
                type: [Boolean],
                default: !1
            },
            enter: {
                type: [String],
                default: ""
            },
            enterFrom: {
                type: [String],
                default: ""
            },
            enterTo: {
                type: [String],
                default: ""
            },
            entered: {
                type: [String],
                default: ""
            },
            leave: {
                type: [String],
                default: ""
            },
            leaveFrom: {
                type: [String],
                default: ""
            },
            leaveTo: {
                type: [String],
                default: ""
            }
        },
        emits: {
            beforeEnter: () => !0,
            afterEnter: () => !0,
            beforeLeave: () => !0,
            afterLeave: () => !0
        },
        setup(e, {
            emit: t,
            attrs: l,
            slots: o,
            expose: i
        }) {
            let a = S(0);

            function n() {
                a.value |= p.Opening, t("beforeEnter")
            }

            function r() {
                a.value &= ~p.Opening, t("afterEnter")
            }

            function s() {
                a.value |= p.Closing, t("beforeLeave")
            }

            function u() {
                a.value &= ~p.Closing, t("afterLeave")
            }
            if (!je() && ge()) return () => le(ue, { ...e,
                onBeforeEnter: n,
                onAfterEnter: r,
                onBeforeLeave: s,
                onAfterLeave: u
            }, o);
            let d = S(null),
                C = B(() => e.unmount ? b.Unmount : b.Hidden);
            i({
                el: d,
                $el: d
            });
            let {
                show: m,
                appear: z
            } = Pe(), {
                register: q,
                unregister: O
            } = Ue(), f = S(m.value ? "visible" : "hidden"), G = {
                value: !0
            }, w = be(), L = {
                value: !1
            }, J = se(() => {
                !L.value && f.value !== "hidden" && (f.value = "hidden", O(w), u())
            });
            _(() => {
                let c = q(w);
                oe(c)
            }), A(() => {
                if (C.value === b.Hidden && w) {
                    if (m.value && f.value !== "visible") {
                        f.value = "visible";
                        return
                    }
                    M(f.value, {
                        hidden: () => O(w),
                        visible: () => q(w)
                    })
                }
            });
            let Q = g(e.enter),
                X = g(e.enterFrom),
                de = g(e.enterTo),
                Y = g(e.entered),
                fe = g(e.leave),
                ce = g(e.leaveFrom),
                ve = g(e.leaveTo);
            _(() => {
                A(() => {
                    if (f.value === "visible") {
                        let c = ee(d);
                        if (c instanceof Comment && c.data === "") throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
                    }
                })
            });

            function pe(c) {
                let $ = G.value && !z.value,
                    h = ee(d);
                !h || !(h instanceof HTMLElement) || $ || (L.value = !0, m.value && n(), m.value || s(), c(m.value ? ae(h, Q, X, de, Y, T => {
                    L.value = !1, T === j.Finished && r()
                }) : ae(h, fe, ce, ve, Y, T => {
                    L.value = !1, T === j.Finished && (k(J) || (f.value = "hidden", O(w), u()))
                })))
            }
            return _(() => {
                Se([m], (c, $, h) => {
                    pe(h), G.value = !1
                }, {
                    immediate: !0
                })
            }), N(K, J), we(B(() => M(f.value, {
                visible: p.Open,
                hidden: p.Closed
            }) | a.value)), () => {
                let {
                    appear: c,
                    show: $,
                    enter: h,
                    enterFrom: T,
                    enterTo: Je,
                    entered: Qe,
                    leave: Xe,
                    leaveFrom: Ye,
                    leaveTo: Ze,
                    ...Z
                } = e, me = {
                    ref: d
                }, he = { ...Z,
                    ...z.value && m.value && Ee.isServer ? {
                        class: D([l.class, Z.class, ...Q, ...X])
                    } : {}
                };
                return re({
                    theirProps: he,
                    ourProps: me,
                    slot: {},
                    slots: o,
                    attrs: l,
                    features: ie,
                    visible: f.value === "visible",
                    name: "TransitionChild"
                })
            }
        }
    }),
    Re = P,
    ue = U({
        inheritAttrs: !1,
        props: {
            as: {
                type: [Object, String],
                default: "div"
            },
            show: {
                type: [Boolean],
                default: null
            },
            unmount: {
                type: [Boolean],
                default: !0
            },
            appear: {
                type: [Boolean],
                default: !1
            },
            enter: {
                type: [String],
                default: ""
            },
            enterFrom: {
                type: [String],
                default: ""
            },
            enterTo: {
                type: [String],
                default: ""
            },
            entered: {
                type: [String],
                default: ""
            },
            leave: {
                type: [String],
                default: ""
            },
            leaveFrom: {
                type: [String],
                default: ""
            },
            leaveTo: {
                type: [String],
                default: ""
            }
        },
        emits: {
            beforeEnter: () => !0,
            afterEnter: () => !0,
            beforeLeave: () => !0,
            afterLeave: () => !0
        },
        setup(e, {
            emit: t,
            attrs: l,
            slots: o
        }) {
            let i = _e(),
                a = B(() => e.show === null && i !== null ? (i.value & p.Open) === p.Open : e.show);
            A(() => {
                if (![!0, !1].includes(a.value)) throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')
            });
            let n = S(a.value ? "visible" : "hidden"),
                r = se(() => {
                    n.value = "hidden"
                }),
                s = S(!0),
                u = {
                    show: a,
                    appear: B(() => e.appear || !s.value)
                };
            return _(() => {
                A(() => {
                    s.value = !1, a.value ? n.value = "visible" : k(r) || (n.value = "hidden")
                })
            }), N(K, r), N(W, u), () => {
                let d = Be(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]),
                    C = {
                        unmount: e.unmount
                    };
                return re({
                    ourProps: { ...C,
                        as: "template"
                    },
                    theirProps: {},
                    slot: {},
                    slots: { ...o,
                        default: () => [le(Re, {
                            onBeforeEnter: () => t("beforeEnter"),
                            onAfterEnter: () => t("afterEnter"),
                            onBeforeLeave: () => t("beforeLeave"),
                            onAfterLeave: () => t("afterLeave"),
                            ...l,
                            ...C,
                            ...d
                        }, o.default)]
                    },
                    attrs: {},
                    features: ie,
                    visible: n.value === "visible",
                    name: "Transition"
                })
            }
        }
    });
const We = e => (Ve("data-v-a5886e17"), e = e(), He(), e),
    Ke = We(() => x("div", {
        class: "modal-background"
    }, null, -1)),
    ze = {
        class: "modal-card-y-container"
    },
    qe = {
        class: "modal-card-container"
    },
    Ge = U({
        __name: "Modal",
        props: {
            title: {
                type: String
            },
            opened: {
                type: Boolean,
                default: !1
            },
            closable: {
                type: Boolean,
                default: !0
            },
            closeOnBackgroundClick: {
                type: Boolean,
                default: !0
            },
            maxWidth: {
                type: String,
                default: "md"
            }
        },
        emits: ["close", "update:opened", "after-leave"],
        setup(e, {
            emit: t
        }) {
            const l = e,
                o = t,
                i = B({
                    get: () => l.opened,
                    set: s => {
                        s || o("close"), o("update:opened", s)
                    }
                }),
                a = () => {
                    l.closeOnBackgroundClick && n()
                },
                n = () => {
                    l.closable && (i.value = !1)
                },
                r = () => {
                    o("after-leave", !1)
                };
            return (s, u) => {
                const d = $e;
                return V(), H(v(ue), {
                    as: "template",
                    show: v(i),
                    onAfterLeave: r
                }, {
                    default: y(() => [E(v(Ce), {
                        as: "div",
                        class: "modal-container",
                        onClose: a
                    }, {
                        default: y(() => [E(v(P), {
                            as: "template",
                            enter: "ease-out duration-300",
                            "enter-from": "opacity-0",
                            "enter-to": "opacity-100",
                            leave: "ease-in duration-200",
                            "leave-from": "opacity-100",
                            "leave-to": "opacity-0"
                        }, {
                            default: y(() => [Ke]),
                            _: 1
                        }), x("div", ze, [x("div", qe, [E(v(P), {
                            as: "template",
                            enter: "ease-out duration-300",
                            "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                            "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        }, {
                            default: y(() => [E(v(Le), {
                                ref: "modal",
                                class: D(["modal-card", `modal-max-width-${e.maxWidth}`]),
                                "aria-hidden": "true",
                                "aria-modal": "true",
                                role: "dialog",
                                tabindex: "-1",
                                onTrigger: a,
                                onKeydown: Te(a, ["esc"])
                            }, {
                                default: y(() => [x("div", {
                                    class: D(["modal-header", {
                                        "has-title": e.title
                                    }])
                                }, [e.title ? (V(), H(v(Fe), {
                                    key: 0,
                                    as: "div",
                                    class: "modal-title"
                                }, {
                                    default: y(() => [xe(Ae(e.title), 1)]),
                                    _: 1
                                })) : te("", !0), e.closable ? (V(), H(d, {
                                    key: 1,
                                    class: "ml-auto",
                                    onClick: n
                                }, {
                                    default: y(() => [E(v(ke), {
                                        class: "modal-close-icon",
                                        "aria-hidden": "true"
                                    })]),
                                    _: 1
                                })) : te("", !0)], 2), Oe(s.$slots, "default", {}, void 0, !0)]),
                                _: 3
                            }, 8, ["class"])]),
                            _: 3
                        })])])]),
                        _: 3
                    })]),
                    _: 3
                }, 8, ["show"])
            }
        }
    }),
    tt = Ie(Ge, [
        ["__scopeId", "data-v-a5886e17"]
    ]);
export {
    tt as _
};