"use strict";(self.webpackChunklogos_docs_template=self.webpackChunklogos_docs_template||[]).push([[6510],{67057:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"64/WAKU2-NETWORK",name:"Waku v2 Network",status:"draft",category:"Best Current Practice",editor:"Hanno Cornelius &lt;hanno@status.im&gt;",contributors:null},o=void 0,s={unversionedId:"standards/core/64/network",id:"standards/core/64/network",title:"64/WAKU2-NETWORK",description:"- Status: draft",source:"@site/waku/standards/core/64/network.md",sourceDirName:"standards/core/64",slug:"/standards/core/64/network",permalink:"/waku/standards/core/64/network",draft:!1,tags:[],version:"current",frontMatter:{title:"64/WAKU2-NETWORK",name:"Waku v2 Network",status:"draft",category:"Best Current Practice",editor:"Hanno Cornelius &lt;hanno@status.im&gt;",contributors:null},sidebar:"defaultSidebar",previous:{title:"36/WAKU2-BINDINGS-API",permalink:"/waku/standards/core/36/bindings-api"},next:{title:"66/WAKU2-METADATA",permalink:"/waku/standards/core/66/metadata"}},l={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Theory / Semantics",id:"theory--semantics",level:2},{value:"Routing protocol",id:"routing-protocol",level:3},{value:"Network shards",id:"network-shards",level:3},{value:"Roles",id:"roles",level:2},{value:"Nodes",id:"nodes",level:3},{value:"Relay nodes",id:"relay-nodes",level:4},{value:"Bootstrapping and discovery",id:"bootstrapping-and-discovery",level:4},{value:"Transports",id:"transports",level:4},{value:"Default services",id:"default-services",level:4},{value:"Store service nodes",id:"store-service-nodes",level:4},{value:"Non-relay nodes",id:"non-relay-nodes",level:4},{value:"Store client nodes",id:"store-client-nodes",level:4},{value:"Applications",id:"applications",level:3},{value:"RLN rate-limiting",id:"rln-rate-limiting",level:2},{value:"RLN Parameters",id:"rln-parameters",level:3},{value:"Memberships",id:"memberships",level:3},{value:"RLN Proofs",id:"rln-proofs",level:3},{value:"Network traffic",id:"network-traffic",level:2},{value:"Message Attributes",id:"message-attributes",level:3},{value:"Message Size",id:"message-size",level:3},{value:"Message Validation",id:"message-validation",level:3},{value:"Decoding failure",id:"decoding-failure",level:4},{value:"Invalid timestamp",id:"invalid-timestamp",level:4},{value:"Free bandwidth exceeded",id:"free-bandwidth-exceeded",level:4},{value:"Invalid RLN epoch",id:"invalid-rln-epoch",level:4},{value:"Invalid RLN proof",id:"invalid-rln-proof",level:4},{value:"Rate limit exceeded",id:"rate-limit-exceeded",level:4},{value:"Autosharding",id:"autosharding",level:2},{value:"Copyright",id:"copyright",level:2},{value:"References",id:"references",level:2}],d={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Status: draft"),(0,r.kt)("li",{parentName:"ul"},"Category: Best Current Practice"),(0,r.kt)("li",{parentName:"ul"},"Editor: Hanno Cornelius ","<",(0,r.kt)("a",{parentName:"li",href:"mailto:hanno@status.im"},"hanno@status.im"),">")),(0,r.kt)("h2",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"This specification describes an opinionated deployment of ",(0,r.kt)("a",{parentName:"p",href:"../10/waku2"},"10/WAKU2")," protocols to form a coherent and\nshared decentralized messaging network that is open-access,\nuseful for generalized messaging, privacy-preserving, scalable and\naccessible even to resource-restricted devices.\nWe'll refer to this opinionated deployment simply as\n",(0,r.kt)("em",{parentName:"p"},"the public Waku Network"),", ",(0,r.kt)("em",{parentName:"p"},"the Waku Network")," or, if the context is clear, ",(0,r.kt)("em",{parentName:"p"},"the network"),"\nin the rest of this document."),(0,r.kt)("h2",{id:"theory--semantics"},"Theory / Semantics"),(0,r.kt)("h3",{id:"routing-protocol"},"Routing protocol"),(0,r.kt)("p",null,"The Waku Network is built on the ",(0,r.kt)("a",{parentName:"p",href:"../17/rln-relay"},"17/WAKU2-RLN-RELAY")," routing protocol,\nwhich in turn is an extension of ",(0,r.kt)("a",{parentName:"p",href:"../11/relay"},"11/WAKU2-RELAY")," with spam protection measures."),(0,r.kt)("h3",{id:"network-shards"},"Network shards"),(0,r.kt)("p",null,"Traffic in the Waku Network is sharded into eight ",(0,r.kt)("a",{parentName:"p",href:"../17/rln-relay"},"17/WAKU2-RLN-RELAY")," pubsub topics.\nEach pubsub topic is named according to the static shard naming format\ndefined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waku-org/specs/blob/master/standards/core/relay-sharding"},"WAKU2-RELAY-SHARDING"),"\nwith:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<cluster_id>")," set to ",(0,r.kt)("inlineCode",{parentName:"li"},"1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<shard_number>")," occupying the range ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"7"),".\nIn other words, the Waku Network is a ",(0,r.kt)("a",{parentName:"li",href:"../17/rln-relay"},"17/WAKU2-RLN-RELAY")," network\nrouted on the combination of the eight pubsub topics:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/waku/2/rs/1/0\n/waku/2/rs/1/1\n...\n/waku/2/rs/1/7\n")),(0,r.kt)("p",null,"A node MUST use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waku-org/specs/blob/master/standards/core/metadata"},"WAKU-METADATA")," protocol to identify the ",(0,r.kt)("inlineCode",{parentName:"p"},"<cluster_id>")," that every\ninbound/outbound peer that attempts to connect supports. In any of the following cases, the node MUST trigger a disconnection:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/waku-org/specs/blob/master/standards/core/metadata"},"WAKU-METADATA")," dial fails."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/waku-org/specs/blob/master/standards/core/metadata"},"WAKU-METADATA")," reports an empty ",(0,r.kt)("inlineCode",{parentName:"li"},"<cluster_id>"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/waku-org/specs/blob/master/standards/core/metadata"},"WAKU-METADATA")," reports a ",(0,r.kt)("inlineCode",{parentName:"li"},"<cluster_id>")," different than ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,r.kt)("h2",{id:"roles"},"Roles"),(0,r.kt)("p",null,"There are two distinct roles evident in the network, those of:\n1) nodes, and\n2) applications."),(0,r.kt)("h3",{id:"nodes"},"Nodes"),(0,r.kt)("p",null,"Nodes are the individual software units\nusing ",(0,r.kt)("a",{parentName:"p",href:"../10/waku2"},"10/WAKU2")," protocols to form a p2p messaging network.\nNodes, in turn, can participate in a shard as full relayers, i.e. ",(0,r.kt)("em",{parentName:"p"},"relay nodes"),",\nor by running a combination of protocols suitable for resource-restricted environments,\ni.e. ",(0,r.kt)("em",{parentName:"p"},"non-relay nodes"),".\nNodes can also provide various services to the network,\nsuch as storing historical messages or protecting the network against spam.\nSee the section on ",(0,r.kt)("a",{parentName:"p",href:"#default-services"},"default services")," for more."),(0,r.kt)("h4",{id:"relay-nodes"},"Relay nodes"),(0,r.kt)("p",null,"Relay nodes MUST follow ",(0,r.kt)("a",{parentName:"p",href:"../17/rln-relay"},"17/WAKU2-RLN-RELAY"),"\nto route messages to other nodes in the network\nfor any of the pubsub topics ",(0,r.kt)("a",{parentName:"p",href:"#network-shards"},"defined as the Waku Network shards"),".\nRelay nodes MAY choose to subscribe to any of these shards,\nbut MUST be subscribed to at least one defined shard.\nEach relay node SHOULD be subscribed to as many shards as it has resources to support.\nIf a relay node supports an encapsulating application,\nit SHOULD be subscribed to all the shards servicing that application.\nIf resource restrictions prevent a relay node from servicing all shards used by the encapsulating application,\nit MAY choose to support some shards as a non-relay node."),(0,r.kt)("h4",{id:"bootstrapping-and-discovery"},"Bootstrapping and discovery"),(0,r.kt)("p",null,"Nodes MAY use any method to bootstrap connection to the network,\nbut it is RECOMMENDED that each node retrieves a list of bootstrap peers to connect to using ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1459"},"EIP-1459 DNS-based discovery"),".\nRelay nodes SHOULD use ",(0,r.kt)("a",{parentName:"p",href:"../33/discv5"},"33/WAKU2-DISCV5")," to continually discover other peers in the network.\nEach relay node MUST encode its supported shards into its discoverable ENR,\nas described in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waku-org/specs/blob/master/standards/core/relay-sharding#discovery"},"WAKU2-RELAY-SHARDING"),".\nThe ENR MUST be updated if the set of supported shards change.\nA node MAY choose to ignore discovered peers that do not support any of the shards in its own subscribed set."),(0,r.kt)("h4",{id:"transports"},"Transports"),(0,r.kt)("p",null,"Relay nodes MUST follow ",(0,r.kt)("a",{parentName:"p",href:"../10/waku2"},"10/WAKU2")," specifications with regards to supporting different transports.\nIf TCP transport is available, each relay node MUST support it as transport for both dialing and listening.\nIn addition, a relay node SHOULD support secure websockets for bidirectional communication streams,\nfor example to allow connections from and to web browser-based clients.\nA relay node MAY support unsecure websockets if required by the application or running environment."),(0,r.kt)("h4",{id:"default-services"},"Default services"),(0,r.kt)("p",null,"For each supported shard,\neach relay node SHOULD enable and support the following protocols as a service node:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"../12/filter"},"12/WAKU2-FILTER")," to allow resource-restricted peers to subscribe to messages matching a specific content filter."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"../13/store"},"13/WAKU2-STORE")," to allow other peers to request historical messages from this node."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"../19/lightpush"},"19/WAKU2-LIGHTPUSH")," to allow resource-restricted peers to request publishing a message to the network on their behalf."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/waku-org/specs/blob/master/standards/core/peer-exchange"},"WAKU2-PEER-EXCHANGE")," to allow resource-restricted peers to discover more peers in a resource efficient way.")),(0,r.kt)("h4",{id:"store-service-nodes"},"Store service nodes"),(0,r.kt)("p",null,"Each relay node SHOULD support ",(0,r.kt)("a",{parentName:"p",href:"../13/store"},"13/WAKU2-STORE")," as a store service node,\nfor each supported shard.\nThe store SHOULD be configured to retain at least ",(0,r.kt)("inlineCode",{parentName:"p"},"12")," hours of messages per supported shard.\nStore service nodes SHOULD only store messages with a valid ",(0,r.kt)("a",{parentName:"p",href:"#message-attributes"},(0,r.kt)("inlineCode",{parentName:"a"},"rate_limit_proof"))," attribute."),(0,r.kt)("h4",{id:"non-relay-nodes"},"Non-relay nodes"),(0,r.kt)("p",null,"Nodes MAY opt out of relay functionality on any network shard\nand instead request services from relay nodes as clients\nusing any of the defined service protocols:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"../12/filter"},"12/WAKU2-FILTER")," to subscribe to messages matching a specific content filter."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"../13/store"},"13/WAKU2-STORE")," to request historical messages matching a specific content filter."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"../19/lightpush"},"19/WAKU2-LIGHTPUSH")," to request publishing a message to the network."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/waku-org/specs/blob/master/standards/core/peer-exchange"},"WAKU2-PEER-EXCHANGE")," to discover more peers in a resource efficient way.")),(0,r.kt)("h4",{id:"store-client-nodes"},"Store client nodes"),(0,r.kt)("p",null,"Nodes MAY request historical messages from ",(0,r.kt)("a",{parentName:"p",href:"../13/store"},"13/WAKU2-STORE")," service nodes as store clients.\nA store client SHOULD discard any messages retrieved from a store service node that do not contain a valid ",(0,r.kt)("a",{parentName:"p",href:"#message-attributes"},(0,r.kt)("inlineCode",{parentName:"a"},"rate_limit_proof"))," attribute.\nThe client MAY consider service nodes returning messages without a valid ",(0,r.kt)("a",{parentName:"p",href:"#message-attributes"},(0,r.kt)("inlineCode",{parentName:"a"},"rate_limit_proof"))," attribute as untrustworthy.\nThe mechanism by which this may happen is currently underdefined."),(0,r.kt)("h3",{id:"applications"},"Applications"),(0,r.kt)("p",null,"Applications are the higher-layer projects or platforms that make use of the generalized messaging capability of the network.\nIn other words, an application defines a payload used in the various ",(0,r.kt)("a",{parentName:"p",href:"../10/waku2"},"10/WAKU2")," protocols.\nAny participant in an application SHOULD make use of an underlying node in order to communicate on the network.\nApplications SHOULD make use of an ",(0,r.kt)("a",{parentName:"p",href:"#autosharding"},"autosharding")," API\nto allow the underlying node to automatically select the target shard on the Waku Network.\nSee the section on ",(0,r.kt)("a",{parentName:"p",href:"#autosharding"},"autosharding")," for more."),(0,r.kt)("h2",{id:"rln-rate-limiting"},"RLN rate-limiting"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"../17/rln-relay"},"17/WAKU2-RLN-RELAY")," protocol uses ",(0,r.kt)("a",{parentName:"p",href:"../../../../vac/32/rln-v1"},"32/RLN-V1")," proofs\nto ensure that a pre-agreed rate limit is not exceeded by any publisher.\nWhile the network is under capacity,\nindividual relayers MAY choose to freely route messages without RLN proofs\nup to a discretionary bandwidth limit,\nafter which messages without proofs MUST be discarded by relay nodes.\nThis bandwidth limit SHOULD be enforced using a ",(0,r.kt)("a",{parentName:"p",href:"#free-bandwidth-exceeded"},"bandwidth validation mechanism")," separate from a RLN rate-limiting.\nThis implies that quality of service and reliability is significantly lower for messages without proofs\nand at times of high network utilization these messages may not be relayed at all."),(0,r.kt)("h3",{id:"rln-parameters"},"RLN Parameters"),(0,r.kt)("p",null,"For the Waku Network,\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," second\nand the maximum number of messages published per ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch")," is limited to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," per publisher.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"max_epoch_gap")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"20")," seconds,\nmeaning that validators (relay nodes),\nMUST ",(0,r.kt)("em",{parentName:"p"},"reject")," messages with an ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch")," more than 20 seconds into the past or\nfuture compared to the validator's own clock.\nAll nodes, validators and publishers,\nSHOULD use Network Time Protocol (NTP) to synchronize their own clocks,\nthereby ensuring valid timestamps for proof generation and validation."),(0,r.kt)("h3",{id:"memberships"},"Memberships"),(0,r.kt)("p",null,"Each publisher to the Waku Network SHOULD register an RLN membership\nwith one of the RLN storage contracts\nmoderated in the Sepolia registry contract with address ",(0,r.kt)("a",{parentName:"p",href:"https://sepolia.etherscan.io/address/0xF1935b338321013f11068abCafC548A7B0db732C#code"},"0xF1935b338321013f11068abCafC548A7B0db732C"),".\nInitial memberships are registered in the Sepolia RLN storage contract with address ",(0,r.kt)("a",{parentName:"p",href:"https://sepolia.etherscan.io/address/0x58322513A35a8f747AF5A385bA14C2AbE602AA59#code"},"0x58322513A35a8f747AF5A385bA14C2AbE602AA59"),".\nRLN membership setup and registration MUST follow ",(0,r.kt)("a",{parentName:"p",href:"../17/rln-relay#setup-and-registration"},"17/WAKU2-RLN-RELAY"),",\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"staked_fund")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),".\nIn other words, the Waku Network does not use RLN staking. "),(0,r.kt)("h3",{id:"rln-proofs"},"RLN Proofs"),(0,r.kt)("p",null,"Each RLN member MUST generate and attach an RLN proof to every published message\nas described in ",(0,r.kt)("a",{parentName:"p",href:"../17/rln-relay#publishing"},"17/WAKU2-RLN-RELAY"),".\nSlashing is not implemented for the Waku Network.\nInstead, validators will penalise peers forwarding messages exceeding the rate limit\nas specified for ",(0,r.kt)("a",{parentName:"p",href:"#rate-limit-exceeded"},"the rate-limiting validation mechanism"),".\nThis incentivizes all relay nodes to validate RLN proofs\nand reject messages violating rate limits\nin order to continue participating in the network."),(0,r.kt)("h2",{id:"network-traffic"},"Network traffic"),(0,r.kt)("p",null,"All payload on the Waku Network MUST be encapsulated in a ",(0,r.kt)("a",{parentName:"p",href:"../14/message"},"14/WAKU2-MESSAGE"),"\nwith rate limit proof extensions defined for ",(0,r.kt)("a",{parentName:"p",href:"../17/rln-relay#payloads"},"17/WAKU2-RLN-RELAY"),".\nEach message on the Waku Network SHOULD be validated by each relayer,\naccording to the rules discussed under ",(0,r.kt)("a",{parentName:"p",href:"#message-validation"},"message validation"),"."),(0,r.kt)("h3",{id:"message-attributes"},"Message Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The\xa0mandatory ",(0,r.kt)("inlineCode",{parentName:"li"},"payload"),"\xa0attribute MUST contain the message data payload as crafted by the application."),(0,r.kt)("li",{parentName:"ul"},"The\xa0mandatory ",(0,r.kt)("inlineCode",{parentName:"li"},"content_topic"),"\xa0attribute MUST specify a string identifier that can be used for content-based filtering.\nThis is also crafted by the application.\nSee ",(0,r.kt)("a",{parentName:"li",href:"#autosharding"},"Autosharding")," for more on the content topic format."),(0,r.kt)("li",{parentName:"ul"},"The\xa0optional ",(0,r.kt)("inlineCode",{parentName:"li"},"meta"),"\xa0attribute MAY be omitted.\nIf present, will form part of the message uniqueness vector described in ",(0,r.kt)("a",{parentName:"li",href:"../14/message"},"14/WAKU2-MESSAGE"),"."),(0,r.kt)("li",{parentName:"ul"},"The\xa0optional ",(0,r.kt)("inlineCode",{parentName:"li"},"version"),"\xa0attribute SHOULD be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),". It MUST be interpreted as ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," if not present."),(0,r.kt)("li",{parentName:"ul"},"The\xa0mandatory ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp"),"\xa0attribute MUST contain the Unix epoch time at which the message was generated by the application.\nThe value MUST be in nanoseconds.\nIt MAY contain a fudge factor of up to 1 seconds in either direction to improve resistance to timing attacks."),(0,r.kt)("li",{parentName:"ul"},"The\xa0optional ",(0,r.kt)("inlineCode",{parentName:"li"},"ephemeral"),"\xa0attribute MUST be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," if the message should not be persisted by the Waku Network."),(0,r.kt)("li",{parentName:"ul"},"The optional ",(0,r.kt)("inlineCode",{parentName:"li"},"rate_limit_proof"),"\xa0attribute SHOULD be populated with the RLN proof as set out in ",(0,r.kt)("a",{parentName:"li",href:"#rln-proofs"},"RLN Proofs"),".\nMessages with this field unpopulated MAY be discarded from the network by relayers.\nThis field MUST be populated if the message should be persisted by the Waku Network.")),(0,r.kt)("h3",{id:"message-size"},"Message Size"),(0,r.kt)("p",null,"Any ",(0,r.kt)("a",{parentName:"p",href:"../14/message"},"14/WAKU2-MESSAGE")," published to the network MUST NOT exceed an absolute maximum size of ",(0,r.kt)("inlineCode",{parentName:"p"},"150")," kilobytes.\nThis limit applies to the entire message after protobuf serialization, including attributes.\nIt is RECOMMENDED not to exceed an average size of ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," kilobytes for ",(0,r.kt)("a",{parentName:"p",href:"../14/message"},"14/WAKU2-MESSAGE")," published to the network."),(0,r.kt)("h3",{id:"message-validation"},"Message Validation"),(0,r.kt)("p",null,"Relay nodes MUST apply ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.1##extended-validators"},"gossipsub v1.1 validation")," to each relayed message and\nSHOULD apply all of the rules set out in the section below to determine the validity of a message.\nValidation has one of three outcomes,\nrepeated here from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.1##extended-validators"},"gossipsub specification")," for ease of reference:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Accept - the message is considered valid and it MUST be delivered and forwarded to the network."),(0,r.kt)("li",{parentName:"ol"},"Reject - the message is considered invalid, MUST be rejected and SHOULD trigger a gossipsub scoring penalty against the transmitting peer."),(0,r.kt)("li",{parentName:"ol"},"Ignore - the message SHOULD NOT be delivered and forwarded to the network, but this MUST NOT trigger a gossipsub scoring penalty against the transmitting peer.")),(0,r.kt)("p",null,"The following validation rules are defined:"),(0,r.kt)("h4",{id:"decoding-failure"},"Decoding failure"),(0,r.kt)("p",null,"If a message fails to decode as a valid ",(0,r.kt)("a",{parentName:"p",href:"../14/message"},"14/WAKU2-MESSAGE"),",\nthe relay node MUST ",(0,r.kt)("em",{parentName:"p"},"reject")," the message.\nThis SHOULD trigger a penalty against the transmitting peer."),(0,r.kt)("h4",{id:"invalid-timestamp"},"Invalid timestamp"),(0,r.kt)("p",null,"If a message has a timestamp deviating by more than ",(0,r.kt)("inlineCode",{parentName:"p"},"20")," seconds\neither into the past or the future\nwhen compared to the relay node's internal clock,\nthe relay node MUST ",(0,r.kt)("em",{parentName:"p"},"reject")," the message.\nThis allows for some deviation between internal clocks,\nnetwork routing latency and\nan optional ",(0,r.kt)("a",{parentName:"p",href:"#message-attributes"},"fudge factor when timestamping new messages"),"."),(0,r.kt)("h4",{id:"free-bandwidth-exceeded"},"Free bandwidth exceeded"),(0,r.kt)("p",null,"If a message contains no RLN proof\nand the current bandwidth utilization on the shard the message was published to\nequals or exceeds ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," Mbps,\nthe relay node SHOULD ",(0,r.kt)("em",{parentName:"p"},"ignore")," the message."),(0,r.kt)("h4",{id:"invalid-rln-epoch"},"Invalid RLN epoch"),(0,r.kt)("p",null,"If a message contains an RLN proof\nand the ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch")," attached to the proof deviates by more than ",(0,r.kt)("inlineCode",{parentName:"p"},"max_epoch_gap")," seconds\nfrom the relay node's own ",(0,r.kt)("inlineCode",{parentName:"p"},"epoch"),",\nthe relay node MUST ",(0,r.kt)("em",{parentName:"p"},"reject")," the message.\n",(0,r.kt)("inlineCode",{parentName:"p"},"max_epoch_gap")," is ",(0,r.kt)("a",{parentName:"p",href:"#rln-parameters"},"set to ",(0,r.kt)("inlineCode",{parentName:"a"},"20")," seconds")," for the Waku Network."),(0,r.kt)("h4",{id:"invalid-rln-proof"},"Invalid RLN proof"),(0,r.kt)("p",null,"If a message contains an RLN proof\nand the zero-knowledge proof is invalid\naccording to the verification process described in ",(0,r.kt)("a",{parentName:"p",href:"../../../../vac/32/rln-v1"},"32/RLN-V1"),",\nthe relay node MUST ",(0,r.kt)("em",{parentName:"p"},"ignore")," the message."),(0,r.kt)("h4",{id:"rate-limit-exceeded"},"Rate limit exceeded"),(0,r.kt)("p",null,"If a message contains an RLN proof\nand the relay node detects double signaling\naccording to the verification process described in ",(0,r.kt)("a",{parentName:"p",href:"../../../../vac/32/rln-v1"},"32/RLN-V1"),",\nthe relay node MUST ",(0,r.kt)("em",{parentName:"p"},"reject")," the message\nfor violating the agreed rate limit of ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," message every ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," second.\nThis SHOULD trigger a penalty against the transmitting peer."),(0,r.kt)("h2",{id:"autosharding"},"Autosharding"),(0,r.kt)("p",null,"Nodes in the Waku Network SHOULD allow encapsulating applications to use autosharding,\nas defined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waku-org/specs/blob/master/standards/core/relay-sharding#automatic-sharding"},"WAKU2-RELAY-SHARDING"),"\nby automatically determining the appropriate pubsub topic\nfrom the list ",(0,r.kt)("a",{parentName:"p",href:"#network-shards"},"of defined Waku Network shards"),".\nThis allows the application to omit the target pubsub topic\nwhen invoking any Waku protocol function.\nApplications using autosharding MUST use content topics in the format\ndefined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waku-org/specs/blob/master/standards/core/relay-sharding#content-topics-format-for-autosharding"},"WAKU2-RELAY-SHARDING"),"\nand SHOULD use the short length format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/{application-name}/{version-of-the-application}/{content-topic-name}/{encoding}\n")),(0,r.kt)("p",null,"When an encapsulating application makes use of autosharding\nthe underlying node MUST determine the target pubsub topic(s)\nfrom the content topics provided by the application\nusing the hashing mechanism defined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/waku-org/specs/blob/master/standards/core/relay-sharding#automatic-sharding"},"WAKU2-RELAY-SHARDING"),"."),(0,r.kt)("h2",{id:"copyright"},"Copyright"),(0,r.kt)("p",null,"Copyright and related rights waived via ",(0,r.kt)("a",{parentName:"p",href:"https://creativecommons.org/publicdomain/zero/1.0/"},"CC0"),"."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../10/waku2"},"10/WAKU2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../17/rln-relay"},"17/WAKU2-RLN-RELAY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../11/relay"},"11/WAKU2-RELAY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../core/relay-sharding"},"WAKU2-RELAY-SHARDING")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/waku-org/specs/blob/master/standards/core/metadata"},"WAKU-METADATA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1459"},"EIP-1459 DNS-based discovery")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../33/discv5"},"33/WAKU2-DISCV5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../12/filter"},"12/WAKU2-FILTER")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../13/store"},"13/WAKU2-STORE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../19/lightpush"},"19/WAKU2-LIGHTPUSH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../core/peer-exchange"},"34/WAKU2-PEER-EXCHANGE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../../vac/32/rln-v1"},"32/RLN-V1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../14/message"},"14/WAKU2-MESSAGE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.1##extended-validators"},"gossipsub v1.1 validation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/waku-org/specs/blob/master/standards/core/relay-sharding"},"WAKU2-RELAY-SHARDING")),(0,r.kt)("li",{parentName:"ul"})))}h.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,u=c["".concat(l,".").concat(m)]||c[m]||h[m]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);