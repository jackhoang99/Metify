"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2551],{30242:function(n,t,e){var r=e(7297),i=e(23925),a=e(41327);function o(){var n=(0,r.Z)(["\n  display: inline-block;\n  background-color: ",";\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin: auto 2px;\n"]);return o=function(){return n},n}var c=i.default.span.withConfig({componentId:"sc-4b98e795-0"})(o(),(0,a.NE)("decorativeBase"));t.Z=c},13435:function(n,t,e){e.d(t,{Z:function(){return on}});var r=e(7297),i=e(85893),a=e(67294),o=e(11163),c=e(23925),u=e(92140),d=e(41327),l=e(51336),s=e(73246);function f(){var n=(0,r.Z)(["\n  padding: 0;\n"]);return f=function(){return n},n}var h=(0,c.default)(s.d).attrs({condensedAll:!0,listStyleReset:!0}).withConfig({componentId:"sc-33f1116f-0"})(f()),p=e(26042),v=e(69396),g=e(99534),x=e(41664),m=e.n(x),Z=e(98826),b=e(75265),j=e(30242),k=e(67874),w=e(15819);function I(){var n=(0,r.Z)(["\n  ","\n  color: ",";\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  margin: 0.25em 0;\n  padding: 0.25em "," 0.25em;\n\n  &:hover {\n    color: ",";\n  }\n\n  @media screen and (max-width: ",") {\n    padding: "," ",";\n  }\n\n  @media screen and (min-width: ",") {\n    &[aria-current] {\n      background-color: ",";\n      color: ",";\n      font-weight: 700;\n    }\n  }\n"]);return I=function(){return n},n}function y(){var n=(0,r.Z)(["\n  flex-shrink: 0;\n  margin: 0 8px 0 4px;\n\n  ","\n"]);return y=function(){return n},n}var C=(0,c.default)(m()).withConfig({componentId:"sc-ca19fa36-0"})(I(),(0,k.s)("0",!1),(0,d.NE)("textBase"),u.hM$,(0,d.NE)("textBrightAccent"),u.SIq,u.dly,u.g4V,u.vmZ,(0,d.NE)("backgroundTintedBase"),(0,d.NE)("textBrightAccent")),E=(0,c.default)(j.Z).withConfig({componentId:"sc-ca19fa36-1"})(y(),b.R),N=function(n){var t=n.active,e=n.children,r=n.href,a=n.as,c=(0,g.Z)(n,["active","children","href","as"]),u=(0,o.useRouter)().asPath,d=(0,w.Sh)(),l=d.setOpen,s=d.clearPanel,f="undefined"!==typeof t||r.includes("#")?t:u===r;return(0,i.jsx)(Z.H,{as:a,children:(0,i.jsxs)(C,(0,v.Z)((0,p.Z)({href:r},c),{"aria-current":f?"page":void 0,onClick:function(){r.includes("#")&&(r.startsWith("#")||u.split("#")[0]===r.split("#")[0])&&(l(!1),s())},children:[(0,i.jsx)(E,{active:f}),e]}))})},L=e(10253),P=e(86951),S=e(3055);function D(){var n=(0,r.Z)(["\n  @media screen and (min-width: ",") {\n    margin: 0 0 0 ",";\n    padding: 0 0 0 ",";\n    border-left: 1px solid ",";\n\n    & a {\n      color: ",";\n      font-size: ",";\n      line-height: ",";\n    }\n    & a > span {\n      display: none;\n    }\n    & a[aria-current] {\n      border-left: 3px solid ",";\n      margin-left: -14px;\n      padding-left: ",";\n    }\n  }\n"]);return D=function(){return n},n}var R=(0,c.default)(S.Z).attrs({forwardedAs:"ul"}).withConfig({componentId:"sc-3b882ab6-0"})(D(),u.vmZ,u.F_T,u.nuo,(0,d.NE)("decorativeSubdued"),(0,d.NE)("textSubdued"),P.Ue_.fontSize,u.F_T,(0,d.NE)("decorativeBase"),u.o78),T=e(68973),_=e(83357),B=e(91721),F=e(37387),G=e(8906);function M(){var n=(0,r.Z)(["\n  ","\n"]);return M=function(){return n},n}function W(){var n=(0,r.Z)(["\n  ","\n  padding-inline: ",";\n"]);return W=function(){return n},n}function z(){var n=(0,r.Z)(["\n  ","\n"]);return z=function(){return n},n}function A(){var n=(0,r.Z)(["\n  ","\n  margin-left: ",";\n  vertical-align: middle;\n"]);return A=function(){return n},n}var $=(0,c.default)(_.Z).withConfig({componentId:"sc-5567915-0"})(M(),F.D),H=(0,c.default)(B.Z).withConfig({componentId:"sc-5567915-1"})(W(),b.R,u.hM$),O=(0,c.default)(T.Z).withConfig({componentId:"sc-5567915-2"})(z(),F.D),q=(0,c.default)(G.I).withConfig({componentId:"sc-5567915-3"})(A(),b.R,u.hM$),U=function(n){var t=n.initiallyExpanded,e=n.title,r=n.titleHref,o=n.children,c=(0,a.useRef)(null),u=(0,L.Z)((0,a.useState)(t),2),d=u[0],s=u[1],f=(0,w.Sh)().sideNavTitle;(0,a.useEffect)((function(){t&&s(!0)}),[s,t]);return(0,i.jsxs)("li",{children:[(0,i.jsx)($,{onClick:function(){return s(!d)},children:e}),(0,i.jsx)(H,{open:d,onClick:function(){return s(!d)},"aria-label":"".concat(e," menu"),children:!r&&(0,i.jsx)(l.D,{variant:"ballad",children:e})}),!!r&&(0,i.jsx)(q,{href:r,standalone:!0,onClick:function(n){n.stopPropagation(),s(!0)},children:(0,i.jsx)(l.D,{variant:"ballad",children:e})}),(0,i.jsxs)(R,{show:d,ref:c,children:[(0,i.jsx)(O,{onClick:function(){return s(!d)},"aria-label":"Go back to ".concat(f),children:e}),o]})]})},V=e(94766),J=e(27811),K=e(77987);function Q(){var n=(0,r.Z)(["\n  display: flex;\n  gap: ",";\n  align-items: center;\n"]);return Q=function(){return n},n}function X(){var n=(0,r.Z)(["\n  --top-offset: ",";\n  ","\n  background-color: ",";\n  padding: "," 0 "," ",";\n  width: ","px;\n  height: calc(100vh - var(--top-offset));\n  flex-shrink: 0;\n  position: sticky;\n  top: var(--top-offset);\n  overflow-y: auto;\n\n  @supports (height: 100dvh) {\n    height: calc(100dvh - var(--top-offset));\n  }\n\n  ","\n"]);return X=function(){return n},n}function Y(){var n=(0,r.Z)(["\n  margin-left: ",";\n  padding-bottom: ",";\n"]);return Y=function(){return n},n}var nn=c.default.span.withConfig({componentId:"sc-8e747c9e-0"})(Q(),u.dly),tn=c.default.nav.withConfig({componentId:"sc-8e747c9e-1"})(X(),K.Mz.large,(0,d.D6)(J.Z),(0,d.NE)("backgroundHighlight"),u.F_T,u.F_T,u.F_T,K.n0,b.R),en=c.default.div.withConfig({componentId:"sc-8e747c9e-2"})(Y(),u.hM$,u.nuo),rn=function(n){var t=n.header,e=n.icon;return(0,i.jsx)(en,{children:(0,i.jsxs)(l.D,{as:"p",id:"side-nav-header",variant:"violaBold",children:[e&&(0,i.jsxs)(nn,{children:[e,t]}),!e&&t]})})},an=function(n){var t=n.header,e=n.icon,r=n.children,c=(0,w.Sh)(),u=c.setPanel,d=c.clearPanel,l=c.panel,s=c.setSideNavTitle,f=(0,a.useRef)(null),h=(0,o.useRouter)().asPath;(0,a.useEffect)((function(){return s(t)}),[s,t]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(tn,{"aria-labelledby":"side-nav-header",children:[(0,i.jsx)(rn,{header:t,icon:e}),(0,i.jsx)("div",{children:r})]}),(0,i.jsx)(F.Z,{children:(0,i.jsxs)(S.Z,{show:l===w.WD.SideNav,ref:f,children:[(0,i.jsx)(T.Z,{icon:e,onClick:function(){h.startsWith("/private-documentation")?d():u(w.WD.Documentation)},"aria-label":h.startsWith("/private-documentation")?"Go back to Private Documentation":"Go back to Documentation",children:t}),(0,i.jsx)("div",{children:r})]})})]})};an.List=h,an.ListItem=N,an.ListTitle=V.Z,an.ListGroup=U,an.ListGroupList=R;var on=an},62551:function(n,t,e){e.d(t,{Z:function(){return l}});var r=e(85893),i=e(67294),a=e(10253),o=e(63087);var c=e(13435),u=function(n){var t=n.basePath,e=n.pathLink;return(0,r.jsx)(c.Z.ListItem,{href:"".concat(t).concat(e.operationId),children:e.label})},d=function(n){var t=n.category,e=n.links,i=n.operationId,a=n.basePath,o=e.find((function(n){return n.operationId===i}));return(0,r.jsx)(c.Z.ListGroup,{title:t,initiallyExpanded:!!o,children:e.map((function(n){return(0,r.jsx)(u,{basePath:a,pathLink:n},n.operationId)}))})},l=function(n){var t=n.links,e=n.operationId,l=n.basePath,s=void 0===l?"/documentation/web-api/reference/":l,f=(0,i.useMemo)((function(){return function(n){return(0,o.Z)(n,(function(n){var t=(0,a.Z)(n.tags,1)[0];return void 0===t?"uncategorized":t}))}(t)}),[t]),h=Object.keys(f).sort();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z.ListTitle,{children:"Reference"}),(0,r.jsxs)(c.Z.List,{children:[h.length>1&&h.map((function(n){return(0,r.jsx)(d,{links:f[n],category:n,operationId:e,basePath:s},n)})),1===h.length&&t.map((function(n){return(0,r.jsx)(u,{basePath:s,pathLink:n},n.operationId)}))]})]})}},63087:function(n,t,e){e.d(t,{Z:function(){return i}});var r=e(36305);function i(n,t,e){var i={},a=!0,o=!1,c=void 0;try{for(var u,d=n[Symbol.iterator]();!(a=(u=d.next()).done);a=!0){var l=u.value,s=t(l),f=i[s]||[],h=e?e(l):l;i[s]=h?(0,r.Z)(f).concat([h]):f}}catch(p){o=!0,c=p}finally{try{a||null==d.return||d.return()}finally{if(o)throw c}}return i}}}]);