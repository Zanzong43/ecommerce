(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{93:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(13),c=n.n(r),i=n(12),o=n.n(i),s=n(23),d=n(25),l=n(39),u=new(n.n(l).a)("pk_test_23327c2a6e4583bf326385cc4843831cdc1c2f8de9209",!0),p=n(110),j=n(111),b=n(112),m=n(121),h=n(113),x=n(114),f=n.p+"static/media/shop.fab121d2.png",O=n(20),g=n(108),v=n(10),w=Object(g.a)((function(t){return{appBar:Object(O.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},menuButton:Object(O.a)({marginRight:t.spacing(2)},t.breakpoints.up("sm"),{display:"none"}),grow:{flexGrow:1},search:Object(O.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(v.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.b)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(O.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),C=n(3),y=function(t){var e=t.totalItems,n=w();return Object(C.jsx)(p.a,{position:"fixed",className:n.AppBar,color:"inherit",children:Object(C.jsxs)(j.a,{children:[Object(C.jsxs)(b.a,{variant:"h6",className:n.title,color:"inherit",children:[Object(C.jsx)("img",{src:f,alt:"commerce.js",height:"25px",className:n.image}),"Commerce.js"]}),Object(C.jsx)("div",{className:n.grow}),Object(C.jsx)("div",{className:n.button,children:Object(C.jsx)(m.a,{"aria-label":"Show Cart items",color:"inherit",children:Object(C.jsx)(h.a,{badgeContent:e,color:"secondary",children:Object(C.jsx)(x.a,{})})})})]})})},k=n(120),N=n(115),A=n(116),I=n(117),S=n(118),_=n(119),B=Object(g.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),R=function(t){var e=t.product,n=t.onAddToCart,a=B();return Object(C.jsxs)(N.a,{className:a.root,children:[Object(C.jsx)(A.a,{className:a.media,image:e.media.source,title:e.name}),Object(C.jsxs)(I.a,{children:[Object(C.jsxs)("div",{className:a.CardContent,children:[Object(C.jsx)(b.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(C.jsx)(b.a,{variant:"h5",children:e.price.formated_with_symbol})]}),Object(C.jsx)(b.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"})]}),Object(C.jsx)(S.a,{disableSpacing:!0,className:a.CardActions,children:Object(C.jsx)(m.a,{"aria-label":"Add to Cart",onClick:function(){return n(e.id,1)},children:Object(C.jsx)(_.a,{})})})]})},T=Object(g.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),G=function(t){var e=t.products,n=t.onAddToCart,a=T();return Object(C.jsxs)("main",{className:a.content,children:[Object(C.jsx)("div",{className:a.toolbar}),Object(C.jsx)(k.a,{container:!0,justify:"center",spacing:4,children:e.map((function(t){return Object(C.jsx)(k.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(C.jsx)(R,{product:t,onAddToCart:n})},t.id)}))})]})},L=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)({}),i=Object(d.a)(c,2),l=i[0],p=i[1],j=function(){var t=Object(s.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.products.list();case 2:e=t.sent,n=e.data,r(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(s.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.cart.retrieve();case 2:e=t.sent,p(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(s.a)(o.a.mark((function t(e,n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.cart.add(e,n);case 2:a=t.sent,p(a.cart);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){j(),b()}),[]),Object(C.jsxs)("div",{children:[Object(C.jsx)(y,{totalItems:l.total_items}),Object(C.jsx)(G,{products:n,onAddToCart:m})]})};c.a.render(Object(C.jsx)(L,{}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.fe69c703.chunk.js.map