(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2132],{25346:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/[cid]",function(){return n(3630)}])},95677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=o.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=r({},a,e));var l=(a=r({},a,t)).loader;a.loadableGenerated&&delete(a=r({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr&&!a.ssr)return delete a.webpack,delete a.modules,i(n,a);return n(r({},a,{loader:function(){return null!=l?l().then(u):Promise.resolve(u((function(){return null})))}}))},t.noSSR=i;var r=n(6495).Z,a=n(92648).Z,o=(a(n(67294)),a(n(8976)));function u(e){var t;return{default:(null==(t=e)?void 0:t.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},92254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(92648).Z)(n(67294)).default.createContext(null);t.LoadableContext=r},8976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79658).Z,a=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(6495).Z,u=(0,n(92648).Z)(n(67294)),i=n(92254);var l=[],s=[],d=!1;function c(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function f(e,t){var n=function(){if(!o){var t=new h(e,a);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=function(e,t){!function(){n();var e=u.default.useContext(i.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))}();var r=u.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),u.default.useMemo((function(){return r.loading||r.error?u.default.createElement(a.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:o.retry}):r.loaded?u.default.createElement((t=r.loaded)&&t.default?t.default:t,e):null;var t}),[e,r])},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;if(!d){var l=a.webpack?a.webpack():a.modules;l&&s.push((function(e){var t=!0,r=!1,a=void 0;try{for(var o,u=l[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var i=o.value;if(-1!==e.indexOf(i))return n()}}catch(s){r=!0,a=s}finally{try{t||null==u.return||u.return()}finally{if(r)throw a}}}))}return r.preload=function(){return n()},r.displayName="LoadableComponent",u.default.forwardRef(r)}var h=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function p(e){return f(c,e)}function _(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return _(e,t)}))}p.preloadAll=function(){return new Promise((function(e,t){_(l).then(e,t)}))},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};_(s,e).then(n,n)}))},window.__NEXT_PRELOADREADY=p.preloadReady;var v=p;t.default=v},35861:function(e,t,n){"use strict";var r=n(85893),a=n(5152),o=n.n(a),u=(n(67294),n(66355)),i=n(26533),l=n(51336),s=n(92140),d=o()((function(){return Promise.all([n.e(9962),n.e(3751),n.e(479)]).then(n.bind(n,6474))}),{loadableGenerated:{webpack:function(){return[6474]}},ssr:!1});t.Z=function(){var e=(0,u.Vs)(),t=e.appStats,n=e.loading,a=e.error,o=e.pageWidth,c=t&&Array.isArray(t.dau)?t.dau.map((function(e){return{date:e.date,value:e.number_of_daus}})):[];return(0,r.jsxs)(i.B,{loading:n,error:a,children:[(0,r.jsx)(l.D.h2,{variant:"alto",as:"h2",paddingBottom:s.mGT,children:"Daily Active Users"}),(0,r.jsx)(d,{width:o-48,height:200,data:c,color:"#4100F4"})]})}},17545:function(e,t,n){"use strict";var r=n(85893),a=n(51336),o=n(92140),u=n(5152),i=n.n(u),l=(n(67294),n(66355)),s=n(26533),d=i()((function(){return Promise.all([n.e(9962),n.e(3751),n.e(8565)]).then(n.bind(n,48565))}),{loadableGenerated:{webpack:function(){return[48565]}},ssr:!1});t.Z=function(e){var t,n=e.title,u=(0,l.Vs)(),i=u.appStats,c=u.loading,f=u.error,h=u.pageWidth;return(0,r.jsxs)(s.B,{loading:c,error:f,children:[n&&(0,r.jsx)(a.D,{variant:"alto",as:"h2",paddingBottom:o.mGT,children:"API requests by endpoint"}),(0,r.jsx)(d,{pageWidth:h-48,data:null!==(t=null===i||void 0===i?void 0:i.endpoints)&&void 0!==t?t:[]})]})}},7846:function(e,t,n){"use strict";var r=n(85893),a=n(5152),o=n.n(a),u=(n(67294),n(66355)),i=n(26533),l=n(51336),s=n(92140),d=o()((function(){return Promise.all([n.e(9962),n.e(3751),n.e(479)]).then(n.bind(n,6474))}),{loadableGenerated:{webpack:function(){return[6474]}},ssr:!1});t.Z=function(){var e=(0,u.Vs)(),t=e.appStats,n=e.loading,a=e.error,o=e.pageWidth,c=t&&Array.isArray(t.mau)?t.mau.map((function(e){return{date:e.date,value:e.number_of_maus}})):[];return(0,r.jsxs)(i.B,{loading:n,error:a,children:[(0,r.jsx)(l.D.h2,{variant:"alto",as:"h2",paddingBottom:s.mGT,children:"Monthly Active Users"}),(0,r.jsx)(d,{width:o-48,height:200,data:c,color:"#4100F4"})]})}},3630:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return y}});var r=n(7297),a=n(85893),o=(n(67294),n(57843)),u=n(8099),i=n(56438),l=n(24966),s=n(35861),d=n(17545),c=n(69972),f=n(92140),h=n(23925),p=n(7846);function _(){var e=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n"]);return _=function(){return e},e}var v=h.default.div.withConfig({componentId:"sc-b05b1695-0"})(_(),f.mGT),m=function(){return(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(u.l,{sectionTitle:"Home",home:!0,settingsButton:!0}),(0,a.jsx)(l.V,{}),(0,a.jsxs)(v,{children:[(0,a.jsxs)("section",{children:[(0,a.jsx)(s.Z,{}),(0,a.jsx)(p.Z,{})]}),(0,a.jsx)("section",{children:(0,a.jsx)(d.Z,{title:!0})}),(0,a.jsx)("section",{children:(0,a.jsx)(c.Z,{})})]})]})};m.PageProviders=i.Z;var y=!0;t.default=m},5152:function(e,t,n){e.exports=n(95677)}},function(e){e.O(0,[4542,6856,358,24,9962,3345,731,8333,1720,3848,9774,2888,179],(function(){return t=25346,e(e.s=t);var t}));var t=e.O();_N_E=t}]);