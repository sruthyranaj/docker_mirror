"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9516],{58949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(83117),i=(n(67294),n(3905));const r={},o="MongoDB",l={unversionedId:"integrations/destinations/mongodb",id:"integrations/destinations/mongodb",title:"MongoDB",description:"Features",source:"@site/../docs/integrations/destinations/mongodb.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/mongodb",permalink:"/integrations/destinations/mongodb",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/mongodb.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"MeiliSearch",permalink:"/integrations/destinations/meilisearch"},next:{title:"MQTT",permalink:"/integrations/destinations/mqtt"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Output Schema for <code>destination-mongodb</code>",id:"output-schema-for-destination-mongodb",level:2},{value:"Getting Started (Airbyte Cloud)",id:"getting-started-airbyte-cloud",level:2},{value:"Getting Started (Airbyte Open-Source)",id:"getting-started-airbyte-open-source",level:2},{value:"Requirements",id:"requirements",level:4},{value:"<strong>Permissions</strong>",id:"permissions",level:4},{value:"Target Database",id:"target-database",level:4},{value:"Setup the MongoDB destination in Airbyte",id:"setup-the-mongodb-destination-in-airbyte",level:3},{value:"Connection via SSH Tunnel",id:"connection-via-ssh-tunnel",level:3},{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Database Name Case Sensitivity",id:"database-name-case-sensitivity",level:4},{value:"Restrictions on Database Names for Windows",id:"restrictions-on-database-names-for-windows",level:4},{value:"Restrictions on Database Names for Unix and Linux Systems",id:"restrictions-on-database-names-for-unix-and-linux-systems",level:4},{value:"Length of Database Names",id:"length-of-database-names",level:4},{value:"Restriction on Collection Names",id:"restriction-on-collection-names",level:4},{value:"Changelog",id:"changelog",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mongodb"},"MongoDB"),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,i.kt)("td",{parentName:"tr",align:"left"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},"As this connector does not support dbt, we don't support this sync mode on this destination.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For Airbyte Open Source users using the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/integrations/sources/postgres"},"Postgres")," source connector, ",(0,i.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/operator-guides/upgrading-airbyte/"},"upgrade")," your Airbyte platform to version ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.40.0-alpha")," or newer and upgrade your MongoDB connector to version ",(0,i.kt)("inlineCode",{parentName:"li"},"0.1.6")," or newer")),(0,i.kt)("h2",{id:"output-schema-for-destination-mongodb"},"Output Schema for ",(0,i.kt)("inlineCode",{parentName:"h2"},"destination-mongodb")),(0,i.kt)("p",null,"Each stream will be output into its own collection in MongoDB. Each collection will contain 3 fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_id"),": an identifier assigned to each document that is processed. The filed type in MongoDB is ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source. The field type in MongoDB is ",(0,i.kt)("inlineCode",{parentName:"li"},"Timestamp"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data. The field type in MongoDB is ",(0,i.kt)("inlineCode",{parentName:"li"},"Object"),".")),(0,i.kt)("h2",{id:"getting-started-airbyte-cloud"},"Getting Started ","(","Airbyte Cloud",")"),(0,i.kt)("p",null,"Airbyte Cloud only supports connecting to your MongoDB instance with TLS encryption. Other than that, you can proceed with the open-source instructions below."),(0,i.kt)("h2",{id:"getting-started-airbyte-open-source"},"Getting Started ","(","Airbyte Open-Source",")"),(0,i.kt)("h4",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To use the MongoDB destination, you'll need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A MongoDB server")),(0,i.kt)("h4",{id:"permissions"},(0,i.kt)("strong",{parentName:"h4"},"Permissions")),(0,i.kt)("p",null,"You need a MongoDB user that can create collections and write documents. We highly recommend creating an Airbyte-specific user for this purpose."),(0,i.kt)("h4",{id:"target-database"},"Target Database"),(0,i.kt)("p",null,"You will need to choose an existing database or create a new database that will be used to store synced data from Airbyte."),(0,i.kt)("h3",{id:"setup-the-mongodb-destination-in-airbyte"},"Setup the MongoDB destination in Airbyte"),(0,i.kt)("p",null,"You should now have all the requirements needed to configure MongoDB as a destination in the UI. You'll need the following information to configure the MongoDB destination:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Standalone MongoDb instance"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Host: URL of the database"),(0,i.kt)("li",{parentName:"ul"},"Port: Port to use for connecting to the database"),(0,i.kt)("li",{parentName:"ul"},"TLS: indicates whether to create encrypted connection"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Replica Set"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Server addresses: the members of a replica set"),(0,i.kt)("li",{parentName:"ul"},"Replica Set: A replica set name"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MongoDb Atlas Cluster"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Cluster URL: URL of a cluster to connect to"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Database")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Password"))),(0,i.kt)("p",null,"For more information regarding configuration parameters, please see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/drivers/java/sync/v4.3/fundamentals/connection/"},"MongoDb Documentation"),"."),(0,i.kt)("h3",{id:"connection-via-ssh-tunnel"},"Connection via SSH Tunnel"),(0,i.kt)("p",null,"Airbyte has the ability to connect to an MongoDB instance via an SSH Tunnel.\nThe reason you might want to do this because it is not possible ","(","or against security policy",")"," to connect to your MongoDB instance directly ","(","e.g. it does not have a public IP address",")","."),(0,i.kt)("p",null,"When using an SSH tunnel, you are configuring Airbyte to connect to an intermediate server ","(","a.k.a. a bastion sever",")"," that ",(0,i.kt)("em",{parentName:"p"},"does")," have direct access to the MongoDB instance.\nAirbyte connects to the bastion and then asks the bastion to connect directly to the server."),(0,i.kt)("p",null,"Using this feature requires additional configuration, when creating the source. We will talk through what each piece of configuration means."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure all fields for the source as you normally would, except ",(0,i.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Method"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Method")," defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"No Tunnel")," ","(","meaning a direct connection",")",". If you want to use an SSH Tunnel choose ",(0,i.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Password Authentication"),".",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Key Authentication")," if you will be using an RSA private key as your secret for establishing the SSH Tunnel ","(","see below for more information on generating this key",")","."),(0,i.kt)("li",{parentName:"ol"},"Choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Password Authentication")," if you will be using a password as your secret for establishing the SSH Tunnel."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SSH Tunnel Jump Server Host")," refers to the intermediate ","(","bastion",")"," server that Airbyte will connect to. This should be a hostname or an IP Address."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SSH Connection Port")," is the port on the bastion server with which to make the SSH connection. The default port for SSH connections is ",(0,i.kt)("inlineCode",{parentName:"li"},"22"),", so unless you have explicitly changed something, go with the default."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"SSH Login Username")," is the username that Airbyte should use when connection to the bastion server. This is NOT the TiDB username."),(0,i.kt)("li",{parentName:"ol"},"If you are using ",(0,i.kt)("inlineCode",{parentName:"li"},"Password Authentication"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"SSH Login Username")," should be set to the password of the User from the previous step. If you are using ",(0,i.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication")," TiDB password, but the password for the OS-user that Airbyte is using to perform commands on the bastion."),(0,i.kt)("li",{parentName:"ol"},"If you are using ",(0,i.kt)("inlineCode",{parentName:"li"},"SSH Key Authentication"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"SSH Private Key")," should be set to the RSA Private Key that you are using to create the SSH connection. This should be the full contents of the key file starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"-----BEGIN RSA PRIVATE KEY-----")," and ending with ",(0,i.kt)("inlineCode",{parentName:"li"},"-----END RSA PRIVATE KEY-----"),".")),(0,i.kt)("h2",{id:"naming-conventions"},"Naming Conventions"),(0,i.kt)("p",null,"The following information comes from the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/limits/"},"MongoDB Limits and Thresholds")," documentation."),(0,i.kt)("h4",{id:"database-name-case-sensitivity"},"Database Name Case Sensitivity"),(0,i.kt)("p",null,"Since database names are case insensitive in MongoDB, database names cannot differ only by the case of the characters."),(0,i.kt)("h4",{id:"restrictions-on-database-names-for-windows"},"Restrictions on Database Names for Windows"),(0,i.kt)("p",null,'For MongoDB deployments running on Windows, database names cannot contain any of the following characters: /. "$',(0,i.kt)("em",{parentName:"p"},"<",">",":","|","?")),(0,i.kt)("p",null,"Also database names cannot contain the null character."),(0,i.kt)("h4",{id:"restrictions-on-database-names-for-unix-and-linux-systems"},"Restrictions on Database Names for Unix and Linux Systems"),(0,i.kt)("p",null,'For MongoDB deployments running on Unix and Linux systems, database names cannot contain any of the following characters: /. "$'),(0,i.kt)("p",null,"Also database names cannot contain the null character."),(0,i.kt)("h4",{id:"length-of-database-names"},"Length of Database Names"),(0,i.kt)("p",null,"Database names cannot be empty and must have fewer than 64 characters."),(0,i.kt)("h4",{id:"restriction-on-collection-names"},"Restriction on Collection Names"),(0,i.kt)("p",null,"Collection names should begin with an underscore or a letter character, and cannot:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"contain the $."),(0,i.kt)("li",{parentName:"ul"},"be an empty string ","(",'e.g. ""',")","."),(0,i.kt)("li",{parentName:"ul"},"contain the null character."),(0,i.kt)("li",{parentName:"ul"},"begin with the system. prefix. ","(","Reserved for internal use.",")")),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-10-26"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18280"},"18280")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Adds SSH tunneling")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-09-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16025"},"16025")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Remove additionalProperties:false from spec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-08-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15211"},"15211")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fix standard mode")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-07-27"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14561"},"14561")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Change Airbyte Id from MD5 to SHA256")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(unpublished) Add ",(0,i.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8809"},"8809")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-18"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6945"},"6945")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Create a secure-only MongoDb destination")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-29"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6536"},"6536")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Destination MongoDb: added support via TLS/SSL")))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);