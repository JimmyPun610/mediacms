!function(){"use strict";var e,t={5579:function(e,t,n){var r=n(2541),i=n(5020);(0,r.X)("page-home",i.HomePage)},8897:function(e,t,n){n.r(t),n.d(t,{InlineSliderItemListAsync:function(){return p}}),n(2070),n(2004),n(8407),n(6394),n(8288),n(5677),n(2129),n(4655),n(288),n(4458),n(3675),n(4517),n(9751),n(8833),n(815),n(5090),n(9174);var r=n(5466),i=n(8578),o=n(2546),a=n(8982),u=n(2832),l=n(5663),s=n(8986);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e){var t,n,a=(0,o.useLayout)().visibleSidebar,c=(t=(0,o.useItemListInlineSlider)(e),n=13,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){u=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=c[0],d=c[1],p=c[2],y=c[3],v=c[4],h=c[5],b=c[6],O=c[7],w=c[8],P=c[9],I=c[10],S=c[11],j=c[12];return(0,r.useEffect)((function(){w()}),[a]),(0,r.useEffect)((function(){return v(new s.g(e.pageItems,e.maxItems,e.firstItemRequestUrl,e.requestUrl,h,b)),i.PageStore.on("window_resize",O),function(){i.PageStore.removeListener("window_resize",O),p&&(p.cancelAll(),v(null))}}),[]),d?f.length?r.createElement("div",{className:y.listOuter},S(),r.createElement("div",{ref:P,className:"items-list-wrap"},r.createElement("div",{ref:I,className:y.list},f.map((function(t,n){return r.createElement(l.H,m({key:n},(0,l.j)(e,t,n)))})))),j()):null:r.createElement(u.K,{className:y.listOuter})}p.propTypes=f({},a.ItemListAsync.propTypes),p.defaultProps=f(f({},a.ItemListAsync.defaultProps),{},{pageItems:12})},8982:function(e,t,n){n.r(t),n.d(t,{ItemListAsync:function(){return y}}),n(2070),n(2004),n(8407),n(6394),n(8288),n(5677),n(2129),n(4655),n(288),n(4458),n(3675),n(4517),n(9751),n(8833),n(815),n(5090),n(9174);var r=n(5466),i=n(3074),o=n.n(i),a=n(2546),u=n(7777),l=n(2832),s=n(5663),c=n(8986);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e){var t,n,i=(t=(0,a.useItemListSync)(e),n=11,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){u=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=i[0],u=i[1],f=i[2],d=i[3],m=i[4],y=i[5],v=i[6],h=i[7],b=i[8],O=i[9],w=i[10];return(0,r.useEffect)((function(){return d(new c.g(e.pageItems,e.maxItems,e.firstItemRequestUrl,e.requestUrl,h,b)),function(){f&&(f.cancelAll(),d(null))}}),[]),o?u.length?r.createElement("div",{className:m.listOuter},O(),r.createElement("div",{ref:y,className:"items-list-wrap"},r.createElement("div",{ref:v,className:m.list},u.map((function(t,n){return r.createElement(s.H,g({key:n},(0,s.j)(e,t,n)))})))),w()):null:r.createElement(l.K,{className:m.listOuter})}y.propTypes=d(d({},u.s.propTypes),{},{items:o().array,requestUrl:o().string.isRequired,firstItemRequestUrl:o().string}),y.defaultProps=d(d({},u.s.defaultProps),{},{requestUrl:null,firstItemRequestUrl:null,pageItems:24})},8986:function(e,t,n){n.d(t,{g:function(){return o}});var r=n(8578),i=n(473);function o(e,t,n,o,a,u){var l={maxItems:t||255,pageItems:e?Math.min(t,e):1},s={totalItems:0,totalPages:0,nextRequestUrl:(0,i.formatInnerLink)(o,r.PageStore.get("config-site").url)},c={pageItems:0,requestResponse:!1},f=null,d=[],m=[];function g(e){var t,n;if(e=isNaN(e)?l.pageItems:e,c.pageItems&&c.pageItems<=m.length?(t=c.pageItems,n=!1,c.pageItems=0):(t=Math.min(e,m.length),n=e>m.length&&!!s.nextRequestUrl,c.pageItems=n?e-m.length:0),t){for(var r=0;r<t;)d.push(m.shift()),r+=1;"function"==typeof u&&u(d)}n&&p()}function p(e){c.requestResponse=!0,(0,i.getRequest)(s.nextRequestUrl,!1,(function(t){if(c.requestResponse=!1,t&&t.data){for(var n=t.data,r=void 0!==n.results?n.results:n,i=0;i<r.length&&l.maxItems>m.length;)null!==f&&f===r[i].url||m.push(r[i]),i+=1;s.nextRequestUrl=n.next&&l.maxItems>m.length?n.next:null,e&&(s.totalItems=n.count?n.count:m.length,s.totalItems=Math.min(l.maxItems,s.totalItems),s.totalPages=Math.ceil(s.totalItems/l.pageItems),"function"==typeof a&&a(s.totalItems)),g()}})),s.nextRequestUrl=null}return null!=n?(0,i.getRequest)((0,i.formatInnerLink)(n,r.PageStore.get("config-site").url),!1,(function(e){if(e&&e.data){var t=e.data,n=void 0!==t.results?t.results:t;n.length&&(f=n[0].url,d.push(n[0]))}p(!0)})):p(!0),{loadItems:function(e){!c.requestResponse&&d.length<s.totalItems&&g(e)},totalPages:function(){return s.totalPages},loadedAllItems:function(){return d.length===s.totalItems},cancelAll:function(){a=null,u=null}}}},160:function(e,t,n){n.d(t,{R:function(){return y}}),n(2322),n(9268),n(9751),n(2004),n(8407),n(6394),n(8288),n(5677),n(2129),n(4655),n(288),n(4458),n(3675);var r=n(5466),i=n(3074),o=n.n(i),a=n(137),u=n.n(a),l=n(3613),s=n(473),c=n(9722),f=n(9905),d=n(8727),m=n(1283);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){u=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e){var t=(0,r.useContext)(l.ApiUrlContext),n=(0,r.useContext)(l.SiteContext),i=g((0,r.useState)(null),2),o=(i[0],i[1]),a=g((0,r.useState)(null),2),p=a[0],y=a[1],v=g((0,r.useState)(null),2),h=v[0],b=v[1],O=g((0,r.useState)([]),2),w=O[0],P=O[1],I=g((0,r.useState)({}),2),S=I[0],j=I[1],A=g((0,r.useState)([]),2),E=A[0],_=A[1],k=g((0,r.useState)({}),2),L=k[0],q=k[1],M={videoQuality:new c.BrowserCache(n.id,86400).get("video-quality")};M.videoQuality=null!==M.videoQuality?M.videoQuality:"Auto";var x,R=null,U=null,C=null,N=((x=new(u())(e.pageLink).query)?((x=x.substring(1)).split("&"),x=x.length?x.split("="):[]):x=[],x);if(N.length)for(var D=0;D<N.length;)"m"===N[D]&&(C=N[D+1]),D+=2;function T(e){if(void 0!==e&&e&&void 0!==e.data&&e.data){var t,r;U=e.data;var i=[],a=null,u=(0,f.RA)(U.encodings_info,U.hls_info),l=null,c=null;if("string"==typeof U.poster_url?a=(0,s.formatInnerLink)(U.poster_url,n.url):"string"==typeof U.thumbnail_url&&(a=(0,s.formatInnerLink)(U.thumbnail_url,n.url)),Object.keys(u).length){var d=(0,f.KC)(),g=M.videoQuality;(null===g||"Auto"===g&&void 0===u.Auto)&&(g=720);var p=(0,f.$e)(g,u);for("Auto"===g&&void 0!==u.Auto&&i.push({src:u.Auto.url[0]}),r=0;r<u[p].format.length;){if("hls"===u[p].format[r]){i.push({src:u[p].url[r]});break}r+=1}for(r in U.encodings_info[p])U.encodings_info[p].hasOwnProperty(r)&&d.support[r]&&(t=U.encodings_info[p][r].url)&&(t=(0,s.formatInnerLink)(t,n.url),i.push({src:t,encodings_status:U.encodings_info[p][r].status}))}else u=null;if(1===i.length&&"running"===i[0].encodings_status&&(l="encodingRunning",c="Media encoding is currently running. Try again in few minutes."),null!==l)switch(l){case"encodingRunning":case"encodingPending":case"encodingFailed":break;default:m.warn("VIDEO DEBUG:","Video files don't exist")}o(l),y(c),b(a),P(i),j(u),_(U.subtitles_info),q(U.sprites_url?{url:(0,s.formatInnerLink)(U.sprites_url,n.url),frame:{width:160,height:90,seconds:10}}:null);var v=document.querySelector(".feat-first-item .item .item-description > div");v&&(v.innerHTML=U.summary)}}function V(e){if(void 0!==e&&void 0!==e.type)switch(e.type){case"network":case"private":case"unavailable":o(e.type),y(void 0!==e.message?e.message:"Αn error occurred while loading the media's data")}}return null!==C&&(R=t.media+"/"+C),(0,r.useEffect)((function(){null!==R&&(0,s.getRequest)(R,!1,T,V)}),[]),w.length?r.createElement("div",{className:"video-player"},r.createElement(d.Y7,{siteId:n.id,siteUrl:n.url,info:S,sources:w,poster:h,previewSprite:L,subtitlesInfo:E,enableAutoplay:!1,inEmbed:!1,hasTheaterMode:!1,hasNextLink:!1,hasPreviousLink:!1,errorMessage:p})):null}y.propTypes={pageLink:o().string.isRequired}},473:function(e,t,n){n.r(t),n.d(t,{BrowserEvents:function(){return r.Jj},addClassname:function(){return r.Ec},cancelAnimationFrame:function(){return r.Wx},hasClassname:function(){return r.mO},removeClassname:function(){return r.dt},requestAnimationFrame:function(){return r.U7},supportsSvgAsImg:function(){return r.Je},logErrorAndReturnError:function(){return i.O},logWarningAndReturnError:function(){return i.a},exportStore:function(){return o.Z},formatInnerLink:function(){return a.U},formatManagementTableDate:function(){return u.Z},formatViewsNumber:function(){return l.Z},csrfToken:function(){return s.o},imageExtension:function(){return c.s},error:function(){return f.v},warn:function(){return f.Z},greaterCommonDivision:function(){return d.$A},isGt:function(){return d.ju},isInteger:function(){return d.U},isNumber:function(){return d.hj},isPositive:function(){return d.xP},isPositiveInteger:function(){return d.aP},isPositiveIntegerOrZero:function(){return d.ZU},isPositiveNumber:function(){return d.r},isZero:function(){return d.Fr},PositiveInteger:function(){return m.n},PositiveIntegerOrZero:function(){return m.g},publishedOnDate:function(){return g.Z},quickSort:function(){return p.U},deleteRequest:function(){return y.Jl},getRequest:function(){return y.A_},postRequest:function(){return y.j0},putRequest:function(){return y.GH}});var r=n(1454),i=n(9039),o=n(9264),a=n(1397),u=n(7673),l=n(705),s=n(1450),c=n(2161),f=n(4646),d=n(408),m=n(5477),g=n(2276),p=n(3803),y=n(447)},90:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MediaMultiListWrapper=void 0;var i=r(n(5466));n(3804),t.MediaMultiListWrapper=function(e){var t=e.className,n=e.style,r=e.children;return i.default.createElement("div",{className:(t?t+" ":"")+"media-list-wrapper",style:n},r||null)}},5020:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.HomePage=void 0;var a=o(n(5466)),u=n(3613),l=n(8578),s=n(7180),c=n(90),f=n(8982),d=n(8897),m=n(7637),g=function(e){return a.default.createElement(u.LinksConsumer,null,(function(e){return a.default.createElement("div",{className:"empty-media"},a.default.createElement("div",{className:"welcome-title"},"Welcome to MediaCMS-NEC!"),a.default.createElement("div",{className:"start-uploading"},"Start uploading media and sharing your work!"),a.default.createElement("a",{href:e.user.addMedia,title:"Upload media",className:"button-link"},a.default.createElement("i",{className:"material-icons","data-icon":"video_call"}),"UPLOAD MEDIA"))}))};t.HomePage=function(e){var t=e.id,n=void 0===t?"home":t,r=e.featured_title,i=void 0===r?l.PageStore.get("config-options").pages.home.sections.featured.title:r,o=e.recommended_title,p=void 0===o?l.PageStore.get("config-options").pages.home.sections.recommended.title:o,y=e.latest_title,v=void 0===y?l.PageStore.get("config-options").pages.home.sections.latest.title:y,h=e.latest_view_all_link,b=void 0!==h&&h,O=e.featured_view_all_link,w=void 0===O||O,P=e.recommended_view_all_link,I=void 0===P||P,S=a.useState(!1),j=S[0],A=S[1],E=a.useState(!1),_=E[0],k=E[1],L=a.useState(!1),q=L[0],M=L[1],x=a.useState(!1),R=x[0],U=x[1],C=function(e){k(0<e),A(0===e)},N=function(e){M(0<e)},D=function(e){U(0<e)};return a.default.createElement(m.Page,{id:n},a.default.createElement(u.LinksConsumer,null,(function(e){return a.default.createElement(u.ApiUrlConsumer,null,(function(t){return a.default.createElement(c.MediaMultiListWrapper,{className:"items-list-ver"},l.PageStore.get("config-enabled").pages.featured&&l.PageStore.get("config-enabled").pages.featured.enabled&&a.default.createElement(s.MediaListRow,{title:i,style:q?void 0:{display:"none"},viewAllLink:w?e.featured:null},a.default.createElement(d.InlineSliderItemListAsync,{requestUrl:t.featured,itemsCountCallback:N,hideViews:!l.PageStore.get("config-media-item").displayViews,hideAuthor:!l.PageStore.get("config-media-item").displayAuthor,hideDate:!l.PageStore.get("config-media-item").displayPublishDate})),l.PageStore.get("config-enabled").pages.recommended&&l.PageStore.get("config-enabled").pages.recommended.enabled&&a.default.createElement(s.MediaListRow,{title:p,style:R?void 0:{display:"none"},viewAllLink:I?e.recommended:null},a.default.createElement(d.InlineSliderItemListAsync,{requestUrl:t.recommended,itemsCountCallback:D,hideViews:!l.PageStore.get("config-media-item").displayViews,hideAuthor:!l.PageStore.get("config-media-item").displayAuthor,hideDate:!l.PageStore.get("config-media-item").displayPublishDate})),a.default.createElement(s.MediaListRow,{title:v,style:_?void 0:{display:"none"},viewAllLink:b?e.latest:null},a.default.createElement(f.ItemListAsync,{pageItems:30,requestUrl:t.media,itemsCountCallback:C,hideViews:!l.PageStore.get("config-media-item").displayViews,hideAuthor:!l.PageStore.get("config-media-item").displayAuthor,hideDate:!l.PageStore.get("config-media-item").displayPublishDate})),j&&a.default.createElement(g,null))}))})))}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,i,o){if(!n){var a=1/0;for(s=0;s<e.length;s++){n=e[s][0],i=e[s][1],o=e[s][2];for(var u=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(u=!1,o<a&&(a=o));u&&(e.splice(s--,1),t=i())}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,i,o]},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=826,function(){var e={826:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,a=n[0],u=n[1],l=n[2],s=0;for(i in u)r.o(u,i)&&(r.m[i]=u[i]);if(l)var c=l(r);for(t&&t(n);s<a.length;s++)o=a[s],r.o(e,o)&&e[o]&&e[o][0](),e[a[s]]=0;return r.O(c)},n=self.webpackChunkmediacms_frontend=self.webpackChunkmediacms_frontend||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=r.O(void 0,[431],(function(){return r(5579)}));i=r.O(i)}();