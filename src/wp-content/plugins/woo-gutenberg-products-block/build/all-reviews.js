this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["all-reviews"]=function(e){function t(t){for(var o,a,s=t[0],i=t[1],l=t[2],u=0,b=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(d&&d(t);b.length;)b.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],o=!0,s=1;s<r.length;s++){var i=r[s];0!==n[i]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var o={},n={8:0},c=[];function a(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=o,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=i;return c.push([344,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},103:function(e,t,r){"use strict";var o=r(0),n=r(18);const c=Object(o.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}));t.a=c},104:function(e,t){},105:function(e,t,r){"use strict";var o=r(0),n=(r(10),r(4)),c=r.n(n),a=r(30),s=r(9);r(144),t.a=Object(s.withInstanceId)(e=>{let{className:t,instanceId:r,label:n,onChange:s,options:i,screenReaderLabel:l,readOnly:d,value:u}=e;const b="wc-block-components-sort-select__select-"+r;return Object(o.createElement)("div",{className:c()("wc-block-sort-select","wc-block-components-sort-select",t)},Object(o.createElement)(a.a,{label:n,screenReaderLabel:l,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label wc-block-components-sort-select__label",htmlFor:b}}),Object(o.createElement)("select",{id:b,className:"wc-block-sort-select__select wc-block-components-sort-select__select",onChange:s,readOnly:d,value:u},i.map(e=>Object(o.createElement)("option",{key:e.key,value:e.key},e.label))))})},11:function(e,t){e.exports=window.wp.apiFetch},111:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r(1),n=r(24);const c={attributes:{editMode:!1,imageType:"reviewer",orderby:"most-recent",reviewsOnLoadMore:10,reviewsOnPageLoad:10,showLoadMore:!0,showOrderby:!0,showReviewDate:!0,showReviewerName:!0,showReviewImage:!0,showReviewRating:!0,showReviewContent:!0,previewReviews:[{id:1,date_created:"2019-07-15T17:05:04",formatted_date_created:Object(o.__)("July 15, 2019","woo-gutenberg-products-block"),date_created_gmt:"2019-07-15T15:05:04",product_id:0,product_name:Object(o.__)("WordPress Pennant","woo-gutenberg-products-block"),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:Object(o.__)("Alice","woo-gutenberg-products-block"),review:`<p>${Object(o.__)("I bought this product last week and I'm very happy with it.","woo-gutenberg-products-block")}</p>\n`,reviewer_avatar_urls:{48:n.o.defaultAvatar,96:n.o.defaultAvatar},rating:5,verified:!0},{id:2,date_created:"2019-07-12T12:39:39",formatted_date_created:Object(o.__)("July 12, 2019","woo-gutenberg-products-block"),date_created_gmt:"2019-07-12T10:39:39",product_id:0,product_name:Object(o.__)("WordPress Pennant","woo-gutenberg-products-block"),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:Object(o.__)("Bob","woo-gutenberg-products-block"),review:`<p>${Object(o.__)("This product is awesome, I love it!","woo-gutenberg-products-block")}</p>\n`,reviewer_avatar_urls:{48:n.o.defaultAvatar,96:n.o.defaultAvatar},rating:null,verified:!1}]}}},12:function(e,t){e.exports=window.wp.blocks},132:function(e,t,r){"use strict";t.a={editMode:{type:"boolean",default:!0},imageType:{type:"string",default:"reviewer"},orderby:{type:"string",default:"most-recent"},reviewsOnLoadMore:{type:"number",default:10},reviewsOnPageLoad:{type:"number",default:10},showLoadMore:{type:"boolean",default:!0},showOrderby:{type:"boolean",default:!0},showReviewDate:{type:"boolean",default:!0},showReviewerName:{type:"boolean",default:!0},showReviewImage:{type:"boolean",default:!0},showReviewRating:{type:"boolean",default:!0},showReviewContent:{type:"boolean",default:!0},previewReviews:{type:"array",default:null}}},133:function(e,t,r){"use strict";var o=r(5),n=r.n(o),c=r(0),a=r(7),s=(r(143),r(53));t.a=e=>{let{attributes:t}=e;return Object(c.createElement)("div",n()({},a.useBlockProps.save({className:Object(s.a)(t)}),Object(s.b)(t)))}},136:function(e,t,r){"use strict";var o=r(0),n=r(1),c=(r(10),r(6)),a=r(3),s=r(7),i=r(8),l=r(2),d=r(71),u=r(30);r(169);const b=e=>{let{onClick:t,label:r,screenReaderLabel:n}=e;return Object(o.createElement)("div",{className:"wp-block-button wc-block-load-more wc-block-components-load-more"},Object(o.createElement)("button",{className:"wp-block-button__link",onClick:t},Object(o.createElement)(u.a,{label:r,screenReaderLabel:n})))};b.defaultProps={label:Object(n.__)("Load more","woo-gutenberg-products-block")};var w=b,p=r(105);r(166);var m=e=>{let{onChange:t,readOnly:r,value:c}=e;return Object(o.createElement)(p.a,{className:"wc-block-review-sort-select wc-block-components-review-sort-select",label:Object(n.__)("Order by","woo-gutenberg-products-block"),onChange:t,options:[{key:"most-recent",label:Object(n.__)("Most recent","woo-gutenberg-products-block")},{key:"highest-rating",label:Object(n.__)("Highest rating","woo-gutenberg-products-block")},{key:"lowest-rating",label:Object(n.__)("Lowest rating","woo-gutenberg-products-block")}],readOnly:r,screenReaderLabel:Object(n.__)("Order reviews by","woo-gutenberg-products-block"),value:c})},g=r(4),h=r.n(g),v=r(25),O=r.n(v),_=r(153),j=r.n(_);const f=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...";const o=j()(e,{suffix:r,limit:t});return o.html},k=(e,t,r)=>(t<=r?e.start=e.middle+1:e.end=e.middle-1,e),y=(e,t,r,o)=>{const n=((e,t,r)=>{let o={start:0,middle:0,end:e.length};for(;o.start<=o.end;)o.middle=Math.floor((o.start+o.end)/2),t.innerHTML=f(e,o.middle),o=k(o,t.clientHeight,r);return o.middle})(e,t,r);return f(e,n-o.length,o)},E={className:"read-more-content",ellipsis:"&hellip;",lessText:Object(n.__)("Read less","woo-gutenberg-products-block"),maxLines:3,moreText:Object(n.__)("Read more","woo-gutenberg-products-block")};class R extends i.Component{constructor(e){super(e),this.state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},this.reviewContent=Object(i.createRef)(),this.reviewSummary=Object(i.createRef)(),this.getButton=this.getButton.bind(this),this.onClick=this.onClick.bind(this)}componentDidMount(){if(this.props.children){const{maxLines:e,ellipsis:t}=this.props;if(!this.reviewSummary.current||!this.reviewContent.current)return;const r=(this.reviewSummary.current.clientHeight+1)*e+1,o=this.reviewContent.current.clientHeight+1>r;this.setState({clampEnabled:o}),o&&this.setState({summary:y(this.reviewContent.current.innerHTML,this.reviewSummary.current,r,t)})}}getButton(){const{isExpanded:e}=this.state,{className:t,lessText:r,moreText:n}=this.props,c=e?r:n;if(c)return Object(o.createElement)("a",{href:"#more",className:t+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},c)}onClick(e){e.preventDefault();const{isExpanded:t}=this.state;this.setState({isExpanded:!t})}render(){const{className:e}=this.props,{content:t,summary:r,clampEnabled:n,isExpanded:c}=this.state;return t?!1===n?Object(o.createElement)("div",{className:e},Object(o.createElement)("div",{ref:this.reviewContent},t)):Object(o.createElement)("div",{className:e},(!c||null===n)&&Object(o.createElement)("div",{ref:this.reviewSummary,"aria-hidden":c,dangerouslySetInnerHTML:{__html:r}}),(c||null===n)&&Object(o.createElement)("div",{ref:this.reviewContent,"aria-hidden":!c},t),this.getButton()):null}}O()(R,"defaultProps",E);var C=R;r(168);var S=e=>{let{attributes:t,review:r={}}=e;const{imageType:c,showReviewDate:a,showReviewerName:s,showReviewImage:i,showReviewRating:l,showReviewContent:d,showProductName:u}=t,{rating:b}=r,w=!Object.keys(r).length>0,p=Number.isFinite(b)&&l;return Object(o.createElement)("li",{className:h()("wc-block-review-list-item__item","wc-block-components-review-list-item__item",{"is-loading":w,"wc-block-components-review-list-item__item--has-image":i}),"aria-hidden":w},(u||a||s||i||p)&&Object(o.createElement)("div",{className:"wc-block-review-list-item__info wc-block-components-review-list-item__info"},i&&function(e,t,r){var c,a;return r||!e?Object(o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"}):Object(o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"},"product"===t?Object(o.createElement)("img",{"aria-hidden":"true",alt:(null===(c=e.product_image)||void 0===c?void 0:c.alt)||"",src:(null===(a=e.product_image)||void 0===a?void 0:a.thumbnail)||""}):Object(o.createElement)("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[96]||""}),e.verified&&Object(o.createElement)("div",{className:"wc-block-review-list-item__verified wc-block-components-review-list-item__verified",title:Object(n.__)("Verified buyer","woo-gutenberg-products-block")},Object(n.__)("Verified buyer","woo-gutenberg-products-block")))}(r,c,w),(u||s||p||a)&&Object(o.createElement)("div",{className:"wc-block-review-list-item__meta wc-block-components-review-list-item__meta"},p&&function(e){const{rating:t}=e,r={width:t/5*100+"%"},c=Object(n.sprintf)(
/* translators: %f is referring to the average rating value */
Object(n.__)("Rated %f out of 5","woo-gutenberg-products-block"),t),a={__html:Object(n.sprintf)(
/* translators: %s is referring to the average rating value */
Object(n.__)("Rated %s out of 5","woo-gutenberg-products-block"),Object(n.sprintf)('<strong class="rating">%f</strong>',t))};return Object(o.createElement)("div",{className:"wc-block-review-list-item__rating wc-block-components-review-list-item__rating"},Object(o.createElement)("div",{className:"wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars",role:"img","aria-label":c},Object(o.createElement)("span",{style:r,dangerouslySetInnerHTML:a})))}(r),u&&function(e){return Object(o.createElement)("div",{className:"wc-block-review-list-item__product wc-block-components-review-list-item__product"},Object(o.createElement)("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(r),s&&function(e){const{reviewer:t=""}=e;return Object(o.createElement)("div",{className:"wc-block-review-list-item__author wc-block-components-review-list-item__author"},t)}(r),a&&function(e){const{date_created:t,formatted_date_created:r}=e;return Object(o.createElement)("time",{className:"wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",dateTime:t},r)}(r))),d&&function(e){return Object(o.createElement)(C,{maxLines:10,moreText:Object(n.__)("Read full review","woo-gutenberg-products-block"),lessText:Object(n.__)("Hide full review","woo-gutenberg-products-block"),className:"wc-block-review-list-item__text wc-block-components-review-list-item__text"},Object(o.createElement)("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(r))};r(167);var P=e=>{let{attributes:t,reviews:r}=e;const n=Object(l.getSetting)("showAvatars",!0),c=Object(l.getSetting)("reviewRatingsEnabled",!0),a=(n||"product"===t.imageType)&&t.showReviewImage,s=c&&t.showReviewRating,i={...t,showReviewImage:a,showReviewRating:s};return Object(o.createElement)("ul",{className:"wc-block-review-list wc-block-components-review-list"},0===r.length?Object(o.createElement)(S,{attributes:i}):r.map((e,t)=>Object(o.createElement)(S,{key:e.id||t,attributes:i,review:e})))},N=r(5),T=r.n(N),L=r(26),x=r.n(L),M=r(53),A=r(28);class I extends i.Component{render(){const{attributes:e,error:t,isLoading:r,noReviewsPlaceholder:c,reviews:s,totalReviews:i}=this.props;if(t)return Object(o.createElement)(d.a,{className:"wc-block-featured-product-error",error:t,isLoading:r});if(0===s.length&&!r)return Object(o.createElement)(c,{attributes:e});const u=Object(l.getSetting)("reviewRatingsEnabled",!0);return Object(o.createElement)(a.Disabled,null,e.showOrderby&&u&&Object(o.createElement)(m,{readOnly:!0,value:e.orderby}),Object(o.createElement)(P,{attributes:e,reviews:s}),e.showLoadMore&&i>s.length&&Object(o.createElement)(w,{screenReaderLabel:Object(n.__)("Load more reviews","woo-gutenberg-products-block")}))}}var D=(e=>{class t extends i.Component{constructor(){super(...arguments),O()(this,"isPreview",!!this.props.attributes.previewReviews),O()(this,"delayedAppendReviews",this.props.delayFunction(this.appendReviews)),O()(this,"isMounted",!1),O()(this,"state",{error:null,loading:!0,reviews:this.isPreview?this.props.attributes.previewReviews:[],totalReviews:this.isPreview?this.props.attributes.previewReviews.length:0}),O()(this,"setError",async e=>{if(!this.isMounted)return;const{onReviewsLoadError:t}=this.props,r=await Object(A.a)(e);this.setState({reviews:[],loading:!1,error:r}),t(r)})}componentDidMount(){this.isMounted=!0,this.replaceReviews()}componentDidUpdate(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}shouldReplaceReviews(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!x()(e.categoryIds,t.categoryIds)}componentWillUnmount(){this.isMounted=!1,this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}getArgs(e){const{categoryIds:t,order:r,orderby:o,productId:n,reviewsToDisplay:c}=this.props,a={order:r,orderby:o,per_page:c-e,offset:e};return t&&t.length&&(a.category_id=Array.isArray(t)?t.join(","):t),n&&(a.product_id=n),a}replaceReviews(){if(this.isPreview)return;const{onReviewsReplaced:e}=this.props;this.updateListOfReviews().then(e)}appendReviews(){if(this.isPreview)return;const{onReviewsAppended:e,reviewsToDisplay:t}=this.props,{reviews:r}=this.state;t<=r.length||this.updateListOfReviews(r).then(e)}updateListOfReviews(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const{reviewsToDisplay:t}=this.props,{totalReviews:r}=this.state,o=Math.min(r,t)-e.length;return this.setState({loading:!0,reviews:e.concat(Array(o).fill({}))}),Object(M.c)(this.getArgs(e.length)).then(t=>{let{reviews:r,totalReviews:o}=t;return this.isMounted&&this.setState({reviews:e.filter(e=>Object.keys(e).length).concat(r),totalReviews:o,loading:!1,error:null}),{newReviews:r}}).catch(this.setError)}render(){const{reviewsToDisplay:t}=this.props,{error:r,loading:n,reviews:c,totalReviews:a}=this.state;return Object(o.createElement)(e,T()({},this.props,{error:r,isLoading:n,reviews:c.slice(0,t),totalReviews:a}))}}O()(t,"defaultProps",{delayFunction:e=>e,onReviewsAppended:()=>{},onReviewsLoadError:()=>{},onReviewsReplaced:()=>{}});const{displayName:r=e.name||"Component"}=e;return t.displayName=`WithReviews( ${r} )`,t})(I);t.a=e=>{let{attributes:t,icon:r,name:i,noReviewsPlaceholder:l}=e;const{categoryIds:d,productId:u,reviewsOnPageLoad:b,showProductName:w,showReviewDate:p,showReviewerName:m,showReviewContent:g,showReviewImage:h,showReviewRating:v}=t,{order:O,orderby:_}=Object(M.d)(t.orderby),j=!(g||v||p||m||h||w),f=Object(s.useBlockProps)({className:Object(M.a)(t)});return j?Object(o.createElement)(a.Placeholder,{icon:r,label:i},Object(n.__)("The content for this block is hidden due to block settings.","woo-gutenberg-products-block")):Object(o.createElement)("div",f,Object(o.createElement)(D,{attributes:t,categoryIds:d,delayFunction:e=>Object(c.debounce)(e,400),noReviewsPlaceholder:l,orderby:_,order:O,productId:u,reviewsToDisplay:b}))}},143:function(e,t){},144:function(e,t){},166:function(e,t){},167:function(e,t){},168:function(e,t){},169:function(e,t){},18:function(e,t){e.exports=window.wp.primitives},2:function(e,t){e.exports=window.wc.wcSettings},24:function(e,t,r){"use strict";r.d(t,"o",(function(){return c})),r.d(t,"m",(function(){return a})),r.d(t,"l",(function(){return s})),r.d(t,"n",(function(){return i})),r.d(t,"j",(function(){return l})),r.d(t,"e",(function(){return d})),r.d(t,"f",(function(){return u})),r.d(t,"g",(function(){return b})),r.d(t,"k",(function(){return w})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return m})),r.d(t,"h",(function(){return g})),r.d(t,"a",(function(){return h})),r.d(t,"i",(function(){return v})),r.d(t,"b",(function(){return O}));var o,n=r(2);const c=Object(n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),a=c.pluginUrl+"images/",s=c.pluginUrl+"build/",i=c.buildPhase,l=null===(o=n.STORE_PAGES.shop)||void 0===o?void 0:o.permalink,d=n.STORE_PAGES.checkout.id,u=n.STORE_PAGES.checkout.permalink,b=n.STORE_PAGES.privacy.permalink,w=(n.STORE_PAGES.privacy.title,n.STORE_PAGES.terms.permalink),p=(n.STORE_PAGES.terms.title,n.STORE_PAGES.cart.id),m=n.STORE_PAGES.cart.permalink,g=(n.STORE_PAGES.myaccount.permalink?n.STORE_PAGES.myaccount.permalink:Object(n.getSetting)("wpLoginUrl","/wp-login.php"),Object(n.getSetting)("shippingCountries",{})),h=Object(n.getSetting)("allowedCountries",{}),v=Object(n.getSetting)("shippingStates",{}),O=Object(n.getSetting)("allowedStates",{})},26:function(e,t){e.exports=window.wp.isShallowEqual},28:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return c}));var o=r(1);const n=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}},c=e=>{if(e.data&&"rest_invalid_param"===e.code){const t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(o.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},3:function(e,t){e.exports=window.wp.components},30:function(e,t,r){"use strict";var o=r(0),n=r(4),c=r.n(n);t.a=e=>{let t,{label:r,screenReaderLabel:n,wrapperElement:a,wrapperProps:s={}}=e;const i=null!=r,l=null!=n;return!i&&l?(t=a||"span",s={...s,className:c()(s.className,"screen-reader-text")},Object(o.createElement)(t,s,n)):(t=a||o.Fragment,i&&l&&r!==n?Object(o.createElement)(t,s,Object(o.createElement)("span",{"aria-hidden":"true"},r),Object(o.createElement)("span",{className:"screen-reader-text"},n)):Object(o.createElement)(t,s,r))}},31:function(e,t){e.exports=window.wp.escapeHtml},32:function(e,t,r){"use strict";var o=r(0),n=r(1),c=r(31);t.a=e=>{let{error:t}=e;return Object(o.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:r}=e;return t?"general"===r?Object(o.createElement)("span",null,Object(n.__)("The following error was returned","woo-gutenberg-products-block"),Object(o.createElement)("br",null),Object(o.createElement)("code",null,Object(c.escapeHTML)(t))):"api"===r?Object(o.createElement)("span",null,Object(n.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(o.createElement)("br",null),Object(o.createElement)("code",null,Object(c.escapeHTML)(t))):t:Object(n.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")})(t))}},344:function(e,t,r){e.exports=r(453)},43:function(e,t,r){"use strict";var o=r(0);t.a=function(e){let{srcElement:t,size:r=24,...n}=e;return Object(o.isValidElement)(t)?Object(o.cloneElement)(t,{width:r,height:r,...n}):null}},453:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r(1),c=r(12),a=r(43),s=r(18),i=Object(o.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(o.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(o.createElement)("path",{d:"M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"})),l=(r(143),r(7)),d=r(3),u=(r(10),r(136)),b=()=>Object(o.createElement)(d.Placeholder,{className:"wc-block-all-reviews",icon:Object(o.createElement)(a.a,{srcElement:i,className:"block-editor-block-icon"}),label:Object(n.__)("All Reviews","woo-gutenberg-products-block")},Object(n.__)("This block shows a list of all product reviews. Your store does not have any reviews yet, but they will show up here when it does.","woo-gutenberg-products-block")),w=r(95),p=r(132),m=r(133),g=r(111);Object(c.registerBlockType)("woocommerce/all-reviews",{apiVersion:2,title:Object(n.__)("All Reviews","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(a.a,{srcElement:i,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[Object(n.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(n.__)("Show a list of all product reviews.","woo-gutenberg-products-block"),supports:{html:!1,color:{background:!1},typography:{fontSize:!0}},example:{...g.a,attributes:{...g.a.attributes,showProductName:!0}},attributes:{...p.a,showProductName:{type:"boolean",default:!0}},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:e=>{let{idBase:t,instance:r}=e;return"woocommerce_recent_reviews"===t&&!(null==r||!r.raw)},transform:e=>{let{instance:t}=e;return Object(c.createBlock)("woocommerce/all-reviews",{reviewsOnPageLoad:t.raw.number,imageType:"product",showLoadMore:!1,showOrderby:!1,showReviewDate:!1,showReviewContent:!1})}}]},edit:e=>{let{attributes:t,setAttributes:r}=e;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.InspectorControls,{key:"inspector"},Object(o.createElement)(d.PanelBody,{title:Object(n.__)("Content","woo-gutenberg-products-block")},Object(o.createElement)(d.ToggleControl,{label:Object(n.__)("Product name","woo-gutenberg-products-block"),checked:t.showProductName,onChange:()=>r({showProductName:!t.showProductName})}),Object(w.b)(t,r)),Object(o.createElement)(d.PanelBody,{title:Object(n.__)("List Settings","woo-gutenberg-products-block")},Object(w.c)(t,r))),Object(o.createElement)(u.a,{attributes:t,icon:Object(o.createElement)(a.a,{icon:i,className:"block-editor-block-icon"}),name:Object(n.__)("All Reviews","woo-gutenberg-products-block"),noReviewsPlaceholder:b}))},save:m.a})},53:function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return u}));var o=r(11),n=r.n(o),c=r(4),a=r.n(c),s=r(2);const i=e=>{if(Object(s.getSetting)("reviewRatingsEnabled",!0)){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}},l=e=>n()({path:"/wc/store/products/reviews?"+Object.entries(e).map(e=>e.join("=")).join("&"),parse:!1}).then(e=>e.json().then(t=>({reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)}))),d=e=>{const{className:t,categoryIds:r,productId:o,showReviewDate:n,showReviewerName:c,showReviewContent:s,showProductName:i,showReviewImage:l,showReviewRating:d}=e;let u="wc-block-all-reviews";return o&&(u="wc-block-reviews-by-product"),Array.isArray(r)&&(u="wc-block-reviews-by-category"),a()(u,t,{"has-image":l,"has-name":c,"has-date":n,"has-rating":d,"has-content":s,"has-product-name":i})},u=e=>{const{categoryIds:t,imageType:r,orderby:o,productId:n,reviewsOnPageLoad:c,reviewsOnLoadMore:a,showLoadMore:s,showOrderby:i}=e,l={"data-image-type":r,"data-orderby":o,"data-reviews-on-page-load":c,"data-reviews-on-load-more":a,"data-show-load-more":s,"data-show-orderby":i};return n&&(l["data-product-id"]=n),Array.isArray(t)&&(l["data-category-ids"]=t.join(",")),l}},55:function(e,t,r){"use strict";var o=r(5),n=r.n(o),c=r(0),a=r(6),s=r(4),i=r.n(s),l=r(3),d=r(9);r(84);class u extends c.Component{constructor(){super(...arguments),this.onClick=this.onClick.bind(this)}onClick(e){this.props.onChange&&this.props.onChange(e.target.value)}render(){const{label:e,checked:t,instanceId:r,className:o,help:s,options:d,value:u}=this.props,b="inspector-toggle-button-control-"+r;let w;return s&&(w=Object(a.isFunction)(s)?s(t):s),Object(c.createElement)(l.BaseControl,{id:b,help:w,className:i()("components-toggle-button-control",o)},Object(c.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},e),Object(c.createElement)(l.ButtonGroup,{"aria-labelledby":b+"__label"},d.map((t,r)=>{const o={};return u===t.value?(o.isPrimary=!0,o["aria-pressed"]=!0):(o.isSecondary=!0,o["aria-pressed"]=!1),Object(c.createElement)(l.Button,n()({key:`${t.label}-${t.value}-${r}`,value:t.value,onClick:this.onClick,"aria-label":e+": "+t.label},o),t.label)})))}}t.a=Object(d.withInstanceId)(u)},6:function(e,t){e.exports=window.lodash},7:function(e,t){e.exports=window.wp.blockEditor},71:function(e,t,r){"use strict";var o=r(0),n=r(1),c=r(43),a=r(103),s=r(4),i=r.n(s),l=r(3),d=r(32);r(104),t.a=e=>{let{className:t,error:r,isLoading:s=!1,onRetry:u}=e;return Object(o.createElement)(l.Placeholder,{icon:Object(o.createElement)(c.a,{srcElement:a.a}),label:Object(n.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:i()("wc-block-api-error",t)},Object(o.createElement)(d.a,{error:r}),u&&Object(o.createElement)(o.Fragment,null,s?Object(o.createElement)(l.Spinner,null):Object(o.createElement)(l.Button,{isSecondary:!0,onClick:u},Object(n.__)("Retry","woo-gutenberg-products-block"))))}},8:function(e,t){e.exports=window.React},84:function(e,t){},9:function(e,t){e.exports=window.wp.compose},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return u}));var o=r(0),n=r(1),c=r(3),a=r(7),s=r(2),i=r(55);const l=(e,t,r)=>Object(o.createElement)(a.BlockControls,null,Object(o.createElement)(c.ToolbarGroup,{controls:[{icon:"edit",title:r,onClick:()=>t({editMode:!e}),isActive:e}]})),d=(e,t)=>{const r=Object(s.getSetting)("showAvatars",!0),a=Object(s.getSetting)("reviewRatingsEnabled",!0);return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Product rating","woo-gutenberg-products-block"),checked:e.showReviewRating,onChange:()=>t({showReviewRating:!e.showReviewRating})}),e.showReviewRating&&!a&&Object(o.createElement)(c.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(o.createInterpolateElement)(Object(n.__)("Product rating is disabled in your <a>store settings</a>.","woo-gutenberg-products-block"),{a:Object(o.createElement)("a",{href:Object(s.getAdminLink)("admin.php?page=wc-settings&tab=products"),target:"_blank",rel:"noopener noreferrer"})})),Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Reviewer name","woo-gutenberg-products-block"),checked:e.showReviewerName,onChange:()=>t({showReviewerName:!e.showReviewerName})}),Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Image","woo-gutenberg-products-block"),checked:e.showReviewImage,onChange:()=>t({showReviewImage:!e.showReviewImage})}),Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Review date","woo-gutenberg-products-block"),checked:e.showReviewDate,onChange:()=>t({showReviewDate:!e.showReviewDate})}),Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Review content","woo-gutenberg-products-block"),checked:e.showReviewContent,onChange:()=>t({showReviewContent:!e.showReviewContent})}),e.showReviewImage&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.a,{label:Object(n.__)("Review image","woo-gutenberg-products-block"),value:e.imageType,options:[{label:Object(n.__)("Reviewer photo","woo-gutenberg-products-block"),value:"reviewer"},{label:Object(n.__)("Product","woo-gutenberg-products-block"),value:"product"}],onChange:e=>t({imageType:e})}),"reviewer"===e.imageType&&!r&&Object(o.createElement)(c.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},Object(o.createInterpolateElement)(Object(n.__)("Reviewer photo is disabled in your <a>site settings</a>.","woo-gutenberg-products-block"),{a:Object(o.createElement)("a",{href:Object(s.getAdminLink)("options-discussion.php"),target:"_blank",rel:"noopener noreferrer"})}))))},u=(e,t)=>Object(o.createElement)(o.Fragment,null,Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Order by","woo-gutenberg-products-block"),checked:e.showOrderby,onChange:()=>t({showOrderby:!e.showOrderby})}),Object(o.createElement)(c.SelectControl,{label:Object(n.__)("Order Product Reviews by","woo-gutenberg-products-block"),value:e.orderby,options:[{label:"Most recent",value:"most-recent"},{label:"Highest Rating",value:"highest-rating"},{label:"Lowest Rating",value:"lowest-rating"}],onChange:e=>t({orderby:e})}),Object(o.createElement)(c.RangeControl,{label:Object(n.__)("Starting Number of Reviews","woo-gutenberg-products-block"),value:e.reviewsOnPageLoad,onChange:e=>t({reviewsOnPageLoad:e}),max:20,min:1}),Object(o.createElement)(c.ToggleControl,{label:Object(n.__)("Load more","woo-gutenberg-products-block"),checked:e.showLoadMore,onChange:()=>t({showLoadMore:!e.showLoadMore})}),e.showLoadMore&&Object(o.createElement)(c.RangeControl,{label:Object(n.__)("Load More Reviews","woo-gutenberg-products-block"),value:e.reviewsOnLoadMore,onChange:e=>t({reviewsOnLoadMore:e}),max:20,min:1}))}});