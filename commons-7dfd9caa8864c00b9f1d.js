"use strict";(self.webpackChunkmarkbader_github_io=self.webpackChunkmarkbader_github_io||[]).push([[223],{2532:function(e,t,a){a.d(t,{G:function(){return M},L:function(){return h},M:function(){return k},P:function(){return x},_:function(){return i},a:function(){return l},b:function(){return m},c:function(){return c},d:function(){return u},g:function(){return g},h:function(){return o}});var r=a(6540),n=(a(5147),a(5556)),s=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},u=e=>{var t,a,r;return null==(t=c(e))||null==(a=t.images)||null==(r=a.fallback)?void 0:r.src};function d(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function m(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function g(e,t,a,r,n,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],f=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=i(e,p);return r.createElement(r.Fragment,null,r.createElement(f,l({},a)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=i(e,y);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=i(e,b);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(v,l({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${a}`,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var w;v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},E.displayName="Picture",E.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const N=["fallback"],x=function(e){let{fallback:t}=e,a=i(e,N);return t?r.createElement(E,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};x.displayName="Placeholder",x.propTypes={fallback:n.string,sources:null==(w=E.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(E,l({},e)),r.createElement("noscript",null,r.createElement(E,l({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=E.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],S=e=>e.replace(/\n/g,""),I=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},$={image:s().object.isRequired,alt:I},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],j=new Set;let O,R;const q=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:u,class:m,onStartLoad:g,onLoad:p,onError:f}=e,h=i(e,T);const{width:y,height:b,layout:v}=n,E=d(y,b,v),{style:w,className:N}=E,x=i(E,_),k=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,y,b);return(0,r.useEffect)((()=>{O||(O=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(L);if(R&&j.has(L))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;k.current&&(k.current.innerHTML=a(l({isLoading:!0,isLoaded:j.has(L),image:n},h)),j.has(L)||(t=requestAnimationFrame((()=>{k.current&&(r=i(k.current,L,j,s,g,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{j.has(L)&&R&&(k.current.innerHTML=R(l({isLoading:j.has(L),isLoaded:j.has(L),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},x,{style:l({},w,s,{backgroundColor:c}),className:`${N}${u?` ${u}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},M=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));M.propTypes=$,M.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=i(t,z);return s&&console.warn(s),n?r.createElement(e,l({image:n},o)):(console.warn("Image not loaded",a),null)}}const P=A((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:c="lazy",imgClassName:u,imgStyle:p,backgroundColor:f,objectFit:y,objectPosition:b}=e,v=i(e,L);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=l({objectFit:y,objectPosition:b,backgroundColor:f},p);const{width:E,height:w,layout:N,images:I,placeholder:$,backgroundColor:T}=o,_=d(E,w,N),{style:j,className:O}=_,R=i(_,C),q={fallback:void 0,sources:[]};return I.fallback&&(q.fallback=l({},I.fallback,{srcSet:I.fallback.srcSet?S(I.fallback.srcSet):void 0})),I.sources&&(q.sources=I.sources.map((e=>l({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,l({},R,{style:l({},j,s,{backgroundColor:f}),className:`${O}${a?` ${a}`:""}`}),r.createElement(h,{layout:N,width:E,height:w},r.createElement(x,l({},g($,!1,N,E,w,T,y,b))),r.createElement(k,l({"data-gatsby-image-ssr":"",className:u},v,m("eager"===c,!1,q,c,p)))))})),F=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},W=new Set(["fixed","fullWidth","constrained"]),D={src:s().string.isRequired,alt:I,width:F,height:F,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};P.displayName="StaticImage",P.propTypes=D;const H=A(M);H.displayName="StaticImage",H.propTypes=D},5147:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),i=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,l=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,i=l,l=!0,o++):l&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=l,l=!1,s=!0):(s=r(c)===c&&n(c)!==c,i=l,l=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},3342:function(e,t,a){a.d(t,{BI:function(){return M},Zp:function(){return S},wi:function(){return T},Y9:function(){return N},Kc:function(){return O},EY:function(){return b},Ss:function(){return c}});var r={};a.r(r),a.d(r,{bold:function(){return u},classic:function(){return d},content:function(){return m},header:function(){return g},italic:function(){return p},nowrap:function(){return f},subheader:function(){return h},subsubheader:function(){return y}});var n={};a.r(n),a.d(n,{classic:function(){return v},line:function(){return E},title:function(){return w}});var s={};a.r(s),a.d(s,{classic:function(){return I},link:function(){return $}});var l={};a.r(l),a.d(l,{classic:function(){return _},link:function(){return j}});var i={};a.r(i),a.d(i,{classic:function(){return R},link:function(){return q}});var o=a(6540);var c=e=>{const{children:t,style:a,...r}=e;return o.createElement("div",r,t)},u="text-module--bold--595b8",d="text-module--classic--ada64",m="text-module--content--2c656",g="text-module--header--3981c",p="text-module--italic--ea6fd",f="text-module--nowrap--ef569",h="text-module--subheader--7fea3",y="text-module--subsubheader--abd3f";var b=e=>{const{children:t,className:a="",preset:n="classic",style:s,text:l,...i}=e,c=l?{__html:l}:void 0;return o.createElement("span",Object.assign({},i,{className:`${r[n]} ${a}`,dangerouslySetInnerHTML:c}))},v="header-module--classic--e85ce",E="header-module--line--2e365",w="header-module--title--8177a";var N=e=>{const{children:t,className:a,preset:r="classic",style:s,title:l,breadcrumb:i,...u}=e;return o.createElement(c,Object.assign({},u,{className:n[r]}),i,l&&o.createElement(c,{className:w},o.createElement(b,{text:l,preset:"header"}),o.createElement("hr",{className:E})),t)},x="card-module--image--bf347",k="card-module--picture--bfbd5",L=a(4810),C=a(2532);var S=e=>{const{children:t,className:a="",preset:r="compressed",style:n,title:s,description:l,image:i,expanded:u=!1,onClickTo:d,...m}=e;return!0===u?o.createElement(c,Object.assign({className:`card-module--expanded--421e4 ${a}`},m),o.createElement(c,{className:k},o.createElement(C.G,{className:x,image:i,alt:""})),t):o.createElement(L.N_,{className:`card-module--compressed--e5a36 ${a}`,to:d},o.createElement(c,{className:k},o.createElement(C.G,{className:x,image:i,alt:""}),o.createElement(c,{className:"card-module--text--4ada3"},o.createElement(b,{className:"card-module--title--6c505",text:s,preset:"subheader"}),o.createElement(b,{className:"card-module--description--ab9fa",text:l,preset:"content"}))))},I="footer-module--classic--30d59",$="footer-module--link--b2f1a";var T=e=>{const{children:t,className:a,preset:r="classic",style:n,...l}=e;return o.createElement(c,Object.assign({},l,{className:s[r]}),o.createElement(b,{className:$,text:"© Mark Bader"}),o.createElement(b,{className:$,text:"|"}),o.createElement(L.N_,{to:"/about",className:$},"Impressum"))},_="more-module--classic--e3a73",j="more-module--link--ed61c";var O=e=>{const{children:t,className:a,preset:r="classic",style:n,to:s,...i}=e;return o.createElement(c,Object.assign({},i,{className:l[r]}),o.createElement(L.N_,{to:s,className:j},o.createElement(b,{text:"Mehr anzeigen ..."})))},R="breadcrumbs-module--classic--3a5e0",q="breadcrumbs-module--link--cfb1d";var M=e=>{const{className:t,preset:a="classic",path:r,style:n}=e,s=(0,o.useCallback)((()=>r&&"/"!==r.path),[r]);return o.createElement(c,{className:i[a]},o.createElement(L.N_,{className:q,to:"/"},"👤"),s()&&o.createElement(o.Fragment,null,o.createElement(b,{className:q,text:"/"}),r&&o.createElement(L.N_,{className:q,to:r.path},null==r?void 0:r.title)))}},4909:function(e,t,a){a.d(t,{Fz:function(){return s},MY:function(){return l},Nr:function(){return n},jZ:function(){return r},nj:function(){return i}});var r="index-module--article--4bcbc",n="index-module--card--a1ed7",s="index-module--landingpage--9e531",l="index-module--page--46c64",i="index-module--screen--0851e"}}]);
//# sourceMappingURL=commons-7dfd9caa8864c00b9f1d.js.map