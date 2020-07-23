goog.provide('vegas.core');
vegas.core.nav_link = (function vegas$core$nav_link(uri,title,page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),uri,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","page","common/page",-2099452134)], null)))))?new cljs.core.Keyword(null,"is-active","is-active",-1424968720):null)], null),title], null);
});
vegas.core.navbar = (function vegas$core$navbar(){
var with_let53261 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let53261","with-let53261",1075804939));
var temp__5739__auto___53263 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto___53263 == null)){
} else {
var c__51081__auto___53264 = temp__5739__auto___53263;
if((with_let53261.generation === c__51081__auto___53264.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let53261.generation = c__51081__auto___53264.ratomGeneration);
}


var init53262 = (with_let53261.length === (0));
var expanded_QMARK_ = ((init53262)?(with_let53261[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let53261[(0)]));
var res__51082__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.is-info>div.container","nav.navbar.is-info>div.container",1621679245),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-brand","div.navbar-brand",1304438848),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-item","a.navbar-item",1351862432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"/",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535)], null)], null),"Wizards in Vegas"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.navbar-burger.burger","span.navbar-burger.burger",1784367377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data-target","data-target",-113904678),new cljs.core.Keyword(null,"nav-menu","nav-menu",-1710804493),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_QMARK_,cljs.core.not);
}),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?new cljs.core.Keyword(null,"is-active","is-active",-1424968720):null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#nav-menu.navbar-menu","div#nav-menu.navbar-menu",1772317719),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.deref(expanded_QMARK_))?new cljs.core.Keyword(null,"is-active","is-active",-1424968720):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.navbar-start","div.navbar-start",1801160723),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vegas.core.nav_link,"#/","Home",new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vegas.core.nav_link,"#/about","About",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null)], null)], null);

return res__51082__auto__;
});
vegas.core.about_page = (function vegas$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.section>div.container>div.content","section.section>div.container>div.content",-1570006034),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"/img/warning_clojure.png"], null)], null)], null);
});
vegas.core.home_page = (function vegas$core$home_page(){
return vegas.main_page.main_page();
});
vegas.core.page = (function vegas$core$page(){
var temp__5733__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","page","common/page",-2099452134)], null)));
if(cljs.core.truth_(temp__5733__auto__)){
var page = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vegas.core.navbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null)], null);
} else {
return null;
}
});
vegas.core.navigate_BANG_ = (function vegas$core$navigate_BANG_(match,_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("common","navigate","common/navigate",-1770818836),match], null));
});
vegas.core.router = reitit.core.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return vegas.core.home_page;},new cljs.core.Symbol("vegas.core","home-page","vegas.core/home-page",-2080531924,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"vegas.core","vegas.core",1754304466,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"vegas/core.cljs",16,1,44,44,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(vegas.core.home_page)?vegas.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),(function (_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("page","init-home","page/init-home",-915420304)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Var(function(){return vegas.core.about_page;},new cljs.core.Symbol("vegas.core","about-page","vegas.core/about-page",-1219987860,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"vegas.core","vegas.core",1754304466,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"vegas/core.cljs",17,1,40,40,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(vegas.core.about_page)?vegas.core.about_page.cljs$lang$test:null)]))], null)], null)], null));
vegas.core.start_router_BANG_ = (function vegas$core$start_router_BANG_(){
return reitit.frontend.easy.start_BANG_(vegas.core.router,vegas.core.navigate_BANG_,cljs.core.PersistentArrayMap.EMPTY);
});
vegas.core.mount_components = (function vegas$core$mount_components(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return vegas.core.page;},new cljs.core.Symbol("vegas.core","page","vegas.core/page",-473895527,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"vegas.core","vegas.core",1754304466,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"vegas/core.cljs",11,1,47,47,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(vegas.core.page)?vegas.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
vegas.core.init_BANG_ = (function vegas$core$init_BANG_(){
vegas.core.start_router_BANG_();

vegas.ajax.load_interceptors_BANG_();

return vegas.core.mount_components();
});

//# sourceMappingURL=vegas.core.js.map
