(function(){/*
 AngularJS v1.3.15
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Q,W,t){'use strict';function R(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.3.15/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Sa(b){if(null==b||Ta(b))return!1;var a=b.length;return b.nodeType===
qa&&a?!0:C(b)||H(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d,e;if(b)if(G(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(H(b)||Sa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==r)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Ed(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
b[d[e]],d[e]);return d}function mc(b){return function(a,c){b(c,a)}}function Fd(){return++ob}function nc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function w(b){for(var a=b.$$hashKey,c=1,d=arguments.length;c<d;c++){var e=arguments[c];if(e)for(var f=Object.keys(e),g=0,h=f.length;g<h;g++){var l=f[g];b[l]=e[l]}}nc(b,a);return b}function aa(b){return parseInt(b,10)}function Ob(b,a){return w(Object.create(b),a)}function E(){}function ra(b){return b}function ea(b){return function(){return b}}function x(b){return"undefined"===
typeof b}function y(b){return"undefined"!==typeof b}function J(b){return null!==b&&"object"===typeof b}function C(b){return"string"===typeof b}function Y(b){return"number"===typeof b}function ga(b){return"[object Date]"===Ca.call(b)}function G(b){return"function"===typeof b}function Ua(b){return"[object RegExp]"===Ca.call(b)}function Ta(b){return b&&b.window===b}function Va(b){return b&&b.$evalAsync&&b.$watch}function Wa(b){return"boolean"===typeof b}function oc(b){return!(!b||!(b.nodeName||b.prop&&
b.attr&&b.find))}function Gd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function va(b){return z(b.nodeName||b[0]&&b[0].nodeName)}function Xa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return a}function Da(b,a,c,d){if(Ta(b)||Va(b))throw Ja("cpws");if(a){if(b===a)throw Ja("cpi");c=c||[];d=d||[];if(J(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(H(b))for(var f=a.length=0;f<b.length;f++)e=Da(b[f],null,c,d),J(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);
else{var g=a.$$hashKey;H(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=Da(b[f],null,c,d),J(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);nc(a,g)}}else if(a=b)H(b)?a=Da(b,[],c,d):ga(b)?a=new Date(b.getTime()):Ua(b)?(a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):J(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=Da(b,e,c,d));return a}function sa(b,a){if(H(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(J(b))for(c in a=a||{},
b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ha(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(H(b)){if(!H(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ha(b[d],a[d]))return!1;return!0}}else{if(ga(b))return ga(a)?ha(b.getTime(),a.getTime()):!1;if(Ua(b))return Ua(a)?b.toString()==a.toString():!1;if(Va(b)||Va(a)||Ta(b)||Ta(a)||H(a)||ga(a)||Ua(a))return!1;c={};for(d in b)if("$"!==
d.charAt(0)&&!G(b[d])){if(!ha(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!G(a[d]))return!1;return!0}return!1}function Ya(b,a,c){return b.concat(Za.call(a,c))}function pc(b,a){var c=2<arguments.length?Za.call(arguments,2):[];return!G(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Ya(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Hd(b,a){var c=a;"string"===typeof b&&
"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ta(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":Va(a)&&(c="$SCOPE");return c}function $a(b,a){if("undefined"===typeof b)return t;Y(a)||(a=a?2:null);return JSON.stringify(b,Hd,a)}function qc(b){return C(b)?JSON.parse(b):b}function wa(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return b[0].nodeType===pb?z(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+z(b)})}catch(d){return z(c)}}function rc(b){try{return decodeURIComponent(b)}catch(a){}}
function sc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=rc(c[0]),y(d)&&(b=y(c[1])?rc(c[1]):!0,tc.call(a,d)?H(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Pb(b){var a=[];r(b,function(b,d){H(b)?r(b,function(b){a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))}):a.push(Ea(d,!0)+(!0===b?"":"="+Ea(b,!0)))});return a.length?a.join("&"):""}function qb(b){return Ea(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Ea(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Id(b,a){var c,d,e=rb.length;b=A(b);for(d=0;d<e;++d)if(c=rb[d]+a,C(c=b.attr(c)))return c;return null}function Jd(b,a){var c,d,e={};r(rb,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});r(rb,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Id(c,"strict-di"),
a(c,d?[d]:[],e))}function uc(b,a,c){J(c)||(c={});c=w({strictDi:!1},c);var d=function(){b=A(b);if(b.injector()){var d=b[0]===W?"document":wa(b);throw Ja("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=ab(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;Q&&e.test(Q.name)&&(c.debugInfoEnabled=!0,Q.name=Q.name.replace(e,""));if(Q&&!f.test(Q.name))return d();Q.name=Q.name.replace(f,"");ca.resumeBootstrap=function(b){r(b,function(b){a.push(b)});return d()};G(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function Kd(){Q.name="NG_ENABLE_DEBUG_INFO!"+Q.name;Q.location.reload()}function Ld(b){b=ca.element(b).injector();if(!b)throw Ja("test");return b.get("$$testability")}
function vc(b,a){a=a||"_";return b.replace(Md,function(b,d){return(d?a:"")+b.toLowerCase()})}function Nd(){var b;wc||((ta=Q.jQuery)&&ta.fn.on?(A=ta,w(ta.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),b=ta.cleanData,ta.cleanData=function(a){var c;if(Qb)Qb=!1;else for(var d=0,e;null!=(e=a[d]);d++)(c=ta._data(e,"events"))&&c.$destroy&&ta(e).triggerHandler("$destroy");b(a)}):A=T,ca.element=A,wc=!0)}function Rb(b,a,c){if(!b)throw Ja("areq",
a||"?",c||"required");return b}function sb(b,a,c){c&&H(b)&&(b=b[b.length-1]);Rb(G(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function La(b,a){if("hasOwnProperty"===b)throw Ja("badname",a);}function xc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&G(b)?pc(e,b):b}function tb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function ia(){return Object.create(null)}
function Od(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=R("$injector"),d=R("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||R;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return u}}if(!g)throw c("nomod",f);var b=[],d=[],e=[],q=a("$injector","invoke","push",d),u={_invokeQueue:b,_configBlocks:d,
_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),config:q,run:function(a){e.push(a);return this}};h&&q(h);return u})}})}function Pd(b){w(b,{bootstrap:uc,copy:Da,extend:w,equals:ha,
element:A,forEach:r,injector:ab,noop:E,bind:pc,toJson:$a,fromJson:qc,identity:ra,isUndefined:x,isDefined:y,isString:C,isFunction:G,isObject:J,isNumber:Y,isElement:oc,isArray:H,version:Qd,isDate:ga,lowercase:z,uppercase:ub,callbacks:{counter:0},getTestability:Ld,$$minErr:R,$$csp:bb,reloadWithDebugInfo:Kd});cb=Od(Q);try{cb("ngLocale")}catch(a){cb("ngLocale",[]).provider("$locale",Rd)}cb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Sd});a.provider("$compile",yc).directive({a:Td,
input:zc,textarea:zc,form:Ud,script:Vd,select:Wd,style:Xd,option:Yd,ngBind:Zd,ngBindHtml:$d,ngBindTemplate:ae,ngClass:be,ngClassEven:ce,ngClassOdd:de,ngCloak:ee,ngController:fe,ngForm:ge,ngHide:he,ngIf:ie,ngInclude:je,ngInit:ke,ngNonBindable:le,ngPluralize:me,ngRepeat:ne,ngShow:oe,ngStyle:pe,ngSwitch:qe,ngSwitchWhen:re,ngSwitchDefault:se,ngOptions:te,ngTransclude:ue,ngModel:ve,ngList:we,ngChange:xe,pattern:Ac,ngPattern:Ac,required:Bc,ngRequired:Bc,minlength:Cc,ngMinlength:Cc,maxlength:Dc,ngMaxlength:Dc,
ngValue:ye,ngModelOptions:ze}).directive({ngInclude:Ae}).directive(vb).directive(Ec);a.provider({$anchorScroll:Be,$animate:Ce,$browser:De,$cacheFactory:Ee,$controller:Fe,$document:Ge,$exceptionHandler:He,$filter:Fc,$interpolate:Ie,$interval:Je,$http:Ke,$httpBackend:Le,$location:Me,$log:Ne,$parse:Oe,$rootScope:Pe,$q:Qe,$$q:Re,$sce:Se,$sceDelegate:Te,$sniffer:Ue,$templateCache:Ve,$templateRequest:We,$$testability:Xe,$timeout:Ye,$window:Ze,$$rAF:$e,$$asyncCallback:af,$$jqLite:bf})}])}function db(b){return b.replace(cf,
function(a,b,d,e){return e?d.toUpperCase():d}).replace(df,"Moz$1")}function Gc(b){b=b.nodeType;return b===qa||!b||9===b}function Hc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(ef.exec(b)||["",""])[1].toLowerCase();d=ja[d]||ja._default;c.innerHTML=d[1]+b.replace(ff,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Ya(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function T(b){if(b instanceof T)return b;var a;C(b)&&(b=N(b),a=!0);if(!(this instanceof T)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new T(b)}if(a){a=W;var c;b=(c=gf.exec(b))?[a.createElement(c[1])]:(c=Hc(b,a))?c.childNodes:[]}Ic(this,b)}function Ub(b){return b.cloneNode(!0)}function wb(b,a){a||xb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)xb(c[d])}function Jc(b,a,c,d){if(y(d))throw Tb("offargs");var e=(d=yb(b))&&d.events,f=d&&d.handle;if(f)if(a)r(a.split(" "),
function(a){if(y(c)){var d=e[a];Xa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function xb(b,a){var c=b.ng339,d=c&&zb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Jc(b)),delete zb[c],b.ng339=t))}function yb(b,a){var c=b.ng339,c=c&&zb[c];a&&!c&&(b.ng339=c=++hf,c=zb[c]={events:{},data:{},handle:t});return c}function Vb(b,a,c){if(Gc(b)){var d=y(c),e=!d&&a&&!J(a),
f=!a;b=(b=yb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];w(b,a)}}}function Ab(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Bb(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",N((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+N(a)+" "," ")))})}function Cb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");
r(a.split(" "),function(a){a=N(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",N(c))}}function Ic(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Kc(b,a){return Db(b,"$"+(a||"ngController")+"Controller")}function Db(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=H(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=A.data(b,a[d]))!==t)return c;b=b.parentNode||
11===b.nodeType&&b.host}}function Lc(b){for(wb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Mc(b,a){a||wb(b);var c=b.parentNode;c&&c.removeChild(b)}function jf(b,a){a=a||Q;if("complete"===a.document.readyState)a.setTimeout(b);else A(a).on("load",b)}function Nc(b,a){var c=Eb[a.toLowerCase()];return c&&Oc[va(b)]&&c}function kf(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Pc[a]}function lf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=
a[e||c.type],g=f?f.length:0;if(g){if(x(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=sa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function bf(){this.$get=function(){return w(T,{hasClass:function(b,a){b.attr&&(b=b[0]);
return Ab(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return Cb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return Bb(b,a)}})}}function Ma(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Fd)():c+":"+b}function eb(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function mf(b){return(b=b.toString().replace(Qc,"").match(Rc))?"function("+(b[1]||"").replace(/[\s\r\n]+/,
" ")+")":"fn"}function ab(b,a){function c(a){return function(b,c){if(J(b))r(b,mc(a));else return a(b,c)}}function d(a,b){La(a,"service");if(G(b)||H(b))b=q.instantiate(b);if(!b.$get)throw Fa("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=s.invoke(b,this);if(x(c))throw Fa("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=q.get(e[0]);f[e[1]].apply(f,
e[2])}}if(!n.get(a)){n.put(a,!0);try{C(a)?(c=cb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):G(a)?b.push(q.invoke(a)):H(a)?b.push(q.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Fa("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Fa("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),
b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],h=ab.$$annotate(b,a,g),l,q,p;q=0;for(l=h.length;q<l;q++){p=h[q];if("string"!==typeof p)throw Fa("itkn",p);k.push(f&&f.hasOwnProperty(p)?f[p]:d(p,g))}H(b)&&(b=b[l]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((H(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return J(a)||G(a)?a:d},get:d,annotate:ab.$$annotate,has:function(a){return p.hasOwnProperty(a+
"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],n=new eb([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ea(b),!1)}),constant:c(function(a,b){La(a,"constant");p[a]=b;u[a]=b}),decorator:function(a,b){var c=q.get(a+"Provider"),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},q=p.$injector=h(p,function(a,b){ca.isString(b)&&k.push(b);
throw Fa("unpr",k.join(" <- "));}),u={},s=u.$injector=h(u,function(a,b){var c=q.get(a+"Provider",b);return s.invoke(c.$get,c,t,a)});r(g(b),function(a){s.invoke(a||E)});return s}function Be(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===va(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;G(c)?c=c():oc(c)?(c=c[0],c="fixed"!==
a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(){var a=c.hash(),b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||jf(function(){d.$evalAsync(g)})});return g}]}function af(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
function(b){return a(b,0,!1)}}]}function nf(b,a,c,d){function e(a){try{a.apply(null,Za.call(arguments,1))}finally{if(m--,0===m)for(;F.length;)try{F.pop()()}catch(b){c.error(b)}}}function f(a,b){(function da(){r(Z,function(a){a()});L=b(da,a)})()}function g(){h();l()}function h(){a:{try{B=u.state;break a}catch(a){}B=void 0}B=x(B)?null:B;ha(B,O)&&(B=O);O=B}function l(){if(D!==n.url()||I!==B)D=n.url(),I=B,r(X,function(a){a(n.url(),B)})}function k(a){try{return decodeURIComponent(a)}catch(b){return a}}
var n=this,p=a[0],q=b.location,u=b.history,s=b.setTimeout,M=b.clearTimeout,v={};n.isMock=!1;var m=0,F=[];n.$$completeOutstandingRequest=e;n.$$incOutstandingRequestCount=function(){m++};n.notifyWhenNoOutstandingRequests=function(a){r(Z,function(a){a()});0===m?a():F.push(a)};var Z=[],L;n.addPollFn=function(a){x(L)&&f(100,s);Z.push(a);return a};var B,I,D=q.href,S=a.find("base"),P=null;h();I=B;n.url=function(a,c,e){x(e)&&(e=null);q!==b.location&&(q=b.location);u!==b.history&&(u=b.history);if(a){var f=
I===e;if(D===a&&(!d.history||f))return n;var g=D&&Ga(D)===Ga(a);D=a;I=e;!d.history||g&&f?(g||(P=a),c?q.replace(a):g?(c=q,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):q.href=a):(u[c?"replaceState":"pushState"](e,"",a),h(),I=B);return n}return P||q.href.replace(/%27/g,"'")};n.state=function(){return B};var X=[],ba=!1,O=null;n.onUrlChange=function(a){if(!ba){if(d.history)A(b).on("popstate",g);A(b).on("hashchange",g);ba=!0}X.push(a);return a};n.$$checkUrlChange=l;n.baseHref=function(){var a=S.attr("href");
return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var fa={},y="",ka=n.baseHref();n.cookies=function(a,b){var d,e,f,g;if(a)b===t?p.cookie=encodeURIComponent(a)+"=;path="+ka+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(p.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+";path="+ka).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(p.cookie!==y)for(y=p.cookie,d=y.split("; "),fa={},f=0;f<d.length;f++)e=d[f],g=
e.indexOf("="),0<g&&(a=k(e.substring(0,g)),fa[a]===t&&(fa[a]=k(e.substring(g+1))));return fa}};n.defer=function(a,b){var c;m++;c=s(function(){delete v[c];e(a)},b||0);v[c]=!0;return c};n.defer.cancel=function(a){return v[a]?(delete v[a],M(a),e(E),!0):!1}}function De(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new nf(b,d,a,c)}]}function Ee(){this.$get=function(){function b(b,d){function e(a){a!=p&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=
b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw R("$cacheFactory")("iid",b);var g=0,h=w({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,q=null;return a[b]={put:function(a,b){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}if(!x(b))return a in l||g++,l[a]=b,g>k&&this.remove(q.key),b},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==q&&(q=b.n);f(b.n,b.p);delete n[a]}delete l[a];
g--},removeAll:function(){l={};g=0;n={};p=q=null},destroy:function(){n=h=l=null;delete a[b]},info:function(){return w({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function Ve(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function yc(b,a){function c(a,b){var c=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,d={};r(a,function(a,e){var f=a.match(c);if(!f)throw la("iscp",b,e,a);d[e]={mode:f[1][0],collection:"*"===
f[2],optional:"?"===f[3],attrName:f[4]||e}});return d}var d={},e=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,f=/(([\w\-]+)(?:\:([^;]+))?;?)/,g=Gd("ngSrc,ngSrcset,src,srcset"),h=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,l=/^(on[a-z]+|formaction)$/;this.directive=function p(a,e){La(a,"directive");C(a)?(Rb(e,"directiveFactory"),d.hasOwnProperty(a)||(d[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,e){var f=[];r(d[a],function(d,g){try{var h=b.invoke(d);G(h)?h={compile:ea(h)}:!h.compile&&h.link&&
(h.compile=ea(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";J(h.scope)&&(h.$$isolateBindings=c(h.scope,h.name));f.push(h)}catch(k){e(k)}});return f}])),d[a].push(e)):r(a,mc(p));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
var k=!0;this.debugInfoEnabled=function(a){return y(a)?(k=a,this):k};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,s,M,v,m,F,Z,L,B){function I(a,b){try{a.addClass(b)}catch(c){}}function D(a,b,c,d,e){a instanceof A||(a=A(a));r(a,function(b,c){b.nodeType==pb&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=S(a,b,a,c,d,e);D.$$addScopeClass(a);
var g=null;return function(b,c,d){Rb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==va(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?A(Xb(g,A("<div>").append(a).html())):c?Ka.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);D.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function S(a,b,c,d,e,f){function g(a,
c,d,e){var f,k,l,q,p,s,M;if(m)for(M=Array(c.length),q=0;q<h.length;q+=3)f=h[q],M[f]=c[f];else M=c;q=0;for(p=h.length;q<p;)k=M[h[q++]],c=h[q++],f=h[q++],c?(c.scope?(l=a.$new(),D.$$addScopeInfo(A(k),l)):l=a,s=c.transcludeOnThisElement?P(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?P(a,b):null,c(f,l,k,d,s)):f&&f(a,k.childNodes,t,e)}for(var h=[],k,l,q,p,m,s=0;s<a.length;s++){k=new Yb;l=X(a[s],[],k,0===s?d:t,e);(f=l.length?fa(l,a[s],k,b,c,null,[],[],f):null)&&
f.scope&&D.$$addScopeClass(k.$$element);k=f&&f.terminal||!(q=a[s].childNodes)||!q.length?null:S(q,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(s,f,k),p=!0,m=m||f;f=null}return p?g:null}function P(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function X(a,b,c,d,g){var h=c.$attr,k;switch(a.nodeType){case qa:ka(b,xa(va(a)),"E",d,g);for(var l,
q,p,m=a.attributes,s=0,M=m&&m.length;s<M;s++){var u=!1,L=!1;l=m[s];k=l.name;q=N(l.value);l=xa(k);if(p=U.test(l))k=k.replace(Sc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var B=l.replace(/(Start|End)$/,"");x(B)&&l===B+"Start"&&(u=k,L=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=xa(k.toLowerCase());h[l]=k;if(p||!c.hasOwnProperty(l))c[l]=q,Nc(a,l)&&(c[l]=!0);Oa(a,b,q,l,p);ka(b,l,"A",d,g,u,L)}a=a.className;J(a)&&(a=a.animVal);if(C(a)&&""!==a)for(;k=f.exec(a);)l=xa(k[2]),
ka(b,l,"C",d,g)&&(c[l]=N(k[3])),a=a.substr(k.index+k[0].length);break;case pb:za(b,a.nodeValue);break;case 8:try{if(k=e.exec(a.nodeValue))l=xa(k[1]),ka(b,l,"M",d,g)&&(c[l]=N(k[2]))}catch(v){}}b.sort(da);return b}function ba(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw la("uterdir",b,c);a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function O(a,b,c){return function(d,e,f,g,h){e=ba(e[0],
b,c);return a(d,e,f,g,h)}}function fa(a,d,e,f,g,k,l,p,m){function s(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=K.require;a.directiveName=da;if(P===K||K.$$isolateScope)a=Y(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=O(b,c,d));b.require=K.require;b.directiveName=da;if(P===K||K.$$isolateScope)b=Y(b,{isolateScope:!0});p.push(b)}}function L(a,b,c,d){var e,f="data",g=!1,k=c,l;if(C(b)){l=b.match(h);b=b.substring(l[0].length);l[3]&&(l[1]?l[3]=null:l[1]=l[3]);"^"===l[1]?f="inheritedData":"^^"===l[1]&&(f="inheritedData",
k=c.parent());"?"===l[2]&&(g=!0);e=null;d&&"data"===f&&(e=d[b])&&(e=e.instance);e=e||k[f]("$"+b+"Controller");if(!e&&!g)throw la("ctreq",b,a);return e||null}H(b)&&(e=[],r(b,function(b){e.push(L(a,b,c,d))}));return e}function B(a,c,f,g,h){function k(a,b,c){var d;Va(a)||(c=b,b=a,a=t);E&&(d=F);c||(c=E?X.parent():X);return h(a,b,d,c,Wb)}var m,s,u,I,F,gb,X,O;d===f?(O=e,X=e.$$element):(X=A(f),O=new Yb(X,e));P&&(I=c.$new(!0));h&&(gb=k,gb.$$boundTransclude=h);S&&(Z={},F={},r(S,function(a){var b={$scope:a===
P||a.$$isolateScope?I:c,$element:X,$attrs:O,$transclude:gb};u=a.controller;"@"==u&&(u=O[a.name]);b=v(u,b,!0,a.controllerAs);F[a.name]=b;E||X.data("$"+a.name+"Controller",b.instance);Z[a.name]=b}));if(P){D.$$addScopeInfo(X,I,!0,!(ma&&(ma===P||ma===P.$$originalDirective)));D.$$addScopeClass(X,!0);g=Z&&Z[P.name];var ba=I;g&&g.identifier&&!0===P.bindToController&&(ba=g.instance);r(I.$$isolateBindings=P.$$isolateBindings,function(a,d){var e=a.attrName,f=a.optional,g,h,k,l;switch(a.mode){case "@":O.$observe(e,
function(a){ba[d]=a});O.$$observers[e].$$scope=c;O[e]&&(ba[d]=b(O[e])(c));break;case "=":if(f&&!O[e])break;h=M(O[e]);l=h.literal?ha:function(a,b){return a===b||a!==a&&b!==b};k=h.assign||function(){g=ba[d]=h(c);throw la("nonassign",O[e],P.name);};g=ba[d]=h(c);f=function(a){l(a,ba[d])||(l(a,g)?k(c,a=ba[d]):ba[d]=a);return g=a};f.$stateful=!0;f=a.collection?c.$watchCollection(O[e],f):c.$watch(M(O[e],f),null,h.literal);I.$on("$destroy",f);break;case "&":h=M(O[e]),ba[d]=function(a){return h(c,a)}}})}Z&&
(r(Z,function(a){a()}),Z=null);g=0;for(m=l.length;g<m;g++)s=l[g],$(s,s.isolateScope?I:c,X,O,s.require&&L(s.directiveName,s.require,X,F),gb);var Wb=c;P&&(P.template||null===P.templateUrl)&&(Wb=I);a&&a(Wb,f.childNodes,t,h);for(g=p.length-1;0<=g;g--)s=p[g],$(s,s.isolateScope?I:c,X,O,s.require&&L(s.directiveName,s.require,X,F),gb)}m=m||{};for(var I=-Number.MAX_VALUE,F,S=m.controllerDirectives,Z,P=m.newIsolateScopeDirective,ma=m.templateDirective,fa=m.nonTlbTranscludeDirective,ka=!1,x=!1,E=m.hasElementTranscludeDirective,
w=e.$$element=A(d),K,da,V,fb=f,za,z=0,Q=a.length;z<Q;z++){K=a[z];var Oa=K.$$start,U=K.$$end;Oa&&(w=ba(d,Oa,U));V=t;if(I>K.priority)break;if(V=K.scope)K.templateUrl||(J(V)?(Na("new/isolated scope",P||F,K,w),P=K):Na("new/isolated scope",P,K,w)),F=F||K;da=K.name;!K.templateUrl&&K.controller&&(V=K.controller,S=S||{},Na("'"+da+"' controller",S[da],K,w),S[da]=K);if(V=K.transclude)ka=!0,K.$$tlb||(Na("transclusion",fa,K,w),fa=K),"element"==V?(E=!0,I=K.priority,V=w,w=e.$$element=A(W.createComment(" "+da+": "+
e[da]+" ")),d=w[0],T(g,Za.call(V,0),d),fb=D(V,f,I,k&&k.name,{nonTlbTranscludeDirective:fa})):(V=A(Ub(d)).contents(),w.empty(),fb=D(V,f));if(K.template)if(x=!0,Na("template",ma,K,w),ma=K,V=G(K.template)?K.template(w,e):K.template,V=Tc(V),K.replace){k=K;V=Sb.test(V)?Uc(Xb(K.templateNamespace,N(V))):[];d=V[0];if(1!=V.length||d.nodeType!==qa)throw la("tplrt",da,"");T(g,w,d);Q={$attr:{}};V=X(d,[],Q);var aa=a.splice(z+1,a.length-(z+1));P&&y(V);a=a.concat(V).concat(aa);R(e,Q);Q=a.length}else w.html(V);if(K.templateUrl)x=
!0,Na("template",ma,K,w),ma=K,K.replace&&(k=K),B=of(a.splice(z,a.length-z),w,e,g,ka&&fb,l,p,{controllerDirectives:S,newIsolateScopeDirective:P,templateDirective:ma,nonTlbTranscludeDirective:fa}),Q=a.length;else if(K.compile)try{za=K.compile(w,e,fb),G(za)?s(null,za,Oa,U):za&&s(za.pre,za.post,Oa,U)}catch(pf){c(pf,wa(w))}K.terminal&&(B.terminal=!0,I=Math.max(I,K.priority))}B.scope=F&&!0===F.scope;B.transcludeOnThisElement=ka;B.elementTranscludeOnThisElement=E;B.templateOnThisElement=x;B.transclude=fb;
m.hasElementTranscludeDirective=E;return B}function y(a){for(var b=0,c=a.length;b<c;b++)a[b]=Ob(a[b],{$$isolateScope:!0})}function ka(b,e,f,g,h,k,l){if(e===h)return null;h=null;if(d.hasOwnProperty(e)){var q;e=a.get(e+"Directive");for(var m=0,s=e.length;m<s;m++)try{q=e[m],(g===t||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(k&&(q=Ob(q,{$$start:k,$$end:l})),b.push(q),h=q)}catch(M){c(M)}}return h}function x(b){if(d.hasOwnProperty(b))for(var c=a.get(b+"Directive"),e=0,f=c.length;e<f;e++)if(b=c[e],b.multiElement)return!0;
return!1}function R(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(I(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function of(a,b,c,d,e,f,g,h){var k=[],l,q,p=b[0],m=a.shift(),M=Ob(m,{templateUrl:null,transclude:null,
replace:null,$$originalDirective:m}),u=G(m.templateUrl)?m.templateUrl(b,c):m.templateUrl,L=m.templateNamespace;b.empty();s(Z.getTrustedResourceUrl(u)).then(function(s){var B,v;s=Tc(s);if(m.replace){s=Sb.test(s)?Uc(Xb(L,N(s))):[];B=s[0];if(1!=s.length||B.nodeType!==qa)throw la("tplrt",m.name,u);s={$attr:{}};T(d,b,B);var D=X(B,[],s);J(m.scope)&&y(D);a=D.concat(a);R(c,s)}else B=p,b.html(s);a.unshift(M);l=fa(a,B,c,e,b,m,f,g,h);r(d,function(a,c){a==B&&(d[c]=b[0])});for(q=S(b[0].childNodes,e);k.length;){s=
k.shift();v=k.shift();var F=k.shift(),O=k.shift(),D=b[0];if(!s.$$destroyed){if(v!==p){var Z=v.className;h.hasElementTranscludeDirective&&m.replace||(D=Ub(B));T(F,A(v),D);I(A(D),Z)}v=l.transcludeOnThisElement?P(s,l.transclude,O):O;l(q,s,D,d,v)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(l.transcludeOnThisElement&&(a=P(b,l.transclude,e)),l(q,b,c,d,a)))}}function da(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Na(a,
b,c,d){if(b)throw la("multidir",b.name,c.name,a,wa(d));}function za(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&D.$$addBindingClass(a);return function(a,c){var e=c.parent();b||D.$$addBindingClass(e);D.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Xb(a,b){a=z(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}
function Q(a,b){if("srcdoc"==b)return Z.HTML;var c=va(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return Z.RESOURCE_URL}function Oa(a,c,d,e,f){var h=Q(a,e);f=g[e]||f;var k=b(d,!0,h,f);if(k){if("multiple"===e&&"select"===va(a))throw la("selmulti",wa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers={});if(l.test(e))throw la("nodomevents");var m=g[e];m!==d&&(k=m&&b(m,!0,h,f),d=m);k&&(g[e]=k(a),(c[e]||(c[e]=[])).$$inter=
!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(k,function(a,b){"class"===e&&a!=b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function T(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);A(c).data(A(d).data());ta?(Qb=!0,ta.cleanData([d])):delete A.cache[d[A.expando]];
d=1;for(e=b.length;d<e;d++)f=b[d],A(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,b){return w(function(){return a.apply(null,arguments)},a,b)}function $(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,wa(d))}}var Yb=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};Yb.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&L.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&
L.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Vc(a,b);c&&c.length&&L.addClass(this.$$element,c);(c=Vc(b,a))&&c.length&&L.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Nc(f,a),h=kf(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=vc(a,"-"));g=va(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=B(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g=
"",h=N(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var q=2*l,g=g+B(N(h[q]),!0),g=g+(" "+N(h[q+1]));h=N(h[2*l]).split(/\s/);g+=B(N(h[0]),!0);2===h.length&&(g+=" "+N(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&r(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ia()),e=d[a]||(d[a]=[]);e.push(b);
m.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Xa(e,b)}}};var V=b.startSymbol(),ma=b.endSymbol(),Tc="{{"==V||"}}"==ma?ra:function(a){return a.replace(/\{\{/g,V).replace(/}}/g,ma)},U=/^ngAttr[A-Z]/;D.$$addBindingInfo=k?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;D.$$addBindingClass=k?function(a){I(a,"ng-binding")}:E;D.$$addScopeInfo=k?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",
b)}:E;D.$$addScopeClass=k?function(a,b){I(a,b?"ng-isolate-scope":"ng-scope")}:E;return D}]}function xa(b){return db(b.replace(Sc,""))}function Vc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Uc(b){b=A(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&qf.call(b,a,1);return b}function Fe(){var b={},a=!1,c=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,c){La(a,
"controller");J(a)?w(b,a):b[a]=c};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(d,e){function f(a,b,c,d){if(!a||!J(a.$scope))throw R("$controller")("noscp",d,b);a.$scope[b]=c}return function(g,h,l,k){var n,p,q;l=!0===l;k&&C(k)&&(q=k);if(C(g)){k=g.match(c);if(!k)throw rf("ctrlfmt",g);p=k[1];q=q||k[3];g=b.hasOwnProperty(p)?b[p]:xc(h.$scope,p,!0)||(a?xc(e,p,!0):t);sb(g,p,!0)}if(l)return l=(H(g)?g[g.length-1]:g).prototype,n=Object.create(l||null),q&&f(h,q,n,p||g.name),w(function(){d.invoke(g,
n,h,p);return n},{instance:n,identifier:q});n=d.instantiate(g,h,p);q&&f(h,q,n,p||g.name);return n}}]}function Ge(){this.$get=["$window",function(b){return A(b.document)}]}function He(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b,a){if(C(b)){var c=b.replace(sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Wc))||(d=(d=c.match(tf))&&uf[d[0]].test(c));d&&(b=qc(c))}}return b}function Xc(b){var a=ia(),c,d,e;if(!b)return a;r(b.split("\n"),
function(b){e=b.indexOf(":");c=z(N(b.substr(0,e)));d=N(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function Yc(b){var a=J(b)?b:t;return function(c){a||(a=Xc(b));return c?(c=a[z(c)],void 0===c&&(c=null),c):a}}function Zc(b,a,c,d){if(G(d))return d(b,a,c);r(d,function(d){b=d(b,a,c)});return b}function Ke(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return J(a)&&"[object File]"!==Ca.call(a)&&"[object Blob]"!==Ca.call(a)&&"[object FormData]"!==Ca.call(a)?$a(a):
a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:sa($b),put:sa($b),patch:sa($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=w({},a);b.data=a.data?Zc(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?
b:h.reject(b)}function d(a){var b,c={};r(a,function(a,d){G(a)?(b=a(),null!=b&&(c[d]=b)):c[d]=a});return c}if(!ca.isObject(a))throw R("$http")("badreq",a);var e=w({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse},a);e.headers=function(a){var c=b.headers,e=w({},a.headers),f,g,c=w({},c.common,c[z(a.method)]);a:for(f in c){a=z(f);for(g in e)if(z(g)===a)continue a;e[f]=c[f]}return d(e)}(a);e.method=ub(e.method);var f=[function(a){var d=a.headers,e=Zc(a.data,Yc(d),
t,a.transformRequest);x(e)&&r(d,function(a,b){"content-type"===z(b)&&delete d[b]});x(a.withCredentials)&&!x(b.withCredentials)&&(a.withCredentials=b.withCredentials);return n(a,e).then(c,c)},t],g=h.when(e);for(r(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=
function(a){g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}function n(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}I&&(200<=b&&300>b?I.put(P,[b,c,Xc(d),e]):I.remove(P));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:Yc(d),config:c,statusText:e})}function n(a){m(a.data,a.status,sa(a.headers()),a.statusText)}function u(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,
1)}var L=h.defer(),B=L.promise,I,D,S=c.headers,P=p(c.url,c.params);k.pendingRequests.push(c);B.then(u,u);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(I=J(c.cache)?c.cache:J(b.cache)?b.cache:q);I&&(D=I.get(P),y(D)?D&&G(D.then)?D.then(n,n):H(D)?m(D[1],D[0],sa(D[2]),D[3]):m(D,200,{},"OK"):I.put(P,B));x(D)&&((D=$c(c.url)?e.cookies()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=D),d(c.method,P,f,l,S,c.timeout,c.withCredentials,c.responseType));
return B}function p(a,b){if(!b)return a;var c=[];Ed(b,function(a,b){null===a||x(a)||(H(a)||(a=[a]),r(a,function(a){J(a)&&(a=ga(a)?a.toISOString():$a(a));c.push(Ea(b)+"="+Ea(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var q=f("$http"),u=[];r(c,function(a){u.unshift(C(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){r(arguments,function(a){k[a]=function(b,c){return k(w(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){k[a]=
function(b,c,d){return k(w(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function vf(){return new Q.XMLHttpRequest}function Le(){this.$get=["$browser","$window","$document",function(b,a,c){return wf(b,vf,b.defer,a.angular.callbacks,c[0])}]}function wf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);
f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,p,q,u){function s(){m&&m();F&&F.abort()}function M(a,d,e,f,g){L!==t&&c.cancel(L);m=F=null;a(d,e,f,g);b.$$completeOutstandingRequest(E)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==z(e)){var v="_"+(d.counter++).toString(36);d[v]=function(a){d[v].data=
a;d[v].called=!0};var m=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){M(k,a,d[v].data,"",b);d[v]=E})}else{var F=a();F.open(e,h,!0);r(n,function(a,b){y(a)&&F.setRequestHeader(b,a)});F.onload=function(){var a=F.statusText||"",b="response"in F?F.response:F.responseText,c=1223===F.status?204:F.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);M(k,c,b,F.getAllResponseHeaders(),a)};e=function(){M(k,-1,null,null,"")};F.onerror=e;F.onabort=e;q&&(F.withCredentials=!0);if(u)try{F.responseType=
u}catch(Z){if("json"!==u)throw Z;}F.send(l||null)}if(0<p)var L=c(s,p);else p&&G(p.then)&&p.then(s)}}function Ie(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(f,g,u,s){function M(c){return c.replace(k,b).replace(n,a)}function v(a){try{var b=a;a=u?e.getTrusted(u,b):e.valueOf(b);var c;if(s&&!y(a))c=a;else if(null==a)c="";
else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=$a(a)}c=a}return c}catch(g){c=ac("interr",f,g.toString()),d(c)}}s=!!s;for(var m,F,r=0,L=[],B=[],I=f.length,D=[],S=[];r<I;)if(-1!=(m=f.indexOf(b,r))&&-1!=(F=f.indexOf(a,m+h)))r!==m&&D.push(M(f.substring(r,m))),r=f.substring(m+h,F),L.push(r),B.push(c(r,v)),r=F+l,S.push(D.length),D.push("");else{r!==I&&D.push(M(f.substring(r)));break}if(u&&1<D.length)throw ac("noconcat",f);if(!g||L.length){var P=function(a){for(var b=0,c=
L.length;b<c;b++){if(s&&x(a[b]))return;D[S[b]]=a[b]}return D.join("")};return w(function(a){var b=0,c=L.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return P(e)}catch(g){a=ac("interr",f,g.toString()),d(a)}},{exp:f,expressions:L,$$watchDelegate:function(a,b,c){var d;return a.$watchGroup(B,function(c,e){var f=P(c);G(b)&&b.call(this,f,c!==e?d:f,a);d=f},c)}})}}var h=b.length,l=a.length,k=new RegExp(b.replace(/./g,f),"g"),n=new RegExp(a.replace(/./g,f),"g");g.startSymbol=function(){return b};g.endSymbol=
function(){return a};return g}]}function Je(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=a.setInterval,p=a.clearInterval,q=0,u=y(k)&&!k,s=(u?d:c).defer(),M=s.promise;l=y(l)?l:0;M.then(null,null,e);M.$$intervalId=n(function(){s.notify(q++);0<l&&q>=l&&(s.resolve(q),p(M.$$intervalId),delete f[M.$$intervalId]);u||b.$apply()},h);f[M.$$intervalId]=s;return M}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),
delete f[b.$$intervalId],!0):!1};return e}]}function Rd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=qb(b[a]);
return b.join("/")}function ad(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||xf[c.protocol]||null}function bd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=sc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ya(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=b.indexOf("#");
return-1==a?b:b.substr(0,a)}function Fb(b){return b.replace(/(#.+)|#$/,"$1")}function cc(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function dc(b,a){this.$$html5=!0;a=a||"";var c=cc(b);ad(b,this);this.$$parse=function(a){var b=ya(c,a);if(!C(b))throw Gb("ipthprfx",a,c);bd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Pb(this.$$search),b=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=
function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=ya(b,d))!==t?(g=f,g=(f=ya(a,f))!==t?c+(ya("/",f)||f):b+g):(f=ya(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);ad(b,this);this.$$parse=function(d){d=ya(b,d)||ya(c,d);var e;"#"===d.charAt(0)?(e=ya(a,d),x(e)&&(e=d)):e=this.$$html5?d:"";bd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};
this.$$compose=function(){var c=Pb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function cd(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ga(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=
function(){var c=Pb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Hb(b){return function(){return this[b]}}function dd(b,a){return function(c){if(x(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Me(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return Wa(b)?(a.enabled=b,this):J(b)?(Wa(b.enabled)&&(a.enabled=
b.enabled),Wa(b.requireBase)&&(a.requireBase=b.requireBase),Wa(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var p=d.url(),q;if(a.enabled){if(!n&&a.requireBase)throw Gb("nobase");
q=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(n||"/");n=e.history?dc:cd}else q=Ga(p),n=ec;k=new n(q,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var u=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=A(b.target);"a"!==va(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");J(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Aa(h.animVal).href);
u.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Fb(k.absUrl())!=Fb(p)&&d.url(k.absUrl(),!0);var s=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(s=!1,l(d,e)))});c.$$phase||c.$digest()});
c.$watch(function(){var a=Fb(d.url()),b=Fb(k.absUrl()),f=d.state(),g=k.$$replace,q=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(s||q)s=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(q&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function Ne(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof
Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||E;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,
arguments)}}()}}]}function ua(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw na("isecfld",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw na("isecfn",a);if(b.window===b)throw na("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw na("isecdom",a);if(b===Object)throw na("isecobj",a);}return b}function fc(b){return b.constant}function hb(b,a,c,d,e){oa(b,e);oa(a,e);c=c.split(".");for(var f,
g=0;1<c.length;g++){f=ua(c.shift(),e);var h=0===g&&a&&a[f]||b[f];h||(h={},b[f]=h);b=oa(h,e)}f=ua(c.shift(),e);oa(b[f],e);return b[f]=d}function Pa(b){return"constructor"==b}function ed(b,a,c,d,e,f,g){ua(b,f);ua(a,f);ua(c,f);ua(d,f);ua(e,f);var h=function(a){return oa(a,f)},l=g||Pa(b)?h:ra,k=g||Pa(a)?h:ra,n=g||Pa(c)?h:ra,p=g||Pa(d)?h:ra,q=g||Pa(e)?h:ra;return function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=l(h[b]);if(!a)return h;if(null==h)return t;h=k(h[a]);if(!c)return h;if(null==
h)return t;h=n(h[c]);if(!d)return h;if(null==h)return t;h=p(h[d]);return e?null==h?t:h=q(h[e]):h}}function yf(b,a){return function(c,d){return b(c,d,oa,a)}}function zf(b,a,c){var d=a.expensiveChecks,e=d?Af:Bf,f=e[b];if(f)return f;var g=b.split("."),h=g.length;if(a.csp)f=6>h?ed(g[0],g[1],g[2],g[3],g[4],c,d):function(a,b){var e=0,f;do f=ed(g[e++],g[e++],g[e++],g[e++],g[e++],c,d)(a,b),b=t,a=f;while(e<h);return f};else{var l="";d&&(l+="s = eso(s, fe);\nl = eso(l, fe);\n");var k=d;r(g,function(a,b){ua(a,
c);var e=(b?"s":'((l&&l.hasOwnProperty("'+a+'"))?l:s)')+"."+a;if(d||Pa(a))e="eso("+e+", fe)",k=!0;l+="if(s == null) return undefined;\ns="+e+";\n"});l+="return s;";a=new Function("s","l","eso","fe",l);a.toString=ea(l);k&&(a=yf(a,c));f=a}f.sharedGetter=!0;f.assign=function(a,c,d){return hb(a,d,b,c,b)};return e[b]=f}function gc(b){return G(b.valueOf)?b.valueOf():Cf.call(b)}function Oe(){var b=ia(),a=ia();this.$get=["$filter","$sniffer",function(c,d){function e(a){var b=a;a.sharedGetter&&(b=function(b,
c){return a(b,c)},b.literal=a.literal,b.constant=a.constant,b.assign=a.assign);return b}function f(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c];e.constant||(e.inputs?f(e.inputs,b):-1===b.indexOf(e)&&b.push(e))}return b}function g(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=gc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function h(a,b,c,d){var e=d.$$inputs||(d.$$inputs=f(d.inputs,[])),h;if(1===e.length){var k=g,e=e[0];return a.$watch(function(a){var b=e(a);g(b,k)||(h=d(a),k=b&&
gc(b));return h},b,c)}for(var l=[],q=0,p=e.length;q<p;q++)l[q]=g;return a.$watch(function(a){for(var b=!1,c=0,f=e.length;c<f;c++){var k=e[c](a);if(b||(b=!g(k,l[c])))l[c]=k&&gc(k)}b&&(h=d(a));return h},b,c)}function l(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;G(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function k(a,b,c,d){function e(a){var b=!0;r(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},
function(a,c,d){g=a;G(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function n(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){G(b)&&b.apply(this,arguments);e()},c)}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==k&&c!==l?function(c,d){var e=a(c,d);return b(e,c,d)}:function(c,d){var e=a(c,d),f=b(e,c,d);return y(e)?f:e};a.$$watchDelegate&&a.$$watchDelegate!==h?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=h,c.inputs=
[a]);return c}var q={csp:d.csp,expensiveChecks:!1},u={csp:d.csp,expensiveChecks:!0};return function(d,f,g){var m,r,t;switch(typeof d){case "string":t=d=d.trim();var L=g?a:b;m=L[t];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(r=!0,d=d.substring(2)),g=g?u:q,m=new hc(g),m=(new ib(m,c,g)).parse(d),m.constant?m.$$watchDelegate=n:r?(m=e(m),m.$$watchDelegate=m.literal?k:l):m.inputs&&(m.$$watchDelegate=h),L[t]=m);return p(m,f);case "function":return p(d,f);default:return p(E,f)}}}]}function Qe(){this.$get=
["$rootScope","$exceptionHandler",function(b,a){return fd(function(a){b.$evalAsync(a)},a)}]}function Re(){this.$get=["$browser","$exceptionHandler",function(b,a){return fd(function(a){b.defer(a)},a)}]}function fd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;
c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{G(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=R("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&
f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(J(b)||G(b))d=b&&b.then;G(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=
b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(G(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):
c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{G(c)&&(d=c())}catch(e){return l(e,!1)}return d&&G(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function u(a){if(!G(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;
b.reject(a);return b.promise};p.when=n;p.all=function(a){var b=new g,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function $e(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=
c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function Pe(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++ob;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=R("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler",
"$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function n(){this.$id=++ob;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=null}function p(a){if(v.$$phase)throw c("inprog",v.$$phase);v.$$phase=a}function q(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];
while(a=a.$parent)}function u(){}function s(){for(;t.length;)try{t.shift()()}catch(a){g(a)}e=null}function M(){null===e&&(e=l.defer(function(){v.$apply(s)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},
$watch:function(a,b,c){var e=h(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,c,e);var f=this.$$watchers,g={fn:b,last:u,get:e,exp:a,eq:!!c};d=null;G(b)||(g.fn=E);f||(f=this.$$watchers=[]);f.unshift(g);return function(){Xa(f,g);d=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],
function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(J(e))if(Sa(e))for(f!==p&&(f=p,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==n&&(f=n={},u=0,l++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=
f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)e.hasOwnProperty(b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,q=h(a,c),p=[],n={},m=!0,u=0;return this.$watch(q,function(){m?(m=!1,b(e,e,d)):b(e,g,d);if(k)if(J(e))if(Sa(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)tc.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,q,n,r=a,t,O=[],M,y;p("$digest");l.$$checkUrlChange();
this===v&&null!==e&&(l.defer.cancel(e),s());d=null;do{n=!1;for(t=this;m.length;){try{y=m.shift(),y.scope.$eval(y.expression,y.locals)}catch(w){g(w)}d=null}a:do{if(k=t.$$watchers)for(q=k.length;q--;)try{if(b=k[q])if((f=b.get(t))!==(h=b.last)&&!(b.eq?ha(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))n=!0,d=b,b.last=b.eq?Da(f,null):f,b.fn(f,h===u?f:h,t),5>r&&(M=4-r,O[M]||(O[M]=[]),O[M].push({msg:G(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===
d){n=!1;break a}}catch(A){g(A)}if(!(k=t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(k=t.$$nextSibling);)t=t.$parent}while(t=k);if((n||m.length)&&!r--)throw v.$$phase=null,c("infdig",a,O);}while(n||m.length);for(v.$$phase=null;F.length;)try{F.shift()()}catch(x){g(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;if(this!==v){for(var b in this.$$listenerCount)q(this,this.$$listenerCount[b],b);a.$$childHead==this&&(a.$$childHead=
this.$$nextSibling);a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(a,
b){return h(a)(this,b)},$evalAsync:function(a,b){v.$$phase||m.length||l.defer(function(){m.length&&v.$digest()});m.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){F.push(a)},$apply:function(a){try{return p("$apply"),this.$eval(a)}catch(b){g(b)}finally{v.$$phase=null;try{v.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.push(b);M()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,q(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=Ya([h],arguments,1),l,q;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(q=d.length;l<q;l++)if(d[l])try{d[l].apply(null,k)}catch(p){g(p)}else d.splice(l,1),l--,q--;if(f)return h.currentScope=
null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Ya([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=
c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new n,m=v.$$asyncQueue=[],F=v.$$postDigestQueue=[],t=v.$$applyAsyncQueue=[];return v}]}function Sd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+
f}}}function Df(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=gd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Ua(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function hd(b){var a=[];y(b)&&r(b,function(b){a.push(Df(b))});return a}function Te(){this.SCE_CONTEXTS=pa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=hd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&
(a=hd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?$c(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=
e(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Aa(e.toString()),p,q,u=!1;p=0;for(q=b.length;p<q;p++)if(d(b[p],g)){u=!0;break}if(u)for(p=
0,q=a.length;p<q;p++)if(d(a[p],g)){u=!1;break}if(u)return e;throw Ba("insecurl",e.toString());}if(c===pa.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Se(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Qa)throw Ba("iequirks");var d=sa(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=
d.getTrusted=function(a,b){return b},d.valueOf=ra);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;r(pa,function(a,b){var c=z(b);d[db("parse_as_"+c)]=function(b){return e(a,b)};d[db("get_trusted_"+c)]=function(b){return f(a,b)};d[db("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function Ue(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(z((b.navigator||
{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var p in l)if(k=h.exec(p)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in l);!d||k&&n||(k=C(f.body.style.webkitTransition),n=C(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===
a&&11>=Qa)return!1;if(x(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:bb(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function We(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;H(g)?g=g.filter(function(a){return a!==Zb}):g===Zb&&(g=null);return a.get(e,{cache:b,transformResponse:g})["finally"](function(){d.totalPendingRequests--}).then(function(a){return a.data},
function(a){if(!f)throw la("tpload",e);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function Xe(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var d=ca.element(a).data("$binding");d&&r(d,function(d){c?(new RegExp("(^|\\s)"+gd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],
h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function Ye(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){var n=y(k)&&!k,p=(n?d:c).defer(),q=p.promise;l=a.defer(function(){try{p.resolve(f())}catch(a){p.reject(a),e(a)}finally{delete g[q.$$timeoutId]}n||
b.$apply()},l);q.$$timeoutId=l;g[l]=p;return q}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Qa&&($.setAttribute("href",b),b=$.href);$.setAttribute("href",b);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,""):"",hostname:$.hostname,port:$.port,pathname:"/"===
$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function $c(b){b=C(b)?Aa(b):b;return b.protocol===id.protocol&&b.host===id.host}function Ze(){this.$get=ea(Q)}function Fc(b){function a(c,d){if(J(c)){var e={};r(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",jd);a("date",kd);a("filter",Ef);a("json",Ff);a("limitTo",Gf);a("lowercase",Hf);a("number",ld);a("orderBy",md);a("uppercase",
If)}function Ef(){return function(b,a,c){if(!H(b))return b;var d;switch(typeof a){case "function":break;case "boolean":case "number":case "string":d=!0;case "object":a=Jf(a,c,d);break;default:return b}return b.filter(a)}}function Jf(b,a,c){var d=J(b)&&"$"in b;!0===a?a=ha:G(a)||(a=function(a,b){if(J(a)||J(b))return!1;a=z(""+a);b=z(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!J(e)?Ha(e,b.$,a,!1):Ha(e,b,a,c)}}function Ha(b,a,c,d,e){var f=null!==b?typeof b:"null",g=null!==a?typeof a:
"null";if("string"===g&&"!"===a.charAt(0))return!Ha(b,a.substring(1),c,d);if(H(b))return b.some(function(b){return Ha(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ha(b[h],a,c,!0))return!0;return e?!1:Ha(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!G(e)&&!x(e)&&(f="$"===h,!Ha(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function jd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){x(d)&&(d=a.CURRENCY_SYM);x(e)&&
(e=a.PATTERNS[1].maxFrac);return null==b?b:nd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ld(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:nd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function nd(b,a,c,d,e){if(!isFinite(b)||J(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",l=[],k=!1;if(-1!==g.indexOf("e")){var n=g.match(/([\d\.]+)e(-?)(\d+)/);n&&"-"==n[2]&&n[3]>e+1?b=0:(h=g,k=!0)}if(k)0<e&&1>b&&(h=b.toFixed(e),b=parseFloat(h));else{g=(g.split(od)[1]||
"").length;x(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(od),k=g[0],g=g[1]||"",p=0,q=a.lgSize,u=a.gSize;if(k.length>=q+u)for(p=k.length-q,n=0;n<p;n++)0===(p-n)%u&&0!==n&&(h+=c),h+=k.charAt(n);for(n=p;n<k.length;n++)0===(k.length-n)%q&&0!==n&&(h+=c),h+=k.charAt(n);for(;g.length<e;)g+="0";e&&"0"!==e&&(h+=d+g.substr(0,e))}0===b&&(f=!1);l.push(f?a.negPre:a.posPre,h,f?a.negSuf:a.posSuf);return l.join("")}function Ib(b,a,
c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function U(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ib(e,a,d)}}function Jb(b,a){return function(c,d){var e=c["get"+b](),f=ub(a?"SHORT"+b:b);return d[f][e]}}function pd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function qd(b){return function(a){var c=pd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+
(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Ib(a,b)}}function ic(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function kd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=Kf.test(c)?aa(c):a(c));Y(c)&&(c=new Date(c));if(!ga(c))return c;for(;e;)(k=Lf.exec(e))?(h=Ya(h,k,1),e=h.pop()):(h.push(e),e=null);f&&"UTC"===f&&(c=new Date(c.getTime()),c.setMinutes(c.getMinutes()+c.getTimezoneOffset()));r(h,function(a){l=Mf[a];g+=l?l(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Ff(){return function(b,a){x(a)&&(a=2);return $a(b,a)}}function Gf(){return function(b,
a){Y(b)&&(b=b.toString());return H(b)||C(b)?(a=Infinity===Math.abs(Number(a))?Number(a):aa(a))?0<a?b.slice(0,a):b.slice(a):C(b)?"":[]:b}}function md(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=
typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Sa(a))return a;c=H(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||ra;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return Za.call(a).sort(e(function(a,
b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ia(b){G(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ea(b)}function rd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Kb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,
function(a){a.$commitViewValue()})};f.$addControl=function(a){La(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});r(f.$$success,function(b,c){f.$setValidity(c,null,a)});Xa(g,a)};sd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];
d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Xa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,Lb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Ra,Lb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");
f.$submitted=!0;h.$setSubmitted()}}function jc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function jb(b,a,c,d,e,f){var g=z(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=N(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",
l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Mb(b,a){return function(c,d){var e,f;if(ga(c))return c;if(C(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(Nf.test(c))return new Date(c);b.lastIndex=
0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(b,a,c,d){return function(e,f,g,h,l,k,n){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function q(a){return y(a)?ga(a)?a:c(a):t}td(e,f,g,h);
jb(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,s;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,s),"UTC"===u&&b.setMinutes(b.getMinutes()-b.getTimezoneOffset()),b):t});h.$formatters.push(function(a){if(a&&!ga(a))throw Nb("datefmt",a);if(p(a)){if((s=a)&&"UTC"===u){var b=6E4*s.getTimezoneOffset();s=new Date(s.getTime()+b)}return n("date")(a,d,u)}s=null;return""});if(y(g.min)||g.ngMin){var r;h.$validators.min=function(a){return!p(a)||x(r)||c(a)>=r};
g.$observe("min",function(a){r=q(a);h.$validate()})}if(y(g.max)||g.ngMax){var v;h.$validators.max=function(a){return!p(a)||x(v)||c(a)<=v};g.$observe("max",function(a){v=q(a);h.$validate()})}}}function td(b,a,c,d){(d.$$hasNativeValidators=J(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function ud(b,a,c,d,e){if(y(d)){b=b(d);if(!b.constant)throw R("ngModel")("constexpr",c,d);return b(a)}return e}function kc(b,a){b="ngClass"+b;return["$animate",
function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){if(!H(a)){if(C(a))return a.split(" ");if(J(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===
a||f.$index%2===a){var k=e(b||[]);if(!n){var u=l(k,1);h.$addClass(u)}else if(!ha(b,n)){var s=e(n),u=d(k,s),k=d(s,k),u=l(u,1),k=l(k,-1);u&&u.length&&c.addClass(g,u);k&&k.length&&c.removeClass(g,k)}}n=sa(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function sd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),
f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+vc(b,"-"):"";a(lb+b,!0===c);a(vd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[vd]=!(f[lb]=e.hasClass(lb));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),wd(d.$pending)&&(d.$pending=t));Wa(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(xd,
!0),d.$valid=d.$invalid=t,c("",null)):(a(xd,!1),d.$valid=wd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function wd(b){if(b)for(var a in b)return!1;return!0}var Of=/^\/(.+)\/([a-z]*)$/,z=function(b){return C(b)?b.toLowerCase():b},tc=Object.prototype.hasOwnProperty,ub=function(b){return C(b)?b.toUpperCase():b},Qa,A,ta,Za=[].slice,qf=[].splice,Pf=[].push,Ca=Object.prototype.toString,Ja=R("ng"),ca=Q.angular||
(Q.angular={}),cb,ob=0;Qa=W.documentMode;E.$inject=[];ra.$inject=[];var H=Array.isArray,N=function(b){return C(b)?b.trim():b},gd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},bb=function(){if(y(bb.isActive_))return bb.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return bb.isActive_=b},rb=["ng-","data-ng-","ng:","x-ng-"],Md=/[A-Z]/g,wc=!1,Qb,qa=1,pb=3,Qd={full:"1.3.15",major:1,
minor:3,dot:15,codeName:"locality-filtration"};T.expando="ng339";var zb=T.cache={},hf=1;T._data=function(b){return this.cache[b[this.expando]]||{}};var cf=/([\:\-\_]+(.))/g,df=/^moz([A-Z])/,Qf={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=R("jqLite"),gf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,ef=/<([\w:]+)/,ff=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>",
"</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Ka=T.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),T(Q).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=
b?A(this[b]):A(this[this.length+b])},length:0,push:Pf,sort:[].sort,splice:[].splice},Eb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){Eb[z(b)]=b});var Oc={};r("input select option textarea button form details".split(" "),function(b){Oc[b]=!0});var Pc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Vb,removeData:xb},function(b,a){T[a]=b});r({data:Vb,inheritedData:Db,scope:function(b){return A.data(b,"$scope")||
Db(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A.data(b,"$isolateScope")||A.data(b,"$isolateScopeNoTemplate")},controller:Kc,injector:function(b){return Db(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Ab,css:function(b,a,c){a=db(a);if(y(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=z(a);if(Eb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||E).specified?
d:t;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(x(b)){var d=a.nodeType;return d===qa||d===pb?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(x(a)){if(b.multiple&&"select"===va(b)){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(x(a))return b.innerHTML;
wb(b,!0);b.innerHTML=a},empty:Lc},function(b,a){T.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Lc&&(2==b.length&&b!==Ab&&b!==Kc?a:d)===t){if(J(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:xb,on:function a(c,d,e,f){if(y(f))throw Tb("onargs");if(Gc(c)){var g=yb(c,!0);f=g.events;var h=g.handle;h||(h=
g.handle=lf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,Qf[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Jc,one:function(a,c,d){a=A(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;wb(a);r(new T(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,
a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new T(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;r(new T(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=A(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},
remove:Mc,detach:function(a){Mc(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new T(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:Cb,removeClass:Bb,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;x(f)&&(f=!Ab(a,c));(f?Cb:Bb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,
triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=yb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:g,target:a},c.type&&(e=w(e,c)),c=sa(h),f=d?[e].concat(d):[e],r(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,
f)})}},function(a,c){T.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)x(g)?(g=a(this[h],c,e,f),y(g)&&(g=A(g))):Ic(g,a(this[h],c,e,f));return y(g)?g:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});eb.prototype={put:function(a,c){this[Ma(a,this.nextUid)]=c},get:function(a){return this[Ma(a,this.nextUid)]},remove:function(a){var c=this[a=Ma(a,this.nextUid)];delete this[a];return c}};var Rc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Rf=/,/,Sf=/^\s*(_?)(\S+?)\1\s*$/,
Qc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Fa=R("$injector");ab.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw C(d)&&d||(d=a.name||mf(a)),Fa("strictdi",d);c=a.toString().replace(Qc,"");c=c.match(Rc);r(c[1].split(Rf),function(a){a.replace(Sf,function(a,c,d){e.push(d)})})}a.$inject=e}}else H(a)?(c=a.length-1,sb(a[c],"fn"),e=a.slice(0,c)):sb(a,"fn",!0);return e};var Tf=R("$animate"),Ce=["$provide",function(a){this.$$selectors={};this.register=function(c,
d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Tf("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$q","$$asyncCallback","$rootScope",function(a,d,e){function f(d){var f,g=a.defer();g.promise.$$cancelFn=function(){f&&f()};e.$$postDigest(function(){f=d(function(){g.resolve()})});return g.promise}function g(a,c){var d=[],e=[],f=ia();
r((a.attr("class")||"").split(/\s+/),function(a){f[a]=!0});r(c,function(a,c){var g=f[c];!1===a&&g?e.push(c):!0!==a||g||d.push(c)});return 0<d.length+e.length&&[d.length?d:null,e.length?e:null]}function h(a,c,d){for(var e=0,f=c.length;e<f;++e)a[c[e]]=d}function l(){n||(n=a.defer(),d(function(){n.resolve();n=null}));return n.promise}function k(a,c){if(ca.isObject(c)){var d=w(c.from||{},c.to||{});a.css(d)}}var n;return{animate:function(a,c,d){k(a,{from:c,to:d});return l()},enter:function(a,c,d,e){k(a,
e);d?d.after(a):c.prepend(a);return l()},leave:function(a,c){k(a,c);a.remove();return l()},move:function(a,c,d,e){return this.enter(a,c,d,e)},addClass:function(a,c,d){return this.setClass(a,c,[],d)},$$addClassImmediately:function(a,c,d){a=A(a);c=C(c)?c:H(c)?c.join(" "):"";r(a,function(a){Cb(a,c)});k(a,d);return l()},removeClass:function(a,c,d){return this.setClass(a,[],c,d)},$$removeClassImmediately:function(a,c,d){a=A(a);c=C(c)?c:H(c)?c.join(" "):"";r(a,function(a){Bb(a,c)});k(a,d);return l()},setClass:function(a,
c,d,e){var k=this,l=!1;a=A(a);var m=a.data("$$animateClasses");m?e&&m.options&&(m.options=ca.extend(m.options||{},e)):(m={classes:{},options:e},l=!0);e=m.classes;c=H(c)?c:c.split(" ");d=H(d)?d:d.split(" ");h(e,c,!0);h(e,d,!1);l&&(m.promise=f(function(c){var d=a.data("$$animateClasses");a.removeData("$$animateClasses");if(d){var e=g(a,d.classes);e&&k.$$setClassImmediately(a,e[0],e[1],d.options)}c()}),a.data("$$animateClasses",m));return m.promise},$$setClassImmediately:function(a,c,d,e){c&&this.$$addClassImmediately(a,
c);d&&this.$$removeClassImmediately(a,d);k(a,e);return l()},enabled:E,cancel:E}}]}],la=R("$compile");yc.$inject=["$provide","$$sanitizeUriProvider"];var Sc=/^((?:x|data)[\:\-_])/i,rf=R("$controller"),Wc="application/json",$b={"Content-Type":Wc+";charset=utf-8"},tf=/^\[|^\{(?!\{)/,uf={"[":/]$/,"{":/}$/},sf=/^\)\]\}',?\n/,ac=R("$interpolate"),Uf=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,xf={http:80,https:443,ftp:21},Gb=R("$location"),Vf={$$html5:!1,$$replace:!1,absUrl:Hb("$$absUrl"),url:function(a){if(x(a))return this.$$url;
var c=Uf.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:dd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(C(a)||Y(a))a=a.toString(),this.$$search=sc(a);else if(J(a))a=Da(a,{}),r(a,function(c,e){null==c&&delete a[e]}),this.$$search=
a;else throw Gb("isrcharg");break;default:x(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([cd,ec,dc],function(a){a.prototype=Object.create(Vf);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Gb("nostate");this.$$state=x(c)?null:c;return this}});var na=R("$parse"),Wf=Function.prototype.call,
Xf=Function.prototype.apply,Yf=Function.prototype.bind,mb=ia();r({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(a,c){a.constant=a.literal=a.sharedGetter=!0;mb[c]=a});mb["this"]=function(a){return a};mb["this"].sharedGetter=!0;var nb=w(ia(),{"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return y(d)?y(e)?d+e:d:y(e)?e:t},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(y(d)?d:0)-(y(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},
"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},
"||":function(a,c,d,e){return d(a,c)||e(a,c)},"!":function(a,c,d){return!d(a,c)},"=":!0,"|":!0}),Zf={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},hc=function(a){this.options=a};hc.prototype={constructor:hc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,
"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=nb[c],f=nb[d];nb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},
isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw na("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<
this.text.length;){var d=z(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=
this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):
d+=Zf[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var ib=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};ib.ZERO=w(function(){return 0},{sharedGetter:!0,constant:!0});ib.prototype={constructor:ib,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);
a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.peek().identifier&&this.peek().text in mb?a=mb[this.consume().text]:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c,d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,
d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw na("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw na("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===
f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){if(0===this.tokens.length)throw na("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},unaryFn:function(a,c){var d=nb[a];return w(function(a,f){return d(a,f,c)},{constant:c.constant,inputs:[c]})},binaryFn:function(a,c,d,e){var f=nb[c];return w(function(c,e){return f(c,e,a,d)},{constant:a.constant&&
d.constant,inputs:!e&&[a,d]})},identifier:function(){for(var a=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)a+=this.consume().text+this.consume().text;return zf(a,this.options,this.text)},constant:function(){var a=this.consume().value;return w(function(){return a},{constant:!0,literal:!0})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,
d){for(var e,f=0,g=a.length;f<g;f++)e=a[f](c,d);return e}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},filter:function(a){var c=this.$filter(this.consume().text),d,e;if(this.peek(":"))for(d=[],e=[];this.expect(":");)d.push(this.expression());var f=[a].concat(d||[]);return w(function(f,h){var l=a(f,h);if(e){e[0]=l;for(l=d.length;l--;)e[l+1]=d[l](f,h);return c.apply(t,e)}return c(l)},{constant:!c.$stateful&&f.every(fc),inputs:!c.$stateful&&f})},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),w(function(d,f){return a.assign(d,c(d,f),f)},{inputs:[a,c]})):a},ternary:function(){var a=this.logicalOR(),c;if(this.expect("?")&&(c=this.assignment(),this.consume(":"))){var d=this.assignment();return w(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})}return a},
logicalOR:function(){for(var a=this.logicalAND(),c;c=this.expect("||");)a=this.binaryFn(a,c.text,this.logicalAND(),!0);return a},logicalAND:function(){for(var a=this.equality(),c;c=this.expect("&&");)a=this.binaryFn(a,c.text,this.equality(),!0);return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a=this.binaryFn(a,c.text,this.relational());return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a=this.binaryFn(a,c.text,
this.additive());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.text,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.text,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(ib.ZERO,a.text,this.unary()):(a=this.expect("!"))?this.unaryFn(a.text,this.unary()):this.primary()},fieldAccess:function(a){var c=
this.identifier();return w(function(d,e,f){d=f||a(d,e);return null==d?t:c(d)},{assign:function(d,e,f){var g=a(d,f);g||a.assign(d,g={},f);return c.assign(g,e)}})},objectIndex:function(a){var c=this.text,d=this.expression();this.consume("]");return w(function(e,f){var g=a(e,f),h=d(e,f);ua(h,c);return g?oa(g[h],c):t},{assign:function(e,f,g){var h=ua(d(e,g),c),l=oa(a(e,g),c);l||a.assign(e,l={},g);return l[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this.text,f=d.length?[]:null;return function(g,h){var l=c?c(g,h):y(c)?t:g,k=a(g,h,l)||E;if(f)for(var n=d.length;n--;)f[n]=oa(d[n](g,h),e);oa(l,e);if(k){if(k.constructor===k)throw na("isecfn",e);if(k===Wf||k===Xf||k===Yf)throw na("isecff",e);}l=k.apply?k.apply(l,f):k(f[0],f[1],f[2],f[3],f[4]);f&&(f.length=0);return oa(l,e)}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))
}this.consume("]");return w(function(c,d){for(var e=[],f=0,g=a.length;f<g;f++)e.push(a[f](c,d));return e},{literal:!0,constant:a.every(fc),inputs:a})},object:function(){var a=[],c=[];if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.consume();d.constant?a.push(d.value):d.identifier?a.push(d.text):this.throwError("invalid key",d);this.consume(":");c.push(this.expression())}while(this.expect(","))}this.consume("}");return w(function(d,f){for(var g={},h=0,l=c.length;h<l;h++)g[a[h]]=
c[h](d,f);return g},{literal:!0,constant:c.every(fc),inputs:c})}};var Bf=ia(),Af=ia(),Cf=Object.prototype.valueOf,Ba=R("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},la=R("$compile"),$=W.createElement("a"),id=Aa(Q.location.href);Fc.$inject=["$provide"];jd.$inject=["$locale"];ld.$inject=["$locale"];var od=".",Mf={yyyy:U("FullYear",4),yy:U("FullYear",2,0,!0),y:U("FullYear",1),MMMM:Jb("Month"),MMM:Jb("Month",!0),MM:U("Month",2,1),M:U("Month",1,1),dd:U("Date",2),d:U("Date",
1),HH:U("Hours",2),H:U("Hours",1),hh:U("Hours",2,-12),h:U("Hours",1,-12),mm:U("Minutes",2),m:U("Minutes",1),ss:U("Seconds",2),s:U("Seconds",1),sss:U("Milliseconds",3),EEEE:Jb("Day"),EEE:Jb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ib(Math[0<a?"floor":"ceil"](a/60),2)+Ib(Math.abs(a%60),2))},ww:qd(2),w:qd(1),G:ic,GG:ic,GGG:ic,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},Lf=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
Kf=/^\-?\d+$/;kd.$inject=["$locale"];var Hf=ea(z),If=ea(ub);md.$inject=["$parse"];var Td=ea({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===Ca.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),vb={};r(Eb,function(a,c){if("multiple"!=a){var d=xa("ng-"+c);vb[d]=function(){return{restrict:"A",priority:100,link:function(a,f,g){a.$watch(g[d],
function(a){g.$set(c,!!a)})}}}}});r(Pc,function(a,c){vb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(Of))){f.$set("ngPattern",new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});r(["src","srcset","href"],function(a){var c=xa("ng-"+a);vb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ca.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",
g=null);f.$observe(c,function(c){c?(f.$set(h,c),Qa&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Kb={$addControl:E,$$renameControl:function(a,c){a.$name=c},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E};rd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var yd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:rd,compile:function(d,e){d.addClass(Ra).addClass(lb);var f=e.name?"name":a&&e.ngForm?"ngForm":
!1;return{pre:function(a,d,e,k){if(!("action"in e)){var n=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",n,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",n,!1)},0,!1)})}var p=k.$$parentForm;f&&(hb(a,null,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(hb(a,null,k.$name,t,k.$name),p.$$renameControl(k,c),hb(a,null,k.$name,k,k.$name))}));d.on("$destroy",function(){p.$removeControl(k);
f&&hb(a,null,e[f],t,k.$name);w(k,Kb)})}}}}}]},Ud=yd(),ge=yd(!0),Nf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,$f=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,ag=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,bg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,zd=/^(\d{4})-(\d{2})-(\d{2})$/,Ad=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,lc=/^(\d{4})-W(\d\d)$/,Bd=/^(\d{4})-(\d\d)$/,
Cd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Dd={text:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e)},date:kb("date",zd,Mb(zd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Ad,Mb(Ad,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Cd,Mb(Cd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",lc,function(a,c){if(ga(a))return a;if(C(a)){lc.lastIndex=0;var d=lc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=pd(e),f=7*(f-1);c&&(d=c.getHours(),g=
c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:kb("month",Bd,Mb(Bd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){td(a,c,d,e);jb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:bg.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!Y(a))throw Nb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||
x(h)||a>=h};d.$observe("min",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));h=Y(a)&&!isNaN(a)?a:t;e.$validate()})}if(y(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||x(l)||a<=l};d.$observe("max",function(a){y(a)&&!Y(a)&&(a=parseFloat(a,10));l=Y(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||$f.test(d)}},email:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e);
e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||ag.test(d)}},radio:function(a,c,d,e){x(d.name)&&c.attr("name",++ob);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=ud(l,a,"ngTrueValue",d.ngTrueValue,!0),n=ud(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&
a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ha(a,k)});e.$parsers.push(function(a){return a?k:n})},hidden:E,button:E,submit:E,reset:E,file:E},zc=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Dd[z(h.type)]||Dd.text)(f,g,h,l[0],c,a,d,e)}}}}],cg=/^(true|false|\d+)$/,ye=function(){return{restrict:"A",priority:100,compile:function(a,
c){return cg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},Zd=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ae=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));
c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],$d=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],xe=ea({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),
be=kc("",!0),de=kc("Odd",0),ce=kc("Even",1),ee=Ia({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),fe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Ec={},dg={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=xa("ng-"+a);Ec[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=
d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};dg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ie=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=
tb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],je=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,q,r,s){var t=0,v,m,F,w=function(){m&&(m.remove(),m=null);v&&(v.$destroy(),v=null);F&&(d.leave(F).then(function(){m=null}),m=F,F=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=
function(){!y(k)||k&&!f.$eval(k)||c()},m=++t;e?(a(e,!0).then(function(a){if(m===t){var c=f.$new();r.template=a;a=s(c,function(a){w();d.enter(a,null,g).then(h)});v=c;F=a;v.$emit("$includeContentLoaded",e);f.$eval(l)}},function(){m===t&&(w(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(w(),r.template=null)})}}}}],Ae=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Hc(f.template,
W).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ke=Ia({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),we=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?N(f):f;e.$parsers.push(function(a){if(!x(a)){var c=[];a&&r(a.split(h),function(a){a&&c.push(g?N(a):a)});return c}});e.$formatters.push(function(a){return H(a)?
a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",vd="ng-invalid",Ra="ng-pristine",Lb="ng-dirty",xd="ng-pending",Nb=new R("ngModel"),eg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;
this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=n(d.name||"",!1)(a);var p=f(d.ngModel),q=p.assign,u=p,s=q,M=null,v,m=this;this.$$setOptions=function(a){if((m.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=p(a);G(d)&&(d=c(a));return d};s=function(a,c){G(p(a))?g(a,{$$$p:m.$modelValue}):q(a,m.$modelValue)}}else if(!p.assign)throw Nb("nonassign",d.ngModel,wa(e));
};this.$render=E;this.$isEmpty=function(a){return x(a)||""===a||null===a||a!==a};var F=e.inheritedData("$formController")||Kb,w=0;sd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},parentForm:F,$animate:g});this.$setPristine=function(){m.$dirty=!1;m.$pristine=!0;g.removeClass(e,Lb);g.addClass(e,Ra)};this.$setDirty=function(){m.$dirty=!0;m.$pristine=!1;g.removeClass(e,Ra);g.addClass(e,Lb);F.$setDirty()};this.$setUntouched=function(){m.$touched=!1;m.$untouched=!0;g.setClass(e,
"ng-untouched","ng-touched")};this.$setTouched=function(){m.$touched=!0;m.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(M);m.$viewValue=m.$$lastCommittedViewValue;m.$render()};this.$validate=function(){if(!Y(m.$modelValue)||!isNaN(m.$modelValue)){var a=m.$$rawModelValue,c=m.$valid,d=m.$modelValue,e=m.$options&&m.$options.allowInvalid;m.$$runValidators(a,m.$$lastCommittedViewValue,function(f){e||c===f||(m.$modelValue=f?a:t,m.$modelValue!==d&&m.$$writeModelToScope())})}};
this.$$runValidators=function(a,c,d){function e(){var d=!0;r(m.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(r(m.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;r(m.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!G(k.then))throw Nb("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},E):h(!0)}function g(a,c){l===w&&m.$setValidity(a,c)}function h(a){l===w&&d(a)}w++;var l=
w;(function(){var a=m.$$parserName||"parse";if(v===t)g(a,null);else return v||(r(m.$validators,function(a,c){g(c,null)}),r(m.$asyncValidators,function(a,c){g(c,null)})),g(a,v),v;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=m.$viewValue;h.cancel(M);if(m.$$lastCommittedViewValue!==a||""===a&&m.$$hasNativeValidators)m.$$lastCommittedViewValue=a,m.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=m.$$lastCommittedViewValue;if(v=
x(c)?t:!0)for(var d=0;d<m.$parsers.length;d++)if(c=m.$parsers[d](c),x(c)){v=!1;break}Y(m.$modelValue)&&isNaN(m.$modelValue)&&(m.$modelValue=u(a));var e=m.$modelValue,f=m.$options&&m.$options.allowInvalid;m.$$rawModelValue=c;f&&(m.$modelValue=c,m.$modelValue!==e&&m.$$writeModelToScope());m.$$runValidators(c,m.$$lastCommittedViewValue,function(a){f||(m.$modelValue=a?c:t,m.$modelValue!==e&&m.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,m.$modelValue);r(m.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};
this.$setViewValue=function(a,c){m.$viewValue=a;m.$options&&!m.$options.updateOnDefault||m.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=m.$options;e&&y(e.debounce)&&(e=e.debounce,Y(e)?d=e:Y(e[c])?d=e[c]:Y(e["default"])&&(d=e["default"]));h.cancel(M);d?M=h(function(){m.$commitViewValue()},d):l.$$phase?m.$commitViewValue():a.$apply(function(){m.$commitViewValue()})};a.$watch(function(){var c=u(a);if(c!==m.$modelValue){m.$modelValue=m.$$rawModelValue=c;v=t;for(var d=
m.$formatters,e=d.length,f=c;e--;)f=d[e](f);m.$viewValue!==f&&(m.$viewValue=m.$$lastCommittedViewValue=f,m.$render(),m.$$runValidators(c,f,E))}return c})}],ve=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:eg,priority:1,compile:function(c){c.addClass(Ra).addClass("ng-untouched").addClass(lb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Kb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,
a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],fg=/(\s+|^)default(\s+|$)/,ze=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=a.$eval(c.ngModelOptions);this.$options.updateOn!==t?(this.$options.updateOnDefault=
!1,this.$options.updateOn=N(this.$options.updateOn.replace(fg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},le=Ia({terminal:!0,priority:1E3}),me=["$locale","$interpolate",function(a,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{restrict:"EA",link:function(f,g,h){function l(a){g.text(a||"")}var k=h.count,n=h.$attr.when&&g.attr(h.$attr.when),p=h.offset||0,q=f.$eval(n)||{},u={},n=c.startSymbol(),s=c.endSymbol(),t=n+k+"-"+p+s,v=ca.noop,m;r(h,function(a,c){var d=
e.exec(c);d&&(d=(d[1]?"-":"")+z(d[2]),q[d]=g.attr(h.$attr[c]))});r(q,function(a,e){u[e]=c(a.replace(d,t))});f.$watch(k,function(c){c=parseFloat(c);var d=isNaN(c);d||c in q||(c=a.pluralCat(c-p));c===m||d&&isNaN(m)||(v(),v=f.$watch(u[c],l),m=c)})}}}],ne=["$parse","$animate",function(a,c){var d=R("ngRepeat"),e=function(a,c,d,e,k,n,p){a[d]=e;k&&(a[k]=n);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",
priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var n=k[1],p=k[2],q=k[3],u=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var s=k[3]||k[1],y=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",
q);var v,m,w,x,E={$id:Ma};u?v=a(u):(w=function(a,c){return Ma(c)},x=function(a){return a});return function(a,f,g,k,n){v&&(m=function(c,d,e){y&&(E[y]=c);E[s]=d;E.$index=e;return v(a,E)});var u=ia();a.$watchCollection(p,function(g){var k,p,v=f[0],D,E=ia(),G,H,L,S,J,C,z;q&&(a[q]=g);if(Sa(g))J=g,p=m||w;else{p=m||x;J=[];for(z in g)g.hasOwnProperty(z)&&"$"!=z.charAt(0)&&J.push(z);J.sort()}G=J.length;z=Array(G);for(k=0;k<G;k++)if(H=g===J?k:J[k],L=g[H],S=p(H,L,k),u[S])C=u[S],delete u[S],E[S]=C,z[k]=C;else{if(E[S])throw r(z,
function(a){a&&a.scope&&(u[a.id]=a)}),d("dupes",h,S,L);z[k]={id:S,scope:t,clone:t};E[S]=!0}for(D in u){C=u[D];S=tb(C.clone);c.leave(S);if(S[0].parentNode)for(k=0,p=S.length;k<p;k++)S[k].$$NG_REMOVED=!0;C.scope.$destroy()}for(k=0;k<G;k++)if(H=g===J?k:J[k],L=g[H],C=z[k],C.scope){D=v;do D=D.nextSibling;while(D&&D.$$NG_REMOVED);C.clone[0]!=D&&c.move(tb(C.clone),null,A(v));v=C.clone[C.clone.length-1];e(C.scope,k,s,L,y,H,G)}else n(function(a,d){C.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,A(v));v=f;C.clone=a;E[C.id]=C;e(C.scope,k,s,L,y,H,G)});u=E})}}}}],oe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],he=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],pe=Ia(function(a,c,d){a.$watchCollection(d.ngStyle,
function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)})}),qe=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=tb(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}h.length=0;k.length=0;(g=
f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],re=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),se=Ia({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,
link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),ue=Ia({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw R("ngTransclude")("orphan",wa(c));f(function(a){c.empty();c.append(a)})}}),Vd=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],gg=R("ngOptions"),te=ea({restrict:"A",terminal:!0}),Wd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:E};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},n=e,p;l.databound=d.ngModel;l.init=function(a,c,d){n=a;p=d};l.addOption=function(c,d){La(c,'"option value"');k[c]=!0;n.$viewValue==c&&(a.val(c),p.parent()&&p.remove());d&&d[0].hasAttribute("selected")&&(d[0].selected=!0)};l.removeOption=function(a){this.hasOption(a)&&(delete k[a],n.$viewValue===a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c=
"? "+Ma(c)+" ?";p.val(c);a.prepend(p);a.val(c);p.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=E})}],link:function(e,g,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(C.parent()&&C.remove(),c.val(a),""===a&&v.prop("selected",!0)):x(a)&&v?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){C.parent()&&C.remove();d.$setViewValue(c.val())})})}function n(a,c,d){var e;
d.$render=function(){var a=new eb(d.$viewValue);r(c.find("option"),function(c){c.selected=y(a.get(c.value))})};a.$watch(function(){ha(e,d.$viewValue)||(e=sa(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function p(e,f,g){function h(a,c,d){T[x]=d;G&&(T[G]=c);return a(e,T)}function k(a){var c;if(u)if(I&&H(a)){c=new eb([]);for(var d=0;d<a.length;d++)c.put(h(I,null,a[d]),!0)}else c=
new eb(a);else I&&(a=h(I,null,a));return function(d,e){var f;f=I?I:B?B:z;return u?y(c.remove(h(f,d,e))):a===h(f,d,e)}}function l(){m||(e.$$postDigest(p),m=!0)}function n(a,c,d){a[c]=a[c]||0;a[c]+=d?1:-1}function p(){m=!1;var a={"":[]},c=[""],d,l,s,t,v;s=g.$viewValue;t=L(e)||[];var B=G?Object.keys(t).sort():t,x,A,H,z,O={};v=k(s);var N=!1,U,W;Q={};for(z=0;H=B.length,z<H;z++){x=z;if(G&&(x=B[z],"$"===x.charAt(0)))continue;A=t[x];d=h(J,x,A)||"";(l=a[d])||(l=a[d]=[],c.push(d));d=v(x,A);N=N||d;A=h(C,x,A);
A=y(A)?A:"";W=I?I(e,T):G?B[z]:z;I&&(Q[W]=x);l.push({id:W,label:A,selected:d})}u||(w||null===s?a[""].unshift({id:"",label:"",selected:!N}):N||a[""].unshift({id:"?",label:"",selected:!0}));x=0;for(B=c.length;x<B;x++){d=c[x];l=a[d];R.length<=x?(s={element:E.clone().attr("label",d),label:l.label},t=[s],R.push(t),f.append(s.element)):(t=R[x],s=t[0],s.label!=d&&s.element.attr("label",s.label=d));N=null;z=0;for(H=l.length;z<H;z++)d=l[z],(v=t[z+1])?(N=v.element,v.label!==d.label&&(n(O,v.label,!1),n(O,d.label,
!0),N.text(v.label=d.label),N.prop("label",v.label)),v.id!==d.id&&N.val(v.id=d.id),N[0].selected!==d.selected&&(N.prop("selected",v.selected=d.selected),Qa&&N.prop("selected",v.selected))):(""===d.id&&w?U=w:(U=F.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),t.push(v={element:U,label:d.label,id:d.id,selected:d.selected}),n(O,d.label,!0),N?N.after(U):s.element.append(U),N=U);for(z++;t.length>z;)d=t.pop(),n(O,d.label,!1),d.element.remove()}for(;R.length>
x;){l=R.pop();for(z=1;z<l.length;++z)n(O,l[z].label,!1);l[0].element.remove()}r(O,function(a,c){0<a?q.addOption(c):0>a&&q.removeOption(c)})}var v;if(!(v=s.match(d)))throw gg("iexp",s,wa(f));var C=c(v[2]||v[1]),x=v[4]||v[6],A=/ as /.test(v[0])&&v[1],B=A?c(A):null,G=v[5],J=c(v[3]||""),z=c(v[2]?v[1]:x),L=c(v[7]),I=v[8]?c(v[8]):null,Q={},R=[[{element:f,label:""}]],T={};w&&(a(w)(e),w.removeClass("ng-scope"),w.remove());f.empty();f.on("change",function(){e.$apply(function(){var a=L(e)||[],c;if(u)c=[],r(f.val(),
function(d){d=I?Q[d]:d;c.push("?"===d?t:""===d?null:h(B?B:z,d,a[d]))});else{var d=I?Q[f.val()]:f.val();c="?"===d?t:""===d?null:h(B?B:z,d,a[d])}g.$setViewValue(c);p()})});g.$render=p;e.$watchCollection(L,l);e.$watchCollection(function(){var a=L(e),c;if(a&&H(a)){c=Array(a.length);for(var d=0,f=a.length;d<f;d++)c[d]=h(C,d,a[d])}else if(a)for(d in c={},a)a.hasOwnProperty(d)&&(c[d]=h(C,d,a[d]));return c},l);u&&e.$watchCollection(function(){return g.$modelValue},l)}if(l[1]){var q=l[0];l=l[1];var u=h.multiple,
s=h.ngOptions,w=!1,v,m=!1,F=A(W.createElement("option")),E=A(W.createElement("optgroup")),C=F.clone();h=0;for(var B=g.children(),G=B.length;h<G;h++)if(""===B[h].value){v=w=B.eq(h);break}q.init(l,w,C);u&&(l.$isEmpty=function(a){return!a||0===a.length});s?p(e,g,l):u?n(e,g,l):k(e,g,l,q)}}}}],Yd=["$interpolate",function(a){var c={addOption:E,removeOption:E};return{restrict:"E",priority:100,compile:function(d,e){if(x(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=
d.parent(),n=k.data("$selectController")||k.parent().data("$selectController");n&&n.databound||(n=c);f?a.$watch(f,function(a,c){e.$set("value",a);c!==a&&n.removeOption(c);n.addOption(a,d)}):n.addOption(e.value,d);d.on("$destroy",function(){n.removeOption(e.value)})}}}}],Xd=ea({restrict:"E",terminal:!1}),Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},
Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){C(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw R("ngPattern")("noregexp",g,a,wa(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||x(f)||f.test(a)}}}}},Dc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});
e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Cc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Nd(),Pd(ca),A(W).ready(function(){Jd(W,uc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map
/**
 * State-based routing for AngularJS
 * @version v0.2.15
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return N(new(N(function(){},{prototype:a})),b)}function e(a){return M(arguments,function(b){b!==a&&M(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return M(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return N({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return M(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return M(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=L(a),d=c?[]:{};return M(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=L(a)?[]:{};return M(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=N(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,J(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);M(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return K(a)&&a.then&&a.$$promises}if(!K(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return M(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!H(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;M(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!K(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=N({},d),u=1+q.length/3,v=!1;if(H(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),N(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return H(a.template)?this.fromString(a.template,b):H(a.templateUrl)?this.fromUrl(a.templateUrl,b):H(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return I(a)?a(b):a},this.fromUrl=function(c,d){return I(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+(-+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new P.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:e=["?(",")?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),j=P.type(h||"string")||d(P.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)}),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=N({params:{}},K(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new P.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){N(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/\//g,"%2F"):a}function e(a){return null!=a?a.toString().replace(/%2F/g,"/"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return I(a)||L(a)&&I(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){N(this,a||{})}P=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!H(a)||"string"==typeof a},pattern:/[^/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return H(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return H(a)&&(m=a),m},this.strictMode=function(a){return H(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!H(a))return q;if(a!==!0&&a!==!1&&!J(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,N(f(),b))},this.isMatcher=function(a){if(!K(a))return!1;var b=!0;return M(r.prototype,function(c,d){I(c)&&(b=b&&H(a[d])&&I(a[d]))}),b},this.type=function(a,b,c){if(!H(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(N({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},M(x,function(a,b){u[b]=new s(N({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),M(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,b,d,e){function f(a){var b=K(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function j(b,c,d){if(b.type&&c)throw new Error("Param '"+a+"' has two type configurations.");return c?c:b.type?b.type instanceof s?b.type:new s(b.type):"config"===d?u.any:u.string}function k(){var b={array:"search"===e?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return N(b,c,d).array}function m(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!H(c)||null==c)return q;if(c===!0||J(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function p(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=L(a.replace)?a.replace:[],J(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function r(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(d.$$fn);if(null!==a&&a!==c&&!w.type.is(a))throw new Error("Default value ("+a+") for parameter '"+w.id+"' is not an instance of Type ("+w.type.name+")");return a}function t(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(w.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),H(a)?w.type.$normalize(a):r()}function v(){return"{Param:"+a+" "+b+" squash: '"+z+"' optional: "+y+"}"}var w=this;d=f(d),b=j(d,b,e);var x=k();b=x?b.$asArray(x,"search"===e):b,"string"!==b.name||x||"path"!==e||d.value!==c||(d.value="");var y=d.value!==c,z=m(d,y),A=p(d,x,y,z);N(this,{id:a,type:b,location:e,array:x,squash:z,replace:A,isOptional:y,value:t,dynamic:c,config:d,toString:v})},k.prototype={$$new:function(){return d(this,N(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),M(b,function(b){M(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return M(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return M(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return H(d)?d:!0}function h(d,e,f,g){function h(a,b,c){return"/"===p?a:b?p.slice(0,-1)+a:c?p.slice(1)+a:a}function m(a){function b(a){var b=a(f,d);return b?(J(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){o&&d.url()===o;o=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function n(){return i=i||e.$on("$locationChangeSuccess",m)}var o,p=g.baseHref(),q=d.url();return l||n(),{sync:function(){m()},listen:function(){return n()},update:function(a){return a?void(q=d.url()):void(d.url()!==q&&(d.url(q),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),o=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled);var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=h(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!I(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(J(a)){var b=a;a=function(){return b}}else if(!I(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=J(b);if(J(a)&&(a=d.compile(a)),!h&&!I(b)&&!L(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),N(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:J(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),N(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=J(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!J(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"'' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):J(b.parent)?b.parent:K(b.parent)&&J(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)I(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return J(a)&&!H(b)?C[a]:I(b)&&J(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return K(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return M(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(I(d.controllerProvider)||L(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,N({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=N({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!H(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!H(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,I=[];if(f.reload){if(J(f.reload)||K(f.reload)){if(K(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var L=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!L)throw new Error("No such reload state '"+(J(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==L;)G=I[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=I[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,O(y.params,n),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),p.update(),C;for(var M=e.when(G),P=D;P<z.length;P++,F=z[P])G=I[P]=d(G),M=v(F,c,F===b,M,G,f);var Q=y.transition=M.then(function(){var d,e,g;if(y.transition!==Q)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=I[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return r&&(c["#"]=r),y.transition!==Q?A:(y.$current=b,y.current=b.self,y.params=c,O(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)},function(d){return y.transition!==Q?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return Q},y.is=function(a,b,d){d=N({relative:y.$current},d||{});var e=m(a,d.relative);return H(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=N({relative:y.$current},d||{}),J(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return H(e)?H(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=N({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!H(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new P.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(H(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=N({},a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(J(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new P.ParamSet;return M(a.params||{},function(a,c){b[c]||(b[c]=new P.Param(c,null,a,"config"))}),b},params:function(a){return a.parent&&a.parent.params?N(a.parent.params.$$new(),a.ownParams):new P.ParamSet},views:function(a){var b={};return M(H(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?N({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(c,d){var e,f={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return d=N(f,d),d.view&&(e=b.fromConfig(d.view,d.params,d.locals)),e&&d.notify&&a.$broadcast("$viewContentLoading",d),e}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e){function f(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function g(a,b){var c=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(j)return{enter:function(a,b,c){var d=j.enter(a,null,b,c);d&&d.then&&d.then(c)},leave:function(a,b){var c=j.leave(a,b);c&&c.then&&c.then(b)}};if(i){var d=i&&i(b,a);return{enter:function(a,b,c){d.enter(a,null,b),c()},leave:function(a,b){d.leave(a),b()}}}return c()}var h=f(),i=h("$animator"),j=h("$animate"),k={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,f,h){return function(c,f,i){function j(){l&&(l.remove(),l=null),n&&(n.$destroy(),n=null),m&&(r.leave(m,function(){l=null}),l=m,m=null)}function k(g){var k,l=A(c,i,f,e),s=l&&a.$current&&a.$current.locals[l];if(g||s!==o){k=c.$new(),o=a.$current.locals[l];var t=h(k,function(a){r.enter(a,f,function(){n&&n.$emit("$viewContentAnimationEnded"),(b.isDefined(q)&&!q||c.$eval(q))&&d(a)}),j()});m=t,n=k,n.$emit("$viewContentLoaded"),n.$eval(p)}}var l,m,n,o,p=i.onload||"",q=i.autoscroll,r=g(i,c);c.$on("$stateChangeSuccess",function(){k(!1)}),c.$on("$viewContentLoading",function(){k(!1)}),k(!0)}}};return k}function z(a,b,c,d){return{restrict:"ECA",priority:-400,compile:function(e){var f=e.html();return function(e,g,h){var i=c.$current,j=A(e,h,g,d),k=i&&i.locals[j];if(k){g.data("$uiView",{name:j,state:k.$$state}),g.html(k.$template?k.$template:f);var l=a(g.contents());if(k.$$controller){k.$scope=e,k.$element=g;var m=b(k.$$controller,k);k.$$controllerAs&&(e[k.$$controllerAs]=m),g.data("$ngControllerController",m),g.children().data("$ngControllerController",m)}l(e)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a,c){var d=["location","inherit","reload","absolute"];return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(e,f,g,h){var i=B(g.uiSref,a.current.name),j=null,k=C(f)||a.$current,l="[object SVGAnimatedString]"===Object.prototype.toString.call(f.prop("href"))?"xlink:href":"href",m=null,n="A"===f.prop("tagName").toUpperCase(),o="FORM"===f[0].nodeName,p=o?"action":l,q=!0,r={relative:k,inherit:!0},s=e.$eval(g.uiSrefOpts)||{};b.forEach(d,function(a){a in s&&(r[a]=s[a])});var t=function(c){if(c&&(j=b.copy(c)),q){m=a.href(i.state,j,r);var d=h[1]||h[0];return d&&d.$$addStateInfo(i.state,j),null===m?(q=!1,!1):void g.$set(p,m)}};i.paramExpr&&(e.$watch(i.paramExpr,function(a,b){a!==j&&t(a)},!0),j=b.copy(e.$eval(i.paramExpr))),t(),o||f.bind("click",function(b){var d=b.which||b.button;if(!(d>1||b.ctrlKey||b.metaKey||b.shiftKey||f.attr("target"))){var e=c(function(){a.go(i.state,j,r)});b.preventDefault();var g=n&&!m?1:0;b.preventDefault=function(){g--<=0&&c.cancel(e)}}})}}}function E(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs",function(b,d,e){function f(){g()?d.addClass(i):d.removeClass(i)}function g(){for(var a=0;a<j.length;a++)if(h(j[a].state,j[a].params))return!0;return!1}function h(b,c){return"undefined"!=typeof e.uiSrefActiveEq?a.is(b.name,c):a.includes(b.name,c)}var i,j=[];i=c(e.uiSrefActiveEq||e.uiSrefActive||"",!1)(b),this.$$addStateInfo=function(b,c){var e=a.get(b,C(d));j.push({state:e||{name:b},params:c}),f()},b.$on("$stateChangeSuccess",f)}]}}function F(a){var b=function(b){return a.is(b)};return b.$stateful=!0,b}function G(a){var b=function(b){return a.includes(b)};return b.$stateful=!0,b}var H=b.isDefined,I=b.isFunction,J=b.isString,K=b.isObject,L=b.isArray,M=b.forEach,N=b.extend,O=b.copy;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var P;r.prototype.concat=function(a,b){var c={caseInsensitive:P.caseInsensitive(),strict:P.strictMode(),squash:P.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,N(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");for(e=0;j>e;e++){g=h[e];var l=this.params[g],m=d[e+1];for(f=0;f<l.replace;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),k[g]=l.value(m)}for(;i>e;e++)g=h[e],k[g]=this.params[g].value(b[g]);return k},r.prototype.parameters=function(a){return H(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1];if(q===!1)null!=r&&(j+=L(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var t=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(t)[1]}else J(q)&&(j+=q+s)}else{if(null==r||p&&q!==!1)continue;L(r)||(r=[r]),r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return L(a)?a:H(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").value("$stateParams",{}).provider("$state",v),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),D.$inject=["$state","$timeout"],E.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",D).directive("uiSrefActive",E).directive("uiSrefActiveEq",E),F.$inject=["$state"],G.$inject=["$state"],b.module("ui.router.state").filter("isState",F).filter("includedByState",G)}(window,window.angular);
var teamList = angular.module('teamList', ['ui.router']);

teamList.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('lists', {
            url: '/lists/:listId?/:taskId?',
            templateUrl: 'partials/lists.html',
            controller: 'MainCtrl',
            reloadOnSearch: false
        });

    $urlRouterProvider.otherwise('/lists/');
});

angular.module('teamList')
.controller('ListsCtrl', ['$scope', '$location', 'ListService', ListsCtrl]);
function ListsCtrl($scope, $location, ListService) {
  console.log('listsctrl');
  var selectedList;
  $scope.lists = ListService.lists;

$scope.updateName = ListService.updateList.bind(null, 'name');
$scope.addList = function(e) {
  e.preventDefault();
  ListService.addList($scope.newListName);
  $scope.newListName = '';
};
$scope.selectList = function(list, changeUrl, keepNotifs) {
  if (selectedList === list) {
    return;
  }
  console.info('select list: ' + list.name);
  selectedList = list;
  ListService.selectList(list._id, changeUrl, keepNotifs);
};
$scope.isListSelected = function(list) {
  return selectedList === list;
};
$scope.deleteList = function(e, list) {
  console.info('delete list: ' + list.name);
  e.stopPropagation();
  ListService.deleteList(list._id, $scope.isListSelected(list));
};
$scope.shareList = function(e, list) {
  console.info('share list ' + list.name);
  e.stopPropagation();
  ListService.shareList(list._id);
};
$scope.updateList = function(propName, list) {
  ListService.updateList(propName, list);
};
$scope.toggleListNameEditMode = function(e, list) {
  e.stopPropagation();
  $scope.listNameEditMode = $scope.listNameEditMode === list ? null : list;
  if ($scope.listNameEditMode) {
    setTimeout(function() {
      var el = document.querySelector('[contenteditable="true"]');
      el.click();
      el.focus();
    }, 0);
  }
};

ListService.downloadListsAsync()
  .then(function() {
    if ($scope.pendingUrlParamListId) {
      $scope.selectList($scope.lists[$scope.pendingUrlParamListId], false, true);
      $scope.pendingUrlParamListId = undefined;
    }
  });

}

angular.module('teamList')
.controller('MainCtrl', ['UserService', '$scope', '$location', '$http', '$stateParams', 'NotifService', MainCtrl]);
function MainCtrl(UserService, $scope, $location, $http, $stateParams, NotifService) {
  console.log('mainctrl');
  $scope.pendingUrlParamListId = $stateParams.listId;
  $scope.pendingUrlParamTaskId = $stateParams.taskId;
  $scope.user = UserService.user;
  $scope.notifs = NotifService.notifs;
  $scope.removeAllNotifs = NotifService.removeAllNotifs;
  $scope.removeNotif = function(e, notifId) {
    e.stopPropagation();
    NotifService.removeNotifById(notifId);
  };

  UserService.downloadUser();

  $scope.toggleAllowSharing = UserService.toggleAllowSharing;
}

angular.module('teamList')
.controller('TasksCtrl', ['TaskService', '$scope', '$location', '$stateParams', TasksCtrl]);
function TasksCtrl(TaskService, $scope, $location, $stateParams) {
  console.log('tasksCtrl');
  $scope.currentListId = '';
  $scope.selectedTask = undefined;
  $scope.taskNameEditMode = false;
  $scope.tasks = TaskService.tasks;
  $scope.taskFilterProp = '_id';

  $scope.updateName = TaskService.updateName;
  $scope.updateComment = TaskService.updateComment;
  $scope.deleteSubtask = TaskService.deleteSubtask;
  $scope.changeTaskCompletedStatus = TaskService.updateCompleted;
  $scope.toggleShowOnlyCompleted = function() {
    $scope.taskFilterProp = $scope.taskFilterProp === 'completed'?'_id':'completed';
  };
  $scope.addTask = function(e) {
    e.preventDefault();
    TaskService.addTask($scope.currentListId, $scope.newTaskName);
    $scope.newTaskName = '';
  };
  $scope.deleteTask = function(e, task) {
    e.stopPropagation();
    TaskService.deleteTask(task._id, $scope.isTaskSelected(task));
    if ($scope.isTaskSelected(task)) {
      $scope.selectedTask = null;
    }
  };
  $scope.selectTask = function(task, changeUrl) {
    if (typeof task === 'string') {
      $scope.selectedTask = $scope.tasks[task];
    } else if (task) {
      $scope.selectedTask = task;
    }
    TaskService.selectTask(task, changeUrl);
    console.log();
  };
  $scope.unselectTask = function(e) {
    if(e.target === e.currentTarget) {
      $scope.selectTask({_id:'reset'}, true);
    }
  }
  $scope.isTaskSelected = function(task) {
    return $scope.selectedTask === task;
  };
  $scope.addSubtask = function() {
    TaskService.addSubtask($scope.newSubtaskName);
    $scope.newSubtaskName = '';
  };
  $scope.changeSubtaskCompletedStatus = function() {
    TaskService.updateTask('subtasks');
  };
  $scope.deleteAttachment = function(attachment) {
    TaskService.deleteAttachment(attachment);
  };
  $scope.toggleTaskNameEditMode = function(e, task) {
    e.stopPropagation();
    $scope.taskNameEditMode = $scope.taskNameEditMode === task ? null : task;
    if ($scope.taskNameEditMode) {
      setTimeout(function() {
        var el = document.querySelector('[contenteditable="true"]');
        el.click();
        el.focus();
      }, 0);
    }
  };

  $scope.$on('listSelected', function(event, args) {
    $scope.tasks = {};
    for (var task of args.tasks) {
      $scope.tasks[task._id] = task;
    }
    TaskService.tasks = $scope.tasks;
    $scope.currentListId = args._id;
    TaskService.currentListId = $scope.currentListId;
    $scope.selectedTask = null;
    if ($scope.pendingUrlParamTaskId) {
      $scope.selectTask($scope.pendingUrlParamTaskId, false);
      $scope.pendingUrlParamTaskId = '';
    }
    $scope.$apply();
  });

}

angular.module('teamList')
  .directive('angularRipple', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var x, y, size, offsets,
          func = function(e) {
            var ripple = this.querySelector('.angular-ripple');
            var eventType = e.type;
            // if (ripple === null) {
            if (!ripple) {
              ripple = document.createElement('span');
              ripple.className += ' angular-ripple';

              this.insertBefore(ripple, this.firstChild);

              if (!ripple.offsetHeight && !ripple.offsetWidth) {
                size = Math.max(element[0].offsetWidth, element[0].offsetHeight);
                ripple.style.width = size + 'px';
                ripple.style.height = size + 'px';
              }
            }

            ripple.className = ripple.className.replace(/ ?(animate)/g, '');

            if (eventType === 'mouseup') {
              x = e.pageX;
              y = e.pageY;
            } else if (eventType === 'touchend') {
              try {
                var origEvent;

                if (typeof e.changedTouches !== 'undefined') {
                  origEvent = e.changedTouches[0];
                } else {
                  origEvent = e.originalEvent;
                }

                x = origEvent.pageX;
                y = origEvent.pageY;
              } catch (e) {
                x = ripple.offsetWidth / 2;
                y = ripple.offsetHeight / 2;
              }
            }

            function getPos(element) {
              var de = document.documentElement;
              var box = element.getBoundingClientRect();
              var top = box.top + window.pageYOffset - de.clientTop;
              var left = box.left + window.pageXOffset - de.clientLeft;
              return {
                top: top,
                left: left
              };
            }

            offsets = getPos(element[0]);
            ripple.style.left = (x - offsets.left - size / 2) + 'px';
            ripple.style.top = (y - offsets.top - size / 2) + 'px';

            ripple.className += ' animate';
          };

        element.on('touchend mouseup', func);

        scope.$on('$destroy', function() {
          element.off('touchend mouseup', func);
        });
      }
    };
  });

angular.module('teamList')
  .directive('contenteditable', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        function read() {
          ngModel.$setViewValue(element.html());
        }
        ngModel.$render = function() {
          element.html(ngModel.$viewValue || '');
        };

        element.bind('keyup change', onKeyUp);
        function onKeyUp(event) {
          scope.$apply(read);
        }

        element.bind('keydown keypress', onKeyPress);
        function onKeyPress(event) {
          var keyCode = event.which || event.keyCode;
          if (keyCode === 13) {
            event.preventDefault();
            scope[attrs['toggle']](event);
          }
        }

        element.bind('blur', onBlur);
        function onBlur(event) {
          scope.$apply(function(){scope[attrs['toggle']](event);});
          scope[attrs['edit']](attrs['elemid']);
        }

        element.on('$destroy', function() {
          element.unbind('blur', onBlur);
          element.unbind('keydown keypress', onKeyPress);
          element.unbind('keyup change', onKeyUp);
        });

      }
    };
  });

angular.module('teamList')
  .directive('fileInput', ['$parse', 'HandlerService', 'FilesService', function($parse, HandlerService, FilesService) {
    return {
      restrict: 'A',
      // scope: true,
      link: function(scope, elem, attrs) {
        var input = elem.find('input'),
            dropzone = elem.find('label');
            thumbnailImg = elem.find('img')[0],
            _files = FilesService.files,
            dropzoneDefaultText = '<strong>Drag file</strong> here or <strong>click to choose</strong> one';
        FilesService.onUploaded = onUploaded;
        changeDropzoneText();

        elem.bind('submit', onSubmit);
        input.bind('change', onInputChange);
        dropzone.bind('drag dragstart dragend dragover dragenter dragleave drop', dropZonePrevent);
        dropzone.bind('dragover dragenter', onDragOver);
        dropzone.bind('dragleave dragend drop', onDragLeave);
        dropzone.bind('drop', onDrop);

        function onInputChange(e) {
          handleFile(input[0].files[0]);
        }
        function dropZonePrevent(e) {
          e.preventDefault();
          e.stopPropagation();
        }
        function onDragOver() {
          dropzone[0].classList.add('dragover');
        }
        function onDragLeave() {
          dropzone[0].classList.remove('dragover');
        }
        function onDrop(e) {
          handleFile(e.dataTransfer.files[0]);
        }
        function handleFile(file) {
          if (!file) {
            thumbnailImg.classList.remove('visible');
            _files.length = 0;
            changeDropzoneText();
            return;
          }
          console.log(file.size);
          if (file.size > 100000000) {
            HandlerService.handleError({err: 'the files\'s size must be under 100 Mb'});
            return input[0].value = '';
          }
          _files.length = 0;
          _files[0] = file;
          var reader = new FileReader();
          reader.onload = function(event) {
            if (!event.target.result.includes('data:image')) {
              return;
            }
            thumbnailImg.src = event.target.result;
            thumbnailImg.classList.add('visible');
          }
          reader.readAsDataURL(file);
          changeDropzoneText(file.name);
          scope.$apply();
        }
        function onSubmit(e) {
          e.preventDefault();
          FilesService.upload()
        }
        function onUploaded() {
          elem[0].reset();
          thumbnailImg.classList.remove('visible');
          _files.length = 0;
          changeDropzoneText();
        }
        function changeDropzoneText(text) {
          dropzone[0].innerHTML = text || dropzoneDefaultText;
        }

        input.on('$destroy', function() {
          elem.unbind('submit', onSubmit);
          input.unbind('change', onInputChange);
          dropzone.unbind('drag dragstart dragend dragover dragenter dragleave drop', dropZonePrevent);
          dropzone.unbind('dragover dragenter', onDragOver);
          dropzone.unbind('dragleave dragend drop', onDragLeave);
          dropzone.unbind('drop', onDrop);
        });
      }
    };
  }]);

angular.module('teamList')
.directive('kebab', function($document) {
	return {
		restrict: "E",
		link: function(scope, elem, attr) {

			elem.bind('click', onElemClick);
      function onElemClick(event) {
        event.stopPropagation();
				elem.toggleClass('dropdown-active');
				elem.addClass('active-recent');
			}

			$document.bind('click', onDocClick);
      function onDocClick(event) {
        event.stopPropagation();
				// if(!elem.hasClass('active-recent')) {
				// 	elem.removeClass('dropdown-active');
				// }
				elem.removeClass('dropdown-active');
				elem.removeClass('active-recent');
			}

      elem.on('$destroy', function() {
        elem.unbind('click', onElemClick);
        $document.unbind('click', onDocClick);
      });

		}
	};
});

angular.module('teamList')
.directive('taskSearch', ['TaskService', function (TaskService) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        var input = element.find('input');
        var closeBtn = element.find('button');


        input.bind("keydown", onKeyPress);
        function onKeyPress(event) {
          var keycode = event.which || event.keyCode;
          if (keycode === 13) {
            event.preventDefault();
            input[0].blur();
          }
          if(input[0].value.length > 0) {
            setTimeout(function() {
              TaskService.searchForTasks(input[0].value);
            }, 0);
          } else if(input[0].value.length <= 0) {
            setTimeout(function() {
              TaskService.stopSearching();
            }, 0);
          }
        }

        closeBtn.bind('click', onClose);
        function onClose(event) {
          input[0].value = '';
          TaskService.stopSearching();
        }

        element.on('$destroy', function() {
          input.unbind('keydown keypress', onKeyPress);
          closeBtn.unbind('click', onClose);
        });

      }
    };
}]);

angular.module('teamList')
.filter('reverseObject', function(){
 return function(input) {
    if (!angular.isObject(input)) return input;

    var array = [];
    for(var objectKey in input) {
        array.push(input[objectKey]);
    }
    array.reverse();
    return array;
 };
});

angular.module('teamList')
  .service('BroadcastService', function($rootScope) {
    this.send = function(msg, data) {
      $rootScope.$broadcast(msg, data);
    };
  });

angular.module('teamList')
  .service('FilesService', function() {
    this.files = [];
    this.onUpload = undefined;
    this.onUploaded = undefined;
  });

angular.module('teamList')
  .service('HandlerService',
    function() {
      var msgBox = document.getElementById('msgBox'),
          msgShowtime = 3000,
          msgTimeout;
      this.handleError = function(err) {
        if (!err) {
          return;
        }
        console.log(err);
        clearTimeout(msgTimeout);
        msgBox.classList.remove('success');
        msgBox.classList.add('err');
        var errMsg = typeof err === 'string'?err:err.msg||err.message||err.err||'some error occured';
        msgBox.innerHTML = errMsg;
        disableMsg();
      };
      this.handleSuccess = function(msg) {
        if (!msg) {
          return;
        }
        clearTimeout(msgTimeout);
        msgBox.classList.remove('err');
        msgBox.classList.add('success');
        msgBox.innerHTML = msg.msg || msg.message || 'changes saved';
        disableMsg();
      };
      function disableMsg() {
        msgTimeout = setTimeout(msgBox.classList.remove.bind(msgBox.classList, 'err', 'success'), msgShowtime);
      }
    }
  );

angular.module('teamList')
  .service('ListService', ['$q', '$timeout', 'SocketService', 'BroadcastService', '$state', '$rootScope', 'HandlerService', 'NotifService',
    function($q, $timeout, SocketService, BroadcastService, $state, $rootScope, HandlerService, NotifService) {
      console.info('list service');
      this.lists = {};
      NotifService.lists = this.lists;
      var that = this;

      this.downloadListsAsync = function() {
        return $q(function(resolve, reject) {
          SocketService.emit('getLists', {}, function(data) {
            if (data.err) {
              HandlerService.handleError(data.err);
              return reject();
            }
            Object.assign(that.lists, data);
            NotifService.getListsNotifs();
            // $rootScope.$apply();
            return resolve();
          });

        });
      };

      this.addList = function(newListName) {
        if (!newListName) {
          return;
        }
        SocketService.emit('addList', {
          newListName: newListName
        }, function(data) {
          if (data.err) {
            return HandlerService.handleError(data.err);
          }
          that.lists[data._id] = data;
          $rootScope.$apply();
        });
      };

      this.selectList = function(id, changeUrl, keepNotifs) {
        that.selectedList = that.lists[id];
        SocketService.emit('getList', {
          listId: id
        }, function(data) {
          if (data.err) {
            return HandlerService.handleError(data.err);
          }
          if (changeUrl) {
            $state.go('lists', {
              listId: id,
              taskId: undefined
            }, {
              notify: false,
              reload: false
            });
          }
          BroadcastService.send('listSelected', data);
          if(!keepNotifs && that.lists[id].notif) {
            NotifService.removeItemNotifs(id);
          }
          $rootScope.$apply();
        });
      };

      this.deleteList = function(id, resetUrl) {
        if (!confirm("are you sure you want to delete this list?")) {
          return;
        }
        SocketService.emit('deleteList', {
          listId: id
        }, function(data) {
          if (data.err) {
            return HandlerService.handleError(data.err);
          }
          delete that.lists[id];
          if (resetUrl) {
            $state.go('lists', {
              listId: undefined,
              taskId: undefined
            }, {
              notify: false,
              reload: false
            });
            resetTasks();
          }
          $rootScope.$apply();
        });
      };

      this.shareList = function(listId) {
        var mate = window.prompt('name of the user you want to share this list with');
        if (!mate) {
          return;
        }
        SocketService.emit('shareList', {
          listId: listId,
          mate: mate
        }, function(data) {
          if (data.err) {
            return HandlerService.handleError(data.err);
          }
          HandlerService.handleSuccess(data);
        });
      };

      this.updateList = function updateList(propName, list) {
        if (typeof list === 'string') {
          list = that.lists[list];
        }
        if (!list) {
          return;
        }
        var reqBody = {};
        reqBody[propName] = list[propName];
        SocketService.emit('editList', {
          listId: list._id,
          body: reqBody
        }, function(data) {
          if (data.err) {
            return HandlerService.handleError(data.err);
          }
          HandlerService.handleSuccess(data);
        });
      };

      NotifService.subscribeListOnNotif('listUpdated', function(data) {
        console.info('listUpdated');
        var list = that.lists[data.listId];
        Object.assign(list, data.body);
        $rootScope.$apply();
      });
      NotifService.subscribeListOnNotif('listShared', function(data) {
        console.info('listShared');
        that.lists[data._id] = data;
        SocketService.emit('enterListRoom', {listId: data._id});
        $rootScope.$apply();
      });
      NotifService.subscribeListOnNotif('listDeleted', function(data) {
        console.info('listDeleted');
        if (that.lists[data.listId]) {
          delete that.lists[data.listId];
        }
        $rootScope.$apply();
      });
      NotifService.subscribeListOnNotif('sharedListsDeleted', function(data) {
        //this one fires when user removes all the lists that has been shared w/ them
        console.info('sharedListsDeleted');
        var username = $rootScope.username;
        for (var list in that.lists) {
          if (that.lists[list].author !== username) {
            delete that.lists[list];
          }
        }
        $rootScope.$apply();
      });

      function resetTasks() {
        BroadcastService.send('listSelected', {tasks: []});
      }

    }
  ]);

angular.module('teamList')
  .service('NotifService', ['SocketService', 'HandlerService', '$rootScope',
    function(SocketService, HandlerService, $rootScope) {
      console.log('NotifService instantiated');
      this.notifs = {};
      var that = this;


      this.getListsNotifs = function() {
        SocketService.emit('getNotifs', {}, function(data) {
          if(data.err) {
            return HandlerService.handleError(data.err);
          }
          for (var notif of data) {
            if(that.lists[notif.type === 'list'] && notif.listId) {
              that.lists[notif.listId].notif = notif._id;
            }
            that.notifs[notif._id] = notif;
          }
          $rootScope.$apply();
        });
      };

      this.subscribeListOnNotif = function(notifName, callback) {
        SocketService.on(notifName, function(data) {
          if(data.notif) {
            that.notifs[data.notif._id] = data.notif;
            if (that.lists[data.notif.listId]) {
              that.lists[data.notif.listId].notif = data.notif._id;
            }
          }
          callback(data);
        });
      };

      this.subscribeTaskOnNotif = function(notifName, callback) {
        SocketService.on(notifName, function(data) {
          if(data.notif) {
            that.notifs[data.notif._id] = data.notif;
            // if (that.tasks[data.notif.taskId]) {
            //   that.tasks[data.notif.taskId].notif = data.notif._id;
            // }
          }
          callback(data);
        });
      };


      this.removeNotifById = function(notifId) {
        removeNotif({_id: notifId});
        delete that.notifs[notifId];
      };

      this.removeItemNotifs = function(listId) {
        var list = that.lists[listId];
        list.notif = false;
        for (var notif in that.notifs) {
          if (that.notifs[notif].listId === list._id) {
            delete that.notifs[notif];
          }
        }
        removeNotif({listId: listId});
      };

      this.removeAllNotifs = function(e) {
        e.stopPropagation();
        removeNotif({});
        for (var prop in that.notifs) {
          delete that.notifs[prop];
        }
        $rootScope.$apply();
      };

      function removeNotif(body) {
        SocketService.emit('removeNotif', body, function(data) {
          if(data.err) {
            return console.log('problems w/ removing notif ', data.err);
          }
          $rootScope.$apply();
        });

      }

    }]
  );

angular.module('teamList')
  .service('SocketService',
    function() {
      var socket = io();
      console.log('SocketService instantiated');
      this.emit = function(path, obj, callback) {
        socket.emit(path, obj, callback);
      };
      this.on = function(eventName, callback) {
        socket.on(eventName, callback);
      };
    }
  );

angular.module('teamList')
.service('TaskService', ['$q', 'SocketService', '$state', '$http', '$rootScope', 'HandlerService', 'FilesService', 'NotifService',
  function($q, SocketService, $state, $http, $rootScope, HandlerService, FilesService, NotifService) {
    console.log('TaskService');

    var nameUpdateTimeoutToken,
        commentUpdateTimeoutToken,
        tasksSearchTimeoutToken,
        cachedTasks = {},
        that = this;
    this.tasks = {};
    this.searchMode = false;
    this.files = FilesService.files;



    this.addTask = function(currentListId, newTaskName) {
      if (!newTaskName) {
        return;
      }
      SocketService.emit('addTask', {
        listId: that.currentListId,
        newTaskName: newTaskName
      }, function(data) {
        if (data.err) {
          return HandlerService.handleError(data.err);
        }
        that.tasks[data._id] = data;
        $rootScope.$apply();
      });
    };

    this.deleteTask = function(taskId, changeUrl) {
      var taskName = that.tasks[taskId].name;
      SocketService.emit('deleteTask', {
        taskId: taskId,
        taskName: taskName
      }, function(data) {
        if (data.err) {
          return HandlerService.handleError(data.err);
        }
        delete that.tasks[taskId];
        if (changeUrl) {
          $state.go('lists', {
            taskId: undefined
          }, {
            notify: false,
            reload: false
          });
        }
        $rootScope.$apply();
      });
    };

    this.selectTask = function(taskId, changeUrl) {
      if(taskId instanceof Object) {
        taskId = taskId._id;
      }
      if (!taskId) {
        return;
      }
      that.selectedTask = that.tasks[taskId];
      if (changeUrl) {
        $state.go('lists', {
          taskId: taskId
        }, {
          notify: false,
          reload: false
        });
      }
    };

    this.updateName = function(taskId) {
      clearTimeout(nameUpdateTimeoutToken);
      nameUpdateTimeoutToken = setTimeout(that.updateTask.bind(this, 'name', taskId), 1500);
    };

    this.updateComment = function() {
      clearTimeout(commentUpdateTimeoutToken);
      commentUpdateTimeoutToken = setTimeout(that.updateTask.bind(this, 'comment'), 1500);
    };

    this.updateCompleted = function(e, task) {
      e.stopPropagation();
      that.updateTask('completed', task);
    };

    this.addSubtask = function(newSubtaskName) {
      if (!newSubtaskName) {
        return;
      }
      that.selectedTask.subtasks.push({
        name: newSubtaskName,
        completed: false
      });
      that.updateTask('subtasks');
    };

    this.deleteSubtask = function(subtask) {
      var index = that.selectedTask.subtasks.indexOf(subtask);
      that.selectedTask.subtasks.splice(index, 1);
      that.updateTask('subtasks');

    };

    this.updateTask = function(propName, task) {
      if (typeof task === 'string') {
        task = that.tasks[task];
      }
      if (!task) {
        task = that.selectedTask;
      }
      var reqBody = {};
      reqBody[propName] = task[propName];
      SocketService.emit('editTask', {
        taskId: task._id,
        body: reqBody
      }, function(data) {
        if (data.err) {
          return HandlerService.handleError(data.err);
        }
        HandlerService.handleSuccess(data);
      });
    };

    this.getTask = function(taskId) {
      SocketService.emit('getTask', {taskId: taskId}, function(data) {
        //todo check if data.listId === selectedList._id
        if(data.err) {
          HandlerService.handleError(data.err);
        }
        if(that.selectedTask && that.selectedTask._id === data._id) {
          Object.assign(that.selectedTask, data);
        } else {
          that.tasks[taskId] = data;
        }
        $rootScope.$apply();
      })
    }

    this.uploadAttachment = FilesService.upload = function() {
      if (!that.files) {
        return;
      }
      var fd = new FormData();
      angular.forEach(that.files, function(file) {
        fd.append('file', file);
      });
      $http.post('/files/' + that.selectedTask._id, fd, {
          transformRequest: angular.identity,
          headers: {
            'Content-Type': undefined
          }
        })
        .success(function(data) {
          if(data.err) {
            return HandlerService.handleError(data.err);
          }
          that.selectedTask.attachments.push(data);
          if (FilesService.onUploaded) {
            FilesService.onUploaded();
          }
          $rootScope.$apply();
        });
    };

    this.deleteAttachment = function(attachment) {
      SocketService.emit('deleteFile', {
        filename: attachment.filename
      }, function(data) {
        if (data.err) {
          return HandlerService.handleError(data.err);
        }
        that.selectedTask.attachments.splice(that.selectedTask.attachments.indexOf(attachment), 1);
        $rootScope.$apply();
      });
    };

    this.searchForTasks = function(query) {
      console.log(query);
      that.searchMode = true;
      clearTimeout(tasksSearchTimeoutToken);
      tasksSearchTimeoutToken = setTimeout(function() {
        SocketService.emit('searchForTasks', query, function(data) {
          if(data.err) {
            return HandlerService.handleError(data.err);
          }
          console.log(data);
          Object.assign(cachedTasks, that.tasks);
          for (var prop in that.tasks) {
            delete that.tasks[prop];
          }
          Object.assign(that.tasks, data);
          $rootScope.$apply();
        })
      }, 0)
    };

    this.stopSearching = function() {
      if (!that.searchMode) {
        return;
      }
      that.searchMode = false;
      for (var prop in that.tasks) {
        delete that.tasks[prop];
      }
      Object.assign(that.tasks, cachedTasks);
      cachedTasks = {};
      $rootScope.$apply();
    };

    NotifService.subscribeTaskOnNotif('taskUpdated', function(data) {
      console.info('taskUpdated');
      if(that.tasks[data.taskId]) {
        that.getTask(data.taskId);
      }
    });
    NotifService.subscribeTaskOnNotif('taskAdded', function(data) {
      console.info('taskAdded');
      if(that.currentListId === data.listId) {
        that.getTask(data.taskId);
      }
    });
    NotifService.subscribeTaskOnNotif('taskDeleted', function(data) {
      console.info('taskDeleted');
      if (that.tasks[data.taskId]) {
        delete that.tasks[data.taskId];
      }
      $rootScope.$apply();
    });

  }
]);

angular.module('teamList')
  .service('UserService', ['SocketService', '$q', '$rootScope', 'HandlerService',
    function(SocketService, $q, $rootScope, HandlerService) {
      this.user = {};
      var user = this.user;

      this.downloadUser = function() {
        SocketService.emit('getUser', {}, function(data) {
          if (data.err) {
            return HandlerService.handleError(data.err);
          }
          Object.assign(user, data);
          $rootScope.username = user.username;
        });
      };

      this.toggleAllowSharing = function(e) {
        e.stopPropagation();
        if (user.settings.allowSharing === false && confirm('remove all the lists that had already been shared with you?')) {
          SocketService.emit('stopWatchingLists', {}, function(data) {
            if (data.err) {
              return HandlerService.handleError(data.err);
            }
            HandlerService.handleSuccess(data);
          });
        }
        updateUserPreferences('allowSharing');
      };

      function updateUserPreferences(propName) {
        var reqBody = {};
        reqBody[propName] = user.settings[propName];
        SocketService.emit('changeUserSettings', {
          body: reqBody
        }, function(data) {
          if (data.err) {
            return HandlerService.handleError(data.err);
          }
          HandlerService.handleSuccess(data);
        });
      }
    }
  ]);
})()