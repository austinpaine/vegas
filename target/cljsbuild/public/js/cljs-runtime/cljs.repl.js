goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__68218){
var map__68219 = p__68218;
var map__68219__$1 = (((((!((map__68219 == null))))?(((((map__68219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68219):map__68219);
var m = map__68219__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68219__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68219__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__68221_68322 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__68222_68323 = null;
var count__68223_68324 = (0);
var i__68224_68325 = (0);
while(true){
if((i__68224_68325 < count__68223_68324)){
var f_68326 = chunk__68222_68323.cljs$core$IIndexed$_nth$arity$2(null,i__68224_68325);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_68326], 0));


var G__68327 = seq__68221_68322;
var G__68328 = chunk__68222_68323;
var G__68329 = count__68223_68324;
var G__68330 = (i__68224_68325 + (1));
seq__68221_68322 = G__68327;
chunk__68222_68323 = G__68328;
count__68223_68324 = G__68329;
i__68224_68325 = G__68330;
continue;
} else {
var temp__5735__auto___68331 = cljs.core.seq(seq__68221_68322);
if(temp__5735__auto___68331){
var seq__68221_68332__$1 = temp__5735__auto___68331;
if(cljs.core.chunked_seq_QMARK_(seq__68221_68332__$1)){
var c__4556__auto___68333 = cljs.core.chunk_first(seq__68221_68332__$1);
var G__68334 = cljs.core.chunk_rest(seq__68221_68332__$1);
var G__68335 = c__4556__auto___68333;
var G__68336 = cljs.core.count(c__4556__auto___68333);
var G__68337 = (0);
seq__68221_68322 = G__68334;
chunk__68222_68323 = G__68335;
count__68223_68324 = G__68336;
i__68224_68325 = G__68337;
continue;
} else {
var f_68338 = cljs.core.first(seq__68221_68332__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_68338], 0));


var G__68339 = cljs.core.next(seq__68221_68332__$1);
var G__68340 = null;
var G__68341 = (0);
var G__68342 = (0);
seq__68221_68322 = G__68339;
chunk__68222_68323 = G__68340;
count__68223_68324 = G__68341;
i__68224_68325 = G__68342;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_68343 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_68343], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_68343)))?cljs.core.second(arglists_68343):arglists_68343)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__68225_68344 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__68226_68345 = null;
var count__68227_68346 = (0);
var i__68228_68347 = (0);
while(true){
if((i__68228_68347 < count__68227_68346)){
var vec__68239_68348 = chunk__68226_68345.cljs$core$IIndexed$_nth$arity$2(null,i__68228_68347);
var name_68349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68239_68348,(0),null);
var map__68242_68350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68239_68348,(1),null);
var map__68242_68351__$1 = (((((!((map__68242_68350 == null))))?(((((map__68242_68350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68242_68350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68242_68350):map__68242_68350);
var doc_68352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68242_68351__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_68353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68242_68351__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_68349], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_68353], 0));

if(cljs.core.truth_(doc_68352)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_68352], 0));
} else {
}


var G__68354 = seq__68225_68344;
var G__68355 = chunk__68226_68345;
var G__68356 = count__68227_68346;
var G__68357 = (i__68228_68347 + (1));
seq__68225_68344 = G__68354;
chunk__68226_68345 = G__68355;
count__68227_68346 = G__68356;
i__68228_68347 = G__68357;
continue;
} else {
var temp__5735__auto___68358 = cljs.core.seq(seq__68225_68344);
if(temp__5735__auto___68358){
var seq__68225_68359__$1 = temp__5735__auto___68358;
if(cljs.core.chunked_seq_QMARK_(seq__68225_68359__$1)){
var c__4556__auto___68360 = cljs.core.chunk_first(seq__68225_68359__$1);
var G__68361 = cljs.core.chunk_rest(seq__68225_68359__$1);
var G__68362 = c__4556__auto___68360;
var G__68363 = cljs.core.count(c__4556__auto___68360);
var G__68364 = (0);
seq__68225_68344 = G__68361;
chunk__68226_68345 = G__68362;
count__68227_68346 = G__68363;
i__68228_68347 = G__68364;
continue;
} else {
var vec__68244_68365 = cljs.core.first(seq__68225_68359__$1);
var name_68366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68244_68365,(0),null);
var map__68247_68367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68244_68365,(1),null);
var map__68247_68368__$1 = (((((!((map__68247_68367 == null))))?(((((map__68247_68367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68247_68367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68247_68367):map__68247_68367);
var doc_68369 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247_68368__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_68370 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247_68368__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_68366], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_68370], 0));

if(cljs.core.truth_(doc_68369)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_68369], 0));
} else {
}


