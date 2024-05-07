"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[6930],{46450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"25/LIBP2P-DNS-DISCOVERY",name:"Libp2p Peer Discovery via DNS",status:"deleted",editor:"Hanno Cornelius <hanno@status.im>",contributors:null},o=void 0,l={unversionedId:"25/libp2p-dns-discovery",id:"25/libp2p-dns-discovery",title:"25/LIBP2P-DNS-DISCOVERY",description:"- Status: deleted",source:"@site/vac/25/libp2p-dns-discovery.md",sourceDirName:"25",slug:"/25/libp2p-dns-discovery",permalink:"/vac/25/libp2p-dns-discovery",draft:!1,tags:[],version:"current",frontMatter:{title:"25/LIBP2P-DNS-DISCOVERY",name:"Libp2p Peer Discovery via DNS",status:"deleted",editor:"Hanno Cornelius \\<hanno@status.im\\>",contributors:null},sidebar:"defaultSidebar",previous:{title:"4/MVDS-META",permalink:"/vac/4/mvds-meta"},next:{title:"32/RLN-V1",permalink:"/vac/32/rln-v1"}},p={},s=[{value:"Root entry",id:"root-entry",level:2},{value:"Branch entry",id:"branch-entry",level:2},{value:"Leaf entries",id:"leaf-entries",level:2},{value:"Link entries",id:"link-entries",level:3},{value:"<code>multiaddr</code> entries",id:"multiaddr-entries",level:3}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Status: deleted"),(0,a.kt)("li",{parentName:"ul"},"Editor: Hanno Cornelius \\",(0,a.kt)("a",{parentName:"li",href:"mailto:hanno@status.im%5C"},"hanno@status.im\\"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"25/LIBP2P-DNS-DISCOVERY")," specifies a scheme to implement ",(0,a.kt)("a",{parentName:"p",href:"https://libp2p.io/"},(0,a.kt)("inlineCode",{parentName:"a"},"libp2p"))," peer discovery via DNS for Waku v2.\nThe generalised purpose is to retrieve an arbitrarily long, authenticated, updateable list of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/peer-id/"},(0,a.kt)("inlineCode",{parentName:"a"},"libp2p")," peers")," to bootstrap connection to a ",(0,a.kt)("inlineCode",{parentName:"p"},"libp2p")," network.\nSince ",(0,a.kt)("a",{parentName:"p",href:"../../waku/standards/core/10/waku2"},(0,a.kt)("inlineCode",{parentName:"a"},"10/WAKU2"))," currently specifies use of ",(0,a.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/peer-id/"},(0,a.kt)("inlineCode",{parentName:"a"},"libp2p")," peer identities"),",\nthis method is suitable for a new Waku v2 node to discover other Waku v2 nodes to connect to."),(0,a.kt)("p",null,"This specification is largely based on ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1459"},"EIP-1459"),",\nwith the only deviation being the type of address being encoded (",(0,a.kt)("inlineCode",{parentName:"p"},"multiaddr")," vs ",(0,a.kt)("inlineCode",{parentName:"p"},"enr"),").\nAlso see ",(0,a.kt)("a",{parentName:"p",href:"https://vac.dev/dns-based-discovery"},"this earlier explainer")," for more background on the suitability of DNS based discovery for Waku v2."),(0,a.kt)("h1",{id:"list-encoding"},"List encoding"),(0,a.kt)("p",null,"The peer list MUST be encoded as a ",(0,a.kt)("a",{parentName:"p",href:"https://www.wikiwand.com/en/Merkle_tree"},"Merkle tree"),".\nEIP-1459 specifies ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1459#specification"},"the URL scheme")," to refer to such a DNS node list.\nThis specification uses the same approach, but with a ",(0,a.kt)("inlineCode",{parentName:"p"},"matree")," scheme:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"matree://\\<key\\>@\\<fqdn\\>\n")),(0,a.kt)("p",null,"where"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"matree")," is the selected ",(0,a.kt)("inlineCode",{parentName:"li"},"multiaddr")," Merkle tree scheme"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\<fqdn\\>")," is the fully qualified domain name on which the list can be found"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\<key\\>")," is the base32 encoding of the compressed 32-byte binary public key that signed the list.")),(0,a.kt)("p",null,"The example URL from EIP-1459, adapted to the above scheme becomes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"matree://AM5FCQLWIZX2QFPNJAP7VUERCCRNGRHWZG3YYHIUV7BVDQ5FDPRT2@peers.example.org\n")),(0,a.kt)("p",null,"Each entry within the Merkle tree MUST be contained within a ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc1035.txt"},"DNS TXT record"),"\nand stored in a subdomain (except for the base URL ",(0,a.kt)("inlineCode",{parentName:"p"},"matree")," entry).\nThe content of any TXT record MUST be small enough to fit into the 512-byte limit imposed on UDP DNS packets,\nwhich limits the number of hashes that can be contained within a branch entry.\nThe subdomain name for each entry is the base32 encoding of the abbreviated keccak256 hash of its text content.\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1459#dns-record-structure"},"this example")," of a fully populated tree for more information."),(0,a.kt)("h1",{id:"entry-types"},"Entry types"),(0,a.kt)("p",null,"The following entry types are derived from ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1459"},"EIP-1459"),"\nand adapted for use with ",(0,a.kt)("inlineCode",{parentName:"p"},"multiaddrs"),":"),(0,a.kt)("h2",{id:"root-entry"},"Root entry"),(0,a.kt)("p",null,"The tree root entry MUST use the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"matree-root:v1 m=\\<ma-root\\> l=\\<link-root\\> seq=\\<sequence number\\> sig=\\<signature\\>\n")),(0,a.kt)("p",null,"where"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ma-root")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"link-root")," refer to the root hashes of subtrees\ncontaining ",(0,a.kt)("inlineCode",{parentName:"li"},"multiaddrs")," and links to other subtrees, respectively"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sequence-number")," is the tree's update sequence number.\nThis number SHOULD increase with each update to the tree."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"signature")," is a 65-byte secp256k1 EC signature\nover the keccak256 hash of the root record content,\nexcluding the ",(0,a.kt)("inlineCode",{parentName:"li"},"sig=")," part,\nencoded as URL-safe base64")),(0,a.kt)("h2",{id:"branch-entry"},"Branch entry"),(0,a.kt)("p",null,"Branch entries MUST take the format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"matree-branch:\\<h\u2081\\>,\\<h\u2082\\>,...,\\<h\u2099\\>\n")),(0,a.kt)("p",null,"where"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\<h\u2081\\>,\\<h\u2082\\>,...,\\<h\u2099\\>")," are the hashes of other subtree entries")),(0,a.kt)("h2",{id:"leaf-entries"},"Leaf entries"),(0,a.kt)("p",null,"There are two types of leaf entries:"),(0,a.kt)("h3",{id:"link-entries"},"Link entries"),(0,a.kt)("p",null,"For the subtree pointed to by ",(0,a.kt)("inlineCode",{parentName:"p"},"link-root"),",\nleaf entries MUST take the format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"matree://\\<key\\>@\\<fqdn\\>\n")),(0,a.kt)("p",null,"which links to a different list located in another domain."),(0,a.kt)("h3",{id:"multiaddr-entries"},(0,a.kt)("inlineCode",{parentName:"h3"},"multiaddr")," entries"),(0,a.kt)("p",null,"For the subtree pointed to by ",(0,a.kt)("inlineCode",{parentName:"p"},"ma-root"),",\nleaf entries MUST take the format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ma:\\<multiaddr\\>\n")),(0,a.kt)("p",null,"which contains the ",(0,a.kt)("inlineCode",{parentName:"p"},"multiaddr")," of a ",(0,a.kt)("inlineCode",{parentName:"p"},"libp2p")," peer."),(0,a.kt)("h1",{id:"client-protocol"},"Client protocol"),(0,a.kt)("p",null,"A client MUST adhere to the ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1459#client-protocol"},"client protocol")," as specified in EIP-1459,\nand adapted for usage with ",(0,a.kt)("inlineCode",{parentName:"p"},"multiaddr")," entry types below:"),(0,a.kt)("p",null,"To find nodes at a given DNS name a client MUST perform the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Resolve the TXT record of the DNS name and check whether it contains a valid ",(0,a.kt)("inlineCode",{parentName:"li"},"matree-root:v1")," entry."),(0,a.kt)("li",{parentName:"ol"},"Verify the signature on the root against the known public key\nand check whether the sequence number is larger than or equal to any previous number seen for that name."),(0,a.kt)("li",{parentName:"ol"},"Resolve the TXT record of a hash subdomain indicated in the record\nand verify that the content matches the hash."),(0,a.kt)("li",{parentName:"ol"},"If the resolved entry is of type:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"matree-branch"),": parse the list of hashes and continue resolving them (step 3)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ma"),": import the ",(0,a.kt)("inlineCode",{parentName:"li"},"multiaddr")," and add it to a local list of discovered nodes.")))),(0,a.kt)("h1",{id:"copyright"},"Copyright"),(0,a.kt)("p",null,"Copyright and related rights waived via\n",(0,a.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,a.kt)("h1",{id:"references"},"References"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"../../waku/standards/core/10/waku2"},(0,a.kt)("inlineCode",{parentName:"a"},"10/WAKU2"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1459#client-protocol"},"EIP-1459: Client Protocol")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1459"},"EIP-1459: Node Discovery via DNS ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://libp2p.io/"},(0,a.kt)("inlineCode",{parentName:"a"},"libp2p"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.libp2p.io/concepts/peer-id/"},(0,a.kt)("inlineCode",{parentName:"a"},"libp2p")," peer identity")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.wikiwand.com/en/Merkle_tree"},"Merkle trees"))))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,u=m["".concat(p,".").concat(h)]||m[h]||c[h]||i;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);