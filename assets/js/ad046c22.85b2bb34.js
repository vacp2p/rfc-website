"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[470],{91238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"3/REMOTE-LOG",name:"Remote log specification",status:"draft",editor:"Oskar Thor\xe9n &lt;oskarth@titanproxy.com&gt;",contributors:["Dean Eigenmann &lt;dean@status.im&gt;"]},l=void 0,i={unversionedId:"3/remote-log",id:"3/remote-log",title:"3/REMOTE-LOG",description:"- Status: draft",source:"@site/vac/3/remote-log.md",sourceDirName:"3",slug:"/3/remote-log",permalink:"/vac/3/remote-log",draft:!1,tags:[],version:"current",frontMatter:{title:"3/REMOTE-LOG",name:"Remote log specification",status:"draft",editor:"Oskar Thor\xe9n &lt;oskarth@titanproxy.com&gt;",contributors:["Dean Eigenmann &lt;dean@status.im&gt;"]},sidebar:"defaultSidebar",previous:{title:"2/MVDS",permalink:"/vac/2/mvds"},next:{title:"4/MVDS-META",permalink:"/vac/4/mvds-meta"}},s={},p=[{value:"Definitions",id:"definitions",level:2},{value:"Wire Protocol",id:"wire-protocol",level:2},{value:"Secure Transport, storage, and name system",id:"secure-transport-storage-and-name-system",level:3},{value:"Payloads",id:"payloads",level:3},{value:"Synchronization",id:"synchronization",level:2},{value:"Roles",id:"roles",level:3},{value:"Flow",id:"flow",level:3},{value:"Remote log",id:"remote-log",level:3},{value:"Next page semantics",id:"next-page-semantics",level:3},{value:"Interaction with MVDS",id:"interaction-with-mvds",level:3},{value:"Acknowledgments",id:"acknowledgments",level:2},{value:"Copyright",id:"copyright",level:2},{value:"Footnotes",id:"footnotes",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Status: draft"),(0,r.kt)("li",{parentName:"ul"},"Editor: Oskar Thor\xe9n ","<",(0,r.kt)("a",{parentName:"li",href:"mailto:oskarth@titanproxy.com"},"oskarth@titanproxy.com"),">"),(0,r.kt)("li",{parentName:"ul"},"Contributors:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dean Eigenmann ","<",(0,r.kt)("a",{parentName:"li",href:"mailto:dean@status.im"},"dean@status.im"),">")))),(0,r.kt)("p",null,"A remote log is a replication of a local log. This means a node can read data that originally came from a node that is offline."),(0,r.kt)("p",null,"This specification is complemented by a proof of concept implementation",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("h2",{id:"definitions"},"Definitions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Term"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CAS"),(0,r.kt)("td",{parentName:"tr",align:null},"Content-addressed storage. Stores data that can be addressed by its hash.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NS"),(0,r.kt)("td",{parentName:"tr",align:null},"Name system. Associates mutable data to a name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Remote log"),(0,r.kt)("td",{parentName:"tr",align:null},"Replication of a local log at a different location.")))),(0,r.kt)("h2",{id:"wire-protocol"},"Wire Protocol"),(0,r.kt)("h3",{id:"secure-transport-storage-and-name-system"},"Secure Transport, storage, and name system"),(0,r.kt)("p",null,"This specification does not define anything related to: secure transport,\ncontent addressed storage, or the name system. It is assumed these capabilities\nare abstracted away in such a way that any such protocol can easily be\nimplemented."),(0,r.kt)("h3",{id:"payloads"},"Payloads"),(0,r.kt)("p",null,"Payloads are implemented using ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/"},"protocol buffers v3"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CAS service"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage vac.cas;\n\nservice CAS {\n  rpc Add(Content) returns (Address) {}\n  rpc Get(Address) returns (Content) {}\n}\n\nmessage Address {\n  bytes id = 1;\n}\n\nmessage Content {\n  bytes data = 1;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NS service"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage vac.cas;\n\nservice NS {\n  rpc Update(NameUpdate) returns (Response) {}\n  rpc Fetch(Query) returns (Content) {}\n}\n\nmessage NameUpdate {\n  string name = 1;\n  bytes content = 2;\n}\n\nmessage Query {\n  string name = 1;\n}\n\nmessage Content {\n  bytes data = 1;\n}\n\nmessage Response {\n  bytes data = 1;\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Remote log:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf"},'syntax = "proto3";\n\npackage vac.cas;\n\nmessage RemoteLog {\n  repeated Pair pair = 1;\n  bytes tail = 2;\n\n  message Pair {\n    bytes remoteHash = 1;\n    bytes localHash = 2;\n    bytes data = 3;\n  }\n}\n')),(0,r.kt)("h2",{id:"synchronization"},"Synchronization"),(0,r.kt)("h3",{id:"roles"},"Roles"),(0,r.kt)("p",null,"There are four fundamental roles:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Alice"),(0,r.kt)("li",{parentName:"ol"},"Bob"),(0,r.kt)("li",{parentName:"ol"},"Name system (NS)"),(0,r.kt)("li",{parentName:"ol"},"Content-addressed storage (CAS)")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"remote log")," protobuf is what is stored in the name system."),(0,r.kt)("p",null,'"Bob" can represent anything from 0 to N participants. Unlike Alice, Bob only needs read-only access to NS and CAS.'),(0,r.kt)("h3",{id:"flow"},"Flow"),(0,r.kt)("p",null,"<",'p align="center"',">","\n","<",'img src="./images/remote-log.png" /',">","\n","<","br /",">","\nFigure 1: Remote log data synchronization.\n","<","/p",">"),(0,r.kt)("h3",{id:"remote-log"},"Remote log"),(0,r.kt)("p",null,"The remote log lets receiving nodes know what data they are missing. Depending\non the specific requirements and capabilities of the nodes and name system, the\ninformation can be referred to differently. We distinguish between three rough\nmodes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Fully replicated log"),(0,r.kt)("li",{parentName:"ol"},"Normal sized page with CAS mapping"),(0,r.kt)("li",{parentName:"ol"},'"Linked list" mode - minimally sized page with CAS mapping')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Data format:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"| H1_3 | H2_3 |\n| H1_2 | H2_2 |\n| H1_1 | H2_1 |\n| ------------|\n| next_page   |\n")),(0,r.kt)("p",null,"Here the upper section indicates a list of ordered pairs, and the lower section\ncontains the address for the next page chunk. ",(0,r.kt)("inlineCode",{parentName:"p"},"H1")," is the native hash function,\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"H2")," is the one used by the CAS. The numbers corresponds to the messages."),(0,r.kt)("p",null,"To indicate which CAS is used, a remote log SHOULD use a multiaddr."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Embedded data:")),(0,r.kt)("p",null,"A remote log MAY also choose to embed the wire payloads that corresponds to the\nnative hash. This bypasses the need for a dedicated CAS and additional\nround-trips, with a trade-off in bandwidth usage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"| H1_3 | | C_3 |\n| H1_2 | | C_2 |\n| H1_1 | | C_1 |\n| -------------|\n| next_page    |\n")),(0,r.kt)("p",null,"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," stands for the content that would be stored at the CAS."),(0,r.kt)("p",null,"Both patterns can be used in parallel, e,g. by storing the last ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," messages\ndirectly and use CAS pointers for the rest. Together with the ",(0,r.kt)("inlineCode",{parentName:"p"},"next_page")," page\nsemantics, this gives users flexibility in terms of bandwidth and\nlatency/indirection, all the way from a simple linked list to a fully replicated\nlog. The latter is useful for things like backups on durable storage."),(0,r.kt)("h3",{id:"next-page-semantics"},"Next page semantics"),(0,r.kt)("p",null,"The pointer to the 'next page' is another remote log entry, at a previous point\nin time."),(0,r.kt)("h3",{id:"interaction-with-mvds"},"Interaction with MVDS"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../2/mvds#payloads"},"vac.mvds.Message")," payloads are the only payloads that MUST be uploaded. Other messages types MAY be uploaded, depending on the implementation."),(0,r.kt)("h2",{id:"acknowledgments"},"Acknowledgments"),(0,r.kt)("p",null,"TBD."),(0,r.kt)("h2",{id:"copyright"},"Copyright"),(0,r.kt)("p",null,"Copyright and related rights waived via ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,r.kt)("h2",{id:"footnotes"},"Footnotes"),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"<",(0,r.kt)("a",{parentName:"li",href:"https://github.com/vacp2p/research/tree/master/remote_log"},"https://github.com/vacp2p/research/tree/master/remote_log"),">",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);