goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__65528){
var vec__65530 = p__65528;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65530,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65530,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__65537){
var map__65538 = p__65537;
var map__65538__$1 = (((((!((map__65538 == null))))?(((((map__65538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65538):map__65538);
var request = map__65538__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65538__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65538__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__65535_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__65535_SHARP_));
}),(function (p1__65536_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__65536_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__65549 = cljs.core.seq(seq_request_maps);
var chunk__65550 = null;
var count__65551 = (0);
var i__65552 = (0);
while(true){
if((i__65552 < count__65551)){
var request__$1 = chunk__65550.cljs$core$IIndexed$_nth$arity$2(null,i__65552);
var G__65558_65583 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__65558_65583) : ajax.core.ajax_request.call(null,G__65558_65583));


var G__65584 = seq__65549;
var G__65585 = chunk__65550;
var G__65586 = count__65551;
var G__65587 = (i__65552 + (1));
seq__65549 = G__65584;
chunk__65550 = G__65585;
count__65551 = G__65586;
i__65552 = G__65587;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__65549);
if(temp__5735__auto__){
var seq__65549__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65549__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__65549__$1);
var G__65588 = cljs.core.chunk_rest(seq__65549__$1);
var G__65589 = c__4556__auto__;
var G__65590 = cljs.core.count(c__4556__auto__);
var G__65591 = (0);
seq__65549 = G__65588;
chunk__65550 = G__65589;
count__65551 = G__65590;
i__65552 = G__65591;
continue;
} else {
var request__$1 = cljs.core.first(seq__65549__$1);
var G__65563_65592 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__65563_65592) : ajax.core.ajax_request.call(null,G__65563_65592));


var G__65599 = cljs.core.next(seq__65549__$1);
var G__65600 = null;
var G__65601 = (0);
var G__65602 = (0);
seq__65549 = G__65599;
chunk__65550 = G__65600;
count__65551 = G__65601;
i__65552 = G__65602;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
