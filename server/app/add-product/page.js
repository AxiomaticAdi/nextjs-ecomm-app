(()=>{var e={};e.id=307,e.ids=[307],e.modules={3524:e=>{"use strict";e.exports=require("@prisma/client")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},1790:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page-experimental.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3464:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>p,routeModule:()=>x,tree:()=>l});var a=r(3137),s=r(4647),n=r(4183),i=r.n(n),o=r(1775),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let c=a.AppPageRouteModule,l=["",{children:["add-product",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8170)),"/Users/adi/Documents/Coding/Projects/ecomm-app/src/app/add-product/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,6554)),"/Users/adi/Documents/Coding/Projects/ecomm-app/src/app/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,8520)),"/Users/adi/Documents/Coding/Projects/ecomm-app/src/app/loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,6197)),"/Users/adi/Documents/Coding/Projects/ecomm-app/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/adi/Documents/Coding/Projects/ecomm-app/src/app/add-product/page.tsx"],u="/add-product/page",m={require:r,loadChunk:()=>Promise.resolve()},x=new c({definition:{kind:s.x.APP_PAGE,page:"/add-product/page",pathname:"/add-product",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},1652:(e,t,r)=>{let a={"08d13b580df1d3d526b647d649b759be8498f16f":()=>Promise.resolve().then(r.bind(r,8170)).then(e=>e.$$ACTION_0)};async function endpoint(e,...t){let r=await a[e]();return r.apply(null,t)}e.exports={"08d13b580df1d3d526b647d649b759be8498f16f":endpoint.bind(null,"08d13b580df1d3d526b647d649b759be8498f16f")}},8170:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_0:()=>$$ACTION_0,default:()=>AddProductPage,metadata:()=>i});var a=r(8144),s=r(459),n=r(2810);let i={title:"Add product - Spooky Paws"};async function addProduct(...e){return $$ACTION_0.apply(null,(addProduct.$$bound||[]).concat(e))}async function $$ACTION_0(e){console.log("Did we get here?");let t=e.get("name")?.toString(),r=e.get("description")?.toString(),a=e.get("imageUrl")?.toString(),s=Number(e.get("price")||0);if(t&&r&&a&&s){let e={name:t,description:r,imageUrl:a,price:s};console.log(e),await n.Z.product.create({data:e})}else throw Error("Missing required fields")}function AddProductPage(){return(0,a.jsxs)("div",{className:"flex max-w-2xl flex-initial flex-col justify-center bg-transparent align-top",children:[a.jsx("h1",{className:"m-4 bg-black text-center align-middle text-2xl font-bold",children:"Add product"}),(0,a.jsxs)("form",{action:addProduct,className:"form-control",children:[a.jsx("input",{required:!0,name:"name",placeholder:"Product name",className:"input mb-4"}),a.jsx("textarea",{required:!0,name:"description",placeholder:"Product description",className:"textarea mb-4 text-base"}),a.jsx("input",{required:!0,name:"imageUrl",placeholder:"Image URL",className:"input mb-4",type:"url"}),a.jsx("input",{required:!0,name:"price",placeholder:"Price",className:"input mb-4",type:"number"}),a.jsx("button",{type:"submit",className:"btn btn-primary",children:"Add product"})]})]})}(0,s.U)("08d13b580df1d3d526b647d649b759be8498f16f",null,addProduct,$$ACTION_0)},2810:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(3524);let s=globalThis,n=s.prisma??new a.PrismaClient,i=n}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[127,459,438],()=>__webpack_exec__(3464));module.exports=r})();