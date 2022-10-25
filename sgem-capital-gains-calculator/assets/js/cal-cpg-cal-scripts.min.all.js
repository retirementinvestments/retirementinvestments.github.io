/**
 * @popperjs/core v2.11.5 - MIT License
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Popper={})}(this,(function(e){"use strict";function t(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){return e instanceof t(e).Element||e instanceof Element}function r(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function o(e){return"undefined"!=typeof ShadowRoot&&(e instanceof t(e).ShadowRoot||e instanceof ShadowRoot)}var i=Math.max,a=Math.min,s=Math.round;function f(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,i=1;if(r(e)&&t){var a=e.offsetHeight,f=e.offsetWidth;f>0&&(o=s(n.width)/f||1),a>0&&(i=s(n.height)/a||1)}return{width:n.width/o,height:n.height/i,top:n.top/i,right:n.right/o,bottom:n.bottom/i,left:n.left/o,x:n.left/o,y:n.top/i}}function c(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function p(e){return e?(e.nodeName||"").toLowerCase():null}function u(e){return((n(e)?e.ownerDocument:e.document)||window.document).documentElement}function l(e){return f(u(e)).left+c(e).scrollLeft}function d(e){return t(e).getComputedStyle(e)}function h(e){var t=d(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function m(e,n,o){void 0===o&&(o=!1);var i,a,d=r(n),m=r(n)&&function(e){var t=e.getBoundingClientRect(),n=s(t.width)/e.offsetWidth||1,r=s(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(n),v=u(n),g=f(e,m),y={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(d||!d&&!o)&&(("body"!==p(n)||h(v))&&(y=(i=n)!==t(i)&&r(i)?{scrollLeft:(a=i).scrollLeft,scrollTop:a.scrollTop}:c(i)),r(n)?((b=f(n,!0)).x+=n.clientLeft,b.y+=n.clientTop):v&&(b.x=l(v))),{x:g.left+y.scrollLeft-b.x,y:g.top+y.scrollTop-b.y,width:g.width,height:g.height}}function v(e){var t=f(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function g(e){return"html"===p(e)?e:e.assignedSlot||e.parentNode||(o(e)?e.host:null)||u(e)}function y(e){return["html","body","#document"].indexOf(p(e))>=0?e.ownerDocument.body:r(e)&&h(e)?e:y(g(e))}function b(e,n){var r;void 0===n&&(n=[]);var o=y(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=t(o),s=i?[a].concat(a.visualViewport||[],h(o)?o:[]):o,f=n.concat(s);return i?f:f.concat(b(g(s)))}function x(e){return["table","td","th"].indexOf(p(e))>=0}function w(e){return r(e)&&"fixed"!==d(e).position?e.offsetParent:null}function O(e){for(var n=t(e),i=w(e);i&&x(i)&&"static"===d(i).position;)i=w(i);return i&&("html"===p(i)||"body"===p(i)&&"static"===d(i).position)?n:i||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&r(e)&&"fixed"===d(e).position)return null;var n=g(e);for(o(n)&&(n=n.host);r(n)&&["html","body"].indexOf(p(n))<0;){var i=d(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||n}var j="top",E="bottom",D="right",A="left",L="auto",P=[j,E,D,A],M="start",k="end",W="viewport",B="popper",H=P.reduce((function(e,t){return e.concat([t+"-"+M,t+"-"+k])}),[]),T=[].concat(P,[L]).reduce((function(e,t){return e.concat([t,t+"-"+M,t+"-"+k])}),[]),R=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function S(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function C(e){return e.split("-")[0]}function q(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&o(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function V(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function N(e,r){return r===W?V(function(e){var n=t(e),r=u(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;return o&&(i=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,f=o.offsetTop)),{width:i,height:a,x:s+l(e),y:f}}(e)):n(r)?function(e){var t=f(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(r):V(function(e){var t,n=u(e),r=c(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=i(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=i(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+l(e),p=-r.scrollTop;return"rtl"===d(o||n).direction&&(f+=i(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:f,y:p}}(u(e)))}function I(e,t,o){var s="clippingParents"===t?function(e){var t=b(g(e)),o=["absolute","fixed"].indexOf(d(e).position)>=0&&r(e)?O(e):e;return n(o)?t.filter((function(e){return n(e)&&q(e,o)&&"body"!==p(e)})):[]}(e):[].concat(t),f=[].concat(s,[o]),c=f[0],u=f.reduce((function(t,n){var r=N(e,n);return t.top=i(r.top,t.top),t.right=a(r.right,t.right),t.bottom=a(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),N(e,c));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function _(e){return e.split("-")[1]}function F(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function U(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?C(o):null,a=o?_(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case j:t={x:s,y:n.y-r.height};break;case E:t={x:s,y:n.y+n.height};break;case D:t={x:n.x+n.width,y:f};break;case A:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?F(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case M:t[c]=t[c]-(n[p]/2-r[p]/2);break;case k:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}function z(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function X(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Y(e,t){void 0===t&&(t={});var r=t,o=r.placement,i=void 0===o?e.placement:o,a=r.boundary,s=void 0===a?"clippingParents":a,c=r.rootBoundary,p=void 0===c?W:c,l=r.elementContext,d=void 0===l?B:l,h=r.altBoundary,m=void 0!==h&&h,v=r.padding,g=void 0===v?0:v,y=z("number"!=typeof g?g:X(g,P)),b=d===B?"reference":B,x=e.rects.popper,w=e.elements[m?b:d],O=I(n(w)?w:w.contextElement||u(e.elements.popper),s,p),A=f(e.elements.reference),L=U({reference:A,element:x,strategy:"absolute",placement:i}),M=V(Object.assign({},x,L)),k=d===B?M:A,H={top:O.top-k.top+y.top,bottom:k.bottom-O.bottom+y.bottom,left:O.left-k.left+y.left,right:k.right-O.right+y.right},T=e.modifiersData.offset;if(d===B&&T){var R=T[i];Object.keys(H).forEach((function(e){var t=[D,E].indexOf(e)>=0?1:-1,n=[j,E].indexOf(e)>=0?"y":"x";H[e]+=R[n]*t}))}return H}var G={placement:"bottom",modifiers:[],strategy:"absolute"};function J(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function K(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,o=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?G:i;return function(e,t,r){void 0===r&&(r=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},G,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,u={state:f,setOptions:function(r){var i="function"==typeof r?r(f.options):r;l(),f.options=Object.assign({},a,f.options,i),f.scrollParents={reference:n(e)?b(e):e.contextElement?b(e.contextElement):[],popper:b(t)};var s,p,d=function(e){var t=S(e);return R.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,f.options.modifiers),p=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(p).map((function(e){return p[e]}))));return f.orderedModifiers=d.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=f.elements,t=e.reference,n=e.popper;if(J(t,n)){f.rects={reference:m(t,O(n),"fixed"===f.options.strategy),popper:v(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:u})||f)}else f.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!J(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!p&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var Q={passive:!0};var Z={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,c=t(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",r.update,Q)})),f&&c.addEventListener("resize",r.update,Q),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",r.update,Q)})),f&&c.removeEventListener("resize",r.update,Q)}},data:{}};var $={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=U({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ee={top:"auto",right:"auto",bottom:"auto",left:"auto"};function te(e){var n,r=e.popper,o=e.popperRect,i=e.placement,a=e.variation,f=e.offsets,c=e.position,p=e.gpuAcceleration,l=e.adaptive,h=e.roundOffsets,m=e.isFixed,v=f.x,g=void 0===v?0:v,y=f.y,b=void 0===y?0:y,x="function"==typeof h?h({x:g,y:b}):{x:g,y:b};g=x.x,b=x.y;var w=f.hasOwnProperty("x"),L=f.hasOwnProperty("y"),P=A,M=j,W=window;if(l){var B=O(r),H="clientHeight",T="clientWidth";if(B===t(r)&&"static"!==d(B=u(r)).position&&"absolute"===c&&(H="scrollHeight",T="scrollWidth"),B=B,i===j||(i===A||i===D)&&a===k)M=E,b-=(m&&B===W&&W.visualViewport?W.visualViewport.height:B[H])-o.height,b*=p?1:-1;if(i===A||(i===j||i===E)&&a===k)P=D,g-=(m&&B===W&&W.visualViewport?W.visualViewport.width:B[T])-o.width,g*=p?1:-1}var R,S=Object.assign({position:c},l&&ee),C=!0===h?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:s(t*r)/r||0,y:s(n*r)/r||0}}({x:g,y:b}):{x:g,y:b};return g=C.x,b=C.y,p?Object.assign({},S,((R={})[M]=L?"0":"",R[P]=w?"0":"",R.transform=(W.devicePixelRatio||1)<=1?"translate("+g+"px, "+b+"px)":"translate3d("+g+"px, "+b+"px, 0)",R)):Object.assign({},S,((n={})[M]=L?b+"px":"",n[P]=w?g+"px":"",n.transform="",n))}var ne={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:C(t.placement),variation:_(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var re={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];r(i)&&p(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});r(o)&&p(o)&&(Object.assign(o.style,a),Object.keys(i).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};var oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=T.reduce((function(e,n){return e[n]=function(e,t,n){var r=C(e),o=[A,j].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[A,D].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},ie={left:"right",right:"left",bottom:"top",top:"bottom"};function ae(e){return e.replace(/left|right|bottom|top/g,(function(e){return ie[e]}))}var se={start:"end",end:"start"};function fe(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function ce(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?T:f,p=_(r),u=p?s?H:H.filter((function(e){return _(e)===p})):P,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=Y(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[C(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}var pe={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,g=C(v),y=f||(g===v||!h?[ae(v)]:function(e){if(C(e)===L)return[];var t=ae(e);return[fe(e),t,fe(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(C(n)===L?ce(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,P=!0,k=b[0],W=0;W<b.length;W++){var B=b[W],H=C(B),T=_(B)===M,R=[j,E].indexOf(H)>=0,S=R?"width":"height",q=Y(t,{placement:B,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),V=R?T?D:A:T?E:j;x[S]>w[S]&&(V=ae(V));var N=ae(V),I=[];if(i&&I.push(q[H]<=0),s&&I.push(q[V]<=0,q[N]<=0),I.every((function(e){return e}))){k=B,P=!1;break}O.set(B,I)}if(P)for(var F=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return k=t,"break"},U=h?3:1;U>0;U--){if("break"===F(U))break}t.placement!==k&&(t.modifiersData[r]._skip=!0,t.placement=k,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ue(e,t,n){return i(e,a(t,n))}var le={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,s=void 0===o||o,f=n.altAxis,c=void 0!==f&&f,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,h=n.tether,m=void 0===h||h,g=n.tetherOffset,y=void 0===g?0:g,b=Y(t,{boundary:p,rootBoundary:u,padding:d,altBoundary:l}),x=C(t.placement),w=_(t.placement),L=!w,P=F(x),k="x"===P?"y":"x",W=t.modifiersData.popperOffsets,B=t.rects.reference,H=t.rects.popper,T="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,R="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(W){if(s){var V,N="y"===P?j:A,I="y"===P?E:D,U="y"===P?"height":"width",z=W[P],X=z+b[N],G=z-b[I],J=m?-H[U]/2:0,K=w===M?B[U]:H[U],Q=w===M?-H[U]:-B[U],Z=t.elements.arrow,$=m&&Z?v(Z):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[N],ne=ee[I],re=ue(0,B[U],$[U]),oe=L?B[U]/2-J-re-te-R.mainAxis:K-re-te-R.mainAxis,ie=L?-B[U]/2+J+re+ne+R.mainAxis:Q+re+ne+R.mainAxis,ae=t.elements.arrow&&O(t.elements.arrow),se=ae?"y"===P?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(V=null==S?void 0:S[P])?V:0,ce=z+ie-fe,pe=ue(m?a(X,z+oe-fe-se):X,z,m?i(G,ce):G);W[P]=pe,q[P]=pe-z}if(c){var le,de="x"===P?j:A,he="x"===P?E:D,me=W[k],ve="y"===k?"height":"width",ge=me+b[de],ye=me-b[he],be=-1!==[j,A].indexOf(x),xe=null!=(le=null==S?void 0:S[k])?le:0,we=be?ge:me-B[ve]-H[ve]-xe+R.altAxis,Oe=be?me+B[ve]+H[ve]-xe-R.altAxis:ye,je=m&&be?function(e,t,n){var r=ue(e,t,n);return r>n?n:r}(we,me,Oe):ue(m?we:ge,me,m?Oe:ye);W[k]=je,q[k]=je-me}t.modifiersData[r]=q}},requiresIfExists:["offset"]};var de={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=C(n.placement),f=F(s),c=[A,D].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return z("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:X(e,P))}(o.padding,n),u=v(i),l="y"===f?j:A,d="y"===f?E:D,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],m=a[f]-n.rects.reference[f],g=O(i),y=g?"y"===f?g.clientHeight||0:g.clientWidth||0:0,b=h/2-m/2,x=p[l],w=y-u[c]-p[d],L=y/2-u[c]/2+b,M=ue(x,L,w),k=f;n.modifiersData[r]=((t={})[k]=M,t.centerOffset=M-L,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&q(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function he(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function me(e){return[j,D,E,A].some((function(t){return e[t]>=0}))}var ve={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Y(t,{elementContext:"reference"}),s=Y(t,{altBoundary:!0}),f=he(a,r),c=he(s,o,i),p=me(f),u=me(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}},ge=K({defaultModifiers:[Z,$,ne,re]}),ye=[Z,$,ne,re,oe,pe,le,de,ve],be=K({defaultModifiers:ye});e.applyStyles=re,e.arrow=de,e.computeStyles=ne,e.createPopper=be,e.createPopperLite=ge,e.defaultModifiers=ye,e.detectOverflow=Y,e.eventListeners=Z,e.flip=pe,e.hide=ve,e.offset=oe,e.popperGenerator=K,e.popperOffsets=$,e.preventOverflow=le,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=popper.min.js.map


!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Popper={})}(this,(function(e){"use strict";function t(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function n(e){return e instanceof t(e).Element||e instanceof Element}function r(e){return e instanceof t(e).HTMLElement||e instanceof HTMLElement}function o(e){return"undefined"!=typeof ShadowRoot&&(e instanceof t(e).ShadowRoot||e instanceof ShadowRoot)}var i=Math.max,a=Math.min,s=Math.round;function f(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,i=1;if(r(e)&&t){var a=e.offsetHeight,f=e.offsetWidth;f>0&&(o=s(n.width)/f||1),a>0&&(i=s(n.height)/a||1)}return{width:n.width/o,height:n.height/i,top:n.top/i,right:n.right/o,bottom:n.bottom/i,left:n.left/o,x:n.left/o,y:n.top/i}}function c(e){var n=t(e);return{scrollLeft:n.pageXOffset,scrollTop:n.pageYOffset}}function p(e){return e?(e.nodeName||"").toLowerCase():null}function u(e){return((n(e)?e.ownerDocument:e.document)||window.document).documentElement}function l(e){return f(u(e)).left+c(e).scrollLeft}function d(e){return t(e).getComputedStyle(e)}function h(e){var t=d(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function m(e,n,o){void 0===o&&(o=!1);var i,a,d=r(n),m=r(n)&&function(e){var t=e.getBoundingClientRect(),n=s(t.width)/e.offsetWidth||1,r=s(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(n),v=u(n),g=f(e,m),y={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(d||!d&&!o)&&(("body"!==p(n)||h(v))&&(y=(i=n)!==t(i)&&r(i)?{scrollLeft:(a=i).scrollLeft,scrollTop:a.scrollTop}:c(i)),r(n)?((b=f(n,!0)).x+=n.clientLeft,b.y+=n.clientTop):v&&(b.x=l(v))),{x:g.left+y.scrollLeft-b.x,y:g.top+y.scrollTop-b.y,width:g.width,height:g.height}}function v(e){var t=f(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function g(e){return"html"===p(e)?e:e.assignedSlot||e.parentNode||(o(e)?e.host:null)||u(e)}function y(e){return["html","body","#document"].indexOf(p(e))>=0?e.ownerDocument.body:r(e)&&h(e)?e:y(g(e))}function b(e,n){var r;void 0===n&&(n=[]);var o=y(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=t(o),s=i?[a].concat(a.visualViewport||[],h(o)?o:[]):o,f=n.concat(s);return i?f:f.concat(b(g(s)))}function x(e){return["table","td","th"].indexOf(p(e))>=0}function w(e){return r(e)&&"fixed"!==d(e).position?e.offsetParent:null}function O(e){for(var n=t(e),i=w(e);i&&x(i)&&"static"===d(i).position;)i=w(i);return i&&("html"===p(i)||"body"===p(i)&&"static"===d(i).position)?n:i||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&r(e)&&"fixed"===d(e).position)return null;var n=g(e);for(o(n)&&(n=n.host);r(n)&&["html","body"].indexOf(p(n))<0;){var i=d(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||n}var j="top",E="bottom",D="right",A="left",L="auto",P=[j,E,D,A],M="start",k="end",W="viewport",B="popper",H=P.reduce((function(e,t){return e.concat([t+"-"+M,t+"-"+k])}),[]),T=[].concat(P,[L]).reduce((function(e,t){return e.concat([t,t+"-"+M,t+"-"+k])}),[]),R=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function S(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function C(e){return e.split("-")[0]}function q(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&o(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function V(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function N(e,r){return r===W?V(function(e){var n=t(e),r=u(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;return o&&(i=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,f=o.offsetTop)),{width:i,height:a,x:s+l(e),y:f}}(e)):n(r)?function(e){var t=f(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(r):V(function(e){var t,n=u(e),r=c(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=i(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=i(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+l(e),p=-r.scrollTop;return"rtl"===d(o||n).direction&&(f+=i(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:f,y:p}}(u(e)))}function I(e,t,o){var s="clippingParents"===t?function(e){var t=b(g(e)),o=["absolute","fixed"].indexOf(d(e).position)>=0&&r(e)?O(e):e;return n(o)?t.filter((function(e){return n(e)&&q(e,o)&&"body"!==p(e)})):[]}(e):[].concat(t),f=[].concat(s,[o]),c=f[0],u=f.reduce((function(t,n){var r=N(e,n);return t.top=i(r.top,t.top),t.right=a(r.right,t.right),t.bottom=a(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),N(e,c));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function _(e){return e.split("-")[1]}function F(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function U(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?C(o):null,a=o?_(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case j:t={x:s,y:n.y-r.height};break;case E:t={x:s,y:n.y+n.height};break;case D:t={x:n.x+n.width,y:f};break;case A:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?F(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case M:t[c]=t[c]-(n[p]/2-r[p]/2);break;case k:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}function z(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function X(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Y(e,t){void 0===t&&(t={});var r=t,o=r.placement,i=void 0===o?e.placement:o,a=r.boundary,s=void 0===a?"clippingParents":a,c=r.rootBoundary,p=void 0===c?W:c,l=r.elementContext,d=void 0===l?B:l,h=r.altBoundary,m=void 0!==h&&h,v=r.padding,g=void 0===v?0:v,y=z("number"!=typeof g?g:X(g,P)),b=d===B?"reference":B,x=e.rects.popper,w=e.elements[m?b:d],O=I(n(w)?w:w.contextElement||u(e.elements.popper),s,p),A=f(e.elements.reference),L=U({reference:A,element:x,strategy:"absolute",placement:i}),M=V(Object.assign({},x,L)),k=d===B?M:A,H={top:O.top-k.top+y.top,bottom:k.bottom-O.bottom+y.bottom,left:O.left-k.left+y.left,right:k.right-O.right+y.right},T=e.modifiersData.offset;if(d===B&&T){var R=T[i];Object.keys(H).forEach((function(e){var t=[D,E].indexOf(e)>=0?1:-1,n=[j,E].indexOf(e)>=0?"y":"x";H[e]+=R[n]*t}))}return H}var G={placement:"bottom",modifiers:[],strategy:"absolute"};function J(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function K(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,o=void 0===r?[]:r,i=t.defaultOptions,a=void 0===i?G:i;return function(e,t,r){void 0===r&&(r=a);var i,s,f={placement:"bottom",orderedModifiers:[],options:Object.assign({},G,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],p=!1,u={state:f,setOptions:function(r){var i="function"==typeof r?r(f.options):r;l(),f.options=Object.assign({},a,f.options,i),f.scrollParents={reference:n(e)?b(e):e.contextElement?b(e.contextElement):[],popper:b(t)};var s,p,d=function(e){var t=S(e);return R.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((s=[].concat(o,f.options.modifiers),p=s.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(p).map((function(e){return p[e]}))));return f.orderedModifiers=d.filter((function(e){return e.enabled})),f.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var i=o({state:f,name:t,instance:u,options:r}),a=function(){};c.push(i||a)}})),u.update()},forceUpdate:function(){if(!p){var e=f.elements,t=e.reference,n=e.popper;if(J(t,n)){f.rects={reference:m(t,O(n),"fixed"===f.options.strategy),popper:v(n)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach((function(e){return f.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<f.orderedModifiers.length;r++)if(!0!==f.reset){var o=f.orderedModifiers[r],i=o.fn,a=o.options,s=void 0===a?{}:a,c=o.name;"function"==typeof i&&(f=i({state:f,options:s,name:c,instance:u})||f)}else f.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(f)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!J(e,t))return u;function l(){c.forEach((function(e){return e()})),c=[]}return u.setOptions(r).then((function(e){!p&&r.onFirstUpdate&&r.onFirstUpdate(e)})),u}}var Q={passive:!0};var Z={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var n=e.state,r=e.instance,o=e.options,i=o.scroll,a=void 0===i||i,s=o.resize,f=void 0===s||s,c=t(n.elements.popper),p=[].concat(n.scrollParents.reference,n.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",r.update,Q)})),f&&c.addEventListener("resize",r.update,Q),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",r.update,Q)})),f&&c.removeEventListener("resize",r.update,Q)}},data:{}};var $={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=U({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},ee={top:"auto",right:"auto",bottom:"auto",left:"auto"};function te(e){var n,r=e.popper,o=e.popperRect,i=e.placement,a=e.variation,f=e.offsets,c=e.position,p=e.gpuAcceleration,l=e.adaptive,h=e.roundOffsets,m=e.isFixed,v=f.x,g=void 0===v?0:v,y=f.y,b=void 0===y?0:y,x="function"==typeof h?h({x:g,y:b}):{x:g,y:b};g=x.x,b=x.y;var w=f.hasOwnProperty("x"),L=f.hasOwnProperty("y"),P=A,M=j,W=window;if(l){var B=O(r),H="clientHeight",T="clientWidth";if(B===t(r)&&"static"!==d(B=u(r)).position&&"absolute"===c&&(H="scrollHeight",T="scrollWidth"),B=B,i===j||(i===A||i===D)&&a===k)M=E,b-=(m&&B===W&&W.visualViewport?W.visualViewport.height:B[H])-o.height,b*=p?1:-1;if(i===A||(i===j||i===E)&&a===k)P=D,g-=(m&&B===W&&W.visualViewport?W.visualViewport.width:B[T])-o.width,g*=p?1:-1}var R,S=Object.assign({position:c},l&&ee),C=!0===h?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:s(t*r)/r||0,y:s(n*r)/r||0}}({x:g,y:b}):{x:g,y:b};return g=C.x,b=C.y,p?Object.assign({},S,((R={})[M]=L?"0":"",R[P]=w?"0":"",R.transform=(W.devicePixelRatio||1)<=1?"translate("+g+"px, "+b+"px)":"translate3d("+g+"px, "+b+"px, 0)",R)):Object.assign({},S,((n={})[M]=L?b+"px":"",n[P]=w?g+"px":"",n.transform="",n))}var ne={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:C(t.placement),variation:_(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}};var re={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},i=t.elements[e];r(i)&&p(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});r(o)&&p(o)&&(Object.assign(o.style,a),Object.keys(i).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]};var oe={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=T.reduce((function(e,n){return e[n]=function(e,t,n){var r=C(e),o=[A,j].indexOf(r)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[A,D].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},ie={left:"right",right:"left",bottom:"top",top:"bottom"};function ae(e){return e.replace(/left|right|bottom|top/g,(function(e){return ie[e]}))}var se={start:"end",end:"start"};function fe(e){return e.replace(/start|end/g,(function(e){return se[e]}))}function ce(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?T:f,p=_(r),u=p?s?H:H.filter((function(e){return _(e)===p})):P,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=Y(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[C(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}var pe={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,g=C(v),y=f||(g===v||!h?[ae(v)]:function(e){if(C(e)===L)return[];var t=ae(e);return[fe(e),t,fe(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(C(n)===L?ce(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),x=t.rects.reference,w=t.rects.popper,O=new Map,P=!0,k=b[0],W=0;W<b.length;W++){var B=b[W],H=C(B),T=_(B)===M,R=[j,E].indexOf(H)>=0,S=R?"width":"height",q=Y(t,{placement:B,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),V=R?T?D:A:T?E:j;x[S]>w[S]&&(V=ae(V));var N=ae(V),I=[];if(i&&I.push(q[H]<=0),s&&I.push(q[V]<=0,q[N]<=0),I.every((function(e){return e}))){k=B,P=!1;break}O.set(B,I)}if(P)for(var F=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return k=t,"break"},U=h?3:1;U>0;U--){if("break"===F(U))break}t.placement!==k&&(t.modifiersData[r]._skip=!0,t.placement=k,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ue(e,t,n){return i(e,a(t,n))}var le={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,s=void 0===o||o,f=n.altAxis,c=void 0!==f&&f,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.padding,h=n.tether,m=void 0===h||h,g=n.tetherOffset,y=void 0===g?0:g,b=Y(t,{boundary:p,rootBoundary:u,padding:d,altBoundary:l}),x=C(t.placement),w=_(t.placement),L=!w,P=F(x),k="x"===P?"y":"x",W=t.modifiersData.popperOffsets,B=t.rects.reference,H=t.rects.popper,T="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,R="number"==typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(W){if(s){var V,N="y"===P?j:A,I="y"===P?E:D,U="y"===P?"height":"width",z=W[P],X=z+b[N],G=z-b[I],J=m?-H[U]/2:0,K=w===M?B[U]:H[U],Q=w===M?-H[U]:-B[U],Z=t.elements.arrow,$=m&&Z?v(Z):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[N],ne=ee[I],re=ue(0,B[U],$[U]),oe=L?B[U]/2-J-re-te-R.mainAxis:K-re-te-R.mainAxis,ie=L?-B[U]/2+J+re+ne+R.mainAxis:Q+re+ne+R.mainAxis,ae=t.elements.arrow&&O(t.elements.arrow),se=ae?"y"===P?ae.clientTop||0:ae.clientLeft||0:0,fe=null!=(V=null==S?void 0:S[P])?V:0,ce=z+ie-fe,pe=ue(m?a(X,z+oe-fe-se):X,z,m?i(G,ce):G);W[P]=pe,q[P]=pe-z}if(c){var le,de="x"===P?j:A,he="x"===P?E:D,me=W[k],ve="y"===k?"height":"width",ge=me+b[de],ye=me-b[he],be=-1!==[j,A].indexOf(x),xe=null!=(le=null==S?void 0:S[k])?le:0,we=be?ge:me-B[ve]-H[ve]-xe+R.altAxis,Oe=be?me+B[ve]+H[ve]-xe-R.altAxis:ye,je=m&&be?function(e,t,n){var r=ue(e,t,n);return r>n?n:r}(we,me,Oe):ue(m?we:ge,me,m?Oe:ye);W[k]=je,q[k]=je-me}t.modifiersData[r]=q}},requiresIfExists:["offset"]};var de={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=C(n.placement),f=F(s),c=[A,D].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return z("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:X(e,P))}(o.padding,n),u=v(i),l="y"===f?j:A,d="y"===f?E:D,h=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],m=a[f]-n.rects.reference[f],g=O(i),y=g?"y"===f?g.clientHeight||0:g.clientWidth||0:0,b=h/2-m/2,x=p[l],w=y-u[c]-p[d],L=y/2-u[c]/2+b,M=ue(x,L,w),k=f;n.modifiersData[r]=((t={})[k]=M,t.centerOffset=M-L,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&q(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function he(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function me(e){return[j,D,E,A].some((function(t){return e[t]>=0}))}var ve={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=Y(t,{elementContext:"reference"}),s=Y(t,{altBoundary:!0}),f=he(a,r),c=he(s,o,i),p=me(f),u=me(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}},ge=K({defaultModifiers:[Z,$,ne,re]}),ye=[Z,$,ne,re,oe,pe,le,de,ve],be=K({defaultModifiers:ye});e.applyStyles=re,e.arrow=de,e.computeStyles=ne,e.createPopper=be,e.createPopperLite=ge,e.defaultModifiers=ye,e.detectOverflow=Y,e.eventListeners=Z,e.flip=pe,e.hide=ve,e.offset=oe,e.popperGenerator=K,e.popperOffsets=$,e.preventOverflow=le,Object.defineProperty(e,"__esModule",{value:!0})})); 
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("@popperjs/core")):"function"==typeof define&&define.amd?define(["@popperjs/core"],e):(t=t||self).tippy=e(t.Popper)}(this,(function(t){"use strict";var e="undefined"!=typeof window&&"undefined"!=typeof document,n=!!e&&!!window.msroth,r={passive:!0,capture:!0},o=function(){return document.body};function i(t,e,n){if(Array.isArray(t)){var r=t[e];return null==r?Array.isArray(n)?n[e]:n:r}return t}function a(t,e){var n={}.toString.call(t);return 0===n.indexOf("[object")&&n.indexOf(e+"]")>-1}function s(t,e){return"function"==typeof t?t.apply(void 0,e):t}function u(t,e){return 0===e?t:function(r){clearTimeout(n),n=setTimeout((function(){t(r)}),e)};var n}function p(t,e){var n=Object.assign({},t);return e.forEach((function(t){delete n[t]})),n}function c(t){return[].concat(t)}function f(t,e){-1===t.indexOf(e)&&t.push(e)}function l(t){return t.split("-")[0]}function d(t){return[].slice.call(t)}function v(t){return Object.keys(t).reduce((function(e,n){return void 0!==t[n]&&(e[n]=t[n]),e}),{})}function m(){return document.createElement("div")}function g(t){return["Element","Fragment"].some((function(e){return a(t,e)}))}function h(t){return a(t,"MouseEvent")}function b(t){return!(!t||!t._tippy||t._tippy.reference!==t)}function y(t){return g(t)?[t]:function(t){return a(t,"NodeList")}(t)?d(t):Array.isArray(t)?t:d(document.querySelectorAll(t))}function w(t,e){t.forEach((function(t){t&&(t.style.transitionDuration=e+"ms")}))}function x(t,e){t.forEach((function(t){t&&t.setAttribute("data-state",e)}))}function E(t){var e,n=c(t)[0];return null!=n&&null!=(e=n.ownerDocument)&&e.body?n.ownerDocument:document}function O(t,e,n){var r=e+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(e){t[r](e,n)}))}function C(t,e){for(var n=e;n;){var r;if(t.contains(n))return!0;n=null==n.getRootNode||null==(r=n.getRootNode())?void 0:r.host}return!1}var T={isTouch:!1},A=0;function L(){T.isTouch||(T.isTouch=!0,window.performance&&document.addEventListener("mousemove",D))}function D(){var t=performance.now();t-A<20&&(T.isTouch=!1,document.removeEventListener("mousemove",D)),A=t}function k(){var t=document.activeElement;if(b(t)){var e=t._tippy;t.blur&&!e.state.isVisible&&t.blur()}}var R=Object.assign({appendTo:o,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),P=Object.keys(R);function j(t){var e=(t.plugins||[]).reduce((function(e,n){var r,o=n.name,i=n.defaultValue;o&&(e[o]=void 0!==t[o]?t[o]:null!=(r=R[o])?r:i);return e}),{});return Object.assign({},t,e)}function M(t,e){var n=Object.assign({},e,{content:s(e.content,[t])},e.ignoreAttributes?{}:function(t,e){return(e?Object.keys(j(Object.assign({},R,{plugins:e}))):P).reduce((function(e,n){var r=(t.getAttribute("data-tippy-"+n)||"").trim();if(!r)return e;if("content"===n)e[n]=r;else try{e[n]=JSON.parse(r)}catch(t){e[n]=r}return e}),{})}(t,e.plugins));return n.aria=Object.assign({},R.aria,n.aria),n.aria={expanded:"auto"===n.aria.expanded?e.interactive:n.aria.expanded,content:"auto"===n.aria.content?e.interactive?null:"describedby":n.aria.content},n}function V(t,e){t.innerHTML=e}function I(t){var e=m();return!0===t?e.className="tippy-arrow":(e.className="tippy-svg-arrow",g(t)?e.appendChild(t):V(e,t)),e}function S(t,e){g(e.content)?(V(t,""),t.appendChild(e.content)):"function"!=typeof e.content&&(e.allowHTML?V(t,e.content):t.textContent=e.content)}function B(t){var e=t.firstElementChild,n=d(e.children);return{box:e,content:n.find((function(t){return t.classList.contains("tippy-content")})),arrow:n.find((function(t){return t.classList.contains("tippy-arrow")||t.classList.contains("tippy-svg-arrow")})),backdrop:n.find((function(t){return t.classList.contains("tippy-backdrop")}))}}function N(t){var e=m(),n=m();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=m();function o(n,r){var o=B(e),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"==typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||S(a,t.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(I(r.arrow))):i.appendChild(I(r.arrow)):s&&i.removeChild(s)}return r.className="tippy-content",r.setAttribute("data-state","hidden"),S(r,t.props),e.appendChild(n),n.appendChild(r),o(t.props,t.props),{popper:e,onUpdate:o}}N.$$tippy=!0;var H=1,U=[],_=[];function z(e,a){var p,g,b,y,A,L,D,k,P=M(e,Object.assign({},R,j(v(a)))),V=!1,I=!1,S=!1,N=!1,z=[],F=u(wt,P.interactiveDebounce),W=H++,X=(k=P.plugins).filter((function(t,e){return k.indexOf(t)===e})),Y={id:W,reference:e,popper:m(),popperInstance:null,props:P,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:X,clearDelayTimeouts:function(){clearTimeout(p),clearTimeout(g),cancelAnimationFrame(b)},setProps:function(t){if(Y.state.isDestroyed)return;at("onBeforeUpdate",[Y,t]),bt();var n=Y.props,r=M(e,Object.assign({},n,v(t),{ignoreAttributes:!0}));Y.props=r,ht(),n.interactiveDebounce!==r.interactiveDebounce&&(pt(),F=u(wt,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?c(n.triggerTarget).forEach((function(t){t.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");ut(),it(),J&&J(n,r);Y.popperInstance&&(Ct(),At().forEach((function(t){requestAnimationFrame(t._tippy.popperInstance.forceUpdate)})));at("onAfterUpdate",[Y,t])},setContent:function(t){Y.setProps({content:t})},show:function(){var t=Y.state.isVisible,e=Y.state.isDestroyed,n=!Y.state.isEnabled,r=T.isTouch&&!Y.props.touch,a=i(Y.props.duration,0,R.duration);if(t||e||n||r)return;if(et().hasAttribute("disabled"))return;if(at("onShow",[Y],!1),!1===Y.props.onShow(Y))return;Y.state.isVisible=!0,tt()&&($.style.visibility="visible");it(),dt(),Y.state.isMounted||($.style.transition="none");if(tt()){var u=rt(),p=u.box,c=u.content;w([p,c],0)}L=function(){var t;if(Y.state.isVisible&&!N){if(N=!0,$.offsetHeight,$.style.transition=Y.props.moveTransition,tt()&&Y.props.animation){var e=rt(),n=e.box,r=e.content;w([n,r],a),x([n,r],"visible")}st(),ut(),f(_,Y),null==(t=Y.popperInstance)||t.forceUpdate(),at("onMount",[Y]),Y.props.animation&&tt()&&function(t,e){mt(t,e)}(a,(function(){Y.state.isShown=!0,at("onShown",[Y])}))}},function(){var t,e=Y.props.appendTo,n=et();t=Y.props.interactive&&e===o||"parent"===e?n.parentNode:s(e,[n]);t.contains($)||t.appendChild($);Y.state.isMounted=!0,Ct()}()},hide:function(){var t=!Y.state.isVisible,e=Y.state.isDestroyed,n=!Y.state.isEnabled,r=i(Y.props.duration,1,R.duration);if(t||e||n)return;if(at("onHide",[Y],!1),!1===Y.props.onHide(Y))return;Y.state.isVisible=!1,Y.state.isShown=!1,N=!1,V=!1,tt()&&($.style.visibility="hidden");if(pt(),vt(),it(!0),tt()){var o=rt(),a=o.box,s=o.content;Y.props.animation&&(w([a,s],r),x([a,s],"hidden"))}st(),ut(),Y.props.animation?tt()&&function(t,e){mt(t,(function(){!Y.state.isVisible&&$.parentNode&&$.parentNode.contains($)&&e()}))}(r,Y.unmount):Y.unmount()},hideWithInteractivity:function(t){nt().addEventListener("mousemove",F),f(U,F),F(t)},enable:function(){Y.state.isEnabled=!0},disable:function(){Y.hide(),Y.state.isEnabled=!1},unmount:function(){Y.state.isVisible&&Y.hide();if(!Y.state.isMounted)return;Tt(),At().forEach((function(t){t._tippy.unmount()})),$.parentNode&&$.parentNode.removeChild($);_=_.filter((function(t){return t!==Y})),Y.state.isMounted=!1,at("onHidden",[Y])},destroy:function(){if(Y.state.isDestroyed)return;Y.clearDelayTimeouts(),Y.unmount(),bt(),delete e._tippy,Y.state.isDestroyed=!0,at("onDestroy",[Y])}};if(!P.render)return Y;var q=P.render(Y),$=q.popper,J=q.onUpdate;$.setAttribute("data-tippy-root",""),$.id="tippy-"+Y.id,Y.popper=$,e._tippy=Y,$._tippy=Y;var G=X.map((function(t){return t.fn(Y)})),K=e.hasAttribute("aria-expanded");return ht(),ut(),it(),at("onCreate",[Y]),P.showOnCreate&&Lt(),$.addEventListener("mouseenter",(function(){Y.props.interactive&&Y.state.isVisible&&Y.clearDelayTimeouts()})),$.addEventListener("mouseleave",(function(){Y.props.interactive&&Y.props.trigger.indexOf("mouseenter")>=0&&nt().addEventListener("mousemove",F)})),Y;function Q(){var t=Y.props.touch;return Array.isArray(t)?t:[t,0]}function Z(){return"hold"===Q()[0]}function tt(){var t;return!(null==(t=Y.props.render)||!t.$$tippy)}function et(){return D||e}function nt(){var t=et().parentNode;return t?E(t):document}function rt(){return B($)}function ot(t){return Y.state.isMounted&&!Y.state.isVisible||T.isTouch||y&&"focus"===y.type?0:i(Y.props.delay,t?0:1,R.delay)}function it(t){void 0===t&&(t=!1),$.style.pointerEvents=Y.props.interactive&&!t?"":"none",$.style.zIndex=""+Y.props.zIndex}function at(t,e,n){var r;(void 0===n&&(n=!0),G.forEach((function(n){n[t]&&n[t].apply(n,e)})),n)&&(r=Y.props)[t].apply(r,e)}function st(){var t=Y.props.aria;if(t.content){var n="aria-"+t.content,r=$.id;c(Y.props.triggerTarget||e).forEach((function(t){var e=t.getAttribute(n);if(Y.state.isVisible)t.setAttribute(n,e?e+" "+r:r);else{var o=e&&e.replace(r,"").trim();o?t.setAttribute(n,o):t.removeAttribute(n)}}))}}function ut(){!K&&Y.props.aria.expanded&&c(Y.props.triggerTarget||e).forEach((function(t){Y.props.interactive?t.setAttribute("aria-expanded",Y.state.isVisible&&t===et()?"true":"false"):t.removeAttribute("aria-expanded")}))}function pt(){nt().removeEventListener("mousemove",F),U=U.filter((function(t){return t!==F}))}function ct(t){if(!T.isTouch||!S&&"mousedown"!==t.type){var n=t.composedPath&&t.composedPath()[0]||t.target;if(!Y.props.interactive||!C($,n)){if(c(Y.props.triggerTarget||e).some((function(t){return C(t,n)}))){if(T.isTouch)return;if(Y.state.isVisible&&Y.props.trigger.indexOf("click")>=0)return}else at("onClickOutside",[Y,t]);!0===Y.props.hideOnClick&&(Y.clearDelayTimeouts(),Y.hide(),I=!0,setTimeout((function(){I=!1})),Y.state.isMounted||vt())}}}function ft(){S=!0}function lt(){S=!1}function dt(){var t=nt();t.addEventListener("mousedown",ct,!0),t.addEventListener("touchend",ct,r),t.addEventListener("touchstart",lt,r),t.addEventListener("touchmove",ft,r)}function vt(){var t=nt();t.removeEventListener("mousedown",ct,!0),t.removeEventListener("touchend",ct,r),t.removeEventListener("touchstart",lt,r),t.removeEventListener("touchmove",ft,r)}function mt(t,e){var n=rt().box;function r(t){t.target===n&&(O(n,"remove",r),e())}if(0===t)return e();O(n,"remove",A),O(n,"add",r),A=r}function gt(t,n,r){void 0===r&&(r=!1),c(Y.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),z.push({node:e,eventType:t,handler:n,options:r})}))}function ht(){var t;Z()&&(gt("touchstart",yt,{passive:!0}),gt("touchend",xt,{passive:!0})),(t=Y.props.trigger,t.split(/\s+/).filter(Boolean)).forEach((function(t){if("manual"!==t)switch(gt(t,yt),t){case"mouseenter":gt("mouseleave",xt);break;case"focus":gt(n?"focusout":"blur",Et);break;case"focusin":gt("focusout",Et)}}))}function bt(){z.forEach((function(t){var e=t.node,n=t.eventType,r=t.handler,o=t.options;e.removeEventListener(n,r,o)})),z=[]}function yt(t){var e,n=!1;if(Y.state.isEnabled&&!Ot(t)&&!I){var r="focus"===(null==(e=y)?void 0:e.type);y=t,D=t.currentTarget,ut(),!Y.state.isVisible&&h(t)&&U.forEach((function(e){return e(t)})),"click"===t.type&&(Y.props.trigger.indexOf("mouseenter")<0||V)&&!1!==Y.props.hideOnClick&&Y.state.isVisible?n=!0:Lt(t),"click"===t.type&&(V=!n),n&&!r&&Dt(t)}}function wt(t){var e=t.target,n=et().contains(e)||$.contains(e);"mousemove"===t.type&&n||function(t,e){var n=e.clientX,r=e.clientY;return t.every((function(t){var e=t.popperRect,o=t.popperState,i=t.props.interactiveBorder,a=l(o.placement),s=o.modifiersData.offset;if(!s)return!0;var u="bottom"===a?s.top.y:0,p="top"===a?s.bottom.y:0,c="right"===a?s.left.x:0,f="left"===a?s.right.x:0,d=e.top-r+u>i,v=r-e.bottom-p>i,m=e.left-n+c>i,g=n-e.right-f>i;return d||v||m||g}))}(At().concat($).map((function(t){var e,n=null==(e=t._tippy.popperInstance)?void 0:e.state;return n?{popperRect:t.getBoundingClientRect(),popperState:n,props:P}:null})).filter(Boolean),t)&&(pt(),Dt(t))}function xt(t){Ot(t)||Y.props.trigger.indexOf("click")>=0&&V||(Y.props.interactive?Y.hideWithInteractivity(t):Dt(t))}function Et(t){Y.props.trigger.indexOf("focusin")<0&&t.target!==et()||Y.props.interactive&&t.relatedTarget&&$.contains(t.relatedTarget)||Dt(t)}function Ot(t){return!!T.isTouch&&Z()!==t.type.indexOf("touch")>=0}function Ct(){Tt();var n=Y.props,r=n.popperOptions,o=n.placement,i=n.offset,a=n.getReferenceClientRect,s=n.moveTransition,u=tt()?B($).arrow:null,p=a?{getBoundingClientRect:a,contextElement:a.contextElement||et()}:e,c=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(t){var e=t.state;if(tt()){var n=rt().box;["placement","reference-hidden","escaped"].forEach((function(t){"placement"===t?n.setAttribute("data-placement",e.placement):e.attributes.popper["data-popper-"+t]?n.setAttribute("data-"+t,""):n.removeAttribute("data-"+t)})),e.attributes.popper={}}}}];tt()&&u&&c.push({name:"arrow",options:{element:u,padding:3}}),c.push.apply(c,(null==r?void 0:r.modifiers)||[]),Y.popperInstance=t.createPopper(p,$,Object.assign({},r,{placement:o,onFirstUpdate:L,modifiers:c}))}function Tt(){Y.popperInstance&&(Y.popperInstance.destroy(),Y.popperInstance=null)}function At(){return d($.querySelectorAll("[data-tippy-root]"))}function Lt(t){Y.clearDelayTimeouts(),t&&at("onTrigger",[Y,t]),dt();var e=ot(!0),n=Q(),r=n[0],o=n[1];T.isTouch&&"hold"===r&&o&&(e=o),e?p=setTimeout((function(){Y.show()}),e):Y.show()}function Dt(t){if(Y.clearDelayTimeouts(),at("onUntrigger",[Y,t]),Y.state.isVisible){if(!(Y.props.trigger.indexOf("mouseenter")>=0&&Y.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(t.type)>=0&&V)){var e=ot(!1);e?g=setTimeout((function(){Y.state.isVisible&&Y.hide()}),e):b=requestAnimationFrame((function(){Y.hide()}))}}else vt()}}function F(t,e){void 0===e&&(e={});var n=R.plugins.concat(e.plugins||[]);document.addEventListener("touchstart",L,r),window.addEventListener("blur",k);var o=Object.assign({},e,{plugins:n}),i=y(t).reduce((function(t,e){var n=e&&z(e,o);return n&&t.push(n),t}),[]);return g(t)?i[0]:i}F.defaultProps=R,F.setDefaultProps=function(t){Object.keys(t).forEach((function(e){R[e]=t[e]}))},F.currentInput=T;var W=Object.assign({},t.applyStyles,{effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow)}}),X={mouseover:"mouseenter",focusin:"focus",click:"click"};var Y={name:"animateFill",defaultValue:!1,fn:function(t){var e;if(null==(e=t.props.render)||!e.$$tippy)return{};var n=B(t.popper),r=n.box,o=n.content,i=t.props.animateFill?function(){var t=m();return t.className="tippy-backdrop",x([t],"hidden"),t}():null;return{onCreate:function(){i&&(r.insertBefore(i,r.firstElementChild),r.setAttribute("data-animatefill",""),r.style.overflow="hidden",t.setProps({arrow:!1,animation:"shift-away"}))},onMount:function(){if(i){var t=r.style.transitionDuration,e=Number(t.replace("ms",""));o.style.transitionDelay=Math.round(e/10)+"ms",i.style.transitionDuration=t,x([i],"visible")}},onShow:function(){i&&(i.style.transitionDuration="0ms")},onHide:function(){i&&x([i],"hidden")}}}};var q={clientX:0,clientY:0},$=[];function J(t){var e=t.clientX,n=t.clientY;q={clientX:e,clientY:n}}var G={name:"followCursor",defaultValue:!1,fn:function(t){var e=t.reference,n=E(t.props.triggerTarget||e),r=!1,o=!1,i=!0,a=t.props;function s(){return"initial"===t.props.followCursor&&t.state.isVisible}function u(){n.addEventListener("mousemove",f)}function p(){n.removeEventListener("mousemove",f)}function c(){r=!0,t.setProps({getReferenceClientRect:null}),r=!1}function f(n){var r=!n.target||e.contains(n.target),o=t.props.followCursor,i=n.clientX,a=n.clientY,s=e.getBoundingClientRect(),u=i-s.left,p=a-s.top;!r&&t.props.interactive||t.setProps({getReferenceClientRect:function(){var t=e.getBoundingClientRect(),n=i,r=a;"initial"===o&&(n=t.left+u,r=t.top+p);var s="horizontal"===o?t.top:r,c="vertical"===o?t.right:n,f="horizontal"===o?t.bottom:r,l="vertical"===o?t.left:n;return{width:c-l,height:f-s,top:s,right:c,bottom:f,left:l}}})}function l(){t.props.followCursor&&($.push({instance:t,doc:n}),function(t){t.addEventListener("mousemove",J)}(n))}function d(){0===($=$.filter((function(e){return e.instance!==t}))).filter((function(t){return t.doc===n})).length&&function(t){t.removeEventListener("mousemove",J)}(n)}return{onCreate:l,onDestroy:d,onBeforeUpdate:function(){a=t.props},onAfterUpdate:function(e,n){var i=n.followCursor;r||void 0!==i&&a.followCursor!==i&&(d(),i?(l(),!t.state.isMounted||o||s()||u()):(p(),c()))},onMount:function(){t.props.followCursor&&!o&&(i&&(f(q),i=!1),s()||u())},onTrigger:function(t,e){h(e)&&(q={clientX:e.clientX,clientY:e.clientY}),o="focus"===e.type},onHidden:function(){t.props.followCursor&&(c(),p(),i=!0)}}}};var K={name:"inlinePositioning",defaultValue:!1,fn:function(t){var e,n=t.reference;var r=-1,o=!1,i=[],a={name:"tippyInlinePositioning",enabled:!0,phase:"afterWrite",fn:function(o){var a=o.state;t.props.inlinePositioning&&(-1!==i.indexOf(a.placement)&&(i=[]),e!==a.placement&&-1===i.indexOf(a.placement)&&(i.push(a.placement),t.setProps({getReferenceClientRect:function(){return function(t){return function(t,e,n,r){if(n.length<2||null===t)return e;if(2===n.length&&r>=0&&n[0].left>n[1].right)return n[r]||e;switch(t){case"top":case"bottom":var o=n[0],i=n[n.length-1],a="top"===t,s=o.top,u=i.bottom,p=a?o.left:i.left,c=a?o.right:i.right;return{top:s,bottom:u,left:p,right:c,width:c-p,height:u-s};case"left":case"right":var f=Math.min.apply(Math,n.map((function(t){return t.left}))),l=Math.max.apply(Math,n.map((function(t){return t.right}))),d=n.filter((function(e){return"left"===t?e.left===f:e.right===l})),v=d[0].top,m=d[d.length-1].bottom;return{top:v,bottom:m,left:f,right:l,width:l-f,height:m-v};default:return e}}(l(t),n.getBoundingClientRect(),d(n.getClientRects()),r)}(a.placement)}})),e=a.placement)}};function s(){var e;o||(e=function(t,e){var n;return{popperOptions:Object.assign({},t.popperOptions,{modifiers:[].concat(((null==(n=t.popperOptions)?void 0:n.modifiers)||[]).filter((function(t){return t.name!==e.name})),[e])})}}(t.props,a),o=!0,t.setProps(e),o=!1)}return{onCreate:s,onAfterUpdate:s,onTrigger:function(e,n){if(h(n)){var o=d(t.reference.getClientRects()),i=o.find((function(t){return t.left-2<=n.clientX&&t.right+2>=n.clientX&&t.top-2<=n.clientY&&t.bottom+2>=n.clientY})),a=o.indexOf(i);r=a>-1?a:r}},onHidden:function(){r=-1}}}};var Q={name:"sticky",defaultValue:!1,fn:function(t){var e=t.reference,n=t.popper;function r(e){return!0===t.props.sticky||t.props.sticky===e}var o=null,i=null;function a(){var s=r("reference")?(t.popperInstance?t.popperInstance.state.elements.reference:e).getBoundingClientRect():null,u=r("popper")?n.getBoundingClientRect():null;(s&&Z(o,s)||u&&Z(i,u))&&t.popperInstance&&t.popperInstance.update(),o=s,i=u,t.state.isMounted&&requestAnimationFrame(a)}return{onMount:function(){t.props.sticky&&a()}}}};function Z(t,e){return!t||!e||(t.top!==e.top||t.right!==e.right||t.bottom!==e.bottom||t.left!==e.left)}return e&&function(t){var e=document.createElement("style");e.textContent=t,e.setAttribute("data-tippy-stylesheet","");var n=document.head,r=document.querySelector("head>style,head>link");r?n.insertBefore(e,r):n.appendChild(e)}('.tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}'),F.setDefaultProps({plugins:[Y,G,K,Q],render:N}),F.createSingleton=function(t,e){var n;void 0===e&&(e={});var r,o=t,i=[],a=[],s=e.overrides,u=[],f=!1;function l(){a=o.map((function(t){return c(t.props.triggerTarget||t.reference)})).reduce((function(t,e){return t.concat(e)}),[])}function d(){i=o.map((function(t){return t.reference}))}function v(t){o.forEach((function(e){t?e.enable():e.disable()}))}function g(t){return o.map((function(e){var n=e.setProps;return e.setProps=function(o){n(o),e.reference===r&&t.setProps(o)},function(){e.setProps=n}}))}function h(t,e){var n=a.indexOf(e);if(e!==r){r=e;var u=(s||[]).concat("content").reduce((function(t,e){return t[e]=o[n].props[e],t}),{});t.setProps(Object.assign({},u,{getReferenceClientRect:"function"==typeof u.getReferenceClientRect?u.getReferenceClientRect:function(){var t;return null==(t=i[n])?void 0:t.getBoundingClientRect()}}))}}v(!1),d(),l();var b={fn:function(){return{onDestroy:function(){v(!0)},onHidden:function(){r=null},onClickOutside:function(t){t.props.showOnCreate&&!f&&(f=!0,r=null)},onShow:function(t){t.props.showOnCreate&&!f&&(f=!0,h(t,i[0]))},onTrigger:function(t,e){h(t,e.currentTarget)}}}},y=F(m(),Object.assign({},p(e,["overrides"]),{plugins:[b].concat(e.plugins||[]),triggerTarget:a,popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat((null==(n=e.popperOptions)?void 0:n.modifiers)||[],[W])})})),w=y.show;y.show=function(t){if(w(),!r&&null==t)return h(y,i[0]);if(!r||null!=t){if("number"==typeof t)return i[t]&&h(y,i[t]);if(o.indexOf(t)>=0){var e=t.reference;return h(y,e)}return i.indexOf(t)>=0?h(y,t):void 0}},y.showNext=function(){var t=i[0];if(!r)return y.show(0);var e=i.indexOf(r);y.show(i[e+1]||t)},y.showPrevious=function(){var t=i[i.length-1];if(!r)return y.show(t);var e=i.indexOf(r),n=i[e-1]||t;y.show(n)};var x=y.setProps;return y.setProps=function(t){s=t.overrides||s,x(t)},y.setInstances=function(t){v(!0),u.forEach((function(t){return t()})),o=t,v(!1),d(),l(),u=g(y),y.setProps({triggerTarget:a})},u=g(y),y},F.delegate=function(t,e){var n=[],o=[],i=!1,a=e.target,s=p(e,["target"]),u=Object.assign({},s,{trigger:"manual",touch:!1}),f=Object.assign({touch:R.touch},s,{showOnCreate:!0}),l=F(t,u);function d(t){if(t.target&&!i){var n=t.target.closest(a);if(n){var r=n.getAttribute("data-tippy-trigger")||e.trigger||R.trigger;if(!n._tippy&&!("touchstart"===t.type&&"boolean"==typeof f.touch||"touchstart"!==t.type&&r.indexOf(X[t.type])<0)){var s=F(n,f);s&&(o=o.concat(s))}}}}function v(t,e,r,o){void 0===o&&(o=!1),t.addEventListener(e,r,o),n.push({node:t,eventType:e,handler:r,options:o})}return c(l).forEach((function(t){var e=t.destroy,a=t.enable,s=t.disable;t.destroy=function(t){void 0===t&&(t=!0),t&&o.forEach((function(t){t.destroy()})),o=[],n.forEach((function(t){var e=t.node,n=t.eventType,r=t.handler,o=t.options;e.removeEventListener(n,r,o)})),n=[],e()},t.enable=function(){a(),o.forEach((function(t){return t.enable()})),i=!1},t.disable=function(){s(),o.forEach((function(t){return t.disable()})),i=!0},function(t){var e=t.reference;v(e,"touchstart",d,r),v(e,"mouseover",d),v(e,"focusin",d),v(e,"click",d)}(t)})),l},F.hideAll=function(t){var e=void 0===t?{}:t,n=e.exclude,r=e.duration;_.forEach((function(t){var e=!1;if(n&&(e=b(n)?t.reference===n:t.popper===n.popper),!e){var o=t.props.duration;t.setProps({duration:r}),t.hide(),t.state.isDestroyed||t.setProps({duration:o})}}))},F.roundArrow='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>',F}));

(function(){function require(name){var module=require.modules[name];if(!module)throw new Error('failed to require "'+name+'"');if(!("exports"in module)&&typeof module.definition==="function"){module.client=module.component=true;module.definition.call(this,module.exports={},module);delete module.definition}return module.exports}require.loader="component";require.helper={};require.helper.semVerSort=function(a,b){var aArray=a.version.split(".");var bArray=b.version.split(".");for(var i=0;i<aArray.length;++i){var aInt=parseInt(aArray[i],10);var bInt=parseInt(bArray[i],10);if(aInt===bInt){var aLex=aArray[i].substr((""+aInt).length);var bLex=bArray[i].substr((""+bInt).length);if(aLex===""&&bLex!=="")return 1;if(aLex!==""&&bLex==="")return-1;if(aLex!==""&&bLex!=="")return aLex>bLex?1:-1;continue}else if(aInt>bInt){return 1}else{return-1}}return 0};require.latest=function(name,returnPath){function showError(name){throw new Error('failed to find latest module of "'+name+'"')}var versionRegexp=/(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;var remoteRegexp=/(.*)~(.*)/;if(!remoteRegexp.test(name))showError(name);var moduleNames=Object.keys(require.modules);var semVerCandidates=[];var otherCandidates=[];for(var i=0;i<moduleNames.length;i++){var moduleName=moduleNames[i];if(new RegExp(name+"@").test(moduleName)){var version=moduleName.substr(name.length+1);var semVerMatch=versionRegexp.exec(moduleName);if(semVerMatch!=null){semVerCandidates.push({version:version,name:moduleName})}else{otherCandidates.push({version:version,name:moduleName})}}}if(semVerCandidates.concat(otherCandidates).length===0){showError(name)}if(semVerCandidates.length>0){var module=semVerCandidates.sort(require.helper.semVerSort).pop().name;if(returnPath===true){return module}return require(module)}var module=otherCandidates.sort(function(a,b){return a.name>b.name})[0].name;if(returnPath===true){return module}return require(module)};require.modules={};require.register=function(name,definition){require.modules[name]={definition:definition}};require.define=function(name,exports){require.modules[name]={exports:exports}};require.register("abpetkov~transitionize@0.0.3",function(exports,module){module.exports=Transitionize;function Transitionize(element,props){if(!(this instanceof Transitionize))return new Transitionize(element,props);this.element=element;this.props=props||{};this.init()}Transitionize.prototype.isSafari=function(){return/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)};Transitionize.prototype.init=function(){var transitions=[];for(var key in this.props){transitions.push(key+" "+this.props[key])}this.element.style.transition=transitions.join(", ");if(this.isSafari())this.element.style.webkitTransition=transitions.join(", ")}});require.register("ftlabs~fastclick@v0.6.11",function(exports,module){function FastClick(layer){"use strict";var oldOnClick,self=this;this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=10;this.layer=layer;if(!layer||!layer.nodeType){throw new TypeError("Layer must be a document node")}this.onClick=function(){return FastClick.prototype.onClick.apply(self,arguments)};this.onMouse=function(){return FastClick.prototype.onMouse.apply(self,arguments)};this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(self,arguments)};this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(self,arguments)};this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(self,arguments)};this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(self,arguments)};if(FastClick.notNeeded(layer)){return}if(this.deviceIsAndroid){layer.addEventListener("mouseover",this.onMouse,true);layer.addEventListener("mousedown",this.onMouse,true);layer.addEventListener("mouseup",this.onMouse,true)}layer.addEventListener("click",this.onClick,true);layer.addEventListener("touchstart",this.onTouchStart,false);layer.addEventListener("touchmove",this.onTouchMove,false);layer.addEventListener("touchend",this.onTouchEnd,false);layer.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){layer.removeEventListener=function(type,callback,capture){var rmv=Node.prototype.removeEventListener;if(type==="click"){rmv.call(layer,type,callback.hijacked||callback,capture)}else{rmv.call(layer,type,callback,capture)}};layer.addEventListener=function(type,callback,capture){var adv=Node.prototype.addEventListener;if(type==="click"){adv.call(layer,type,callback.hijacked||(callback.hijacked=function(event){if(!event.propagationStopped){callback(event)}}),capture)}else{adv.call(layer,type,callback,capture)}}}if(typeof layer.onclick==="function"){oldOnClick=layer.onclick;layer.addEventListener("click",function(event){oldOnClick(event)},false);layer.onclick=null}}FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent);FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(target){"use strict";switch(target.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(target.disabled){return true}break;case"input":if(this.deviceIsIOS&&target.type==="file"||target.disabled){return true}break;case"label":case"video":return true}return/\bneedsclick\b/.test(target.className)};FastClick.prototype.needsFocus=function(target){"use strict";switch(target.nodeName.toLowerCase()){case"textarea":return true;case"select":return!this.deviceIsAndroid;case"input":switch(target.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!target.disabled&&!target.readOnly;default:return/\bneedsfocus\b/.test(target.className)}};FastClick.prototype.sendClick=function(targetElement,event){"use strict";var clickEvent,touch;if(document.activeElement&&document.activeElement!==targetElement){document.activeElement.blur()}touch=event.changedTouches[0];clickEvent=document.createEvent("MouseEvents");clickEvent.initMouseEvent(this.determineEventType(targetElement),true,true,window,1,touch.screenX,touch.screenY,touch.clientX,touch.clientY,false,false,false,false,0,null);clickEvent.forwardedTouchEvent=true;targetElement.dispatchEvent(clickEvent)};FastClick.prototype.determineEventType=function(targetElement){"use strict";if(this.deviceIsAndroid&&targetElement.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};FastClick.prototype.focus=function(targetElement){"use strict";var length;if(this.deviceIsIOS&&targetElement.setSelectionRange&&targetElement.type.indexOf("date")!==0&&targetElement.type!=="time"){length=targetElement.value.length;targetElement.setSelectionRange(length,length)}else{targetElement.focus()}};FastClick.prototype.updateScrollParent=function(targetElement){"use strict";var scrollParent,parentElement;scrollParent=targetElement.fastClickScrollParent;if(!scrollParent||!scrollParent.contains(targetElement)){parentElement=targetElement;do{if(parentElement.scrollHeight>parentElement.offsetHeight){scrollParent=parentElement;targetElement.fastClickScrollParent=parentElement;break}parentElement=parentElement.parentElement}while(parentElement)}if(scrollParent){scrollParent.fastClickLastScrollTop=scrollParent.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(eventTarget){"use strict";if(eventTarget.nodeType===Node.TEXT_NODE){return eventTarget.parentNode}return eventTarget};FastClick.prototype.onTouchStart=function(event){"use strict";var targetElement,touch,selection;if(event.targetTouches.length>1){return true}targetElement=this.getTargetElementFromEventTarget(event.target);touch=event.targetTouches[0];if(this.deviceIsIOS){selection=window.getSelection();if(selection.rangeCount&&!selection.isCollapsed){return true}if(!this.deviceIsIOS4){if(touch.identifier===this.lastTouchIdentifier){event.preventDefault();return false}this.lastTouchIdentifier=touch.identifier;this.updateScrollParent(targetElement)}}this.trackingClick=true;this.trackingClickStart=event.timeStamp;this.targetElement=targetElement;this.touchStartX=touch.pageX;this.touchStartY=touch.pageY;if(event.timeStamp-this.lastClickTime<200){event.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(event){"use strict";var touch=event.changedTouches[0],boundary=this.touchBoundary;if(Math.abs(touch.pageX-this.touchStartX)>boundary||Math.abs(touch.pageY-this.touchStartY)>boundary){return true}return false};FastClick.prototype.onTouchMove=function(event){"use strict";if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(event.target)||this.touchHasMoved(event)){this.trackingClick=false;this.targetElement=null}return true};FastClick.prototype.findControl=function(labelElement){"use strict";if(labelElement.control!==undefined){return labelElement.control}if(labelElement.htmlFor){return document.getElementById(labelElement.htmlFor)}return labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(event){"use strict";var forElement,trackingClickStart,targetTagName,scrollParent,touch,targetElement=this.targetElement;if(!this.trackingClick){return true}if(event.timeStamp-this.lastClickTime<200){this.cancelNextClick=true;return true}this.cancelNextClick=false;this.lastClickTime=event.timeStamp;trackingClickStart=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(this.deviceIsIOSWithBadTarget){touch=event.changedTouches[0];targetElement=document.elementFromPoint(touch.pageX-window.pageXOffset,touch.pageY-window.pageYOffset)||targetElement;targetElement.fastClickScrollParent=this.targetElement.fastClickScrollParent}targetTagName=targetElement.tagName.toLowerCase();if(targetTagName==="label"){forElement=this.findControl(targetElement);if(forElement){this.focus(targetElement);if(this.deviceIsAndroid){return false}targetElement=forElement}}else if(this.needsFocus(targetElement)){if(event.timeStamp-trackingClickStart>100||this.deviceIsIOS&&window.top!==window&&targetTagName==="input"){this.targetElement=null;return false}this.focus(targetElement);if(!this.deviceIsIOS4||targetTagName!=="select"){this.targetElement=null;event.preventDefault()}return false}if(this.deviceIsIOS&&!this.deviceIsIOS4){scrollParent=targetElement.fastClickScrollParent;if(scrollParent&&scrollParent.fastClickLastScrollTop!==scrollParent.scrollTop){return true}}if(!this.needsClick(targetElement)){event.preventDefault();this.sendClick(targetElement,event)}return false};FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(event){"use strict";if(!this.targetElement){return true}if(event.forwardedTouchEvent){return true}if(!event.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(event.stopImmediatePropagation){event.stopImmediatePropagation()}else{event.propagationStopped=true}event.stopPropagation();event.preventDefault();return false}return true};FastClick.prototype.onClick=function(event){"use strict";var permitted;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(event.target.type==="submit"&&event.detail===0){return true}permitted=this.onMouse(event);if(!permitted){this.targetElement=null}return permitted};FastClick.prototype.destroy=function(){"use strict";var layer=this.layer;if(this.deviceIsAndroid){layer.removeEventListener("mouseover",this.onMouse,true);layer.removeEventListener("mousedown",this.onMouse,true);layer.removeEventListener("mouseup",this.onMouse,true)}layer.removeEventListener("click",this.onClick,true);layer.removeEventListener("touchstart",this.onTouchStart,false);layer.removeEventListener("touchmove",this.onTouchMove,false);layer.removeEventListener("touchend",this.onTouchEnd,false);layer.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(layer){"use strict";var metaViewport;var chromeVersion;if(typeof window.ontouchstart==="undefined"){return true}chromeVersion=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(chromeVersion){if(FastClick.prototype.deviceIsAndroid){metaViewport=document.querySelector("meta[name=viewport]");if(metaViewport){if(metaViewport.content.indexOf("user-scalable=no")!==-1){return true}if(chromeVersion>31&&window.innerWidth<=window.screen.width){return true}}}else{return true}}if(layer.style.msTouchAction==="none"){return true}return false};FastClick.attach=function(layer){"use strict";return new FastClick(layer)};if(typeof define!=="undefined"&&define.amd){define(function(){"use strict";return FastClick})}else if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}});require.register("component~indexof@0.0.3",function(exports,module){module.exports=function(arr,obj){if(arr.indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i}return-1}});require.register("component~classes@1.2.1",function(exports,module){var index=require("component~indexof@0.0.3");var re=/\s+/;var toString=Object.prototype.toString;module.exports=function(el){return new ClassList(el)};function ClassList(el){if(!el)throw new Error("A DOM element reference is required");this.el=el;this.list=el.classList}ClassList.prototype.add=function(name){if(this.list){this.list.add(name);return this}var arr=this.array();var i=index(arr,name);if(!~i)arr.push(name);this.el.className=arr.join(" ");return this};ClassList.prototype.remove=function(name){if("[object RegExp]"==toString.call(name)){return this.removeMatching(name)}if(this.list){this.list.remove(name);return this}var arr=this.array();var i=index(arr,name);if(~i)arr.splice(i,1);this.el.className=arr.join(" ");return this};ClassList.prototype.removeMatching=function(re){var arr=this.array();for(var i=0;i<arr.length;i++){if(re.test(arr[i])){this.remove(arr[i])}}return this};ClassList.prototype.toggle=function(name,force){if(this.list){if("undefined"!==typeof force){if(force!==this.list.toggle(name,force)){this.list.toggle(name)}}else{this.list.toggle(name)}return this}if("undefined"!==typeof force){if(!force){this.remove(name)}else{this.add(name)}}else{if(this.has(name)){this.remove(name)}else{this.add(name)}}return this};ClassList.prototype.array=function(){var str=this.el.className.replace(/^\s+|\s+$/g,"");var arr=str.split(re);if(""===arr[0])arr.shift();return arr};ClassList.prototype.has=ClassList.prototype.contains=function(name){return this.list?this.list.contains(name):!!~index(this.array(),name)}});require.register("component~event@0.1.4",function(exports,module){var bind=window.addEventListener?"addEventListener":"attachEvent",unbind=window.removeEventListener?"removeEventListener":"detachEvent",prefix=bind!=="addEventListener"?"on":"";exports.bind=function(el,type,fn,capture){el[bind](prefix+type,fn,capture||false);return fn};exports.unbind=function(el,type,fn,capture){el[unbind](prefix+type,fn,capture||false);return fn}});require.register("component~query@0.0.3",function(exports,module){function one(selector,el){return el.querySelector(selector)}exports=module.exports=function(selector,el){el=el||document;return one(selector,el)};exports.all=function(selector,el){el=el||document;return el.querySelectorAll(selector)};exports.engine=function(obj){if(!obj.one)throw new Error(".one callback required");if(!obj.all)throw new Error(".all callback required");one=obj.one;exports.all=obj.all;return exports}});require.register("component~matches-selector@0.1.5",function(exports,module){var query=require("component~query@0.0.3");var proto=Element.prototype;var vendor=proto.matches||proto.webkitMatchesSelector||proto.mozMatchesSelector||proto.msMatchesSelector||proto.oMatchesSelector;module.exports=match;function match(el,selector){if(!el||el.nodeType!==1)return false;if(vendor)return vendor.call(el,selector);var nodes=query.all(selector,el.parentNode);for(var i=0;i<nodes.length;++i){if(nodes[i]==el)return true}return false}});require.register("component~closest@0.1.4",function(exports,module){var matches=require("component~matches-selector@0.1.5");module.exports=function(element,selector,checkYoSelf,root){element=checkYoSelf?{parentNode:element}:element;root=root||document;while((element=element.parentNode)&&element!==document){if(matches(element,selector))return element;if(element===root)return}}});require.register("component~delegate@0.2.3",function(exports,module){var closest=require("component~closest@0.1.4"),event=require("component~event@0.1.4");exports.bind=function(el,selector,type,fn,capture){return event.bind(el,type,function(e){var target=e.target||e.srcElement;e.delegateTarget=closest(target,selector,true,el);if(e.delegateTarget)fn.call(el,e)},capture)};exports.unbind=function(el,type,fn,capture){event.unbind(el,type,fn,capture)}});require.register("component~events@1.0.9",function(exports,module){var events=require("component~event@0.1.4");var delegate=require("component~delegate@0.2.3");module.exports=Events;function Events(el,obj){if(!(this instanceof Events))return new Events(el,obj);if(!el)throw new Error("element required");if(!obj)throw new Error("object required");this.el=el;this.obj=obj;this._events={}}Events.prototype.sub=function(event,method,cb){this._events[event]=this._events[event]||{};this._events[event][method]=cb};Events.prototype.bind=function(event,method){var e=parse(event);var el=this.el;var obj=this.obj;var name=e.name;var method=method||"on"+name;var args=[].slice.call(arguments,2);function cb(){var a=[].slice.call(arguments).concat(args);obj[method].apply(obj,a)}if(e.selector){cb=delegate.bind(el,e.selector,name,cb)}else{events.bind(el,name,cb)}this.sub(name,method,cb);return cb};Events.prototype.unbind=function(event,method){if(0==arguments.length)return this.unbindAll();if(1==arguments.length)return this.unbindAllOf(event);var bindings=this._events[event];if(!bindings)return;var cb=bindings[method];if(!cb)return;events.unbind(this.el,event,cb)};Events.prototype.unbindAll=function(){for(var event in this._events){this.unbindAllOf(event)}};Events.prototype.unbindAllOf=function(event){var bindings=this._events[event];if(!bindings)return;for(var method in bindings){this.unbind(event,method)}};function parse(event){var parts=event.split(/ +/);return{name:parts.shift(),selector:parts.join(" ")}}});require.register("switchery",function(exports,module){var transitionize=require("abpetkov~transitionize@0.0.3"),fastclick=require("ftlabs~fastclick@v0.6.11"),classes=require("component~classes@1.2.1"),events=require("component~events@1.0.9");module.exports=Switchery;var defaults={color:"#64bd63",secondaryColor:"#dfdfdf",jackColor:"#fff",jackSecondaryColor:null,className:"switchery",disabled:false,disabledOpacity:.5,speed:"0.4s",size:"default"};function Switchery(element,options){if(!(this instanceof Switchery))return new Switchery(element,options);this.element=element;this.options=options||{};for(var i in defaults){if(this.options[i]==null){this.options[i]=defaults[i]}}if(this.element!=null&&this.element.type=="checkbox")this.init();if(this.isDisabled()===true)this.disable()}Switchery.prototype.hide=function(){this.element.style.display="none"};Switchery.prototype.show=function(){var switcher=this.create();this.insertAfter(this.element,switcher)};Switchery.prototype.create=function(){this.switcher=document.createElement("span");this.jack=document.createElement("small");this.switcher.appendChild(this.jack);this.switcher.className=this.options.className;this.events=events(this.switcher,this);return this.switcher};Switchery.prototype.insertAfter=function(reference,target){reference.parentNode.insertBefore(target,reference.nextSibling)};Switchery.prototype.setPosition=function(clicked){var checked=this.isChecked(),switcher=this.switcher,jack=this.jack;if(clicked&&checked)checked=false;else if(clicked&&!checked)checked=true;if(checked===true){this.element.checked=true;if(window.getComputedStyle)jack.style.left=parseInt(window.getComputedStyle(switcher).width)-parseInt(window.getComputedStyle(jack).width)+"px";else jack.style.left=parseInt(switcher.currentStyle["width"])-parseInt(jack.currentStyle["width"])+"px";if(this.options.color)this.colorize();this.setSpeed()}else{jack.style.left=0;this.element.checked=false;this.switcher.style.boxShadow="inset 0 0 0 0 "+this.options.secondaryColor;this.switcher.style.borderColor=this.options.secondaryColor;this.switcher.style.backgroundColor=this.options.secondaryColor!==defaults.secondaryColor?this.options.secondaryColor:"#fff";this.jack.style.backgroundColor=this.options.jackSecondaryColor!==this.options.jackColor?this.options.jackSecondaryColor:this.options.jackColor;this.setSpeed()}};Switchery.prototype.setSpeed=function(){var switcherProp={},jackProp={"background-color":this.options.speed,left:this.options.speed.replace(/[a-z]/,"")/2+"s"};if(this.isChecked()){switcherProp={border:this.options.speed,"box-shadow":this.options.speed,"background-color":this.options.speed.replace(/[a-z]/,"")*3+"s"}}else{switcherProp={border:this.options.speed,"box-shadow":this.options.speed}}transitionize(this.switcher,switcherProp);transitionize(this.jack,jackProp)};Switchery.prototype.setSize=function(){var small="switchery-small",normal="switchery-default",large="switchery-large";switch(this.options.size){case"small":classes(this.switcher).add(small);break;case"large":classes(this.switcher).add(large);break;default:classes(this.switcher).add(normal);break}};Switchery.prototype.colorize=function(){var switcherHeight=this.switcher.offsetHeight/2;this.switcher.style.backgroundColor=this.options.color;this.switcher.style.borderColor=this.options.color;this.switcher.style.boxShadow="inset 0 0 0 "+switcherHeight+"px "+this.options.color;this.jack.style.backgroundColor=this.options.jackColor};Switchery.prototype.handleOnchange=function(state){if(document.dispatchEvent){var event=document.createEvent("HTMLEvents");event.initEvent("change",true,true);this.element.dispatchEvent(event)}else{this.element.fireEvent("onchange")}};Switchery.prototype.handleChange=function(){var self=this,el=this.element;if(el.addEventListener){el.addEventListener("change",function(){self.setPosition()})}else{el.attachEvent("onchange",function(){self.setPosition()})}};Switchery.prototype.handleClick=function(){var switcher=this.switcher;fastclick(switcher);this.events.bind("click","bindClick")};Switchery.prototype.bindClick=function(){var parent=this.element.parentNode.tagName.toLowerCase(),labelParent=parent==="label"?false:true;this.setPosition(labelParent);this.handleOnchange(this.element.checked)};Switchery.prototype.markAsSwitched=function(){this.element.setAttribute("data-switchery",true)};Switchery.prototype.markedAsSwitched=function(){return this.element.getAttribute("data-switchery")};Switchery.prototype.init=function(){this.hide();this.show();this.setSize();this.setPosition();this.markAsSwitched();this.handleChange();this.handleClick()};Switchery.prototype.isChecked=function(){return this.element.checked};Switchery.prototype.isDisabled=function(){return this.options.disabled||this.element.disabled||this.element.readOnly};Switchery.prototype.destroy=function(){this.events.unbind()};Switchery.prototype.enable=function(){if(!this.options.disabled)return;if(this.options.disabled)this.options.disabled=false;if(this.element.disabled)this.element.disabled=false;if(this.element.readOnly)this.element.readOnly=false;this.switcher.style.opacity=1;this.events.bind("click","bindClick")};Switchery.prototype.disable=function(){if(this.options.disabled)return;if(!this.options.disabled)this.options.disabled=true;if(!this.element.disabled)this.element.disabled=true;if(!this.element.readOnly)this.element.readOnly=true;this.switcher.style.opacity=this.options.disabledOpacity;this.destroy()}});if(typeof exports=="object"){module.exports=require("switchery")}else if(typeof define=="function"&&define.amd){define("Switchery",[],function(){return require("switchery")})}else{(this||window)["Switchery"]=require("switchery")}})();

/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.3.8
 *
 */
