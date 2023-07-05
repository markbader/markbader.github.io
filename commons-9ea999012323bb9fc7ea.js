"use strict";(self.webpackChunkmarkbader_github_io=self.webpackChunkmarkbader_github_io||[]).push([[351],{8032:function(e,t,a){a.d(t,{G:function(){return M},L:function(){return f},M:function(){return N},P:function(){return x},_:function(){return i},a:function(){return l},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return o}});var r=a(7294),n=(a(2369),a(5697)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=i(e,g);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=i(e,h);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,y);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,l({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var E;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,a=i(e,w);return t?r.createElement(v,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(E=v.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return r.createElement(r.Fragment,null,r.createElement(v,l({},e)),r.createElement("noscript",null,r.createElement(v,l({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=v.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],C=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:s().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],j=new Set;let _,R;const q=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:d,class:m,onStartLoad:g,onLoad:p,onError:f}=e,h=i(e,T);const{width:y,height:b,layout:v}=n,E=u(y,b,v),{style:w,className:x}=E,N=i(E,O),k=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,y,b);return(0,r.useEffect)((()=>{_||(_=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(L);if(R&&j.has(L))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;k.current&&(k.current.innerHTML=a(l({isLoading:!0,isLoaded:j.has(L),image:n},h)),j.has(L)||(t=requestAnimationFrame((()=>{k.current&&(r=i(k.current,L,j,s,g,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{j.has(L)&&R&&(k.current.innerHTML=R(l({isLoading:j.has(L),isLoaded:j.has(L),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},N,{style:l({},w,s,{backgroundColor:c}),className:x+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},M=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));M.propTypes=I,M.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=i(t,z);return s&&console.warn(s),n?r.createElement(e,l({image:n},o)):(console.warn("Image not loaded",a),null)}}const P=A((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:c="lazy",imgClassName:g,imgStyle:p,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=i(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=l({objectFit:y,objectPosition:b,backgroundColor:h},p);const{width:E,height:w,layout:S,images:I,placeholder:T,backgroundColor:O}=o,j=u(E,w,S),{style:_,className:R}=j,q=i(j,L),M={fallback:void 0,sources:[]};return I.fallback&&(M.fallback=l({},I.fallback,{srcSet:I.fallback.srcSet?C(I.fallback.srcSet):void 0})),I.sources&&(M.sources=I.sources.map((e=>l({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,l({},q,{style:l({},_,s,{backgroundColor:h}),className:R+(a?" "+a:"")}),r.createElement(f,{layout:S,width:E,height:w},r.createElement(x,l({},m(T,!1,S,E,w,O,y,b))),r.createElement(N,l({"data-gatsby-image-ssr":"",className:g},v,d("eager"===c,!1,M,c,p)))))})),W=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),D={src:s().string.isRequired,alt:S,width:W,height:W,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=D;const H=A(M);H.displayName="StaticImage",H.propTypes=D},2369:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),i=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,l=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,i=l,l=!0,o++):l&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=l,l=!1,s=!0):(s=r(c)===c&&n(c)!==c,i=l,l=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8520:function(e,t,a){a.d(t,{zx:function(){return k},Zb:function(){return T},$_:function(){return _},h4:function(){return w},Tk:function(){return M},xv:function(){return y},G7:function(){return c}});var r={};a.r(r),a.d(r,{bold:function(){return u},classic:function(){return d},header:function(){return m},italic:function(){return g},nowrap:function(){return p},subheader:function(){return f},subsubheader:function(){return h}});var n={};a.r(n),a.d(n,{classic:function(){return b},line:function(){return v},title:function(){return E}});var s={};a.r(s),a.d(s,{classic:function(){return x},flat:function(){return N}});var l={};a.r(l),a.d(l,{classic:function(){return O},link:function(){return j}});var i={};a.r(i),a.d(i,{classic:function(){return R},link:function(){return q}});var o=a(7294);var c=e=>{const{children:t,style:a,...r}=e;return o.createElement("div",r,t)},u="text-module--bold--595b8",d="text-module--classic--ada64",m="text-module--header--3981c",g="text-module--italic--ea6fd",p="text-module--nowrap--ef569",f="text-module--subheader--7fea3",h="text-module--subsubheader--abd3f";var y=e=>{const{children:t,className:a,preset:n="classic",style:s,text:l,...i}=e,c=l?{__html:l}:void 0;return o.createElement("span",Object.assign({},i,{className:r[n]+" "+a,dangerouslySetInnerHTML:c}))},b="header-module--classic--e85ce",v="header-module--line--2e365",E="header-module--title--8177a";var w=e=>{const{children:t,className:a,preset:r="classic",style:s,title:l,breadcrumb:i,...u}=e;return o.createElement(c,Object.assign({},u,{className:n[r]}),i,l&&o.createElement(c,{className:E},o.createElement(y,{text:l,preset:"header"}),o.createElement("hr",{className:v})),t)};var x="button-module--classic--aac53",N="button-module--flat--e5894";var k=e=>{const{children:t,className:a,preset:r="classic",style:n,text:l,icon:i,...c}=e,u=l?o.createElement(y,{text:l}):t;return o.createElement("button",Object.assign({},c,{className:s[r]}),i,u)},L="card-module--image--bf347",C="card-module--picture--bfbd5",S=a(4160),I=a(8032);var T=e=>{const{children:t,className:a="",preset:r="compressed",style:n,title:s,description:l,image:i,expanded:u=!1,onClickTo:d,...m}=e;return!0===u?o.createElement(c,Object.assign({className:"card-module--expanded--421e4 "+a},m),o.createElement(c,{className:C},o.createElement(I.G,{className:L,image:i,alt:""})),t):o.createElement(S.rU,{className:"card-module--compressed--e5a36 "+a,to:d},o.createElement(c,{className:C},o.createElement(I.G,{className:L,image:i,alt:""}),o.createElement(c,{className:"card-module--text--4ada3"},o.createElement(y,{className:"card-module--title--6c505",text:s,preset:"subheader"}),o.createElement(y,{className:"card-module--description--ab9fa",text:l,preset:"content"}))))},O="footer-module--classic--30d59",j="footer-module--link--b2f1a";var _=e=>{const{children:t,className:a,preset:r="classic",style:n,...s}=e;return o.createElement(c,Object.assign({},s,{className:l[r]}),o.createElement(y,{text:"© Mark Bader"}),o.createElement(y,{text:"|"}),o.createElement(S.rU,{to:"/about",className:j},o.createElement(k,{text:"Impressum",preset:"flat"})))},R="more-module--classic--e3a73",q="more-module--link--ed61c";var M=e=>{const{children:t,className:a,preset:r="classic",style:n,to:s,...l}=e;return o.createElement(c,Object.assign({},l,{className:i[r]}),o.createElement(S.rU,{to:s,className:q},o.createElement(y,{text:"Mehr anzeigen ..."})))}},394:function(e,t,a){a.d(t,{In:function(){return r},Md:function(){return s},oy:function(){return n},sp:function(){return l}});var r="index-module--card--a1ed7",n="index-module--landingpage--9e531",s="index-module--page--46c64",l="index-module--screen--0851e"}}]);
//# sourceMappingURL=commons-9ea999012323bb9fc7ea.js.map