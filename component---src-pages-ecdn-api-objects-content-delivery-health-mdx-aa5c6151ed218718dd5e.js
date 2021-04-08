(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"2V/a":function(e,t,b){"use strict";b.r(t),b.d(t,"_frontmatter",(function(){return O})),b.d(t,"default",(function(){return p}));b("91GP"),b("rGqo"),b("yt8O"),b("Btvt"),b("RW0V"),b("q1tI");var n=b("7ljp"),a=b("XbGe"),c=b("Drr0");b("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var b=arguments[t];for(var n in b)Object.prototype.hasOwnProperty.call(b,n)&&(e[n]=b[n])}return e}).apply(this,arguments)}var O={},m={_frontmatter:O},r=a.a;function p(e){var t=e.components,b=function(e,t){if(null==e)return{};var b,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)b=c[n],t.indexOf(b)>=0||(a[b]=e[b]);return a}(e,["components"]);return Object(n.b)(r,i({},m,b,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Health of ECDN server’s content delivery."),Object(n.b)(c.k,{mdxType:"GQLCodeSnippet"},Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.d,{mdxType:"GQLKeyword"},"type")," ContentDeliveryHealth ",Object(n.b)(c.h,{mdxType:"GQLOpen"})),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# Aggregated health of services affecting content delivery.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD if all services are in GOOD state.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - WARNING if at least one is in WARNING and none of them are in POOR state.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR if at least one is in POOR state.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.g,{mdxType:"GQLName"},"aggregated"),": ",Object(n.b)(c.f,{href:"/ecdn-api-enums/Health",mdxType:"GQLLink"},"Health"),Object(n.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# Upstream servers health.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD if all upstreams are reachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - WARNING if not all but at least one of them is reachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR if none of them are reachable.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.g,{mdxType:"GQLName"},"upstreams"),": ",Object(n.b)(c.f,{href:"/ecdn-api-enums/Health",mdxType:"GQLLink"},"Health"),Object(n.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# Health of caching service running on ECDN server.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - GOOD if it's up and running, certificate is valid.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - WARNING if it's up and running, but certificate will expire soon.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.c,{mdxType:"GQLComment"},"# - POOR if it's not running, certificate is invalid or expired.")),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.j,{mdxType:"GQLTab"}),Object(n.b)(c.g,{mdxType:"GQLName"},"caching"),": ",Object(n.b)(c.f,{href:"/ecdn-api-enums/Health",mdxType:"GQLLink"},"Health"),Object(n.b)(c.i,{mdxType:"GQLOperator"},"!")),Object(n.b)(c.e,{mdxType:"GQLLine"}," "),Object(n.b)(c.e,{mdxType:"GQLLine"},Object(n.b)(c.b,{mdxType:"GQLClose"}))),Object(n.b)("h2",null,"Fields"),Object(n.b)("h3",null,"aggregated: ",Object(n.b)("a",i({parentName:"h3"},{href:"/ecdn-api-enums/Health"}),"Health"),"!"),Object(n.b)("p",null,"Aggregated health of services affecting content delivery."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GOOD if all services are in GOOD state."),Object(n.b)("li",{parentName:"ul"},"WARNING if at least one is in WARNING and none of them are in POOR state."),Object(n.b)("li",{parentName:"ul"},"POOR if at least one is in POOR state.")),Object(n.b)("h3",null,"upstreams: ",Object(n.b)("a",i({parentName:"h3"},{href:"/ecdn-api-enums/Health"}),"Health"),"!"),Object(n.b)("p",null,"Upstream servers health."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GOOD if all upstreams are reachable."),Object(n.b)("li",{parentName:"ul"},"WARNING if not all but at least one of them is reachable."),Object(n.b)("li",{parentName:"ul"},"POOR if none of them are reachable.")),Object(n.b)("h3",null,"caching: ",Object(n.b)("a",i({parentName:"h3"},{href:"/ecdn-api-enums/Health"}),"Health"),"!"),Object(n.b)("p",null,"Health of caching service running on ECDN server."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GOOD if it’s up and running, certificate is valid."),Object(n.b)("li",{parentName:"ul"},"WARNING if it’s up and running, but certificate will expire soon."),Object(n.b)("li",{parentName:"ul"},"POOR if it’s not running, certificate is invalid or expired.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-ecdn-api-objects-content-delivery-health-mdx-aa5c6151ed218718dd5e.js.map