"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[4277],{99023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"27/WAKU2-PEERS",name:"Waku v2 Client Peer Management Recommendations",status:"draft",editor:"Hanno Cornelius <hanno@status.im>",contributors:null},o=void 0,p={unversionedId:"informational/27/peers",id:"informational/27/peers",title:"27/WAKU2-PEERS",description:"- Status: draft",source:"@site/waku/informational/27/peers.md",sourceDirName:"informational/27",slug:"/informational/27/peers",permalink:"/waku/informational/27/peers",draft:!1,tags:[],version:"current",frontMatter:{title:"27/WAKU2-PEERS",name:"Waku v2 Client Peer Management Recommendations",status:"draft",editor:"Hanno Cornelius \\<hanno@status.im\\>",contributors:null},sidebar:"defaultSidebar",previous:{title:"23/WAKU2-TOPICS",permalink:"/waku/informational/23/topics"},next:{title:"29/WAKU2-CONFIG",permalink:"/waku/informational/29/config"}},l={},s=[{value:"Peer store",id:"peer-store",level:2},{value:"Tracked peer metadata",id:"tracked-peer-metadata",level:3},{value:"Peer connectivity",id:"peer-connectivity",level:3},{value:"Persistence",id:"persistence",level:3},{value:"Peer management",id:"peer-management",level:2},{value:"Reconnecting peers",id:"reconnecting-peers",level:3},{value:"Connection keep-alive",id:"connection-keep-alive",level:3},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Status: draft"),(0,r.kt)("li",{parentName:"ul"},"Editor: Hanno Cornelius \\",(0,r.kt)("a",{parentName:"li",href:"mailto:hanno@status.im%5C"},"hanno@status.im\\"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"27/WAKU2-PEERS")," describes a recommended minimal set of peer storage and peer management features to be implemented by Waku v2 clients."),(0,r.kt)("p",null,"In this context, peer ",(0,r.kt)("em",{parentName:"p"},"storage")," refers to a client's ability to keep track of discovered or statically-configured peers and their metadata.\nIt also deals with matters of peer ",(0,r.kt)("em",{parentName:"p"},"persistence"),",\nor the ability to store peer data on disk to resume state after a client restart."),(0,r.kt)("p",null,"Peer ",(0,r.kt)("em",{parentName:"p"},"management")," is a closely related concept and refers to the set of actions a client MAY choose to perform based on its knowledge of its connected peers,\ne.g. triggering reconnects/disconnects, keeping certain connections alive, etc."),(0,r.kt)("h2",{id:"peer-store"},"Peer store"),(0,r.kt)("p",null,"The peer store SHOULD be an in-memory data structure where information about discovered or configured peers are stored.\nIt SHOULD be considered the main source of truth for peer-related information in a Waku v2 client.\nClients MAY choose to persist this store on-disk."),(0,r.kt)("h3",{id:"tracked-peer-metadata"},"Tracked peer metadata"),(0,r.kt)("p",null,"It is RECOMMENDED that a Waku v2 client tracks at least the following information about each of its peers in a peer store:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metadata"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Public key")),(0,r.kt)("td",{parentName:"tr",align:null},"The public key for this peer. This is related to the libp2p ",(0,r.kt)("a",{parentName:"td",href:"https://docs.libp2p.io/concepts/peer-id/"},(0,r.kt)("inlineCode",{parentName:"a"},"Peer ID")),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Addresses")),(0,r.kt)("td",{parentName:"tr",align:null},"Known transport layer ",(0,r.kt)("a",{parentName:"td",href:"https://docs.libp2p.io/concepts/addressing/"},(0,r.kt)("inlineCode",{parentName:"a"},"multiaddrs"))," for this peer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Protocols")),(0,r.kt)("td",{parentName:"tr",align:null},"The libp2p ",(0,r.kt)("a",{parentName:"td",href:"https://docs.libp2p.io/concepts/protocols/#protocol-ids"},(0,r.kt)("inlineCode",{parentName:"a"},"protocol IDs"))," supported by this peer. This can be used to track the client's connectivity to peers supporting different Waku v2 protocols, e.g. ",(0,r.kt)("a",{parentName:"td",href:"../../standards/core/11/relay"},(0,r.kt)("inlineCode",{parentName:"a"},"11/WAKU2-RELAY"))," or ",(0,r.kt)("a",{parentName:"td",href:"../../standards/core/13/store"},(0,r.kt)("inlineCode",{parentName:"a"},"13/WAKU2-STORE")),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Connectivity")),(0,r.kt)("td",{parentName:"tr",align:null},"Tracks the peer's current connectedness state. See ",(0,r.kt)("a",{parentName:"td",href:"#peer-connectivity"},(0,r.kt)("strong",{parentName:"a"},"Peer connectivity"))," below.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Disconnect time")),(0,r.kt)("td",{parentName:"tr",align:null},"The timestamp at which this peer last disconnected. This becomes important when managing ",(0,r.kt)("a",{parentName:"td",href:"#reconnecting-peers"},"peer reconnections"))))),(0,r.kt)("h3",{id:"peer-connectivity"},"Peer connectivity"),(0,r.kt)("p",null,"A Waku v2 client SHOULD track ",(0,r.kt)("em",{parentName:"p"},"at least")," the following connectivity states for each of its peers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"NotConnected")),": The peer has been discovered or configured on this client,\nbut no attempt has yet been made to connect to this peer.\nThis is the default state for a new peer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"CannotConnect")),": The client attempted to connect to this peer, but failed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"CanConnect")),": The client was recently connected to this peer and disconnected gracefully."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Connected")),": The client is actively connected to this peer.")),(0,r.kt)("p",null,"This list does not preclude clients from tracking more advanced connectivity metadata,\nsuch as a peer's blacklist status (see ",(0,r.kt)("a",{parentName:"p",href:"../../standards/application/18/swap"},(0,r.kt)("inlineCode",{parentName:"a"},"18/WAKU2-SWAP")),")."),(0,r.kt)("h3",{id:"persistence"},"Persistence"),(0,r.kt)("p",null,"A Waku v2 client MAY choose to persist peers across restarts,\nusing any offline storage technology, such as an on-disk database.\nPeer persistence MAY be used to resume peer connections after a client restart."),(0,r.kt)("h2",{id:"peer-management"},"Peer management"),(0,r.kt)("p",null,"Waku v2 clients will have different requirements when it comes to managing the peers tracked in the ",(0,r.kt)("a",{parentName:"p",href:"#peer-store"},(0,r.kt)("strong",{parentName:"a"},"peer store")),".\nIt is RECOMMENDED that clients support:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reconnecting-peers"},"automatic reconnection")," to peers under certain conditions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#connection-keep-alive"},"connection keep-alive"))),(0,r.kt)("h3",{id:"reconnecting-peers"},"Reconnecting peers"),(0,r.kt)("p",null,"A Waku v2 client MAY choose to reconnect to previously connected, managed peers under certain conditions.\nSuch conditions include, but are not limited to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reconnecting to all ",(0,r.kt)("inlineCode",{parentName:"li"},"relay"),"-capable peers after a client restart. This will require ",(0,r.kt)("a",{parentName:"li",href:"#persistence"},"persistent peer storage"),".")),(0,r.kt)("p",null,"If a client chooses to automatically reconnect to previous peers,\nit MUST respect the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.1##prune-backoff-and-peer-exchange"},"backing off period")," specified for GossipSub v1.1 before attempting to reconnect.\nThis requires keeping track of the ",(0,r.kt)("a",{parentName:"p",href:"#tracked-peer-metadata"},"last time each peer was disconnected"),"."),(0,r.kt)("h3",{id:"connection-keep-alive"},"Connection keep-alive"),(0,r.kt)("p",null,"A Waku v2 client MAY choose to implement a keep-alive mechanism to certain peers.\nIf a client chooses to implement keep-alive on a connection,\nit SHOULD do so by sending periodic ",(0,r.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/protocols/#ping"},"libp2p pings")," as per ",(0,r.kt)("inlineCode",{parentName:"p"},"10/WAKU2")," ",(0,r.kt)("a",{parentName:"p",href:"../../standards/core/10/waku2#recommendations-for-clients"},"client recommendations"),".\nThe recommended period between pings SHOULD be ",(0,r.kt)("em",{parentName:"p"},"at most")," 50% of the shortest idle connection timeout for the specific client and transport.\nFor example, idle TCP connections often times out after 10 to 15 minutes."),(0,r.kt)("p",null,">"," ",(0,r.kt)("strong",{parentName:"p"},"Implementation note:")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"nim-waku")," client currently implements a keep-alive mechanism every ",(0,r.kt)("inlineCode",{parentName:"p"},"5 minutes"),",\nin response to a TCP connection timeout of ",(0,r.kt)("inlineCode",{parentName:"p"},"10 minutes"),"."),(0,r.kt)("h2",{id:"copyright"},"Copyright"),(0,r.kt)("p",null,"Copyright and related rights waived via\n",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.libp2p.io/concepts/peer-id/"},(0,r.kt)("inlineCode",{parentName:"a"},"Peer ID"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.libp2p.io/concepts/addressing/"},(0,r.kt)("inlineCode",{parentName:"a"},"multiaddrs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.libp2p.io/concepts/protocols/#protocol-ids"},(0,r.kt)("inlineCode",{parentName:"a"},"protocol IDs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../standards/core/11/relay"},(0,r.kt)("inlineCode",{parentName:"a"},"11/WAKU2-RELAY"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../standards/core/13/store"},(0,r.kt)("inlineCode",{parentName:"a"},"13/WAKU2-STORE"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../standards/application/18/swap"},(0,r.kt)("inlineCode",{parentName:"a"},"18/WAKU2-SWAP"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.1##prune-backoff-and-peer-exchange"},"backing off period")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.libp2p.io/concepts/protocols/#ping"},"libp2p pings")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../standards/core/10/waku2#recommendations-for-clients"},(0,r.kt)("inlineCode",{parentName:"a"},"10/WAKU2")," client recommendations"))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);