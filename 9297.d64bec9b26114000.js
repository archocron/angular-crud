"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[9297],{2652:(A,_,c)=>{c.r(_),c.d(_,{MiscDemoModule:()=>_e});var s=c(6814),o=c(2129),e=c(4769),h=c(6651),v=c(8608);function x(t,u){if(1&t&&(e.TgZ(0,"span",4),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Oqu(n.label)}}function f(t,u){if(1&t&&e._UZ(0,"span",6),2&t){const n=e.oxw(2);e.Tol(n.icon),e.Q6J("ngClass","p-avatar-icon")}}function g(t,u){if(1&t&&e.YNc(0,f,1,3,"span",5),2&t){const n=e.oxw(),i=e.MAs(6);e.Q6J("ngIf",n.icon)("ngIfElse",i)}}function r(t,u){if(1&t){const n=e.EpF();e.TgZ(0,"img",8),e.NdJ("error",function(a){e.CHM(n);const l=e.oxw(2);return e.KtG(l.imageError(a))}),e.qZA()}if(2&t){const n=e.oxw(2);e.Q6J("src",n.image,e.LSH)}}function M(t,u){if(1&t&&e.YNc(0,r,1,1,"img",7),2&t){const n=e.oxw();e.Q6J("ngIf",n.image)}}const d=["*"];let b=(()=>{class t{label;icon;image;size="normal";shape="square";style;styleClass;onImageError=new e.vpe;containerClass(){return{"p-avatar p-component":!0,"p-avatar-image":null!=this.image,"p-avatar-circle":"circle"===this.shape,"p-avatar-lg":"large"===this.size,"p-avatar-xl":"xlarge"===this.size}}imageError(n){this.onImageError.emit(n)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["p-avatar"]],hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",size:"size",shape:"shape",style:"style",styleClass:"styleClass"},outputs:{onImageError:"onImageError"},ngContentSelectors:d,decls:7,vars:6,consts:[[3,"ngClass","ngStyle"],["class","p-avatar-text",4,"ngIf","ngIfElse"],["iconTemplate",""],["imageTemplate",""],[1,"p-avatar-text"],[3,"class","ngClass",4,"ngIf","ngIfElse"],[3,"ngClass"],[3,"src","error",4,"ngIf"],[3,"src","error"]],template:function(i,a){if(1&i&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.YNc(2,x,2,1,"span",1),e.YNc(3,g,1,2,"ng-template",null,2,e.W1O),e.YNc(5,M,1,1,"ng-template",null,3,e.W1O),e.qZA()),2&i){const l=e.MAs(4);e.Tol(a.styleClass),e.Q6J("ngClass",a.containerClass())("ngStyle",a.style),e.xp6(2),e.Q6J("ngIf",a.label)("ngIfElse",l)}},dependencies:[s.mk,s.O5,s.PC],styles:[".p-avatar{display:inline-flex;align-items:center;justify-content:center;width:2rem;height:2rem;font-size:1rem}.p-avatar.p-avatar-image{background-color:transparent}.p-avatar.p-avatar-circle{border-radius:50%;overflow:hidden}.p-avatar .p-avatar-icon{font-size:1rem}.p-avatar img{width:100%;height:100%}\n"],encapsulation:2,changeDetection:0})}return t})(),y=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[s.ez]})}return t})();var w=c(5219),m=c(2076);const q=["container"],z=["content"],J=["xBar"],Y=["yBar"];function Q(t,u){1&t&&e.GkF(0)}const F=["*"];let O=(()=>{class t{platformId;el;zone;cd;document;renderer;style;styleClass;containerViewChild;contentViewChild;xBarViewChild;yBarViewChild;templates;scrollYRatio;scrollXRatio;timeoutFrame=n=>setTimeout(n,0);initialized=!1;lastPageY;lastPageX;isXBarClicked=!1;isYBarClicked=!1;contentTemplate;windowResizeListener;contentScrollListener;mouseEnterListener;xBarMouseDownListener;yBarMouseDownListener;documentMouseMoveListener;documentMouseUpListener;constructor(n,i,a,l,p,T){this.platformId=n,this.el=i,this.zone=a,this.cd=l,this.document=p,this.renderer=T}ngAfterViewInit(){(0,s.NF)(this.platformId)&&this.zone.runOutsideAngular(()=>{this.moveBar(),this.moveBar=this.moveBar.bind(this),this.onXBarMouseDown=this.onXBarMouseDown.bind(this),this.onYBarMouseDown=this.onYBarMouseDown.bind(this),this.onDocumentMouseMove=this.onDocumentMouseMove.bind(this),this.onDocumentMouseUp=this.onDocumentMouseUp.bind(this),this.windowResizeListener=this.renderer.listen(window,"resize",this.moveBar),this.contentScrollListener=this.renderer.listen(this.contentViewChild.nativeElement,"scroll",this.moveBar),this.mouseEnterListener=this.renderer.listen(this.contentViewChild.nativeElement,"mouseenter",this.moveBar),this.xBarMouseDownListener=this.renderer.listen(this.xBarViewChild.nativeElement,"mousedown",this.onXBarMouseDown),this.yBarMouseDownListener=this.renderer.listen(this.yBarViewChild.nativeElement,"mousedown",this.onYBarMouseDown),this.calculateContainerHeight(),this.initialized=!0})}ngAfterContentInit(){this.templates.forEach(n=>{n.getType(),this.contentTemplate=n.template})}calculateContainerHeight(){let n=this.containerViewChild.nativeElement,i=this.contentViewChild.nativeElement,a=this.xBarViewChild.nativeElement;const l=this.document.defaultView;let p=l.getComputedStyle(n),T=l.getComputedStyle(a),Z=m.p.getHeight(n)-parseInt(T.height,10);"none"!=p["max-height"]&&0==Z&&(n.style.height=i.offsetHeight+parseInt(T.height,10)>parseInt(p["max-height"],10)?p["max-height"]:i.offsetHeight+parseFloat(p.paddingTop)+parseFloat(p.paddingBottom)+parseFloat(p.borderTopWidth)+parseFloat(p.borderBottomWidth)+"px")}moveBar(){let n=this.containerViewChild.nativeElement,i=this.contentViewChild.nativeElement,a=this.xBarViewChild.nativeElement,l=i.scrollWidth,p=i.clientWidth,T=-1*(n.clientHeight-a.clientHeight);this.scrollXRatio=p/l;let Z=this.yBarViewChild.nativeElement,E=i.scrollHeight,P=i.clientHeight,be=-1*(n.clientWidth-Z.clientWidth);this.scrollYRatio=P/E,this.requestAnimationFrame(()=>{if(this.scrollXRatio>=1)m.p.addClass(a,"p-scrollpanel-hidden");else{m.p.removeClass(a,"p-scrollpanel-hidden");const B=Math.max(100*this.scrollXRatio,10);a.style.cssText="width:"+B+"%; left:"+i.scrollLeft*(100-B)/(l-p)+"%;bottom:"+T+"px;"}if(this.scrollYRatio>=1)m.p.addClass(Z,"p-scrollpanel-hidden");else{m.p.removeClass(Z,"p-scrollpanel-hidden");const B=Math.max(100*this.scrollYRatio,10);Z.style.cssText="height:"+B+"%; top: calc("+i.scrollTop*(100-B)/(E-P)+"% - "+a.clientHeight+"px);right:"+be+"px;"}}),this.cd.markForCheck()}onYBarMouseDown(n){this.isYBarClicked=!0,this.lastPageY=n.pageY,m.p.addClass(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),m.p.addClass(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),n.preventDefault()}bindDocumentMouseListeners(){this.documentMouseMoveListener=this.renderer.listen(this.document,"mousemove",this.onDocumentMouseMove.bind(this)),this.documentMouseUpListener=this.renderer.listen(this.document,"mouseup",this.onDocumentMouseUp.bind(this))}unbindDocumentMouseListeners(){this.documentMouseMoveListener&&(this.documentMouseMoveListener(),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(this.documentMouseUpListener(),this.documentMouseUpListener=null)}onXBarMouseDown(n){this.isXBarClicked=!0,this.lastPageX=n.pageX,m.p.addClass(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),m.p.addClass(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),n.preventDefault()}onDocumentMouseMove(n){this.isXBarClicked?this.onMouseMoveForXBar(n):(this.isYBarClicked||this.onMouseMoveForXBar(n),this.onMouseMoveForYBar(n))}onMouseMoveForXBar(n){let i=n.pageX-this.lastPageX;this.lastPageX=n.pageX,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollLeft+=i/this.scrollXRatio})}onMouseMoveForYBar(n){let i=n.pageY-this.lastPageY;this.lastPageY=n.pageY,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollTop+=i/this.scrollYRatio})}scrollTop(n){let i=this.contentViewChild.nativeElement.scrollHeight-this.contentViewChild.nativeElement.clientHeight;this.contentViewChild.nativeElement.scrollTop=n=n>i?i:n>0?n:0}onDocumentMouseUp(n){m.p.removeClass(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),m.p.removeClass(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),m.p.removeClass(this.document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1}requestAnimationFrame(n){(window.requestAnimationFrame||this.timeoutFrame)(n)}unbindListeners(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null),this.contentScrollListener&&(this.contentScrollListener(),this.contentScrollListener=null),this.mouseEnterListener&&(this.mouseEnterListener(),this.mouseEnterListener=null),this.xBarMouseDownListener&&(this.xBarMouseDownListener(),this.xBarMouseDownListener=null),this.yBarMouseDownListener&&(this.yBarMouseDownListener(),this.yBarMouseDownListener=null)}ngOnDestroy(){this.initialized&&this.unbindListeners()}refresh(){this.moveBar()}static \u0275fac=function(i){return new(i||t)(e.Y36(e.Lbi),e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(s.K0),e.Y36(e.Qsj))};static \u0275cmp=e.Xpm({type:t,selectors:[["p-scrollPanel"]],contentQueries:function(i,a,l){if(1&i&&e.Suo(l,w.jx,4),2&i){let p;e.iGM(p=e.CRH())&&(a.templates=p)}},viewQuery:function(i,a){if(1&i&&(e.Gf(q,5),e.Gf(z,5),e.Gf(J,5),e.Gf(Y,5)),2&i){let l;e.iGM(l=e.CRH())&&(a.containerViewChild=l.first),e.iGM(l=e.CRH())&&(a.contentViewChild=l.first),e.iGM(l=e.CRH())&&(a.xBarViewChild=l.first),e.iGM(l=e.CRH())&&(a.yBarViewChild=l.first)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:F,decls:11,vars:5,consts:[[3,"ngClass","ngStyle"],["container",""],[1,"p-scrollpanel-wrapper"],[1,"p-scrollpanel-content"],["content",""],[4,"ngTemplateOutlet"],[1,"p-scrollpanel-bar","p-scrollpanel-bar-x"],["xBar",""],[1,"p-scrollpanel-bar","p-scrollpanel-bar-y"],["yBar",""]],template:function(i,a){1&i&&(e.F$t(),e.TgZ(0,"div",0,1)(2,"div",2)(3,"div",3,4),e.Hsn(5),e.YNc(6,Q,1,0,"ng-container",5),e.qZA()(),e._UZ(7,"div",6,7)(9,"div",8,9),e.qZA()),2&i&&(e.Tol(a.styleClass),e.Q6J("ngClass","p-scrollpanel p-component")("ngStyle",a.style),e.xp6(6),e.Q6J("ngTemplateOutlet",a.contentTemplate))},dependencies:[s.mk,s.tP,s.PC],styles:[".p-scrollpanel-wrapper{overflow:hidden;width:100%;height:100%;position:relative;float:left}.p-scrollpanel-content{height:calc(100% + 18px);width:calc(100% + 18px);padding:0 18px 18px 0;position:relative;overflow:auto;box-sizing:border-box}.p-scrollpanel-bar{position:relative;background:#c1c1c1;border-radius:3px;cursor:pointer;opacity:0;transition:opacity .25s linear}.p-scrollpanel-bar-y{width:9px;top:0}.p-scrollpanel-bar-x{height:9px;bottom:0}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:hover .p-scrollpanel-bar,.p-scrollpanel:active .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-webkit-user-select:none;user-select:none}\n"],encapsulation:2,changeDetection:0})}return t})(),V=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[s.ez]})}return t})();function R(t,u){if(1&t&&e._UZ(0,"span",5),2&t){const n=e.oxw(2);e.Q6J("ngClass",n.icon)}}function X(t,u){if(1&t&&(e.ynx(0),e.YNc(1,R,1,1,"span",4),e.BQk()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.icon)}}function H(t,u){}function N(t,u){1&t&&e.YNc(0,H,0,0,"ng-template")}function j(t,u){if(1&t&&(e.TgZ(0,"span",6),e.YNc(1,N,1,0,null,7),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",n.iconTemplate)}}const W=["*"];let G=(()=>{class t{style;styleClass;severity;value;icon;rounded;templates;iconTemplate;ngAfterContentInit(){this.templates?.forEach(n=>{"icon"===n.getType()&&(this.iconTemplate=n.template)})}containerClass(){return{"p-tag p-component":!0,"p-tag-info":"info"===this.severity,"p-tag-success":"success"===this.severity,"p-tag-warning":"warning"===this.severity,"p-tag-danger":"danger"===this.severity,"p-tag-rounded":this.rounded}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["p-tag"]],contentQueries:function(i,a,l){if(1&i&&e.Suo(l,w.jx,4),2&i){let p;e.iGM(p=e.CRH())&&(a.templates=p)}},hostAttrs:[1,"p-element"],inputs:{style:"style",styleClass:"styleClass",severity:"severity",value:"value",icon:"icon",rounded:"rounded"},ngContentSelectors:W,decls:6,vars:7,consts:[[3,"ngClass","ngStyle"],[4,"ngIf"],["class","p-tag-icon",4,"ngIf"],[1,"p-tag-value"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-icon",3,"ngClass"],[1,"p-tag-icon"],[4,"ngTemplateOutlet"]],template:function(i,a){1&i&&(e.F$t(),e.TgZ(0,"span",0),e.Hsn(1),e.YNc(2,X,2,1,"ng-container",1),e.YNc(3,j,2,1,"span",2),e.TgZ(4,"span",3),e._uU(5),e.qZA()()),2&i&&(e.Tol(a.styleClass),e.Q6J("ngClass",a.containerClass())("ngStyle",a.style),e.xp6(2),e.Q6J("ngIf",!a.iconTemplate),e.xp6(1),e.Q6J("ngIf",a.iconTemplate),e.xp6(2),e.Oqu(a.value))},dependencies:[s.mk,s.O5,s.tP,s.PC],styles:[".p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}\n"],encapsulation:2,changeDetection:0})}return t})(),K=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[s.ez,w.m8,w.m8]})}return t})();var L=c(2169),I=c(707);let $=(()=>{class t{styleClass;style;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":"circle"===this.shape,"p-skeleton-none":"none"===this.animation}}containerStyle(){return this.size?{...this.style,width:this.size,height:this.size,borderRadius:this.borderRadius}:{...this.style,width:this.width,height:this.height,borderRadius:this.borderRadius}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["p-skeleton"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},decls:1,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(i,a){1&i&&e._UZ(0,"div",0),2&i&&(e.Tol(a.styleClass),e.Q6J("ngClass",a.containerClass())("ngStyle",a.containerStyle()))},dependencies:[s.mk,s.PC],styles:['.p-skeleton{position:relative;overflow:hidden}.p-skeleton:after{content:"";animation:p-skeleton-animation 1.2s infinite;height:100%;left:0;position:absolute;right:0;top:0;transform:translate(-100%);z-index:1}.p-skeleton.p-skeleton-circle{border-radius:50%}.p-skeleton-none:after{animation:none}@keyframes p-skeleton-animation{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n'],encapsulation:2,changeDetection:0})}return t})(),ee=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[s.ez]})}return t})();const te=["*"];let ne=(()=>{class t{styleClass;style;static \u0275fac=function(i){return new(i||t)};static \u0275cmp=e.Xpm({type:t,selectors:[["p-avatarGroup"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style"},ngContentSelectors:te,decls:2,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(i,a){1&i&&(e.F$t(),e.TgZ(0,"div",0),e.Hsn(1),e.qZA()),2&i&&(e.Tol(a.styleClass),e.Q6J("ngClass","p-avatar-group p-component")("ngStyle",a.style))},dependencies:[s.mk,s.PC],styles:[".p-avatar-group p-avatar+p-avatar{margin-left:-1rem}.p-avatar-group{display:flex;align-items:center}\n"],encapsulation:2,changeDetection:0})}return t})(),ie=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[s.ez]})}return t})();var C=c(6825),k=c(5837),D=c(2332);function se(t,u){if(1&t&&e._UZ(0,"span",6),2&t){const n=e.oxw(3);e.Tol(n.icon),e.Q6J("ngClass","p-scrolltop-icon")}}const ae=function(){return{"font-size":"1rem",scale:"1.5"}};function oe(t,u){1&t&&e._UZ(0,"ChevronUpIcon",7),2&t&&e.Q6J("styleClass","p-scrolltop-icon")("ngStyle",e.DdM(2,ae))}function le(t,u){if(1&t&&(e.ynx(0),e.YNc(1,se,1,3,"span",4),e.YNc(2,oe,1,3,"ChevronUpIcon",5),e.BQk()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.icon),e.xp6(1),e.Q6J("ngIf",!n.icon)}}function re(t,u){}function ce(t,u){if(1&t&&e.YNc(0,re,0,0,"ng-template",8),2&t){const n=e.oxw(2);e.Q6J("ngIf",!n.icon)}}const pe=function(t,u){return{showTransitionParams:t,hideTransitionParams:u}},ue=function(t){return{value:"open",params:t}},de=function(){return{styleClass:"p-scrolltop-icon"}};function ge(t,u){if(1&t){const n=e.EpF();e.TgZ(0,"button",1),e.NdJ("@animation.start",function(a){e.CHM(n);const l=e.oxw();return e.KtG(l.onEnter(a))})("@animation.done",function(a){e.CHM(n);const l=e.oxw();return e.KtG(l.onLeave(a))})("click",function(){e.CHM(n);const a=e.oxw();return e.KtG(a.onClick())}),e.YNc(1,le,3,2,"ng-container",2),e.YNc(2,ce,1,1,null,3),e.qZA()}if(2&t){const n=e.oxw();e.Tol(n.styleClass),e.Q6J("@animation",e.VKq(11,ue,e.WLB(8,pe,n.showTransitionOptions,n.hideTransitionOptions)))("ngClass",n.containerClass())("ngStyle",n.style),e.xp6(1),e.Q6J("ngIf",!n.iconTemplate),e.xp6(1),e.Q6J("ngTemplateOutlet",n.iconTemplate)("ngTemplateOutletContext",e.DdM(13,de))}}let me=(()=>{class t{document;platformId;renderer;el;cd;config;styleClass;style;target="window";threshold=400;icon;behavior="smooth";showTransitionOptions=".15s";hideTransitionOptions=".15s";templates;iconTemplate;documentScrollListener;parentScrollListener;visible=!1;overlay;window;constructor(n,i,a,l,p,T){this.document=n,this.platformId=i,this.renderer=a,this.el=l,this.cd=p,this.config=T,this.window=this.document.defaultView}ngOnInit(){"window"===this.target?this.bindDocumentScrollListener():"parent"===this.target&&this.bindParentScrollListener()}ngAfterContentInit(){this.templates.forEach(n=>{"icon"===n.getType()&&(this.iconTemplate=n.template)})}onClick(){("window"===this.target?this.window:this.el.nativeElement.parentElement).scroll({top:0,behavior:this.behavior})}onEnter(n){switch(n.toState){case"open":this.overlay=n.element,D.P9.set("overlay",this.overlay,this.config.zIndex.overlay);break;case"void":this.overlay=null}}onLeave(n){"void"===n.toState&&D.P9.clear(n.element)}checkVisibility(n){this.visible=n>this.threshold,this.cd.markForCheck()}bindParentScrollListener(){(0,s.NF)(this.platformId)&&(this.parentScrollListener=this.renderer.listen(this.el.nativeElement.parentElement,"scroll",()=>{this.checkVisibility(this.el.nativeElement.parentElement.scrollTop)}))}bindDocumentScrollListener(){(0,s.NF)(this.platformId)&&(this.documentScrollListener=this.renderer.listen(this.window,"scroll",()=>{this.checkVisibility(m.p.getWindowScrollTop())}))}unbindParentScrollListener(){this.parentScrollListener&&(this.parentScrollListener(),this.parentScrollListener=null)}unbindDocumentScrollListener(){this.documentScrollListener&&(this.documentScrollListener(),this.documentScrollListener=null)}containerClass(){return{"p-scrolltop p-link p-component":!0,"p-scrolltop-sticky":"window"!==this.target}}ngOnDestroy(){"window"===this.target?this.unbindDocumentScrollListener():"parent"===this.target&&this.unbindParentScrollListener(),this.overlay&&(D.P9.clear(this.overlay),this.overlay=null)}static \u0275fac=function(i){return new(i||t)(e.Y36(s.K0),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(w.b4))};static \u0275cmp=e.Xpm({type:t,selectors:[["p-scrollTop"]],contentQueries:function(i,a,l){if(1&i&&e.Suo(l,w.jx,4),2&i){let p;e.iGM(p=e.CRH())&&(a.templates=p)}},hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",target:"target",threshold:"threshold",icon:"icon",behavior:"behavior",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},decls:1,vars:1,consts:[["type","button",3,"ngClass","class","ngStyle","click",4,"ngIf"],["type","button",3,"ngClass","ngStyle","click"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass",4,"ngIf"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"ngClass"],[3,"styleClass","ngStyle"],[3,"ngIf"]],template:function(i,a){1&i&&e.YNc(0,ge,3,14,"button",0),2&i&&e.Q6J("ngIf",a.visible)},dependencies:function(){return[s.mk,s.O5,s.tP,s.PC,k.g]},styles:[".p-scrolltop{position:fixed;bottom:20px;right:20px;display:flex;align-items:center;justify-content:center}.p-scrolltop-sticky{position:sticky}.p-scrolltop-sticky.p-link{margin-left:auto}\n"],encapsulation:2,data:{animation:[(0,C.X$)("animation",[(0,C.SB)("void",(0,C.oB)({opacity:0})),(0,C.SB)("open",(0,C.oB)({opacity:1})),(0,C.eR)("void => open",(0,C.jt)("{{showTransitionParams}}")),(0,C.eR)("open => void",(0,C.jt)("{{hideTransitionParams}}"))])]},changeDetection:0})}return t})(),he=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[s.ez,k.g,w.m8,w.m8]})}return t})();const U=function(){return{"background-color":"#9c27b0",color:"#ffffff"}},ve=function(){return{"background-color":"#2196F3",color:"#ffffff"}},fe=function(){return{width:"250px",height:"200px"}};let ye=(()=>{class t{constructor(){this.value=0}ngOnInit(){this.interval=setInterval(()=>{this.value=this.value+Math.floor(10*Math.random())+1,this.value>=100&&(this.value=100,clearInterval(this.interval))},2e3)}ngOnDestroy(){clearInterval(this.interval)}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:140,vars:27,consts:[[1,"grid"],[1,"col-12"],[1,"card"],[1,"col"],[3,"value","showValue"],[1,"col-12","lg:col-6"],[1,"flex","flex-wrap","gap-2"],["value","2"],["value","8","severity","success"],["value","4","severity","info"],["value","12","severity","warning"],["value","3","severity","danger"],["pBadge","","value","2",1,"pi","pi-bell","mr-4","p-text-secondary",2,"font-size","2rem"],["pBadge","","severity","danger",1,"pi","pi-calendar","mr-4","p-text-secondary",2,"font-size","2rem",3,"value"],["pBadge","","severity","danger",1,"pi","pi-envelope","p-text-secondary",2,"font-size","2rem"],["label","Emails","badge","8"],["label","Messages","icon","pi pi-users","styleClass","p-button-warning","badge","8","badgeClass","p-badge-danger"],[1,"flex","flex-wrap","gap-2","align-items-end"],["value","4","size","large","severity","warning"],["value","6","size","xlarge","severity","success"],["styleClass","mb-3"],["image","assets/demo/images/avatar/amyelsner.png","size","large","shape","circle"],["image","assets/demo/images/avatar/asiyajavayant.png","size","large","shape","circle"],["image","assets/demo/images/avatar/onyamalimba.png","size","large","shape","circle"],["image","assets/demo/images/avatar/ionibowcher.png","size","large","shape","circle"],["image","assets/demo/images/avatar/xuxuefeng.png","size","large","shape","circle"],["label","+2","shape","circle","size","large"],["label","P","size","xlarge","shape","circle"],["label","V","size","large","shape","circle"],["label","U","shape","circle"],["icon","pi pi-user","pBadge","","value","4","severity","success","size","xlarge"],["target","parent","styleClass","custom-scrolltop","icon","pi pi-arrow-up",3,"threshold"],["value","Primary"],["severity","success","value","Success"],["severity","info","value","Info"],["severity","warning","value","Warning"],["severity","danger","value","Danger"],["value","Primary",3,"rounded"],["severity","success","value","Success",3,"rounded"],["severity","info","value","Info",3,"rounded"],["severity","warning","value","Warning",3,"rounded"],["severity","danger","value","Danger",3,"rounded"],["icon","pi pi-user","value","Primary"],["icon","pi pi-check","severity","success","value","Success"],["icon","pi pi-info-circle","severity","info","value","Info"],["con","pi pi-exclamation-triangle","severity","warning","value","Warning"],["icon","pi pi-times","severity","danger","value","Danger"],[1,"flex","flex-wrap","align-items-center"],["label","Action","styleClass","m-1"],["label","Comedy","styleClass","m-1"],["label","Mystery","styleClass","m-1"],["label","Thriller","styleClass","m-1",3,"removable"],["label","Apple","icon","pi pi-apple","styleClass","m-1"],["label","Facebook","icon","pi pi-facebook","styleClass","m-1"],["label","Google","icon","pi pi-google","styleClass","m-1"],["label","Microsoft","icon","pi pi-microsoft","styleClass","m-1",3,"removable"],["label","Amy Elsner","image","assets/demo/images/avatar/amyelsner.png","styleClass","m-1"],["label","Asiya Javayant","image","assets/demo/images/avatar/asiyajavayant.png","styleClass","m-1"],["label","Onyama Limba","image","assets/demo/images/avatar/onyamalimba.png","styleClass","m-1"],["label","Xuxue Feng","image","assets/demo/images/avatar/xuxuefeng.png","styleClass","m-1",3,"removable"],["label","Action","styleClass","m-1 custom-chip"],["label","Comedy","styleClass","m-1 custom-chip"],["label","Onyama Limba","image","assets/demo/images/avatar/onyamalimba.png","styleClass","m-1 custom-chip"],["label","Xuxue Feng","image","assets/demo/images/avatar/xuxuefeng.png","styleClass","m-1 custom-chip",3,"removable"],[1,"border-round","border-1","surface-border","p-4"],[1,"flex","mb-3"],["shape","circle","size","4rem","styleClass","mr-2"],["width","10rem","styleClass","mb-2"],["width","5rem","styleClass","mb-2"],["height",".5rem"],["width","100%","height","150px"],[1,"flex","justify-content-between","mt-3"],["width","4rem","height","2rem"]],template:function(i,a){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e._uU(4,"ProgressBar"),e.qZA(),e.TgZ(5,"div",0)(6,"div",3),e._UZ(7,"p-progressBar",4),e.qZA(),e.TgZ(8,"div",3),e._UZ(9,"p-progressBar",4),e.qZA()()()(),e.TgZ(10,"div",5)(11,"div",2)(12,"h4"),e._uU(13,"Badge"),e.qZA(),e.TgZ(14,"h5"),e._uU(15,"Numbers"),e.qZA(),e.TgZ(16,"div",6),e._UZ(17,"p-badge",7)(18,"p-badge",8)(19,"p-badge",9)(20,"p-badge",10)(21,"p-badge",11),e.qZA(),e.TgZ(22,"h5"),e._uU(23,"Positioned Badge"),e.qZA(),e.TgZ(24,"div",6),e._UZ(25,"i",12)(26,"i",13)(27,"i",14),e.qZA(),e.TgZ(28,"h5"),e._uU(29,"Inline Button Badge"),e.qZA(),e.TgZ(30,"div",6),e._UZ(31,"p-button",15)(32,"p-button",16),e.qZA(),e.TgZ(33,"h5"),e._uU(34,"Sizes"),e.qZA(),e.TgZ(35,"div",17),e._UZ(36,"p-badge",7)(37,"p-badge",18)(38,"p-badge",19),e.qZA()(),e.TgZ(39,"div",2)(40,"h4"),e._uU(41,"Avatar"),e.qZA(),e.TgZ(42,"h5"),e._uU(43,"Avatar Group"),e.qZA(),e.TgZ(44,"p-avatarGroup",20),e._UZ(45,"p-avatar",21)(46,"p-avatar",22)(47,"p-avatar",23)(48,"p-avatar",24)(49,"p-avatar",25)(50,"p-avatar",26),e.qZA(),e.TgZ(51,"h5"),e._uU(52,"Label - Circle"),e.qZA(),e.TgZ(53,"div",17),e._UZ(54,"p-avatar",27)(55,"p-avatar",28)(56,"p-avatar",29),e.qZA(),e.TgZ(57,"h5"),e._uU(58,"Icon - Badge"),e.qZA(),e._UZ(59,"p-avatar",30),e.qZA(),e.TgZ(60,"div",2)(61,"h4"),e._uU(62,"ScrollTop"),e.qZA(),e.TgZ(63,"p-scrollPanel")(64,"p"),e._uU(65," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. "),e.qZA(),e._UZ(66,"p-scrollTop",31),e.qZA()()(),e.TgZ(67,"div",5)(68,"div",2)(69,"h4"),e._uU(70,"Tag"),e.qZA(),e.TgZ(71,"h5"),e._uU(72,"Tags"),e.qZA(),e.TgZ(73,"div",6),e._UZ(74,"p-tag",32)(75,"p-tag",33)(76,"p-tag",34)(77,"p-tag",35)(78,"p-tag",36),e.qZA(),e.TgZ(79,"h5"),e._uU(80,"Pills"),e.qZA(),e.TgZ(81,"div",6),e._UZ(82,"p-tag",37)(83,"p-tag",38)(84,"p-tag",39)(85,"p-tag",40)(86,"p-tag",41),e.qZA(),e.TgZ(87,"h5"),e._uU(88,"Icons"),e.qZA(),e.TgZ(89,"div",6),e._UZ(90,"p-tag",42)(91,"p-tag",43)(92,"p-tag",44)(93,"p-tag",45)(94,"p-tag",46),e.qZA()(),e.TgZ(95,"div",2)(96,"h4"),e._uU(97,"Chip"),e.qZA(),e.TgZ(98,"h5"),e._uU(99,"Basic"),e.qZA(),e.TgZ(100,"div",47),e._UZ(101,"p-chip",48)(102,"p-chip",49)(103,"p-chip",50)(104,"p-chip",51),e.qZA(),e.TgZ(105,"h5"),e._uU(106,"Icon"),e.qZA(),e.TgZ(107,"div",47),e._UZ(108,"p-chip",52)(109,"p-chip",53)(110,"p-chip",54)(111,"p-chip",55),e.qZA(),e.TgZ(112,"h5"),e._uU(113,"Image"),e.qZA(),e.TgZ(114,"div",47),e._UZ(115,"p-chip",56)(116,"p-chip",57)(117,"p-chip",58)(118,"p-chip",59),e.qZA(),e.TgZ(119,"h5"),e._uU(120,"Styling"),e.qZA(),e.TgZ(121,"div",47),e._UZ(122,"p-chip",60)(123,"p-chip",61)(124,"p-chip",62)(125,"p-chip",63),e.qZA()(),e.TgZ(126,"div",2)(127,"h4"),e._uU(128,"Skeleton"),e.qZA(),e.TgZ(129,"div",64)(130,"div",65),e._UZ(131,"p-skeleton",66),e.TgZ(132,"div"),e._UZ(133,"p-skeleton",67)(134,"p-skeleton",68)(135,"p-skeleton",69),e.qZA()(),e._UZ(136,"p-skeleton",70),e.TgZ(137,"div",71),e._UZ(138,"p-skeleton",72)(139,"p-skeleton",72),e.qZA()()()()()),2&i&&(e.xp6(7),e.Q6J("value",a.value)("showValue",!0),e.xp6(2),e.Q6J("value",50)("showValue",!1),e.xp6(17),e.Q6J("value","10+"),e.xp6(24),e.Akn(e.DdM(23,U)),e.xp6(5),e.Akn(e.DdM(24,ve)),e.xp6(1),e.Akn(e.DdM(25,U)),e.xp6(7),e.Akn(e.DdM(26,fe)),e.xp6(3),e.Q6J("threshold",100),e.xp6(16),e.Q6J("rounded",!0),e.xp6(1),e.Q6J("rounded",!0),e.xp6(1),e.Q6J("rounded",!0),e.xp6(1),e.Q6J("rounded",!0),e.xp6(1),e.Q6J("rounded",!0),e.xp6(18),e.Q6J("removable",!0),e.xp6(7),e.Q6J("removable",!0),e.xp6(7),e.Q6J("removable",!0),e.xp6(7),e.Q6J("removable",!0))},dependencies:[h.k,v.Ct,v.lM,b,O,G,L.A,I.zx,$,ne,me],encapsulation:2})}return t})(),Ce=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[o.Bz.forChild([{path:"",component:ye}]),o.Bz]})}return t})(),_e=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[s.ez,Ce,h.q,v.TX,y,V,K,L.o,I.hJ,ee,ie,he]})}return t})()},5837:(A,_,c)=>{c.d(_,{g:()=>e});var s=c(4769),o=c(4713);let e=(()=>{class h extends o.s{static \u0275fac=function(){let x;return function(g){return(x||(x=s.n5z(h)))(g||h)}}();static \u0275cmp=s.Xpm({type:h,selectors:[["ChevronUpIcon"]],standalone:!0,features:[s.qOj,s.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(f,g){1&f&&(s.O4$(),s.TgZ(0,"svg",0),s._UZ(1,"path",1),s.qZA()),2&f&&(s.Tol(g.getClassNames()),s.uIk("aria-label",g.ariaLabel)("aria-hidden",g.ariaHidden)("role",g.role))},encapsulation:2})}return h})()},8468:(A,_,c)=>{c.d(_,{x:()=>h});var s=c(4769),o=c(4713),e=c(2332);let h=(()=>{class v extends o.s{pathId;ngOnInit(){this.pathId="url(#"+(0,e.Th)()+")"}static \u0275fac=function(){let f;return function(r){return(f||(f=s.n5z(v)))(r||v)}}();static \u0275cmp=s.Xpm({type:v,selectors:[["TimesCircleIcon"]],standalone:!0,features:[s.qOj,s.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(g,r){1&g&&(s.O4$(),s.TgZ(0,"svg",0)(1,"g"),s._UZ(2,"path",1),s.qZA(),s.TgZ(3,"defs")(4,"clipPath",2),s._UZ(5,"rect",3),s.qZA()()()),2&g&&(s.Tol(r.getClassNames()),s.uIk("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),s.xp6(1),s.uIk("clip-path",r.pathId),s.xp6(3),s.Q6J("id",r.pathId))},encapsulation:2})}return v})()},6651:(A,_,c)=>{c.d(_,{k:()=>f,q:()=>g});var s=c(6814),o=c(4769);function e(r,M){if(1&r&&(o.TgZ(0,"div",5),o._uU(1),o.qZA()),2&r){const d=o.oxw(2);o.Udp("display",null!=d.value&&0!==d.value?"flex":"none"),o.xp6(1),o.AsE("",d.value,"",d.unit,"")}}function h(r,M){if(1&r&&(o.TgZ(0,"div",3),o.YNc(1,e,2,4,"div",4),o.qZA()),2&r){const d=o.oxw();o.Udp("width",d.value+"%")("background",d.color),o.xp6(1),o.Q6J("ngIf",d.showValue)}}function v(r,M){if(1&r&&(o.TgZ(0,"div",6),o._UZ(1,"div",7),o.qZA()),2&r){const d=o.oxw();o.xp6(1),o.Udp("background",d.color)}}const x=function(r,M){return{"p-progressbar p-component":!0,"p-progressbar-determinate":r,"p-progressbar-indeterminate":M}};let f=(()=>{class r{value;showValue=!0;styleClass;style;unit="%";mode="determinate";color;static \u0275fac=function(b){return new(b||r)};static \u0275cmp=o.Xpm({type:r,selectors:[["p-progressBar"]],hostAttrs:[1,"p-element"],inputs:{value:"value",showValue:"showValue",styleClass:"styleClass",style:"style",unit:"unit",mode:"mode",color:"color"},decls:3,vars:10,consts:[["role","progressbar","aria-valuemin","0","aria-valuemax","100",3,"ngStyle","ngClass"],["class","p-progressbar-value p-progressbar-value-animate","style","display:flex",3,"width","background",4,"ngIf"],["class","p-progressbar-indeterminate-container",4,"ngIf"],[1,"p-progressbar-value","p-progressbar-value-animate",2,"display","flex"],["class","p-progressbar-label",3,"display",4,"ngIf"],[1,"p-progressbar-label"],[1,"p-progressbar-indeterminate-container"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(b,y){1&b&&(o.TgZ(0,"div",0),o.YNc(1,h,2,5,"div",1),o.YNc(2,v,2,2,"div",2),o.qZA()),2&b&&(o.Tol(y.styleClass),o.Q6J("ngStyle",y.style)("ngClass",o.WLB(7,x,"determinate"===y.mode,"indeterminate"===y.mode)),o.uIk("aria-valuenow",y.value),o.xp6(1),o.Q6J("ngIf","determinate"===y.mode),o.xp6(1),o.Q6J("ngIf","indeterminate"===y.mode))},dependencies:[s.mk,s.O5,s.PC],styles:['.p-progressbar{position:relative;overflow:hidden}.p-progressbar-determinate .p-progressbar-value{height:100%;width:0%;position:absolute;display:none;border:0 none;display:flex;align-items:center;justify-content:center;overflow:hidden}.p-progressbar-determinate .p-progressbar-label{display:inline-flex}.p-progressbar-determinate .p-progressbar-value-animate{transition:width 1s ease-in-out}.p-progressbar-indeterminate .p-progressbar-value:before{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.p-progressbar-indeterminate .p-progressbar-value:after{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation-delay:1.15s}@keyframes p-progressbar-indeterminate-anim{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes p-progressbar-indeterminate-anim-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}\n'],encapsulation:2,changeDetection:0})}return r})(),g=(()=>{class r{static \u0275fac=function(b){return new(b||r)};static \u0275mod=o.oAB({type:r});static \u0275inj=o.cJS({imports:[s.ez]})}return r})()}}]);