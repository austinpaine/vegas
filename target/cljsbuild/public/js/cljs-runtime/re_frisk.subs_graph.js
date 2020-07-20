goog.provide('re_frisk.subs_graph');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_(re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_(re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5735__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5735__auto__)){
var network_js = temp__5735__auto__;
network_js.destroy();

return cljs.core.reset_BANG_(re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy();

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4115__auto__;
}
})())){
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5735__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5735__auto__)){
var container = temp__5735__auto__;
return cljs.core.reset_BANG_(re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5735__auto___56452 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first(traces));
if(cljs.core.truth_(temp__5735__auto___56452)){
var app_db_reaction_56453 = temp__5735__auto___56452;
re_frisk.subs_graph.set_root_node(app_db_reaction_56453);
} else {
}

var new_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var seq__56120_56454 = cljs.core.seq(traces);
var chunk__56121_56455 = null;
var count__56122_56456 = (0);
var i__56123_56457 = (0);
while(true){
if((i__56123_56457 < count__56122_56456)){
var map__56277_56458 = chunk__56121_56455.cljs$core$IIndexed$_nth$arity$2(null,i__56123_56457);
var map__56277_56459__$1 = (((((!((map__56277_56458 == null))))?(((((map__56277_56458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56277_56458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56277_56458):map__56277_56458);
var subs_56460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56277_56459__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__56279_56461 = cljs.core.seq(subs_56460);
var chunk__56280_56462 = null;
var count__56281_56463 = (0);
var i__56282_56464 = (0);
while(true){
if((i__56282_56464 < count__56281_56463)){
var map__56319_56465 = chunk__56280_56462.cljs$core$IIndexed$_nth$arity$2(null,i__56282_56464);
var map__56319_56466__$1 = (((((!((map__56319_56465 == null))))?(((((map__56319_56465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56319_56465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56319_56465):map__56319_56465);
var op_type_56467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56319_56466__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_56468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56319_56466__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_56469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56319_56466__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_56470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56319_56466__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___56473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_56468);
if(cljs.core.truth_(temp__5733__auto___56473)){
var old_reaction_56474 = temp__5733__auto___56473;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_56467,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_56474))){
var updated_node_56475 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_56474,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_56467,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_56467)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_56468,updated_node_56475);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_56475], null)));
} else {
}
} else {
}
} else {
var data_56476 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_56468,new cljs.core.Keyword(null,"label","label",1718410804),operation_56470,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_56467)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_56467], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_56468,data_56476);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_56476);
}

if(cljs.core.truth_(input_signals_56469)){
var seq__56321_56479 = cljs.core.seq(input_signals_56469);
var chunk__56322_56480 = null;
var count__56323_56481 = (0);
var i__56324_56482 = (0);
while(true){
if((i__56324_56482 < count__56323_56481)){
var input_reaction_56483 = chunk__56322_56480.cljs$core$IIndexed$_nth$arity$2(null,i__56324_56482);
var reaction_path_56484 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56483),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56468)].join('');
var temp__5733__auto___56485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_56484);
if(cljs.core.truth_(temp__5733__auto___56485)){
var old_edge_56486 = temp__5733__auto___56485;
var updated_edge_56487 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_56486,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56484,updated_edge_56487);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_56487], null)));
} else {
}
} else {
var data_56488 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_56484,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_56483,new cljs.core.Keyword(null,"to","to",192099007),reaction_56468,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56484,data_56488);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_56488));
} else {
}
}


