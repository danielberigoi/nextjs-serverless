_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{0:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"20a2":function(e,t,r){e.exports=r("nOHt")},"6koa":function(e,t,r){"use strict";e.exports=function(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),a=r.length;if(n.length!==a)return!1;for(var o=0;o<a;o++){var i=r[o];if(e[i]!==t[i]||!Object.prototype.hasOwnProperty.call(t,i))return!1}return!0}},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("cha2")}])},cha2:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"en",(function(){return $})),r.d(n,"de",(function(){return Q})),r.d(n,"fr",(function(){return ee})),r.d(n,"it",(function(){return te}));var a=r("nKUr");function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=r("20a2"),l=r("mrSG"),c=r("q1tI"),s=r("2OET"),u=r("N3fz"),m=r("7LaZ"),f=r("Mu++"),d=r("EuEu"),g=r("cY5a");function b(e,t){return Object.keys(e).reduce((function(r,n){return r[n]=Object(l.a)({timeZone:t},e[n]),r}),{})}function p(e,t){return Object.keys(Object(l.a)(Object(l.a)({},e),t)).reduce((function(r,n){return r[n]=Object(l.a)(Object(l.a)({},e[n]||{}),t[n]||{}),r}),{})}function v(e,t){if(!t)return e;var r=f.a.formats;return Object(l.a)(Object(l.a)(Object(l.a)({},r),e),{date:p(b(r.date,t),b(e.date||{},t)),time:p(b(r.time,t),b(e.time||{},t))})}function y(e,t,r,n,a){var o=e.locale,i=e.formats,c=e.messages,s=e.defaultLocale,u=e.defaultFormats,f=e.onError,b=e.timeZone,p=e.defaultRichTextElements;void 0===r&&(r={id:""});var y=r.id,O=r.defaultMessage;Object(m.a)(!!y,"[@formatjs/intl] An `id` must be provided to format a message.");var h=String(y),j=c&&Object.prototype.hasOwnProperty.call(c,h)&&c[h];if(Array.isArray(j)&&1===j.length&&j[0].type===g.a.literal)return j[0].value;if(!n&&j&&"string"===typeof j&&!p)return j.replace(/'\{(.*?)\}'/gi,"{$1}");if(n=Object(l.a)(Object(l.a)({},p),n||{}),i=v(i,b),u=v(u,b),!j){if((!O||o&&o.toLowerCase()!==s.toLowerCase())&&f(new d.f(r,o)),O)try{return t.getMessageFormat(O,s,u,a).format(n)}catch(E){return f(new d.d('Error formatting default message for: "'+h+'", rendering default message verbatim',o,r,E)),"string"===typeof O?O:h}return h}try{return t.getMessageFormat(j,o,i,Object(l.a)({formatters:t},a||{})).format(n)}catch(E){f(new d.d('Error formatting message: "'+h+'", using '+(O?"default message":"id")+" as fallback.",o,r,E))}if(O)try{return t.getMessageFormat(O,s,u,a).format(n)}catch(E){f(new d.d('Error formatting the default message for: "'+h+'", rendering message verbatim',o,r,E))}return"string"===typeof j?j:"string"===typeof O?O:h}var O=r("1VXf"),h=["localeMatcher","style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay"];function j(e,t,r){var n=e.locale,a=e.formats,o=e.onError;void 0===r&&(r={});var i=r.format,l=i&&Object(O.e)(a,"number",i,o)||{};return t(n,Object(O.d)(r,h,l))}function E(e,t,r,n){void 0===n&&(n={});try{return j(e,t,n).format(r)}catch(a){e.onError(new d.a(d.b.FORMAT_ERROR,"Error formatting number.",a))}return String(r)}function R(e,t,r,n){void 0===n&&(n={});try{return j(e,t,n).formatToParts(r)}catch(a){e.onError(new d.a(d.b.FORMAT_ERROR,"Error formatting number.",a))}return[]}var w=r("BqEn"),T=["numeric","style"];function F(e,t,r,n,a){void 0===a&&(a={}),n||(n="second"),Intl.RelativeTimeFormat||e.onError(new w.a('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',"MISSING_INTL_API"));try{return function(e,t,r){var n=e.locale,a=e.formats,o=e.onError;void 0===r&&(r={});var i=r.format,l=!!i&&Object(O.e)(a,"relative",i,o)||{};return t(n,Object(O.d)(r,T,l))}(e,t,a).format(r,n)}catch(o){e.onError(new d.d("Error formatting relative time.",o))}return String(r)}var D=["localeMatcher","formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","fractionalSecondDigits","calendar","numberingSystem"];function P(e,t,r,n){var a=e.locale,o=e.formats,i=e.onError,c=e.timeZone;void 0===n&&(n={});var s=n.format,u=Object(l.a)(Object(l.a)({},c&&{timeZone:c}),s&&Object(O.e)(o,t,s,i)),m=Object(O.d)(n,D,u);return"time"!==t||m.hour||m.minute||m.second||m.timeStyle||m.dateStyle||(m=Object(l.a)(Object(l.a)({},m),{hour:"numeric",minute:"numeric"})),r(a,m)}function _(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=void 0===o?{}:o,l="string"===typeof a?new Date(a||0):a;try{return P(e,"date",t,i).format(l)}catch(c){e.onError(new d.a(d.b.FORMAT_ERROR,"Error formatting date.",c))}return String(l)}function I(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=void 0===o?{}:o,l="string"===typeof a?new Date(a||0):a;try{return P(e,"time",t,i).format(l)}catch(c){e.onError(new d.a(d.b.FORMAT_ERROR,"Error formatting time.",c))}return String(l)}function S(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=r[2],l=void 0===i?{}:i,c=e.timeZone,s=e.locale,u=e.onError,m=Object(O.d)(l,D,c?{timeZone:c}:{});try{return t(s,m).formatRange(a,o)}catch(f){u(new d.a(d.b.FORMAT_ERROR,"Error formatting date time range.",f))}return String(a)}function M(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=void 0===o?{}:o,l="string"===typeof a?new Date(a||0):a;try{return P(e,"date",t,i).formatToParts(l)}catch(c){e.onError(new d.a(d.b.FORMAT_ERROR,"Error formatting date.",c))}return[]}function N(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var a=r[0],o=r[1],i=void 0===o?{}:o,l="string"===typeof a?new Date(a||0):a;try{return P(e,"time",t,i).formatToParts(l)}catch(c){e.onError(new d.a(d.b.FORMAT_ERROR,"Error formatting time.",c))}return[]}var L=["localeMatcher","type"];function k(e,t,r,n){var a=e.locale,o=e.onError;void 0===n&&(n={}),Intl.PluralRules||o(new w.a('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',"MISSING_INTL_API"));var i=Object(O.d)(n,L);try{return t(a,i).select(r)}catch(l){o(new d.d("Error formatting plural.",l))}return"other"}var x=["localeMatcher","type","style"],A=Date.now();function C(e,t,r,n){var a=e.locale,o=e.onError;void 0===n&&(n={}),Intl.ListFormat||o(new w.a('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',"MISSING_INTL_API"));var i=Object(O.d)(n,x);try{var l={},c=r.map((function(e,t){if("object"===typeof e){var r=function(e){return A+"_"+e+"_"+A}(t);return l[r]=e,r}return String(e)}));return Object.keys(l).length?t(a,i).formatToParts(c).reduce((function(e,t){var r=t.value;return l[r]?e.push(l[r]):"string"===typeof e[e.length-1]?e[e.length-1]+=r:e.push(r),e}),[]):t(a,i).format(c)}catch(s){o(new d.a(d.b.FORMAT_ERROR,"Error formatting list.",s))}return r}var Z=["localeMatcher","style","type","fallback"];function G(e,t,r,n){var a=e.locale,o=e.onError;Intl.DisplayNames||o(new w.a('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',"MISSING_INTL_API"));var i=Object(O.d)(n,Z);try{return t(a,i).of(r)}catch(l){o(new d.a(d.b.FORMAT_ERROR,"Error formatting display name.",l))}}function q(e){var t=e?e[Object.keys(e)[0]]:void 0;return"object"===typeof t&&!!t}function H(e,t){var r=Object(O.b)(t),n=Object(l.a)(Object(l.a)({},O.a),e),a=n.locale,o=n.defaultLocale,i=n.onError;return a?!Intl.NumberFormat.supportedLocalesOf(a).length&&i?i(new d.e('Missing locale data for locale: "'+a+'" in Intl.NumberFormat. Using default locale: "'+o+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):!Intl.DateTimeFormat.supportedLocalesOf(a).length&&i&&i(new d.e('Missing locale data for locale: "'+a+'" in Intl.DateTimeFormat. Using default locale: "'+o+'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details')):(i&&i(new d.c('"locale" was not configured, using "'+o+'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details')),n.locale=n.defaultLocale||"en"),function(e){e.defaultRichTextElements&&!q(e.messages||{})&&console.warn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution')}(n),Object(l.a)(Object(l.a)({},n),{formatters:r,formatNumber:E.bind(null,n,r.getNumberFormat),formatNumberToParts:R.bind(null,n,r.getNumberFormat),formatRelativeTime:F.bind(null,n,r.getRelativeTimeFormat),formatDate:_.bind(null,n,r.getDateTimeFormat),formatDateToParts:M.bind(null,n,r.getDateTimeFormat),formatTime:I.bind(null,n,r.getDateTimeFormat),formatDateTimeRange:S.bind(null,n,r.getDateTimeFormat),formatTimeToParts:N.bind(null,n,r.getDateTimeFormat),formatPlural:k.bind(null,n,r.getPluralRules),formatMessage:y.bind(null,n,r),formatList:C.bind(null,n,r.getListFormat),formatDisplayName:G.bind(null,n,r.getDisplayNames),__addMessages:function(t){var r=q(n.messages),a=q(t);e.onError&&(r&&!a||!r&&a)&&e.onError(new d.c("Cannot mix AST & non-AST messages for locale "+n.locale)),Object.keys(t).forEach((function(e){n.messages[e]=t[e]}))}})}var U=r("6koa"),z=r.n(U),V=r("/d+U"),X=z.a||U;function B(e){return{locale:e.locale,timeZone:e.timeZone,formats:e.formats,textComponent:e.textComponent,messages:e.messages,defaultLocale:e.defaultLocale,defaultFormats:e.defaultFormats,onError:e.onError,wrapRichTextChunksInFragment:e.wrapRichTextChunksInFragment,defaultRichTextElements:e.defaultRichTextElements}}function J(e){return e?Object.keys(e).reduce((function(t,r){var n=e[r];return t[r]=Object(V.b)(n)?Object(u.b)(n):n,t}),{}):e}var W=function(e,t,r,n){for(var a=[],o=4;o<arguments.length;o++)a[o-4]=arguments[o];var i=J(n),s=y.apply(void 0,Object(l.d)([e,t,r,i],a));return Array.isArray(s)?c.Children.toArray(s):s},K=function(e,t){var r=e.defaultRichTextElements,n=Object(l.c)(e,["defaultRichTextElements"]),a=J(r),o=H(Object(l.a)(Object(l.a)(Object(l.a)({},u.a),n),{defaultRichTextElements:a}),t);return Object(l.a)(Object(l.a)({},o),{formatMessage:W.bind(null,{locale:o.locale,timeZone:o.timeZone,formats:o.formats,defaultLocale:o.defaultLocale,defaultFormats:o.defaultFormats,messages:o.messages,onError:o.onError,defaultRichTextElements:a},o.formatters)})},Y=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cache=Object(O.c)(),t.state={cache:t.cache,intl:K(B(t.props),t.cache),prevConfig:B(t.props)},t}return Object(l.b)(t,e),t.getDerivedStateFromProps=function(e,t){var r=t.prevConfig,n=t.cache,a=B(e);return X(r,a)?null:{intl:K(a,n),prevConfig:a}},t.prototype.render=function(){return Object(u.c)(this.state.intl),c.createElement(s.b,{value:this.state.intl},this.props.children)},t.displayName="IntlProvider",t.defaultProps=u.a,t}(c.PureComponent),$=(r("zPlV"),{hello:"Hello World"}),Q={hello:"Hallo Welt!"},ee={hello:"Bonjour le monde!"},te={hello:"Ciao mondo!"};function re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?re(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(e){var t=e.Component,r=e.pageProps,o=Object(i.useRouter)(),l=o.locale,c=o.defaultLocale;return Object(a.jsxs)(Y,{locale:l,messages:n[l],defaultLocale:c,children:[Object(a.jsx)(t,ne({},r)),";"]})}},zPlV:function(e,t,r){}},[[0,0,1,2,3]]]);