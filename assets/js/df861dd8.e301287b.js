"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[3021],{51445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={title:"RLN-STEALTH-COMMITMENTS",name:"RLN Stealth Commitment Usage",category:"Standards Track",editor:"Aaryamann Challani &lt;aaryamann@status.im&gt;",contributors:["Jimmy Debe &lt;jimmy@status.im&gt;"]},o=void 0,s={unversionedId:"raw/rln-stealth-commitments",id:"raw/rln-stealth-commitments",title:"RLN-STEALTH-COMMITMENTS",description:"- Category: Standards Track",source:"@site/vac/raw/rln-stealth-commitments.md",sourceDirName:"raw",slug:"/raw/rln-stealth-commitments",permalink:"/vac/raw/rln-stealth-commitments",draft:!1,tags:[],version:"current",frontMatter:{title:"RLN-STEALTH-COMMITMENTS",name:"RLN Stealth Commitment Usage",category:"Standards Track",editor:"Aaryamann Challani &lt;aaryamann@status.im&gt;",contributors:["Jimmy Debe &lt;jimmy@status.im&gt;"]},sidebar:"defaultSidebar",previous:{title:"Vac Raw Specifications",permalink:"/vac/raw/"},next:{title:"1/COSS",permalink:"/vac/1/coss"}},l={},m=[{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Background",id:"background",level:2},{value:"Wire Format Specification",id:"wire-format-specification",level:2},{value:"Generate Stealth Commitment",id:"generate-stealth-commitment",level:3},{value:"Implementation Suggestions",id:"implementation-suggestions",level:2},{value:"Security/Privacy Considerations",id:"securityprivacy-considerations",level:2},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],p={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Category: Standards Track"),(0,r.kt)("li",{parentName:"ul"},"Editor: Aaryamann Challani ","<",(0,r.kt)("a",{parentName:"li",href:"mailto:aaryamann@status.im"},"aaryamann@status.im"),">"),(0,r.kt)("li",{parentName:"ul"},"Contributors:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Jimmy Debe ","<",(0,r.kt)("a",{parentName:"li",href:"mailto:jimmy@status.im"},"jimmy@status.im"),">")))),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"This specification describes the usage of stealth commitments to add prospective users to a network-governed ",(0,r.kt)("a",{parentName:"p",href:"./32/rln-v1"},"32/RLN-V1")," membership set."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"./32/rln-v1"},"32/RLN-V1")," is enforced in ",(0,r.kt)("a",{parentName:"p",href:"../waku/standards/core/10/waku2"},"10/Waku2"),",\nall users are required to register to a membership set.\nThe membership set will store user identities allowing the secure interaction within an application.\nForcing a user to do an on-chain transaction to join a membership set is an onboarding friction,\nand some projects may be opposed to this method.\nTo improve the user experience,\nstealth commitments can be used by a counterparty to register identities on the user's behalf,\nwhile maintaining the user's anonymity."),(0,r.kt)("p",null,"This document specifies a privacy-preserving mechanism,\nallowing a counterparty to utilize ",(0,r.kt)("a",{parentName:"p",href:"./32/rln-v1"},"32/RLN-V1")," to register an ",(0,r.kt)("inlineCode",{parentName:"p"},"identityCommitment")," on-chain.\nCounterparties will be able to register members to a RLN membership set without exposing the user's private keys."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"./32/rln-v1"},"32/RLN-V1")," protocol,\nconsists of a smart contract that stores a ",(0,r.kt)("inlineCode",{parentName:"p"},"idenitityCommitment")," in a membership set.\nIn order for a user to join the membership set,\nthe user is required to make a transaction on the blockchain.\nA set of public keys is used to compute a stealth commitment for a user,\nas described in ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-5564"},"ERC-5564"),".\nThis specification is an implementation of the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-5564"},"ERC-5564")," scheme,\ntailored to the curve that is used in the ",(0,r.kt)("a",{parentName:"p",href:"./32/rln-v1"},"32/RLN-V1")," protocol."),(0,r.kt)("p",null,"This can be used in a couple of ways in applications:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Applications can add users to the ",(0,r.kt)("a",{parentName:"li",href:"./32/rln-v1"},"32/RLN-V1")," membership set in a batch."),(0,r.kt)("li",{parentName:"ol"},"Users of the application can register other users to the ",(0,r.kt)("a",{parentName:"li",href:"./32/rln-v1"},"32/RLN-V1")," membership set.")),(0,r.kt)("p",null,"This is useful when the prospective user does not have access to funds on the network that ",(0,r.kt)("a",{parentName:"p",href:"./32/rln-v1"},"32/RLN-V1")," is deployed on."),(0,r.kt)("h2",{id:"wire-format-specification"},"Wire Format Specification"),(0,r.kt)("p",null,"The two parties, the requester and the receiver, MUST exchange the following information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"\nmessage Request {\n  // The spending public key of the requester\n  bytes spending_public_key = 1;\n\n  // The viewing public key of the requester\n  bytes viewing_public_key = 2;\n}\n\n")),(0,r.kt)("h3",{id:"generate-stealth-commitment"},"Generate Stealth Commitment"),(0,r.kt)("p",null,"The application or user SHOULD generate a ",(0,r.kt)("inlineCode",{parentName:"p"},"stealth_commitment")," after a request to do so is received.\nThis commitment MAY be inserted into the corresponding application membership set."),(0,r.kt)("p",null,"Once the membership set is updated, the receiver SHOULD exchange the following as a response to the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},"\nmessage Response {\n  \n  // The used to check if the stealth_commitment belongs to the requester\n  bytes view_tag = 2;\n\n  // The stealth commitment for the requester\n  bytes stealth_commitment = 3;\n\n  // The ephemeral public key used to generate the commitment\n  bytes ephemeral_public_key = 4;\n\n}\n\n")),(0,r.kt)("p",null,"The receiver MUST generate an ",(0,r.kt)("inlineCode",{parentName:"p"},"ephemeral_public_key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"view_tag")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"stealth_commitment"),".\nThis will be used to check the stealth commitment used to register to the membership set,\nand the user MUST be able to check ownership with their ",(0,r.kt)("inlineCode",{parentName:"p"},"viewing_public_key"),"."),(0,r.kt)("h2",{id:"implementation-suggestions"},"Implementation Suggestions"),(0,r.kt)("p",null,"An implementation of the Stealth Address scheme is available in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rymnc/erc-5564-bn254"},"erc-5564-bn254")," repository,\nwhich also includes a test to generate a stealth commitment for a given user."),(0,r.kt)("h2",{id:"securityprivacy-considerations"},"Security/Privacy Considerations"),(0,r.kt)("p",null,"This specification inherits the security and privacy considerations of the ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-5564"},"Stealth Address")," scheme."),(0,r.kt)("h2",{id:"copyright"},"Copyright"),(0,r.kt)("p",null,"Copyright and related rights waived via ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../waku/standards/core/10/waku2"},"10/Waku2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./32/rln-v1"},"32/RLN-V1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-5564"},"ERC-5564"))))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);