(function(e){e.fn.extend({slimScroll:function(f){var a=e.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},f);this.each(function(){function v(d){if(r){d=d||window.event;
var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);e(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&n(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function n(d,g,e){k=!1;var f=b.outerHeight()-c.outerHeight();g&&(g=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),g=Math.min(Math.max(g,0),f),g=0<d?Math.ceil(g):Math.floor(g),c.css({top:g+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());g=
l*(b[0].scrollHeight-b.outerHeight());e&&(g=d,d=g/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),f),c.css({top:d+"px"}));b.scrollTop(g);b.trigger("slimscrolling",~~g);w();p()}function x(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),30);c.css({height:u+"px"});var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function w(){x();clearTimeout(B);l==~~l?(k=a.allowPageScroll,C!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;C=l;u>=b.outerHeight()?k=!0:(c.stop(!0,
!0).fadeIn("fast"),a.railVisible&&m.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(B=setTimeout(function(){a.disableFadeOut&&r||y||z||(c.fadeOut("slow"),m.fadeOut("slow"))},1E3))}var r,y,z,B,A,u,l,C,k=!1,b=e(this);if(b.parent().hasClass(a.wrapperClass)){var q=b.scrollTop(),c=b.siblings("."+a.barClass),m=b.siblings("."+a.railClass);x();if(e.isPlainObject(f)){if("height"in f&&"auto"==f.height){b.parent().css("height","auto");b.css("height","auto");var h=b.parent().parent().height();b.parent().css("height",
h);b.css("height",h)}else"height"in f&&(h=f.height,b.parent().css("height",h),b.css("height",h));if("scrollTo"in f)q=parseInt(a.scrollTo);else if("scrollBy"in f)q+=parseInt(a.scrollBy);else if("destroy"in f){c.remove();m.remove();b.unwrap();return}n(q,!1,!0)}}else if(!(e.isPlainObject(f)&&"destroy"in f)){a.height="auto"==a.height?b.parent().height():a.height;q=e("<div></div>").addClass(a.wrapperClass).css({position:"relative",overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",
width:a.width,height:a.height});var m=e("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=e("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,
WebkitBorderRadius:a.borderRadius,zIndex:99}),h="right"==a.position?{right:a.distance}:{left:a.distance};m.css(h);c.css(h);b.wrap(q);b.parent().append(c);b.parent().append(m);a.railDraggable&&c.bind("mousedown",function(a){var b=e(document);z=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);n(0,c.position().top,!1)});b.bind("mouseup.slimscroll",function(a){z=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",
function(a){a.stopPropagation();a.preventDefault();return!1});m.hover(function(){w()},function(){p()});c.hover(function(){y=!0},function(){y=!1});b.hover(function(){r=!0;w();p()},function(){r=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(A=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&(n((A-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),A=b.originalEvent.touches[0].pageY)});
x();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),n(0,!0)):"top"!==a.start&&(n(e(a.start).position().top,null,!0),a.alwaysVisible||c.hide());window.addEventListener?(this.addEventListener("DOMMouseScroll",v,!1),this.addEventListener("mousewheel",v,!1)):document.attachEvent("onmousewheel",v)}});return this}});e.fn.extend({slimscroll:e.fn.slimScroll})})(jQuery);


