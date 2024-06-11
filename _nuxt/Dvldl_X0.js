var Qt = Object.defineProperty;
var es = (s, o, l) => o in s ? Qt(s, o, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: l
}) : s[o] = l;
var ae = (s, o, l) => (es(s, typeof o != "symbol" ? o + "" : o, l), l);
import {
    aI as ts,
    K as B,
    a8 as ss,
    w as X,
    aJ as Be,
    aK as os,
    aL as ns,
    aM as as,
    aN as is,
    aO as rs,
    o as n,
    c,
    b as t,
    _ as Y,
    r as O,
    E as h,
    am as $,
    C as e,
    a,
    aP as Ee,
    aQ as Ct,
    v as k,
    $ as Te,
    aR as ls,
    D as Ue,
    ae as ue,
    ap as Ke,
    z as N,
    A as v,
    aS as dt,
    aT as re,
    aU as G,
    j as cs,
    aV as ds,
    aW as us,
    aq as le,
    a0 as At,
    an as L,
    aX as ke,
    aY as Pe,
    aZ as Ye,
    a_ as de,
    a$ as K,
    b0 as je,
    b1 as De,
    b2 as Xe,
    b3 as Je,
    b4 as Ne,
    W as ne,
    ar as _e,
    as as ve,
    b5 as St,
    b6 as Ie,
    b7 as ms,
    b8 as Mt,
    b9 as ut,
    ba as Tt,
    bb as lt,
    bc as ps,
    bd as It,
    x as Ge,
    be as ze,
    bf as we,
    bg as hs,
    bh as me,
    bi as ct,
    bj as _s,
    bk as vs,
    bl as gs,
    bm as fs,
    bn as Oe,
    bo as mt,
    bp as ys,
    bq as ws,
    Z as pt,
    br as ks,
    bs,
    bt as Bt,
    bu as xs,
    a7 as $s,
    bv as Cs,
    bw as As,
    bx as Ss,
    by as Ae,
    bz as Ms,
    d as Et,
    bA as Ts,
    bB as ot,
    bC as Is,
    bD as Bs,
    bE as Es,
    bF as ye,
    bG as Us
} from "./BCVtaz4E.js";
import {
    createSIWEConfig as Ps
} from "./D88EIncS.js";
import {
    _ as zs
} from "./BeuVs7nr.js";

function Hs(s, o = {}) {
    const l = o.head || ts();
    if (l) return l.ssr ? l.push(s, o) : Fs(l, s, o)
}

function Fs(s, o, l = {}) {
    const r = B(!1),
        i = B({});
    ss(() => {
        i.value = r.value ? {} : as(o)
    });
    const u = s.push(i.value, l);
    return X(i, g => {
        u.patch(g)
    }), is() && (Be(() => {
        u.dispose()
    }), os(() => {
        r.value = !0
    }), ns(() => {
        r.value = !1
    })), u
}

function Vs(s, o) {
    const {
        title: l,
        titleTemplate: r,
        ...i
    } = s;
    return Hs({
        title: l,
        titleTemplate: r,
        _flatMeta: i
    }, { ...o,
        transform(u) {
            const m = rs({ ...u._flatMeta
            });
            return delete u._flatMeta, { ...u,
                meta: m
            }
        }
    })
}

function js(s, o) {
    return n(), c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [t("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    })])
}

function Ds(s, o) {
    return n(), c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [t("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    })])
}

function Me(s, o) {
    return n(), c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [t("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "m4.5 12.75 6 6 9-13.5"
    })])
}

function Ns(s, o) {
    return n(), c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [t("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "m8.25 4.5 7.5 7.5-7.5 7.5"
    })])
}

function nt(s, o) {
    return n(), c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [t("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
    })])
}

function Gs(s, o) {
    return n(), c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [t("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })])
}

function ht(s, o) {
    return n(), c("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        "aria-hidden": "true",
        "data-slot": "icon"
    }, [t("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
    })])
}
const Os = {},
    Ws = {
        width: "146",
        height: "146",
        viewBox: "0 0 146 146",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Ls = t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M73 2C33.7878 2 2 33.7878 2 73C2 112.212 33.7878 144 73 144C112.212 144 144 112.212 144 73C144 33.7878 112.212 2 73 2ZM0 73C0 32.6832 32.6832 0 73 0C113.317 0 146 32.6832 146 73C146 113.317 113.317 146 73 146C32.6832 146 0 113.317 0 73Z",
        fill: "currentColor"
    }, null, -1),
    qs = t("path", {
        d: "M49 41L17 73L49 105V81L81 57H49V41Z",
        fill: "currentColor"
    }, null, -1),
    Zs = t("path", {
        d: "M129 73L97 41V65L65 89H97V105L129 73Z",
        fill: "currentColor"
    }, null, -1),
    Rs = [Ls, qs, Zs];

