goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = true;
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__55580){
var map__55582 = p__55580;
var map__55582__$1 = (((((!((map__55582 == null))))?(((((map__55582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55582):map__55582);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55582__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55582__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55582__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55582__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__55584_55617 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__55585_55618 = null;
var count__55586_55619 = (0);
var i__55587_55620 = (0);
while(true){
if((i__55587_55620 < count__55586_55619)){
var vec__55600_55624 = chunk__55585_55618.cljs$core$IIndexed$_nth$arity$2(null,i__55587_55620);
var k_55625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55600_55624,(0),null);
var cb_55626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55600_55624,(1),null);
try{var G__55604_55627 = cljs.core.deref(re_frame.trace.traces);
(cb_55626.cljs$core$IFn$_invoke$arity$1 ? cb_55626.cljs$core$IFn$_invoke$arity$1(G__55604_55627) : cb_55626.call(null,G__55604_55627));
}catch (e55603){var e_55628 = e55603;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_55625,"while storing",cljs.core.deref(re_frame.trace.traces),e_55628], 0));
}

var G__55629 = seq__55584_55617;
var G__55630 = chunk__55585_55618;
var G__55631 = count__55586_55619;
var G__55632 = (i__55587_55620 + (1));
seq__55584_55617 = G__55629;
chunk__55585_55618 = G__55630;
count__55586_55619 = G__55631;
i__55587_55620 = G__55632;
continue;
} else {
var temp__5735__auto___55633 = cljs.core.seq(seq__55584_55617);
if(temp__5735__auto___55633){
var seq__55584_55634__$1 = temp__5735__auto___55633;
if(cljs.core.chunked_seq_QMARK_(seq__55584_55634__$1)){
var c__4556__auto___55638 = cljs.core.chunk_first(seq__55584_55634__$1);
var G__55639 = cljs.core.chunk_rest(seq__55584_55634__$1);
var G__55640 = c__4556__auto___55638;
var G__55641 = cljs.core.count(c__4556__auto___55638);
var G__55642 = (0);
seq__55584_55617 = G__55639;
chunk__55585_55618 = G__55640;
count__55586_55619 = G__55641;
i__55587_55620 = G__55642;
continue;
} else {
var vec__55605_55643 = cljs.core.first(seq__55584_55634__$1);
var k_55644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55605_55643,(0),null);
var cb_55645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55605_55643,(1),null);
try{var G__55609_55649 = cljs.core.deref(re_frame.trace.traces);
(cb_55645.cljs$core$IFn$_invoke$arity$1 ? cb_55645.cljs$core$IFn$_invoke$arity$1(G__55609_55649) : cb_55645.call(null,G__55609_55649));
}catch (e55608){var e_55650 = e55608;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_55644,"while storing",cljs.core.deref(re_frame.trace.traces),e_55650], 0));
}

var G__55651 = cljs.core.next(seq__55584_55634__$1);
var G__55652 = null;
var G__55653 = (0);
var G__55654 = (0);
seq__55584_55617 = G__55651;
chunk__55585_55618 = G__55652;
count__55586_55619 = G__55653;
i__55587_55620 = G__55654;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
