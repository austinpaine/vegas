goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__66157,match){
var map__66158 = p__66157;
var map__66158__$1 = (((((!((map__66158 == null))))?(((((map__66158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66158):map__66158);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66158__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66158__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66158__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__66160(s__66161){
return (new cljs.core.LazySeq(null,(function (){
var s__66161__$1 = s__66161;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66161__$1);
if(temp__5735__auto__){
var s__66161__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66161__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66161__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66163 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66162 = (0);
while(true){
if((i__66162 < size__4528__auto__)){
var vec__66164 = cljs.core._nth(c__4527__auto__,i__66162);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66164,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66164,(1),null);
cljs.core.chunk_append(b__66163,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__66192 = (i__66162 + (1));
i__66162 = G__66192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66163),reitit$frontend$controllers$get_identity_$_iter__66160(cljs.core.chunk_rest(s__66161__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66163),null);
}
} else {
var vec__66167 = cljs.core.first(s__66161__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66167,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66167,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__66160(cljs.core.rest(s__66161__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__66170 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66170) : f.call(null,G__66170));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__66174_66196 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__66175_66197 = null;
var count__66176_66198 = (0);
var i__66177_66199 = (0);
while(true){
if((i__66177_66199 < count__66176_66198)){
var controller_66200 = chunk__66175_66197.cljs$core$IIndexed$_nth$arity$2(null,i__66177_66199);
reitit.frontend.controllers.apply_controller(controller_66200,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__66201 = seq__66174_66196;
var G__66202 = chunk__66175_66197;
var G__66203 = count__66176_66198;
var G__66204 = (i__66177_66199 + (1));
seq__66174_66196 = G__66201;
chunk__66175_66197 = G__66202;
count__66176_66198 = G__66203;
i__66177_66199 = G__66204;
continue;
} else {
var temp__5735__auto___66205 = cljs.core.seq(seq__66174_66196);
if(temp__5735__auto___66205){
var seq__66174_66206__$1 = temp__5735__auto___66205;
if(cljs.core.chunked_seq_QMARK_(seq__66174_66206__$1)){
var c__4556__auto___66207 = cljs.core.chunk_first(seq__66174_66206__$1);
var G__66208 = cljs.core.chunk_rest(seq__66174_66206__$1);
var G__66209 = c__4556__auto___66207;
var G__66210 = cljs.core.count(c__4556__auto___66207);
var G__66211 = (0);
seq__66174_66196 = G__66208;
chunk__66175_66197 = G__66209;
count__66176_66198 = G__66210;
i__66177_66199 = G__66211;
continue;
} else {
var controller_66212 = cljs.core.first(seq__66174_66206__$1);
reitit.frontend.controllers.apply_controller(controller_66212,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__66213 = cljs.core.next(seq__66174_66206__$1);
var G__66214 = null;
var G__66215 = (0);
var G__66216 = (0);
seq__66174_66196 = G__66213;
chunk__66175_66197 = G__66214;
count__66176_66198 = G__66215;
i__66177_66199 = G__66216;
continue;
}
} else {
}
}
break;
}

var seq__66178_66217 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__66179_66218 = null;
var count__66180_66219 = (0);
var i__66181_66220 = (0);
while(true){
if((i__66181_66220 < count__66180_66219)){
var controller_66221 = chunk__66179_66218.cljs$core$IIndexed$_nth$arity$2(null,i__66181_66220);
reitit.frontend.controllers.apply_controller(controller_66221,new cljs.core.Keyword(null,"start","start",-355208981));


var G__66222 = seq__66178_66217;
var G__66223 = chunk__66179_66218;
var G__66224 = count__66180_66219;
var G__66225 = (i__66181_66220 + (1));
seq__66178_66217 = G__66222;
chunk__66179_66218 = G__66223;
count__66180_66219 = G__66224;
i__66181_66220 = G__66225;
continue;
} else {
var temp__5735__auto___66226 = cljs.core.seq(seq__66178_66217);
if(temp__5735__auto___66226){
var seq__66178_66227__$1 = temp__5735__auto___66226;
if(cljs.core.chunked_seq_QMARK_(seq__66178_66227__$1)){
var c__4556__auto___66228 = cljs.core.chunk_first(seq__66178_66227__$1);
var G__66229 = cljs.core.chunk_rest(seq__66178_66227__$1);
var G__66230 = c__4556__auto___66228;
var G__66231 = cljs.core.count(c__4556__auto___66228);
var G__66232 = (0);
seq__66178_66217 = G__66229;
chunk__66179_66218 = G__66230;
count__66180_66219 = G__66231;
i__66181_66220 = G__66232;
continue;
} else {
var controller_66233 = cljs.core.first(seq__66178_66227__$1);
reitit.frontend.controllers.apply_controller(controller_66233,new cljs.core.Keyword(null,"start","start",-355208981));


var G__66237 = cljs.core.next(seq__66178_66227__$1);
var G__66238 = null;
var G__66239 = (0);
var G__66240 = (0);
seq__66178_66217 = G__66237;
chunk__66179_66218 = G__66238;
count__66180_66219 = G__66239;
i__66181_66220 = G__66240;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
