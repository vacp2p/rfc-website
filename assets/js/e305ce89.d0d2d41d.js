"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[3798],{82080:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const r={title:"1/COSS",name:"Consensus-Oriented Specification System",status:"draft",category:"Best Current Practice",editor:"Oskar Thoren <oskarth@titanproxy.com>",contributors:["Pieter Hintjens <ph@imatix.com>","Andr\xe9 Rebentisch <andre@openstandards.de>","Alberto Barrionuevo <abarrio@opentia.es>","Chris Puttick <chris.puttick@thehumanjourney.net>","Yurii Rashkovskii <yrashk@gmail.com>","Daniel Kaiser <danielkaiser@status.im>"]},o=void 0,s={unversionedId:"1/coss",id:"1/coss",title:"1/COSS",description:"- Status: draft",source:"@site/vac/1/coss.md",sourceDirName:"1",slug:"/1/coss",permalink:"/vac/1/coss",draft:!1,tags:[],version:"current",frontMatter:{title:"1/COSS",name:"Consensus-Oriented Specification System",status:"draft",category:"Best Current Practice",editor:"Oskar Thoren \\<oskarth@titanproxy.com\\>",contributors:["Pieter Hintjens \\<ph@imatix.com\\>","Andr\xe9 Rebentisch \\<andre@openstandards.de\\>","Alberto Barrionuevo \\<abarrio@opentia.es\\>","Chris Puttick \\<chris.puttick@thehumanjourney.net\\>","Yurii Rashkovskii \\<yrashk@gmail.com\\>","Daniel Kaiser \\<danielkaiser@status.im\\>"]},sidebar:"defaultSidebar",previous:{title:"RLN-STEALTH-COMMITMENTS",permalink:"/vac/raw/rln-stealth-commitments"},next:{title:"2/MVDS",permalink:"/vac/2/mvds"}},l={},c=[{value:"License",id:"license",level:2},{value:"Change Process",id:"change-process",level:2},{value:"Language",id:"language",level:2},{value:"Goals",id:"goals",level:2},{value:"Architecture",id:"architecture",level:2},{value:"COSS Lifecycle",id:"coss-lifecycle",level:2},{value:"Raw Specifications",id:"raw-specifications",level:3},{value:"Draft Specifications",id:"draft-specifications",level:3},{value:"Stable Specifications",id:"stable-specifications",level:3},{value:"Deprecated Specifications",id:"deprecated-specifications",level:3},{value:"Retired Specifications",id:"retired-specifications",level:3},{value:"Deleted Specifications",id:"deleted-specifications",level:3},{value:"Editorial control",id:"editorial-control",level:2},{value:"Branching and Merging",id:"branching-and-merging",level:2},{value:"Conflict resolution",id:"conflict-resolution",level:2},{value:"Specification Structure",id:"specification-structure",level:2},{value:"Meta Information",id:"meta-information",level:3},{value:"Specification Template",id:"specification-template",level:3},{value:"Conventions",id:"conventions",level:2},{value:"Appendix A. Color Coding",id:"appendix-a-color-coding",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Status: draft"),(0,n.kt)("li",{parentName:"ul"},"Category: Best Current Practice"),(0,n.kt)("li",{parentName:"ul"},"Editor: Oskar Thoren \\",(0,n.kt)("a",{parentName:"li",href:"mailto:oskarth@titanproxy.com%5C"},"oskarth@titanproxy.com\\")),(0,n.kt)("li",{parentName:"ul"},"Contributors::",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Pieter Hintjens \\",(0,n.kt)("a",{parentName:"li",href:"mailto:ph@imatix.com%5C"},"ph@imatix.com\\")),(0,n.kt)("li",{parentName:"ul"},"Andr\xe9 Rebentisch \\",(0,n.kt)("a",{parentName:"li",href:"mailto:andre@openstandards.de%5C"},"andre@openstandards.de\\")),(0,n.kt)("li",{parentName:"ul"},"Alberto Barrionuevo \\",(0,n.kt)("a",{parentName:"li",href:"mailto:abarrio@opentia.es%5C"},"abarrio@opentia.es\\")),(0,n.kt)("li",{parentName:"ul"},"Chris Puttick \\",(0,n.kt)("a",{parentName:"li",href:"mailto:chris.puttick@thehumanjourney.net%5C"},"chris.puttick@thehumanjourney.net\\")),(0,n.kt)("li",{parentName:"ul"},"Yurii Rashkovskii \\",(0,n.kt)("a",{parentName:"li",href:"mailto:yrashk@gmail.com%5C"},"yrashk@gmail.com\\")),(0,n.kt)("li",{parentName:"ul"},"Daniel Kaiser \\",(0,n.kt)("a",{parentName:"li",href:"mailto:danielkaiser@status.im%5C"},"danielkaiser@status.im\\"))))),(0,n.kt)("p",null,"This document describes a consensus-oriented specification system (COSS) for building interoperable technical specifications.\nCOSS is based on a lightweight editorial process that seeks to engage the widest possible range of interested parties and move rapidly to consensus through working code."),(0,n.kt)("p",null,"This specification is based on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/unprotocols/rfc/blob/master/2/README"},"Unprotocols 2/COSS"),", used by the ",(0,n.kt)("a",{parentName:"p",href:"https://rfc.zeromq.org/"},"ZeromMQ")," project.\nIt is equivalent except for some areas:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"recommending the use of a permissive licenses, such as CC0 (with the exception of this document);"),(0,n.kt)("li",{parentName:"ul"},"miscellaneous metadata, editor, and format/link updates;"),(0,n.kt)("li",{parentName:"ul"},"more inheritance from the ","[IETF Standards Process][https://www.rfc-editor.org/rfc/rfc2026.txt]",",\ne.g. using RFC categories: Standards Track, Informational, and Best Common Practice;"),(0,n.kt)("li",{parentName:"ul"},"standards track specifications SHOULD follow a specific structure that both streamlines editing,\nand helps implementers to quickly comprehend the specification"),(0,n.kt)("li",{parentName:"ul"},"specifications MUST feature a header providing specific meta information")),(0,n.kt)("h2",{id:"license"},"License"),(0,n.kt)("p",null,"Copyright (c) 2008-22 the Editor and Contributors."),(0,n.kt)("p",null,"This Specification is free software;\nyou can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation;\neither version 3 of the License, or (at your option) any later version."),(0,n.kt)("p",null,"This Specification is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\nwithout even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\nSee the GNU General Public License for more details."),(0,n.kt)("p",null,"You should have received a copy of the GNU General Public License along with this program;\nif not, see ",(0,n.kt)("a",{parentName:"p",href:"http://www.gnu.org/licenses"},"http://www.gnu.org/licenses"),"."),(0,n.kt)("h2",{id:"change-process"},"Change Process"),(0,n.kt)("p",null,"This document is governed by the ",(0,n.kt)("a",{parentName:"p",href:"./coss"},"1/COSS")," (COSS)."),(0,n.kt)("h2",{id:"language"},"Language"),(0,n.kt)("p",null,'The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" in this document are to be interpreted as described in\n',(0,n.kt)("a",{parentName:"p",href:"http://tools.ietf.org/html/rfc2119"},"RFC 2119"),"."),(0,n.kt)("h2",{id:"goals"},"Goals"),(0,n.kt)("p",null,'The primary goal of COSS is to facilitate the process of writing, proving, and improving new technical specifications.\nA "technical specification" defines a protocol, a process, an API, a use of language, a methodology,\nor any other aspect of a technical environment that can usefully be documented for the purposes of technical or social interoperability.'),(0,n.kt)("p",null,"COSS is intended to above all be economical and rapid, so that it is useful to small teams with little time to spend on more formal processes."),(0,n.kt)("p",null,"Principles:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We aim for rough consensus and running code; ",(0,n.kt)("a",{parentName:"li",href:"https://www.ietf.org/about/participate/tao/"},"inspired by the IETF Tao"),"."),(0,n.kt)("li",{parentName:"ul"},"Specifications are small pieces, made by small teams."),(0,n.kt)("li",{parentName:"ul"},"Specifications should have a clearly responsible editor."),(0,n.kt)("li",{parentName:"ul"},"The process should be visible, objective, and accessible to anyone."),(0,n.kt)("li",{parentName:"ul"},"The process should clearly separate experiments from solutions."),(0,n.kt)("li",{parentName:"ul"},"The process should allow deprecation of old specifications.")),(0,n.kt)("p",null,"Specifications should take minutes to explain, hours to design, days to write, weeks to prove, months to become mature, and years to replace."),(0,n.kt)("p",null,"Specifications have no special status except that accorded by the community."),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"COSS is designed around fast, easy to use communications tools.\nPrimarily, COSS uses a wiki model for editing and publishing specifications texts."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("em",{parentName:"li"},"domain")," is the conservancy for a set of specifications in a certain area."),(0,n.kt)("li",{parentName:"ul"},"Each domain is implemented as an Internet domain, hosting a wiki and optionally other communications tools."),(0,n.kt)("li",{parentName:"ul"},"Each specification is a set of wiki pages, together with comments, attached files, and other resources."),(0,n.kt)("li",{parentName:"ul"},"Important specifications may also exist as subdomains, i.e. child wikis.")),(0,n.kt)("p",null,"Individuals can become members of the domain by completing the necessary legal clearance.\nThe copyright, patent, and trademark policies of the domain must be clarified in an Intellectual Property policy that applies to the domain."),(0,n.kt)("p",null,'Specifications exist as multiple pages, one page per version of the specification (see "Branching and Merging", below), which may be assigned URIs that include an incremental number.\nThus, we refer to a specification by specifying its domain, number, and short name.\nNew versions of the same specification will have new numbers.\nThe syntax for a specification reference is:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\\<domain\\>/spec/\\<number\\>/\\<shortname\\>\n")),(0,n.kt)("p",null,"For example, this specification is ",(0,n.kt)("strong",{parentName:"p"},"rfc.vac.dev/spec/1/COSS"),".\nThe short form ",(0,n.kt)("strong",{parentName:"p"},"1/COSS")," may be used when referring to the specification from other specifications in the same domain."),(0,n.kt)("p",null,"Every specification (including branches) carries a different number."),(0,n.kt)("h2",{id:"coss-lifecycle"},"COSS Lifecycle"),(0,n.kt)("p",null,"Every specification has an independent lifecycle that documents clearly its current status."),(0,n.kt)("p",null,"A specification has six possible states that reflect its maturity and contractual weight:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Lifecycle diagram",src:a(2917).Z,width:"1256",height:"609"})),(0,n.kt)("h3",{id:"raw-specifications"},"Raw Specifications"),(0,n.kt)("p",null,"All new specifications are ",(0,n.kt)("strong",{parentName:"p"},"raw")," specifications.\nChanges to raw specifications can be unilateral and arbitrary.\nThose seeking to implement a raw specification should ask for it to be made a draft specification.\nRaw specifications have no contractual weight."),(0,n.kt)("h3",{id:"draft-specifications"},"Draft Specifications"),(0,n.kt)("p",null,"When raw specifications can be demonstrated, they become ",(0,n.kt)("strong",{parentName:"p"},"draft")," specifications.\nChanges to draft specifications should be done in consultation with users.\nDraft specifications are contracts between the editors and implementers."),(0,n.kt)("h3",{id:"stable-specifications"},"Stable Specifications"),(0,n.kt)("p",null,"When draft specifications are used by third parties, they become ",(0,n.kt)("strong",{parentName:"p"},"stable")," specifications.\nChanges to stable specifications should be restricted to cosmetic ones, errata and clarifications.\nStable specifications are contracts between editors, implementers, and end-users."),(0,n.kt)("h3",{id:"deprecated-specifications"},"Deprecated Specifications"),(0,n.kt)("p",null,"When stable specifications are replaced by newer draft specifications, they become ",(0,n.kt)("strong",{parentName:"p"},"deprecated")," specifications.\nDeprecated specifications should not be changed except to indicate their replacements, if any.\nDeprecated specifications are contracts between editors, implementers and end-users."),(0,n.kt)("h3",{id:"retired-specifications"},"Retired Specifications"),(0,n.kt)("p",null,"When deprecated specifications are no longer used in products, they become ",(0,n.kt)("strong",{parentName:"p"},"retired")," specifications.\nRetired specifications are part of the historical record.\nThey should not be changed except to indicate their replacements, if any.\nRetired specifications have no contractual weight."),(0,n.kt)("h3",{id:"deleted-specifications"},"Deleted Specifications"),(0,n.kt)("p",null,"Deleted specifications are those that have not reached maturity (stable) and were discarded.\nThey should not be used and are only kept for their historical value.\nOnly Raw and Draft specifications can be deleted."),(0,n.kt)("h2",{id:"editorial-control"},"Editorial control"),(0,n.kt)("p",null,"A specification MUST have a single responsible editor,\nthe only person who SHALL change the status of the specification through the lifecycle stages."),(0,n.kt)("p",null,"A specification MAY also have additional contributors who contribute changes to it.\nIt is RECOMMENDED to use a process similar to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/unprotocols/rfc/blob/master/1/README"},"C4 process"),"\nto maximize the scale and diversity of contributions."),(0,n.kt)("p",null,"Unlike the original C4 process however, it is RECOMMENDED to use CC0 as a more permissive license alternative.\nWe SHOULD NOT use GPL or GPL-like license.\nOne exception is this specification, as this was the original license for this specification."),(0,n.kt)("p",null,"The editor is responsible for accurately maintaining the state of specifications and for handling all comments on the specification."),(0,n.kt)("h2",{id:"branching-and-merging"},"Branching and Merging"),(0,n.kt)("p",null,"Any member of the domain MAY branch a specification at any point.\nThis is done by copying the existing text, and creating a new specification with the same name and content, but a new number.\nThe ability to branch a specification is necessary in these circumstances:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To change the responsible editor for a specification, with or without the cooperation of the current responsible editor."),(0,n.kt)("li",{parentName:"ul"},"To rejuvenate a specification that is stable but needs functional changes.\nThis is the proper way to make a new version of a specification that is in stable or deprecated status."),(0,n.kt)("li",{parentName:"ul"},"To resolve disputes between different technical opinions.")),(0,n.kt)("p",null,"The responsible editor of a branched specification is the person who makes the branch."),(0,n.kt)("p",null,"Branches, including added contributions, are derived works and thus licensed under the same terms as the original specification.\nThis means that contributors are guaranteed the right to merge changes made in branches back into their original specifications."),(0,n.kt)("p",null,"Technically speaking, a branch is a ",(0,n.kt)("em",{parentName:"p"},"different")," specification, even if it carries the same name.\nBranches have no special status except that accorded by the community."),(0,n.kt)("h2",{id:"conflict-resolution"},"Conflict resolution"),(0,n.kt)("p",null,"COSS resolves natural conflicts between teams and vendors by allowing anyone to define a new specification.\nThere is no editorial control process except that practised by the editor of a new specification.\nThe administrators of a domain (moderators) may choose to interfere in editorial conflicts,\nand may suspend or ban individuals for behaviour they consider inappropriate."),(0,n.kt)("h2",{id:"specification-structure"},"Specification Structure"),(0,n.kt)("h3",{id:"meta-information"},"Meta Information"),(0,n.kt)("p",null,"Specifications MUST contain the following metadata.\nIt is RECOMMENDED that specification metadata is specified as a YAML header (where possible).\nThis will enable programmatic access to specification metadata."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Key"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"shortname")),(0,n.kt)("td",{parentName:"tr",align:null},"short name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"1/COSS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"title")),(0,n.kt)("td",{parentName:"tr",align:null},"full name"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Consensus-Oriented Specification System")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"status")),(0,n.kt)("td",{parentName:"tr",align:null},"status"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"draft")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"category")),(0,n.kt)("td",{parentName:"tr",align:null},"category"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Best Current Practice")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"tags")),(0,n.kt)("td",{parentName:"tr",align:null},"0 or several tags"),(0,n.kt)("td",{parentName:"tr",align:null},"list"),(0,n.kt)("td",{parentName:"tr",align:null},"waku-application, waku-core-protocol")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"editor")),(0,n.kt)("td",{parentName:"tr",align:null},"editor name/email"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Oskar Thoren \\",(0,n.kt)("a",{parentName:"td",href:"mailto:oskarth@titanproxy.com%5C"},"oskarth@titanproxy.com\\"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"contributors")),(0,n.kt)("td",{parentName:"tr",align:null},"contributors"),(0,n.kt)("td",{parentName:"tr",align:null},"list"),(0,n.kt)("td",{parentName:"tr",align:null},"- Pieter Hintjens \\",(0,n.kt)("a",{parentName:"td",href:"mailto:ph@imatix.com%5C"},"ph@imatix.com\\"),"\\<br/",">"," - Andr\xe9 Rebentisch \\",(0,n.kt)("a",{parentName:"td",href:"mailto:andre@openstandards.de%5C"},"andre@openstandards.de\\"),"\\<br/",">"," - Alberto Barrionuevo \\",(0,n.kt)("a",{parentName:"td",href:"mailto:abarrio@opentia.es%5C"},"abarrio@opentia.es\\"),"\\<br/",">"," - Chris Puttick \\",(0,n.kt)("a",{parentName:"td",href:"mailto:chris.puttick@thehumanjourney.net%5C"},"chris.puttick@thehumanjourney.net\\"),"\\<br/",">"," - Yurii Rashkovskii \\",(0,n.kt)("a",{parentName:"td",href:"mailto:yrashk@gmail.com%5C"},"yrashk@gmail.com\\"))))),(0,n.kt)("h3",{id:"specification-template"},"Specification Template"),(0,n.kt)("p",null,"Standards Track specifications SHOULD be based on the ",(0,n.kt)("a",{parentName:"p",href:"./images/template"},"Vac RFC template"),"."),(0,n.kt)("h2",{id:"conventions"},"Conventions"),(0,n.kt)("p",null,"Where possible editors and contributors are encouraged to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Refer to and build on existing work when possible, especially IETF specifications."),(0,n.kt)("li",{parentName:"ul"},"Contribute to existing specifications rather than reinvent their own."),(0,n.kt)("li",{parentName:"ul"},"Use collaborative branching and merging as a tool for experimentation."),(0,n.kt)("li",{parentName:"ul"},"Use Semantic Line Breaks: ",(0,n.kt)("a",{parentName:"li",href:"https://sembr.org/"},"https://sembr.org/"),".")),(0,n.kt)("h2",{id:"appendix-a-color-coding"},"Appendix A. Color Coding"),(0,n.kt)("p",null,"It is RECOMMENDED to use color coding to indicate specification's status. Color coded specifications SHOULD use the following color scheme:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://raw.githubusercontent.com/unprotocols/rfc/master/2/raw.svg",alt:"raw"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://raw.githubusercontent.com/unprotocols/rfc/master/2/draft.svg",alt:"draft"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://raw.githubusercontent.com/unprotocols/rfc/master/2/stable.svg",alt:"stable"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://raw.githubusercontent.com/unprotocols/rfc/master/2/deprecated.svg",alt:"deprecated"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://raw.githubusercontent.com/unprotocols/rfc/master/2/retired.svg",alt:"retired"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{parentName:"li",src:"https://raw.githubusercontent.com/unprotocols/rfc/master/2/deleted.svg",alt:"deleted"}))))}d.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?i.createElement(h,o(o({ref:t},p),{},{components:a})):i.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2917:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/lifecycle-ebc51fab60ef30a4d7d045ac3deb0f64.png"}}]);