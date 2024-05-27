"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[8539],{56577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={title:"54/WAKU2-X3DH-SESSIONS",name:"Session management for Waku X3DH",status:"draft",category:"Standards Track",editor:"Aaryamann Challani &lt;aaryamann@status.im&gt;",contributors:["Andrea Piana &lt;andreap@status.im&gt;","Pedro Pombeiro &lt;pedro@status.im&gt;","Corey Petty &lt;corey@status.im&gt;","Oskar Thor\xe9n &lt;oskarth@titanproxy.com&gt;","Dean Eigenmann &lt;dean@status.im&gt;"]},o=void 0,s={unversionedId:"standards/application/54/x3dh-sessions",id:"standards/application/54/x3dh-sessions",title:"54/WAKU2-X3DH-SESSIONS",description:"- Status: draft",source:"@site/waku/standards/application/54/x3dh-sessions.md",sourceDirName:"standards/application/54",slug:"/standards/application/54/x3dh-sessions",permalink:"/waku/standards/application/54/x3dh-sessions",draft:!1,tags:[],version:"current",frontMatter:{title:"54/WAKU2-X3DH-SESSIONS",name:"Session management for Waku X3DH",status:"draft",category:"Standards Track",editor:"Aaryamann Challani &lt;aaryamann@status.im&gt;",contributors:["Andrea Piana &lt;andreap@status.im&gt;","Pedro Pombeiro &lt;pedro@status.im&gt;","Corey Petty &lt;corey@status.im&gt;","Oskar Thor\xe9n &lt;oskarth@titanproxy.com&gt;","Dean Eigenmann &lt;dean@status.im&gt;"]},sidebar:"defaultSidebar",previous:{title:"53/WAKU2-X3DH",permalink:"/waku/standards/application/53/x3dh"},next:{title:"10/WAKU2",permalink:"/waku/standards/core/10/waku2"}},l={},d=[{value:"Abstract",id:"abstract",level:2},{value:"Session Establishment",id:"session-establishment",level:2},{value:"Discovery of pre-key bundles",id:"discovery-of-pre-key-bundles",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Negotiated topic to be used for the session",id:"negotiated-topic-to-be-used-for-the-session",level:3},{value:"Concurrent sessions",id:"concurrent-sessions",level:3},{value:"Re-keying",id:"re-keying",level:3},{value:"Multi-device support",id:"multi-device-support",level:3},{value:"Pairing",id:"pairing",level:3},{value:"Sending messages to a paired group",id:"sending-messages-to-a-paired-group",level:3},{value:"Account recovery",id:"account-recovery",level:3},{value:"Partitioned devices",id:"partitioned-devices",level:3},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Recommendations",id:"recommendations",level:3},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Status: draft"),(0,i.kt)("li",{parentName:"ul"},"Category: Standards Track"),(0,i.kt)("li",{parentName:"ul"},"Editor: Aaryamann Challani ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:aaryamann@status.im"},"aaryamann@status.im"),">"),(0,i.kt)("li",{parentName:"ul"},"Contributors:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Andrea Piana ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:andreap@status.im"},"andreap@status.im"),">"),(0,i.kt)("li",{parentName:"ul"},"Pedro Pombeiro ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:pedro@status.im"},"pedro@status.im"),">"),(0,i.kt)("li",{parentName:"ul"},"Corey Petty ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:corey@status.im"},"corey@status.im"),">"),(0,i.kt)("li",{parentName:"ul"},"Oskar Thor\xe9n ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:oskarth@titanproxy.com"},"oskarth@titanproxy.com"),">"),(0,i.kt)("li",{parentName:"ul"},"Dean Eigenmann ","<",(0,i.kt)("a",{parentName:"li",href:"mailto:dean@status.im"},"dean@status.im"),">")))),(0,i.kt)("h2",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"This document specifies how to manage sessions based on an X3DH key exchange.\nThis includes how to establish new sessions, how to re-establish them, how to maintain them, and how to close them."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../53/x3dh"},"53/WAKU2-X3DH")," specifies the Waku ",(0,i.kt)("inlineCode",{parentName:"p"},"X3DH")," protocol for end-to-end encryption.\nOnce two peers complete an X3DH handshake, they SHOULD establish an X3DH session."),(0,i.kt)("h2",{id:"session-establishment"},"Session Establishment"),(0,i.kt)("p",null,"A node identifies a peer by their ",(0,i.kt)("inlineCode",{parentName:"p"},"installation-id")," which MAY be interpreted as a device identifier."),(0,i.kt)("h3",{id:"discovery-of-pre-key-bundles"},"Discovery of pre-key bundles"),(0,i.kt)("p",null,"The node's pre-key bundle MUST be broadcast on a content topic derived from the node's public key, so that the first message may be PFS-encrypted.\nEach peer MUST publish their pre-key bundle periodically to this topic, otherwise they risk not being able to perform key-exchanges with other peers.\nEach peer MAY publish to this topic when their metadata changes, so that the other peer can update their local record."),(0,i.kt)("p",null,"If peer A wants to send a message to peer B, it MUST derive the topic from peer B's public key, which has been shared out of band.\nPartitioned topics have been used to balance privacy and efficiency of broadcasting pre-key bundles."),(0,i.kt)("p",null,"The number of partitions that MUST be used is 5000."),(0,i.kt)("p",null,"The topic MUST be derived as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'var partitionsNum *big.Int = big.NewInt(5000)\nvar partition *big.Int = big.NewInt(0).Mod(peerBPublicKey, partitionsNum)\n\npartitionTopic := "contact-discovery-" + strconv.FormatInt(partition.Int64(), 10)\n\nvar hash []byte = keccak256(partitionTopic)\nvar topicLen int = 4\n\nif len(hash) < topicLen {\n    topicLen = len(hash)\n}\n\nvar contactCodeTopic [4]byte\nfor i = 0; i < topicLen; i++ {\n    contactCodeTopic[i] = hash[i]\n}\n')),(0,i.kt)("h3",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"A node initializes a new session once a successful X3DH exchange has taken place.\nSubsequent messages will use the established session until re-keying is necessary."),(0,i.kt)("h3",{id:"negotiated-topic-to-be-used-for-the-session"},"Negotiated topic to be used for the session"),(0,i.kt)("p",null,"After the peers have performed the initial key exchange, they MUST derive a topic from their shared secret to send messages on.\nTo obtain this value, take the first four bytes of the keccak256 hash of the shared secret encoded in hexadecimal format."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sharedKey, err := ecies.ImportECDSA(myPrivateKey).GenerateShared(\n      ecies.ImportECDSAPublic(theirPublicKey),\n      16,\n      16,\n)\n\n\nhexEncodedKey := hex.EncodeToString(sharedKey)\n\nvar hash []byte = keccak256(hexEncodedKey)\nvar topicLen int = 4\n\nif len(hash) < topicLen {\n    topicLen = len(hash)\n}\n\nvar topic [4]byte\nfor i = 0; i < topicLen; i++ {\n    topic[i] = hash[i]\n}\n")),(0,i.kt)("p",null,"To summarize, following is the process for peer B to establish a session with peer A:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Listen to peer B's Contact Code Topic to retrieve their bundle information, including a list of active devices"),(0,i.kt)("li",{parentName:"ol"},"Peer A sends their pre-key bundle on peer B's partitioned topic"),(0,i.kt)("li",{parentName:"ol"},"Peer A and peer B perform the key-exchange using the shared pre-key bundles"),(0,i.kt)("li",{parentName:"ol"},"The negotiated topic is derived from the shared secret"),(0,i.kt)("li",{parentName:"ol"},"Peers A & B exchange messages on the negotiated topic")),(0,i.kt)("h3",{id:"concurrent-sessions"},"Concurrent sessions"),(0,i.kt)("p",null,"If a node creates two sessions concurrently between two peers, the one with the symmetric key first in byte order SHOULD be used, this marks that the other has expired."),(0,i.kt)("h3",{id:"re-keying"},"Re-keying"),(0,i.kt)("p",null,"On receiving a bundle from a given peer with a higher version, the old bundle SHOULD be marked as expired and a new session SHOULD be established on the next message sent."),(0,i.kt)("h3",{id:"multi-device-support"},"Multi-device support"),(0,i.kt)("p",null,"Multi-device support is quite challenging as there is not a central place where information on which and how many devices (identified by their respective ",(0,i.kt)("inlineCode",{parentName:"p"},"installation-id"),") a peer has, is stored."),(0,i.kt)("p",null,"Furthermore, account recovery always needs to be taken into consideration, where a user wipes clean the whole device and the node loses all the information about any previous sessions.\nTaking these considerations into account, the way the network propagates multi-device information using X3DH bundles, which will contain information about paired devices as well as information about the sending device.\nThis means that every time a new device is paired, the bundle needs to be updated and propagated with the new information, the user has the responsibility to make sure the pairing is successful."),(0,i.kt)("p",null,"The method is loosely based on ",(0,i.kt)("a",{parentName:"p",href:"https://signal.org/docs/specifications/sesame/"},"Signal's Sesame Algorithm"),"."),(0,i.kt)("h3",{id:"pairing"},"Pairing"),(0,i.kt)("p",null,"A new ",(0,i.kt)("inlineCode",{parentName:"p"},"installation-id")," MUST be generated on a per-device basis.\nThe device should be paired as soon as possible if other devices are present. "),(0,i.kt)("p",null,"If a bundle is received, which has the same ",(0,i.kt)("inlineCode",{parentName:"p"},"IK")," as the keypair present on the device, the devices MAY be paired.\nOnce a user enables a new device, a new bundle MUST be generated which includes pairing information."),(0,i.kt)("p",null,"The bundle MUST be propagated to contacts through the usual channels."),(0,i.kt)("p",null,"Removal of paired devices is a manual step that needs to be applied on each device, and consist simply in disabling the device, at which point pairing information will not be propagated anymore."),(0,i.kt)("h3",{id:"sending-messages-to-a-paired-group"},"Sending messages to a paired group"),(0,i.kt)("p",null,"When sending a message, the peer SHOULD send a message to other ",(0,i.kt)("inlineCode",{parentName:"p"},"installation-id")," that they have seen.\nThe node caps the number of devices to ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),", ordered by last activity.\nThe node sends messages using pairwise encryption, including their own devices."),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," is the maximum number of devices that can be paired."),(0,i.kt)("h3",{id:"account-recovery"},"Account recovery"),(0,i.kt)("p",null,"Account recovery is the same as adding a new device, and it MUST be handled the same way."),(0,i.kt)("h3",{id:"partitioned-devices"},"Partitioned devices"),(0,i.kt)("p",null,"In some cases (i.e. account recovery when no other pairing device is available, device not paired), it is possible that a device will receive a message that is not targeted to its own ",(0,i.kt)("inlineCode",{parentName:"p"},"installation-id"),".\nIn this case an empty message containing bundle information MUST be sent back, which will notify the receiving end not to include the device in any further communication."),(0,i.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Inherits all security considerations from ",(0,i.kt)("a",{parentName:"li",href:"../53/x3dh"},"53/WAKU2-X3DH"),".")),(0,i.kt)("h3",{id:"recommendations"},"Recommendations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The value of ",(0,i.kt)("inlineCode",{parentName:"li"},"n")," SHOULD be configured by the app-protocol.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The default value SHOULD be 3, since a larger number of devices will result in a larger bundle size, which may not be desirable in a peer-to-peer network.")))),(0,i.kt)("h2",{id:"copyright"},"Copyright"),(0,i.kt)("p",null,"Copyright and related rights waived via ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"../53/x3dh"},"53/WAKU2-X3DH")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://signal.org/docs/specifications/sesame/"},"Signal's Sesame Algorithm"))))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(n),u=i,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);