var G__56489 = seq__56321_56479;
var G__56490 = chunk__56322_56480;
var G__56491 = count__56323_56481;
var G__56492 = (i__56324_56482 + (1));
seq__56321_56479 = G__56489;
chunk__56322_56480 = G__56490;
count__56323_56481 = G__56491;
i__56324_56482 = G__56492;
continue;
} else {
var temp__5735__auto___56493 = cljs.core.seq(seq__56321_56479);
if(temp__5735__auto___56493){
var seq__56321_56495__$1 = temp__5735__auto___56493;
if(cljs.core.chunked_seq_QMARK_(seq__56321_56495__$1)){
var c__4556__auto___56496 = cljs.core.chunk_first(seq__56321_56495__$1);
var G__56497 = cljs.core.chunk_rest(seq__56321_56495__$1);
var G__56498 = c__4556__auto___56496;
var G__56499 = cljs.core.count(c__4556__auto___56496);
var G__56500 = (0);
seq__56321_56479 = G__56497;
chunk__56322_56480 = G__56498;
count__56323_56481 = G__56499;
i__56324_56482 = G__56500;
continue;
} else {
var input_reaction_56502 = cljs.core.first(seq__56321_56495__$1);
var reaction_path_56503 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56502),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56468)].join('');
var temp__5733__auto___56504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_56503);
if(cljs.core.truth_(temp__5733__auto___56504)){
var old_edge_56505 = temp__5733__auto___56504;
var updated_edge_56506 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_56505,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56503,updated_edge_56506);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_56506], null)));
} else {
}
} else {
var data_56507 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_56503,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_56502,new cljs.core.Keyword(null,"to","to",192099007),reaction_56468,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56503,data_56507);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_56507));
} else {
}
}


var G__56508 = cljs.core.next(seq__56321_56495__$1);
var G__56509 = null;
var G__56510 = (0);
var G__56511 = (0);
seq__56321_56479 = G__56508;
chunk__56322_56480 = G__56509;
count__56323_56481 = G__56510;
i__56324_56482 = G__56511;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__56512 = seq__56279_56461;
var G__56513 = chunk__56280_56462;
var G__56514 = count__56281_56463;
var G__56515 = (i__56282_56464 + (1));
seq__56279_56461 = G__56512;
chunk__56280_56462 = G__56513;
count__56281_56463 = G__56514;
i__56282_56464 = G__56515;
continue;
} else {
var temp__5735__auto___56516 = cljs.core.seq(seq__56279_56461);
if(temp__5735__auto___56516){
var seq__56279_56517__$1 = temp__5735__auto___56516;
if(cljs.core.chunked_seq_QMARK_(seq__56279_56517__$1)){
var c__4556__auto___56518 = cljs.core.chunk_first(seq__56279_56517__$1);
var G__56520 = cljs.core.chunk_rest(seq__56279_56517__$1);
var G__56521 = c__4556__auto___56518;
var G__56522 = cljs.core.count(c__4556__auto___56518);
var G__56523 = (0);
seq__56279_56461 = G__56520;
chunk__56280_56462 = G__56521;
count__56281_56463 = G__56522;
i__56282_56464 = G__56523;
continue;
} else {
var map__56328_56527 = cljs.core.first(seq__56279_56517__$1);
var map__56328_56528__$1 = (((((!((map__56328_56527 == null))))?(((((map__56328_56527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56328_56527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56328_56527):map__56328_56527);
var op_type_56529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56328_56528__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_56530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56328_56528__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_56531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56328_56528__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_56532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56328_56528__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___56534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_56530);
if(cljs.core.truth_(temp__5733__auto___56534)){
var old_reaction_56535 = temp__5733__auto___56534;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_56529,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_56535))){
var updated_node_56536 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_56535,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_56529,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_56529)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_56530,updated_node_56536);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_56536], null)));
} else {
}
} else {
}
} else {
var data_56537 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_56530,new cljs.core.Keyword(null,"label","label",1718410804),operation_56532,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_56529)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_56529], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_56530,data_56537);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_56537);
}

