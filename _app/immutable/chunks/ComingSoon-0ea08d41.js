import{S as j,i as F,s as R,l as h,u as B,a as $,e as S,m as v,p as b,v as C,h as u,c as k,q as n,b as d,I as y,g as I,t as q,d as H,f as E,Q as g,r as z,n as x,x as A,y as D,z as M,C as Q}from"./index-c1c31a0a.js";import{b as T}from"./paths-b9644fda.js";import{B as V}from"./Button-6d49c758.js";function Y(_){let t,o,a,e,r,f,p,c,m;return{c(){t=h("h2"),o=B("For more content watch these videos:"),a=$(),e=h("div"),r=h("iframe"),p=$(),c=h("iframe"),this.h()},l(i){t=v(i,"H2",{class:!0});var s=b(t);o=C(s,"For more content watch these videos:"),s.forEach(u),a=k(i),e=v(i,"DIV",{style:!0,class:!0});var l=b(e);r=v(l,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),b(r).forEach(u),p=k(l),c=v(l,"IFRAME",{src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),b(c).forEach(u),l.forEach(u),this.h()},h(){n(t,"class","header svelte-1xaq7xj"),g(r.src,f="https://www.youtube.com/embed/Wbid5rvCGos")||n(r,"src",f),n(r,"title","YouTube video player"),n(r,"frameborder","0"),n(r,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),r.allowFullscreen=!0,n(r,"class","vid-iframe svelte-1xaq7xj"),g(c.src,m="https://www.youtube.com/embed/Xw-zxQSEzqo")||n(c,"src",m),n(c,"title","YouTube video player"),n(c,"frameborder","0"),n(c,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),c.allowFullscreen=!0,n(c,"class","vid-iframe svelte-1xaq7xj"),z(e,"gap","1rem"),n(e,"class","svelte-1xaq7xj")},m(i,s){d(i,t,s),y(t,o),d(i,a,s),d(i,e,s),y(e,r),y(e,p),y(e,c)},p:x,i:x,o:x,d(i){i&&u(t),i&&u(a),i&&u(e)}}}function G(_){let t,o,a;return o=new V({props:{type:"secondary",block:!0,href:`${T}/`,$$slots:{default:[N]},$$scope:{ctx:_}}}),{c(){t=h("div"),A(o.$$.fragment),this.h()},l(e){t=v(e,"DIV",{class:!0});var r=b(t);D(o.$$.fragment,r),r.forEach(u),this.h()},h(){n(t,"class","svelte-1xaq7xj")},m(e,r){d(e,t,r),M(o,t,null),a=!0},p(e,r){const f={};r&2&&(f.$$scope={dirty:r,ctx:e}),o.$set(f)},i(e){a||(E(o.$$.fragment,e),a=!0)},o(e){q(o.$$.fragment,e),a=!1},d(e){e&&u(t),Q(o)}}}function N(_){let t;return{c(){t=B("Back to Home")},l(o){t=C(o,"Back to Home")},m(o,a){d(o,t,a)},d(o){o&&u(t)}}}function W(_){let t,o,a,e,r,f,p;const c=[G,Y],m=[];function i(s,l){return s[0]?0:1}return e=i(_),r=m[e]=c[e](_),{c(){t=h("h1"),o=B("Coming Soon!"),a=$(),r.c(),f=S(),this.h()},l(s){t=v(s,"H1",{class:!0});var l=b(t);o=C(l,"Coming Soon!"),l.forEach(u),a=k(s),r.l(s),f=S(),this.h()},h(){n(t,"class","header svelte-1xaq7xj")},m(s,l){d(s,t,l),y(t,o),d(s,a,l),m[e].m(s,l),d(s,f,l),p=!0},p(s,[l]){let w=e;e=i(s),e===w?m[e].p(s,l):(I(),q(m[w],1,1,()=>{m[w]=null}),H(),r=m[e],r?r.p(s,l):(r=m[e]=c[e](s),r.c()),E(r,1),r.m(f.parentNode,f))},i(s){p||(E(r),p=!0)},o(s){q(r),p=!1},d(s){s&&u(t),s&&u(a),m[e].d(s),s&&u(f)}}}function X(_,t,o){let{haveReturnButton:a}=t;return _.$$set=e=>{"haveReturnButton"in e&&o(0,a=e.haveReturnButton)},[a]}class O extends j{constructor(t){super(),F(this,t,X,W,R,{haveReturnButton:0})}}export{O as C};
