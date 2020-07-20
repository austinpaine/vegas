goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__63921,p__63922){
var map__63923 = p__63921;
var map__63923__$1 = (((((!((map__63923 == null))))?(((((map__63923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63923):map__63923);
var svc = map__63923__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63923__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63923__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63923__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__63924 = p__63922;
var map__63924__$1 = (((((!((map__63924 == null))))?(((((map__63924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__63924):map__63924);
var msg = map__63924__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63924__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63924__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63924__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63924__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__64000,p__64001){
var map__64002 = p__64000;
var map__64002__$1 = (((((!((map__64002 == null))))?(((((map__64002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64002):map__64002);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64002__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__64003 = p__64001;
var map__64003__$1 = (((((!((map__64003 == null))))?(((((map__64003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64003):map__64003);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64003__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__64017,p__64018){
var map__64020 = p__64017;
var map__64020__$1 = (((((!((map__64020 == null))))?(((((map__64020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64020):map__64020);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64020__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64020__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__64021 = p__64018;
var map__64021__$1 = (((((!((map__64021 == null))))?(((((map__64021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64021):map__64021);
var msg = map__64021__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__64021__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__64027,tid){
var map__64028 = p__64027;
var map__64028__$1 = (((((!((map__64028 == null))))?(((((map__64028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64028):map__64028);
var svc = map__64028__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64028__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__64039 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__64040 = null;
var count__64041 = (0);
var i__64042 = (0);
while(true){
if((i__64042 < count__64041)){
var vec__64071 = chunk__64040.cljs$core$IIndexed$_nth$arity$2(null,i__64042);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64071,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64071,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__64127 = seq__64039;
var G__64128 = chunk__64040;
var G__64129 = count__64041;
var G__64130 = (i__64042 + (1));
seq__64039 = G__64127;
chunk__64040 = G__64128;
count__64041 = G__64129;
i__64042 = G__64130;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64039);
if(temp__5735__auto__){
var seq__64039__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64039__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64039__$1);
var G__64135 = cljs.core.chunk_rest(seq__64039__$1);
var G__64136 = c__4556__auto__;
var G__64137 = cljs.core.count(c__4556__auto__);
var G__64138 = (0);
seq__64039 = G__64135;
chunk__64040 = G__64136;
count__64041 = G__64137;
i__64042 = G__64138;
continue;
} else {
var vec__64087 = cljs.core.first(seq__64039__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64087,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64087,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__64143 = cljs.core.next(seq__64039__$1);
var G__64144 = null;
var G__64145 = (0);
var G__64146 = (0);
seq__64039 = G__64143;
chunk__64040 = G__64144;
count__64041 = G__64145;
i__64042 = G__64146;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__64031_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__64031_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__64033_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__64033_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__64034_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__64034_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__64035_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__64035_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__64099){
var map__64101 = p__64099;
var map__64101__$1 = (((((!((map__64101 == null))))?(((((map__64101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64101):map__64101);
var svc = map__64101__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64101__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64101__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