if(cljs.core.truth_(input_signals_56531)){
var seq__56330_56538 = cljs.core.seq(input_signals_56531);
var chunk__56331_56539 = null;
var count__56332_56540 = (0);
var i__56333_56541 = (0);
while(true){
if((i__56333_56541 < count__56332_56540)){
var input_reaction_56542 = chunk__56331_56539.cljs$core$IIndexed$_nth$arity$2(null,i__56333_56541);
var reaction_path_56543 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56542),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56530)].join('');
var temp__5733__auto___56544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_56543);
if(cljs.core.truth_(temp__5733__auto___56544)){
var old_edge_56545 = temp__5733__auto___56544;
var updated_edge_56546 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_56545,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56543,updated_edge_56546);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_56546], null)));
} else {
}
} else {
var data_56547 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_56543,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_56542,new cljs.core.Keyword(null,"to","to",192099007),reaction_56530,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56543,data_56547);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_56547));
} else {
}
}


var G__56552 = seq__56330_56538;
var G__56553 = chunk__56331_56539;
var G__56554 = count__56332_56540;
var G__56555 = (i__56333_56541 + (1));
seq__56330_56538 = G__56552;
chunk__56331_56539 = G__56553;
count__56332_56540 = G__56554;
i__56333_56541 = G__56555;
continue;
} else {
var temp__5735__auto___56556__$1 = cljs.core.seq(seq__56330_56538);
if(temp__5735__auto___56556__$1){
var seq__56330_56557__$1 = temp__5735__auto___56556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56330_56557__$1)){
var c__4556__auto___56559 = cljs.core.chunk_first(seq__56330_56557__$1);
var G__56560 = cljs.core.chunk_rest(seq__56330_56557__$1);
var G__56561 = c__4556__auto___56559;
var G__56562 = cljs.core.count(c__4556__auto___56559);
var G__56563 = (0);
seq__56330_56538 = G__56560;
chunk__56331_56539 = G__56561;
count__56332_56540 = G__56562;
i__56333_56541 = G__56563;
continue;
} else {
var input_reaction_56564 = cljs.core.first(seq__56330_56557__$1);
var reaction_path_56565 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56564),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56530)].join('');
var temp__5733__auto___56566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_56565);
if(cljs.core.truth_(temp__5733__auto___56566)){
var old_edge_56567 = temp__5733__auto___56566;
var updated_edge_56568 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_56567,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56565,updated_edge_56568);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_56568], null)));
} else {
}
} else {
var data_56569 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_56565,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_56564,new cljs.core.Keyword(null,"to","to",192099007),reaction_56530,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56565,data_56569);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_56569));
} else {
}
}


var G__56570 = cljs.core.next(seq__56330_56557__$1);
var G__56571 = null;
var G__56572 = (0);
var G__56573 = (0);
seq__56330_56538 = G__56570;
chunk__56331_56539 = G__56571;
count__56332_56540 = G__56572;
i__56333_56541 = G__56573;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__56574 = cljs.core.next(seq__56279_56517__$1);
var G__56575 = null;
var G__56576 = (0);
var G__56577 = (0);
seq__56279_56461 = G__56574;
chunk__56280_56462 = G__56575;
count__56281_56463 = G__56576;
i__56282_56464 = G__56577;
continue;
}
} else {
}
}
break;
}


