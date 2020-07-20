goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__65929){
var map__65930 = p__65929;
var map__65930__$1 = (((((!((map__65930 == null))))?(((((map__65930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65930):map__65930);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65930__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65930__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65930__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__65932 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__65933 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__65933);

try{var vec__65937 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__65940,transformer){
var vec__65941 = p__65940;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65941,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65941,(1),null);
var G__65944 = text;
var G__65945 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__65944,G__65945) : transformer.call(null,G__65944,G__65945));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4126__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65937,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65937,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__65932);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65990 = arguments.length;
var i__4737__auto___65991 = (0);
while(true){
if((i__4737__auto___65991 < len__4736__auto___65990)){
args__4742__auto__.push((arguments[i__4737__auto___65991]));

var G__65992 = (i__4737__auto___65991 + (1));
i__4737__auto___65991 = G__65992;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq65946){
var G__65947 = cljs.core.first(seq65946);
var seq65946__$1 = cljs.core.next(seq65946);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65947,seq65946__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__65949_65993 = cljs.core.seq(lines);
var chunk__65950_65994 = null;
var count__65951_65995 = (0);
var i__65952_65996 = (0);
while(true){
if((i__65952_65996 < count__65951_65995)){
var line_65997 = chunk__65950_65994.cljs$core$IIndexed$_nth$arity$2(null,i__65952_65996);
markdown.links.parse_reference_link(line_65997,references);


var G__65998 = seq__65949_65993;
var G__65999 = chunk__65950_65994;
var G__66000 = count__65951_65995;
var G__66001 = (i__65952_65996 + (1));
seq__65949_65993 = G__65998;
chunk__65950_65994 = G__65999;
count__65951_65995 = G__66000;
i__65952_65996 = G__66001;
continue;
} else {
var temp__5735__auto___66002 = cljs.core.seq(seq__65949_65993);
if(temp__5735__auto___66002){
var seq__65949_66003__$1 = temp__5735__auto___66002;
if(cljs.core.chunked_seq_QMARK_(seq__65949_66003__$1)){
var c__4556__auto___66004 = cljs.core.chunk_first(seq__65949_66003__$1);
var G__66005 = cljs.core.chunk_rest(seq__65949_66003__$1);
var G__66006 = c__4556__auto___66004;
var G__66007 = cljs.core.count(c__4556__auto___66004);
var G__66008 = (0);
seq__65949_65993 = G__66005;
chunk__65950_65994 = G__66006;
count__65951_65995 = G__66007;
i__65952_65996 = G__66008;
continue;
} else {
var line_66009 = cljs.core.first(seq__65949_66003__$1);
markdown.links.parse_reference_link(line_66009,references);


var G__66010 = cljs.core.next(seq__65949_66003__$1);
var G__66011 = null;
var G__66012 = (0);
var G__66013 = (0);
seq__65949_65993 = G__66010;
chunk__65950_65994 = G__66011;
count__65951_65995 = G__66012;
i__65952_65996 = G__66013;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__65953_66014 = cljs.core.seq(lines);
var chunk__65954_66015 = null;
var count__65955_66016 = (0);
var i__65956_66017 = (0);
while(true){
if((i__65956_66017 < count__65955_66016)){
var line_66018 = chunk__65954_66015.cljs$core$IIndexed$_nth$arity$2(null,i__65956_66017);
markdown.links.parse_footnote_link(line_66018,footnotes);


var G__66019 = seq__65953_66014;
var G__66020 = chunk__65954_66015;
var G__66021 = count__65955_66016;
var G__66022 = (i__65956_66017 + (1));
seq__65953_66014 = G__66019;
chunk__65954_66015 = G__66020;
count__65955_66016 = G__66021;
i__65956_66017 = G__66022;
continue;
} else {
var temp__5735__auto___66023 = cljs.core.seq(seq__65953_66014);
if(temp__5735__auto___66023){
var seq__65953_66025__$1 = temp__5735__auto___66023;
if(cljs.core.chunked_seq_QMARK_(seq__65953_66025__$1)){
var c__4556__auto___66026 = cljs.core.chunk_first(seq__65953_66025__$1);
var G__66027 = cljs.core.chunk_rest(seq__65953_66025__$1);
var G__66028 = c__4556__auto___66026;
var G__66029 = cljs.core.count(c__4556__auto___66026);
var G__66030 = (0);
seq__65953_66014 = G__66027;
chunk__65954_66015 = G__66028;
count__65955_66016 = G__66029;
i__65956_66017 = G__66030;
continue;
} else {
var line_66033 = cljs.core.first(seq__65953_66025__$1);
markdown.links.parse_footnote_link(line_66033,footnotes);


var G__66034 = cljs.core.next(seq__65953_66025__$1);
var G__66035 = null;
var G__66036 = (0);
var G__66037 = (0);
seq__65953_66014 = G__66034;
chunk__65954_66015 = G__66035;
count__65955_66016 = G__66036;
i__65956_66017 = G__66037;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__65958 = cljs.core.split_with((function (p1__65957_SHARP_){
return cljs.core.not_empty(p1__65957_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65958,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65958,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__65961 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__65962 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__65963 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__65964 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__65963);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__65964);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__65965 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65965,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65965,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__65971_66038 = lines__$1;
var vec__65972_66039 = G__65971_66038;
var seq__65973_66040 = cljs.core.seq(vec__65972_66039);
var first__65974_66041 = cljs.core.first(seq__65973_66040);
var seq__65973_66042__$1 = cljs.core.next(seq__65973_66040);
var line_66043 = first__65974_66041;
var more_66044 = seq__65973_66042__$1;
var state_66045 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__65971_66046__$1 = G__65971_66038;
var state_66047__$1 = state_66045;
while(true){
var vec__65978_66048 = G__65971_66046__$1;
var seq__65979_66049 = cljs.core.seq(vec__65978_66048);
var first__65980_66050 = cljs.core.first(seq__65979_66049);
var seq__65979_66051__$1 = cljs.core.next(seq__65979_66049);
var line_66052__$1 = first__65980_66050;
var more_66053__$1 = seq__65979_66051__$1;
var state_66054__$2 = state_66047__$1;
var line_66055__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_66054__$2))?"":line_66052__$1);
var state_66056__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_66054__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_66054__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_66054__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_66054__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_66054__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_66053__$1))){
var G__66057 = more_66053__$1;
var G__66058 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_66055__$2,cljs.core.first(more_66053__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_66056__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_66055__$2.trim()));
G__65971_66046__$1 = G__66057;
state_66047__$1 = G__66058;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_66056__$3))),line_66055__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_66056__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__65962);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__65961);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66059 = arguments.length;
var i__4737__auto___66060 = (0);
while(true){
if((i__4737__auto___66060 < len__4736__auto___66059)){
args__4742__auto__.push((arguments[i__4737__auto___66060]));

var G__66061 = (i__4737__auto___66060 + (1));
i__4737__auto___66060 = G__66061;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq65981){
var G__65982 = cljs.core.first(seq65981);
var seq65981__$1 = cljs.core.next(seq65981);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65982,seq65981__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66062 = arguments.length;
var i__4737__auto___66063 = (0);
while(true){
if((i__4737__auto___66063 < len__4736__auto___66062)){
args__4742__auto__.push((arguments[i__4737__auto___66063]));

var G__66064 = (i__4737__auto___66063 + (1));
i__4737__auto___66063 = G__66064;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq65983){
var G__65984 = cljs.core.first(seq65983);
var seq65983__$1 = cljs.core.next(seq65983);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65984,seq65983__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66065 = arguments.length;
var i__4737__auto___66066 = (0);
while(true){
if((i__4737__auto___66066 < len__4736__auto___66065)){
args__4742__auto__.push((arguments[i__4737__auto___66066]));

var G__66067 = (i__4737__auto___66066 + (1));
i__4737__auto___66066 = G__66067;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq65985){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65985));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66068 = arguments.length;
var i__4737__auto___66069 = (0);
while(true){
if((i__4737__auto___66069 < len__4736__auto___66068)){
args__4742__auto__.push((arguments[i__4737__auto___66069]));

var G__66070 = (i__4737__auto___66069 + (1));
i__4737__auto___66069 = G__66070;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq65986){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65986));
}));


//# sourceMappingURL=markdown.core.js.map