var sgem_cpg_main_contents = '<div class="sgem-cpg-cal-main-id">'+
   '<div class="sgem-cpg-cal-wrapper">'+
      '<div class="sgem-cpg-cal-left">'+
         '<div class="sgem-cpg-form sgem-cpg-cal-1">'+
            '<div class="sgem-cpg-flex-container">'+
               '<div class="sgem-cpg-form-group sgem-cpg-form-flex sgem-cpg-currency-holder">'+
                  '<label>Purchase price</label> '+
                  '<input type="text"class="inputmove inputnumber" id="sgem_cpg_purchased_price" value="10,000" min="0" max="1000000" onkeypress="return isNumber(event)"/>'+
                  '<span class="sgem_cpg_err_msg" id="sgem_cpg_err_purchase_the_item"></span>'+
               '</div>'+
               '<div class="sgem-cpg-form-group sgem-cpg-form-flex sgem_cpg_right_field_row sgem-cpg-currency-holder">'+
                  '<label>Sales price</label> '+
                  '<input type="text"class="inputmove inputnumber" id="sgem_cpg_sales_price" value="60,000" min="0" max="1000000" onkeypress="return isNumber(event)"/>'+
                  '<span class="sgem_cpg_err_msg" id="sgem_cpg_err_sold_the_item"></span>'+
               '</div>'+
            '</div>'+
            '<div class="sgem-cpg-flex-container">'+
               '<div class="sgem-cpg-form-group sgem-cpg-form-flex sgem-cpg-currency-holder">'+
                  '<label>2022 taxable income '+
                  '<span class="sgem-cpg-info-tooltip tooltip" data-tippy-content="Please enter your taxable income without the inclusion of any capital gains. Your taxable income is inclusive of all income that is not tax-exempt such as interest, dividends, salary, wages, pensions, minus deductions such as itemized or standard deductions.">?</span>'+
                  '</label> '+
                  '<input type="text"class="inputmove inputnumber" id="sgem_cpg_my_taxable_income" value="10,000" min="0" max="100000" onkeypress="return isNumber(event)"/>'+
                  '<span class="sgem_cpg_err_msg" id="sgem_cpg_err_taxable_income"></span>'+
               '</div>'+
               '<div class="sgem-cpg-form-group sgem-cpg-form-flex sgem_cpg_right_field_row">'+
                  '<label for="yearscount">Holding period</label>'+  
                  '<select id="sgem_cpg_year_status" class="sgem-cpg-drop-selection" name="yearscount" onkeypress="return isNumber(event)">'+
                       '<option value="2">One year or less</option>'+
                    '<option value="1">More than a year</option>'+
                  '</select>'+
               '</div>'+
            '</div>'+
            '<div class="sgem-cpg-flex-container">'+
               '<div class="sgem-cpg-form-group sgem-cpg-form-flex">'+
                  '<label for="marital">Tax filing status'+
                  '</label>  '+
                  '<select id="sgem_cpg_marital_status" class="sgem-cpg-drop-selection" name="marital" onkeypress="return isNumber(event)">'+
                     '<option value="single">Single</option>'+
                     '<option value="mfj">Married, filing jointly</option>'+
                     '<option value="mfs">Married, filing separately</option>'+
                     '<option value="hoh">Head of household</option>'+
                  '</select>'+
               '</div>'+
            '</div>'+
         '</div>'+
      '</div>'+
      '<div class="sgem-cpg-cal-right">'+
         '<div class="sgem-cpg-cal-1-result-wrapper">'+
            '<div class="sgem-cpg-flex-container sgem-cpg-column2">'+
               '<div class="sgem-cpg-form-group sgem-cpg-form-flex">'+
                  '<span class="futuretext sgem-result-value">YOUR ESTIMATED PRE-TAX GAIN IS</span> '+
                  '<div id="futureV" class="sgem-cpg-result-label">$<span id="sgem_cpg_pre_cap_tax">145,000</span>'+
                  '</div>'+
               '</div>'+
               '<div class="sgem-cpg-form-group sgem-cpg-form-flex ">'+
                  '<span class="futuretext2 sgem-result-value">YOUR TOTAL TAXABLE INCOME</span>'+
                  '<div id="futureV2" class="sgem-cpg-result-label">$<span id="sgem_cpg_tax_income">160,000</span>'+
                  '</div>'+
                  '<span class="futuretext2 sgem-cpg-result-value">including your capital gain</span>'+
               '</div>'+
            '</div>'+
            '<div class="sgem-cpg-flex-container sgem-cpg-column2">'+
               '<div class="sgem-cpg-form-group sgem-cpg-form-flex">'+
                  '<span class="futuretext3 sgem-result-value">ESTIMATED 2022 TAX</span> '+
                  '<div id="futureV3" class="sgem-cpg-result-label">$<span id="sgem_cpg_estimated_tax">30,820.00</span>'+
                  '</div>'+
                  '<span class="futuretext3 sgem-cpg-result-value">on <span id="change_text_ondrop">Short-Term</span> Capital Gain</span>'+
               '</div>'+
               '<div class="sgem-cpg-form-group sgem-cpg-form-flex ">'+
                  '<span class="futuretext4 sgem-result-value">YOUR MARGINAL FEDERAL TAX RATE</span>'+
                  '<div id="futureV4" class="sgem-cpg-result-label"><span id="sgem_cpg_you_marginal_tax_rate">24%</span>'+
                  '</div>'+
                  '<span class="futuretext4 sgem-cpg-result-value">on <span id="change_text_ondrop2">Short-Term</span> capital gains</span>'+
               '</div>'+
            '</div>';


