goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_63024 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_63024(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_63026 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_63026(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__62398 = coll;
var G__62399 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__62398,G__62399) : shadow.dom.lazy_native_coll_seq.call(null,G__62398,G__62399));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__62422 = arguments.length;
switch (G__62422) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__62425 = arguments.length;
switch (G__62425) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__62431 = arguments.length;
switch (G__62431) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__62440 = arguments.length;
switch (G__62440) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__62458 = arguments.length;
switch (G__62458) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__62482 = arguments.length;
switch (G__62482) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e62489){if((e62489 instanceof Object)){
var e = e62489;
return console.log("didnt support attachEvent",el,e);
} else {
throw e62489;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__62505 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__62506 = null;
var count__62507 = (0);
var i__62508 = (0);
while(true){
if((i__62508 < count__62507)){
var el = chunk__62506.cljs$core$IIndexed$_nth$arity$2(null,i__62508);
var handler_63039__$1 = ((function (seq__62505,chunk__62506,count__62507,i__62508,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__62505,chunk__62506,count__62507,i__62508,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_63039__$1);


var G__63040 = seq__62505;
var G__63041 = chunk__62506;
var G__63042 = count__62507;
var G__63043 = (i__62508 + (1));
seq__62505 = G__63040;
chunk__62506 = G__63041;
count__62507 = G__63042;
i__62508 = G__63043;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62505);
if(temp__5735__auto__){
var seq__62505__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62505__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62505__$1);
var G__63044 = cljs.core.chunk_rest(seq__62505__$1);
var G__63045 = c__4556__auto__;
var G__63046 = cljs.core.count(c__4556__auto__);
var G__63047 = (0);
seq__62505 = G__63044;
chunk__62506 = G__63045;
count__62507 = G__63046;
i__62508 = G__63047;
continue;
} else {
var el = cljs.core.first(seq__62505__$1);
var handler_63048__$1 = ((function (seq__62505,chunk__62506,count__62507,i__62508,el,seq__62505__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__62505,chunk__62506,count__62507,i__62508,el,seq__62505__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_63048__$1);


var G__63049 = cljs.core.next(seq__62505__$1);
var G__63050 = null;
var G__63051 = (0);
var G__63052 = (0);
seq__62505 = G__63049;
chunk__62506 = G__63050;
count__62507 = G__63051;
i__62508 = G__63052;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__62510 = arguments.length;
switch (G__62510) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__62517 = cljs.core.seq(events);
var chunk__62518 = null;
var count__62519 = (0);
var i__62520 = (0);
while(true){
if((i__62520 < count__62519)){
var vec__62535 = chunk__62518.cljs$core$IIndexed$_nth$arity$2(null,i__62520);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62535,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__63056 = seq__62517;
var G__63057 = chunk__62518;
var G__63058 = count__62519;
var G__63059 = (i__62520 + (1));
seq__62517 = G__63056;
chunk__62518 = G__63057;
count__62519 = G__63058;
i__62520 = G__63059;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62517);
if(temp__5735__auto__){
var seq__62517__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62517__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62517__$1);
var G__63060 = cljs.core.chunk_rest(seq__62517__$1);
var G__63061 = c__4556__auto__;
var G__63062 = cljs.core.count(c__4556__auto__);
var G__63063 = (0);
seq__62517 = G__63060;
chunk__62518 = G__63061;
count__62519 = G__63062;
i__62520 = G__63063;
continue;
} else {
var vec__62538 = cljs.core.first(seq__62517__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62538,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62538,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__63064 = cljs.core.next(seq__62517__$1);
var G__63065 = null;
var G__63066 = (0);
var G__63067 = (0);
seq__62517 = G__63064;
chunk__62518 = G__63065;
count__62519 = G__63066;
i__62520 = G__63067;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__62541 = cljs.core.seq(styles);
var chunk__62542 = null;
var count__62543 = (0);
var i__62544 = (0);
while(true){
if((i__62544 < count__62543)){
var vec__62555 = chunk__62542.cljs$core$IIndexed$_nth$arity$2(null,i__62544);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62555,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62555,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__63068 = seq__62541;
var G__63069 = chunk__62542;
var G__63070 = count__62543;
var G__63071 = (i__62544 + (1));
seq__62541 = G__63068;
chunk__62542 = G__63069;
count__62543 = G__63070;
i__62544 = G__63071;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62541);
if(temp__5735__auto__){
var seq__62541__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62541__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62541__$1);
var G__63074 = cljs.core.chunk_rest(seq__62541__$1);
var G__63075 = c__4556__auto__;
var G__63076 = cljs.core.count(c__4556__auto__);
var G__63077 = (0);
seq__62541 = G__63074;
chunk__62542 = G__63075;
count__62543 = G__63076;
i__62544 = G__63077;
continue;
} else {
var vec__62569 = cljs.core.first(seq__62541__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62569,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__63079 = cljs.core.next(seq__62541__$1);
var G__63080 = null;
var G__63081 = (0);
var G__63082 = (0);
seq__62541 = G__63079;
chunk__62542 = G__63080;
count__62543 = G__63081;
i__62544 = G__63082;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__62577_63083 = key;
var G__62577_63084__$1 = (((G__62577_63083 instanceof cljs.core.Keyword))?G__62577_63083.fqn:null);
switch (G__62577_63084__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_63087 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_63087,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_63087,"aria-");
}
})())){
el.setAttribute(ks_63087,value);
} else {
(el[ks_63087] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__62612){
var map__62614 = p__62612;
var map__62614__$1 = (((((!((map__62614 == null))))?(((((map__62614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62614):map__62614);
var props = map__62614__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62614__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__62617 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62617,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62617,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62617,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__62622 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__62622,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__62622;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__62626 = arguments.length;
switch (G__62626) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__62630){
var vec__62631 = p__62630;
var seq__62632 = cljs.core.seq(vec__62631);
var first__62633 = cljs.core.first(seq__62632);
var seq__62632__$1 = cljs.core.next(seq__62632);
var nn = first__62633;
var first__62633__$1 = cljs.core.first(seq__62632__$1);
var seq__62632__$2 = cljs.core.next(seq__62632__$1);
var np = first__62633__$1;
var nc = seq__62632__$2;
var node = vec__62631;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__62636 = nn;
var G__62637 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__62636,G__62637) : create_fn.call(null,G__62636,G__62637));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__62638 = nn;
var G__62639 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__62638,G__62639) : create_fn.call(null,G__62638,G__62639));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__62648 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62648,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62648,(1),null);
var seq__62651_63121 = cljs.core.seq(node_children);
var chunk__62652_63122 = null;
var count__62653_63123 = (0);
var i__62654_63124 = (0);
while(true){
if((i__62654_63124 < count__62653_63123)){
var child_struct_63125 = chunk__62652_63122.cljs$core$IIndexed$_nth$arity$2(null,i__62654_63124);
var children_63129 = shadow.dom.dom_node(child_struct_63125);
if(cljs.core.seq_QMARK_(children_63129)){
var seq__62679_63130 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_63129));
var chunk__62681_63131 = null;
var count__62682_63132 = (0);
var i__62683_63133 = (0);
while(true){
if((i__62683_63133 < count__62682_63132)){
var child_63135 = chunk__62681_63131.cljs$core$IIndexed$_nth$arity$2(null,i__62683_63133);
if(cljs.core.truth_(child_63135)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63135);


var G__63137 = seq__62679_63130;
var G__63138 = chunk__62681_63131;
var G__63139 = count__62682_63132;
var G__63140 = (i__62683_63133 + (1));
seq__62679_63130 = G__63137;
chunk__62681_63131 = G__63138;
count__62682_63132 = G__63139;
i__62683_63133 = G__63140;
continue;
} else {
var G__63141 = seq__62679_63130;
var G__63142 = chunk__62681_63131;
var G__63143 = count__62682_63132;
var G__63144 = (i__62683_63133 + (1));
seq__62679_63130 = G__63141;
chunk__62681_63131 = G__63142;
count__62682_63132 = G__63143;
i__62683_63133 = G__63144;
continue;
}
} else {
var temp__5735__auto___63145 = cljs.core.seq(seq__62679_63130);
if(temp__5735__auto___63145){
var seq__62679_63146__$1 = temp__5735__auto___63145;
if(cljs.core.chunked_seq_QMARK_(seq__62679_63146__$1)){
var c__4556__auto___63147 = cljs.core.chunk_first(seq__62679_63146__$1);
var G__63148 = cljs.core.chunk_rest(seq__62679_63146__$1);
var G__63149 = c__4556__auto___63147;
var G__63150 = cljs.core.count(c__4556__auto___63147);
var G__63151 = (0);
seq__62679_63130 = G__63148;
chunk__62681_63131 = G__63149;
count__62682_63132 = G__63150;
i__62683_63133 = G__63151;
continue;
} else {
var child_63152 = cljs.core.first(seq__62679_63146__$1);
if(cljs.core.truth_(child_63152)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63152);


var G__63153 = cljs.core.next(seq__62679_63146__$1);
var G__63154 = null;
var G__63155 = (0);
var G__63156 = (0);
seq__62679_63130 = G__63153;
chunk__62681_63131 = G__63154;
count__62682_63132 = G__63155;
i__62683_63133 = G__63156;
continue;
} else {
var G__63157 = cljs.core.next(seq__62679_63146__$1);
var G__63158 = null;
var G__63159 = (0);
var G__63160 = (0);
seq__62679_63130 = G__63157;
chunk__62681_63131 = G__63158;
count__62682_63132 = G__63159;
i__62683_63133 = G__63160;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_63129);
}


var G__63161 = seq__62651_63121;
var G__63162 = chunk__62652_63122;
var G__63163 = count__62653_63123;
var G__63164 = (i__62654_63124 + (1));
seq__62651_63121 = G__63161;
chunk__62652_63122 = G__63162;
count__62653_63123 = G__63163;
i__62654_63124 = G__63164;
continue;
} else {
var temp__5735__auto___63165 = cljs.core.seq(seq__62651_63121);
if(temp__5735__auto___63165){
var seq__62651_63166__$1 = temp__5735__auto___63165;
if(cljs.core.chunked_seq_QMARK_(seq__62651_63166__$1)){
var c__4556__auto___63167 = cljs.core.chunk_first(seq__62651_63166__$1);
var G__63168 = cljs.core.chunk_rest(seq__62651_63166__$1);
var G__63169 = c__4556__auto___63167;
var G__63170 = cljs.core.count(c__4556__auto___63167);
var G__63171 = (0);
seq__62651_63121 = G__63168;
chunk__62652_63122 = G__63169;
count__62653_63123 = G__63170;
i__62654_63124 = G__63171;
continue;
} else {
var child_struct_63172 = cljs.core.first(seq__62651_63166__$1);
var children_63173 = shadow.dom.dom_node(child_struct_63172);
if(cljs.core.seq_QMARK_(children_63173)){
var seq__62692_63174 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_63173));
var chunk__62694_63175 = null;
var count__62695_63176 = (0);
var i__62696_63177 = (0);
while(true){
if((i__62696_63177 < count__62695_63176)){
var child_63178 = chunk__62694_63175.cljs$core$IIndexed$_nth$arity$2(null,i__62696_63177);
if(cljs.core.truth_(child_63178)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63178);


var G__63183 = seq__62692_63174;
var G__63184 = chunk__62694_63175;
var G__63185 = count__62695_63176;
var G__63186 = (i__62696_63177 + (1));
seq__62692_63174 = G__63183;
chunk__62694_63175 = G__63184;
count__62695_63176 = G__63185;
i__62696_63177 = G__63186;
continue;
} else {
var G__63187 = seq__62692_63174;
var G__63188 = chunk__62694_63175;
var G__63189 = count__62695_63176;
var G__63190 = (i__62696_63177 + (1));
seq__62692_63174 = G__63187;
chunk__62694_63175 = G__63188;
count__62695_63176 = G__63189;
i__62696_63177 = G__63190;
continue;
}
} else {
var temp__5735__auto___63196__$1 = cljs.core.seq(seq__62692_63174);
if(temp__5735__auto___63196__$1){
var seq__62692_63197__$1 = temp__5735__auto___63196__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62692_63197__$1)){
var c__4556__auto___63199 = cljs.core.chunk_first(seq__62692_63197__$1);
var G__63201 = cljs.core.chunk_rest(seq__62692_63197__$1);
var G__63202 = c__4556__auto___63199;
var G__63203 = cljs.core.count(c__4556__auto___63199);
var G__63204 = (0);
seq__62692_63174 = G__63201;
chunk__62694_63175 = G__63202;
count__62695_63176 = G__63203;
i__62696_63177 = G__63204;
continue;
} else {
var child_63215 = cljs.core.first(seq__62692_63197__$1);
if(cljs.core.truth_(child_63215)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_63215);


var G__63217 = cljs.core.next(seq__62692_63197__$1);
var G__63218 = null;
var G__63219 = (0);
var G__63220 = (0);
seq__62692_63174 = G__63217;
chunk__62694_63175 = G__63218;
count__62695_63176 = G__63219;
i__62696_63177 = G__63220;
continue;
} else {
var G__63222 = cljs.core.next(seq__62692_63197__$1);
var G__63223 = null;
var G__63224 = (0);
var G__63225 = (0);
seq__62692_63174 = G__63222;
chunk__62694_63175 = G__63223;
count__62695_63176 = G__63224;
i__62696_63177 = G__63225;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_63173);
}


var G__63231 = cljs.core.next(seq__62651_63166__$1);
var G__63232 = null;
var G__63233 = (0);
var G__63234 = (0);
seq__62651_63121 = G__63231;
chunk__62652_63122 = G__63232;
count__62653_63123 = G__63233;
i__62654_63124 = G__63234;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__62731 = cljs.core.seq(node);
var chunk__62732 = null;
var count__62733 = (0);
var i__62734 = (0);
while(true){
if((i__62734 < count__62733)){
var n = chunk__62732.cljs$core$IIndexed$_nth$arity$2(null,i__62734);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__63243 = seq__62731;
var G__63244 = chunk__62732;
var G__63245 = count__62733;
var G__63246 = (i__62734 + (1));
seq__62731 = G__63243;
chunk__62732 = G__63244;
count__62733 = G__63245;
i__62734 = G__63246;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62731);
if(temp__5735__auto__){
var seq__62731__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62731__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62731__$1);
var G__63252 = cljs.core.chunk_rest(seq__62731__$1);
var G__63254 = c__4556__auto__;
var G__63255 = cljs.core.count(c__4556__auto__);
var G__63256 = (0);
seq__62731 = G__63252;
chunk__62732 = G__63254;
count__62733 = G__63255;
i__62734 = G__63256;
continue;
} else {
var n = cljs.core.first(seq__62731__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__63262 = cljs.core.next(seq__62731__$1);
var G__63263 = null;
var G__63264 = (0);
var G__63265 = (0);
seq__62731 = G__63262;
chunk__62732 = G__63263;
count__62733 = G__63264;
i__62734 = G__63265;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__62739 = arguments.length;
switch (G__62739) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__62746 = arguments.length;
switch (G__62746) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__62751 = arguments.length;
switch (G__62751) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63323 = arguments.length;
var i__4737__auto___63324 = (0);
while(true){
if((i__4737__auto___63324 < len__4736__auto___63323)){
args__4742__auto__.push((arguments[i__4737__auto___63324]));

var G__63325 = (i__4737__auto___63324 + (1));
i__4737__auto___63324 = G__63325;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__62763_63326 = cljs.core.seq(nodes);
var chunk__62764_63327 = null;
var count__62765_63328 = (0);
var i__62766_63329 = (0);
while(true){
if((i__62766_63329 < count__62765_63328)){
var node_63330 = chunk__62764_63327.cljs$core$IIndexed$_nth$arity$2(null,i__62766_63329);
fragment.appendChild(shadow.dom._to_dom(node_63330));


var G__63331 = seq__62763_63326;
var G__63332 = chunk__62764_63327;
var G__63333 = count__62765_63328;
var G__63334 = (i__62766_63329 + (1));
seq__62763_63326 = G__63331;
chunk__62764_63327 = G__63332;
count__62765_63328 = G__63333;
i__62766_63329 = G__63334;
continue;
} else {
var temp__5735__auto___63335 = cljs.core.seq(seq__62763_63326);
if(temp__5735__auto___63335){
var seq__62763_63336__$1 = temp__5735__auto___63335;
if(cljs.core.chunked_seq_QMARK_(seq__62763_63336__$1)){
var c__4556__auto___63337 = cljs.core.chunk_first(seq__62763_63336__$1);
var G__63338 = cljs.core.chunk_rest(seq__62763_63336__$1);
var G__63339 = c__4556__auto___63337;
var G__63340 = cljs.core.count(c__4556__auto___63337);
var G__63341 = (0);
seq__62763_63326 = G__63338;
chunk__62764_63327 = G__63339;
count__62765_63328 = G__63340;
i__62766_63329 = G__63341;
continue;
} else {
var node_63343 = cljs.core.first(seq__62763_63336__$1);
fragment.appendChild(shadow.dom._to_dom(node_63343));


var G__63344 = cljs.core.next(seq__62763_63336__$1);
var G__63345 = null;
var G__63346 = (0);
var G__63347 = (0);
seq__62763_63326 = G__63344;
chunk__62764_63327 = G__63345;
count__62765_63328 = G__63346;
i__62766_63329 = G__63347;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq62758){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq62758));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__62780_63348 = cljs.core.seq(scripts);
var chunk__62781_63349 = null;
var count__62782_63350 = (0);
var i__62783_63351 = (0);
while(true){
if((i__62783_63351 < count__62782_63350)){
var vec__62796_63355 = chunk__62781_63349.cljs$core$IIndexed$_nth$arity$2(null,i__62783_63351);
var script_tag_63356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62796_63355,(0),null);
var script_body_63357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62796_63355,(1),null);
eval(script_body_63357);


var G__63360 = seq__62780_63348;
var G__63361 = chunk__62781_63349;
var G__63362 = count__62782_63350;
var G__63363 = (i__62783_63351 + (1));
seq__62780_63348 = G__63360;
chunk__62781_63349 = G__63361;
count__62782_63350 = G__63362;
i__62783_63351 = G__63363;
continue;
} else {
var temp__5735__auto___63367 = cljs.core.seq(seq__62780_63348);
if(temp__5735__auto___63367){
var seq__62780_63368__$1 = temp__5735__auto___63367;
if(cljs.core.chunked_seq_QMARK_(seq__62780_63368__$1)){
var c__4556__auto___63369 = cljs.core.chunk_first(seq__62780_63368__$1);
var G__63370 = cljs.core.chunk_rest(seq__62780_63368__$1);
var G__63371 = c__4556__auto___63369;
var G__63372 = cljs.core.count(c__4556__auto___63369);
var G__63373 = (0);
seq__62780_63348 = G__63370;
chunk__62781_63349 = G__63371;
count__62782_63350 = G__63372;
i__62783_63351 = G__63373;
continue;
} else {
var vec__62799_63375 = cljs.core.first(seq__62780_63368__$1);
var script_tag_63376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62799_63375,(0),null);
var script_body_63377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62799_63375,(1),null);
eval(script_body_63377);


var G__63378 = cljs.core.next(seq__62780_63368__$1);
var G__63379 = null;
var G__63380 = (0);
var G__63381 = (0);
seq__62780_63348 = G__63378;
chunk__62781_63349 = G__63379;
count__62782_63350 = G__63380;
i__62783_63351 = G__63381;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__62802){
var vec__62803 = p__62802;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62803,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62803,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__62812 = arguments.length;
switch (G__62812) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__62815 = cljs.core.seq(style_keys);
var chunk__62816 = null;
var count__62817 = (0);
var i__62818 = (0);
while(true){
if((i__62818 < count__62817)){
var it = chunk__62816.cljs$core$IIndexed$_nth$arity$2(null,i__62818);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__63404 = seq__62815;
var G__63405 = chunk__62816;
var G__63406 = count__62817;
var G__63407 = (i__62818 + (1));
seq__62815 = G__63404;
chunk__62816 = G__63405;
count__62817 = G__63406;
i__62818 = G__63407;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62815);
if(temp__5735__auto__){
var seq__62815__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62815__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62815__$1);
var G__63411 = cljs.core.chunk_rest(seq__62815__$1);
var G__63412 = c__4556__auto__;
var G__63413 = cljs.core.count(c__4556__auto__);
var G__63414 = (0);
seq__62815 = G__63411;
chunk__62816 = G__63412;
count__62817 = G__63413;
i__62818 = G__63414;
continue;
} else {
var it = cljs.core.first(seq__62815__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__63415 = cljs.core.next(seq__62815__$1);
var G__63416 = null;
var G__63417 = (0);
var G__63418 = (0);
seq__62815 = G__63415;
chunk__62816 = G__63416;
count__62817 = G__63417;
i__62818 = G__63418;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k62820,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__62825 = k62820;
var G__62825__$1 = (((G__62825 instanceof cljs.core.Keyword))?G__62825.fqn:null);
switch (G__62825__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62820,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__62826){
var vec__62827 = p__62826;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62827,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62827,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62819){
var self__ = this;
var G__62819__$1 = this;
return (new cljs.core.RecordIter((0),G__62819__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62821,other62822){
var self__ = this;
var this62821__$1 = this;
return (((!((other62822 == null)))) && ((this62821__$1.constructor === other62822.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62821__$1.x,other62822.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62821__$1.y,other62822.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62821__$1.__extmap,other62822.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__62819){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__62830 = cljs.core.keyword_identical_QMARK_;
var expr__62831 = k__4388__auto__;
if(cljs.core.truth_((pred__62830.cljs$core$IFn$_invoke$arity$2 ? pred__62830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__62831) : pred__62830.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__62831)))){
return (new shadow.dom.Coordinate(G__62819,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62830.cljs$core$IFn$_invoke$arity$2 ? pred__62830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__62831) : pred__62830.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__62831)))){
return (new shadow.dom.Coordinate(self__.x,G__62819,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__62819),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__62819){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__62819,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__62823){
var extmap__4419__auto__ = (function (){var G__62879 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62823,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__62823)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62879);
} else {
return G__62879;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__62823),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__62823),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k62882,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__62887 = k62882;
var G__62887__$1 = (((G__62887 instanceof cljs.core.Keyword))?G__62887.fqn:null);
switch (G__62887__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k62882,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__62888){
var vec__62889 = p__62888;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62889,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62889,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62881){
var self__ = this;
var G__62881__$1 = this;
return (new cljs.core.RecordIter((0),G__62881__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this62883,other62884){
var self__ = this;
var this62883__$1 = this;
return (((!((other62884 == null)))) && ((this62883__$1.constructor === other62884.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62883__$1.w,other62884.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62883__$1.h,other62884.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this62883__$1.__extmap,other62884.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__62881){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__62892 = cljs.core.keyword_identical_QMARK_;
var expr__62893 = k__4388__auto__;
if(cljs.core.truth_((pred__62892.cljs$core$IFn$_invoke$arity$2 ? pred__62892.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__62893) : pred__62892.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__62893)))){
return (new shadow.dom.Size(G__62881,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__62892.cljs$core$IFn$_invoke$arity$2 ? pred__62892.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__62893) : pred__62892.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__62893)))){
return (new shadow.dom.Size(self__.w,G__62881,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__62881),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__62881){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__62881,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__62886){
var extmap__4419__auto__ = (function (){var G__62895 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__62886,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__62886)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__62895);
} else {
return G__62895;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__62886),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__62886),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__63485 = (i + (1));
var G__63486 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__63485;
ret = G__63486;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62904){
var vec__62905 = p__62904;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62905,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62905,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__62909 = arguments.length;
switch (G__62909) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__63491 = ps;
var G__63492 = (i + (1));
el__$1 = G__63491;
i = G__63492;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__62912 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62912,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62912,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62912,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__62915_63501 = cljs.core.seq(props);
var chunk__62916_63502 = null;
var count__62917_63503 = (0);
var i__62918_63504 = (0);
while(true){
if((i__62918_63504 < count__62917_63503)){
var vec__62925_63505 = chunk__62916_63502.cljs$core$IIndexed$_nth$arity$2(null,i__62918_63504);
var k_63506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62925_63505,(0),null);
var v_63507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62925_63505,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_63506);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_63506),v_63507);


var G__63508 = seq__62915_63501;
var G__63509 = chunk__62916_63502;
var G__63510 = count__62917_63503;
var G__63511 = (i__62918_63504 + (1));
seq__62915_63501 = G__63508;
chunk__62916_63502 = G__63509;
count__62917_63503 = G__63510;
i__62918_63504 = G__63511;
continue;
} else {
var temp__5735__auto___63513 = cljs.core.seq(seq__62915_63501);
if(temp__5735__auto___63513){
var seq__62915_63514__$1 = temp__5735__auto___63513;
if(cljs.core.chunked_seq_QMARK_(seq__62915_63514__$1)){
var c__4556__auto___63515 = cljs.core.chunk_first(seq__62915_63514__$1);
var G__63516 = cljs.core.chunk_rest(seq__62915_63514__$1);
var G__63517 = c__4556__auto___63515;
var G__63518 = cljs.core.count(c__4556__auto___63515);
var G__63519 = (0);
seq__62915_63501 = G__63516;
chunk__62916_63502 = G__63517;
count__62917_63503 = G__63518;
i__62918_63504 = G__63519;
continue;
} else {
var vec__62931_63521 = cljs.core.first(seq__62915_63514__$1);
var k_63522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62931_63521,(0),null);
var v_63523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62931_63521,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_63522);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_63522),v_63523);


var G__63525 = cljs.core.next(seq__62915_63514__$1);
var G__63526 = null;
var G__63527 = (0);
var G__63528 = (0);
seq__62915_63501 = G__63525;
chunk__62916_63502 = G__63526;
count__62917_63503 = G__63527;
i__62918_63504 = G__63528;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__62940 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62940,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62940,(1),null);
var seq__62944_63534 = cljs.core.seq(node_children);
var chunk__62946_63535 = null;
var count__62947_63536 = (0);
var i__62948_63537 = (0);
while(true){
if((i__62948_63537 < count__62947_63536)){
var child_struct_63542 = chunk__62946_63535.cljs$core$IIndexed$_nth$arity$2(null,i__62948_63537);
if((!((child_struct_63542 == null)))){
if(typeof child_struct_63542 === 'string'){
var text_63544 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_63544),child_struct_63542].join(''));
} else {
var children_63545 = shadow.dom.svg_node(child_struct_63542);
if(cljs.core.seq_QMARK_(children_63545)){
var seq__62972_63547 = cljs.core.seq(children_63545);
var chunk__62974_63548 = null;
var count__62975_63549 = (0);
var i__62976_63550 = (0);
while(true){
if((i__62976_63550 < count__62975_63549)){
var child_63551 = chunk__62974_63548.cljs$core$IIndexed$_nth$arity$2(null,i__62976_63550);
if(cljs.core.truth_(child_63551)){
node.appendChild(child_63551);


var G__63552 = seq__62972_63547;
var G__63553 = chunk__62974_63548;
var G__63554 = count__62975_63549;
var G__63555 = (i__62976_63550 + (1));
seq__62972_63547 = G__63552;
chunk__62974_63548 = G__63553;
count__62975_63549 = G__63554;
i__62976_63550 = G__63555;
continue;
} else {
var G__63556 = seq__62972_63547;
var G__63557 = chunk__62974_63548;
var G__63558 = count__62975_63549;
var G__63559 = (i__62976_63550 + (1));
seq__62972_63547 = G__63556;
chunk__62974_63548 = G__63557;
count__62975_63549 = G__63558;
i__62976_63550 = G__63559;
continue;
}
} else {
var temp__5735__auto___63560 = cljs.core.seq(seq__62972_63547);
if(temp__5735__auto___63560){
var seq__62972_63561__$1 = temp__5735__auto___63560;
if(cljs.core.chunked_seq_QMARK_(seq__62972_63561__$1)){
var c__4556__auto___63562 = cljs.core.chunk_first(seq__62972_63561__$1);
var G__63563 = cljs.core.chunk_rest(seq__62972_63561__$1);
var G__63564 = c__4556__auto___63562;
var G__63565 = cljs.core.count(c__4556__auto___63562);
var G__63566 = (0);
seq__62972_63547 = G__63563;
chunk__62974_63548 = G__63564;
count__62975_63549 = G__63565;
i__62976_63550 = G__63566;
continue;
} else {
var child_63567 = cljs.core.first(seq__62972_63561__$1);
if(cljs.core.truth_(child_63567)){
node.appendChild(child_63567);


var G__63572 = cljs.core.next(seq__62972_63561__$1);
var G__63573 = null;
var G__63574 = (0);
var G__63575 = (0);
seq__62972_63547 = G__63572;
chunk__62974_63548 = G__63573;
count__62975_63549 = G__63574;
i__62976_63550 = G__63575;
continue;
} else {
var G__63581 = cljs.core.next(seq__62972_63561__$1);
var G__63582 = null;
var G__63583 = (0);
var G__63584 = (0);
seq__62972_63547 = G__63581;
chunk__62974_63548 = G__63582;
count__62975_63549 = G__63583;
i__62976_63550 = G__63584;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_63545);
}
}


var G__63585 = seq__62944_63534;
var G__63586 = chunk__62946_63535;
var G__63587 = count__62947_63536;
var G__63588 = (i__62948_63537 + (1));
seq__62944_63534 = G__63585;
chunk__62946_63535 = G__63586;
count__62947_63536 = G__63587;
i__62948_63537 = G__63588;
continue;
} else {
var G__63593 = seq__62944_63534;
var G__63594 = chunk__62946_63535;
var G__63595 = count__62947_63536;
var G__63596 = (i__62948_63537 + (1));
seq__62944_63534 = G__63593;
chunk__62946_63535 = G__63594;
count__62947_63536 = G__63595;
i__62948_63537 = G__63596;
continue;
}
} else {
var temp__5735__auto___63597 = cljs.core.seq(seq__62944_63534);
if(temp__5735__auto___63597){
var seq__62944_63598__$1 = temp__5735__auto___63597;
if(cljs.core.chunked_seq_QMARK_(seq__62944_63598__$1)){
var c__4556__auto___63603 = cljs.core.chunk_first(seq__62944_63598__$1);
var G__63604 = cljs.core.chunk_rest(seq__62944_63598__$1);
var G__63605 = c__4556__auto___63603;
var G__63606 = cljs.core.count(c__4556__auto___63603);
var G__63607 = (0);
seq__62944_63534 = G__63604;
chunk__62946_63535 = G__63605;
count__62947_63536 = G__63606;
i__62948_63537 = G__63607;
continue;
} else {
var child_struct_63613 = cljs.core.first(seq__62944_63598__$1);
if((!((child_struct_63613 == null)))){
if(typeof child_struct_63613 === 'string'){
var text_63617 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_63617),child_struct_63613].join(''));
} else {
var children_63618 = shadow.dom.svg_node(child_struct_63613);
if(cljs.core.seq_QMARK_(children_63618)){
var seq__62982_63619 = cljs.core.seq(children_63618);
var chunk__62984_63620 = null;
var count__62985_63621 = (0);
var i__62986_63622 = (0);
while(true){
if((i__62986_63622 < count__62985_63621)){
var child_63623 = chunk__62984_63620.cljs$core$IIndexed$_nth$arity$2(null,i__62986_63622);
if(cljs.core.truth_(child_63623)){
node.appendChild(child_63623);


var G__63624 = seq__62982_63619;
var G__63625 = chunk__62984_63620;
var G__63626 = count__62985_63621;
var G__63627 = (i__62986_63622 + (1));
seq__62982_63619 = G__63624;
chunk__62984_63620 = G__63625;
count__62985_63621 = G__63626;
i__62986_63622 = G__63627;
continue;
} else {
var G__63628 = seq__62982_63619;
var G__63629 = chunk__62984_63620;
var G__63630 = count__62985_63621;
var G__63631 = (i__62986_63622 + (1));
seq__62982_63619 = G__63628;
chunk__62984_63620 = G__63629;
count__62985_63621 = G__63630;
i__62986_63622 = G__63631;
continue;
}
} else {
var temp__5735__auto___63632__$1 = cljs.core.seq(seq__62982_63619);
if(temp__5735__auto___63632__$1){
var seq__62982_63633__$1 = temp__5735__auto___63632__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62982_63633__$1)){
var c__4556__auto___63634 = cljs.core.chunk_first(seq__62982_63633__$1);
var G__63635 = cljs.core.chunk_rest(seq__62982_63633__$1);
var G__63636 = c__4556__auto___63634;
var G__63637 = cljs.core.count(c__4556__auto___63634);
var G__63638 = (0);
seq__62982_63619 = G__63635;
chunk__62984_63620 = G__63636;
count__62985_63621 = G__63637;
i__62986_63622 = G__63638;
continue;
} else {
var child_63639 = cljs.core.first(seq__62982_63633__$1);
if(cljs.core.truth_(child_63639)){
node.appendChild(child_63639);


var G__63643 = cljs.core.next(seq__62982_63633__$1);
var G__63644 = null;
var G__63645 = (0);
var G__63646 = (0);
seq__62982_63619 = G__63643;
chunk__62984_63620 = G__63644;
count__62985_63621 = G__63645;
i__62986_63622 = G__63646;
continue;
} else {
var G__63647 = cljs.core.next(seq__62982_63633__$1);
var G__63648 = null;
var G__63649 = (0);
var G__63650 = (0);
seq__62982_63619 = G__63647;
chunk__62984_63620 = G__63648;
count__62985_63621 = G__63649;
i__62986_63622 = G__63650;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_63618);
}
}


var G__63651 = cljs.core.next(seq__62944_63598__$1);
var G__63652 = null;
var G__63653 = (0);
var G__63654 = (0);
seq__62944_63534 = G__63651;
chunk__62946_63535 = G__63652;
count__62947_63536 = G__63653;
i__62948_63537 = G__63654;
continue;
} else {
var G__63655 = cljs.core.next(seq__62944_63598__$1);
var G__63656 = null;
var G__63657 = (0);
var G__63658 = (0);
seq__62944_63534 = G__63655;
chunk__62946_63535 = G__63656;
count__62947_63536 = G__63657;
i__62948_63537 = G__63658;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63659 = arguments.length;
var i__4737__auto___63660 = (0);
while(true){
if((i__4737__auto___63660 < len__4736__auto___63659)){
args__4742__auto__.push((arguments[i__4737__auto___63660]));

var G__63661 = (i__4737__auto___63660 + (1));
i__4737__auto___63660 = G__63661;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq62988){
var G__62989 = cljs.core.first(seq62988);
var seq62988__$1 = cljs.core.next(seq62988);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62989,seq62988__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__62991 = arguments.length;
switch (G__62991) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__59374__auto___63667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_62998){
var state_val_62999 = (state_62998[(1)]);
if((state_val_62999 === (1))){
var state_62998__$1 = state_62998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62998__$1,(2),once_or_cleanup);
} else {
if((state_val_62999 === (2))){
var inst_62995 = (state_62998[(2)]);
var inst_62996 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_62998__$1 = (function (){var statearr_63000 = state_62998;
(statearr_63000[(7)] = inst_62995);

return statearr_63000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62998__$1,inst_62996);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__59114__auto__ = null;
var shadow$dom$state_machine__59114__auto____0 = (function (){
var statearr_63003 = [null,null,null,null,null,null,null,null];
(statearr_63003[(0)] = shadow$dom$state_machine__59114__auto__);

(statearr_63003[(1)] = (1));

return statearr_63003;
});
var shadow$dom$state_machine__59114__auto____1 = (function (state_62998){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_62998);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e63004){var ex__59117__auto__ = e63004;
var statearr_63005_63668 = state_62998;
(statearr_63005_63668[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_62998[(4)]))){
var statearr_63010_63669 = state_62998;
(statearr_63010_63669[(1)] = cljs.core.first((state_62998[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63670 = state_62998;
state_62998 = G__63670;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
shadow$dom$state_machine__59114__auto__ = function(state_62998){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__59114__auto____0.call(this);
case 1:
return shadow$dom$state_machine__59114__auto____1.call(this,state_62998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__59114__auto____0;
shadow$dom$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__59114__auto____1;
return shadow$dom$state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_63014 = f__59375__auto__();
(statearr_63014[(6)] = c__59374__auto___63667);

return statearr_63014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