function Ks(s, o) {
    return n(), c("svg", Ws, Rs)
}
const Ys = Y(Os, [
        ["render", Ks]
    ]),
    Xs = t("div", {
        class: "w-full -top-px left-0 bg-gradient-to-b from-neutral-950 to-transparent -z-[2] max-w-[1500px] absolute h-[200px]"
    }, null, -1),
    Js = {
        class: "flex flex-col items-center pt-3 text-center"
    },
    Qs = {
        class: "text-2xl sm:text-3xl font-bold leading-none"
    },
    eo = t("h2", {
        class: "mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.375] max-w-[1100px]"
    }, " Join the mission to govern, protect and grow the ZKsync protocol ", -1),
    to = O({
        __name: "Hero",
        setup(s) {
            const o = Ee();
            return (l, r) => {
                const i = Ys;
                return n(), c("div", null, [Xs, t("div", Js, [t("h1", Qs, [h(" Introducing the " + $(e(o).public.token.symbol) + " token ", 1), a(i, {
                    class: "inline-block ml-1 sm:ml-2 w-7 h-7 sm:w-9 sm:h-9 align-sub"
                })]), eo])])
            }
        }
    }),
    so = {},
    oo = {
        width: "1510",
        height: "3000",
        viewBox: "0 0 1510 3000",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    no = Ct('<circle cx="750" cy="2250" r="749" transform="rotate(180 750 2250)" stroke="url(#paint0_linear_2661_6394)" stroke-width="2"></circle><circle cx="750" cy="750" r="750" transform="matrix(-1 0 0 1 1509 1)" stroke="url(#paint1_linear_2661_6394)" stroke-width="2"></circle><circle opacity="0.5" cx="700" cy="700" r="700" transform="matrix(-1 0 0 1 1459 101)" stroke="url(#paint2_linear_2661_6394)" stroke-width="2"></circle><circle opacity="0.2" cx="759" cy="851" r="650" stroke="url(#paint3_linear_2661_6394)" stroke-width="2"></circle><defs><linearGradient id="paint0_linear_2661_6394" x1="750" y1="1501" x2="750" y2="2999" gradientUnits="userSpaceOnUse"><stop offset="0.5" stop-color="#1755F4" stop-opacity="0"></stop><stop offset="0.7" stop-color="#1755F4"></stop><stop offset="0.8" stop-color="#DA393C"></stop><stop offset="1" stop-color="#FFD923"></stop></linearGradient><linearGradient id="paint1_linear_2661_6394" x1="750" y1="0" x2="750" y2="1500" gradientUnits="userSpaceOnUse"><stop offset="0.5" stop-color="#1755F4" stop-opacity="0"></stop><stop offset="0.7" stop-color="#1755F4"></stop><stop offset="0.8" stop-color="#DA393C"></stop><stop offset="1" stop-color="#FFD923"></stop></linearGradient><linearGradient id="paint2_linear_2661_6394" x1="700" y1="0" x2="700" y2="1400" gradientUnits="userSpaceOnUse"><stop offset="0.5" stop-color="#1755F4" stop-opacity="0"></stop><stop offset="0.7" stop-color="#1755F4"></stop><stop offset="0.8" stop-color="#8A39DA"></stop><stop offset="1" stop-color="#23F2FF"></stop></linearGradient><linearGradient id="paint3_linear_2661_6394" x1="759" y1="201" x2="759" y2="1501" gradientUnits="userSpaceOnUse"><stop offset="0.5" stop-color="#1755F4" stop-opacity="0"></stop><stop offset="0.7" stop-color="#1755F4"></stop><stop offset="0.8" stop-color="#35FF49"></stop><stop offset="1" stop-color="#2361FF"></stop></linearGradient></defs>', 5),
    ao = [no];

function io(s, o) {
    return n(), c("svg", oo, ao)
}
const ro = Y(so, [
        ["render", io]
    ]),
    lo = {},
    co = {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    uo = t("g", null, [t("path", {
        d: "M18 6.5V5.5C18 4.94772 17.5523 4.5 17 4.5H4.5C3.94771 4.5 3.5 4.94772 3.5 5.5V18.5C3.5 19.0523 3.94772 19.5 4.5 19.5H19.5C20.0523 19.5 20.5 19.0523 20.5 18.5V7.5C20.5 6.94772 20.0523 6.5 19.5 6.5H4.5C3.94772 6.5 3.5 6.05228 3.5 5.5V5.5",
        stroke: "currentColor"
    }), t("path", {
        d: "M20.5 11.5H16C15.1716 11.5 14.5 12.1716 14.5 13V13C14.5 13.8284 15.1716 14.5 16 14.5H20.5",
        stroke: "currentColor"
    })], -1),
    mo = [uo];

function po(s, o) {
    return n(), c("svg", co, mo)
}
const ho = Y(lo, [
        ["render", po]
    ]),
    _o = {},
    vo = {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    go = t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        fill: "currentColor",
        d: "M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
    }, null, -1),
    fo = [go];

function yo(s, o) {
    return n(), c("svg", vo, fo)
}
const he = Y(_o, [
        ["render", yo]
    ]),
    wo = O({
        __name: "Input",
        props: {
            modelValue: {
                type: String,
                default: ""
            },
            hasError: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["update:modelValue"],
        setup(s, {
            emit: o
        }) {
            const l = s,
                r = o,
                i = k({
                    get: () => l.modelValue,
                    set: u => r("update:modelValue", u)
                });
            return (u, m) => Te((n(), c("input", {
                "onUpdate:modelValue": m[0] || (m[0] = g => Ue(i) ? i.value = g : null),
                class: ue(["input-line", {
                    "has-error": s.hasError
                }])
            }, null, 2)), [
                [ls, e(i)]
            ])
        }
    }),
    ko = Y(wo, [
        ["__scopeId", "data-v-da346a3a"]
    ]),
    bo = ["aria-hidden", "tabindex"],
    xo = {
        class: "height-transition-inner"
    },
    $o = O({
        __name: "HeightTransition",
        props: {
            opened: {
                type: Boolean,
                default: !1
            }
        },
        setup(s) {
            return (o, l) => (n(), c("div", {
                class: ue(["height-transition duration-300 transition-all", {
                    "is-opened": s.opened
                }]),
                "aria-hidden": s.opened ? void 0 : !0,
                tabindex: s.opened ? void 0 : -1
            }, [t("div", xo, [Ke(o.$slots, "default", {}, void 0, !0)])], 10, bo))
        }
    }),
    be = Y($o, [
        ["__scopeId", "data-v-e50049a0"]
    ]),
    Co = O({
        __name: "ContentBlock",
        props: {
            as: {
                type: [String, Object],
                default: "div"
            },
            variant: {
                type: String,
                default: "default"
            }
        },
        setup(s) {
            return (o, l) => (n(), N(dt(s.as), {
                class: ue(["content-block-container", `variant-${s.variant}`])
            }, {
                default: v(() => [Ke(o.$slots, "default", {}, void 0, !0)]),
                _: 3
            }, 8, ["class"]))
        }
    }),
    We = Y(Co, [
        ["__scopeId", "data-v-3b580ac1"]
    ]),
    Ao = {
        class: "mx-auto max-w-full"
    },
    So = {
        class: "mb-8 w-full text-lg md:text-xl text-center text-neutral-900"
    },
    Mo = {
        class: "text-nowrap"
    },
    To = {
        class: "text-nowrap"
    },
    Io = {
        class: "text-red-600 text-center mt-2"
    },
    Bo = {
        class: "text-sm text-center w-full text-balance"
    },
    Eo = t("a", {
        class: "underline underline-offset-4",
        href: "https://zknation.io/privacy",
        target: "_blank"
    }, "Privacy policy", -1),
    Uo = O({
        __name: "Main",
        setup(s) {
            const o = re(),
                {
                    isEligibilityCheckInProgress: l,
                    eligibilityCheckError: r
                } = G(o),
                i = B(""),
                u = k(() => {
                    if (i.value) return cs(i.value.toLowerCase()) ? "address" : "github"
                }),
                m = async () => {
                    u.value && (u.value === "address" ? await o.checkEligibilityByAddress(us(i.value)) : await o.checkEligibilityByGithubUsername(i.value))
                };
            return (g, p) => {
                const f = ho,
                    d = he,
                    _ = ko,
                    x = le,
                    P = be,
                    T = We,
                    C = At;
                return n(), c("div", Ao, [a(T, {
                    variant: "light",
                    class: "relative z-[1] mx-auto"
                }, {
                    default: v(() => [t("p", So, [h(" Eligibility check: enter "), t("span", Mo, [a(f, {
                        class: "h-6 w-6 inline align-text-bottom",
                        "aria-hidden": "true"
                    }), h(" wallet")]), h(" address or "), t("span", To, [a(d, {
                        class: "h-6 w-6 inline align-sub",
                        "aria-hidden": "true"
                    }), h(" GitHub")]), h(" user name. ")]), t("form", {
                        class: "flex flex-col md:flex-row gap-4 w-full",
                        onSubmit: p[1] || (p[1] = ds(y => m(), ["prevent"]))
                    }, [a(_, {
                        modelValue: e(i),
                        "onUpdate:modelValue": p[0] || (p[0] = y => Ue(i) ? i.value = y : null),
                        required: "",
                        maxlength: "42",
                        placeholder: "Address or GitHub username"
                    }, null, 8, ["modelValue"]), a(x, {
                        loading: e(l),
                        variant: "primary",
                        type: "submit"
                    }, {
                        default: v(() => [h("Check")]),
                        _: 1
                    }, 8, ["loading"])], 32), a(P, {
                        opened: !!e(r)
                    }, {
                        default: v(() => {
                            var y;
                            return [t("p", Io, $((y = e(r)) == null ? void 0 : y.message), 1)]
                        }),
                        _: 1
                    }, 8, ["opened"])]),
                    _: 1
                }), a(T, {
                    variant: "undercard",
                    class: "-z-[1] backdrop-blur-[6px] mx-auto"
                }, {
                    default: v(() => [t("p", Bo, [h(" By checking your eligibility you agree to the "), a(C, {
                        to: {
                            query: {
                                modal: "legal",
                                "modal-block": "airdrop-terms"
                            }
                        },
                        replace: "",
                        class: "underline underline-offset-2"
                    }, {
                        default: v(() => [h("Airdrop Terms & Conditions")]),
                        _: 1
                    }), h(" and "), Eo, h(". ")])]),
                    _: 1
                })])
            }
        }
    }),
    Po = {
        key: 0,
        class: "alert-icon-container"
    },
    zo = {
        class: "alert-body"
    },
    _t = O({
        __name: "Alert",
        props: {
            variant: {
                type: String
            },
            icon: {
                type: [Object, Function]
            }
        },
        setup(s) {
            return (o, l) => (n(), c("div", {
                class: ue(["alert-container", [`variant-${s.variant}`, {
                    "has-icon": !!s.icon
                }]])
            }, [s.icon ? (n(), c("div", Po, [(n(), N(dt(s.icon), {
                class: "alert-icon",
                "aria-hidden": "true"
            }))])) : L("", !0), t("div", zo, [Ke(o.$slots, "default")])], 2))
        }
    }),
    Ho = t("div", {
        class: "pt-6"
    }, null, -1),
    Fo = {
        key: 0
    },
    Vo = {
        class: "font-medium"
    },
    jo = ["disabled"],
    Do = {
        class: "font-medium"
    },
    No = {
        key: 1
    },
    Go = {
        class: "font-medium"
    },
    Oo = ["disabled"],
    Ut = O({
        __name: "WrongAccountAlert",
        props: {
            visible: {
                type: Boolean,
                default: !0
            }
        },
        setup(s) {
            const o = ke(),
                l = re(),
                {
                    user: r
                } = G(o),
                {
                    eligibility: i,
                    isEligibilityCheckInProgress: u
                } = G(l),
                {
                    account: m,
                    isConnected: g
                } = G(Pe()),
                {
                    githubAccount: p,
                    isGithubConnected: f
                } = G(Ye()),
                d = k(() => {
                    var _, x, P, T, C;
                    if (((_ = r.value) == null ? void 0 : _.platform) === "address" && g.value && r.value.address !== m.value.address) return {
                        type: "address",
                        expectedAccount: r.value.address,
                        actualAccount: m.value.address
                    };
                    if (((x = r.value) == null ? void 0 : x.platform) === "github" && f.value) {
                        if (r.value.username !== ((P = p.value) == null ? void 0 : P.username)) return {
                            type: "github",
                            expectedAccount: r.value.username,
                            actualAccount: p.value.username
                        };
                        if ((T = i.value) != null && T.associatedAddress && g.value && ((C = i.value) == null ? void 0 : C.associatedAddress) !== m.value.address) return {
                            type: "address",
                            variant: "associated",
                            expectedAccount: i.value.associatedAddress,
                            actualAccount: m.value.address
                        }
                    }
                });
            return (_, x) => {
                const P = _t,
                    T = be;
                return n(), N(T, {
                    opened: e(d) && s.visible
                }, {
                    default: v(() => [Ho, a(P, {
                        variant: "warning",
                        icon: e(Gs)
                    }, {
                        default: v(() => {
                            var C, y, I;
                            return [((C = e(d)) == null ? void 0 : C.type) === "address" ? (n(), c("p", Fo, [h($(e(d).variant === "associated" ? "Associated" : "Viewing eligibility of an") + " address ", 1), t("span", Vo, $(("shortenAddress" in _ ? _.shortenAddress : e(de))(e(d).expectedAccount)), 1), h(" but a different account is connected. Check eligibility of "), t("button", {
                                class: "font-medium underline underline-offset-2",
                                disabled: e(u),
                                onClick: x[0] || (x[0] = b => e(l).checkEligibilityOfConnectedAddress())
                            }, [t("span", Do, $(("shortenAddress" in _ ? _.shortenAddress : e(de))(e(d).actualAccount)), 1)], 8, jo)])) : ((y = e(r)) == null ? void 0 : y.platform) === "github" ? (n(), c("p", No, [h(" Viewing eligibility of a GitHub account "), t("span", Go, $(e(r).username), 1), h(" but a different GitHub account is connected. "), t("button", {
                                class: "font-medium underline underline-offset-2",
                                disabled: e(u),
                                onClick: x[1] || (x[1] = b => e(l).checkEligibilityOfConnectedGithub())
                            }, " Check " + $((I = e(p)) == null ? void 0 : I.username) + " eligibility ", 9, Oo)])) : L("", !0)]
                        }),
                        _: 1
                    }, 8, ["icon"])]),
                    _: 1
                }, 8, ["opened"])
            }
        }
    }),
    Wo = {
        class: "relative isolate mx-auto flex w-full max-w-[700px] flex-col items-center"
    },
    Lo = {
        class: "text-center text-lg md:text-xl text-neutral-950"
    },
    qo = {
        class: "font-medium whitespace-nowrap"
    },
    Zo = {
        key: 1
    },
    Ro = {
        class: "font-medium whitespace-nowrap"
    },
    Ko = t("br", null, null, -1),
    Yo = O({
        __name: "NotEligible",
        setup(s) {
            const o = ke(),
                l = re(),
                {
                    user: r
                } = G(o),
                {
                    isEligibilityCheckInProgress: i
                } = G(l);
            return (u, m) => {
                const g = je,
                    p = he,
                    f = Ut,
                    d = le,
                    _ = We;
                return n(), c("div", Wo, [a(_, {
                    variant: "light",
                    class: "relative isolate overflow-hidden"
                }, {
                    default: v(() => {
                        var x;
                        return [t("h2", Lo, [h(" Unfortunately, "), e(r).platform === "address" ? (n(), c(K, {
                            key: 0
                        }, [h(" address "), t("span", qo, [a(g, {
                            address: e(r).address,
                            class: "inline-block align-sub w-6 h-6"
                        }, null, 8, ["address"]), h(" " + $(("shortenAddress" in u ? u.shortenAddress : e(de))(e(r).address)), 1)])], 64)) : e(r).platform === "github" ? (n(), c("span", Zo, [h(" GitHub account "), t("span", Ro, [a(p, {
                            class: "inline-block align-sub w-6 h-6"
                        }), h(" " + $((x = e(r)) == null ? void 0 : x.username), 1)])])) : L("", !0), Ko, h(" is not eligible for the airdrop. ")]), a(f), a(d, {
                            loading: e(i),
                            variant: "primary",
                            class: "mt-8 w-full",
                            onClick: m[0] || (m[0] = P => e(o).logout())
                        }, {
                            default: v(() => [h(" Check another address or GitHub ")]),
                            _: 1
                        }, 8, ["loading"])]
                    }),
                    _: 1
                })])
            }
        }
    }),
    Xo = s => (_e("data-v-ba92882c"), s = s(), ve(), s),
    Jo = Xo(() => t("span", {
        class: "sr-only"
    }, "Next page", -1)),
    Qo = O({
        __name: "ButtonProgress",
        props: {
            isVisible: {
                type: Boolean,
                required: !0
            },
            percentage: {
                type: Number,
                required: !0
            },
            srText: {
                type: String,
                required: !0
            },
            icon: {
                type: [Object, Function],
                required: !0
            },
            variant: {
                type: String,
                default: "dark"
            }
        },
        emits: ["pressed"],
        setup(s, {
            emit: o
        }) {
            const l = o;
            return (r, i) => {
                const u = le;
                return n(), c("div", {
                    class: ue(["progress-button-container", `variant-${s.variant}`])
                }, [a(u, {
                    onClick: i[0] || (i[0] = m => l("pressed"))
                }, {
                    default: v(() => [(n(), N(dt(s.icon), {
                        class: "h-6 w-6"
                    })), Jo]),
                    _: 1
                }), a(ne, Xe(Je(("TransitionOpacity" in r ? r.TransitionOpacity : e(Ne))(500, 500))), {
                    default: v(() => [s.isVisible ? (n(), c("div", {
                        key: 0,
                        class: "button-interval-loader",
                        style: De({
                            "--percentage": `${s.percentage}%`
                        })
                    }, null, 4)) : L("", !0)]),
                    _: 1
                }, 16)], 2)
            }
        }
    }),
    en = Y(Qo, [
        ["__scopeId", "data-v-ba92882c"]
    ]),
    vt = s => (_e("data-v-6ea2fa3c"), s = s(), ve(), s),
    tn = {
        class: "relative"
    },
    sn = ["onClick"],
    on = ["src", "alt"],
    nn = vt(() => t("div", {
        class: "triangle-container"
    }, [t("div", {
        class: "triangle-inner"
    }, [t("div", {
        class: "triangle"
    })])], -1)),
    an = vt(() => t("div", {
        class: "absolute pointer-events-none w-4 top-0 h-full from-neutral-950 to-transparent -left-px bg-gradient-to-r transition-opacity"
    }, null, -1)),
    rn = vt(() => t("div", {
        class: "absolute pointer-events-none w-4 top-0 h-full from-neutral-950 to-transparent -right-px bg-gradient-to-l transition-opacity"
    }, null, -1)),
    at = 40,
    it = 20,
    ln = O({
        __name: "HeaderIcons",
        props: {
            ecosystemItems: {
                type: Array,
                required: !0
            },
            scrollPercentage: {
                type: Number,
                required: !0
            },
            visiblePercentage: {
                type: Number,
                required: !0
            }
        },
        emits: ["icon-clicked"],
        setup(s, {
            emit: o
        }) {
            const l = s,
                r = o,
                i = B(null),
                {
                    x: u
                } = St(i, {
                    behavior: "instant"
                }),
                m = k(() => l.ecosystemItems.length * (at + it));
            X(() => l.scrollPercentage, p => {
                const f = p / 100 * m.value,
                    d = l.visiblePercentage / 100 * m.value,
                    _ = f - d + (at + it) / 2,
                    x = Math.max(0, Math.min(_, m.value - d));
                u.value = x
            }, {
                immediate: !0
            });
            const g = p => {
                const f = 100 * (at + it) / m.value,
                    d = p * f,
                    _ = d + f,
                    x = l.scrollPercentage,
                    P = x + l.visiblePercentage;
                if (!(_ > x && d < P)) return 0;
                const C = Math.max(d, x);
                return (Math.min(_, P) - C) / f
            };
            return (p, f) => (n(), c("div", tn, [t("div", {
                ref_key: "iconsContainer",
                ref: i,
                class: "ecosystem-header-icons"
            }, [(n(!0), c(K, null, Ie(s.ecosystemItems, (d, _) => (n(), c("div", {
                key: _,
                class: "ecosystem-header-icon-item",
                style: De({
                    "--percentage": g(_)
                }),
                onClick: x => r("icon-clicked", _)
            }, [t("img", {
                src: d.iconUrl,
                alt: d.label
            }, null, 8, on), nn], 12, sn))), 128))], 512), an, rn]))
        }
    }),
    cn = Y(ln, [
        ["__scopeId", "data-v-6ea2fa3c"]
    ]),
    dn = ["href"],
    un = ["src", "alt"],
    mn = ["src"],
    pn = ["src", "alt"],
    hn = {
        class: "ecosystem-item-body"
    },
    _n = {
        class: "ecosystem-item-label-container"
    },
    vn = ["src", "alt"],
    gn = {
        class: "ecosystem-item-label"
    },
    fn = {
        class: "ecosystem-item-description"
    },
    yn = O({
        __name: "Card",
        props: {
            label: {
                type: String,
                required: !0
            },
            description: {
                type: String,
                required: !0
            },
            iconUrl: {
                type: String,
                required: !0
            },
            imgUrl: {
                type: String,
                required: !0
            },
            videoUrl: {
                type: String
            },
            url: {
                type: String,
                required: !0
            }
        },
        setup(s) {
            const o = s,
                l = window.location.origin,
                {
                    isLoading: r
                } = ms({
                    src: o.imgUrl
                }),
                i = B(null),
                u = B(null),
                m = B(!1),
                g = B(!1),
                p = B(!1),
                {
                    stop: f
                } = Mt(i, ([{
                    isIntersecting: d,
                    intersectionRatio: _
                }]) => {
                    m.value = d, p.value = _ >= .9
                }, {
                    threshold: [0, .9]
                });
            return X(m, d => {
                d && (g.value = !0), u.value && (d || (u.value.pause(), u.value.currentTime = 0, u.value.autoplay = !1))
            }, {
                immediate: !0
            }), X(p, d => {
                var _;
                d && u.value && (u.value.autoplay = !0, (_ = u.value) == null || _.play())
            }, {
                immediate: !0
            }), Be(() => {
                f()
            }), (d, _) => (n(), c("a", {
                ref_key: "card",
                ref: i,
                class: "ecosystem-item",
                href: s.url,
                target: "_blank",
                rel: "nofollow noopener noreferrer"
            }, [t("div", null, [t("div", {
                class: ue(["ecosystem-item-photo", {
                    "is-loading": e(r)
                }])
            }, [t("img", {
                src: s.imgUrl,
                alt: `${s.label} preview`,
                loading: "lazy"
            }, null, 8, un), a(ne, Xe(Je(("TransitionOpacity" in d ? d.TransitionOpacity : e(Ne))())), {
                default: v(() => [e(g) && s.videoUrl ? (n(), c("video", {
                    key: 0,
                    ref_key: "video",
                    ref: u,
                    class: "ecosystem-item-video",
                    src: `${e(l)}${s.videoUrl}`,
                    loop: "",
                    muted: "",
                    playsinline: ""
                }, null, 8, mn)) : (n(), c("img", {
                    key: 1,
                    class: "ecosystem-item-video",
                    src: `${e(l)}${s.imgUrl}`,
                    alt: s.label
                }, null, 8, pn))]),
                _: 1
            }, 16)], 2), t("div", hn, [t("div", _n, [t("img", {
                class: "ecosystem-item-icon",
                src: s.iconUrl,
                alt: s.label
            }, null, 8, vn), t("span", gn, $(s.label), 1)]), t("p", fn, $(s.description), 1)])])], 8, dn))
        }
    }),
    wn = Y(yn, [
        ["__scopeId", "data-v-87b7b7a6"]
    ]),
    kn = s => () => {
        let o = s += 1831565813;
        return o = Math.imul(o ^ o >>> 15, o | 1), o ^= o + Math.imul(o ^ o >>> 7, o | 61), ((o ^ o >>> 14) >>> 0) / 4294967296
    },
    bn = s => (_e("data-v-f5d11d2f"), s = s(), ve(), s),
    xn = {
        class: "ecosystem-block"
    },
    $n = bn(() => t("h4", {
        class: "ecosystem-block-title"
    }, "Explore the ZKsync Ecosystem", -1)),
    Cn = {
        class: "ecosystem-header"
    },
    An = {
        class: "relative w-full mt-8"
    },
    Se = 20,
    bt = .9,
    rt = 8e3,
    Sn = O({
        __name: "Ecosystem",
        setup(s) {
            const o = ut("zksync-claim-token-ecosystem-seed", null, void 0, {
                serializer: Tt.number
            });
            o.value || (o.value = new Date().getTime());
            const l = kn(o.value || 0),
                r = [{
                    imgUrl: "/img/ecosystem/syncswap-preview.jpg",
                    iconUrl: "/img/ecosystem/syncswap.svg",
                    videoUrl: "/img/ecosystem/syncswap-video.mp4",
                    label: "SyncSwap",
                    description: "Swap cryptocurrencies in a user-friendly manner, leveraging advanced technology for secure, transparent, and decentralized trading",
                    url: "https://syncswap.xyz"
                }, {
                    imgUrl: "/img/ecosystem/koi-preview.jpg",
                    iconUrl: "/img/ecosystem/koi.svg",
                    videoUrl: "/img/ecosystem/koi-video.mp4",
                    label: "Koi Finance",
                    description: "Engage in decentralized cryptocurrency trading, participate in yield farming opportunities, and explore investment in bond-like financial instruments",
                    url: "https://koi.finance"
                }, {
                    imgUrl: "/img/ecosystem/zeroland-preview.jpg",
                    iconUrl: "/img/ecosystem/zeroland.png",
                    videoUrl: "/img/ecosystem/zeroland-video.mp4",
                    label: "Zeroland",
                    description: "Earn attractive yields by lending and borrowing cryptocurrency assets on ZeroLend, the largest lending market on ZKsync era.",
                    url: "https://app.zerolend.xyz"
                }, {
                    imgUrl: "/img/ecosystem/maverick-preview.jpg",
                    iconUrl: "/img/ecosystem/maverick.svg",
                    videoUrl: "/img/ecosystem/maverick-video.mp4",
                    label: "Maverick",
                    description: "The Liquidity Operating System for DeFi, built to offer the most gas-efficient swaps and capital efficient liquidity strategies. Swap with lower gas cost and put more of your tokens to work when you provide liquidity.",
                    url: "https://mav.xyz"
                }, {
                    imgUrl: "/img/ecosystem/holdstation-preview.jpg",
                    iconUrl: "/img/ecosystem/holdstation.png",
                    videoUrl: "/img/ecosystem/holdstation-video.mp4",
                    label: "Holdstation",
                    description: "Engage in decentralized cryptocurrency management and trading enhanced by Account Abstraction, featuring a launchpad for innovative project launches.",
                    url: "https://holdstation.com"
                }, {
                    imgUrl: "/img/ecosystem/tevaera-preview.jpg",
                    iconUrl: "/img/ecosystem/tevaera.png",
                    videoUrl: "/img/ecosystem/tevaera-video.mp4",
                    label: "Tevaera",
                    description: "Build and play multi-genre games with Tevaera's comprehensive L3-based gaming ecosystem on ZKsync, powered by the ZK Stack.",
                    url: "https://tevaera.com"
                }, {
                    imgUrl: "/img/ecosystem/libera-preview.jpg",
                    iconUrl: "/img/ecosystem/libera.png",
                    videoUrl: "/img/ecosystem/libera-video.mp4",
                    label: "Libera",
                    description: "The decentralized gaming platform on ZKsync Era. Play, compete, collect, trade and build games on Libera.",
                    url: "https://kreatorland.com"
                }, {
                    imgUrl: "/img/ecosystem/vest-preview.jpg",
                    iconUrl: "/img/ecosystem/vest.png",
                    videoUrl: "/img/ecosystem/vest-video.mp4",
                    label: "Vest",
                    description: "A robust, highly capital-efficient perps DEX backed by Jane Street.",
                    url: "https://vest.exchange"
                }, {
                    imgUrl: "/img/ecosystem/zkswap-preview.jpg",
                    iconUrl: "/img/ecosystem/zkswap.png",
                    videoUrl: "/img/ecosystem/zkswap-video.mp4",
                    label: "zkSwap Finance",
                    description: "The 1st Swap to Earn AMM decentralized exchange (DEX) on ZKsync Era. Swap, Earn, and find gems easily with zkSwap Finance.",
                    url: "https://zkswap.finance"
                }, {
                    imgUrl: "/img/ecosystem/moodymadness-preview.jpg",
                    iconUrl: "/img/ecosystem/moodymadness.svg",
                    videoUrl: "/img/ecosystem/moodymadness-video.mp4",
                    label: "Moody Madness",
                    description: "Dive into Web3 gaming with Moody Madness, a multiplayer racing game. Win meme coins, rare NFTs, and MXP tokens. Get ready for the MAZE L2 Hyperchain!",
                    url: "https://moodymadness.com"
                }, {
                    imgUrl: "/img/ecosystem/derivio-preview.jpg",
                    iconUrl: "/img/ecosystem/derivio.svg",
                    videoUrl: "/img/ecosystem/derivio-video.mp4",
                    label: "Derivio",
                    description: "Engage in decentralized trading of derivatives with high capital efficiency, leveraging a platform that supports a wide variety of digital assets.",
                    url: "https://derivio.xyz"
                }, {
                    imgUrl: "/img/ecosystem/clave-preview.jpg",
                    iconUrl: "/img/ecosystem/clave.png",
                    videoUrl: "/img/ecosystem/clave-video.mp4",
                    label: "Clave",
                    description: "One-click onboarding to on-chain payments. Experience the smartest self-custody and hardware-level security.",
                    url: "https://getclave.io"
                }, {
                    imgUrl: "/img/ecosystem/raise-preview.jpg",
                    iconUrl: "/img/ecosystem/raise.png",
                    videoUrl: "/img/ecosystem/raise-video.mp4",
                    label: "xRaise",
                    description: "Next-generation Web3 gaming wallet and engine. Easily recover your wallet with email or friend confirmations. Log in using on-chain verified passkeys. Enjoy hassle-free Web3 gaming—the way it's supposed to be.",
                    url: "https://xraise.io"
                }, {
                    imgUrl: "/img/ecosystem/hypercomic-preview.jpeg",
                    iconUrl: "/img/ecosystem/hypercomic.svg",
                    label: "Hypercomic",
                    description: "A Read2Earn Webtoon App with more than 200 webtoon/mangas. Earn by reading Webtoons, playing Games, and NFTs boosts.",
                    url: "https://play.hypercomic.io/Webtoon"
                }, {
                    imgUrl: "/img/ecosystem/zkmarkets-preview.jpg",
                    iconUrl: "/img/ecosystem/zkmarkets.svg",
                    videoUrl: "/img/ecosystem/zkmarkets-video.mp4",
                    label: "zkMarkets",
                    description: "zkMarkets is a native NFT marketplace on ZKsync Era, supporting paymasters and smart wallets like Clave. It features a launchpad, rarity tools, and aggregated listings.",
                    url: "https://www.zkmarkets.com/zksync-era"
                }, {
                    imgUrl: "/img/ecosystem/bigint-preview.jpg",
                    iconUrl: "/img/ecosystem/bigint.svg",
                    videoUrl: "/img/ecosystem/bigint-video.mp4",
                    label: "BigInt",
                    description: "360-degree, NFT & Meme incubation, NFT Marketplace & Launchpad. We take projects from zero to sustainable structures with our own products.",
                    url: "https://bigint.co"
                }, {
                    imgUrl: "/img/ecosystem/veggies-preview.jpg",
                    iconUrl: "/img/ecosystem/veggies.png",
                    videoUrl: "/img/ecosystem/veggies-video.mp4",
                    label: "Veggies Gotchi",
                    description: "Don’t spend your ETH, invest it by adopting a Veggie pet! Raise it to unlock yield and many incentives from various protocols, just by playing a fun game!",
                    url: "https://veggiesgotchi.com"
                }, {
                    imgUrl: "/img/ecosystem/click-preview.jpg",
                    iconUrl: "/img/ecosystem/nodle.png",
                    videoUrl: "/img/ecosystem/click-video.mp4",
                    label: "Click",
                    description: "The world’s first digital trust network for creating authentic content and combating fake news. We’re on a mission to empower the world with truthful content where creators and consumers everywhere can easily create authentic media content via a digital proof of authenticity.",
                    url: "https://clickapp.com"
                }].sort(() => l() - .5),
                i = B(!1),
                u = B([]),
                {
                    width: m
                } = lt(k(() => u.value[0])),
                g = k(() => m.value ? Math.ceil(m.value) : 0),
                p = B(null),
                {
                    width: f
                } = lt(p),
                {
                    x: d,
                    isScrolling: _
                } = St(p, {
                    behavior: k(() => i.value ? "smooth" : "instant")
                }),
                x = k(() => {
                    const U = r.length * (g.value + Se);
                    return d.value / U * 100
                }),
                P = k(() => {
                    const U = r.length * (g.value + Se);
                    return f.value / U * 100
                }),
                T = k(() => {
                    const U = (g.value + Se) * bt;
                    return Math.floor(f.value / U)
                }),
                C = k(() => 1),
                y = k(() => {
                    const U = g.value - g.value * bt;
                    return Math.ceil(Math.max(0, d.value - U) / (g.value + Se))
                }),
                I = k(() => y.value + T.value - 1),
                b = U => {
                    const j = U * (g.value + Se),
                        oe = T.value * g.value + (T.value - 1) * Se,
                        ee = f.value - oe;
                    return j - ee / 2
                },
                w = () => {
                    if (!_.value)
                        if (I.value === r.length - 1) d.value = 0;
                        else {
                            const U = Math.min(I.value + C.value, r.length - 1);
                            d.value = b(U - T.value + 1)
                        }
                },
                F = () => {
                    if (!_.value)
                        if (y.value === 0) d.value = b(r.length - T.value);
                        else {
                            const U = Math.max(0, y.value - C.value);
                            d.value = b(U)
                        }
                },
                S = U => {
                    if (_.value) return;
                    const j = Math.max(0, U - T.value + 1);
                    d.value = b(j)
                },
                z = ps(rt, {
                    controls: !0,
                    immediate: !1,
                    callback: () => {
                        I.value === r.length - 1 ? d.value = b(0) : w(), se()
                    }
                }),
                A = k(() => z.isActive.value),
                V = B(!1),
                {
                    stop: E
                } = Mt(p, ([{
                    intersectionRatio: U
                }]) => {
                    V.value = U >= .3
                }, {
                    threshold: [.3]
                });
            let H;
            const Z = B(0),
                J = B(0),
                ce = It({
                    interval: 50
                }),
                q = k(() => Math.ceil((ce.value - Z.value) / (J.value - Z.value) * 100));
            X(_, U => {
                if (!U) return;
                const j = J.value - ce.value;
                j + j * .1 < rt && (D(), R())
            });
            const se = () => {
                    Z.value = new Date().getTime(), J.value = new Date().getTime() + rt
                },
                D = () => {
                    clearTimeout(H), H = void 0, z.reset(), z.pause()
                },
                Q = () => {
                    se(), z.resume()
                },
                R = () => {
                    H = setTimeout(() => {
                        Q()
                    }, 1e4)
                };
            return X(V, U => {
                U ? Q() : D()
            }), Ge(() => {
                S(Math.floor(r.length / 2)), i.value = !0
            }), Be(() => {
                E(), H && clearTimeout(H)
            }), (U, j) => {
                const oe = en,
                    ee = cn,
                    ie = wn,
                    Fe = le;
                return n(), c("div", xn, [$n, t("div", Cn, [a(oe, {
                    "sr-text": "Previous page",
                    icon: e(js),
                    percentage: 0,
                    "is-visible": !1,
                    onPressed: j[0] || (j[0] = te => F()),
                    onMouseover: j[1] || (j[1] = te => D()),
                    onMouseout: j[2] || (j[2] = te => R())
                }, null, 8, ["icon"]), a(ee, {
                    "ecosystem-items": e(r),
                    "scroll-percentage": e(x),
                    "visible-percentage": e(P),
                    onIconClicked: j[3] || (j[3] = te => S(te))
                }, null, 8, ["ecosystem-items", "scroll-percentage", "visible-percentage"]), a(oe, {
                    "sr-text": "Next page",
                    icon: e(Ds),
                    percentage: e(q),
                    "is-visible": e(A),
                    onPressed: j[4] || (j[4] = te => w()),
                    onMouseover: j[5] || (j[5] = te => D()),
                    onMouseout: j[6] || (j[6] = te => R())
                }, null, 8, ["icon", "percentage", "is-visible"])]), t("div", An, [t("div", {
                    ref_key: "cardsContainer",
                    ref: p,
                    class: "ecosystem-body"
                }, [(n(!0), c(K, null, Ie(e(r), (te, tt) => (n(), c("div", {
                    ref_for: !0,
                    ref_key: "cards",
                    ref: u,
                    key: tt,
                    class: "ecosystem-body-card"
                }, [a(ie, Xe(Je(te)), null, 16)]))), 128))], 512)]), a(Fe, {
                    variant: "primary",
                    as: "a",
                    href: "https://zksync.io/ecosystem",
                    target: "_blank",
                    class: "mx-auto w-fit mt-8"
                }, {
                    default: v(() => [h(" Explore the ZKsync Ecosystem ")]),
                    _: 1
                })])
            }
        }
    }),
    gt = Y(Sn, [
        ["__scopeId", "data-v-f5d11d2f"]
    ]),
    Mn = ze("/img/zknation.jpg"),
    Tn = {},
    In = t("h2", {
        class: "text-xl sm:text-3xl md:text-4xl font-bold leading-[1.375] text-center"
    }, " Powering the world's largest ZK network ", -1),
    Bn = {
        class: "relative pb-8 mt-9"
    },
    En = {
        class: "mt-16 md:mt-44 max-w-2xl lg:max-w-max mx-auto grid items-center gap-10 lg:grid-cols-2 lg:gap-[100px]"
    },
    Un = {
        class: "flex flex-col justify-between"
    },
    Pn = t("h4", {
        class: "text-primary-300 sm:text-lg font-bold uppercase mb-2 sm:mb-4"
    }, "Scale Freedom", -1),
    zn = t("h3", {
        class: "text-4xl lg:text-5xl font-bold"
    }, "Join ZK Nation", -1),
    Hn = t("p", {
        class: "text-base text-neutral-300 lg:text-lg py-8 lg:py-20"
    }, " Become part of a mission-aligned community stewarding the ZKsync protocol. Whether you’re a developer, an innovator, or simply an advocate for freedom, ZK Nation offers an open platform for collaboration and innovation. A freer, more progressive, and prosperous future lies ahead for all of us. ", -1),
    Fn = {
        class: "flex items-center justify-center sm:justify-start flex-wrap gap-y-4 gap-2"
    },
    Vn = t("img", {
        class: "mx-auto h-auto w-full object-contain rounded-[36px]",
        src: Mn,
        alt: "ZK Nation"
    }, null, -1);

function jn(s, o) {
    const l = gt,
        r = le;
    return n(), c("div", null, [In, t("div", Bn, [a(l)]), t("div", En, [t("div", Un, [Pn, zn, Hn, t("div", Fn, [a(r, {
        class: "w-full sm:w-max",
        variant: "primary",
        as: "a",
        href: "https://zknation.io",
        target: "_blank"
    }, {
        default: v(() => [h(" Introducing ZK Nation ")]),
        _: 1
    }), a(r, {
        class: "w-full sm:w-max",
        as: "a",
        href: "https://github.com/zksync/credo",
        target: "_blank"
    }, {
        default: v(() => [h(" ZK Credo ")]),
        _: 1
    })])]), Vn])])
}
const Dn = Y(Tn, [
        ["render", jn]
    ]),
    Nn = 30 * 24 * 60 * 60 * 1e3,
    Gn = s => {
        const o = ut("zksync-claim-token-siwe", null, void 0, {
            serializer: Tt.object
        });
        X(s, p => {
            p || (o.value = null)
        }, {
            immediate: !0
        });
        const l = k(() => !!o.value && s.value === o.value.address && r(o.value.issuedAt)),
            r = p => !(new Date().getTime() - new Date(p).getTime() > Nn),
            i = async ({
                message: p,
                signature: f
            }) => {
                const d = new we.SiweMessage(p),
                    {
                        data: _
                    } = await d.verify({
                        signature: f,
                        nonce: d.nonce
                    }, {
                        provider: new hs(me.rpcUrls.default.http[0], {
                            chainId: me.id,
                            name: me.name
                        })
                    });
                if (!r(_.issuedAt)) throw new we.SiweError("Expired login request.");
                if (_.chainId !== me.id) throw new we.SiweError("Wrong network chain id.");
                if (_.address !== s.value) throw new we.SiweError("Address doesn't match connected account.");
                return _
            },
            u = ({
                nonce: p,
                address: f,
                chainId: d,
                statement: _
            }) => new we.SiweMessage({
                version: "1",
                domain: window.location.host,
                uri: window.location.origin,
                address: f,
                chainId: d,
                nonce: p,
                statement: _
            }).prepareMessage();
        return {
            siweConfig: Ps({
                createMessage: ({
                    nonce: p,
                    address: f,
                    chainId: d
                }) => u({
                    nonce: p,
                    address: f,
                    chainId: d,
                    statement: "Sign in With Ethereum."
                }),
                getNonce: async () => await Promise.resolve(we.generateNonce()),
                getSession: async () => {
                    if (!o.value) return null;
                    const p = await i(o.value);
                    return {
                        address: p.address,
                        chainId: p.chainId
                    }
                },
                verifyMessage: async ({
                    message: p,
                    signature: f
                }) => {
                    const d = await i({
                        message: p,
                        signature: f
                    });
                    return o.value = {
                        address: d.address,
                        issuedAt: d.issuedAt,
                        message: p,
                        signature: f
                    }, !0
                },
                signOut: async () => (await Promise.resolve(), o.value = null, !0)
            }),
            isSiweAuthenticated: l,
            getSiweMessageParams: async () => {
                if (!o.value) throw new Error("Account is not authenticated with SIWE.");
                return await i(o.value), o.value
            },
            createSiweMessage: u
        }
    },
    On = () => {
        const s = Ee(),
            o = fs(),
            l = re(),
            {
                account: r
            } = G(Pe()),
            {
                githubAccount: i
            } = G(Ye()),
            {
                eligibility: u
            } = G(l),
            {
                createSiweMessage: m
            } = Gn(k(() => {
                var x;
                return (x = r.value) == null ? void 0 : x.address
            })),
            {
                inProgress: g,
                execute: p
            } = ct(async () => {
                if (!i.value) throw new Error("GitHub account is not connected");
                const x = m({
                        nonce: we.generateNonce(),
                        address: r.value.address,
                        chainId: me.id,
                        statement: `Associate ${r.value.address} with GitHub account ${i.value.username}`
                    }),
                    P = await _s(vs, {
                        account: r.value.address,
                        message: x
                    });
                return {
                    message: x,
                    signature: P
                }
            }),
            {
                inProgress: f,
                error: d,
                execute: _
            } = ct(async () => {
                if (!i.value) throw new Error("GitHub account is not connected");
                const x = await p();
                if (!x) return;
                const {
                    message: P,
                    signature: T
                } = x, C = await o.getAssessmentToken("associate_address"), y = await gs(`${s.public.apiUrl}/associate-address`, {
                    method: "POST",
                    body: {
                        airdropId: u.value.airdrop.id,
                        message: P,
                        signature: T
                    },
                    headers: {
                        Authorization: `Bearer ${i.value.token}`,
                        recaptcha: C,
                        "x-api-key": s.public.apiKey
                    }
                });
                return await new Promise(I => setTimeout(I, 1e3)), await l.refreshEligibility(), y
            });
        return {
            signAssociationInProgress: g,
            associatingAddressInProgress: f,
            associatingAddressError: d,
            associateAddress: _
        }
    },
    Wn = {
        key: 0,
        class: "flex items-center justify-center"
    },
    Ln = t("span", null, "Connect GitHub", -1),
    qn = {
        key: 1,
        class: "flex items-center justify-center"
    },
    Zn = {
        key: 2,
        class: "flex items-center justify-center"
    },
    Rn = t("span", null, "Connect Wallet", -1),
    Kn = {
        key: 3,
        class: "flex items-center justify-center"
    },
    Yn = {
        key: 4,
        class: "flex items-center justify-center"
    },
    Xn = {
        key: 5
    },
    Jn = {
        class: "whitespace-nowrap font-medium"
    },
    Qn = {
        key: 6
    },
    ea = {
        class: "whitespace-nowrap font-medium"
    },
    ta = {
        class: "text-center w-full"
    },
    sa = {
        key: 0,
        class: "whitespace-nowrap font-medium"
    },
    oa = {
        class: "text-center text-neutral-300"
    },
    na = {
        class: "tabular-nums"
    },
    aa = O({
        __name: "AssociateAlert",
        props: {
            visible: {
                type: Boolean,
                required: !0
            },
            targetDateIso: {
                type: String,
                required: !0
            },
            targetDateFormatted: {
                type: String,
                required: !0
            },
            airdropFinalized: {
                type: Boolean,
                required: !0
            }
        },
        setup(s) {
            const o = s,
                l = Ye(),
                r = ke(),
                i = Pe(),
                u = re(),
                m = B(!1),
                g = () => {
                    m.value = !0, i.disconnect()
                },
                p = It({
                    interval: 1e3
                }),
                f = k(() => {
                    if (o.airdropFinalized) return 0;
                    const D = new Date(o.targetDateIso).getTime() - p.value;
                    return Math.max(0, D)
                }),
                d = k(() => {
                    const j = Math.floor(f.value / 864e5),
                        oe = Math.floor(f.value % 864e5 / 36e5),
                        ee = Math.floor(f.value % 36e5 / 6e4),
                        ie = Math.floor(f.value % 6e4 / 1e3);
                    return j > 0 ? `${j} day${j>1?"s":""} and ${oe} hour${oe!==1?"s":""}` : oe > 0 ? `${oe} hour${oe>1?"s":""} and ${ee} minute${ee!==1?"s":""}` : ee > 0 ? `${ee} minute${ee>1?"s":""} and ${ie} second${ie!==1?"s":""}` : `${ie} second${ie!==1?"s":""}`
                });
            X(f, D => {
                D || (m.value = !1)
            });
            const {
                githubAccount: _,
                githubAuthInProgress: x,
                isGithubConnected: P
            } = G(l), {
                account: T,
                isConnected: C,
                walletName: y,
                isCorrectNetworkSet: I,
                setCorrectNetworkInProgress: b,
                setCorrectNetworkError: w
            } = G(i), {
                user: F,
                isReadOnly: S
            } = G(r), {
                signAssociationInProgress: z,
                associatingAddressInProgress: A,
                associatingAddressError: V,
                associateAddress: E
            } = On(), {
                eligibility: H,
                isEligibilityCheckInProgress: Z
            } = G(u), J = k(() => F.value.platform === "github"), ce = k(() => !J.value || !o.visible ? "hidden" : H.value.associatedAddress && !m.value ? "success" : f.value ? "associate" : "hidden");
            X(S, D => {
                var Q, R;
                ((Q = F.value) == null ? void 0 : Q.platform) === "github" && !D && !((R = H.value) != null && R.associatedAddress) && u.refreshEligibility()
            });
            const q = k(() => {
                    var D;
                    if (!P.value || !S.value && !((D = H.value) != null && D.associatedAddress) && Z.value) return {
                        key: "connect-github",
                        func: l.connectGithub
                    };
                    if (S.value) return {
                        key: "invalid-github-connected",
                        func: l.logoutGithub
                    };
                    if (C.value)
                        if (I.value) {
                            if (z.value) return {
                                key: "associate-address-sign-in-progress"
                            };
                            if (A.value) return {
                                key: "associate-address-in-progress"
                            }
                        } else return b.value ? {
                            key: "set-correct-network-in-progress"
                        } : {
                            key: "set-correct-network",
                            func: i.setCorrectNetwork
                        };
                    else return {
                        key: "connect-wallet",
                        func: i.openModal
                    };
                    return {
                        key: "associate-address",
                        func: async () => {
                            await E() && (m.value = !1)
                        }
                    }
                }),
                se = k(() => {
                    if (q.value.key === "invalid-github-connected") return "Wrong GitHub account connected";
                    if (q.value.key === "set-correct-network" && w.value) return w.value.message;
                    if (q.value.key === "associate-address" && V.value) return V.value.message
                });
            return (D, Q) => {
                const R = je,
                    U = le,
                    j = be,
                    oe = _t;
                return n(), c("div", null, [a(j, {
                    opened: e(ce) === "associate"
                }, {
                    default: v(() => [a(oe, {
                        variant: "warning",
                        class: "mt-6"
                    }, {
                        default: v(() => {
                            var ee;
                            return [t("div", null, [t("p", null, [h(" To claim tokens on " + $(s.targetDateFormatted) + ", you must associate address to your GitHub account. ", 1), e(q).key === "connect-github" || e(q).key === "invalid-github-connected" ? (n(), c(K, {
                                key: 0
                            }, [h("Connect your GitHub first.")], 64)) : e(q).key === "connect-wallet" ? (n(), c(K, {
                                key: 1
                            }, [h("Connect wallet to associate address.")], 64)) : L("", !0)]), ((ee = e(F)) == null ? void 0 : ee.platform) === "github" ? (n(), N(U, {
                                key: 0,
                                loading: e(x) || e(Z) || e(A) || !e(I) && e(b),
                                variant: "primary",
                                class: "w-full mt-4",
                                onClick: e(q).func
                            }, {
                                default: v(() => [a(ne, Oe("TransitionPrimaryButtonText" in D ? D.TransitionPrimaryButtonText : e(mt), {
                                    mode: "out-in"
                                }), {
                                    default: v(() => {
                                        var ie;
                                        return [e(q).key === "connect-github" ? (n(), c("span", Wn, [a(he, {
                                            class: "h-6 w-6 mr-2 flex-shrink-0"
                                        }), Ln])) : e(q).key === "invalid-github-connected" ? (n(), c("span", qn, [a(he, {
                                            class: "h-6 w-6 mr-2 flex-shrink-0"
                                        }), t("span", null, "Disconnect " + $((ie = e(_)) == null ? void 0 : ie.username), 1)])) : e(q).key === "connect-wallet" ? (n(), c("span", Zn, [a(e(ht), {
                                            class: "h-6 w-6 mr-2 flex-shrink-0"
                                        }), Rn])) : e(q).key === "set-correct-network" ? (n(), c("span", Kn, " Change wallet network to " + $(e(me).name), 1)) : e(q).key === "set-correct-network-in-progress" || e(q).key === "associate-address-sign-in-progress" ? (n(), c("span", Yn, " Continue in your " + $(e(y)) + " wallet ", 1)) : e(q).key === "associate-address" ? (n(), c("span", Xn, [h(" Associate with "), t("span", Jn, [a(R, {
                                            address: e(T).address,
                                            class: "h-6 w-6 inline-block align-bottom"
                                        }, null, 8, ["address"]), h(" " + $(("shortenAddress" in D ? D.shortenAddress : e(de))(e(T).address)), 1)])])) : e(q).key === "associate-address-in-progress" ? (n(), c("span", Qn, [h(" Associating with "), t("span", ea, [a(R, {
                                            address: e(T).address,
                                            class: "h-6 w-6 inline-block align-bottom"
                                        }, null, 8, ["address"]), h(" " + $(("shortenAddress" in D ? D.shortenAddress : e(de))(e(T).address)), 1)])])) : L("", !0)]
                                    }),
                                    _: 1
                                }, 16)]),
                                _: 1
                            }, 8, ["loading", "onClick"])) : L("", !0), a(j, {
                                opened: !!e(se)
                            }, {
                                default: v(() => [a(ne, {
                                    "leave-active-class": e(se) ? void 0 : "transition duration-[500ms]"
                                }, {
                                    default: v(() => [(n(), c("p", {
                                        key: e(se),
                                        class: "text-red-600 text-center pt-2 w-full"
                                    }, $(e(se)), 1))]),
                                    _: 1
                                }, 8, ["leave-active-class"])]),
                                _: 1
                            }, 8, ["opened"])])]
                        }),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["opened"]), a(j, {
                    opened: e(ce) === "success"
                }, {
                    default: v(() => [a(oe, {
                        variant: "success",
                        class: "mt-6"
                    }, {
                        default: v(() => [t("p", ta, [h(" Wallet "), e(H).associatedAddress ? (n(), c("span", sa, [a(R, {
                            address: e(H).associatedAddress,
                            class: "h-6 w-6 inline-block align-bottom"
                        }, null, 8, ["address"]), h(" " + $(("shortenAddress" in D ? D.shortenAddress : e(de))(e(H).associatedAddress)), 1)])) : L("", !0), h(" is associated with your GitHub account ")])]),
                        _: 1
                    }), e(f) ? (n(), c(K, {
                        key: 0
                    }, [t("button", {
                        class: "block mx-auto text-center underline underline-offset-2 mt-4 transition-colors text-neutral-300 hover:text-inherit",
                        onClick: Q[0] || (Q[0] = ee => g())
                    }, " Change associated wallet "), t("p", oa, [h(" You can change your address within the next "), t("span", na, $(e(d)), 1)])], 64)) : L("", !0)]),
                    _: 1
                }, 8, ["opened"])])
            }
        }
    }),
    ia = {
        class: "odometer"
    },
    ra = O({
        __name: "Odometer",
        props: {
            value: {},
            totalDigits: {},
            duration: {}
        },
        setup(s) {
            const o = s,
                l = k(() => {
                    const r = o.value.toString().padStart(o.totalDigits, "0"),
                        i = r.search(/[^0]/);
                    return Array.from(r).map((u, m) => ({
                        index: m,
                        isLeadingZero: u === "0" && (i === -1 || m < i),
                        currentDigit: parseInt(u)
                    }))
                });
            return (r, i) => (n(), c("div", ia, [(n(!0), c(K, null, Ie(e(l), u => (n(), c("div", {
                key: u.index,
                class: ue(["digit-column", {
                    "leading-zero": u.isLeadingZero
                }]),
                style: De({
                    transform: `translateY(-${(9-u.currentDigit)*100}%)`,
                    transitionDuration: `${r.duration}ms`
                })
            }, [(n(), c(K, null, Ie(10, m => t("div", {
                key: m,
                class: "digit"
            }, $(10 - m), 1)), 64))], 6))), 128))]))
        }
    }),
    la = Y(ra, [
        ["__scopeId", "data-v-bd5f1734"]
    ]),
    ca = s => (_e("data-v-746efe66"), s = s(), ve(), s),
    da = {
        class: "countdown-number"
    },
    ua = {
        class: "countdown-col-real-value",
        "aria-hidden": "true"
    },
    ma = ca(() => t("span", {
        class: "opacity-0"
    }, "0", -1)),
    pa = O({
        __name: "CountdownNumber",
        props: {
            value: {
                type: String,
                required: !0
            }
        },
        setup(s) {
            return (o, l) => (n(), c("div", da, [t("div", ua, $(s.value), 1), a(ne, {
                name: "number-change"
            }, {
                default: v(() => [(n(), c("div", {
                    key: s.value[0],
                    class: "countdown-col-value"
                }, [t("span", null, $(s.value[0]), 1)]))]),
                _: 1
            }), a(ne, {
                name: "number-change"
            }, {
                default: v(() => [(n(), c("div", {
                    key: s.value[1],
                    class: "countdown-col-value"
                }, [ma, t("span", null, $(s.value[1]), 1)]))]),
                _: 1
            })]))
        }
    }),
    ha = Y(pa, [
        ["__scopeId", "data-v-746efe66"]
    ]),
    Qe = s => (_e("data-v-5c0cadcd"), s = s(), ve(), s),
    _a = {
        class: "countdown-col countdown-days"
    },
    va = Qe(() => t("div", {
        class: "countdown-col-label"
    }, "Days", -1)),
    ga = {
        class: "countdown-col countdown-hours"
    },
    fa = Qe(() => t("div", {
        class: "countdown-col-label"
    }, "Hours", -1)),
    ya = {
        class: "countdown-col countdown-minutes"
    },
    wa = Qe(() => t("div", {
        class: "countdown-col-label"
    }, "Minutes", -1)),
    ka = {
        class: "countdown-col countdown-seconds"
    },
    ba = Qe(() => t("div", {
        class: "countdown-col-label"
    }, "Seconds", -1)),
    xt = 1e3,
    xa = O({
        __name: "Countdown",
        props: {
            targetDate: {
                type: String,
                required: !0
            }
        },
        setup(s) {
            const o = s,
                l = ys(),
                r = k(() => new Date(o.targetDate).getTime()),
                i = k(() => Math.max(r.value - l.value.getTime(), 0)),
                u = 60 * xt,
                m = 60 * u,
                g = 24 * m,
                p = k(() => i.value >= g ? "dd-hh" : i.value >= m ? "hh-mm" : "mm-ss"),
                f = k(() => Math.min(Math.floor(i.value / g), 99).toString().padStart(2, "0")),
                d = k(() => Math.floor(i.value % g / m).toString().padStart(2, "0")),
                _ = k(() => Math.floor(i.value % m / u).toString().padStart(2, "0")),
                x = k(() => Math.floor(i.value % u / xt).toString().padStart(2, "0"));
            return (P, T) => {
                const C = ha;
                return n(), c("div", {
                    class: ue(["countdown-container", `countdown-mobile-${e(p)}`])
                }, [t("div", _a, [va, a(C, {
                    value: e(f)
                }, null, 8, ["value"])]), t("div", ga, [fa, a(C, {
                    value: e(d)
                }, null, 8, ["value"])]), t("div", ya, [wa, a(C, {
                    value: e(_)
                }, null, 8, ["value"])]), t("div", ka, [ba, a(C, {
                    value: e(x)
                }, null, 8, ["value"])])], 2)
            }
        }
    }),
    $a = Y(xa, [
        ["__scopeId", "data-v-5c0cadcd"]
    ]),
    Ca = O({
        __name: "Checkbox",
        props: {
            modelValue: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["update:modelValue"],
        setup(s, {
            emit: o
        }) {
            const l = s,
                r = o,
                i = k({
                    get: () => l.modelValue,
                    set: u => r("update:modelValue", u)
                });
            return (u, m) => (n(), c("span", {
                class: ue(["flex items-center justify-center cursor-pointer select-none h-6 w-6 border rounded-md transition-colors", e(i) ? "border-success-600 bg-success-600" : "border-neutral-400 bg-neutral-700/50"])
            }, [Te(t("input", {
                "onUpdate:modelValue": m[0] || (m[0] = g => Ue(i) ? i.value = g : null),
                type: "checkbox",
                class: "hidden"
            }, null, 512), [
                [ws, e(i)]
            ]), a(ne, Xe(Je(("TransitionOpacity" in u ? u.TransitionOpacity : e(Ne))())), {
                default: v(() => [e(i) ? (n(), N(e(Me), {
                    key: 0,
                    class: "h-5 w-5"
                })) : L("", !0)]),
                _: 1
            }, 16)], 2))
        }
    }),
    Aa = {
        class: "text-center"
    },
    Sa = {
        key: 0
    },
    Ma = {
        class: "flex justify-center items-center text-center mx-auto cursor-pointer"
    },
    Ta = {
        key: 1
    },
    Ia = {
        key: 0
    },
    Ba = {
        class: "whitespace-nowrap font-medium"
    },
    Ea = {
        key: 1
    },
    Ua = {
        class: "whitespace-nowrap font-medium"
    },
    Pa = {
        key: 3
    },
    za = {
        class: "whitespace-nowrap font-medium"
    },
    Ha = {
        key: 0,
        class: "flex items-center justify-center"
    },
    Fa = t("span", null, "Connect GitHub", -1),
    Va = {
        key: 1,
        class: "flex items-center justify-center"
    },
    ja = {
        key: 2,
        class: "flex items-center justify-center"
    },
    Da = t("span", null, "Connect Wallet", -1),
    Na = {
        key: 3,
        class: "flex items-center justify-center"
    },
    Ga = {
        key: 4,
        class: "flex items-center justify-center"
    },
    Oa = {
        key: 5,
        class: "flex items-center justify-center"
    },
    Wa = {
        key: 6,
        class: "flex items-center justify-center"
    },
    La = O({
        __name: "ClaimStart",
        props: {
            visible: {
                type: Boolean,
                required: !0
            }
        },
        emits: ["start-claim"],
        setup(s, {
            emit: o
        }) {
            const l = o,
                r = Ye(),
                i = ke(),
                u = Pe(),
                m = re(),
                {
                    githubAccount: g,
                    githubAuthInProgress: p,
                    isGithubConnected: f,
                    githubAuthError: d
                } = G(r),
                {
                    isConnected: _,
                    walletName: x,
                    isCorrectNetworkSet: P,
                    setCorrectNetworkInProgress: T,
                    setCorrectNetworkError: C
                } = G(u),
                {
                    user: y,
                    isReadOnly: I
                } = G(i),
                {
                    eligibility: b,
                    isCorrectAddressConnected: w,
                    isEligibilityCheckInProgress: F
                } = G(m);
            X(I, E => {
                var H, Z;
                ((H = y.value) == null ? void 0 : H.platform) === "github" && !E && !((Z = b.value) != null && Z.associatedAddress) && m.refreshEligibility()
            });
            const S = B(!1),
                z = B(!1);
            X(S, E => {
                E && (z.value = !1)
            });
            const A = k(() => {
                    var E, H, Z, J;
                    if (((E = y.value) == null ? void 0 : E.platform) === "github" && (!f.value || F.value)) return {
                        key: "connect-github",
                        func: r.connectGithub
                    };
                    if (((H = y.value) == null ? void 0 : H.platform) === "github" && I.value) return {
                        key: "invalid-github-connected",
                        func: r.logoutGithub
                    };
                    if (((Z = y.value) == null ? void 0 : Z.platform) === "github" && !I.value && !((J = b.value) != null && J.associatedAddress)) return {
                        key: "no-associated-address",
                        func: r.logoutGithub
                    };
                    if (_.value)
                        if (w.value) {
                            if (!P.value) return T.value ? {
                                key: "set-correct-network-in-progress"
                            } : {
                                key: "set-correct-network",
                                func: u.setCorrectNetwork
                            }
                        } else return {
                            key: "invalid-wallet-connected",
                            func: u.disconnect
                        };
                    else return {
                        key: "connect-wallet",
                        func: u.openModal
                    };
                    return {
                        key: "claim",
                        func: () => {
                            if (!S.value) {
                                z.value = !0;
                                return
                            }
                            l("start-claim")
                        }
                    }
                }),
                V = k(() => {
                    var E, H;
                    if (A.value.key === "invalid-github-connected") return "Wrong GitHub account connected";
                    if (A.value.key === "invalid-wallet-connected") return "Wrong address connected";
                    if (A.value.key === "connect-github" && d.value) return d.value.message;
                    if (A.value.key === "set-correct-network" && C.value) return C.value.message;
                    if (A.value.key === "no-associated-address") return "No associated address found. Please refresh the page.";
                    if (((H = (E = b.value) == null ? void 0 : E.claimStatus) == null ? void 0 : H.status) === "failed") return "There was an error during your recent claim attempt. Please try again.";
                    if (z.value) return "Please accept the terms and conditions to continue"
                });
            return (E, H) => {
                const Z = Ca,
                    J = At,
                    ce = je,
                    q = le,
                    se = be,
                    D = We;
                return n(), N(se, {
                    opened: s.visible
                }, {
                    default: v(() => [a(D, {
                        class: "mt-6 mx-auto"
                    }, {
                        default: v(() => {
                            var Q, R;
                            return [t("div", null, [t("p", Aa, [e(A).key === "claim" ? (n(), c("span", Sa, [t("label", Ma, [a(Z, {
                                modelValue: e(S),
                                "onUpdate:modelValue": H[0] || (H[0] = U => Ue(S) ? S.value = U : null),
                                class: "mr-2 flex-shrink-0"
                            }, null, 8, ["modelValue"]), t("span", null, [h(" By continuing, I agree to the "), a(J, {
                                to: {
                                    query: {
                                        modal: "legal",
                                        "modal-block": "airdrop-terms"
                                    }
                                },
                                replace: "",
                                class: "underline underline-offset-2"
                            }, {
                                default: v(() => [h("Airdrop Terms & Conditions")]),
                                _: 1
                            }), h(". ")])])])) : e(A).key === "set-correct-network" || e(A).key === "set-correct-network-in-progress" ? (n(), c("span", Ta, " Make sure correct network is set in your " + $(e(x)) + " wallet ", 1)) : ((Q = e(y)) == null ? void 0 : Q.platform) === "github" ? (n(), c(K, {
                                key: 2
                            }, [e(A).key === "connect-github" || e(A).key === "invalid-github-connected" || e(A).key === "no-associated-address" ? (n(), c("span", Ia, [h("Connect with "), t("span", Ba, [a(he, {
                                class: "h-6 w-6 inline-block align-bottom"
                            }), h(" " + $(e(y).username), 1)]), h(" to start claim process")])) : e(A).key === "connect-wallet" || e(A).key === "invalid-wallet-connected" ? (n(), c("span", Ea, [h(" Now connect previously associated wallet "), t("span", Ua, [a(ce, {
                                address: e(b).associatedAddress,
                                class: "h-6 w-6 inline-block align-bottom"
                            }, null, 8, ["address"]), h(" " + $(("shortenAddress" in E ? E.shortenAddress : e(de))(e(b).associatedAddress)), 1)])])) : L("", !0)], 64)) : ((R = e(y)) == null ? void 0 : R.platform) === "address" ? (n(), c("span", Pa, [h("Connect wallet "), t("span", za, [a(ce, {
                                address: e(y).address,
                                class: "h-6 w-6 inline-block align-bottom"
                            }, null, 8, ["address"]), h(" " + $(("shortenAddress" in E ? E.shortenAddress : e(de))(e(y).address)), 1)]), h(" to start claim process")])) : L("", !0)]), a(q, {
                                loading: e(p) || e(F) || !e(P) && e(T),
                                variant: "primary",
                                class: "w-full mt-4",
                                onClick: e(A).func
                            }, {
                                default: v(() => [a(ne, Oe("TransitionPrimaryButtonText" in E ? E.TransitionPrimaryButtonText : e(mt), {
                                    mode: "out-in"
                                }), {
                                    default: v(() => {
                                        var U;
                                        return [e(A).key === "connect-github" ? (n(), c("span", Ha, [a(he, {
                                            class: "h-6 w-6 mr-2 flex-shrink-0"
                                        }), Fa])) : e(A).key === "invalid-github-connected" || e(A).key === "no-associated-address" ? (n(), c("span", Va, [a(he, {
                                            class: "h-6 w-6 mr-2 flex-shrink-0"
                                        }), t("span", null, "Disconnect " + $((U = e(g)) == null ? void 0 : U.username), 1)])) : e(A).key === "connect-wallet" ? (n(), c("span", ja, [a(e(ht), {
                                            class: "h-6 w-6 mr-2 flex-shrink-0"
                                        }), Da])) : e(A).key === "invalid-wallet-connected" ? (n(), c("span", Na, " Disconnect wallet ")) : e(A).key === "set-correct-network" ? (n(), c("span", Ga, " Change wallet network to " + $(e(me).name), 1)) : e(A).key === "set-correct-network-in-progress" ? (n(), c("span", Oa, " Continue in your " + $(e(x)) + " wallet ", 1)) : e(A).key === "claim" ? (n(), c("span", Wa, " Continue to claim ")) : L("", !0)]
                                    }),
                                    _: 1
                                }, 16)]),
                                _: 1
                            }, 8, ["loading", "onClick"]), a(se, {
                                opened: !!e(V)
                            }, {
                                default: v(() => [a(ne, {
                                    "leave-active-class": e(V) ? void 0 : "transition duration-[500ms]"
                                }, {
                                    default: v(() => [(n(), c("p", {
                                        key: e(V),
                                        class: "text-red-600 text-center pt-2 w-full"
                                    }, $(e(V)), 1))]),
                                    _: 1
                                }, 8, ["leave-active-class"])]),
                                _: 1
                            }, 8, ["opened"])])]
                        }),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["opened"])
            }
        }
    }),
    qa = t("p", {
        class: "sm:text-lg"
    }, "Eligibility criteria", -1),
    Za = {
        ref: "criteriaBlockArrow"
    },
    Ra = {
        class: "pt-6 text-neutral-300"
    },
    Ka = {
        class: "flex items-center text-lg gap-2 my-1"
    },
    Ya = {
        class: "break-words overflow-hidden"
    },
    Xa = t("div", {
        class: "mt-6 text-center"
    }, [h(" For more information about eligibility, "), t("a", {
        href: "https://blog.zknation.io/zk-token",
        target: "_blank",
        class: "underline underline-offset-2"
    }, "click here"), h(". ")], -1),
    Ja = O({
        __name: "Criteria",
        props: {
            opened: {
                type: Boolean,
                required: !0
            },
            totalCriteriaDisplayed: {
                type: Number,
                required: !0
            },
            underLinkVisible: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["update:opened"],
        setup(s, {
            emit: o
        }) {
            const l = s,
                r = o,
                i = k({
                    get: () => l.opened,
                    set: p => r("update:opened", p)
                }),
                {
                    eligibility: u
                } = G(re()),
                m = k(() => {
                    var _;
                    const p = ((_ = u.value) == null ? void 0 : _.criteria) || [],
                        f = p.filter(x => x.criteriaType === "zksync"),
                        d = p.filter(x => x.criteriaType === "external");
                    return {
                        zksync: {
                            title: "ZKsync user",
                            items: f
                        },
                        external: {
                            title: "External",
                            items: d
                        }
                    }
                }),
                g = k(() => {
                    const p = l.totalCriteriaDisplayed,
                        f = {
                            zksync: m.value.zksync.items,
                            external: m.value.external.items
                        };
                    let d = p;
                    const _ = {
                        zksync: 0,
                        external: 0
                    };
                    return _.external = Math.min(f.external.length, d), d -= _.external, _.zksync = Math.min(f.zksync.length, d), _
                });
            return (p, f) => {
                const d = be,
                    _ = We,
                    x = pt("motion-slide-visible-once-left");
                return n(), N(_, null, {
                    default: v(() => [t("button", {
                        class: "flex w-full justify-between gap-4",
                        onClick: f[0] || (f[0] = P => i.value = !e(i))
                    }, [qa, t("div", Za, [a(e(ks), {
                        class: ue(["h-6 w-6 transform transition", {
                            "-rotate-180": e(i)
                        }])
                    }, null, 8, ["class"])], 512)]), a(d, {
                        class: "duration-500",
                        opened: e(i)
                    }, {
                        default: v(() => [t("div", null, [t("ul", null, [(n(!0), c(K, null, Ie(e(m), (P, T) => (n(), c(K, {
                            key: T
                        }, [t("li", null, [a(d, {
                            class: "duration-300",
                            opened: e(g)[T] > 0
                        }, {
                            default: v(() => [Te((n(), c("div", Ra, [h($(P.title), 1)])), [
                                [x]
                            ])]),
                            _: 2
                        }, 1032, ["opened"])]), (n(!0), c(K, null, Ie(P.items, (C, y) => (n(), c("li", {
                            key: y
                        }, [a(d, {
                            class: "duration-300",
                            opened: y > P.items.length - e(g)[T] - 1
                        }, {
                            default: v(() => [Te((n(), c("div", Ka, [a(e(Me), {
                                class: "h-6 w-6 text-green-400 flex-shrink-0"
                            }), t("p", Ya, $(C.description), 1)])), [
                                [x]
                            ])]),
                            _: 2
                        }, 1032, ["opened"])]))), 128))], 64))), 128))]), a(d, {
                            class: "duration-300",
                            opened: s.underLinkVisible
                        }, {
                            default: v(() => [Xa]),
                            _: 1
                        }, 8, ["opened"])])]),
                        _: 1
                    }, 8, ["opened"])]),
                    _: 1
                })
            }
        }
    }),
    Qa = {},
    ei = {
        width: "1302",
        height: "144",
        viewBox: "0 0 1302 144",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    ti = Ct('<path d="M0.891602 72L651.433 72" stroke="url(#paint0_linear_3050_68326)" stroke-width="2"></path><path d="M1301.11 72L651.433 72" stroke="url(#paint1_linear_3050_68326)" stroke-width="2"></path><defs><linearGradient id="paint0_linear_3050_68326" x1="0.67461" y1="71.4991" x2="651.433" y2="71.4991" gradientUnits="userSpaceOnUse"><stop stop-color="#1755F4" stop-opacity="0"></stop><stop offset="0.25" stop-color="#1755F4"></stop><stop offset="0.5" stop-color="#DA393C"></stop><stop offset="1" stop-color="#FFD923"></stop></linearGradient><linearGradient id="paint1_linear_3050_68326" x1="1301.33" y1="71.5" x2="651.434" y2="71.5" gradientUnits="userSpaceOnUse"><stop stop-color="#1755F4" stop-opacity="0"></stop><stop offset="0.25" stop-color="#1755F4"></stop><stop offset="0.5" stop-color="#DA393C"></stop><stop offset="1" stop-color="#FFD923"></stop></linearGradient></defs>', 3),
    si = [ti];

function oi(s, o) {
    return n(), c("svg", ei, si)
}
const ni = Y(Qa, [
        ["render", oi]
    ]),
    ai = {},
    ii = {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    ri = t("path", {
        d: "M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99003 21.75H1.68003L9.41003 12.915L1.25403 2.25H8.08003L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.08403 4.126H5.11703L17.083 19.77Z",
        fill: "currentColor"
    }, null, -1),
    li = [ri];

function ci(s, o) {
    return n(), c("svg", ii, li)
}
const di = Y(ai, [
        ["render", ci]
    ]),
    ui = ze("/video/community.mp4"),
    mi = ze("/img/community.jpg"),
    pi = ze("/video/credo.mp4"),
    hi = ze("/img/credo.jpg"),
    _i = {},
    He = s => (_e("data-v-3430ebff"), s = s(), ve(), s),
    vi = {
        class: "space-y-24 lg:space-y-36"
    },
    gi = {
        class: "info-block-container"
    },
    fi = {
        class: "text-block"
    },
    yi = He(() => t("h3", {
        class: "text-block-title"
    }, "Community", -1)),
    wi = He(() => t("p", {
        class: "text-block-paragraph"
    }, " Stay in the loop with the latest news, protocol updates, project integrations, governance talks, and developer updates by joining our official channels: ", -1)),
    ki = {
        class: "text-block-buttons"
    },
    bi = He(() => t("video", {
        class: "info-block-video",
        src: ui,
        poster: mi,
        autoplay: "",
        loop: "",
        muted: "",
        playsinline: ""
    }, null, -1)),
    xi = {
        class: "info-block-container reversed"
    },
    $i = {
        class: "text-block"
    },
    Ci = He(() => t("h3", {
        class: "text-block-title"
    }, "ZK Credo", -1)),
    Ai = He(() => t("p", {
        class: "text-block-paragraph"
    }, " History shows us how technology can expand personal freedoms, unleashing creativity and innovation, leading to progress and prosperity. Today, we're at the dawn of a new era in blockchains and Web3: the ZK revolution. ", -1)),
    Si = He(() => t("video", {
        class: "info-block-video",
        src: pi,
        poster: hi,
        autoplay: "",
        loop: "",
        muted: "",
        playsinline: ""
    }, null, -1));

function Mi(s, o) {
    const l = ni,
        r = di,
        i = le;
    return n(), c("div", null, [a(l, {
        class: "w-full h-auto my-9"
    }), t("div", vi, [t("div", gi, [t("div", fi, [yi, wi, t("div", ki, [a(i, {
        variant: "primary",
        as: "a",
        href: "https://x.com/thezknation",
        target: "_blank",
        class: "text-block-button"
    }, {
        icon: v(() => [a(r)]),
        default: v(() => [h("Follow @thezknation")]),
        _: 1
    }), a(i, {
        variant: "primary",
        as: "a",
        href: "https://x.com/zksync",
        target: "_blank",
        class: "text-block-button"
    }, {
        icon: v(() => [a(r)]),
        default: v(() => [h("Follow @zksync")]),
        _: 1
    }), a(i, {
        variant: "primary",
        as: "a",
        href: "https://x.com/zksyncdevs",
        target: "_blank",
        class: "text-block-button"
    }, {
        icon: v(() => [a(r)]),
        default: v(() => [h("Follow @zksyncdevs")]),
        _: 1
    })])]), bi]), t("div", xi, [t("div", $i, [Ci, Ai, a(i, {
        variant: "primary",
        as: "a",
        href: "https://github.com/zksync/credo",
        target: "_blank",
        class: "text-block-button-auto"
    }, {
        default: v(() => [h(" Read the full credo ")]),
        _: 1
    })]), Si])]), a(l, {
        class: "w-full h-auto my-9"
    })])
}
const Pt = Y(_i, [
        ["render", Mi],
        ["__scopeId", "data-v-3430ebff"]
    ]),
    Ti = O({
        __name: "AutoHeight",
        setup(s) {
            const o = B(null),
                l = B(null),
                r = new ResizeObserver(() => {
                    l.value && (o.value = l.value.scrollHeight)
                });
            return Ge(() => {
                l.value && r.observe(l.value)
            }), Be(() => {
                r.disconnect()
            }), (i, u) => (n(), c("div", {
                class: "transition-[height] duration-200 will-change-[height]",
                style: De({
                    height: e(o) ? `${e(o)}px` : void 0
                })
            }, [t("div", {
                ref_key: "el",
                ref: l
            }, [Ke(i.$slots, "default")], 512)], 4))
        }
    });

function Ii(s) {
    const o = bs(s),
        l = B("");
    let r;

    function i() {
        r && clearInterval(r)
    }

    function u(g) {
        let p = 0;
        i(), r = Bt(() => {
            l.value += g.charAt(p), p++, p >= g.length && (clearInterval(r), r = void 0)
        }, 25)
    }
    const m = () => {
        o.value !== l.value && (l.value = "", u(o.value))
    };
    return X(o, g => {
        g !== l.value && m()
    }), Be(() => {
        i()
    }), {
        text: k(() => l.value),
        start: m
    }
}
const Bi = ze("/img/zeek.svg"),
    Ei = s => (_e("data-v-1dcfa894"), s = s(), ve(), s),
    Ui = {
        class: "zeek-container"
    },
    Pi = {
        class: "zeek-with-message"
    },
    zi = {
        class: "zeek-message"
    },
    Hi = Ei(() => t("img", {
        class: "zeek-img",
        src: Bi,
        alt: "Zeek"
    }, null, -1)),
    Fi = O({
        __name: "Zeek",
        props: {
            text: {
                type: String,
                required: !0
            }
        },
        setup(s) {
            const o = s,
                {
                    text: l,
                    start: r
                } = Ii(k(() => o.text));
            return Ge(() => {
                r()
            }), (i, u) => {
                const m = Ti,
                    g = pt("motion-slide-bottom");
                return Te((n(), c("div", Ui, [t("div", Pi, [t("div", zi, [a(m, null, {
                    default: v(() => [t("p", null, $(e(l)), 1)]),
                    _: 1
                })]), Hi])])), [
                    [g]
                ])
            }
        }
    }),
    Vi = Y(Fi, [
        ["__scopeId", "data-v-1dcfa894"]
    ]),
    ji = () => ({
        breakpoints: xs({
            xxs: 320,
            xs: 480,
            sm: 640,
            md: 720,
            lg: 1024,
            xl: 1280,
            "2xl": 1920
        })
    }),
    $t = s => {
        const o = B(!1);
        let l;
        const r = () => {
                if (!s.value) {
                    o.value = !1, u();
                    return
                }
                o.value = new Date < new Date(s.value)
            },
            i = () => {
                r(), X(s, r), l = Bt(r, 250)
            },
            u = () => {
                l && (clearInterval(l), l = void 0)
            };
        return i(), $s(u), {
            isBefore: o,
            reset: u
        }
    },
    Di = (s = "smooth") => {
        const {
            y: o
        } = Cs({
            behavior: "smooth"
        });
        return {
            resetScrollTop() {
                o.value > 80 && window.scrollTo({
                    top: 80,
                    behavior: s
                })
            }
        }
    },
    Ni = 5,
    Gi = 200,
    zt = O({
        __name: "FireWork",
        props: {
            autoFirework: {
                type: Boolean,
                default: !0
            }
        },
        setup(s, {
            expose: o
        }) {
            const l = s,
                I = class I {
                    constructor(w, F) {
                        ae(this, "w");
                        ae(this, "h");
                        ae(this, "x");
                        ae(this, "y");
                        ae(this, "vx");
                        ae(this, "vy");
                        ae(this, "alpha");
                        ae(this, "color");
                        ae(this, "move", (w, F, S) => {
                            const z = S / 30;
                            return this.vx += 0, this.vy += I.gravity * z, this.x += this.vx * z, this.y += this.vy * z, this.alpha -= .01 * z, !(this.x <= -this.w || this.x >= w || this.y >= F || this.alpha <= 0)
                        });
                        ae(this, "draw", w => {
                            w.save(), w.beginPath(), w.translate(this.x + this.w / 2, this.y + this.h / 2), w.arc(0, 0, this.w, 0, Math.PI * 2), w.fillStyle = this.color, w.globalAlpha = this.alpha, w.closePath(), w.fill(), w.restore()
                        });
                        this.w = this.h = Math.random() * 6 + 1, this.x = w - this.w / 2, this.y = F - this.h / 2, this.vx = (Math.random() - .5) * 10, this.vy = (Math.random() - .5) * 10, this.alpha = 1, this.color = ""
                    }
                };
            ae(I, "gravity", .06);
            let r = I;
            const i = B(null);
            let u = [];
            const m = [];
            let g = !1;
            const {
                width: p,
                height: f
            } = lt(i);
            X([p, f], ([b, w]) => {
                b && w && (i.value.width = b, i.value.height = w)
            });
            const d = () => {
                    var b, w;
                    return {
                        width: ((b = i.value) == null ? void 0 : b.width) || 0,
                        height: ((w = i.value) == null ? void 0 : w.height) || 0
                    }
                },
                _ = () => {
                    var S;
                    const b = (S = i.value) == null ? void 0 : S.getContext("2d");
                    if (!b) return;
                    const {
                        width: w,
                        height: F
                    } = d();
                    b.fillStyle = "rgba(17, 20, 26, 1)", b.fillRect(0, 0, w, F)
                },
                x = () => {
                    const b = p.value * f.value;
                    return Math.round(2e-4 * b)
                },
                P = b => {
                    var E;
                    const w = (E = i.value) == null ? void 0 : E.getContext("2d");
                    if (!w) return;
                    const {
                        width: F,
                        height: S
                    } = d(), z = .03, A = () => {
                        g && u.length < x() && (u.length === 0 || Math.random() < z) && C(), u = u.filter(H => H.move(F, S, b))
                    }, V = () => {
                        w.globalCompositeOperation = "source-over", w.fillStyle = `rgba(17, 20, 26, ${.01*(b/.85)})`, w.fillRect(0, 0, F, S), w.globalCompositeOperation = "lighter", u.forEach(H => H.draw(w))
                    };
                    A(), V()
                },
                T = (b, w, F = [0, 0, 0].map(() => Math.random() * 200).sort(() => .5 - Math.random())) => {
                    const S = Math.random() * 50 + Math.min(x() / 1.5, 100);
                    F[0] = Math.max(F[0], 190), F[1] = Math.min(F[1], 65);
                    const z = `rgb(${F.join(",")})`;
                    for (let A = 0; A < S; A++) {
                        const V = new r(b, w);
                        V.color = z;
                        const E = Math.sqrt(25 - V.vx * V.vx);
                        V.vy = Math.abs(V.vy) > E ? V.vy > 0 ? E : -E : V.vy, u.push(V)
                    }
                },
                C = () => {
                    const {
                        width: b,
                        height: w
                    } = d();
                    let F = 0,
                        S = !1,
                        z = 0,
                        A = 0;
                    do {
                        S = !1, z = Math.random() * (b - 200) + 100, A = Math.random() * (w - 200) + 100;
                        for (const V of m) {
                            const E = V.x - z,
                                H = V.y - A;
                            if (Math.sqrt(E * E + H * H) < Gi) {
                                S = !0;
                                break
                            }
                        }
                        if (++F > 10) break
                    } while (S);
                    for (T(z, A), m.push({
                            x: z,
                            y: A
                        }); m.length > Ni;) m.shift()
                },
                y = () => {
                    g = !0
                };
            return As(({
                delta: b
            }) => {
                P(b)
            }, {
                fpsLimit: 100
            }), Ge(() => {
                _(), l.autoFirework && y()
            }), o({
                startAutoFirework: y,
                createFireworkAt: T
            }), (b, w) => (n(), c("canvas", {
                ref_key: "canvas",
                ref: i
            }, null, 512))
        }
    }),
    Oi = {
        class: "absolute inset-0 max-h-[600px] -z-[3] h-screen w-full pointer-events-none"
    },
    Wi = {
        class: "relative isolate w-full h-full overflow-hidden"
    },
    Li = t("div", {
        class: "absolute inset-0 w-full h-full bg-gradient-to-t from-neutral-950 to-10% to-transparent"
    }, null, -1),
    qi = t("div", {
        class: "absolute top-0 -left-px w-[10%] h-full bg-gradient-to-r from-neutral-950 to-transparent"
    }, null, -1),
    Zi = t("div", {
        class: "absolute top-0 -right-px w-[10%] h-full bg-gradient-to-l from-neutral-950 to-transparent"
    }, null, -1),
    Ri = {
        class: "md:grid grid-cols-[1fr_max-content] items-center gap-6"
    },
    Ki = {
        class: "text-left text-xl"
    },
    Yi = {
        class: "font-medium whitespace-nowrap"
    },
    Xi = {
        key: 1
    },
    Ji = {
        class: "font-medium whitespace-nowrap"
    },
    Qi = {
        class: "whitespace-nowrap"
    },
    er = {
        class: "leading-none font-semibold"
    },
    tr = {
        class: "text-center sm:text-lg mt-8"
    },
    sr = {
        key: 0
    },
    or = {
        class: "flex items-center gap-1"
    },
    nr = t("span", null, "Skip animation", -1),
    ar = O({
        __name: "Eligibility",
        emits: ["start-claim"],
        setup(s, {
            emit: o
        }) {
            const l = o,
                r = Ee(),
                i = ke(),
                u = re(),
                {
                    breakpoints: m
                } = ji(),
                {
                    user: g,
                    isReadOnly: p
                } = G(i),
                {
                    totalTokenAmount: f,
                    eligibility: d,
                    unclaimedAllocationIndexes: _
                } = G(u),
                {
                    width: x,
                    height: P
                } = Ss(),
                T = ut("zksync-claim-seen-animation", {}),
                C = k({
                    get: () => d.value && T.value[d.value.userId] || !1,
                    set: M => {
                        d.value && (T.value[d.value.userId] = M)
                    }
                }),
                y = B(C.value),
                I = B(C.value),
                b = k(() => d.value ? new Date(d.value.airdrop.claimStartsAt).toLocaleTimeString(void 0, {
                    hour: "numeric",
                    month: "long",
                    day: "numeric",
                    minute: "2-digit"
                }) : ""),
                {
                    isBefore: w
                } = $t(k(() => {
                    var M;
                    return (M = d.value) == null ? void 0 : M.airdrop.claimStartsAt
                })),
                {
                    isBefore: F
                } = $t(k(() => {
                    var M;
                    return (M = d.value) == null ? void 0 : M.airdrop.associationStopsAt
                })),
                S = k(() => {
                    var M;
                    return !!((M = d.value) != null && M.airdrop.contractAddress) && !w.value && r.public.isClaimPublished
                }),
                z = k(() => {
                    var M, W, fe;
                    return ((M = g.value) == null ? void 0 : M.platform) === "github" && !((W = d.value) != null && W.airdrop.contractAddress) && F.value && !((fe = d.value) != null && fe.associatedAddress) && !S.value
                }),
                A = B(0),
                V = k(() => C.value || y.value ? Math.floor(parseFloat(f.value)) : A.value),
                E = B(!C.value),
                H = B(!1);
            X(E, M => {
                M && (H.value = !0)
            }, {
                immediate: !0
            });
            const Z = k(() => {
                    var M;
                    return ((M = d.value) == null ? void 0 : M.criteria.map(W => W.description)) || []
                }),
                J = B(0),
                ce = k(() => C.value || y.value ? Z.value.length : J.value),
                q = () => ({
                    [C.value ? "" : "initial"]: {
                        opacity: 0,
                        y: 100
                    },
                    to: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "keyframes",
                            duration: 800,
                            ease: "easeOut"
                        }
                    }
                }),
                se = Ts(),
                D = () => {
                    var M, W;
                    (M = se.header) == null || M.apply({
                        opacity: 0,
                        y: -100
                    }), (W = se.footer) == null || W.apply({
                        opacity: 0,
                        y: 100
                    })
                },
                Q = () => {
                    var M, W;
                    (M = se.header) == null || M.apply({
                        opacity: 1,
                        y: 0
                    }), (W = se.footer) == null || W.apply({
                        opacity: 1,
                        y: 0
                    })
                };
            C.value || D();
            const R = B(!1),
                U = M => {
                    if (!R.value) return new Promise(W => setTimeout(W, M))
                },
                j = B(null),
                oe = Ae(j, q()),
                ee = B(null),
                ie = Ae(ee, {
                    [C.value ? "" : "initial"]: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    }
                }),
                Fe = B(null),
                te = Ms(Fe),
                tt = Ae(Fe, q()),
                ft = B(null),
                yt = Ae(ft, {
                    initial: {
                        opacity: 0
                    },
                    to: {
                        opacity: .3,
                        transition: {
                            type: "keyframes",
                            duration: 200,
                            ease: [.2, 1, .2, 1]
                        }
                    }
                }),
                Ht = () => {
                    var M;
                    (M = yt.apply("to")) == null || M.then(() => {
                        yt.apply("initial")
                    })
                },
                wt = B(null),
                Ft = Ae(wt, q()),
                Vt = B(null),
                jt = Ae(Vt, {
                    [C.value ? "" : "initial"]: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    }
                }),
                Dt = async () => {
                    const M = Math.floor(parseFloat(f.value)),
                        W = Math.floor(M / Z.value.length);
                    for (; J.value < Z.value.length && !R.value;) J.value++, await U(350), J.value % 2 && Nt(), await U(50), Ht(), J.value === Z.value.length ? A.value = M : A.value = W * J.value, await U(1e3)
                },
                Ve = async M => {
                    const W = M.apply("to");
                    R.value || await W
                },
                st = B(null);
            let ge;
            const Nt = () => {
                    var Re;
                    const fe = te.x.value - 100,
                        Le = te.y.value - 100,
                        qe = te.width.value + te.x.value + 100,
                        pe = te.height.value + te.y.value + 100;
                    let xe, $e, Ze = 0;
                    do
                        if (xe = Math.min(Math.max(0, Math.random() * (qe - fe) + fe), x.value), $e = Math.min(Math.max(0, Math.random() * (pe - Le) + Le), P.value), Ze++, Ze > 100) break; while (Math.hypot(xe - ((ge == null ? void 0 : ge.x) || 0), $e - ((ge == null ? void 0 : ge.y) || 0)) < 150);
                    (Re = st.value) == null || Re.createFireworkAt(xe, $e), ge = {
                        x: xe,
                        y: $e
                    }
                },
                Gt = async () => {
                    var M;
                    await U(500), I.value = !0, Ve(oe), Ve(tt), await Ve(Ft), await U(1e3), await Dt(), E.value = !1, Ve(jt), await U(500), (M = st.value) == null || M.startAutoFirework(), Ve(ie), Q(), await U(1e3), y.value = !0, d.value && (C.value = !0)
                },
                kt = () => {
                    R.value = !0
                },
                {
                    resetScrollTop: Ot
                } = Di();
            return Ge(() => {
                C.value || D(), Ot(), Gt(), C.value && kt()
            }), Be(() => {
                Q()
            }), (M, W) => {
                const fe = je,
                    Le = he,
                    qe = le,
                    pe = be,
                    xe = aa,
                    $e = Ut,
                    Ze = We,
                    Re = la,
                    Wt = Et,
                    Lt = $a,
                    qt = _t,
                    Zt = La,
                    Rt = Ja,
                    Kt = gt,
                    Yt = Pt,
                    Xt = Vi,
                    Jt = pt("motion-slide-bottom");
                return n(), c("div", null, [t("div", Oi, [t("div", Wi, [a(zt, {
                    ref_key: "fireworkComponent",
                    ref: st,
                    "auto-firework": !1,
                    class: "absolute blur-sm h-full w-full"
                }, null, 512), Li, qi, Zi])]), a(Ze, {
                    ref_key: "userInfoBlock",
                    ref: j,
                    class: "mx-auto"
                }, {
                    default: v(() => {
                        var Ce;
                        return [t("div", Ri, [t("h2", Ki, [h(" Congratulations, "), e(g).platform === "address" ? (n(), c(K, {
                            key: 0
                        }, [h(" address "), t("span", Yi, [a(fe, {
                            address: e(g).address,
                            class: "inline-block align-sub w-6 h-6"
                        }, null, 8, ["address"]), h(" " + $(("shortenAddress" in M ? M.shortenAddress : e(de))(e(g).address)), 1)])], 64)) : e(g).platform === "github" ? (n(), c("span", Xi, [h(" GitHub account "), t("span", Ji, [a(Le, {
                            class: "inline-block align-sub w-6 h-6"
                        }), h(" " + $((Ce = e(g)) == null ? void 0 : Ce.username), 1)])])) : L("", !0), h(" is eligible for the airdrop ")]), a(pe, {
                            class: "duration-500",
                            opened: e(y) || e(m).isGreaterOrEqual("md")
                        }, {
                            default: v(() => [a(qe, {
                                ref_key: "userInfoBlockButton",
                                ref: ee,
                                class: "w-full mt-4 md:mt-0 md:w-max md:ml-auto",
                                onClick: W[0] || (W[0] = Lr => e(i).logout())
                            }, {
                                default: v(() => [t("span", Qi, [e(p) ? (n(), c(K, {
                                    key: 0
                                }, [h("Check another account")], 64)) : (n(), c(K, {
                                    key: 1
                                }, [h("Disconnect")], 64))])]),
                                _: 1
                            }, 512)]),
                            _: 1
                        }, 8, ["opened"])]), a(xe, {
                            visible: e(y) && !e(S),
                            "target-date-iso": e(d).airdrop.associationStopsAt,
                            "airdrop-finalized": !!e(d).airdrop.contractAddress,
                            "target-date-formatted": e(b)
                        }, null, 8, ["visible", "target-date-iso", "airdrop-finalized", "target-date-formatted"]), a($e, {
                            visible: e(y)
                        }, null, 8, ["visible"])]
                    }),
                    _: 1
                }, 512), e(I) ? (n(), c("div", {
                    key: 0,
                    ref_key: "counterBlock",
                    ref: Fe,
                    class: "relative isolate mt-8 flex w-max mx-auto items-center gap-2 text-[50px] xs:text-[70px] sm:text-[90px] md:text-[120px]"
                }, [a(Re, {
                    value: e(V),
                    "total-digits": e(f).length,
                    duration: 300
                }, null, 8, ["value", "total-digits"]), t("span", er, " " + $(e(r).public.token.symbol), 1), t("div", {
                    ref_key: "counterBlinkBlock",
                    ref: ft,
                    class: "absolute pointer-events-none inset-0 z-10 h-full w-full rounded-full bg-white/50 blur-md"
                }, null, 512)], 512)) : L("", !0), a(pe, {
                    class: "duration-500",
                    opened: e(y) && !e(S)
                }, {
                    default: v(() => [t("div", tr, [e(w) ? (n(), c(K, {
                        key: 0
                    }, [h("Claiming begins on " + $(e(b)), 1)], 64)) : (n(), c(K, {
                        key: 1
                    }, [h(" Claiming starts soon! Hang tight! "), a(Wt, {
                        class: "w-5 h-5 ml-1 inline-block align-middle"
                    })], 64))]), a(pe, {
                        class: "duration-500",
                        opened: e(w)
                    }, {
                        default: v(() => [e(y) ? (n(), N(Lt, {
                            key: 0,
                            "target-date": e(d).airdrop.claimStartsAt,
                            class: "mx-auto mt-6"
                        }, null, 8, ["target-date"])) : L("", !0)]),
                        _: 1
                    }, 8, ["opened"])]),
                    _: 1
                }, 8, ["opened"]), a(pe, {
                    class: "duration-500",
                    opened: e(_).length > 1
                }, {
                    default: v(() => [a(qt, {
                        variant: "warning",
                        class: "max-w-[700px] mx-auto mt-6"
                    }, {
                        default: v(() => [t("p", null, " You have " + $(e(_).length) + " airdrops to claim. You will be able to claim the second one after you finish claiming the first one. ", 1)]),
                        _: 1
                    })]),
                    _: 1
                }, 8, ["opened"]), a(Zt, {
                    visible: e(y) && e(S),
                    class: "mx-auto",
                    onStartClaim: W[1] || (W[1] = Ce => l("start-claim"))
                }, null, 8, ["visible"]), e(I) ? (n(), N(Rt, {
                    key: 1,
                    ref_key: "criteriaBlock",
                    ref: wt,
                    opened: e(E),
                    "onUpdate:opened": W[2] || (W[2] = Ce => Ue(E) ? E.value = Ce : null),
                    "total-criteria-displayed": e(ce),
                    "under-link-visible": e(y),
                    class: "mx-auto mt-8"
                }, null, 8, ["opened", "total-criteria-displayed", "under-link-visible"])) : L("", !0), a(pe, {
                    class: "duration-[2000ms]",
                    opened: e(y) && !e(S) && !e(z)
                }, {
                    default: v(() => [e(y) ? (n(), c("div", sr, [a(Kt, {
                        class: "mt-8 p-px"
                    }), a(Yt, {
                        class: "mt-8"
                    })])) : L("", !0)]),
                    _: 1
                }, 8, ["opened"]), a(pe, {
                    class: "duration-[500ms]",
                    opened: e(y) && e(S) && !e(z)
                }, {
                    default: v(() => [a(Xt, {
                        text: "Ready to claim your tokens?",
                        class: "mt-8"
                    })]),
                    _: 1
                }, 8, ["opened"]), !e(R) && !e(y) ? Te((n(), N(qe, {
                    key: 2,
                    ref: "animationSkipButton",
                    class: "fixed bottom-5 mx-auto inset-x-0 w-max z-10 opacity-50 hover:opacity-100",
                    size: "xs",
                    onClick: W[3] || (W[3] = Ce => kt())
                }, {
                    default: v(() => [t("span", or, [nr, a(e(Ns), {
                        class: "h-4 w-4 -mr-1"
                    })])]),
                    _: 1
                })), [
                    [Jt]
                ]) : L("", !0)])
            }
        }
    }),
    ir = () => {
        const s = Ee(),
            o = Pe(),
            l = B(!1),
            {
                inProgress: r,
                error: i,
                execute: u
            } = ct(async () => {
                l.value = !1;
                const g = await (await o.getWallet()).watchAsset({
                    type: "ERC20",
                    options: {
                        address: s.public.token.address,
                        decimals: s.public.token.decimals,
                        symbol: s.public.token.symbol
                    }
                });
                if (!g) throw new Error("Failed to add token");
                return l.value = !0, g
            });
        return {
            addTokenSuccess: l,
            addTokenInProgress: r,
            addTokenError: i,
            addTokenToWallet: u
        }
    },
    et = s => (_e("data-v-b8a6ccfe"), s = s(), ve(), s),
    rr = {
        key: 0,
        class: "w-full text-sm text-neutral-300"
    },
    lr = {
        class: "mt-8"
    },
    cr = et(() => t("div", {
        class: "copy-button-label"
    }, "Token contract address", -1)),
    dr = {
        class: "copy-button-value"
    },
    ur = {
        class: "flex gap-2 items-center mt-4 w-full"
    },
    mr = {
        class: "w-full"
    },
    pr = et(() => t("div", {
        class: "copy-button-label"
    }, "Token symbol", -1)),
    hr = {
        class: "copy-button-value"
    },
    _r = {
        class: "w-full"
    },
    vr = et(() => t("div", {
        class: "copy-button-label"
    }, "Token decimals", -1)),
    gr = {
        class: "copy-button-value"
    },
    fr = {
        key: 0,
        class: "flex items-center justify-center"
    },
    yr = et(() => t("span", null, "Connect Wallet", -1)),
    wr = {
        key: 1,
        class: "flex items-center justify-center"
    },
    kr = {
        key: 2,
        class: "flex items-center justify-center"
    },
    br = {
        key: 3
    },
    xr = O({
        __name: "AddToken",
        setup(s) {
            const o = Ee(),
                l = Pe(),
                {
                    addTokenSuccess: r,
                    addTokenInProgress: i,
                    addTokenError: u,
                    addTokenToWallet: m
                } = ir(),
                {
                    isConnected: g,
                    walletName: p,
                    isCorrectNetworkSet: f,
                    setCorrectNetworkInProgress: d,
                    setCorrectNetworkError: _
                } = G(l),
                {
                    copy: x,
                    copied: P
                } = ot(o.public.token.address),
                {
                    copy: T,
                    copied: C
                } = ot(o.public.token.decimals.toString()),
                {
                    copy: y,
                    copied: I
                } = ot(o.public.token.symbol),
                b = k(() => {
                    if (g.value)
                        if (f.value) {
                            if (i.value) return {
                                key: "add-token-in-progress"
                            }
                        } else return d.value ? {
                            key: "set-correct-network-in-progress"
                        } : {
                            key: "set-correct-network",
                            func: l.setCorrectNetwork
                        };
                    else return {
                        key: "connect-wallet",
                        func: l.openModal
                    };
                    return {
                        key: "add-token",
                        func: async () => {
                            await m()
                        }
                    }
                }),
                w = k(() => {
                    if (b.value.key === "set-correct-network" && _.value) return _.value.message;
                    if (b.value.key === "add-token" && u.value) return u.value.message
                });
            return (F, S) => {
                const z = le,
                    A = be,
                    V = zs;
                return n(), N(V, {
                    title: "Add token to wallet"
                }, {
                    default: v(() => [e(p) !== "MetaMask" ? (n(), c("p", rr, " Not all wallets support adding tokens to the wallet. Usually, token will become visible in your wallet automatically once you receive it. ")) : L("", !0), t("div", lr, [t("div", null, [cr, a(z, {
                        class: "copy-button",
                        onClick: S[0] || (S[0] = E => e(x)())
                    }, {
                        default: v(() => [t("span", dr, $(e(o).public.token.address), 1), e(P) ? (n(), N(e(Me), {
                            key: 1,
                            class: "copy-button-icon check-icon"
                        })) : (n(), N(e(nt), {
                            key: 0,
                            class: "copy-button-icon"
                        }))]),
                        _: 1
                    })]), t("div", ur, [t("div", mr, [pr, a(z, {
                        class: "copy-button",
                        onClick: S[1] || (S[1] = E => e(y)())
                    }, {
                        default: v(() => [t("span", hr, $(e(o).public.token.symbol), 1), e(I) ? (n(), N(e(Me), {
                            key: 1,
                            class: "copy-button-icon check-icon"
                        })) : (n(), N(e(nt), {
                            key: 0,
                            class: "copy-button-icon"
                        }))]),
                        _: 1
                    })]), t("div", _r, [vr, a(z, {
                        class: "copy-button",
                        onClick: S[2] || (S[2] = E => e(T)())
                    }, {
                        default: v(() => [t("span", gr, $(e(o).public.token.decimals), 1), e(C) ? (n(), N(e(Me), {
                            key: 1,
                            class: "copy-button-icon check-icon"
                        })) : (n(), N(e(nt), {
                            key: 0,
                            class: "copy-button-icon"
                        }))]),
                        _: 1
                    })])])]), a(z, {
                        loading: e(b).key === "set-correct-network-in-progress" || e(b).key === "add-token-in-progress",
                        variant: "primary",
                        class: "w-full mt-6",
                        onClick: e(b).func
                    }, {
                        default: v(() => [a(ne, Oe("TransitionPrimaryButtonText" in F ? F.TransitionPrimaryButtonText : e(mt), {
                            mode: "out-in"
                        }), {
                            default: v(() => [e(b).key === "connect-wallet" ? (n(), c("span", fr, [a(e(ht), {
                                class: "h-6 w-6 mr-2 flex-shrink-0"
                            }), yr])) : e(b).key === "set-correct-network" ? (n(), c("span", wr, " Change wallet network to " + $(e(me).name), 1)) : e(b).key === "set-correct-network-in-progress" || e(b).key === "add-token-in-progress" ? (n(), c("span", kr, " Continue in your " + $(e(p)) + " wallet ", 1)) : e(b).key === "add-token" ? (n(), c("span", br, "Add token to wallet automatically")) : L("", !0)]),
                            _: 1
                        }, 16)]),
                        _: 1
                    }, 8, ["loading", "onClick"]), a(A, {
                        opened: !!e(r) && !e(w)
                    }, {
                        default: v(() => [a(ne, {
                            "leave-active-class": e(w) ? void 0 : "transition duration-[500ms]"
                        }, {
                            default: v(() => [(n(), c("p", {
                                key: e(w),
                                class: "text-success-600 text-center pt-2 w-full"
                            }, "Token added to your wallet!"))]),
                            _: 1
                        }, 8, ["leave-active-class"])]),
                        _: 1
                    }, 8, ["opened"]), a(A, {
                        opened: !!e(w)
                    }, {
                        default: v(() => [a(ne, {
                            "leave-active-class": e(w) ? void 0 : "transition duration-[500ms]"
                        }, {
                            default: v(() => [(n(), c("p", {
                                key: e(w),
                                class: "text-red-600 text-center pt-2 w-full"
                            }, $(e(w)), 1))]),
                            _: 1
                        }, 8, ["leave-active-class"])]),
                        _: 1
                    }, 8, ["opened"])]),
                    _: 1
                })
            }
        }
    }),
    $r = Y(xr, [
        ["__scopeId", "data-v-b8a6ccfe"]
    ]),
    Cr = {
        class: "absolute inset-0 max-h-[600px] -z-[3] h-screen w-full"
    },
    Ar = {
        class: "relative isolate w-full h-full overflow-hidden"
    },
    Sr = t("div", {
        class: "absolute inset-0 w-full h-full bg-gradient-to-t from-neutral-950 to-10% to-transparent"
    }, null, -1),
    Mr = t("div", {
        class: "absolute top-0 -left-px w-[10%] h-full bg-gradient-to-r from-neutral-950 to-transparent"
    }, null, -1),
    Tr = t("div", {
        class: "absolute top-0 -right-px w-[10%] h-full bg-gradient-to-l from-neutral-950 to-transparent"
    }, null, -1),
    Ir = {
        class: "flex flex-col text-center md:text-left md:flex-row gap-y-2 gap-x-6"
    },
    Br = {
        class: "text-5xl md:text-[56px] font-bold whitespace-nowrap leading-none"
    },
    Er = {
        class: "leading-relaxed text-pretty"
    },
    Ur = {
        key: 0
    },
    Pr = {
        key: 1
    },
    zr = t("br", null, null, -1),
    Hr = ["href"],
    Fr = t("br", null, null, -1),
    Vr = t("span", {
        class: "whitespace-nowrap"
    }, "Claim additional airdrop", -1),
    jr = O({
        __name: "Claimed",
        setup(s) {
            const o = Ee(),
                l = re(),
                r = ke(),
                {
                    user: i
                } = G(r),
                {
                    totalTokenAmount: u,
                    eligibility: m,
                    hasUnclaimedAllocations: g
                } = G(l),
                p = k(() => {
                    var y, I;
                    return (I = (y = m.value) == null ? void 0 : y.claimStatus) == null ? void 0 : I.status
                }),
                f = Is(k(() => {
                    var y, I;
                    return ((I = (y = m.value) == null ? void 0 : y.claimStatus) == null ? void 0 : I.estimatedExecutionAt) || 0
                })),
                d = k(() => f.value.replace("in ", "")),
                _ = k(() => i.value.platform === "github" ? m.value.associatedAddress : m.value.userId),
                {
                    isActive: x,
                    resume: P,
                    pause: T
                } = Bs(() => l.refreshClaimStatus(), 6e4, {
                    immediate: !1
                });
            X(p, y => {
                y === "success" ? T() : x.value || P()
            }, {
                immediate: !0
            });
            const C = B(!1);
            return (y, I) => {
                const b = $r,
                    w = Et,
                    F = je,
                    S = le,
                    z = gt,
                    A = Pt;
                return n(), c("div", null, [a(b, {
                    opened: e(C),
                    "onUpdate:opened": I[0] || (I[0] = V => Ue(C) ? C.value = V : null)
                }, null, 8, ["opened"]), t("div", Cr, [t("div", Ar, [a(ne, Oe(("TransitionOpacity" in y ? y.TransitionOpacity : e(Ne))(), {
                    mode: "out-in"
                }), {
                    default: v(() => [e(p) === "success" ? (n(), N(zt, {
                        key: 0,
                        class: "absolute blur-sm h-full w-full"
                    })) : L("", !0)]),
                    _: 1
                }, 16), Sr, Mr, Tr])]), t("div", {
                    style: De({
                        "max-width": `${550+38*e(u).length}px`
                    }),
                    class: "bg-neutral-800/50 p-4 sm:p-6 backdrop-blur-[10px] mx-auto mt-4 rounded-[32px]"
                }, [t("div", Ir, [t("span", Br, $(e(u)) + " " + $(e(o).public.token.symbol), 1), t("p", Er, [e(p) === "pending" || e(p) === "queued" ? (n(), c(K, {
                    key: 0
                }, [a(w, {
                    class: "w-5 h-5 mr-1 inline-block align-middle"
                }), e(d).includes("ago") || e(d).includes("now") ? (n(), c("span", Ur, " Your claim is almost ready. Hang tight! ")) : (n(), c("span", Pr, [h(" Your claim is being processed... "), zr, h("Estimated time to complete: " + $(e(d)), 1)]))], 64)) : e(p) === "success" ? (n(), c(K, {
                    key: 1
                }, [a(e(Me), {
                    class: "w-5 h-5 mr-0.5 inline-block align-middle",
                    "aria-hidden": "true"
                }), h(" Tokens were sent to your wallet "), t("a", {
                    class: "whitespace-nowrap font-medium",
                    href: `${e(me).blockExplorers.default.url}address/${e(_)}`,
                    target: "_blank"
                }, [a(F, {
                    address: e(_),
                    class: "h-6 w-6 inline-block align-top"
                }, null, 8, ["address"]), h(" " + $(("shortenAddress" in y ? y.shortenAddress : e(de))(e(_))), 1)], 8, Hr), Fr, h(" Don't see your tokens? "), t("button", {
                    class: "underline underline-offset-2",
                    onClick: I[1] || (I[1] = V => C.value = !0)
                }, "Add token now")], 64)) : e(p) === "failed" ? (n(), c(K, {
                    key: 2
                }, [h(" There was an error when claiming your tokens. Please try again. ")], 64)) : L("", !0)])]), e(g) ? (n(), N(S, {
                    key: 0,
                    variant: "primary",
                    class: "w-max mx-auto mt-4",
                    onClick: I[2] || (I[2] = V => e(l).setNextUnclaimedAllocation())
                }, {
                    default: v(() => [Vr]),
                    _: 1
                })) : L("", !0)], 4), t("div", null, [a(z, {
                    class: "mt-8"
                }), a(A, {
                    class: "mt-8"
                })])])
            }
        }
    }),
    Dr = O({
        __name: "Eligible",
        setup(s) {
            const o = re(),
                {
                    isCorrectAddressConnected: l,
                    isClaimSubmitted: r
                } = G(o),
                i = B(!1),
                u = k(() => l.value);
            return X(u, m => {
                m || (i.value = !1)
            }), X(r, m => {
                m || (i.value = !1)
            }), (m, g) => {
                const p = ar,
                    f = jr,
                    d = Es("ViewClaim");
                return !e(i) && !e(r) || !e(u) ? (n(), N(p, {
                    key: 0,
                    onStartClaim: g[0] || (g[0] = _ => i.value = !0)
                })) : e(r) ? (n(), N(f, {
                    key: 1
                })) : (n(), N(d, {
                    key: 2
                }))
            }
        }
    }),
    Nr = {
        key: 0
    },
    Gr = {
        class: "relative"
    },
    Or = {
        class: "absolute -z-[5] ml-1 flex items-end w-[1500px] h-auto aspect-square overflow-hidden left-1/2 -translate-x-1/2 bottom-[230px] rounded-b-full"
    },
    Wr = t("p", {
        class: "mt-6 sm:mt-10 text-center text-neutral-600"
    }, [h(" This site is protected by reCAPTCHA and the Google "), t("a", {
        class: "text-neutral-400 hover:text-white transition-colors",
        href: "https://policies.google.com/privacy",
        target: "_blank",
        rel: "nofollow noopener noreferrer"
    }, "Privacy Policy"), h(" and "), t("a", {
        class: "text-neutral-400 hover:text-white transition-colors",
        href: "https://policies.google.com/terms",
        target: "_blank",
        rel: "nofollow noopener noreferrer"
    }, "Terms of Service"), h(" apply. ")], -1),
    Yr = O({
        __name: "index",
        setup(s) {
            Vs({
                title: ye.title,
                ogTitle: ye.title,
                description: ye.description,
                ogDescription: ye.description,
                ogLocale: "en_US",
                ogImage: ye.previewImg.src,
                ogImageAlt: ye.previewImg.alt,
                ogImageType: "image/jpeg",
                ogImageWidth: "1200",
                ogImageHeight: "630",
                twitterTitle: ye.title,
                twitterCard: "summary_large_image"
            });
            const {
                user: o
            } = G(ke()), {
                isEligible: l
            } = G(re());
            return (r, i) => {
                const u = to,
                    m = Us,
                    g = ro,
                    p = Uo,
                    f = Yo,
                    d = Dn,
                    _ = Dr;
                return n(), N(ne, Oe(("TransitionOpacity" in r ? r.TransitionOpacity : e(Ne))(2500), {
                    mode: "out-in"
                }), {
                    default: v(() => [e(l) ? (n(), N(_, {
                        key: 1
                    })) : (n(), c("div", Nr, [a(u, {
                        class: "mb-12"
                    }), t("div", Gr, [t("div", Or, [a(m, {
                        class: "w-full relative h-[60%] md:h-[50%] lg:h-[45%] opacity-30"
                    })]), a(g, {
                        class: "absolute -z-[5] hidden sm:block w-[1500px] h-auto left-1/2 -translate-x-1/2 -top-[1310px]"
                    }), e(o) ? (n(), N(f, {
                        key: 1
                    })) : (n(), N(p, {
                        key: 0
                    })), Wr]), a(d, {
                        class: "mt-[100px] md:mt-36"
                    })]))]),
                    _: 1
                }, 16)
            }
        }
    });
export {
    Yr as
    default
};