if(location.hostname == "calculatorstg.wpengine.com" || location.hostname == "retirementinvestments.com"){
    sgem_cpg_main_contents += '<div class="sgem-cpg-cal-1-result-footer">';
    sgem_cpg_main_contents += '<div class="sgem-cpg-content">Learn how to save money on your capital gains taxes if you have made money with stocks, real estate, or crypto.</div>';
    sgem_cpg_main_contents += '<div class="sgem-cpg-buttonGet">';
    sgem_cpg_main_contents += '<a href="https://retirementinvestments.com/capitalgainscalculator" target="_blank" class="sgem-cpg-getStart" rel="noopener">';
    sgem_cpg_main_contents += 'GET STARTED</a></div></div>';
}
    
sgem_cpg_main_contents += '<div class="sgem-cpg-section-disclaimer"><details class="sgem-cpg-details-disclaimer"><summary><div class="sgem-cpg-collapsible-summary-disclaimer">Disclaimer</div>';
sgem_cpg_main_contents += '</summary><div class="sgem-cpg-collapsible-text-disclaimer">Calculations are estimates based on the tax law as of September 2021. These rates are subject to change. <a href="https://www.irs.gov/faqs/capital-gains-losses-and-sale-of-home" target="_blank">Check the IRS website</a> for the latest information about capital gains</div>';
sgem_cpg_main_contents += '</details></div></div></div></div>';
    
