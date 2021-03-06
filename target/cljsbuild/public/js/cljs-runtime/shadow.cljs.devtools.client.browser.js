goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65102 = arguments.length;
var i__4737__auto___65103 = (0);
while(true){
if((i__4737__auto___65103 < len__4736__auto___65102)){
args__4742__auto__.push((arguments[i__4737__auto___65103]));

var G__65104 = (i__4737__auto___65103 + (1));
i__4737__auto___65103 = G__65104;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq64806){
var G__64807 = cljs.core.first(seq64806);
var seq64806__$1 = cljs.core.next(seq64806);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64807,seq64806__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__64811 = cljs.core.seq(sources);
var chunk__64812 = null;
var count__64813 = (0);
var i__64814 = (0);
while(true){
if((i__64814 < count__64813)){
var map__64830 = chunk__64812.cljs$core$IIndexed$_nth$arity$2(null,i__64814);
var map__64830__$1 = (((((!((map__64830 == null))))?(((((map__64830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64830):map__64830);
var src = map__64830__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64830__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64830__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64830__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64830__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e64835){var e_65105 = e64835;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65105);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65105.message)].join('')));
}

var G__65106 = seq__64811;
var G__65107 = chunk__64812;
var G__65108 = count__64813;
var G__65109 = (i__64814 + (1));
seq__64811 = G__65106;
chunk__64812 = G__65107;
count__64813 = G__65108;
i__64814 = G__65109;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64811);
if(temp__5735__auto__){
var seq__64811__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64811__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64811__$1);
var G__65110 = cljs.core.chunk_rest(seq__64811__$1);
var G__65111 = c__4556__auto__;
var G__65112 = cljs.core.count(c__4556__auto__);
var G__65113 = (0);
seq__64811 = G__65110;
chunk__64812 = G__65111;
count__64813 = G__65112;
i__64814 = G__65113;
continue;
} else {
var map__64841 = cljs.core.first(seq__64811__$1);
var map__64841__$1 = (((((!((map__64841 == null))))?(((((map__64841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64841):map__64841);
var src = map__64841__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64841__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64841__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64841__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64841__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e64845){var e_65114 = e64845;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_65114);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_65114.message)].join('')));
}

var G__65115 = cljs.core.next(seq__64811__$1);
var G__65116 = null;
var G__65117 = (0);
var G__65118 = (0);
seq__64811 = G__65115;
chunk__64812 = G__65116;
count__64813 = G__65117;
i__64814 = G__65118;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__64852 = cljs.core.seq(js_requires);
var chunk__64853 = null;
var count__64854 = (0);
var i__64855 = (0);
while(true){
if((i__64855 < count__64854)){
var js_ns = chunk__64853.cljs$core$IIndexed$_nth$arity$2(null,i__64855);
var require_str_65119 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65119);


var G__65123 = seq__64852;
var G__65124 = chunk__64853;
var G__65125 = count__64854;
var G__65126 = (i__64855 + (1));
seq__64852 = G__65123;
chunk__64853 = G__65124;
count__64854 = G__65125;
i__64855 = G__65126;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64852);
if(temp__5735__auto__){
var seq__64852__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64852__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64852__$1);
var G__65127 = cljs.core.chunk_rest(seq__64852__$1);
var G__65128 = c__4556__auto__;
var G__65129 = cljs.core.count(c__4556__auto__);
var G__65130 = (0);
seq__64852 = G__65127;
chunk__64853 = G__65128;
count__64854 = G__65129;
i__64855 = G__65130;
continue;
} else {
var js_ns = cljs.core.first(seq__64852__$1);
var require_str_65131 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_65131);


var G__65132 = cljs.core.next(seq__64852__$1);
var G__65133 = null;
var G__65134 = (0);
var G__65135 = (0);
seq__64852 = G__65132;
chunk__64853 = G__65133;
count__64854 = G__65134;
i__64855 = G__65135;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__64887){
var map__64888 = p__64887;
var map__64888__$1 = (((((!((map__64888 == null))))?(((((map__64888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64888):map__64888);
var msg = map__64888__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64888__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64888__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64893(s__64894){
return (new cljs.core.LazySeq(null,(function (){
var s__64894__$1 = s__64894;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__64894__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__64900 = cljs.core.first(xs__6292__auto__);
var map__64900__$1 = (((((!((map__64900 == null))))?(((((map__64900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64900):map__64900);
var src = map__64900__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64900__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64900__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__64894__$1,map__64900,map__64900__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__64888,map__64888__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64893_$_iter__64895(s__64896){
return (new cljs.core.LazySeq(null,((function (s__64894__$1,map__64900,map__64900__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__64888,map__64888__$1,msg,info,reload_info){
return (function (){
var s__64896__$1 = s__64896;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__64896__$1);
if(temp__5735__auto____$1){
var s__64896__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__64896__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__64896__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__64898 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__64897 = (0);
while(true){
if((i__64897 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__64897);
cljs.core.chunk_append(b__64898,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__65137 = (i__64897 + (1));
i__64897 = G__65137;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__64898),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64893_$_iter__64895(cljs.core.chunk_rest(s__64896__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__64898),null);
}
} else {
var warning = cljs.core.first(s__64896__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64893_$_iter__64895(cljs.core.rest(s__64896__$2)));
}
} else {
return null;
}
break;
}
});})(s__64894__$1,map__64900,map__64900__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__64888,map__64888__$1,msg,info,reload_info))
,null,null));
});})(s__64894__$1,map__64900,map__64900__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__64888,map__64888__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__64893(cljs.core.rest(s__64894__$1)));
} else {
var G__65138 = cljs.core.rest(s__64894__$1);
s__64894__$1 = G__65138;
continue;
}
} else {
var G__65139 = cljs.core.rest(s__64894__$1);
s__64894__$1 = G__65139;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__64911_65140 = cljs.core.seq(warnings);
var chunk__64912_65141 = null;
var count__64913_65142 = (0);
var i__64914_65143 = (0);
while(true){
if((i__64914_65143 < count__64913_65142)){
var map__64923_65148 = chunk__64912_65141.cljs$core$IIndexed$_nth$arity$2(null,i__64914_65143);
var map__64923_65149__$1 = (((((!((map__64923_65148 == null))))?(((((map__64923_65148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64923_65148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64923_65148):map__64923_65148);
var w_65150 = map__64923_65149__$1;
var msg_65151__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64923_65149__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_65152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64923_65149__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_65153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64923_65149__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_65154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64923_65149__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_65154)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_65152),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_65153),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_65151__$1)].join(''));


var G__65156 = seq__64911_65140;
var G__65157 = chunk__64912_65141;
var G__65158 = count__64913_65142;
var G__65159 = (i__64914_65143 + (1));
seq__64911_65140 = G__65156;
chunk__64912_65141 = G__65157;
count__64913_65142 = G__65158;
i__64914_65143 = G__65159;
continue;
} else {
var temp__5735__auto___65160 = cljs.core.seq(seq__64911_65140);
if(temp__5735__auto___65160){
var seq__64911_65161__$1 = temp__5735__auto___65160;
if(cljs.core.chunked_seq_QMARK_(seq__64911_65161__$1)){
var c__4556__auto___65162 = cljs.core.chunk_first(seq__64911_65161__$1);
var G__65163 = cljs.core.chunk_rest(seq__64911_65161__$1);
var G__65164 = c__4556__auto___65162;
var G__65165 = cljs.core.count(c__4556__auto___65162);
var G__65166 = (0);
seq__64911_65140 = G__65163;
chunk__64912_65141 = G__65164;
count__64913_65142 = G__65165;
i__64914_65143 = G__65166;
continue;
} else {
var map__64927_65167 = cljs.core.first(seq__64911_65161__$1);
var map__64927_65168__$1 = (((((!((map__64927_65167 == null))))?(((((map__64927_65167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64927_65167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64927_65167):map__64927_65167);
var w_65169 = map__64927_65168__$1;
var msg_65170__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64927_65168__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_65171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64927_65168__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_65172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64927_65168__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_65173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64927_65168__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_65173)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_65171),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_65172),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_65170__$1)].join(''));


var G__65175 = cljs.core.next(seq__64911_65161__$1);
var G__65176 = null;
var G__65177 = (0);
var G__65178 = (0);
seq__64911_65140 = G__65175;
chunk__64912_65141 = G__65176;
count__64913_65142 = G__65177;
i__64914_65143 = G__65178;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__64884_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__64884_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__64934){
var map__64935 = p__64934;
var map__64935__$1 = (((((!((map__64935 == null))))?(((((map__64935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64935):map__64935);
var msg = map__64935__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64935__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__64937 = cljs.core.seq(updates);
var chunk__64939 = null;
var count__64940 = (0);
var i__64941 = (0);
while(true){
if((i__64941 < count__64940)){
var path = chunk__64939.cljs$core$IIndexed$_nth$arity$2(null,i__64941);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__64983_65188 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__64986_65189 = null;
var count__64987_65190 = (0);
var i__64988_65191 = (0);
while(true){
if((i__64988_65191 < count__64987_65190)){
var node_65192 = chunk__64986_65189.cljs$core$IIndexed$_nth$arity$2(null,i__64988_65191);
var path_match_65193 = shadow.cljs.devtools.client.browser.match_paths(node_65192.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65193)){
var new_link_65194 = (function (){var G__65001 = node_65192.cloneNode(true);
G__65001.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65193),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65001;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65193], 0));

goog.dom.insertSiblingAfter(new_link_65194,node_65192);

goog.dom.removeNode(node_65192);


var G__65195 = seq__64983_65188;
var G__65196 = chunk__64986_65189;
var G__65197 = count__64987_65190;
var G__65198 = (i__64988_65191 + (1));
seq__64983_65188 = G__65195;
chunk__64986_65189 = G__65196;
count__64987_65190 = G__65197;
i__64988_65191 = G__65198;
continue;
} else {
var G__65199 = seq__64983_65188;
var G__65200 = chunk__64986_65189;
var G__65201 = count__64987_65190;
var G__65202 = (i__64988_65191 + (1));
seq__64983_65188 = G__65199;
chunk__64986_65189 = G__65200;
count__64987_65190 = G__65201;
i__64988_65191 = G__65202;
continue;
}
} else {
var temp__5735__auto___65203 = cljs.core.seq(seq__64983_65188);
if(temp__5735__auto___65203){
var seq__64983_65204__$1 = temp__5735__auto___65203;
if(cljs.core.chunked_seq_QMARK_(seq__64983_65204__$1)){
var c__4556__auto___65205 = cljs.core.chunk_first(seq__64983_65204__$1);
var G__65206 = cljs.core.chunk_rest(seq__64983_65204__$1);
var G__65207 = c__4556__auto___65205;
var G__65208 = cljs.core.count(c__4556__auto___65205);
var G__65209 = (0);
seq__64983_65188 = G__65206;
chunk__64986_65189 = G__65207;
count__64987_65190 = G__65208;
i__64988_65191 = G__65209;
continue;
} else {
var node_65210 = cljs.core.first(seq__64983_65204__$1);
var path_match_65211 = shadow.cljs.devtools.client.browser.match_paths(node_65210.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65211)){
var new_link_65212 = (function (){var G__65004 = node_65210.cloneNode(true);
G__65004.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65211),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65004;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65211], 0));

goog.dom.insertSiblingAfter(new_link_65212,node_65210);

goog.dom.removeNode(node_65210);


var G__65213 = cljs.core.next(seq__64983_65204__$1);
var G__65214 = null;
var G__65215 = (0);
var G__65216 = (0);
seq__64983_65188 = G__65213;
chunk__64986_65189 = G__65214;
count__64987_65190 = G__65215;
i__64988_65191 = G__65216;
continue;
} else {
var G__65217 = cljs.core.next(seq__64983_65204__$1);
var G__65218 = null;
var G__65219 = (0);
var G__65220 = (0);
seq__64983_65188 = G__65217;
chunk__64986_65189 = G__65218;
count__64987_65190 = G__65219;
i__64988_65191 = G__65220;
continue;
}
}
} else {
}
}
break;
}


var G__65221 = seq__64937;
var G__65222 = chunk__64939;
var G__65223 = count__64940;
var G__65224 = (i__64941 + (1));
seq__64937 = G__65221;
chunk__64939 = G__65222;
count__64940 = G__65223;
i__64941 = G__65224;
continue;
} else {
var G__65225 = seq__64937;
var G__65226 = chunk__64939;
var G__65227 = count__64940;
var G__65228 = (i__64941 + (1));
seq__64937 = G__65225;
chunk__64939 = G__65226;
count__64940 = G__65227;
i__64941 = G__65228;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__64937);
if(temp__5735__auto__){
var seq__64937__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64937__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64937__$1);
var G__65229 = cljs.core.chunk_rest(seq__64937__$1);
var G__65230 = c__4556__auto__;
var G__65231 = cljs.core.count(c__4556__auto__);
var G__65232 = (0);
seq__64937 = G__65229;
chunk__64939 = G__65230;
count__64940 = G__65231;
i__64941 = G__65232;
continue;
} else {
var path = cljs.core.first(seq__64937__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__65007_65233 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__65010_65234 = null;
var count__65011_65235 = (0);
var i__65012_65236 = (0);
while(true){
if((i__65012_65236 < count__65011_65235)){
var node_65237 = chunk__65010_65234.cljs$core$IIndexed$_nth$arity$2(null,i__65012_65236);
var path_match_65238 = shadow.cljs.devtools.client.browser.match_paths(node_65237.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65238)){
var new_link_65239 = (function (){var G__65031 = node_65237.cloneNode(true);
G__65031.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65238),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65031;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65238], 0));

goog.dom.insertSiblingAfter(new_link_65239,node_65237);

goog.dom.removeNode(node_65237);


var G__65240 = seq__65007_65233;
var G__65241 = chunk__65010_65234;
var G__65242 = count__65011_65235;
var G__65243 = (i__65012_65236 + (1));
seq__65007_65233 = G__65240;
chunk__65010_65234 = G__65241;
count__65011_65235 = G__65242;
i__65012_65236 = G__65243;
continue;
} else {
var G__65244 = seq__65007_65233;
var G__65245 = chunk__65010_65234;
var G__65246 = count__65011_65235;
var G__65247 = (i__65012_65236 + (1));
seq__65007_65233 = G__65244;
chunk__65010_65234 = G__65245;
count__65011_65235 = G__65246;
i__65012_65236 = G__65247;
continue;
}
} else {
var temp__5735__auto___65248__$1 = cljs.core.seq(seq__65007_65233);
if(temp__5735__auto___65248__$1){
var seq__65007_65249__$1 = temp__5735__auto___65248__$1;
if(cljs.core.chunked_seq_QMARK_(seq__65007_65249__$1)){
var c__4556__auto___65250 = cljs.core.chunk_first(seq__65007_65249__$1);
var G__65254 = cljs.core.chunk_rest(seq__65007_65249__$1);
var G__65255 = c__4556__auto___65250;
var G__65256 = cljs.core.count(c__4556__auto___65250);
var G__65257 = (0);
seq__65007_65233 = G__65254;
chunk__65010_65234 = G__65255;
count__65011_65235 = G__65256;
i__65012_65236 = G__65257;
continue;
} else {
var node_65258 = cljs.core.first(seq__65007_65249__$1);
var path_match_65259 = shadow.cljs.devtools.client.browser.match_paths(node_65258.getAttribute("href"),path);
if(cljs.core.truth_(path_match_65259)){
var new_link_65260 = (function (){var G__65032 = node_65258.cloneNode(true);
G__65032.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_65259),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__65032;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_65259], 0));

goog.dom.insertSiblingAfter(new_link_65260,node_65258);

goog.dom.removeNode(node_65258);


var G__65261 = cljs.core.next(seq__65007_65249__$1);
var G__65262 = null;
var G__65263 = (0);
var G__65264 = (0);
seq__65007_65233 = G__65261;
chunk__65010_65234 = G__65262;
count__65011_65235 = G__65263;
i__65012_65236 = G__65264;
continue;
} else {
var G__65265 = cljs.core.next(seq__65007_65249__$1);
var G__65266 = null;
var G__65267 = (0);
var G__65268 = (0);
seq__65007_65233 = G__65265;
chunk__65010_65234 = G__65266;
count__65011_65235 = G__65267;
i__65012_65236 = G__65268;
continue;
}
}
} else {
}
}
break;
}


var G__65269 = cljs.core.next(seq__64937__$1);
var G__65270 = null;
var G__65271 = (0);
var G__65272 = (0);
seq__64937 = G__65269;
chunk__64939 = G__65270;
count__64940 = G__65271;
i__64941 = G__65272;
continue;
} else {
var G__65273 = cljs.core.next(seq__64937__$1);
var G__65274 = null;
var G__65275 = (0);
var G__65276 = (0);
seq__64937 = G__65273;
chunk__64939 = G__65274;
count__64940 = G__65275;
i__64941 = G__65276;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__65035){
var map__65036 = p__65035;
var map__65036__$1 = (((((!((map__65036 == null))))?(((((map__65036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65036):map__65036);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65036__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__65042){
var map__65043 = p__65042;
var map__65043__$1 = (((((!((map__65043 == null))))?(((((map__65043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65043):map__65043);
var _ = map__65043__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65043__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__65045,done,error){
var map__65046 = p__65045;
var map__65046__$1 = (((((!((map__65046 == null))))?(((((map__65046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65046):map__65046);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65046__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__65051,done,error){
var map__65052 = p__65051;
var map__65052__$1 = (((((!((map__65052 == null))))?(((((map__65052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65052):map__65052);
var msg = map__65052__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65052__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65052__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65052__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__65058){
var map__65059 = p__65058;
var map__65059__$1 = (((((!((map__65059 == null))))?(((((map__65059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65059):map__65059);
var src = map__65059__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65059__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__65061 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__65061) : done.call(null,G__65061));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__65062){
var map__65063 = p__65062;
var map__65063__$1 = (((((!((map__65063 == null))))?(((((map__65063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65063):map__65063);
var msg__$1 = map__65063__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65063__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e65066){var ex = e65066;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__65071){
var map__65072 = p__65071;
var map__65072__$1 = (((((!((map__65072 == null))))?(((((map__65072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65072):map__65072);
var env = map__65072__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65072__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__65076){
var map__65077 = p__65076;
var map__65077__$1 = (((((!((map__65077 == null))))?(((((map__65077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65077):map__65077);
var msg = map__65077__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65077__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__65088){
var map__65089 = p__65088;
var map__65089__$1 = (((((!((map__65089 == null))))?(((((map__65089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65089):map__65089);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65089__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65089__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__65094){
var map__65095 = p__65094;
var map__65095__$1 = (((((!((map__65095 == null))))?(((((map__65095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65095):map__65095);
var svc = map__65095__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65095__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