var G__68371 = cljs.core.next(seq__68225_68359__$1);
var G__68372 = null;
var G__68373 = (0);
var G__68374 = (0);
seq__68225_68344 = G__68371;
chunk__68226_68345 = G__68372;
count__68227_68346 = G__68373;
i__68228_68347 = G__68374;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__68249 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__68250 = null;
var count__68251 = (0);
var i__68252 = (0);
while(true){
if((i__68252 < count__68251)){
var role = chunk__68250.cljs$core$IIndexed$_nth$arity$2(null,i__68252);
var temp__5735__auto___68375__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___68375__$1)){
var spec_68376 = temp__5735__auto___68375__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_68376)], 0));
} else {
}


var G__68377 = seq__68249;
var G__68378 = chunk__68250;
var G__68379 = count__68251;
var G__68380 = (i__68252 + (1));
seq__68249 = G__68377;
chunk__68250 = G__68378;
count__68251 = G__68379;
i__68252 = G__68380;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__68249);
if(temp__5735__auto____$1){
var seq__68249__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__68249__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__68249__$1);
var G__68381 = cljs.core.chunk_rest(seq__68249__$1);
var G__68382 = c__4556__auto__;
var G__68383 = cljs.core.count(c__4556__auto__);
var G__68384 = (0);
seq__68249 = G__68381;
chunk__68250 = G__68382;
count__68251 = G__68383;
i__68252 = G__68384;
continue;
} else {
var role = cljs.core.first(seq__68249__$1);
var temp__5735__auto___68385__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___68385__$2)){
var spec_68386 = temp__5735__auto___68385__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_68386)], 0));
} else {
}


