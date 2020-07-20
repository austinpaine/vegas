goog.provide('re_frisk.filter.filter_parser');
re_frisk.filter.filter_parser.read_all = (function re_frisk$filter$filter_parser$read_all(rdr){
var G__60980 = cljs.tools.reader.reader_types.peek_char(rdr);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__60980)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons(cljs.tools.reader.reader_types.read_char(rdr),(re_frisk.filter.filter_parser.read_all.cljs$core$IFn$_invoke$arity$1 ? re_frisk.filter.filter_parser.read_all.cljs$core$IFn$_invoke$arity$1(rdr) : re_frisk.filter.filter_parser.read_all.call(null,rdr)));

}
});
re_frisk.filter.filter_parser.read_string_SINGLEQUOTE_ = (function re_frisk$filter$filter_parser$read_string_SINGLEQUOTE_(s){
var sr = cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s);
var val = cljs.tools.reader.read.cljs$core$IFn$_invoke$arity$1(sr);
var rest = clojure.string.join.cljs$core$IFn$_invoke$arity$1(re_frisk.filter.filter_parser.read_all(sr));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
});
re_frisk.filter.filter_parser.parse_freeform = (function re_frisk$filter$filter_parser$parse_freeform(s){
var vec__60986 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,/\s+/,(2));
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60986,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60986,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"free","free",801364328),prefix], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),(function (){var or__4126__auto__ = rest;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()], null);
});
re_frisk.filter.filter_parser.parse_clojure_expr = (function re_frisk$filter$filter_parser$parse_clojure_expr(s){
try{var map__60997 = re_frisk.filter.filter_parser.read_string_SINGLEQUOTE_(s);
var map__60997__$1 = (((((!((map__60997 == null))))?(((((map__60997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60997):map__60997);
var foo = map__60997__$1;
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60997__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60997__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),val], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
}catch (e60996){var _ = e60996;
return re_frisk.filter.filter_parser.parse_freeform(s);
}});
re_frisk.filter.filter_parser.parse_clojure_string = (function re_frisk$filter$filter_parser$parse_clojure_string(s){
try{var map__61033 = re_frisk.filter.filter_parser.read_string_SINGLEQUOTE_(s);
var map__61033__$1 = (((((!((map__61033 == null))))?(((((map__61033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61033):map__61033);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61033__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61033__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),val], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),rest], null);
}catch (e61027){var _ = e61027;
var vec__61028 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,/\s+/,(2));
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61028,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61028,(1),null);
var prefix__$1 = clojure.string.replace(prefix,/^\"/,"");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string-prefix","string-prefix",2091851734),prefix__$1], null),new cljs.core.Keyword(null,"rest","rest",-1241696419),(function (){var or__4126__auto__ = rest;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})()], null);
}});
re_frisk.filter.filter_parser.parse_part = (function re_frisk$filter$filter_parser$parse_part(s){
var G__61042 = cljs.core.first(s);
switch (G__61042) {
case "[":
case "(":
case "{":
case "#":
case "\\":
case "'":
case ":":
return re_frisk.filter.filter_parser.parse_clojure_expr(s);

break;
case "\"":
return re_frisk.filter.filter_parser.parse_clojure_string(s);

break;
default:
return re_frisk.filter.filter_parser.parse_freeform(s);

}
});
re_frisk.filter.filter_parser.parse_SINGLEQUOTE_ = (function re_frisk$filter$filter_parser$parse_SINGLEQUOTE_(s){
var s__$1 = clojure.string.trim(s);
var s__$2 = clojure.string.replace(s__$1,/^\[(.*)\]$/,"$1");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s__$2,"")){
return cljs.core.List.EMPTY;
} else {
var map__61048 = re_frisk.filter.filter_parser.parse_part(s__$2);
var map__61048__$1 = (((((!((map__61048 == null))))?(((((map__61048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61048):map__61048);
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"val","val",128701612));
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61048__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
return cljs.core.cons(val,(re_frisk.filter.filter_parser.parse_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? re_frisk.filter.filter_parser.parse_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(rest) : re_frisk.filter.filter_parser.parse_SINGLEQUOTE_.call(null,rest)));
}
});
re_frisk.filter.filter_parser.parse = (function re_frisk$filter$filter_parser$parse(s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,re_frisk.filter.filter_parser.parse_SINGLEQUOTE_(s));
});

//# sourceMappingURL=re_frisk.filter.filter_parser.js.map