if( (location.hostname != "calculatorstg.wpengine.com") || (location.hostname != "retirementinvestments.com") ){
    sgem_cpg_main_contents += '<div class="sgem-cpg-logo-center">';
    sgem_cpg_main_contents += '<a class="sgem-cpg-url-text" href="https://retirementinvestments.com/taxes/capital-gains-tax-calculator/" target="_blank" rel="noopener">Capital Gains Calculator&nbsp;</a>by&nbsp;Retirement investments</div>';
   
}
    
if(location.hostname == "calculatorstg.wpengine.com" || location.hostname == "retirementinvestments.com"){
    sgem_cpg_main_contents += '<div class="sgem-cpg-copy-option-panel">';
    sgem_cpg_main_contents += '<h3>Do you want to add this calculator into your website?</h3>';
    sgem_cpg_main_contents += '<div class="sgem-cpg-copy-code-wrap">';
    sgem_cpg_main_contents += '<button class="sgem-cpg-copy-code" id="sgem-cpg-copy-code" onclick="sgem_cpg_copyText(event)">Get Calculator</button>';
    sgem_cpg_main_contents += '</div></div></div>';
}

sgem_cpg_main_contents += '</div>';  

document.getElementById('sgem-cpg-cal').innerHTML = sgem_cpg_main_contents;
 
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        //if (charCode == 31 && charCode > 32 && (charCode < 48 || charCode > 57)) { // for decimal
        return false;
    }
    return true;
}