var G__56578 = seq__56120_56454;
var G__56579 = chunk__56121_56455;
var G__56580 = count__56122_56456;
var G__56581 = (i__56123_56457 + (1));
seq__56120_56454 = G__56578;
chunk__56121_56455 = G__56579;
count__56122_56456 = G__56580;
i__56123_56457 = G__56581;
continue;
} else {
var temp__5735__auto___56582 = cljs.core.seq(seq__56120_56454);
if(temp__5735__auto___56582){
var seq__56120_56583__$1 = temp__5735__auto___56582;
if(cljs.core.chunked_seq_QMARK_(seq__56120_56583__$1)){
var c__4556__auto___56584 = cljs.core.chunk_first(seq__56120_56583__$1);
var G__56585 = cljs.core.chunk_rest(seq__56120_56583__$1);
var G__56586 = c__4556__auto___56584;
var G__56587 = cljs.core.count(c__4556__auto___56584);
var G__56588 = (0);
seq__56120_56454 = G__56585;
chunk__56121_56455 = G__56586;
count__56122_56456 = G__56587;
i__56123_56457 = G__56588;
continue;
} else {
var map__56335_56589 = cljs.core.first(seq__56120_56583__$1);
var map__56335_56590__$1 = (((((!((map__56335_56589 == null))))?(((((map__56335_56589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56335_56589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56335_56589):map__56335_56589);
var subs_56591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56335_56590__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__56337_56592 = cljs.core.seq(subs_56591);
var chunk__56338_56593 = null;
var count__56339_56594 = (0);
var i__56340_56595 = (0);
while(true){
if((i__56340_56595 < count__56339_56594)){
var map__56380_56596 = chunk__56338_56593.cljs$core$IIndexed$_nth$arity$2(null,i__56340_56595);
var map__56380_56597__$1 = (((((!((map__56380_56596 == null))))?(((((map__56380_56596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56380_56596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56380_56596):map__56380_56596);
var op_type_56598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56380_56597__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_56599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56380_56597__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_56600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56380_56597__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_56601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56380_56597__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___56602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_56599);
if(cljs.core.truth_(temp__5733__auto___56602)){
var old_reaction_56603 = temp__5733__auto___56602;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_56598,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_56603))){
var updated_node_56604 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_56603,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_56598,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_56598)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_56599,updated_node_56604);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_56604], null)));
} else {
}
} else {
}
} else {
var data_56605 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_56599,new cljs.core.Keyword(null,"label","label",1718410804),operation_56601,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_56598)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_56598], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_56599,data_56605);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_56605);
}

if(cljs.core.truth_(input_signals_56600)){
var seq__56382_56608 = cljs.core.seq(input_signals_56600);
var chunk__56383_56609 = null;
var count__56384_56610 = (0);
var i__56385_56611 = (0);
while(true){
if((i__56385_56611 < count__56384_56610)){
var input_reaction_56612 = chunk__56383_56609.cljs$core$IIndexed$_nth$arity$2(null,i__56385_56611);
var reaction_path_56613 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56612),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56599)].join('');
var temp__5733__auto___56614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_56613);
if(cljs.core.truth_(temp__5733__auto___56614)){
var old_edge_56615 = temp__5733__auto___56614;
var updated_edge_56616 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_56615,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56613,updated_edge_56616);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_56616], null)));
} else {
}
} else {
var data_56617 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_56613,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_56612,new cljs.core.Keyword(null,"to","to",192099007),reaction_56599,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56613,data_56617);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_56617));
} else {
}
}


var G__56619 = seq__56382_56608;
var G__56620 = chunk__56383_56609;
var G__56621 = count__56384_56610;
var G__56622 = (i__56385_56611 + (1));
seq__56382_56608 = G__56619;
chunk__56383_56609 = G__56620;
count__56384_56610 = G__56621;
i__56385_56611 = G__56622;
continue;
} else {
var temp__5735__auto___56624__$1 = cljs.core.seq(seq__56382_56608);
if(temp__5735__auto___56624__$1){
var seq__56382_56625__$1 = temp__5735__auto___56624__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56382_56625__$1)){
var c__4556__auto___56626 = cljs.core.chunk_first(seq__56382_56625__$1);
var G__56627 = cljs.core.chunk_rest(seq__56382_56625__$1);
var G__56628 = c__4556__auto___56626;
var G__56629 = cljs.core.count(c__4556__auto___56626);
var G__56630 = (0);
seq__56382_56608 = G__56627;
chunk__56383_56609 = G__56628;
count__56384_56610 = G__56629;
i__56385_56611 = G__56630;
continue;
} else {
var input_reaction_56631 = cljs.core.first(seq__56382_56625__$1);
var reaction_path_56632 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56631),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56599)].join('');
var temp__5733__auto___56633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_56632);
if(cljs.core.truth_(temp__5733__auto___56633)){
var old_edge_56634 = temp__5733__auto___56633;
var updated_edge_56635 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_56634,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56632,updated_edge_56635);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_56635], null)));
} else {
}
} else {
var data_56636 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_56632,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_56631,new cljs.core.Keyword(null,"to","to",192099007),reaction_56599,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56632,data_56636);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_56636));
} else {
}
}


