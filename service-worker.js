if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const l=e=>s(e,c),n={module:{uri:c},exports:d,require:l};i[c]=Promise.all(r.map((e=>n[e]||l(e)))).then((e=>(a(...e),d)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"archives/2023/05/index.html",revision:"08f105792b0b70268a5075a0c5324e74"},{url:"archives/2023/index.html",revision:"e0619fc61d14b7e37fe99e83d1b4078b"},{url:"archives/index.html",revision:"9d3024c0fd92a11f3d1bc32446f04c52"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"3cdb5a153bd76b76efce55e3de6d0b32"},{url:"css/index.css",revision:"64167596e30512810d635f7f07e0f1ca"},{url:"css/universe.css",revision:"4717a52a44176b9e02139ec5633b83a3"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/1.jpg",revision:"2b338908c8e59450aa69e9ed96a6c3e0"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/archive.jpg",revision:"005d87a0d938cd0b69f9e62500333db8"},{url:"img/bgimg.png",revision:"57ff4c6530a2ff5dcf69c8ba89540fa3"},{url:"img/categories.jpg",revision:"be9b53e2040c4026223436414e627fdd"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/logo.jpg",revision:"8a2925b6169e7b6355f31f5bde42afef"},{url:"img/tag.jpg",revision:"03ecd35fd88d4a83b3ddf33f932bd16d"},{url:"index.html",revision:"bb2443983c55e62c25c54b84494e8718"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"ffc4f9ad8ed268442ac4a30dc4e44827"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"84ae37027ae8fed1da33bfb75bd1188b"},{url:"post/0.html",revision:"6f155b494558d9a7832385e94a5b8f79"},{url:"tags/index.html",revision:"561d00d6d12a4dac4b47a5aa8d20da1a"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
