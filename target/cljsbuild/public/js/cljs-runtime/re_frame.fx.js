goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__55861 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__55862 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__55862);

try{try{var seq__55864 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__55865 = null;
var count__55866 = (0);
var i__55867 = (0);
while(true){
if((i__55867 < count__55866)){
var vec__55883 = chunk__55865.cljs$core$IIndexed$_nth$arity$2(null,i__55867);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55883,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55883,(1),null);
var temp__5733__auto___55961 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___55961)){
var effect_fn_55962 = temp__5733__auto___55961;
(effect_fn_55962.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55962.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55962.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55963 = seq__55864;
var G__55964 = chunk__55865;
var G__55965 = count__55866;
var G__55966 = (i__55867 + (1));
seq__55864 = G__55963;
chunk__55865 = G__55964;
count__55866 = G__55965;
i__55867 = G__55966;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55864);
if(temp__5735__auto__){
var seq__55864__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55864__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55864__$1);
var G__55967 = cljs.core.chunk_rest(seq__55864__$1);
var G__55968 = c__4556__auto__;
var G__55969 = cljs.core.count(c__4556__auto__);
var G__55970 = (0);
seq__55864 = G__55967;
chunk__55865 = G__55968;
count__55866 = G__55969;
i__55867 = G__55970;
continue;
} else {
var vec__55886 = cljs.core.first(seq__55864__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55886,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55886,(1),null);
var temp__5733__auto___55971 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___55971)){
var effect_fn_55972 = temp__5733__auto___55971;
(effect_fn_55972.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55972.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55972.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55973 = cljs.core.next(seq__55864__$1);
var G__55974 = null;
var G__55975 = (0);
var G__55976 = (0);
seq__55864 = G__55973;
chunk__55865 = G__55974;
count__55866 = G__55975;
i__55867 = G__55976;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__55557__auto___55977 = re_frame.interop.now();
var duration__55558__auto___55978 = (end__55557__auto___55977 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__55558__auto___55978,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__55557__auto___55977);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__55861);
}} else {
var seq__55890 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__55891 = null;
var count__55892 = (0);
var i__55893 = (0);
while(true){
if((i__55893 < count__55892)){
var vec__55903 = chunk__55891.cljs$core$IIndexed$_nth$arity$2(null,i__55893);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55903,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55903,(1),null);
var temp__5733__auto___55979 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___55979)){
var effect_fn_55980 = temp__5733__auto___55979;
(effect_fn_55980.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55980.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55980.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55981 = seq__55890;
var G__55982 = chunk__55891;
var G__55983 = count__55892;
var G__55984 = (i__55893 + (1));
seq__55890 = G__55981;
chunk__55891 = G__55982;
count__55892 = G__55983;
i__55893 = G__55984;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55890);
if(temp__5735__auto__){
var seq__55890__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55890__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55890__$1);
var G__55985 = cljs.core.chunk_rest(seq__55890__$1);
var G__55986 = c__4556__auto__;
var G__55987 = cljs.core.count(c__4556__auto__);
var G__55988 = (0);
seq__55890 = G__55985;
chunk__55891 = G__55986;
count__55892 = G__55987;
i__55893 = G__55988;
continue;
} else {
var vec__55906 = cljs.core.first(seq__55890__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55906,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55906,(1),null);
var temp__5733__auto___55989 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___55989)){
var effect_fn_55990 = temp__5733__auto___55989;
(effect_fn_55990.cljs$core$IFn$_invoke$arity$1 ? effect_fn_55990.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_55990.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__55993 = cljs.core.next(seq__55890__$1);
var G__55994 = null;
var G__55995 = (0);
var G__55996 = (0);
seq__55890 = G__55993;
chunk__55891 = G__55994;
count__55892 = G__55995;
i__55893 = G__55996;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__55912 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__55913 = null;
var count__55914 = (0);
var i__55915 = (0);
while(true){
if((i__55915 < count__55914)){
var map__55930 = chunk__55913.cljs$core$IIndexed$_nth$arity$2(null,i__55915);
var map__55930__$1 = (((((!((map__55930 == null))))?(((((map__55930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55930):map__55930);
var effect = map__55930__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55930__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55930__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__55912,chunk__55913,count__55914,i__55915,map__55930,map__55930__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__55912,chunk__55913,count__55914,i__55915,map__55930,map__55930__$1,effect,ms,dispatch))
,ms);
}


var G__55997 = seq__55912;
var G__55998 = chunk__55913;
var G__55999 = count__55914;
var G__56000 = (i__55915 + (1));
seq__55912 = G__55997;
chunk__55913 = G__55998;
count__55914 = G__55999;
i__55915 = G__56000;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55912);
if(temp__5735__auto__){
var seq__55912__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55912__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55912__$1);
var G__56001 = cljs.core.chunk_rest(seq__55912__$1);
var G__56002 = c__4556__auto__;
var G__56003 = cljs.core.count(c__4556__auto__);
var G__56004 = (0);
seq__55912 = G__56001;
chunk__55913 = G__56002;
count__55914 = G__56003;
i__55915 = G__56004;
continue;
} else {
var map__55936 = cljs.core.first(seq__55912__$1);
var map__55936__$1 = (((((!((map__55936 == null))))?(((((map__55936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55936):map__55936);
var effect = map__55936__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55936__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55936__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__55912,chunk__55913,count__55914,i__55915,map__55936,map__55936__$1,effect,ms,dispatch,seq__55912__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__55912,chunk__55913,count__55914,i__55915,map__55936,map__55936__$1,effect,ms,dispatch,seq__55912__$1,temp__5735__auto__))
,ms);
}


var G__56007 = cljs.core.next(seq__55912__$1);
var G__56008 = null;
var G__56009 = (0);
var G__56010 = (0);
seq__55912 = G__56007;
chunk__55913 = G__56008;
count__55914 = G__56009;
i__55915 = G__56010;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__55950 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__55951 = null;
var count__55952 = (0);
var i__55953 = (0);
while(true){
if((i__55953 < count__55952)){
var event = chunk__55951.cljs$core$IIndexed$_nth$arity$2(null,i__55953);
re_frame.router.dispatch(event);


var G__56012 = seq__55950;
var G__56013 = chunk__55951;
var G__56014 = count__55952;
var G__56015 = (i__55953 + (1));
seq__55950 = G__56012;
chunk__55951 = G__56013;
count__55952 = G__56014;
i__55953 = G__56015;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55950);
if(temp__5735__auto__){
var seq__55950__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55950__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55950__$1);
var G__56017 = cljs.core.chunk_rest(seq__55950__$1);
var G__56018 = c__4556__auto__;
var G__56019 = cljs.core.count(c__4556__auto__);
var G__56020 = (0);
seq__55950 = G__56017;
chunk__55951 = G__56018;
count__55952 = G__56019;
i__55953 = G__56020;
continue;
} else {
var event = cljs.core.first(seq__55950__$1);
re_frame.router.dispatch(event);


var G__56021 = cljs.core.next(seq__55950__$1);
var G__56022 = null;
var G__56023 = (0);
var G__56024 = (0);
seq__55950 = G__56021;
chunk__55951 = G__56022;
count__55952 = G__56023;
i__55953 = G__56024;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__55954 = cljs.core.seq(value);
var chunk__55955 = null;
var count__55956 = (0);
var i__55957 = (0);
while(true){
if((i__55957 < count__55956)){
var event = chunk__55955.cljs$core$IIndexed$_nth$arity$2(null,i__55957);
clear_event(event);


var G__56025 = seq__55954;
var G__56026 = chunk__55955;
var G__56027 = count__55956;
var G__56028 = (i__55957 + (1));
seq__55954 = G__56025;
chunk__55955 = G__56026;
count__55956 = G__56027;
i__55957 = G__56028;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55954);
if(temp__5735__auto__){
var seq__55954__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55954__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55954__$1);
var G__56029 = cljs.core.chunk_rest(seq__55954__$1);
var G__56030 = c__4556__auto__;
var G__56031 = cljs.core.count(c__4556__auto__);
var G__56032 = (0);
seq__55954 = G__56029;
chunk__55955 = G__56030;
count__55956 = G__56031;
i__55957 = G__56032;
continue;
} else {
var event = cljs.core.first(seq__55954__$1);
clear_event(event);


var G__56033 = cljs.core.next(seq__55954__$1);
var G__56034 = null;
var G__56035 = (0);
var G__56036 = (0);
seq__55954 = G__56033;
chunk__55955 = G__56034;
count__55956 = G__56035;
i__55957 = G__56036;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