var G__68387 = cljs.core.next(seq__68249__$1);
var G__68388 = null;
var G__68389 = (0);
var G__68390 = (0);
seq__68249 = G__68387;
chunk__68250 = G__68388;
count__68251 = G__68389;
i__68252 = G__68390;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__68391 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__68392 = cljs.core.ex_cause(t);
via = G__68391;
t = G__68392;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__68255 = datafied_throwable;
var map__68255__$1 = (((((!((map__68255 == null))))?(((((map__68255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68255):map__68255);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68255__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68255__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68255__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__68256 = cljs.core.last(via);
var map__68256__$1 = (((((!((map__68256 == null))))?(((((map__68256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68256):map__68256);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68256__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68256__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68256__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__68257 = data;
var map__68257__$1 = (((((!((map__68257 == null))))?(((((map__68257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68257):map__68257);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68257__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68257__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68257__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__68258 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__68258__$1 = (((((!((map__68258 == null))))?(((((map__68258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68258):map__68258);
var top_data = map__68258__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68258__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__68263 = phase;
var G__68263__$1 = (((G__68263 instanceof cljs.core.Keyword))?G__68263.fqn:null);
switch (G__68263__$1) {
case "read-source":
var map__68264 = data;
var map__68264__$1 = (((((!((map__68264 == null))))?(((((map__68264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68264):map__68264);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68264__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68264__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__68266 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__68266__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68266,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__68266);
var G__68266__$2 = (cljs.core.truth_((function (){var fexpr__68267 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__68267.cljs$core$IFn$_invoke$arity$1 ? fexpr__68267.cljs$core$IFn$_invoke$arity$1(source) : fexpr__68267.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__68266__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__68266__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68266__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__68266__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__68268 = top_data;
var G__68268__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68268,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__68268);
var G__68268__$2 = (cljs.core.truth_((function (){var fexpr__68269 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__68269.cljs$core$IFn$_invoke$arity$1 ? fexpr__68269.cljs$core$IFn$_invoke$arity$1(source) : fexpr__68269.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__68268__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__68268__$1);
var G__68268__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68268__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__68268__$2);
var G__68268__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68268__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__68268__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68268__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__68268__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__68270 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68270,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68270,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68270,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68270,(3),null);
var G__68273 = top_data;
var G__68273__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68273,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__68273);
var G__68273__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68273__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__68273__$1);
var G__68273__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68273__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__68273__$2);
var G__68273__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68273__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__68273__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68273__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__68273__$4;
}

break;
case "execution":
var vec__68274 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68274,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68274,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68274,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68274,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__68254_SHARP_){
var or__4126__auto__ = (p1__68254_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__68278 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__68278.cljs$core$IFn$_invoke$arity$1 ? fexpr__68278.cljs$core$IFn$_invoke$arity$1(p1__68254_SHARP_) : fexpr__68278.call(null,p1__68254_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__68279 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__68279__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68279,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__68279);
var G__68279__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68279__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__68279__$1);
var G__68279__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68279__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__68279__$2);
var G__68279__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68279__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__68279__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68279__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__68279__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68263__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__68282){
var map__68283 = p__68282;
var map__68283__$1 = (((((!((map__68283 == null))))?(((((map__68283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68283):map__68283);
var triage_data = map__68283__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68283__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68283__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68283__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68283__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68283__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68283__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68283__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68283__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__68285 = phase;
var G__68285__$1 = (((G__68285 instanceof cljs.core.Keyword))?G__68285.fqn:null);
switch (G__68285__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__68286 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__68287 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__68288 = loc;
var G__68289 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__68290_68395 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__68291_68396 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__68292_68397 = true;
var _STAR_print_fn_STAR__temp_val__68293_68398 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68292_68397);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68293_68398);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68280_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__68280_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68291_68396);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68290_68395);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__68286,G__68287,G__68288,G__68289) : format.call(null,G__68286,G__68287,G__68288,G__68289));

break;
case "macroexpansion":
var G__68294 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__68295 = cause_type;
var G__68296 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__68297 = loc;
var G__68298 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__68294,G__68295,G__68296,G__68297,G__68298) : format.call(null,G__68294,G__68295,G__68296,G__68297,G__68298));

break;
case "compile-syntax-check":
var G__68299 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__68300 = cause_type;
var G__68301 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__68302 = loc;
var G__68303 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__68299,G__68300,G__68301,G__68302,G__68303) : format.call(null,G__68299,G__68300,G__68301,G__68302,G__68303));

break;
case "compilation":
var G__68304 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__68305 = cause_type;
var G__68306 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__68307 = loc;
var G__68308 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__68304,G__68305,G__68306,G__68307,G__68308) : format.call(null,G__68304,G__68305,G__68306,G__68307,G__68308));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__68309 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__68310 = symbol;
var G__68311 = loc;
var G__68312 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__68313_68399 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__68314_68400 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__68315_68401 = true;
var _STAR_print_fn_STAR__temp_val__68316_68402 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68315_68401);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68316_68402);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68281_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__68281_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68314_68400);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68313_68399);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__68309,G__68310,G__68311,G__68312) : format.call(null,G__68309,G__68310,G__68311,G__68312));
} else {
var G__68317 = "Execution error%s at %s(%s).\n%s\n";
var G__68318 = cause_type;
var G__68319 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__68320 = loc;
var G__68321 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__68317,G__68318,G__68319,G__68320,G__68321) : format.call(null,G__68317,G__68318,G__68319,G__68320,G__68321));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68285__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