// decimal points
function decimalTwoPoints(x) {
    return Number.parseFloat(x).toFixed(0);
}
// end

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

window.onload = function() {
    sgem_capital_gain_calculationmin();
}

function sgem_capital_gain_calculationmin() {

    //Rate table If holding period more than one year
    //--------------------------------------------
    var table_year = 2021;
    //--------------------------------------------
    var table_rates_bracket = 0; //0%

    var single_0_to = 40400; //upto this value
    var mfs_0_to = 40400;
    var mfj_0_to = 80800;
    var hoh_0_to = 54100; //More than
    //--------------------------------------------
    var table_rates_bracket2 = 0.15; //15%

    var single_15_to = 445850; //upto this value
    var mfs_15_to = 250800;
    var mfj_15_to = 501600;
    var hoh_15_to = 473750; //More than
    //--------------------------------------------
    var table_rates_bracket3 = 0.20; //20%

    var single_20_above = 445850; //upto this value
    var mfs_20_above = 250800;
    var mfj_20_above = 501600;
    var hoh_20_above = 473750; //More than
    //--------------------------------------------
    //--------------------------------------------
    var table_year2 = 2022;
    //--------------------------------------------
    var table_rates_22_bracket = 0; //0%

    var single_0_to_2 = 41675; //upto this value
    var mfs_0_to_2 = 41675;
    var mfj_0_to_2 = 83350;
    var hoh_0_to_2 = 55800; //More than
    //--------------------------------------------
    var table_rates_22_bracket2 = 0.15; //15%

    var single_15_to_2 = 459750; //upto this value
    var mfs_15_to_2 = 258600;
    var mfj_15_to_2 = 517200;
    var hoh_15_to_2 = 488500; //More than
    //--------------------------------------------
    var table_rates_22_bracket3 = 0.20; //20% 

    var single_20_above_2 = 459750; //upto this value
    var mfs_20_above_2 = 258600;
    var mfj_20_above_2 = 517200;
    var hoh_20_above_2 = 488500; //More than
    //--------------------------------------------


    //Rate table If holding period one year or less than one
    //--------------------------------------------
    var table_year3 = 2021;
    //--------------------------------------------
    var table_rates_21_bracket = 0.10; //10% 

    var single_10_to = 9950;
    var mfs_10_to = 19900;
    var mfj_10_to = 9950;
    var hoh_10_above = 14200;
    //--------------------------------------------
    var table_rates_21_bracket2 = 0.12; //12% 

    var single_12_to = 9951;
    var mfs_12_to = 81050;
    var mfj_12_to = 40525;
    var hoh_12_above = 54200;
    //--------------------------------------------
    var table_rates_21_bracket3 = 0.22; //22% 

    var single_22_to = 86375;
    var mfs_22_to = 172751;
    var mfj_22_to = 86375;
    var hoh_22_above = 86350;
    //--------------------------------------------
    var table_rates_21_bracket4 = 0.24; //24% 

    var single_24_to = 164925;
    var mfs_24_to = 329850;
    var mfj_24_to = 164925;
    var hoh_24_above = 164900;
    //--------------------------------------------
    var table_rates_21_bracket5 = 0.32; //32%

    var single_32_to = 209425;
    var mfs_32_to = 418850;
    var mfj_32_to = 209425;
    var hoh_32_above = 209400;
    //--------------------------------------------
    var table_rates_21_bracket6 = 0.35; //35%

    var single_35_to = 523600;
    var mfs_35_to = 628300;
    var mfj_35_to = 314150;
    var hoh_35_above = 523600;
    //--------------------------------------------
    var table_rates_21_bracket7 = 0.37; //37%

    var single_37_above = 523600;
    var mfs_37_above = 628300;
    var mfj_37_above = 314150;
    var hoh_37_above = 523600;
    //--------------------------------------------
    //--------------------------------------------
    var table_year4 = 2022;
    //--------------------------------------------
    var table_rates_22_bracket4 = 0.10; //10%

    var single_10_to1 = 10275;
    var mfs_10_to1 = 20550;
    var mfj_10_to1 = 10275;
    var hoh_10_to1 = 14650;
    //--------------------------------------------
    var table_rates_22_bracket5 = 0.12; //12%

    var single_12_to1 = 41775;
    var mfs_12_to1 = 83550;
    var mfj_12_to1 = 41775;
    var hoh_12_to1 = 55900;
    //--------------------------------------------
    var table_rates_22_bracket6 = 0.22; //22%

    var single_22_to1 = 89075;
    var mfs_22_to1 = 178150;
    var mfj_22_to1 = 89075;
    var hoh_22_to1 = 89050;
    //--------------------------------------------
    var table_rates_22_bracket7 = 0.24; //24%

    var single_24_to1 = 170050;
    var mfs_24_to1 = 340100;
    var mfj_24_to1 = 170050;
    var hoh_24_to1 = 170050;
    //--------------------------------------------
    var table_rates_22_bracket8 = 0.32; //32%

    var single_32_to1 = 215950;
    var mfs_32_to1 = 431900;
    var mfj_32_to1 = 215950;
    var hoh_32_to1 = 215950;
    //--------------------------------------------
    var table_rates_22_bracket9 = 0.35; //35%

    var single_35_to1 = 539900;
    var mfs_35_to1 = 647850;
    var mfj_35_to1 = 323925;
    var hoh_35_to1 = 539900;
    //--------------------------------------------
    var table_rates_22_bracket10 = 0.37; //37%

    var single_37_above1 = 539900;
    var mfs_37_above1 = 647850;
    var mfj_37_above1 = 323925;
    var hoh_37_above1 = 539900;
    //--------------------------------------------
    //--------------------------------------------


    var purchase_price3 = $('#sgem_cpg_purchased_price').val().trim();
    var purchase_price2 = purchase_price3.replace(/\,/g, '');
    var purchase_price = parseInt(purchase_price2, 10);

    var sales_price3 = $('#sgem_cpg_sales_price').val().trim();
    var sales_price2 = sales_price3.replace(/\,/g, '');
    var sales_price = parseInt(sales_price2, 10);

    var taxable_income3 = $('#sgem_cpg_my_taxable_income').val().trim();
    var taxable_income2 = taxable_income3.replace(/\,/g, '');
    var taxable_income = parseInt(taxable_income2, 10);

    var holding_period = $('#sgem_cpg_year_status').val(); //1,2

    var filing_status = $('#sgem_cpg_marital_status').val(); //Single, mfj, mfs, hoh

    var year_of_tax_filing = new Date().getFullYear();

    var your_estimated_pretax_capital_gain = sales_price - purchase_price;

    var your_total_taxable_income_incld_capital_gain = taxable_income + your_estimated_pretax_capital_gain;

    var due_date2 = year_of_tax_filing + 1;
    var due_date = 'April 18, ' + due_date2;

    //Holding period If more than one year

    if ((holding_period == "1" && filing_status == "single" && year_of_tax_filing == 2022 && taxable_income <= single_0_to_2) ||
        (holding_period == "1" && filing_status == "mfs" && year_of_tax_filing == 2022 && taxable_income <= mfs_0_to_2) ||
        (holding_period == "1" && filing_status == "mfj" && year_of_tax_filing == 2022 && taxable_income <= mfj_0_to_2) ||
        (holding_period == "1" && filing_status == "hoh" && year_of_tax_filing == 2022 && taxable_income <= hoh_0_to_2)) {

        var percentage_balance_ammount_20 = your_total_taxable_income_incld_capital_gain - single_15_to_2;
        var percentage_balance_ammount_20_mfs = your_total_taxable_income_incld_capital_gain - mfs_15_to_2;
        var percentage_balance_ammount_20_mfj = your_total_taxable_income_incld_capital_gain - mfj_15_to_2;
        var percentage_balance_ammount_20_hoh = your_total_taxable_income_incld_capital_gain - hoh_15_to_2;


        switch (filing_status) {

            case "single":

                if (taxable_income >= single_0_to_2 && percentage_balance_ammount_20 > 1) {

                    var newtwst = single_15_to_2 - single_0_to_2;
                    var capital_gain_test1 = newtwst * table_rates_22_bracket2;

                    var newtwst2 = percentage_balance_ammount_20 * table_rates_22_bracket3;
                    var capital_gain_test = capital_gain_test1 + newtwst2;

                    var rates = table_rates_22_bracket3;

                    break;

                } else if (taxable_income <= single_0_to_2 && your_total_taxable_income_incld_capital_gain <= single_15_to_2) {

                    var newtest = single_0_to_2 - taxable_income;
                    var capital_gain_test1 = newtest * table_rates_22_bracket;

                    var newtest2 = your_estimated_pretax_capital_gain - newtest;
                    var capital_gain_test2 = newtest2 * table_rates_22_bracket2;

                    var capital_gain_test3 = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket2;

                    if (capital_gain_test3 < 0) {

                        var capital_gain_test = 0;

                    } else {

                        var capital_gain_test = capital_gain_test3;

                    }

                    break;

                } else {

                    var newtwst = single_0_to_2 - taxable_income;
                    var capital_gain_test1 = newtwst * table_rates_22_bracket;

                    var newtest2 = single_15_to_2 - single_0_to_2;
                    var capital_gain_test2 = newtest2 * table_rates_22_bracket2;

                    var percentage_balance_ammount_20_pretax = your_estimated_pretax_capital_gain - newtwst;
                    var newtest3 = percentage_balance_ammount_20_pretax - newtest2;
                    var capital_gain_test3 = newtest3 * table_rates_22_bracket3;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket3;

                    break;

                }

            case "mfs":

                if (taxable_income >= mfs_0_to_2 && percentage_balance_ammount_20_mfs > 1) {

                    var newtwst = mfs_15_to_2 - mfs_0_to_2;
                    var capital_gain_test1 = newtwst * table_rates_22_bracket2;

                    var newtwst2 = percentage_balance_ammount_20_mfs * table_rates_22_bracket3;
                    var capital_gain_test = capital_gain_test1 + newtwst2;

                    var rates = table_rates_22_bracket3;

                    break;

                } else if (taxable_income <= mfs_0_to_2 && your_total_taxable_income_incld_capital_gain <= mfs_15_to_2) {

                    var newtest = mfs_0_to_2 - taxable_income;
                    var capital_gain_test1 = newtest * table_rates_22_bracket;

                    var newtest2 = your_estimated_pretax_capital_gain - newtest;
                    var capital_gain_test2 = newtest2 * table_rates_22_bracket2;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket2;

                    break;

                } else {

                    var newtwst = mfs_0_to_2 - taxable_income;
                    var capital_gain_test1 = newtwst * table_rates_22_bracket;

                    var newtest2 = mfs_15_to_2 - mfs_0_to_2;
                    var capital_gain_test2 = newtest2 * table_rates_22_bracket2;

                    var percentage_balance_ammount_20_pretax = your_estimated_pretax_capital_gain - newtwst;
                    var newtest3 = percentage_balance_ammount_20_pretax - newtest2;
                    var capital_gain_test3 = newtest3 * table_rates_22_bracket3;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket3;

                    break;

                }

            case "mfj":

                if (taxable_income >= mfj_0_to_2 && percentage_balance_ammount_20_mfj > 1) {

                    var newtwst = mfj_15_to_2 - mfj_0_to_2;
                    var capital_gain_test1 = newtwst * table_rates_22_bracket2;

                    var newtwst2 = percentage_balance_ammount_20_mfj * table_rates_22_bracket3;
                    var capital_gain_test = capital_gain_test1 + newtwst2;

                    var rates = table_rates_22_bracket3;

                    break;

                } else if (taxable_income <= mfj_0_to_2 && your_total_taxable_income_incld_capital_gain <= mfj_15_to_2) {

                    var newtest = mfj_0_to_2 - taxable_income;
                    var capital_gain_test1 = newtest * table_rates_22_bracket;

                    var newtest2 = your_estimated_pretax_capital_gain - newtest;
                    var capital_gain_test2 = newtest2 * table_rates_22_bracket2;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket2;

                    break;

                } else {

                    var newtwst = mfj_0_to_2 - taxable_income;
                    var capital_gain_test1 = newtwst * table_rates_22_bracket;

                    var newtest2 = mfj_15_to_2 - mfj_0_to_2;
                    var capital_gain_test2 = newtest2 * table_rates_22_bracket2;

                    var percentage_balance_ammount_20_pretax = your_estimated_pretax_capital_gain - newtwst;
                    var newtest3 = percentage_balance_ammount_20_pretax - newtest2;
                    var capital_gain_test3 = newtest3 * table_rates_22_bracket3;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket3;

                    break;

                }

            case "hoh":

                if (taxable_income >= hoh_0_to_2 && percentage_balance_ammount_20_hoh > 1) {

                    var newtwst = hoh_15_to_2 - hoh_0_to_2;
                    var capital_gain_test1 = newtwst * table_rates_22_bracket2;

                    var newtwst2 = percentage_balance_ammount_20_hoh * table_rates_22_bracket3;
                    var capital_gain_test = capital_gain_test1 + newtwst2;

                    var rates = table_rates_22_bracket3;

                    break;

                } else if (taxable_income <= hoh_0_to_2 && your_total_taxable_income_incld_capital_gain <= hoh_15_to_2) {

                    var newtest = hoh_0_to_2 - taxable_income;
                    var capital_gain_test1 = newtest * table_rates_22_bracket;

                    var newtest2 = your_estimated_pretax_capital_gain - newtest;
                    var capital_gain_test2 = newtest2 * table_rates_22_bracket2;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket2;

                    break;

                } else {

                    var newtwst = hoh_0_to_2 - taxable_income;
                    var capital_gain_test1 = newtwst * table_rates_22_bracket;

                    var newtest2 = hoh_15_to_2 - hoh_0_to_2;
                    var capital_gain_test2 = newtest2 * table_rates_22_bracket2;

                    var percentage_balance_ammount_20_pretax = your_estimated_pretax_capital_gain - newtwst;
                    var newtest3 = percentage_balance_ammount_20_pretax - newtest2;
                    var capital_gain_test3 = newtest3 * table_rates_22_bracket3;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket3;

                    break;

                }

        }


    } else if ((holding_period == "1" && filing_status == "single" && year_of_tax_filing == 2022 && taxable_income <= single_15_to_2) ||
        (holding_period == "1" && filing_status == "mfs" && year_of_tax_filing == 2022 && taxable_income <= mfs_15_to_2) ||
        (holding_period == "1" && filing_status == "mfj" && year_of_tax_filing == 2022 && taxable_income <= mfj_15_to_2) ||
        (holding_period == "1" && filing_status == "hoh" && year_of_tax_filing == 2022 && taxable_income <= hoh_15_to_2)) {

        switch (filing_status) {
            case "single":

                if (taxable_income >= single_0_to_2 && your_total_taxable_income_incld_capital_gain < single_15_to_2) {

                    var capital_gain_test = your_estimated_pretax_capital_gain * table_rates_22_bracket2;

                    var rates = table_rates_22_bracket2;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > single_15_to_2 && taxable_income >= single_0_to_2) {

                    var newtwst = single_15_to_2 - taxable_income;
                    var capital_gain_test1 = newtwst * table_rates_22_bracket2;

                    var newtest2 = your_estimated_pretax_capital_gain - newtwst;
                    var capital_gain_test2 = newtest2 * table_rates_22_bracket3;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket3;

                    break;
                }

            case "mfs":

                if (taxable_income >= mfs_0_to_2 && your_total_taxable_income_incld_capital_gain < mfs_15_to_2) {

                    var capital_gain_test = your_estimated_pretax_capital_gain * table_rates_22_bracket2;

                    var rates = table_rates_22_bracket2;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfs_15_to_2 && taxable_income >= mfs_0_to_2) {

                    var newtwst = mfs_15_to_2 - taxable_income;
                    var capital_gain_test1 = newtwst * table_rates_22_bracket2;

                    var newtest2 = your_estimated_pretax_capital_gain - newtwst;
                    var capital_gain_test2 = newtest2 * table_rates_22_bracket3;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket3;

                    break;

                }

            case "mfj":

                if (taxable_income >= mfj_0_to_2 && your_total_taxable_income_incld_capital_gain < mfj_15_to_2) {

                    var capital_gain_test = your_estimated_pretax_capital_gain * table_rates_22_bracket2;

                    var rates = table_rates_22_bracket2;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfj_15_to_2 && taxable_income >= mfj_0_to_2) {

                    var newtwst = mfj_15_to_2 - taxable_income;
                    var capital_gain_test1 = newtwst * table_rates_22_bracket2;

                    var newtest2 = your_estimated_pretax_capital_gain - newtwst;
                    var capital_gain_test2 = newtest2 * table_rates_22_bracket3;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket3;

                    break;

                }

            case "hoh":

                if (taxable_income >= hoh_0_to_2 && your_total_taxable_income_incld_capital_gain < hoh_15_to_2) {

                    var capital_gain_test = your_estimated_pretax_capital_gain * table_rates_22_bracket2;

                    var rates = table_rates_22_bracket2;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > hoh_15_to_2 && taxable_income >= hoh_0_to_2) {

                    var newtwst = hoh_15_to_2 - taxable_income;
                    var capital_gain_test1 = newtwst * table_rates_22_bracket2;

                    var newtest2 = your_estimated_pretax_capital_gain - newtwst;
                    var capital_gain_test2 = newtest2 * table_rates_22_bracket3;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket3;

                    break;

                }
        }


    } else if ((holding_period == "1" && filing_status == "single" && year_of_tax_filing == 2022 && taxable_income > single_20_above_2) ||
        (holding_period == "1" && filing_status == "mfs" && year_of_tax_filing == 2022 && taxable_income > mfs_20_above_2) ||
        (holding_period == "1" && filing_status == "mfj" && year_of_tax_filing == 2022 && taxable_income > mfj_20_above_2) ||
        (holding_period == "1" && filing_status == "hoh" && year_of_tax_filing == 2022 && taxable_income > hoh_20_above_2)) {

        var rates = table_rates_22_bracket3;

        var capital_gain_test = your_estimated_pretax_capital_gain * table_rates_22_bracket3;

    }



    //Holding period If one year or less

    if ((holding_period == "2" && filing_status == "single" && year_of_tax_filing == 2022 && taxable_income <= single_10_to1) ||
        (holding_period == "2" && filing_status == "mfs" && year_of_tax_filing == 2022 && taxable_income <= mfs_10_to1) ||
        (holding_period == "2" && filing_status == "mfj" && year_of_tax_filing == 2022 && taxable_income <= mfj_10_to1) ||
        (holding_period == "2" && filing_status == "hoh" && year_of_tax_filing == 2022 && taxable_income <= hoh_10_to1)) {


        switch (filing_status) {
            case "single":

                if (your_total_taxable_income_incld_capital_gain <= single_10_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket4;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket4;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_12_to1) {

                    var shortone = single_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - single_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket5;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_22_to1) {

                    var shortone = single_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = single_12_to1 - single_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = your_total_taxable_income_incld_capital_gain - single_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket6;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_24_to1) {

                    var shortone = single_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = single_12_to1 - single_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = single_22_to1 - single_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = your_total_taxable_income_incld_capital_gain - single_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_32_to1) {

                    var shortone = single_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = single_12_to1 - single_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = single_22_to1 - single_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = single_24_to1 - single_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var shortfive = your_total_taxable_income_incld_capital_gain - single_24_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_35_to1) {

                    var shortone = single_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = single_12_to1 - single_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = single_22_to1 - single_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = single_24_to1 - single_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var shortfive = single_32_to1 - single_24_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket8;

                    var shortsix = your_total_taxable_income_incld_capital_gain - single_32_to1;
                    var capital_gain_test6 = shortsix * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5 + capital_gain_test6;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > single_35_to1) {

                    var shortone = single_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = single_12_to1 - single_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = single_22_to1 - single_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = single_24_to1 - single_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var shortfive = single_32_to1 - single_24_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket8;

                    var shortsix = single_35_to1 - single_32_to1;
                    var capital_gain_test6 = shortsix * table_rates_22_bracket9;

                    var shortseven = your_total_taxable_income_incld_capital_gain - single_35_to1;
                    var capital_gain_test7 = shortseven * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5 + capital_gain_test6 + capital_gain_test7;

                    var rates = table_rates_22_bracket10;

                    break;
                }


            case "mfs":

                if (your_total_taxable_income_incld_capital_gain <= mfs_10_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket4;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket4;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_12_to1) {

                    var shortone = mfs_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - mfs_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket5;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_22_to1) {

                    var shortone = mfs_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = mfs_12_to1 - mfs_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = your_total_taxable_income_incld_capital_gain - mfs_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket6;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_24_to1) {

                    var shortone = mfs_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = mfs_12_to1 - mfs_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = mfs_22_to1 - mfs_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = your_total_taxable_income_incld_capital_gain - mfs_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_32_to1) {

                    var shortone = mfs_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = mfs_12_to1 - mfs_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = mfs_22_to1 - mfs_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = mfs_24_to1 - mfs_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var shortfive = your_total_taxable_income_incld_capital_gain - mfs_24_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_35_to1) {

                    var shortone = mfs_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = mfs_12_to1 - mfs_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = mfs_22_to1 - mfs_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = mfs_24_to1 - mfs_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var shortfive = mfs_32_to1 - mfs_24_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket8;

                    var shortsix = your_total_taxable_income_incld_capital_gain - mfs_32_to1;
                    var capital_gain_test6 = shortsix * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5 + capital_gain_test6;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfs_35_to1) {

                    var shortone = mfs_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = mfs_12_to1 - mfs_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = mfs_22_to1 - mfs_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = mfs_24_to1 - mfs_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var shortfive = mfs_32_to1 - mfs_24_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket8;

                    var shortsix = mfs_35_to1 - mfs_32_to1;
                    var capital_gain_test6 = shortsix * table_rates_22_bracket9;

                    var shortseven = your_total_taxable_income_incld_capital_gain - mfs_35_to1;
                    var capital_gain_test7 = shortseven * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5 + capital_gain_test6 + capital_gain_test7;

                    var rates = table_rates_22_bracket10;

                    break;
                }

            case "mfj":

                if (your_total_taxable_income_incld_capital_gain <= mfj_10_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket4;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket4;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_12_to1) {

                    var shortone = mfj_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - mfj_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket5;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_22_to1) {

                    var shortone = mfj_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = mfj_12_to1 - mfj_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = your_total_taxable_income_incld_capital_gain - mfj_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket6;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_24_to1) {

                    var shortone = mfj_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = mfj_12_to1 - mfj_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = mfj_22_to1 - mfj_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = your_total_taxable_income_incld_capital_gain - mfj_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_32_to1) {

                    var shortone = mfj_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = mfj_12_to1 - mfj_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = mfj_22_to1 - mfj_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = mfj_24_to1 - mfj_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var shortfive = your_total_taxable_income_incld_capital_gain - mfj_24_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_35_to1) {

                    var shortone = mfj_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = mfj_12_to1 - mfj_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = mfj_22_to1 - mfj_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = mfj_24_to1 - mfj_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var shortfive = mfj_32_to1 - mfj_24_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket8;

                    var shortsix = your_total_taxable_income_incld_capital_gain - mfj_32_to1;
                    var capital_gain_test6 = shortsix * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5 + capital_gain_test6;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfj_35_to1) {

                    var shortone = mfj_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = mfj_12_to1 - mfj_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = mfj_22_to1 - mfj_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = mfj_24_to1 - mfj_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var shortfive = mfj_32_to1 - mfj_24_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket8;

                    var shortsix = mfj_35_to1 - mfj_32_to1;
                    var capital_gain_test6 = shortsix * table_rates_22_bracket9;

                    var shortseven = your_total_taxable_income_incld_capital_gain - mfj_35_to1;
                    var capital_gain_test7 = shortseven * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5 + capital_gain_test6 + capital_gain_test7;

                    var rates = table_rates_22_bracket10;

                    break;
                }

            case "hoh":

                if (your_total_taxable_income_incld_capital_gain <= hoh_10_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket4;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket4;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_12_to1) {

                    var shortone = hoh_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - hoh_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket5;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_22_to1) {

                    var shortone = hoh_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = hoh_12_to1 - hoh_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = your_total_taxable_income_incld_capital_gain - hoh_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket6;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_24_to1) {

                    var shortone = hoh_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = hoh_12_to1 - hoh_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = hoh_22_to1 - hoh_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = your_total_taxable_income_incld_capital_gain - hoh_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_32_to1) {

                    var shortone = hoh_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = hoh_12_to1 - hoh_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = hoh_22_to1 - hoh_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = hoh_24_to1 - hoh_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var shortfive = your_total_taxable_income_incld_capital_gain - hoh_24_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_35_to1) {

                    var shortone = hoh_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = hoh_12_to1 - hoh_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = hoh_22_to1 - hoh_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = hoh_24_to1 - hoh_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var shortfive = hoh_32_to1 - hoh_24_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket8;

                    var shortsix = your_total_taxable_income_incld_capital_gain - hoh_32_to1;
                    var capital_gain_test6 = shortsix * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5 + capital_gain_test6;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > hoh_37_above1) {

                    var shortone = hoh_10_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket4;

                    var shorttwo = hoh_12_to1 - hoh_10_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket5;

                    var shortthree = hoh_22_to1 - hoh_12_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket6;

                    var shortfour = hoh_24_to1 - hoh_22_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket7;

                    var shortfive = hoh_32_to1 - hoh_24_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket8;

                    var shortsix = hoh_35_to1 - hoh_32_to1;
                    var capital_gain_test6 = shortsix * table_rates_22_bracket9;

                    var shortseven = your_total_taxable_income_incld_capital_gain - hoh_35_to1;
                    var capital_gain_test7 = shortseven * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5 + capital_gain_test6 + capital_gain_test7;

                    var rates = table_rates_22_bracket10;

                    break;
                }

        }


    } else if ((holding_period == "2" && filing_status == "single" && year_of_tax_filing == 2022 && taxable_income <= single_12_to1) ||
        (holding_period == "2" && filing_status == "mfs" && year_of_tax_filing == 2022 && taxable_income <= mfs_12_to1) ||
        (holding_period == "2" && filing_status == "mfj" && year_of_tax_filing == 2022 && taxable_income <= mfj_12_to1) ||
        (holding_period == "2" && filing_status == "hoh" && year_of_tax_filing == 2022 && taxable_income <= hoh_12_to1)) {


        switch (filing_status) {
            case "single":

                if (your_total_taxable_income_incld_capital_gain <= single_12_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket5;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket5;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_22_to1) {

                    var shortone = single_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - single_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket6;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_24_to1) {

                    var shortone = single_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = single_22_to1 - single_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = your_total_taxable_income_incld_capital_gain - single_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_32_to1) {

                    var shortone = single_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = single_22_to1 - single_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = single_24_to1 - single_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var shortfour = your_total_taxable_income_incld_capital_gain - single_24_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_35_to1) {

                    var shortone = single_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = single_22_to1 - single_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = single_24_to1 - single_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var shortfour = single_32_to1 - single_24_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket8;

                    var shortfive = your_total_taxable_income_incld_capital_gain - single_32_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > single_37_above1) {

                    var shortone = single_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = single_22_to1 - single_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = single_24_to1 - single_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var shortfour = single_32_to1 - single_24_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket8;

                    var shortfive = single_35_to1 - single_32_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket9;

                    var shortsix = your_total_taxable_income_incld_capital_gain - single_35_to1;
                    var capital_gain_test6 = shortsix * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5 + capital_gain_test6;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "mfs":

                if (your_total_taxable_income_incld_capital_gain <= mfs_12_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket5;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket5;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_22_to1) {

                    var shortone = mfs_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - mfs_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket6;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_24_to1) {

                    var shortone = mfs_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = mfs_22_to1 - mfs_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = your_total_taxable_income_incld_capital_gain - mfs_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_32_to1) {

                    var shortone = mfs_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = mfs_22_to1 - mfs_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = mfs_24_to1 - mfs_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var shortfour = your_total_taxable_income_incld_capital_gain - mfs_24_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_35_to1) {

                    var shortone = mfs_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = mfs_22_to1 - mfs_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = mfs_24_to1 - mfs_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var shortfour = mfs_32_to1 - mfs_24_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket8;

                    var shortfive = your_total_taxable_income_incld_capital_gain - mfs_32_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfs_37_above1) {

                    var shortone = mfs_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = mfs_22_to1 - mfs_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = mfs_24_to1 - mfs_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var shortfour = mfs_32_to1 - mfs_24_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket8;

                    var shortfive = mfs_35_to1 - mfs_32_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket9;

                    var shortsix = your_total_taxable_income_incld_capital_gain - mfs_35_to1;
                    var capital_gain_test6 = shortsix * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5 + capital_gain_test6;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "mfj":

                if (your_total_taxable_income_incld_capital_gain <= mfj_12_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket5;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket5;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_22_to1) {

                    var shortone = mfj_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - mfj_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket6;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_24_to1) {

                    var shortone = mfj_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = mfj_22_to1 - mfj_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = your_total_taxable_income_incld_capital_gain - mfj_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_32_to1) {

                    var shortone = mfj_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = mfj_22_to1 - mfj_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = mfj_24_to1 - mfj_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var shortfour = your_total_taxable_income_incld_capital_gain - mfj_24_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_35_to1) {

                    var shortone = mfj_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = mfj_22_to1 - mfj_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = mfj_24_to1 - mfj_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var shortfour = mfj_32_to1 - mfj_24_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket8;

                    var shortfive = your_total_taxable_income_incld_capital_gain - mfj_32_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfj_37_above1) {

                    var shortone = mfj_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = mfj_22_to1 - mfj_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = mfj_24_to1 - mfj_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var shortfour = mfj_32_to1 - mfj_24_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket8;

                    var shortfive = mfj_35_to1 - mfj_32_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket9;

                    var shortsix = your_total_taxable_income_incld_capital_gain - mfj_35_to1;
                    var capital_gain_test6 = shortsix * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5 + capital_gain_test6;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "hoh":

                if (your_total_taxable_income_incld_capital_gain <= hoh_12_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket5;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket5;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_22_to1) {

                    var shortone = hoh_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - hoh_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket6;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_24_to1) {

                    var shortone = hoh_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = hoh_22_to1 - hoh_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = your_total_taxable_income_incld_capital_gain - hoh_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_32_to1) {

                    var shortone = hoh_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = hoh_22_to1 - hoh_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = hoh_24_to1 - hoh_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var shortfour = your_total_taxable_income_incld_capital_gain - hoh_24_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_35_to1) {

                    var shortone = hoh_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = hoh_22_to1 - hoh_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = hoh_24_to1 - hoh_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var shortfour = hoh_32_to1 - hoh_24_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket8;

                    var shortfive = your_total_taxable_income_incld_capital_gain - hoh_32_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > hoh_37_above1) {

                    var shortone = hoh_12_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket5;

                    var shorttwo = hoh_22_to1 - hoh_12_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket6;

                    var shortthree = hoh_24_to1 - hoh_22_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket7;

                    var shortfour = hoh_32_to1 - hoh_24_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket8;

                    var shortfive = hoh_35_to1 - hoh_32_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket9;

                    var shortsix = your_total_taxable_income_incld_capital_gain - hoh_35_to1;
                    var capital_gain_test6 = shortsix * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5 + capital_gain_test6;

                    var rates = table_rates_22_bracket10;

                    break;

                }

        }


    } else if ((holding_period == "2" && filing_status == "single" && year_of_tax_filing == 2022 && taxable_income <= single_22_to1) ||
        (holding_period == "2" && filing_status == "mfs" && year_of_tax_filing == 2022 && taxable_income <= mfs_22_to1) ||
        (holding_period == "2" && filing_status == "mfj" && year_of_tax_filing == 2022 && taxable_income <= mfj_22_to1) ||
        (holding_period == "2" && filing_status == "hoh" && year_of_tax_filing == 2022 && taxable_income <= hoh_22_to1)) {


        switch (filing_status) {
            case "single":

                if (your_total_taxable_income_incld_capital_gain <= single_22_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket6;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket6;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_24_to1) {

                    var shortone = single_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - single_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_32_to1) {

                    var shortone = single_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = single_24_to1 - single_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var shortthree = your_total_taxable_income_incld_capital_gain - single_24_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_35_to1) {

                    var shortone = single_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = single_24_to1 - single_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var shortthree = single_32_to1 - single_24_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket8;

                    var shortfour = your_total_taxable_income_incld_capital_gain - single_32_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > single_37_above1) {

                    var shortone = single_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = single_24_to1 - single_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var shortthree = single_32_to1 - single_24_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket8;

                    var shortfour = single_35_to1 - single_32_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket9;

                    var shortfive = your_total_taxable_income_incld_capital_gain - single_35_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "mfs":

                if (your_total_taxable_income_incld_capital_gain <= mfs_22_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket6;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket6;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_24_to1) {

                    var shortone = mfs_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - mfs_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_32_to1) {

                    var shortone = mfs_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = mfs_24_to1 - mfs_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var shortthree = your_total_taxable_income_incld_capital_gain - mfs_24_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_35_to1) {

                    var shortone = mfs_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = mfs_24_to1 - mfs_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var shortthree = mfs_32_to1 - mfs_24_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket8;

                    var shortfour = your_total_taxable_income_incld_capital_gain - mfs_32_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfs_37_above1) {

                    var shortone = mfs_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = mfs_24_to1 - mfs_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var shortthree = mfs_32_to1 - mfs_24_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket8;

                    var shortfour = mfs_35_to1 - mfs_32_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket9;

                    var shortfive = your_total_taxable_income_incld_capital_gain - mfs_35_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "mfj":

                if (your_total_taxable_income_incld_capital_gain <= mfj_22_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket6;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket6;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_24_to1) {

                    var shortone = mfj_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - mfj_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_32_to1) {

                    var shortone = mfj_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = mfj_24_to1 - mfj_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var shortthree = your_total_taxable_income_incld_capital_gain - mfj_24_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_35_to1) {

                    var shortone = mfj_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = mfj_24_to1 - mfj_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var shortthree = mfj_32_to1 - mfj_24_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket8;

                    var shortfour = your_total_taxable_income_incld_capital_gain - mfj_32_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfj_37_above1) {

                    var shortone = mfj_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = mfj_24_to1 - mfj_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var shortthree = mfj_32_to1 - mfj_24_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket8;

                    var shortfour = mfj_35_to1 - mfj_32_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket9;

                    var shortfive = your_total_taxable_income_incld_capital_gain - mfj_35_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "hoh":

                if (your_total_taxable_income_incld_capital_gain <= hoh_22_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket6;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket6;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_24_to1) {

                    var shortone = hoh_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - hoh_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_32_to1) {

                    var shortone = hoh_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = hoh_24_to1 - hoh_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var shortthree = your_total_taxable_income_incld_capital_gain - hoh_24_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_35_to1) {

                    var shortone = hoh_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = hoh_24_to1 - hoh_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var shortthree = hoh_32_to1 - hoh_24_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket8;

                    var shortfour = your_total_taxable_income_incld_capital_gain - hoh_32_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > hoh_37_above1) {

                    var shortone = hoh_22_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket6;

                    var shorttwo = hoh_24_to1 - hoh_22_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket7;

                    var shortthree = hoh_32_to1 - hoh_24_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket8;

                    var shortfour = hoh_35_to1 - hoh_32_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket9;

                    var shortfive = your_total_taxable_income_incld_capital_gain - hoh_35_to1;
                    var capital_gain_test5 = shortfive * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4 + capital_gain_test5;

                    var rates = table_rates_22_bracket10;

                    break;

                }

        }

    } else if ((holding_period == "2" && filing_status == "single" && year_of_tax_filing == 2022 && taxable_income <= single_24_to1) ||
        (holding_period == "2" && filing_status == "mfs" && year_of_tax_filing == 2022 && taxable_income <= mfs_24_to1) ||
        (holding_period == "2" && filing_status == "mfj" && year_of_tax_filing == 2022 && taxable_income <= mfj_24_to1) ||
        (holding_period == "2" && filing_status == "hoh" && year_of_tax_filing == 2022 && taxable_income <= hoh_24_to1)) {

        var rates = table_rates_22_bracket7;

        switch (filing_status) {
            case "single":

                if (your_total_taxable_income_incld_capital_gain <= single_24_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket7;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_32_to1) {

                    var shortone = single_24_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket7;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - single_24_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_35_to1) {

                    var shortone = single_24_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket7;

                    var shorttwo = single_32_to1 - single_24_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket8;

                    var shortthree = your_total_taxable_income_incld_capital_gain - single_32_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > single_37_above1) {

                    var shortone = single_24_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket7;

                    var shorttwo = single_32_to1 - single_24_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket8;

                    var shortthree = single_35_to1 - single_32_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket9;

                    var shortfour = your_total_taxable_income_incld_capital_gain - single_35_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "mfs":

                if (your_total_taxable_income_incld_capital_gain <= mfs_24_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket7;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_32_to1) {

                    var shortone = mfs_24_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket7;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - mfs_24_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_35_to1) {

                    var shortone = mfs_24_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket7;

                    var shorttwo = mfs_32_to1 - mfs_24_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket8;

                    var shortthree = your_total_taxable_income_incld_capital_gain - mfs_32_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfs_37_above1) {

                    var shortone = mfs_24_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket7;

                    var shorttwo = mfs_32_to1 - mfs_24_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket8;

                    var shortthree = mfs_35_to1 - mfs_32_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket9;

                    var shortfour = your_total_taxable_income_incld_capital_gain - mfs_35_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "mfj":

                if (your_total_taxable_income_incld_capital_gain <= mfj_24_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket7;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_32_to1) {

                    var shortone = mfj_24_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket7;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - mfj_24_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_35_to1) {

                    var shortone = mfj_24_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket7;

                    var shorttwo = mfj_32_to1 - mfj_24_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket8;

                    var shortthree = your_total_taxable_income_incld_capital_gain - mfj_32_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfj_37_above1) {

                    var shortone = mfj_24_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket7;

                    var shorttwo = mfj_32_to1 - mfj_24_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket8;

                    var shortthree = mfj_35_to1 - mfj_32_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket9;

                    var shortfour = your_total_taxable_income_incld_capital_gain - mfj_35_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "hoh":

                if (your_total_taxable_income_incld_capital_gain <= hoh_24_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket7;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket7;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_32_to1) {

                    var shortone = hoh_24_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket7;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - hoh_24_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket8;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_35_to1) {

                    var shortone = hoh_24_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket7;

                    var shorttwo = hoh_32_to1 - hoh_24_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket8;

                    var shortthree = your_total_taxable_income_incld_capital_gain - hoh_32_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > hoh_37_above1) {

                    var shortone = hoh_24_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket7;

                    var shorttwo = hoh_32_to1 - hoh_24_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket8;

                    var shortthree = hoh_35_to1 - hoh_32_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket9;

                    var shortfour = your_total_taxable_income_incld_capital_gain - hoh_35_to1;
                    var capital_gain_test4 = shortfour * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3 + capital_gain_test4;

                    var rates = table_rates_22_bracket10;

                    break;

                }

        }


    } else if ((holding_period == "2" && filing_status == "single" && year_of_tax_filing == 2022 && taxable_income <= single_32_to1) ||
        (holding_period == "2" && filing_status == "mfs" && year_of_tax_filing == 2022 && taxable_income <= mfs_32_to1) ||
        (holding_period == "2" && filing_status == "mfj" && year_of_tax_filing == 2022 && taxable_income <= mfj_32_to1) ||
        (holding_period == "2" && filing_status == "hoh" && year_of_tax_filing == 2022 && taxable_income <= hoh_32_to1)) {


        switch (filing_status) {
            case "single":

                if (your_total_taxable_income_incld_capital_gain <= single_32_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket8;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= single_35_to1) {

                    var shortone = single_32_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket8;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - single_32_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > single_37_above1) {

                    var shortone = single_32_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket8;

                    var shorttwo = single_35_to1 - single_32_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket9;

                    var shortthree = your_total_taxable_income_incld_capital_gain - single_35_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "mfs":

                if (your_total_taxable_income_incld_capital_gain <= mfs_32_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket8;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfs_35_to1) {

                    var shortone = mfs_32_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket8;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - mfs_32_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfs_37_above1) {

                    var shortone = mfs_32_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket8;

                    var shorttwo = mfs_35_to1 - mfs_32_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket9;

                    var shortthree = your_total_taxable_income_incld_capital_gain - mfs_35_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "mfj":

                if (your_total_taxable_income_incld_capital_gain <= mfj_32_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket8;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= mfj_35_to1) {

                    var shortone = mfj_32_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket8;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - mfj_32_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfj_37_above1) {

                    var shortone = mfj_32_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket8;

                    var shorttwo = mfj_35_to1 - mfj_32_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket9;

                    var shortthree = your_total_taxable_income_incld_capital_gain - mfj_35_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "hoh":

                if (your_total_taxable_income_incld_capital_gain <= hoh_32_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket8;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket8;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain <= hoh_35_to1) {

                    var shortone = hoh_32_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket8;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - hoh_32_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket9;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > hoh_37_above1) {

                    var shortone = hoh_32_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket8;

                    var shorttwo = hoh_35_to1 - hoh_32_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket9;

                    var shortthree = your_total_taxable_income_incld_capital_gain - hoh_35_to1;
                    var capital_gain_test3 = shortthree * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2 + capital_gain_test3;

                    var rates = table_rates_22_bracket10;

                    break;

                }

        }


    } else if ((holding_period == "2" && filing_status == "single" && year_of_tax_filing == 2022 && taxable_income <= single_35_to1) ||
        (holding_period == "2" && filing_status == "mfs" && year_of_tax_filing == 2022 && taxable_income <= mfs_35_to1) ||
        (holding_period == "2" && filing_status == "mfj" && year_of_tax_filing == 2022 && taxable_income <= mfj_35_to1) ||
        (holding_period == "2" && filing_status == "hoh" && year_of_tax_filing == 2022 && taxable_income <= hoh_35_to1)) {


        switch (filing_status) {
            case "single":

                if (your_total_taxable_income_incld_capital_gain <= single_35_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket9;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > single_37_above1) {

                    var shortone = single_35_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket9;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - single_35_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "mfs":

                if (your_total_taxable_income_incld_capital_gain <= mfs_35_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket9;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket9;


                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfs_37_above1) {

                    var shortone = mfs_35_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket9;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - mfs_35_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "mfj":

                if (your_total_taxable_income_incld_capital_gain <= mfj_35_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket9;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > mfj_37_above1) {

                    var shortone = mfj_35_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket9;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - mfj_35_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket10;

                    break;

                }

            case "hoh":

                if (your_total_taxable_income_incld_capital_gain <= hoh_35_to1) {

                    var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket9;
                    var capital_gain_test = shortone;

                    var rates = table_rates_22_bracket9;

                    break;

                } else if (your_total_taxable_income_incld_capital_gain > hoh_37_above1) {

                    var shortone = hoh_35_to1 - taxable_income;
                    var capital_gain_test1 = shortone * table_rates_22_bracket9;

                    var shorttwo = your_total_taxable_income_incld_capital_gain - hoh_35_to1;
                    var capital_gain_test2 = shorttwo * table_rates_22_bracket10;

                    var capital_gain_test = capital_gain_test1 + capital_gain_test2;

                    var rates = table_rates_22_bracket10;

                    break;

                }

        }


    } else if ((holding_period == "2" && filing_status == "single" && year_of_tax_filing == 2022 && taxable_income > single_37_above1) ||
        (holding_period == "2" && filing_status == "mfs" && year_of_tax_filing == 2022 && taxable_income > mfs_37_above1) ||
        (holding_period == "2" && filing_status == "mfj" && year_of_tax_filing == 2022 && taxable_income > mfj_37_above1) ||
        (holding_period == "2" && filing_status == "hoh" && year_of_tax_filing == 2022 && taxable_income > hoh_37_above1)) {

        var rates = table_rates_22_bracket10;

        var shortone = your_estimated_pretax_capital_gain * table_rates_22_bracket10;
        var capital_gain_test = shortone;

    }

    /*console.log(your_estimated_pretax_capital_gain);
    console.log(your_total_taxable_income_incld_capital_gain);
    console.log(capital_gain_test);
    console.log(rates * 100 + '%');
    console.log(due_date);*/

    if (isNaN(your_estimated_pretax_capital_gain) || your_estimated_pretax_capital_gain < 1) {

        $('#sgem_cpg_pre_cap_tax').text('0');

    }else {

        $('#sgem_cpg_pre_cap_tax').text(numberWithCommas(your_estimated_pretax_capital_gain));
    }

    //-------------------------------------------------------------------------------------------------------------

    if (isNaN(your_total_taxable_income_incld_capital_gain) || your_total_taxable_income_incld_capital_gain < 1) {

        $('#sgem_cpg_tax_income').text('0');

    }else {

        $('#sgem_cpg_tax_income').text(numberWithCommas(your_total_taxable_income_incld_capital_gain));
    }

    //-------------------------------------------------------------------------------------------------------------

    if (isNaN(capital_gain_test) || capital_gain_test < 0) {

        $('#sgem_cpg_estimated_tax').text('0');

    }else {

        $('#sgem_cpg_estimated_tax').text(numberWithCommas(decimalTwoPoints(capital_gain_test)));
    }

    //-------------------------------------------------------------------------------------------------------------

    if (isNaN(rates)) {

        $('#sgem_cpg_you_marginal_tax_rate').text('0');

    }else {

        $('#sgem_cpg_you_marginal_tax_rate').text(rates * 100 + '%');
    }

    //-------------------------------------------------------------------------------------------------------------

    if (holding_period == 1) {

        $('#change_text_ondrop,#change_text_ondrop2').text('Long-Term');

    }else {

        $('#change_text_ondrop,#change_text_ondrop2').text('Short-Term');

    }

    //-------------------------------------------------------------------------------------------------------------



}


$(document).ready(function() {

    if( location.hostname == "calculatorstg.wpengine.com") {
        $('.sgem-cpg-logo-center').hide(); 
    } else if(location.hostname == "retirementinvestments.com"){
        $('.sgem-cpg-logo-center').hide();  
    } else {
        $('.sgem-cpg-logo-center').show();  
    }

    if ($('#sgem_cpg_purchased_price,#sgem_cpg_sales_price,#sgem_cpg_my_taxable_income,#sgem_cpg_year_status,#sgem_cpg_marital_status').length > 0) {
        $('#sgem_cpg_purchased_price,#sgem_cpg_sales_price,#sgem_cpg_my_taxable_income,#sgem_cpg_year_status,#sgem_cpg_marital_status').on('keyup', function() {
            sgem_capital_gain_calculationmin();

            // Keep only digits and decimal points:
            this.value = this.value.replace(/[^\d.]/g, "")
            // Remove duplicated decimal point, if one exists:
            this.value = this.value.replace(/^(\d*\.)(.*)\.(.*)$/, '$1$2$3')
            // Keep only two digits past the decimal point:
            this.value = this.value.replace(/\.(\d{0})\d+/, '')
            // Add thousands separators:
            this.value = this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            // Removing front zero
            this.value = this.value.replace(/^0+/, '');


        });
    }

    $('#sgem_cpg_year_status,#sgem_cpg_marital_status').on('change', function() {
        sgem_capital_gain_calculationmin();

    });

    //Validations-------------------------------------------------------------------

    // purchase price
    $('#sgem_cpg_purchased_price').on('keyup', function() {
        var val = this.value;
        var xc = parseInt(val);
        if (isNaN(xc) || $(this).val().length > 11) {

            this.value = '';
            $('#sgem_cpg_err_purchase_the_item').html('This cannot be empty or more than $900,000,000').fadeIn();
            $(this).css({
                "border": "1px solid red",
                "background": "#FFCECE"
            });


        } else {
            $('#sgem_cpg_err_purchase_the_item').html('').fadeOut();
            $(this).css({
                "border": "1px solid #707070",
                "background": "#ffffff"
            });
        }
    });

    // salse price
    $('#sgem_cpg_sales_price').on('keyup', function() {
        var cval = this.value;
        var cxc = parseInt(cval);
        if (isNaN(cxc) || $(this).val().length > 11) {

            this.value = '';
            $('#sgem_cpg_err_sold_the_item').html('This cannot be empty or more than $900,000,000').fadeIn();
            $(this).css({
                "border": "1px solid red",
                "background": "#FFCECE"
            });


        } else {
            $('#sgem_cpg_err_sold_the_item').html('').fadeOut();
            $(this).css({
                "border": "1px solid #707070",
                "background": "#ffffff"
            });
        }
    });

    // taxable income
    $('#sgem_cpg_my_taxable_income').on('keyup', function() {
        var scval = this.value;
        var scxc = parseInt(scval);
        if (isNaN(scxc) || $(this).val().length > 11) {

            this.value = '';
            $('#sgem_cpg_err_taxable_income').html('This cannot be empty or more than $900,000,000').fadeIn();
            $(this).css({
                "border": "1px solid red",
                "background": "#FFCECE"
            });


        } else {
            $('#sgem_cpg_err_taxable_income').html('').fadeOut();
            $(this).css({
                "border": "1px solid #707070",
                "background": "#ffffff"
            });
        }
    });

    //------------------------------------------------------------------------------

    sgem_capital_gain_calculationmin();

    if ($('.sgem-cpg-cal-wrapper').width() < 1024) {
        $('.sgem-cpg-cal-left').addClass('sgem-cpg-cal-left-add-class');
        $('.sgem-cpg-cal-right').addClass('sgem-cpg-cal-right-add-class');
    } else {
        $('.sgem-cpg-cal-left').removeClass('sgem-cpg-cal-left-add-class');
        $('.sgem-cpg-cal-right').removeClass('sgem-cpg-cal-right-add-class');
    }

    if ($('.sgem-cpg-cal-main-id').width() < 650) {
        $('.sgem-cpg-cal-wrapper').addClass('sgem-cpg-wrapper-add-mobile');
    } else {
        $('.sgem-cpg-cal-wrapper').removeClass('sgem-cpg-wrapper-add-mobile');
    }

    $(window).on('resize', function() {
        if ($('.sgem-cpg-cal-wrapper').width() < 1024) {
            $('.sgem-cpg-cal-left').addClass('sgem-cpg-cal-left-add-class');
            $('.sgem-cpg-cal-right').addClass('sgem-cpg-cal-right-add-class');
        } else {
            $('.sgem-cpg-cal-left').removeClass('sgem-cpg-cal-left-add-class');
            $('.sgem-cpg-cal-right').removeClass('sgem-cpg-cal-right-add-class');
        }
    }).trigger('resize');

    $(window).on('resize', function() {
        if ($('.sgem-cpg-cal-main-id').width() < 650) {
            $('.sgem-cpg-cal-wrapper').addClass('sgem-cpg-wrapper-add-mobile');
        } else {
            $('.sgem-cpg-cal-wrapper').removeClass('sgem-cpg-wrapper-add-mobile');
        }
    }).trigger('resize');


});

// DOCUMENT.READY END

/* Tippy Tool */

tippy('[data-tippy-content]', {
    arrow: true,
    theme: 'light-border',
    trigger: 'click',
});

localStorage.setItem('sgem-cpg-cal-copy', '<div id="sgem-cpg-cal"></div><script>window.onload = function() {var sgemcpgcal = document.createElement("script");sgemcpgcal.type = "text/javascript";sgemcpgcal.src = "https://retirementinvestments.github.io/sgem-capital-gains-calculator/assets/js/cal-cpg-cal-scripts.min.js";document.body.appendChild(sgemcpgcal);} </script>'); 
 
function sgem_cpg_copyText(ev){
  //console.log("hi");
  let div = document.getElementById('div');
  let text = localStorage.getItem('sgem-cpg-cal-copy');
  let textArea  = document.createElement('textarea');
  textArea.width  = "1px"; 
  textArea.height = "1px";
  textArea.background =  "transparents" ;
  textArea.value = text;
  document.body.append(textArea);
  textArea.select();
  document.execCommand('copy');   //No i18n
  document.body.removeChild(textArea);
  alert('Code snippet copied to clipboard!');
}

window.addEventListener('load', function() {     
    let sgemjsxc = document.createElement('script');
       sgemjsxc.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js');
       document.body.appendChild(sgemjsxc);
});