var G__56637 = cljs.core.next(seq__56382_56625__$1);
var G__56638 = null;
var G__56639 = (0);
var G__56640 = (0);
seq__56382_56608 = G__56637;
chunk__56383_56609 = G__56638;
count__56384_56610 = G__56639;
i__56385_56611 = G__56640;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__56641 = seq__56337_56592;
var G__56642 = chunk__56338_56593;
var G__56643 = count__56339_56594;
var G__56644 = (i__56340_56595 + (1));
seq__56337_56592 = G__56641;
chunk__56338_56593 = G__56642;
count__56339_56594 = G__56643;
i__56340_56595 = G__56644;
continue;
} else {
var temp__5735__auto___56645__$1 = cljs.core.seq(seq__56337_56592);
if(temp__5735__auto___56645__$1){
var seq__56337_56646__$1 = temp__5735__auto___56645__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56337_56646__$1)){
var c__4556__auto___56647 = cljs.core.chunk_first(seq__56337_56646__$1);
var G__56648 = cljs.core.chunk_rest(seq__56337_56646__$1);
var G__56649 = c__4556__auto___56647;
var G__56650 = cljs.core.count(c__4556__auto___56647);
var G__56651 = (0);
seq__56337_56592 = G__56648;
chunk__56338_56593 = G__56649;
count__56339_56594 = G__56650;
i__56340_56595 = G__56651;
continue;
} else {
var map__56386_56654 = cljs.core.first(seq__56337_56646__$1);
var map__56386_56655__$1 = (((((!((map__56386_56654 == null))))?(((((map__56386_56654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56386_56654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56386_56654):map__56386_56654);
var op_type_56656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56386_56655__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_56657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56386_56655__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_56658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56386_56655__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_56659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56386_56655__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___56660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction_56657);
if(cljs.core.truth_(temp__5733__auto___56660)){
var old_reaction_56661 = temp__5733__auto___56660;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_56656,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_56661))){
var updated_node_56662 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_56661,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_56656,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_56656)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_56657,updated_node_56662);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_56662], null)));
} else {
}
} else {
}
} else {
var data_56663 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_56657,new cljs.core.Keyword(null,"label","label",1718410804),operation_56659,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_56656)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_56656], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction_56657,data_56663);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(new_nodes,cljs.core.conj,data_56663);
}

if(cljs.core.truth_(input_signals_56658)){
var seq__56388_56664 = cljs.core.seq(input_signals_56658);
var chunk__56389_56665 = null;
var count__56390_56666 = (0);
var i__56391_56667 = (0);
while(true){
if((i__56391_56667 < count__56390_56666)){
var input_reaction_56668 = chunk__56389_56665.cljs$core$IIndexed$_nth$arity$2(null,i__56391_56667);
var reaction_path_56669 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56668),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56657)].join('');
var temp__5733__auto___56670 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_56669);
if(cljs.core.truth_(temp__5733__auto___56670)){
var old_edge_56671 = temp__5733__auto___56670;
var updated_edge_56672 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_56671,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56669,updated_edge_56672);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_56672], null)));
} else {
}
} else {
var data_56675 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_56669,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_56668,new cljs.core.Keyword(null,"to","to",192099007),reaction_56657,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56669,data_56675);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_56675));
} else {
}
}


