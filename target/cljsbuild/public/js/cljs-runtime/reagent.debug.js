goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__54543__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__54543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54544__i = 0, G__54544__a = new Array(arguments.length -  0);
while (G__54544__i < G__54544__a.length) {G__54544__a[G__54544__i] = arguments[G__54544__i + 0]; ++G__54544__i;}
  args = new cljs.core.IndexedSeq(G__54544__a,0,null);
} 
return G__54543__delegate.call(this,args);};
G__54543.cljs$lang$maxFixedArity = 0;
G__54543.cljs$lang$applyTo = (function (arglist__54545){
var args = cljs.core.seq(arglist__54545);
return G__54543__delegate(args);
});
G__54543.cljs$core$IFn$_invoke$arity$variadic = G__54543__delegate;
return G__54543;
})()
);

(o.error = (function() { 
var G__54546__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__54546 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54547__i = 0, G__54547__a = new Array(arguments.length -  0);
while (G__54547__i < G__54547__a.length) {G__54547__a[G__54547__i] = arguments[G__54547__i + 0]; ++G__54547__i;}
  args = new cljs.core.IndexedSeq(G__54547__a,0,null);
} 
return G__54546__delegate.call(this,args);};
G__54546.cljs$lang$maxFixedArity = 0;
G__54546.cljs$lang$applyTo = (function (arglist__54548){
var args = cljs.core.seq(arglist__54548);
return G__54546__delegate(args);
});
G__54546.cljs$core$IFn$_invoke$arity$variadic = G__54546__delegate;
return G__54546;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