var G__56679 = seq__56388_56664;
var G__56680 = chunk__56389_56665;
var G__56681 = count__56390_56666;
var G__56682 = (i__56391_56667 + (1));
seq__56388_56664 = G__56679;
chunk__56389_56665 = G__56680;
count__56390_56666 = G__56681;
i__56391_56667 = G__56682;
continue;
} else {
var temp__5735__auto___56683__$2 = cljs.core.seq(seq__56388_56664);
if(temp__5735__auto___56683__$2){
var seq__56388_56684__$1 = temp__5735__auto___56683__$2;
if(cljs.core.chunked_seq_QMARK_(seq__56388_56684__$1)){
var c__4556__auto___56685 = cljs.core.chunk_first(seq__56388_56684__$1);
var G__56686 = cljs.core.chunk_rest(seq__56388_56684__$1);
var G__56687 = c__4556__auto___56685;
var G__56688 = cljs.core.count(c__4556__auto___56685);
var G__56689 = (0);
seq__56388_56664 = G__56686;
chunk__56389_56665 = G__56687;
count__56390_56666 = G__56688;
i__56391_56667 = G__56689;
continue;
} else {
var input_reaction_56690 = cljs.core.first(seq__56388_56684__$1);
var reaction_path_56691 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56690),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56657)].join('');
var temp__5733__auto___56692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_56691);
if(cljs.core.truth_(temp__5733__auto___56692)){
var old_edge_56693 = temp__5733__auto___56692;
var updated_edge_56694 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_56693,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56691,updated_edge_56694);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_56694], null)));
} else {
}
} else {
var data_56696 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_56691,new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_56690,new cljs.core.Keyword(null,"to","to",192099007),reaction_56657,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_56691,data_56696);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_56696));
} else {
}
}


var G__56697 = cljs.core.next(seq__56388_56684__$1);
var G__56698 = null;
var G__56699 = (0);
var G__56700 = (0);
seq__56388_56664 = G__56697;
chunk__56389_56665 = G__56698;
count__56390_56666 = G__56699;
i__56391_56667 = G__56700;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__56701 = cljs.core.next(seq__56337_56646__$1);
var G__56702 = null;
var G__56703 = (0);
var G__56704 = (0);
seq__56337_56592 = G__56701;
chunk__56338_56593 = G__56702;
count__56339_56594 = G__56703;
i__56340_56595 = G__56704;
continue;
}
} else {
}
}
break;
}


var G__56706 = cljs.core.next(seq__56120_56583__$1);
var G__56707 = null;
var G__56708 = (0);
var G__56709 = (0);
seq__56120_56454 = G__56706;
chunk__56121_56455 = G__56707;
count__56122_56456 = G__56708;
i__56123_56457 = G__56709;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if((cljs.core.count(cljs.core.deref(new_nodes)) > (20))){
return re_frisk.subs_graph.create();
} else {
var seq__56392 = cljs.core.seq(cljs.core.deref(new_nodes));
var chunk__56393 = null;
var count__56394 = (0);
var i__56395 = (0);
while(true){
if((i__56395 < count__56394)){
var data = chunk__56393.cljs$core$IIndexed$_nth$arity$2(null,i__56395);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__56712 = seq__56392;
var G__56713 = chunk__56393;
var G__56714 = count__56394;
var G__56715 = (i__56395 + (1));
seq__56392 = G__56712;
chunk__56393 = G__56713;
count__56394 = G__56714;
i__56395 = G__56715;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56392);
if(temp__5735__auto__){
var seq__56392__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56392__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56392__$1);
var G__56716 = cljs.core.chunk_rest(seq__56392__$1);
var G__56717 = c__4556__auto__;
var G__56718 = cljs.core.count(c__4556__auto__);
var G__56719 = (0);
seq__56392 = G__56716;
chunk__56393 = G__56717;
count__56394 = G__56718;
i__56395 = G__56719;
continue;
} else {
var data = cljs.core.first(seq__56392__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__56720 = cljs.core.next(seq__56392__$1);
var G__56721 = null;
var G__56722 = (0);
var G__56723 = (0);
seq__56392 = G__56720;
chunk__56393 = G__56721;
count__56394 = G__56722;
i__56395 = G__56723;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__56399){
var map__56400 = p__56399;
var map__56400__$1 = (((((!((map__56400 == null))))?(((((map__56400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56400):map__56400);
var app_db_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56400__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56400__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.event_network))){
cljs.core.deref(re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__4115__auto__;
}
})())){
var temp__5735__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5735__auto__)){
var container = temp__5735__auto__;
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__56405_56727 = cljs.core.seq(subs);
var chunk__56406_56728 = null;
var count__56407_56729 = (0);
var i__56408_56730 = (0);
while(true){
if((i__56408_56730 < count__56407_56729)){
var map__56425_56731 = chunk__56406_56728.cljs$core$IIndexed$_nth$arity$2(null,i__56408_56730);
var map__56425_56732__$1 = (((((!((map__56425_56731 == null))))?(((((map__56425_56731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56425_56731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56425_56731):map__56425_56731);
var op_type_56733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56425_56732__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_56734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56425_56732__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_56735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56425_56732__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_56736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56425_56732__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___56737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_56734);
if(cljs.core.truth_(temp__5733__auto___56737)){
var old_reaction_56738 = temp__5733__auto___56737;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_56733,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_56738))){
var updated_node_56739 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_56738,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_56733,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_56733)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_56734,updated_node_56739);
} else {
}
} else {
var data_56740 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_56734,new cljs.core.Keyword(null,"label","label",1718410804),operation_56736,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_56733)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_56733], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_56734,data_56740);
}

if(cljs.core.truth_(input_signals_56735)){
var seq__56428_56741 = cljs.core.seq(input_signals_56735);
var chunk__56429_56742 = null;
var count__56430_56743 = (0);
var i__56431_56744 = (0);
while(true){
if((i__56431_56744 < count__56430_56743)){
var input_reaction_56745 = chunk__56429_56742.cljs$core$IIndexed$_nth$arity$2(null,i__56431_56744);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56745),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56734)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56745),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56734)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_56745,new cljs.core.Keyword(null,"to","to",192099007),reaction_56734], null));
}


var G__56746 = seq__56428_56741;
var G__56747 = chunk__56429_56742;
var G__56748 = count__56430_56743;
var G__56749 = (i__56431_56744 + (1));
seq__56428_56741 = G__56746;
chunk__56429_56742 = G__56747;
count__56430_56743 = G__56748;
i__56431_56744 = G__56749;
continue;
} else {
var temp__5735__auto___56751__$1 = cljs.core.seq(seq__56428_56741);
if(temp__5735__auto___56751__$1){
var seq__56428_56753__$1 = temp__5735__auto___56751__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56428_56753__$1)){
var c__4556__auto___56755 = cljs.core.chunk_first(seq__56428_56753__$1);
var G__56756 = cljs.core.chunk_rest(seq__56428_56753__$1);
var G__56757 = c__4556__auto___56755;
var G__56758 = cljs.core.count(c__4556__auto___56755);
var G__56759 = (0);
seq__56428_56741 = G__56756;
chunk__56429_56742 = G__56757;
count__56430_56743 = G__56758;
i__56431_56744 = G__56759;
continue;
} else {
var input_reaction_56760 = cljs.core.first(seq__56428_56753__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56760),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56734)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56760),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56734)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_56760,new cljs.core.Keyword(null,"to","to",192099007),reaction_56734], null));
}


var G__56761 = cljs.core.next(seq__56428_56753__$1);
var G__56762 = null;
var G__56763 = (0);
var G__56764 = (0);
seq__56428_56741 = G__56761;
chunk__56429_56742 = G__56762;
count__56430_56743 = G__56763;
i__56431_56744 = G__56764;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__56765 = seq__56405_56727;
var G__56766 = chunk__56406_56728;
var G__56767 = count__56407_56729;
var G__56768 = (i__56408_56730 + (1));
seq__56405_56727 = G__56765;
chunk__56406_56728 = G__56766;
count__56407_56729 = G__56767;
i__56408_56730 = G__56768;
continue;
} else {
var temp__5735__auto___56769__$1 = cljs.core.seq(seq__56405_56727);
if(temp__5735__auto___56769__$1){
var seq__56405_56770__$1 = temp__5735__auto___56769__$1;
if(cljs.core.chunked_seq_QMARK_(seq__56405_56770__$1)){
var c__4556__auto___56771 = cljs.core.chunk_first(seq__56405_56770__$1);
var G__56772 = cljs.core.chunk_rest(seq__56405_56770__$1);
var G__56773 = c__4556__auto___56771;
var G__56774 = cljs.core.count(c__4556__auto___56771);
var G__56775 = (0);
seq__56405_56727 = G__56772;
chunk__56406_56728 = G__56773;
count__56407_56729 = G__56774;
i__56408_56730 = G__56775;
continue;
} else {
var map__56434_56776 = cljs.core.first(seq__56405_56770__$1);
var map__56434_56777__$1 = (((((!((map__56434_56776 == null))))?(((((map__56434_56776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56434_56776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56434_56776):map__56434_56776);
var op_type_56778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56434_56777__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_56779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56434_56777__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_56780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56434_56777__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_56781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56434_56777__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5733__auto___56784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_56779);
if(cljs.core.truth_(temp__5733__auto___56784)){
var old_reaction_56785 = temp__5733__auto___56784;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_56778,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_56785))){
var updated_node_56786 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_56785,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_56778,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_56778)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_56779,updated_node_56786);
} else {
}
} else {
var data_56787 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_56779,new cljs.core.Keyword(null,"label","label",1718410804),operation_56781,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_56778)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_56778], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_56779,data_56787);
}

if(cljs.core.truth_(input_signals_56780)){
var seq__56438_56788 = cljs.core.seq(input_signals_56780);
var chunk__56439_56789 = null;
var count__56440_56790 = (0);
var i__56441_56791 = (0);
while(true){
if((i__56441_56791 < count__56440_56790)){
var input_reaction_56792 = chunk__56439_56789.cljs$core$IIndexed$_nth$arity$2(null,i__56441_56791);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56792),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56779)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56792),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56779)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_56792,new cljs.core.Keyword(null,"to","to",192099007),reaction_56779], null));
}


var G__56793 = seq__56438_56788;
var G__56794 = chunk__56439_56789;
var G__56795 = count__56440_56790;
var G__56796 = (i__56441_56791 + (1));
seq__56438_56788 = G__56793;
chunk__56439_56789 = G__56794;
count__56440_56790 = G__56795;
i__56441_56791 = G__56796;
continue;
} else {
var temp__5735__auto___56797__$2 = cljs.core.seq(seq__56438_56788);
if(temp__5735__auto___56797__$2){
var seq__56438_56798__$1 = temp__5735__auto___56797__$2;
if(cljs.core.chunked_seq_QMARK_(seq__56438_56798__$1)){
var c__4556__auto___56799 = cljs.core.chunk_first(seq__56438_56798__$1);
var G__56800 = cljs.core.chunk_rest(seq__56438_56798__$1);
var G__56801 = c__4556__auto___56799;
var G__56802 = cljs.core.count(c__4556__auto___56799);
var G__56803 = (0);
seq__56438_56788 = G__56800;
chunk__56439_56789 = G__56801;
count__56440_56790 = G__56802;
i__56441_56791 = G__56803;
continue;
} else {
var input_reaction_56804 = cljs.core.first(seq__56438_56798__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56804),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56779)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_56804),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_56779)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_56804,new cljs.core.Keyword(null,"to","to",192099007),reaction_56779], null));
}


var G__56805 = cljs.core.next(seq__56438_56798__$1);
var G__56806 = null;
var G__56807 = (0);
var G__56808 = (0);
seq__56438_56788 = G__56805;
chunk__56439_56789 = G__56806;
count__56440_56790 = G__56807;
i__56441_56791 = G__56808;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__56809 = cljs.core.next(seq__56405_56770__$1);
var G__56810 = null;
var G__56811 = (0);
var G__56812 = (0);
seq__56405_56727 = G__56809;
chunk__56406_56728 = G__56810;
count__56407_56729 = G__56811;
i__56408_56730 = G__56812;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=re_frisk.subs_graph.js.map
