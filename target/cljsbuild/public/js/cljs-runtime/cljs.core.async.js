goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__59462 = arguments.length;
switch (G__59462) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59469 = (function (f,blockable,meta59470){
this.f = f;
this.blockable = blockable;
this.meta59470 = meta59470;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59471,meta59470__$1){
var self__ = this;
var _59471__$1 = this;
return (new cljs.core.async.t_cljs$core$async59469(self__.f,self__.blockable,meta59470__$1));
}));

(cljs.core.async.t_cljs$core$async59469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59471){
var self__ = this;
var _59471__$1 = this;
return self__.meta59470;
}));

(cljs.core.async.t_cljs$core$async59469.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59469.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59469.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async59469.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async59469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta59470","meta59470",-1403709632,null)], null);
}));

(cljs.core.async.t_cljs$core$async59469.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59469.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59469");

(cljs.core.async.t_cljs$core$async59469.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59469");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59469.
 */
cljs.core.async.__GT_t_cljs$core$async59469 = (function cljs$core$async$__GT_t_cljs$core$async59469(f__$1,blockable__$1,meta59470){
return (new cljs.core.async.t_cljs$core$async59469(f__$1,blockable__$1,meta59470));
});

}

return (new cljs.core.async.t_cljs$core$async59469(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__59487 = arguments.length;
switch (G__59487) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__59498 = arguments.length;
switch (G__59498) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__59515 = arguments.length;
switch (G__59515) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_61472 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_61472) : fn1.call(null,val_61472));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_61472) : fn1.call(null,val_61472));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__59532 = arguments.length;
switch (G__59532) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___61481 = n;
var x_61482 = (0);
while(true){
if((x_61482 < n__4613__auto___61481)){
(a[x_61482] = x_61482);

var G__61483 = (x_61482 + (1));
x_61482 = G__61483;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59549 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59549 = (function (flag,meta59550){
this.flag = flag;
this.meta59550 = meta59550;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59551,meta59550__$1){
var self__ = this;
var _59551__$1 = this;
return (new cljs.core.async.t_cljs$core$async59549(self__.flag,meta59550__$1));
}));

(cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59551){
var self__ = this;
var _59551__$1 = this;
return self__.meta59550;
}));

(cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59549.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async59549.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta59550","meta59550",-596316955,null)], null);
}));

(cljs.core.async.t_cljs$core$async59549.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59549.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59549");

(cljs.core.async.t_cljs$core$async59549.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59549");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59549.
 */
cljs.core.async.__GT_t_cljs$core$async59549 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async59549(flag__$1,meta59550){
return (new cljs.core.async.t_cljs$core$async59549(flag__$1,meta59550));
});

}

return (new cljs.core.async.t_cljs$core$async59549(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59559 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59559 = (function (flag,cb,meta59560){
this.flag = flag;
this.cb = cb;
this.meta59560 = meta59560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59561,meta59560__$1){
var self__ = this;
var _59561__$1 = this;
return (new cljs.core.async.t_cljs$core$async59559(self__.flag,self__.cb,meta59560__$1));
}));

(cljs.core.async.t_cljs$core$async59559.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59561){
var self__ = this;
var _59561__$1 = this;
return self__.meta59560;
}));

(cljs.core.async.t_cljs$core$async59559.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async59559.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async59559.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta59560","meta59560",-344567803,null)], null);
}));

(cljs.core.async.t_cljs$core$async59559.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59559");

(cljs.core.async.t_cljs$core$async59559.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async59559");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59559.
 */
cljs.core.async.__GT_t_cljs$core$async59559 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async59559(flag__$1,cb__$1,meta59560){
return (new cljs.core.async.t_cljs$core$async59559(flag__$1,cb__$1,meta59560));
});

}

return (new cljs.core.async.t_cljs$core$async59559(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59569_SHARP_){
var G__59571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59569_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__59571) : fret.call(null,G__59571));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__59570_SHARP_){
var G__59572 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__59570_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__59572) : fret.call(null,G__59572));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__61496 = (i + (1));
i = G__61496;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61497 = arguments.length;
var i__4737__auto___61499 = (0);
while(true){
if((i__4737__auto___61499 < len__4736__auto___61497)){
args__4742__auto__.push((arguments[i__4737__auto___61499]));

var G__61502 = (i__4737__auto___61499 + (1));
i__4737__auto___61499 = G__61502;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__59576){
var map__59577 = p__59576;
var map__59577__$1 = (((((!((map__59577 == null))))?(((((map__59577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59577):map__59577);
var opts = map__59577__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq59573){
var G__59574 = cljs.core.first(seq59573);
var seq59573__$1 = cljs.core.next(seq59573);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59574,seq59573__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__59588 = arguments.length;
switch (G__59588) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__59374__auto___61508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_59629){
var state_val_59630 = (state_59629[(1)]);
if((state_val_59630 === (7))){
var inst_59617 = (state_59629[(2)]);
var state_59629__$1 = state_59629;
var statearr_59637_61509 = state_59629__$1;
(statearr_59637_61509[(2)] = inst_59617);

(statearr_59637_61509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59630 === (1))){
var state_59629__$1 = state_59629;
var statearr_59638_61513 = state_59629__$1;
(statearr_59638_61513[(2)] = null);

(statearr_59638_61513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59630 === (4))){
var inst_59599 = (state_59629[(7)]);
var inst_59599__$1 = (state_59629[(2)]);
var inst_59601 = (inst_59599__$1 == null);
var state_59629__$1 = (function (){var statearr_59639 = state_59629;
(statearr_59639[(7)] = inst_59599__$1);

return statearr_59639;
})();
if(cljs.core.truth_(inst_59601)){
var statearr_59642_61514 = state_59629__$1;
(statearr_59642_61514[(1)] = (5));

} else {
var statearr_59643_61515 = state_59629__$1;
(statearr_59643_61515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59630 === (13))){
var state_59629__$1 = state_59629;
var statearr_59645_61516 = state_59629__$1;
(statearr_59645_61516[(2)] = null);

(statearr_59645_61516[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59630 === (6))){
var inst_59599 = (state_59629[(7)]);
var state_59629__$1 = state_59629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59629__$1,(11),to,inst_59599);
} else {
if((state_val_59630 === (3))){
var inst_59622 = (state_59629[(2)]);
var state_59629__$1 = state_59629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59629__$1,inst_59622);
} else {
if((state_val_59630 === (12))){
var state_59629__$1 = state_59629;
var statearr_59646_61520 = state_59629__$1;
(statearr_59646_61520[(2)] = null);

(statearr_59646_61520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59630 === (2))){
var state_59629__$1 = state_59629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59629__$1,(4),from);
} else {
if((state_val_59630 === (11))){
var inst_59610 = (state_59629[(2)]);
var state_59629__$1 = state_59629;
if(cljs.core.truth_(inst_59610)){
var statearr_59650_61525 = state_59629__$1;
(statearr_59650_61525[(1)] = (12));

} else {
var statearr_59651_61526 = state_59629__$1;
(statearr_59651_61526[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59630 === (9))){
var state_59629__$1 = state_59629;
var statearr_59654_61527 = state_59629__$1;
(statearr_59654_61527[(2)] = null);

(statearr_59654_61527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59630 === (5))){
var state_59629__$1 = state_59629;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59656_61528 = state_59629__$1;
(statearr_59656_61528[(1)] = (8));

} else {
var statearr_59657_61529 = state_59629__$1;
(statearr_59657_61529[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59630 === (14))){
var inst_59615 = (state_59629[(2)]);
var state_59629__$1 = state_59629;
var statearr_59658_61530 = state_59629__$1;
(statearr_59658_61530[(2)] = inst_59615);

(statearr_59658_61530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59630 === (10))){
var inst_59607 = (state_59629[(2)]);
var state_59629__$1 = state_59629;
var statearr_59659_61533 = state_59629__$1;
(statearr_59659_61533[(2)] = inst_59607);

(statearr_59659_61533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59630 === (8))){
var inst_59604 = cljs.core.async.close_BANG_(to);
var state_59629__$1 = state_59629;
var statearr_59660_61535 = state_59629__$1;
(statearr_59660_61535[(2)] = inst_59604);

(statearr_59660_61535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59114__auto__ = null;
var cljs$core$async$state_machine__59114__auto____0 = (function (){
var statearr_59662 = [null,null,null,null,null,null,null,null];
(statearr_59662[(0)] = cljs$core$async$state_machine__59114__auto__);

(statearr_59662[(1)] = (1));

return statearr_59662;
});
var cljs$core$async$state_machine__59114__auto____1 = (function (state_59629){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_59629);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e59663){var ex__59117__auto__ = e59663;
var statearr_59664_61537 = state_59629;
(statearr_59664_61537[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_59629[(4)]))){
var statearr_59665_61538 = state_59629;
(statearr_59665_61538[(1)] = cljs.core.first((state_59629[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61539 = state_59629;
state_59629 = G__61539;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$state_machine__59114__auto__ = function(state_59629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59114__auto____1.call(this,state_59629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59114__auto____0;
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59114__auto____1;
return cljs$core$async$state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_59669 = f__59375__auto__();
(statearr_59669[(6)] = c__59374__auto___61508);

return statearr_59669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__59671){
var vec__59672 = p__59671;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59672,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59672,(1),null);
var job = vec__59672;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__59374__auto___61544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_59679){
var state_val_59680 = (state_59679[(1)]);
if((state_val_59680 === (1))){
var state_59679__$1 = state_59679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59679__$1,(2),res,v);
} else {
if((state_val_59680 === (2))){
var inst_59676 = (state_59679[(2)]);
var inst_59677 = cljs.core.async.close_BANG_(res);
var state_59679__$1 = (function (){var statearr_59681 = state_59679;
(statearr_59681[(7)] = inst_59676);

return statearr_59681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59679__$1,inst_59677);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0 = (function (){
var statearr_59685 = [null,null,null,null,null,null,null,null];
(statearr_59685[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__);

(statearr_59685[(1)] = (1));

return statearr_59685;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1 = (function (state_59679){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_59679);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e59686){var ex__59117__auto__ = e59686;
var statearr_59687_61549 = state_59679;
(statearr_59687_61549[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_59679[(4)]))){
var statearr_59688_61550 = state_59679;
(statearr_59688_61550[(1)] = cljs.core.first((state_59679[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61551 = state_59679;
state_59679 = G__61551;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__ = function(state_59679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1.call(this,state_59679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_59692 = f__59375__auto__();
(statearr_59692[(6)] = c__59374__auto___61544);

return statearr_59692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__59693){
var vec__59694 = p__59693;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59694,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59694,(1),null);
var job = vec__59694;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___61552 = n;
var __61553 = (0);
while(true){
if((__61553 < n__4613__auto___61552)){
var G__59697_61554 = type;
var G__59697_61555__$1 = (((G__59697_61554 instanceof cljs.core.Keyword))?G__59697_61554.fqn:null);
switch (G__59697_61555__$1) {
case "compute":
var c__59374__auto___61558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__61553,c__59374__auto___61558,G__59697_61554,G__59697_61555__$1,n__4613__auto___61552,jobs,results,process,async){
return (function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = ((function (__61553,c__59374__auto___61558,G__59697_61554,G__59697_61555__$1,n__4613__auto___61552,jobs,results,process,async){
return (function (state_59717){
var state_val_59718 = (state_59717[(1)]);
if((state_val_59718 === (1))){
var state_59717__$1 = state_59717;
var statearr_59722_61559 = state_59717__$1;
(statearr_59722_61559[(2)] = null);

(statearr_59722_61559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (2))){
var state_59717__$1 = state_59717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59717__$1,(4),jobs);
} else {
if((state_val_59718 === (3))){
var inst_59714 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59717__$1,inst_59714);
} else {
if((state_val_59718 === (4))){
var inst_59704 = (state_59717[(2)]);
var inst_59705 = process(inst_59704);
var state_59717__$1 = state_59717;
if(cljs.core.truth_(inst_59705)){
var statearr_59723_61561 = state_59717__$1;
(statearr_59723_61561[(1)] = (5));

} else {
var statearr_59724_61562 = state_59717__$1;
(statearr_59724_61562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (5))){
var state_59717__$1 = state_59717;
var statearr_59729_61563 = state_59717__$1;
(statearr_59729_61563[(2)] = null);

(statearr_59729_61563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (6))){
var state_59717__$1 = state_59717;
var statearr_59730_61564 = state_59717__$1;
(statearr_59730_61564[(2)] = null);

(statearr_59730_61564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59718 === (7))){
var inst_59712 = (state_59717[(2)]);
var state_59717__$1 = state_59717;
var statearr_59731_61566 = state_59717__$1;
(statearr_59731_61566[(2)] = inst_59712);

(statearr_59731_61566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__61553,c__59374__auto___61558,G__59697_61554,G__59697_61555__$1,n__4613__auto___61552,jobs,results,process,async))
;
return ((function (__61553,switch__59113__auto__,c__59374__auto___61558,G__59697_61554,G__59697_61555__$1,n__4613__auto___61552,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0 = (function (){
var statearr_59732 = [null,null,null,null,null,null,null];
(statearr_59732[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__);

(statearr_59732[(1)] = (1));

return statearr_59732;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1 = (function (state_59717){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_59717);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e59734){var ex__59117__auto__ = e59734;
var statearr_59735_61569 = state_59717;
(statearr_59735_61569[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_59717[(4)]))){
var statearr_59739_61570 = state_59717;
(statearr_59739_61570[(1)] = cljs.core.first((state_59717[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61571 = state_59717;
state_59717 = G__61571;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__ = function(state_59717){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1.call(this,state_59717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__;
})()
;})(__61553,switch__59113__auto__,c__59374__auto___61558,G__59697_61554,G__59697_61555__$1,n__4613__auto___61552,jobs,results,process,async))
})();
var state__59376__auto__ = (function (){var statearr_59740 = f__59375__auto__();
(statearr_59740[(6)] = c__59374__auto___61558);

return statearr_59740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
});})(__61553,c__59374__auto___61558,G__59697_61554,G__59697_61555__$1,n__4613__auto___61552,jobs,results,process,async))
);


break;
case "async":
var c__59374__auto___61572 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__61553,c__59374__auto___61572,G__59697_61554,G__59697_61555__$1,n__4613__auto___61552,jobs,results,process,async){
return (function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = ((function (__61553,c__59374__auto___61572,G__59697_61554,G__59697_61555__$1,n__4613__auto___61552,jobs,results,process,async){
return (function (state_59753){
var state_val_59754 = (state_59753[(1)]);
if((state_val_59754 === (1))){
var state_59753__$1 = state_59753;
var statearr_59756_61573 = state_59753__$1;
(statearr_59756_61573[(2)] = null);

(statearr_59756_61573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (2))){
var state_59753__$1 = state_59753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59753__$1,(4),jobs);
} else {
if((state_val_59754 === (3))){
var inst_59751 = (state_59753[(2)]);
var state_59753__$1 = state_59753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59753__$1,inst_59751);
} else {
if((state_val_59754 === (4))){
var inst_59743 = (state_59753[(2)]);
var inst_59744 = async(inst_59743);
var state_59753__$1 = state_59753;
if(cljs.core.truth_(inst_59744)){
var statearr_59757_61575 = state_59753__$1;
(statearr_59757_61575[(1)] = (5));

} else {
var statearr_59758_61576 = state_59753__$1;
(statearr_59758_61576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (5))){
var state_59753__$1 = state_59753;
var statearr_59759_61577 = state_59753__$1;
(statearr_59759_61577[(2)] = null);

(statearr_59759_61577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (6))){
var state_59753__$1 = state_59753;
var statearr_59760_61578 = state_59753__$1;
(statearr_59760_61578[(2)] = null);

(statearr_59760_61578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59754 === (7))){
var inst_59749 = (state_59753[(2)]);
var state_59753__$1 = state_59753;
var statearr_59761_61579 = state_59753__$1;
(statearr_59761_61579[(2)] = inst_59749);

(statearr_59761_61579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__61553,c__59374__auto___61572,G__59697_61554,G__59697_61555__$1,n__4613__auto___61552,jobs,results,process,async))
;
return ((function (__61553,switch__59113__auto__,c__59374__auto___61572,G__59697_61554,G__59697_61555__$1,n__4613__auto___61552,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0 = (function (){
var statearr_59762 = [null,null,null,null,null,null,null];
(statearr_59762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__);

(statearr_59762[(1)] = (1));

return statearr_59762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1 = (function (state_59753){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_59753);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e59763){var ex__59117__auto__ = e59763;
var statearr_59764_61582 = state_59753;
(statearr_59764_61582[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_59753[(4)]))){
var statearr_59765_61583 = state_59753;
(statearr_59765_61583[(1)] = cljs.core.first((state_59753[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61585 = state_59753;
state_59753 = G__61585;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__ = function(state_59753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1.call(this,state_59753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__;
})()
;})(__61553,switch__59113__auto__,c__59374__auto___61572,G__59697_61554,G__59697_61555__$1,n__4613__auto___61552,jobs,results,process,async))
})();
var state__59376__auto__ = (function (){var statearr_59766 = f__59375__auto__();
(statearr_59766[(6)] = c__59374__auto___61572);

return statearr_59766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
});})(__61553,c__59374__auto___61572,G__59697_61554,G__59697_61555__$1,n__4613__auto___61552,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59697_61555__$1)].join('')));

}

var G__61590 = (__61553 + (1));
__61553 = G__61590;
continue;
} else {
}
break;
}

var c__59374__auto___61592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_59788){
var state_val_59789 = (state_59788[(1)]);
if((state_val_59789 === (7))){
var inst_59784 = (state_59788[(2)]);
var state_59788__$1 = state_59788;
var statearr_59790_61606 = state_59788__$1;
(statearr_59790_61606[(2)] = inst_59784);

(statearr_59790_61606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (1))){
var state_59788__$1 = state_59788;
var statearr_59791_61607 = state_59788__$1;
(statearr_59791_61607[(2)] = null);

(statearr_59791_61607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (4))){
var inst_59769 = (state_59788[(7)]);
var inst_59769__$1 = (state_59788[(2)]);
var inst_59770 = (inst_59769__$1 == null);
var state_59788__$1 = (function (){var statearr_59792 = state_59788;
(statearr_59792[(7)] = inst_59769__$1);

return statearr_59792;
})();
if(cljs.core.truth_(inst_59770)){
var statearr_59793_61608 = state_59788__$1;
(statearr_59793_61608[(1)] = (5));

} else {
var statearr_59794_61610 = state_59788__$1;
(statearr_59794_61610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (6))){
var inst_59774 = (state_59788[(8)]);
var inst_59769 = (state_59788[(7)]);
var inst_59774__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_59775 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59776 = [inst_59769,inst_59774__$1];
var inst_59777 = (new cljs.core.PersistentVector(null,2,(5),inst_59775,inst_59776,null));
var state_59788__$1 = (function (){var statearr_59795 = state_59788;
(statearr_59795[(8)] = inst_59774__$1);

return statearr_59795;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59788__$1,(8),jobs,inst_59777);
} else {
if((state_val_59789 === (3))){
var inst_59786 = (state_59788[(2)]);
var state_59788__$1 = state_59788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59788__$1,inst_59786);
} else {
if((state_val_59789 === (2))){
var state_59788__$1 = state_59788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59788__$1,(4),from);
} else {
if((state_val_59789 === (9))){
var inst_59781 = (state_59788[(2)]);
var state_59788__$1 = (function (){var statearr_59796 = state_59788;
(statearr_59796[(9)] = inst_59781);

return statearr_59796;
})();
var statearr_59798_61612 = state_59788__$1;
(statearr_59798_61612[(2)] = null);

(statearr_59798_61612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (5))){
var inst_59772 = cljs.core.async.close_BANG_(jobs);
var state_59788__$1 = state_59788;
var statearr_59799_61615 = state_59788__$1;
(statearr_59799_61615[(2)] = inst_59772);

(statearr_59799_61615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59789 === (8))){
var inst_59774 = (state_59788[(8)]);
var inst_59779 = (state_59788[(2)]);
var state_59788__$1 = (function (){var statearr_59800 = state_59788;
(statearr_59800[(10)] = inst_59779);

return statearr_59800;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59788__$1,(9),results,inst_59774);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0 = (function (){
var statearr_59801 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__);

(statearr_59801[(1)] = (1));

return statearr_59801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1 = (function (state_59788){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_59788);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e59802){var ex__59117__auto__ = e59802;
var statearr_59803_61619 = state_59788;
(statearr_59803_61619[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_59788[(4)]))){
var statearr_59804_61621 = state_59788;
(statearr_59804_61621[(1)] = cljs.core.first((state_59788[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61623 = state_59788;
state_59788 = G__61623;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__ = function(state_59788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1.call(this,state_59788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_59805 = f__59375__auto__();
(statearr_59805[(6)] = c__59374__auto___61592);

return statearr_59805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


var c__59374__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_59843){
var state_val_59844 = (state_59843[(1)]);
if((state_val_59844 === (7))){
var inst_59839 = (state_59843[(2)]);
var state_59843__$1 = state_59843;
var statearr_59845_61628 = state_59843__$1;
(statearr_59845_61628[(2)] = inst_59839);

(statearr_59845_61628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (20))){
var state_59843__$1 = state_59843;
var statearr_59846_61629 = state_59843__$1;
(statearr_59846_61629[(2)] = null);

(statearr_59846_61629[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (1))){
var state_59843__$1 = state_59843;
var statearr_59847_61630 = state_59843__$1;
(statearr_59847_61630[(2)] = null);

(statearr_59847_61630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (4))){
var inst_59808 = (state_59843[(7)]);
var inst_59808__$1 = (state_59843[(2)]);
var inst_59809 = (inst_59808__$1 == null);
var state_59843__$1 = (function (){var statearr_59848 = state_59843;
(statearr_59848[(7)] = inst_59808__$1);

return statearr_59848;
})();
if(cljs.core.truth_(inst_59809)){
var statearr_59849_61633 = state_59843__$1;
(statearr_59849_61633[(1)] = (5));

} else {
var statearr_59850_61634 = state_59843__$1;
(statearr_59850_61634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (15))){
var inst_59821 = (state_59843[(8)]);
var state_59843__$1 = state_59843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59843__$1,(18),to,inst_59821);
} else {
if((state_val_59844 === (21))){
var inst_59834 = (state_59843[(2)]);
var state_59843__$1 = state_59843;
var statearr_59851_61637 = state_59843__$1;
(statearr_59851_61637[(2)] = inst_59834);

(statearr_59851_61637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (13))){
var inst_59836 = (state_59843[(2)]);
var state_59843__$1 = (function (){var statearr_59852 = state_59843;
(statearr_59852[(9)] = inst_59836);

return statearr_59852;
})();
var statearr_59853_61638 = state_59843__$1;
(statearr_59853_61638[(2)] = null);

(statearr_59853_61638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (6))){
var inst_59808 = (state_59843[(7)]);
var state_59843__$1 = state_59843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59843__$1,(11),inst_59808);
} else {
if((state_val_59844 === (17))){
var inst_59829 = (state_59843[(2)]);
var state_59843__$1 = state_59843;
if(cljs.core.truth_(inst_59829)){
var statearr_59854_61640 = state_59843__$1;
(statearr_59854_61640[(1)] = (19));

} else {
var statearr_59855_61641 = state_59843__$1;
(statearr_59855_61641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (3))){
var inst_59841 = (state_59843[(2)]);
var state_59843__$1 = state_59843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59843__$1,inst_59841);
} else {
if((state_val_59844 === (12))){
var inst_59818 = (state_59843[(10)]);
var state_59843__$1 = state_59843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59843__$1,(14),inst_59818);
} else {
if((state_val_59844 === (2))){
var state_59843__$1 = state_59843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59843__$1,(4),results);
} else {
if((state_val_59844 === (19))){
var state_59843__$1 = state_59843;
var statearr_59856_61642 = state_59843__$1;
(statearr_59856_61642[(2)] = null);

(statearr_59856_61642[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (11))){
var inst_59818 = (state_59843[(2)]);
var state_59843__$1 = (function (){var statearr_59857 = state_59843;
(statearr_59857[(10)] = inst_59818);

return statearr_59857;
})();
var statearr_59858_61646 = state_59843__$1;
(statearr_59858_61646[(2)] = null);

(statearr_59858_61646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (9))){
var state_59843__$1 = state_59843;
var statearr_59859_61647 = state_59843__$1;
(statearr_59859_61647[(2)] = null);

(statearr_59859_61647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (5))){
var state_59843__$1 = state_59843;
if(cljs.core.truth_(close_QMARK_)){
var statearr_59860_61648 = state_59843__$1;
(statearr_59860_61648[(1)] = (8));

} else {
var statearr_59861_61649 = state_59843__$1;
(statearr_59861_61649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (14))){
var inst_59821 = (state_59843[(8)]);
var inst_59821__$1 = (state_59843[(2)]);
var inst_59822 = (inst_59821__$1 == null);
var inst_59823 = cljs.core.not(inst_59822);
var state_59843__$1 = (function (){var statearr_59862 = state_59843;
(statearr_59862[(8)] = inst_59821__$1);

return statearr_59862;
})();
if(inst_59823){
var statearr_59863_61650 = state_59843__$1;
(statearr_59863_61650[(1)] = (15));

} else {
var statearr_59864_61651 = state_59843__$1;
(statearr_59864_61651[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (16))){
var state_59843__$1 = state_59843;
var statearr_59865_61652 = state_59843__$1;
(statearr_59865_61652[(2)] = false);

(statearr_59865_61652[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (10))){
var inst_59815 = (state_59843[(2)]);
var state_59843__$1 = state_59843;
var statearr_59866_61653 = state_59843__$1;
(statearr_59866_61653[(2)] = inst_59815);

(statearr_59866_61653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (18))){
var inst_59826 = (state_59843[(2)]);
var state_59843__$1 = state_59843;
var statearr_59867_61654 = state_59843__$1;
(statearr_59867_61654[(2)] = inst_59826);

(statearr_59867_61654[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59844 === (8))){
var inst_59812 = cljs.core.async.close_BANG_(to);
var state_59843__$1 = state_59843;
var statearr_59868_61655 = state_59843__$1;
(statearr_59868_61655[(2)] = inst_59812);

(statearr_59868_61655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0 = (function (){
var statearr_59869 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59869[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__);

(statearr_59869[(1)] = (1));

return statearr_59869;
});
var cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1 = (function (state_59843){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_59843);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e59870){var ex__59117__auto__ = e59870;
var statearr_59871_61656 = state_59843;
(statearr_59871_61656[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_59843[(4)]))){
var statearr_59872_61657 = state_59843;
(statearr_59872_61657[(1)] = cljs.core.first((state_59843[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61659 = state_59843;
state_59843 = G__61659;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__ = function(state_59843){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1.call(this,state_59843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__59114__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_59873 = f__59375__auto__();
(statearr_59873[(6)] = c__59374__auto__);

return statearr_59873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));

return c__59374__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__59875 = arguments.length;
switch (G__59875) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__59877 = arguments.length;
switch (G__59877) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__59879 = arguments.length;
switch (G__59879) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__59374__auto___61671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_59905){
var state_val_59906 = (state_59905[(1)]);
if((state_val_59906 === (7))){
var inst_59901 = (state_59905[(2)]);
var state_59905__$1 = state_59905;
var statearr_59908_61673 = state_59905__$1;
(statearr_59908_61673[(2)] = inst_59901);

(statearr_59908_61673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59906 === (1))){
var state_59905__$1 = state_59905;
var statearr_59909_61674 = state_59905__$1;
(statearr_59909_61674[(2)] = null);

(statearr_59909_61674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59906 === (4))){
var inst_59882 = (state_59905[(7)]);
var inst_59882__$1 = (state_59905[(2)]);
var inst_59883 = (inst_59882__$1 == null);
var state_59905__$1 = (function (){var statearr_59911 = state_59905;
(statearr_59911[(7)] = inst_59882__$1);

return statearr_59911;
})();
if(cljs.core.truth_(inst_59883)){
var statearr_59912_61675 = state_59905__$1;
(statearr_59912_61675[(1)] = (5));

} else {
var statearr_59914_61676 = state_59905__$1;
(statearr_59914_61676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59906 === (13))){
var state_59905__$1 = state_59905;
var statearr_59915_61677 = state_59905__$1;
(statearr_59915_61677[(2)] = null);

(statearr_59915_61677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59906 === (6))){
var inst_59882 = (state_59905[(7)]);
var inst_59888 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59882) : p.call(null,inst_59882));
var state_59905__$1 = state_59905;
if(cljs.core.truth_(inst_59888)){
var statearr_59916_61680 = state_59905__$1;
(statearr_59916_61680[(1)] = (9));

} else {
var statearr_59917_61681 = state_59905__$1;
(statearr_59917_61681[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59906 === (3))){
var inst_59903 = (state_59905[(2)]);
var state_59905__$1 = state_59905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59905__$1,inst_59903);
} else {
if((state_val_59906 === (12))){
var state_59905__$1 = state_59905;
var statearr_59918_61685 = state_59905__$1;
(statearr_59918_61685[(2)] = null);

(statearr_59918_61685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59906 === (2))){
var state_59905__$1 = state_59905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59905__$1,(4),ch);
} else {
if((state_val_59906 === (11))){
var inst_59882 = (state_59905[(7)]);
var inst_59892 = (state_59905[(2)]);
var state_59905__$1 = state_59905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59905__$1,(8),inst_59892,inst_59882);
} else {
if((state_val_59906 === (9))){
var state_59905__$1 = state_59905;
var statearr_59921_61686 = state_59905__$1;
(statearr_59921_61686[(2)] = tc);

(statearr_59921_61686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59906 === (5))){
var inst_59885 = cljs.core.async.close_BANG_(tc);
var inst_59886 = cljs.core.async.close_BANG_(fc);
var state_59905__$1 = (function (){var statearr_59922 = state_59905;
(statearr_59922[(8)] = inst_59885);

return statearr_59922;
})();
var statearr_59923_61688 = state_59905__$1;
(statearr_59923_61688[(2)] = inst_59886);

(statearr_59923_61688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59906 === (14))){
var inst_59899 = (state_59905[(2)]);
var state_59905__$1 = state_59905;
var statearr_59924_61693 = state_59905__$1;
(statearr_59924_61693[(2)] = inst_59899);

(statearr_59924_61693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59906 === (10))){
var state_59905__$1 = state_59905;
var statearr_59925_61694 = state_59905__$1;
(statearr_59925_61694[(2)] = fc);

(statearr_59925_61694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59906 === (8))){
var inst_59894 = (state_59905[(2)]);
var state_59905__$1 = state_59905;
if(cljs.core.truth_(inst_59894)){
var statearr_59926_61695 = state_59905__$1;
(statearr_59926_61695[(1)] = (12));

} else {
var statearr_59927_61696 = state_59905__$1;
(statearr_59927_61696[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59114__auto__ = null;
var cljs$core$async$state_machine__59114__auto____0 = (function (){
var statearr_59928 = [null,null,null,null,null,null,null,null,null];
(statearr_59928[(0)] = cljs$core$async$state_machine__59114__auto__);

(statearr_59928[(1)] = (1));

return statearr_59928;
});
var cljs$core$async$state_machine__59114__auto____1 = (function (state_59905){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_59905);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e59929){var ex__59117__auto__ = e59929;
var statearr_59930_61700 = state_59905;
(statearr_59930_61700[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_59905[(4)]))){
var statearr_59932_61701 = state_59905;
(statearr_59932_61701[(1)] = cljs.core.first((state_59905[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61702 = state_59905;
state_59905 = G__61702;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$state_machine__59114__auto__ = function(state_59905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59114__auto____1.call(this,state_59905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59114__auto____0;
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59114__auto____1;
return cljs$core$async$state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_59934 = f__59375__auto__();
(statearr_59934[(6)] = c__59374__auto___61671);

return statearr_59934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__59374__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_59956){
var state_val_59957 = (state_59956[(1)]);
if((state_val_59957 === (7))){
var inst_59952 = (state_59956[(2)]);
var state_59956__$1 = state_59956;
var statearr_59958_61706 = state_59956__$1;
(statearr_59958_61706[(2)] = inst_59952);

(statearr_59958_61706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59957 === (1))){
var inst_59935 = init;
var inst_59936 = inst_59935;
var state_59956__$1 = (function (){var statearr_59959 = state_59956;
(statearr_59959[(7)] = inst_59936);

return statearr_59959;
})();
var statearr_59960_61710 = state_59956__$1;
(statearr_59960_61710[(2)] = null);

(statearr_59960_61710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59957 === (4))){
var inst_59939 = (state_59956[(8)]);
var inst_59939__$1 = (state_59956[(2)]);
var inst_59940 = (inst_59939__$1 == null);
var state_59956__$1 = (function (){var statearr_59961 = state_59956;
(statearr_59961[(8)] = inst_59939__$1);

return statearr_59961;
})();
if(cljs.core.truth_(inst_59940)){
var statearr_59962_61713 = state_59956__$1;
(statearr_59962_61713[(1)] = (5));

} else {
var statearr_59963_61714 = state_59956__$1;
(statearr_59963_61714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59957 === (6))){
var inst_59939 = (state_59956[(8)]);
var inst_59943 = (state_59956[(9)]);
var inst_59936 = (state_59956[(7)]);
var inst_59943__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_59936,inst_59939) : f.call(null,inst_59936,inst_59939));
var inst_59944 = cljs.core.reduced_QMARK_(inst_59943__$1);
var state_59956__$1 = (function (){var statearr_59965 = state_59956;
(statearr_59965[(9)] = inst_59943__$1);

return statearr_59965;
})();
if(inst_59944){
var statearr_59966_61719 = state_59956__$1;
(statearr_59966_61719[(1)] = (8));

} else {
var statearr_59967_61722 = state_59956__$1;
(statearr_59967_61722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59957 === (3))){
var inst_59954 = (state_59956[(2)]);
var state_59956__$1 = state_59956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59956__$1,inst_59954);
} else {
if((state_val_59957 === (2))){
var state_59956__$1 = state_59956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59956__$1,(4),ch);
} else {
if((state_val_59957 === (9))){
var inst_59943 = (state_59956[(9)]);
var inst_59936 = inst_59943;
var state_59956__$1 = (function (){var statearr_59968 = state_59956;
(statearr_59968[(7)] = inst_59936);

return statearr_59968;
})();
var statearr_59969_61730 = state_59956__$1;
(statearr_59969_61730[(2)] = null);

(statearr_59969_61730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59957 === (5))){
var inst_59936 = (state_59956[(7)]);
var state_59956__$1 = state_59956;
var statearr_59971_61731 = state_59956__$1;
(statearr_59971_61731[(2)] = inst_59936);

(statearr_59971_61731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59957 === (10))){
var inst_59950 = (state_59956[(2)]);
var state_59956__$1 = state_59956;
var statearr_59972_61736 = state_59956__$1;
(statearr_59972_61736[(2)] = inst_59950);

(statearr_59972_61736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59957 === (8))){
var inst_59943 = (state_59956[(9)]);
var inst_59946 = cljs.core.deref(inst_59943);
var state_59956__$1 = state_59956;
var statearr_59974_61737 = state_59956__$1;
(statearr_59974_61737[(2)] = inst_59946);

(statearr_59974_61737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__59114__auto__ = null;
var cljs$core$async$reduce_$_state_machine__59114__auto____0 = (function (){
var statearr_59975 = [null,null,null,null,null,null,null,null,null,null];
(statearr_59975[(0)] = cljs$core$async$reduce_$_state_machine__59114__auto__);

(statearr_59975[(1)] = (1));

return statearr_59975;
});
var cljs$core$async$reduce_$_state_machine__59114__auto____1 = (function (state_59956){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_59956);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e59977){var ex__59117__auto__ = e59977;
var statearr_59978_61762 = state_59956;
(statearr_59978_61762[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_59956[(4)]))){
var statearr_59979_61770 = state_59956;
(statearr_59979_61770[(1)] = cljs.core.first((state_59956[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61779 = state_59956;
state_59956 = G__61779;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__59114__auto__ = function(state_59956){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__59114__auto____1.call(this,state_59956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__59114__auto____0;
cljs$core$async$reduce_$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__59114__auto____1;
return cljs$core$async$reduce_$_state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_59984 = f__59375__auto__();
(statearr_59984[(6)] = c__59374__auto__);

return statearr_59984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));

return c__59374__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__59374__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_59992){
var state_val_59993 = (state_59992[(1)]);
if((state_val_59993 === (1))){
var inst_59987 = cljs.core.async.reduce(f__$1,init,ch);
var state_59992__$1 = state_59992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59992__$1,(2),inst_59987);
} else {
if((state_val_59993 === (2))){
var inst_59989 = (state_59992[(2)]);
var inst_59990 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_59989) : f__$1.call(null,inst_59989));
var state_59992__$1 = state_59992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59992__$1,inst_59990);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__59114__auto__ = null;
var cljs$core$async$transduce_$_state_machine__59114__auto____0 = (function (){
var statearr_59996 = [null,null,null,null,null,null,null];
(statearr_59996[(0)] = cljs$core$async$transduce_$_state_machine__59114__auto__);

(statearr_59996[(1)] = (1));

return statearr_59996;
});
var cljs$core$async$transduce_$_state_machine__59114__auto____1 = (function (state_59992){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_59992);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e59997){var ex__59117__auto__ = e59997;
var statearr_59998_61785 = state_59992;
(statearr_59998_61785[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_59992[(4)]))){
var statearr_59999_61786 = state_59992;
(statearr_59999_61786[(1)] = cljs.core.first((state_59992[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61787 = state_59992;
state_59992 = G__61787;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__59114__auto__ = function(state_59992){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__59114__auto____1.call(this,state_59992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__59114__auto____0;
cljs$core$async$transduce_$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__59114__auto____1;
return cljs$core$async$transduce_$_state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_60000 = f__59375__auto__();
(statearr_60000[(6)] = c__59374__auto__);

return statearr_60000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));

return c__59374__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__60004 = arguments.length;
switch (G__60004) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__59374__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_60031){
var state_val_60032 = (state_60031[(1)]);
if((state_val_60032 === (7))){
var inst_60011 = (state_60031[(2)]);
var state_60031__$1 = state_60031;
var statearr_60033_61795 = state_60031__$1;
(statearr_60033_61795[(2)] = inst_60011);

(statearr_60033_61795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60032 === (1))){
var inst_60005 = cljs.core.seq(coll);
var inst_60006 = inst_60005;
var state_60031__$1 = (function (){var statearr_60034 = state_60031;
(statearr_60034[(7)] = inst_60006);

return statearr_60034;
})();
var statearr_60035_61797 = state_60031__$1;
(statearr_60035_61797[(2)] = null);

(statearr_60035_61797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60032 === (4))){
var inst_60006 = (state_60031[(7)]);
var inst_60009 = cljs.core.first(inst_60006);
var state_60031__$1 = state_60031;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60031__$1,(7),ch,inst_60009);
} else {
if((state_val_60032 === (13))){
var inst_60025 = (state_60031[(2)]);
var state_60031__$1 = state_60031;
var statearr_60036_61798 = state_60031__$1;
(statearr_60036_61798[(2)] = inst_60025);

(statearr_60036_61798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60032 === (6))){
var inst_60014 = (state_60031[(2)]);
var state_60031__$1 = state_60031;
if(cljs.core.truth_(inst_60014)){
var statearr_60039_61799 = state_60031__$1;
(statearr_60039_61799[(1)] = (8));

} else {
var statearr_60040_61800 = state_60031__$1;
(statearr_60040_61800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60032 === (3))){
var inst_60029 = (state_60031[(2)]);
var state_60031__$1 = state_60031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60031__$1,inst_60029);
} else {
if((state_val_60032 === (12))){
var state_60031__$1 = state_60031;
var statearr_60041_61803 = state_60031__$1;
(statearr_60041_61803[(2)] = null);

(statearr_60041_61803[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60032 === (2))){
var inst_60006 = (state_60031[(7)]);
var state_60031__$1 = state_60031;
if(cljs.core.truth_(inst_60006)){
var statearr_60042_61806 = state_60031__$1;
(statearr_60042_61806[(1)] = (4));

} else {
var statearr_60043_61807 = state_60031__$1;
(statearr_60043_61807[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60032 === (11))){
var inst_60022 = cljs.core.async.close_BANG_(ch);
var state_60031__$1 = state_60031;
var statearr_60044_61810 = state_60031__$1;
(statearr_60044_61810[(2)] = inst_60022);

(statearr_60044_61810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60032 === (9))){
var state_60031__$1 = state_60031;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60045_61811 = state_60031__$1;
(statearr_60045_61811[(1)] = (11));

} else {
var statearr_60046_61813 = state_60031__$1;
(statearr_60046_61813[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60032 === (5))){
var inst_60006 = (state_60031[(7)]);
var state_60031__$1 = state_60031;
var statearr_60047_61814 = state_60031__$1;
(statearr_60047_61814[(2)] = inst_60006);

(statearr_60047_61814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60032 === (10))){
var inst_60027 = (state_60031[(2)]);
var state_60031__$1 = state_60031;
var statearr_60048_61816 = state_60031__$1;
(statearr_60048_61816[(2)] = inst_60027);

(statearr_60048_61816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60032 === (8))){
var inst_60006 = (state_60031[(7)]);
var inst_60018 = cljs.core.next(inst_60006);
var inst_60006__$1 = inst_60018;
var state_60031__$1 = (function (){var statearr_60049 = state_60031;
(statearr_60049[(7)] = inst_60006__$1);

return statearr_60049;
})();
var statearr_60050_61818 = state_60031__$1;
(statearr_60050_61818[(2)] = null);

(statearr_60050_61818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59114__auto__ = null;
var cljs$core$async$state_machine__59114__auto____0 = (function (){
var statearr_60051 = [null,null,null,null,null,null,null,null];
(statearr_60051[(0)] = cljs$core$async$state_machine__59114__auto__);

(statearr_60051[(1)] = (1));

return statearr_60051;
});
var cljs$core$async$state_machine__59114__auto____1 = (function (state_60031){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_60031);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e60052){var ex__59117__auto__ = e60052;
var statearr_60053_61822 = state_60031;
(statearr_60053_61822[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_60031[(4)]))){
var statearr_60054_61823 = state_60031;
(statearr_60054_61823[(1)] = cljs.core.first((state_60031[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61825 = state_60031;
state_60031 = G__61825;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$state_machine__59114__auto__ = function(state_60031){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59114__auto____1.call(this,state_60031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59114__auto____0;
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59114__auto____1;
return cljs$core$async$state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_60055 = f__59375__auto__();
(statearr_60055[(6)] = c__59374__auto__);

return statearr_60055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));

return c__59374__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__60058 = arguments.length;
switch (G__60058) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_61833 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_61833(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_61835 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_61835(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_61836 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_61836(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_61837 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_61837(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60067 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60067 = (function (ch,cs,meta60068){
this.ch = ch;
this.cs = cs;
this.meta60068 = meta60068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60069,meta60068__$1){
var self__ = this;
var _60069__$1 = this;
return (new cljs.core.async.t_cljs$core$async60067(self__.ch,self__.cs,meta60068__$1));
}));

(cljs.core.async.t_cljs$core$async60067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60069){
var self__ = this;
var _60069__$1 = this;
return self__.meta60068;
}));

(cljs.core.async.t_cljs$core$async60067.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async60067.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60067.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async60067.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async60067.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async60067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta60068","meta60068",1196166910,null)], null);
}));

(cljs.core.async.t_cljs$core$async60067.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60067");

(cljs.core.async.t_cljs$core$async60067.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60067");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60067.
 */
cljs.core.async.__GT_t_cljs$core$async60067 = (function cljs$core$async$mult_$___GT_t_cljs$core$async60067(ch__$1,cs__$1,meta60068){
return (new cljs.core.async.t_cljs$core$async60067(ch__$1,cs__$1,meta60068));
});

}

return (new cljs.core.async.t_cljs$core$async60067(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__59374__auto___61840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_60222){
var state_val_60223 = (state_60222[(1)]);
if((state_val_60223 === (7))){
var inst_60218 = (state_60222[(2)]);
var state_60222__$1 = state_60222;
var statearr_60224_61841 = state_60222__$1;
(statearr_60224_61841[(2)] = inst_60218);

(statearr_60224_61841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (20))){
var inst_60110 = (state_60222[(7)]);
var inst_60125 = cljs.core.first(inst_60110);
var inst_60126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60125,(0),null);
var inst_60131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60125,(1),null);
var state_60222__$1 = (function (){var statearr_60225 = state_60222;
(statearr_60225[(8)] = inst_60126);

return statearr_60225;
})();
if(cljs.core.truth_(inst_60131)){
var statearr_60226_61842 = state_60222__$1;
(statearr_60226_61842[(1)] = (22));

} else {
var statearr_60227_61843 = state_60222__$1;
(statearr_60227_61843[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (27))){
var inst_60169 = (state_60222[(9)]);
var inst_60076 = (state_60222[(10)]);
var inst_60164 = (state_60222[(11)]);
var inst_60162 = (state_60222[(12)]);
var inst_60169__$1 = cljs.core._nth(inst_60162,inst_60164);
var inst_60170 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_60169__$1,inst_60076,done);
var state_60222__$1 = (function (){var statearr_60231 = state_60222;
(statearr_60231[(9)] = inst_60169__$1);

return statearr_60231;
})();
if(cljs.core.truth_(inst_60170)){
var statearr_60232_61844 = state_60222__$1;
(statearr_60232_61844[(1)] = (30));

} else {
var statearr_60233_61845 = state_60222__$1;
(statearr_60233_61845[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (1))){
var state_60222__$1 = state_60222;
var statearr_60234_61846 = state_60222__$1;
(statearr_60234_61846[(2)] = null);

(statearr_60234_61846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (24))){
var inst_60110 = (state_60222[(7)]);
var inst_60136 = (state_60222[(2)]);
var inst_60137 = cljs.core.next(inst_60110);
var inst_60085 = inst_60137;
var inst_60086 = null;
var inst_60087 = (0);
var inst_60088 = (0);
var state_60222__$1 = (function (){var statearr_60235 = state_60222;
(statearr_60235[(13)] = inst_60086);

(statearr_60235[(14)] = inst_60136);

(statearr_60235[(15)] = inst_60088);

(statearr_60235[(16)] = inst_60087);

(statearr_60235[(17)] = inst_60085);

return statearr_60235;
})();
var statearr_60236_61847 = state_60222__$1;
(statearr_60236_61847[(2)] = null);

(statearr_60236_61847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (39))){
var state_60222__$1 = state_60222;
var statearr_60243_61848 = state_60222__$1;
(statearr_60243_61848[(2)] = null);

(statearr_60243_61848[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (4))){
var inst_60076 = (state_60222[(10)]);
var inst_60076__$1 = (state_60222[(2)]);
var inst_60077 = (inst_60076__$1 == null);
var state_60222__$1 = (function (){var statearr_60244 = state_60222;
(statearr_60244[(10)] = inst_60076__$1);

return statearr_60244;
})();
if(cljs.core.truth_(inst_60077)){
var statearr_60246_61849 = state_60222__$1;
(statearr_60246_61849[(1)] = (5));

} else {
var statearr_60247_61850 = state_60222__$1;
(statearr_60247_61850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (15))){
var inst_60086 = (state_60222[(13)]);
var inst_60088 = (state_60222[(15)]);
var inst_60087 = (state_60222[(16)]);
var inst_60085 = (state_60222[(17)]);
var inst_60106 = (state_60222[(2)]);
var inst_60107 = (inst_60088 + (1));
var tmp60239 = inst_60086;
var tmp60241 = inst_60087;
var tmp60242 = inst_60085;
var inst_60085__$1 = tmp60242;
var inst_60086__$1 = tmp60239;
var inst_60087__$1 = tmp60241;
var inst_60088__$1 = inst_60107;
var state_60222__$1 = (function (){var statearr_60250 = state_60222;
(statearr_60250[(13)] = inst_60086__$1);

(statearr_60250[(15)] = inst_60088__$1);

(statearr_60250[(16)] = inst_60087__$1);

(statearr_60250[(17)] = inst_60085__$1);

(statearr_60250[(18)] = inst_60106);

return statearr_60250;
})();
var statearr_60251_61851 = state_60222__$1;
(statearr_60251_61851[(2)] = null);

(statearr_60251_61851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (21))){
var inst_60140 = (state_60222[(2)]);
var state_60222__$1 = state_60222;
var statearr_60257_61852 = state_60222__$1;
(statearr_60257_61852[(2)] = inst_60140);

(statearr_60257_61852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (31))){
var inst_60169 = (state_60222[(9)]);
var inst_60176 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_60169);
var state_60222__$1 = state_60222;
var statearr_60259_61853 = state_60222__$1;
(statearr_60259_61853[(2)] = inst_60176);

(statearr_60259_61853[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (32))){
var inst_60163 = (state_60222[(19)]);
var inst_60164 = (state_60222[(11)]);
var inst_60162 = (state_60222[(12)]);
var inst_60161 = (state_60222[(20)]);
var inst_60178 = (state_60222[(2)]);
var inst_60179 = (inst_60164 + (1));
var tmp60252 = inst_60163;
var tmp60253 = inst_60162;
var tmp60254 = inst_60161;
var inst_60161__$1 = tmp60254;
var inst_60162__$1 = tmp60253;
var inst_60163__$1 = tmp60252;
var inst_60164__$1 = inst_60179;
var state_60222__$1 = (function (){var statearr_60260 = state_60222;
(statearr_60260[(19)] = inst_60163__$1);

(statearr_60260[(11)] = inst_60164__$1);

(statearr_60260[(21)] = inst_60178);

(statearr_60260[(12)] = inst_60162__$1);

(statearr_60260[(20)] = inst_60161__$1);

return statearr_60260;
})();
var statearr_60262_61854 = state_60222__$1;
(statearr_60262_61854[(2)] = null);

(statearr_60262_61854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (40))){
var inst_60191 = (state_60222[(22)]);
var inst_60195 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_60191);
var state_60222__$1 = state_60222;
var statearr_60263_61856 = state_60222__$1;
(statearr_60263_61856[(2)] = inst_60195);

(statearr_60263_61856[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (33))){
var inst_60182 = (state_60222[(23)]);
var inst_60184 = cljs.core.chunked_seq_QMARK_(inst_60182);
var state_60222__$1 = state_60222;
if(inst_60184){
var statearr_60264_61857 = state_60222__$1;
(statearr_60264_61857[(1)] = (36));

} else {
var statearr_60265_61859 = state_60222__$1;
(statearr_60265_61859[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (13))){
var inst_60100 = (state_60222[(24)]);
var inst_60103 = cljs.core.async.close_BANG_(inst_60100);
var state_60222__$1 = state_60222;
var statearr_60266_61867 = state_60222__$1;
(statearr_60266_61867[(2)] = inst_60103);

(statearr_60266_61867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (22))){
var inst_60126 = (state_60222[(8)]);
var inst_60133 = cljs.core.async.close_BANG_(inst_60126);
var state_60222__$1 = state_60222;
var statearr_60270_61869 = state_60222__$1;
(statearr_60270_61869[(2)] = inst_60133);

(statearr_60270_61869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (36))){
var inst_60182 = (state_60222[(23)]);
var inst_60186 = cljs.core.chunk_first(inst_60182);
var inst_60187 = cljs.core.chunk_rest(inst_60182);
var inst_60188 = cljs.core.count(inst_60186);
var inst_60161 = inst_60187;
var inst_60162 = inst_60186;
var inst_60163 = inst_60188;
var inst_60164 = (0);
var state_60222__$1 = (function (){var statearr_60271 = state_60222;
(statearr_60271[(19)] = inst_60163);

(statearr_60271[(11)] = inst_60164);

(statearr_60271[(12)] = inst_60162);

(statearr_60271[(20)] = inst_60161);

return statearr_60271;
})();
var statearr_60272_61873 = state_60222__$1;
(statearr_60272_61873[(2)] = null);

(statearr_60272_61873[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (41))){
var inst_60182 = (state_60222[(23)]);
var inst_60197 = (state_60222[(2)]);
var inst_60198 = cljs.core.next(inst_60182);
var inst_60161 = inst_60198;
var inst_60162 = null;
var inst_60163 = (0);
var inst_60164 = (0);
var state_60222__$1 = (function (){var statearr_60276 = state_60222;
(statearr_60276[(25)] = inst_60197);

(statearr_60276[(19)] = inst_60163);

(statearr_60276[(11)] = inst_60164);

(statearr_60276[(12)] = inst_60162);

(statearr_60276[(20)] = inst_60161);

return statearr_60276;
})();
var statearr_60277_61877 = state_60222__$1;
(statearr_60277_61877[(2)] = null);

(statearr_60277_61877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (43))){
var state_60222__$1 = state_60222;
var statearr_60279_61881 = state_60222__$1;
(statearr_60279_61881[(2)] = null);

(statearr_60279_61881[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (29))){
var inst_60206 = (state_60222[(2)]);
var state_60222__$1 = state_60222;
var statearr_60280_61882 = state_60222__$1;
(statearr_60280_61882[(2)] = inst_60206);

(statearr_60280_61882[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (44))){
var inst_60215 = (state_60222[(2)]);
var state_60222__$1 = (function (){var statearr_60281 = state_60222;
(statearr_60281[(26)] = inst_60215);

return statearr_60281;
})();
var statearr_60282_61883 = state_60222__$1;
(statearr_60282_61883[(2)] = null);

(statearr_60282_61883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (6))){
var inst_60150 = (state_60222[(27)]);
var inst_60149 = cljs.core.deref(cs);
var inst_60150__$1 = cljs.core.keys(inst_60149);
var inst_60151 = cljs.core.count(inst_60150__$1);
var inst_60152 = cljs.core.reset_BANG_(dctr,inst_60151);
var inst_60157 = cljs.core.seq(inst_60150__$1);
var inst_60161 = inst_60157;
var inst_60162 = null;
var inst_60163 = (0);
var inst_60164 = (0);
var state_60222__$1 = (function (){var statearr_60285 = state_60222;
(statearr_60285[(28)] = inst_60152);

(statearr_60285[(19)] = inst_60163);

(statearr_60285[(11)] = inst_60164);

(statearr_60285[(12)] = inst_60162);

(statearr_60285[(27)] = inst_60150__$1);

(statearr_60285[(20)] = inst_60161);

return statearr_60285;
})();
var statearr_60286_61890 = state_60222__$1;
(statearr_60286_61890[(2)] = null);

(statearr_60286_61890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (28))){
var inst_60182 = (state_60222[(23)]);
var inst_60161 = (state_60222[(20)]);
var inst_60182__$1 = cljs.core.seq(inst_60161);
var state_60222__$1 = (function (){var statearr_60287 = state_60222;
(statearr_60287[(23)] = inst_60182__$1);

return statearr_60287;
})();
if(inst_60182__$1){
var statearr_60288_61891 = state_60222__$1;
(statearr_60288_61891[(1)] = (33));

} else {
var statearr_60289_61892 = state_60222__$1;
(statearr_60289_61892[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (25))){
var inst_60163 = (state_60222[(19)]);
var inst_60164 = (state_60222[(11)]);
var inst_60166 = (inst_60164 < inst_60163);
var inst_60167 = inst_60166;
var state_60222__$1 = state_60222;
if(cljs.core.truth_(inst_60167)){
var statearr_60290_61893 = state_60222__$1;
(statearr_60290_61893[(1)] = (27));

} else {
var statearr_60291_61894 = state_60222__$1;
(statearr_60291_61894[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (34))){
var state_60222__$1 = state_60222;
var statearr_60292_61895 = state_60222__$1;
(statearr_60292_61895[(2)] = null);

(statearr_60292_61895[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (17))){
var state_60222__$1 = state_60222;
var statearr_60293_61896 = state_60222__$1;
(statearr_60293_61896[(2)] = null);

(statearr_60293_61896[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (3))){
var inst_60220 = (state_60222[(2)]);
var state_60222__$1 = state_60222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60222__$1,inst_60220);
} else {
if((state_val_60223 === (12))){
var inst_60145 = (state_60222[(2)]);
var state_60222__$1 = state_60222;
var statearr_60296_61897 = state_60222__$1;
(statearr_60296_61897[(2)] = inst_60145);

(statearr_60296_61897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (2))){
var state_60222__$1 = state_60222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60222__$1,(4),ch);
} else {
if((state_val_60223 === (23))){
var state_60222__$1 = state_60222;
var statearr_60298_61899 = state_60222__$1;
(statearr_60298_61899[(2)] = null);

(statearr_60298_61899[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (35))){
var inst_60204 = (state_60222[(2)]);
var state_60222__$1 = state_60222;
var statearr_60299_61900 = state_60222__$1;
(statearr_60299_61900[(2)] = inst_60204);

(statearr_60299_61900[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (19))){
var inst_60110 = (state_60222[(7)]);
var inst_60117 = cljs.core.chunk_first(inst_60110);
var inst_60118 = cljs.core.chunk_rest(inst_60110);
var inst_60119 = cljs.core.count(inst_60117);
var inst_60085 = inst_60118;
var inst_60086 = inst_60117;
var inst_60087 = inst_60119;
var inst_60088 = (0);
var state_60222__$1 = (function (){var statearr_60301 = state_60222;
(statearr_60301[(13)] = inst_60086);

(statearr_60301[(15)] = inst_60088);

(statearr_60301[(16)] = inst_60087);

(statearr_60301[(17)] = inst_60085);

return statearr_60301;
})();
var statearr_60302_61907 = state_60222__$1;
(statearr_60302_61907[(2)] = null);

(statearr_60302_61907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (11))){
var inst_60110 = (state_60222[(7)]);
var inst_60085 = (state_60222[(17)]);
var inst_60110__$1 = cljs.core.seq(inst_60085);
var state_60222__$1 = (function (){var statearr_60303 = state_60222;
(statearr_60303[(7)] = inst_60110__$1);

return statearr_60303;
})();
if(inst_60110__$1){
var statearr_60304_61908 = state_60222__$1;
(statearr_60304_61908[(1)] = (16));

} else {
var statearr_60305_61909 = state_60222__$1;
(statearr_60305_61909[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (9))){
var inst_60147 = (state_60222[(2)]);
var state_60222__$1 = state_60222;
var statearr_60306_61910 = state_60222__$1;
(statearr_60306_61910[(2)] = inst_60147);

(statearr_60306_61910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (5))){
var inst_60083 = cljs.core.deref(cs);
var inst_60084 = cljs.core.seq(inst_60083);
var inst_60085 = inst_60084;
var inst_60086 = null;
var inst_60087 = (0);
var inst_60088 = (0);
var state_60222__$1 = (function (){var statearr_60307 = state_60222;
(statearr_60307[(13)] = inst_60086);

(statearr_60307[(15)] = inst_60088);

(statearr_60307[(16)] = inst_60087);

(statearr_60307[(17)] = inst_60085);

return statearr_60307;
})();
var statearr_60308_61915 = state_60222__$1;
(statearr_60308_61915[(2)] = null);

(statearr_60308_61915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (14))){
var state_60222__$1 = state_60222;
var statearr_60309_61916 = state_60222__$1;
(statearr_60309_61916[(2)] = null);

(statearr_60309_61916[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (45))){
var inst_60212 = (state_60222[(2)]);
var state_60222__$1 = state_60222;
var statearr_60310_61920 = state_60222__$1;
(statearr_60310_61920[(2)] = inst_60212);

(statearr_60310_61920[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (26))){
var inst_60150 = (state_60222[(27)]);
var inst_60208 = (state_60222[(2)]);
var inst_60209 = cljs.core.seq(inst_60150);
var state_60222__$1 = (function (){var statearr_60311 = state_60222;
(statearr_60311[(29)] = inst_60208);

return statearr_60311;
})();
if(inst_60209){
var statearr_60312_61921 = state_60222__$1;
(statearr_60312_61921[(1)] = (42));

} else {
var statearr_60313_61925 = state_60222__$1;
(statearr_60313_61925[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (16))){
var inst_60110 = (state_60222[(7)]);
var inst_60115 = cljs.core.chunked_seq_QMARK_(inst_60110);
var state_60222__$1 = state_60222;
if(inst_60115){
var statearr_60314_61926 = state_60222__$1;
(statearr_60314_61926[(1)] = (19));

} else {
var statearr_60315_61928 = state_60222__$1;
(statearr_60315_61928[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (38))){
var inst_60201 = (state_60222[(2)]);
var state_60222__$1 = state_60222;
var statearr_60318_61934 = state_60222__$1;
(statearr_60318_61934[(2)] = inst_60201);

(statearr_60318_61934[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (30))){
var state_60222__$1 = state_60222;
var statearr_60319_61935 = state_60222__$1;
(statearr_60319_61935[(2)] = null);

(statearr_60319_61935[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (10))){
var inst_60086 = (state_60222[(13)]);
var inst_60088 = (state_60222[(15)]);
var inst_60099 = cljs.core._nth(inst_60086,inst_60088);
var inst_60100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60099,(0),null);
var inst_60101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60099,(1),null);
var state_60222__$1 = (function (){var statearr_60323 = state_60222;
(statearr_60323[(24)] = inst_60100);

return statearr_60323;
})();
if(cljs.core.truth_(inst_60101)){
var statearr_60325_61936 = state_60222__$1;
(statearr_60325_61936[(1)] = (13));

} else {
var statearr_60326_61937 = state_60222__$1;
(statearr_60326_61937[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (18))){
var inst_60143 = (state_60222[(2)]);
var state_60222__$1 = state_60222;
var statearr_60327_61938 = state_60222__$1;
(statearr_60327_61938[(2)] = inst_60143);

(statearr_60327_61938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (42))){
var state_60222__$1 = state_60222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60222__$1,(45),dchan);
} else {
if((state_val_60223 === (37))){
var inst_60182 = (state_60222[(23)]);
var inst_60076 = (state_60222[(10)]);
var inst_60191 = (state_60222[(22)]);
var inst_60191__$1 = cljs.core.first(inst_60182);
var inst_60192 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_60191__$1,inst_60076,done);
var state_60222__$1 = (function (){var statearr_60331 = state_60222;
(statearr_60331[(22)] = inst_60191__$1);

return statearr_60331;
})();
if(cljs.core.truth_(inst_60192)){
var statearr_60333_61939 = state_60222__$1;
(statearr_60333_61939[(1)] = (39));

} else {
var statearr_60335_61940 = state_60222__$1;
(statearr_60335_61940[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60223 === (8))){
var inst_60088 = (state_60222[(15)]);
var inst_60087 = (state_60222[(16)]);
var inst_60090 = (inst_60088 < inst_60087);
var inst_60091 = inst_60090;
var state_60222__$1 = state_60222;
if(cljs.core.truth_(inst_60091)){
var statearr_60340_61944 = state_60222__$1;
(statearr_60340_61944[(1)] = (10));

} else {
var statearr_60342_61945 = state_60222__$1;
(statearr_60342_61945[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__59114__auto__ = null;
var cljs$core$async$mult_$_state_machine__59114__auto____0 = (function (){
var statearr_60347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60347[(0)] = cljs$core$async$mult_$_state_machine__59114__auto__);

(statearr_60347[(1)] = (1));

return statearr_60347;
});
var cljs$core$async$mult_$_state_machine__59114__auto____1 = (function (state_60222){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_60222);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e60348){var ex__59117__auto__ = e60348;
var statearr_60349_61946 = state_60222;
(statearr_60349_61946[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_60222[(4)]))){
var statearr_60350_61947 = state_60222;
(statearr_60350_61947[(1)] = cljs.core.first((state_60222[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61948 = state_60222;
state_60222 = G__61948;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__59114__auto__ = function(state_60222){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__59114__auto____1.call(this,state_60222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__59114__auto____0;
cljs$core$async$mult_$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__59114__auto____1;
return cljs$core$async$mult_$_state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_60352 = f__59375__auto__();
(statearr_60352[(6)] = c__59374__auto___61840);

return statearr_60352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__60356 = arguments.length;
switch (G__60356) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_61950 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_61950(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_61954 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_61954(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_61956 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_61956(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_61957 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_61957(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_61958 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_61958(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___61960 = arguments.length;
var i__4737__auto___61962 = (0);
while(true){
if((i__4737__auto___61962 < len__4736__auto___61960)){
args__4742__auto__.push((arguments[i__4737__auto___61962]));

var G__61964 = (i__4737__auto___61962 + (1));
i__4737__auto___61962 = G__61964;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__60371){
var map__60372 = p__60371;
var map__60372__$1 = (((((!((map__60372 == null))))?(((((map__60372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60372):map__60372);
var opts = map__60372__$1;
var statearr_60374_61967 = state;
(statearr_60374_61967[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_60375_61969 = state;
(statearr_60375_61969[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_60376_61972 = state;
(statearr_60376_61972[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq60367){
var G__60368 = cljs.core.first(seq60367);
var seq60367__$1 = cljs.core.next(seq60367);
var G__60369 = cljs.core.first(seq60367__$1);
var seq60367__$2 = cljs.core.next(seq60367__$1);
var G__60370 = cljs.core.first(seq60367__$2);
var seq60367__$3 = cljs.core.next(seq60367__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60368,G__60369,G__60370,seq60367__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60385 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta60386){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta60386 = meta60386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60387,meta60386__$1){
var self__ = this;
var _60387__$1 = this;
return (new cljs.core.async.t_cljs$core$async60385(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta60386__$1));
}));

(cljs.core.async.t_cljs$core$async60385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60387){
var self__ = this;
var _60387__$1 = this;
return self__.meta60386;
}));

(cljs.core.async.t_cljs$core$async60385.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60385.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async60385.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60385.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60385.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60385.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60385.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60385.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async60385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta60386","meta60386",1435277027,null)], null);
}));

(cljs.core.async.t_cljs$core$async60385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60385");

(cljs.core.async.t_cljs$core$async60385.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60385.
 */
cljs.core.async.__GT_t_cljs$core$async60385 = (function cljs$core$async$mix_$___GT_t_cljs$core$async60385(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta60386){
return (new cljs.core.async.t_cljs$core$async60385(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta60386));
});

}

return (new cljs.core.async.t_cljs$core$async60385(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__59374__auto___62004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_60523){
var state_val_60524 = (state_60523[(1)]);
if((state_val_60524 === (7))){
var inst_60426 = (state_60523[(2)]);
var state_60523__$1 = state_60523;
var statearr_60526_62005 = state_60523__$1;
(statearr_60526_62005[(2)] = inst_60426);

(statearr_60526_62005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (20))){
var inst_60438 = (state_60523[(7)]);
var state_60523__$1 = state_60523;
var statearr_60532_62006 = state_60523__$1;
(statearr_60532_62006[(2)] = inst_60438);

(statearr_60532_62006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (27))){
var state_60523__$1 = state_60523;
var statearr_60533_62007 = state_60523__$1;
(statearr_60533_62007[(2)] = null);

(statearr_60533_62007[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (1))){
var inst_60412 = (state_60523[(8)]);
var inst_60412__$1 = calc_state();
var inst_60415 = (inst_60412__$1 == null);
var inst_60416 = cljs.core.not(inst_60415);
var state_60523__$1 = (function (){var statearr_60534 = state_60523;
(statearr_60534[(8)] = inst_60412__$1);

return statearr_60534;
})();
if(inst_60416){
var statearr_60536_62012 = state_60523__$1;
(statearr_60536_62012[(1)] = (2));

} else {
var statearr_60538_62013 = state_60523__$1;
(statearr_60538_62013[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (24))){
var inst_60469 = (state_60523[(9)]);
var inst_60478 = (state_60523[(10)]);
var inst_60493 = (state_60523[(11)]);
var inst_60493__$1 = (inst_60469.cljs$core$IFn$_invoke$arity$1 ? inst_60469.cljs$core$IFn$_invoke$arity$1(inst_60478) : inst_60469.call(null,inst_60478));
var state_60523__$1 = (function (){var statearr_60539 = state_60523;
(statearr_60539[(11)] = inst_60493__$1);

return statearr_60539;
})();
if(cljs.core.truth_(inst_60493__$1)){
var statearr_60540_62014 = state_60523__$1;
(statearr_60540_62014[(1)] = (29));

} else {
var statearr_60541_62016 = state_60523__$1;
(statearr_60541_62016[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (4))){
var inst_60429 = (state_60523[(2)]);
var state_60523__$1 = state_60523;
if(cljs.core.truth_(inst_60429)){
var statearr_60543_62020 = state_60523__$1;
(statearr_60543_62020[(1)] = (8));

} else {
var statearr_60544_62021 = state_60523__$1;
(statearr_60544_62021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (15))){
var inst_60463 = (state_60523[(2)]);
var state_60523__$1 = state_60523;
if(cljs.core.truth_(inst_60463)){
var statearr_60546_62022 = state_60523__$1;
(statearr_60546_62022[(1)] = (19));

} else {
var statearr_60549_62023 = state_60523__$1;
(statearr_60549_62023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (21))){
var inst_60468 = (state_60523[(12)]);
var inst_60468__$1 = (state_60523[(2)]);
var inst_60469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60468__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60468__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60468__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_60523__$1 = (function (){var statearr_60551 = state_60523;
(statearr_60551[(13)] = inst_60470);

(statearr_60551[(9)] = inst_60469);

(statearr_60551[(12)] = inst_60468__$1);

return statearr_60551;
})();
return cljs.core.async.ioc_alts_BANG_(state_60523__$1,(22),inst_60471);
} else {
if((state_val_60524 === (31))){
var inst_60502 = (state_60523[(2)]);
var state_60523__$1 = state_60523;
if(cljs.core.truth_(inst_60502)){
var statearr_60552_62024 = state_60523__$1;
(statearr_60552_62024[(1)] = (32));

} else {
var statearr_60553_62025 = state_60523__$1;
(statearr_60553_62025[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (32))){
var inst_60477 = (state_60523[(14)]);
var state_60523__$1 = state_60523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60523__$1,(35),out,inst_60477);
} else {
if((state_val_60524 === (33))){
var inst_60468 = (state_60523[(12)]);
var inst_60438 = inst_60468;
var state_60523__$1 = (function (){var statearr_60557 = state_60523;
(statearr_60557[(7)] = inst_60438);

return statearr_60557;
})();
var statearr_60558_62026 = state_60523__$1;
(statearr_60558_62026[(2)] = null);

(statearr_60558_62026[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (13))){
var inst_60438 = (state_60523[(7)]);
var inst_60452 = inst_60438.cljs$lang$protocol_mask$partition0$;
var inst_60453 = (inst_60452 & (64));
var inst_60454 = inst_60438.cljs$core$ISeq$;
var inst_60455 = (cljs.core.PROTOCOL_SENTINEL === inst_60454);
var inst_60456 = ((inst_60453) || (inst_60455));
var state_60523__$1 = state_60523;
if(cljs.core.truth_(inst_60456)){
var statearr_60562_62027 = state_60523__$1;
(statearr_60562_62027[(1)] = (16));

} else {
var statearr_60563_62029 = state_60523__$1;
(statearr_60563_62029[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (22))){
var inst_60477 = (state_60523[(14)]);
var inst_60478 = (state_60523[(10)]);
var inst_60476 = (state_60523[(2)]);
var inst_60477__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60476,(0),null);
var inst_60478__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60476,(1),null);
var inst_60479 = (inst_60477__$1 == null);
var inst_60480 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60478__$1,change);
var inst_60481 = ((inst_60479) || (inst_60480));
var state_60523__$1 = (function (){var statearr_60568 = state_60523;
(statearr_60568[(14)] = inst_60477__$1);

(statearr_60568[(10)] = inst_60478__$1);

return statearr_60568;
})();
if(cljs.core.truth_(inst_60481)){
var statearr_60569_62030 = state_60523__$1;
(statearr_60569_62030[(1)] = (23));

} else {
var statearr_60570_62031 = state_60523__$1;
(statearr_60570_62031[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (36))){
var inst_60468 = (state_60523[(12)]);
var inst_60438 = inst_60468;
var state_60523__$1 = (function (){var statearr_60573 = state_60523;
(statearr_60573[(7)] = inst_60438);

return statearr_60573;
})();
var statearr_60575_62035 = state_60523__$1;
(statearr_60575_62035[(2)] = null);

(statearr_60575_62035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (29))){
var inst_60493 = (state_60523[(11)]);
var state_60523__$1 = state_60523;
var statearr_60576_62036 = state_60523__$1;
(statearr_60576_62036[(2)] = inst_60493);

(statearr_60576_62036[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (6))){
var state_60523__$1 = state_60523;
var statearr_60579_62037 = state_60523__$1;
(statearr_60579_62037[(2)] = false);

(statearr_60579_62037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (28))){
var inst_60488 = (state_60523[(2)]);
var inst_60489 = calc_state();
var inst_60438 = inst_60489;
var state_60523__$1 = (function (){var statearr_60581 = state_60523;
(statearr_60581[(15)] = inst_60488);

(statearr_60581[(7)] = inst_60438);

return statearr_60581;
})();
var statearr_60582_62039 = state_60523__$1;
(statearr_60582_62039[(2)] = null);

(statearr_60582_62039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (25))){
var inst_60516 = (state_60523[(2)]);
var state_60523__$1 = state_60523;
var statearr_60583_62041 = state_60523__$1;
(statearr_60583_62041[(2)] = inst_60516);

(statearr_60583_62041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (34))){
var inst_60514 = (state_60523[(2)]);
var state_60523__$1 = state_60523;
var statearr_60584_62042 = state_60523__$1;
(statearr_60584_62042[(2)] = inst_60514);

(statearr_60584_62042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (17))){
var state_60523__$1 = state_60523;
var statearr_60585_62043 = state_60523__$1;
(statearr_60585_62043[(2)] = false);

(statearr_60585_62043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (3))){
var state_60523__$1 = state_60523;
var statearr_60586_62044 = state_60523__$1;
(statearr_60586_62044[(2)] = false);

(statearr_60586_62044[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (12))){
var inst_60518 = (state_60523[(2)]);
var state_60523__$1 = state_60523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60523__$1,inst_60518);
} else {
if((state_val_60524 === (2))){
var inst_60412 = (state_60523[(8)]);
var inst_60418 = inst_60412.cljs$lang$protocol_mask$partition0$;
var inst_60419 = (inst_60418 & (64));
var inst_60420 = inst_60412.cljs$core$ISeq$;
var inst_60421 = (cljs.core.PROTOCOL_SENTINEL === inst_60420);
var inst_60422 = ((inst_60419) || (inst_60421));
var state_60523__$1 = state_60523;
if(cljs.core.truth_(inst_60422)){
var statearr_60590_62049 = state_60523__$1;
(statearr_60590_62049[(1)] = (5));

} else {
var statearr_60591_62050 = state_60523__$1;
(statearr_60591_62050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (23))){
var inst_60477 = (state_60523[(14)]);
var inst_60483 = (inst_60477 == null);
var state_60523__$1 = state_60523;
if(cljs.core.truth_(inst_60483)){
var statearr_60592_62051 = state_60523__$1;
(statearr_60592_62051[(1)] = (26));

} else {
var statearr_60593_62052 = state_60523__$1;
(statearr_60593_62052[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (35))){
var inst_60505 = (state_60523[(2)]);
var state_60523__$1 = state_60523;
if(cljs.core.truth_(inst_60505)){
var statearr_60594_62053 = state_60523__$1;
(statearr_60594_62053[(1)] = (36));

} else {
var statearr_60595_62055 = state_60523__$1;
(statearr_60595_62055[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (19))){
var inst_60438 = (state_60523[(7)]);
var inst_60465 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60438);
var state_60523__$1 = state_60523;
var statearr_60596_62056 = state_60523__$1;
(statearr_60596_62056[(2)] = inst_60465);

(statearr_60596_62056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (11))){
var inst_60438 = (state_60523[(7)]);
var inst_60448 = (inst_60438 == null);
var inst_60449 = cljs.core.not(inst_60448);
var state_60523__$1 = state_60523;
if(inst_60449){
var statearr_60597_62058 = state_60523__$1;
(statearr_60597_62058[(1)] = (13));

} else {
var statearr_60598_62059 = state_60523__$1;
(statearr_60598_62059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (9))){
var inst_60412 = (state_60523[(8)]);
var state_60523__$1 = state_60523;
var statearr_60599_62060 = state_60523__$1;
(statearr_60599_62060[(2)] = inst_60412);

(statearr_60599_62060[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (5))){
var state_60523__$1 = state_60523;
var statearr_60600_62061 = state_60523__$1;
(statearr_60600_62061[(2)] = true);

(statearr_60600_62061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (14))){
var state_60523__$1 = state_60523;
var statearr_60601_62062 = state_60523__$1;
(statearr_60601_62062[(2)] = false);

(statearr_60601_62062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (26))){
var inst_60478 = (state_60523[(10)]);
var inst_60485 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_60478);
var state_60523__$1 = state_60523;
var statearr_60605_62063 = state_60523__$1;
(statearr_60605_62063[(2)] = inst_60485);

(statearr_60605_62063[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (16))){
var state_60523__$1 = state_60523;
var statearr_60607_62064 = state_60523__$1;
(statearr_60607_62064[(2)] = true);

(statearr_60607_62064[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (38))){
var inst_60510 = (state_60523[(2)]);
var state_60523__$1 = state_60523;
var statearr_60608_62065 = state_60523__$1;
(statearr_60608_62065[(2)] = inst_60510);

(statearr_60608_62065[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (30))){
var inst_60470 = (state_60523[(13)]);
var inst_60469 = (state_60523[(9)]);
var inst_60478 = (state_60523[(10)]);
var inst_60497 = cljs.core.empty_QMARK_(inst_60469);
var inst_60498 = (inst_60470.cljs$core$IFn$_invoke$arity$1 ? inst_60470.cljs$core$IFn$_invoke$arity$1(inst_60478) : inst_60470.call(null,inst_60478));
var inst_60499 = cljs.core.not(inst_60498);
var inst_60500 = ((inst_60497) && (inst_60499));
var state_60523__$1 = state_60523;
var statearr_60610_62066 = state_60523__$1;
(statearr_60610_62066[(2)] = inst_60500);

(statearr_60610_62066[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (10))){
var inst_60412 = (state_60523[(8)]);
var inst_60434 = (state_60523[(2)]);
var inst_60435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60434,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_60436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60434,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_60437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60434,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_60438 = inst_60412;
var state_60523__$1 = (function (){var statearr_60614 = state_60523;
(statearr_60614[(16)] = inst_60436);

(statearr_60614[(7)] = inst_60438);

(statearr_60614[(17)] = inst_60437);

(statearr_60614[(18)] = inst_60435);

return statearr_60614;
})();
var statearr_60616_62068 = state_60523__$1;
(statearr_60616_62068[(2)] = null);

(statearr_60616_62068[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (18))){
var inst_60460 = (state_60523[(2)]);
var state_60523__$1 = state_60523;
var statearr_60618_62069 = state_60523__$1;
(statearr_60618_62069[(2)] = inst_60460);

(statearr_60618_62069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (37))){
var state_60523__$1 = state_60523;
var statearr_60619_62070 = state_60523__$1;
(statearr_60619_62070[(2)] = null);

(statearr_60619_62070[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60524 === (8))){
var inst_60412 = (state_60523[(8)]);
var inst_60431 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_60412);
var state_60523__$1 = state_60523;
var statearr_60621_62071 = state_60523__$1;
(statearr_60621_62071[(2)] = inst_60431);

(statearr_60621_62071[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__59114__auto__ = null;
var cljs$core$async$mix_$_state_machine__59114__auto____0 = (function (){
var statearr_60622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60622[(0)] = cljs$core$async$mix_$_state_machine__59114__auto__);

(statearr_60622[(1)] = (1));

return statearr_60622;
});
var cljs$core$async$mix_$_state_machine__59114__auto____1 = (function (state_60523){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_60523);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e60623){var ex__59117__auto__ = e60623;
var statearr_60624_62074 = state_60523;
(statearr_60624_62074[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_60523[(4)]))){
var statearr_60625_62075 = state_60523;
(statearr_60625_62075[(1)] = cljs.core.first((state_60523[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62076 = state_60523;
state_60523 = G__62076;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__59114__auto__ = function(state_60523){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__59114__auto____1.call(this,state_60523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__59114__auto____0;
cljs$core$async$mix_$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__59114__auto____1;
return cljs$core$async$mix_$_state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_60632 = f__59375__auto__();
(statearr_60632[(6)] = c__59374__auto___62004);

return statearr_60632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_62077 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_62077(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_62078 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_62078(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_62082 = (function() {
var G__62083 = null;
var G__62083__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__62083__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__62083 = function(p,v){
switch(arguments.length){
case 1:
return G__62083__1.call(this,p);
case 2:
return G__62083__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__62083.cljs$core$IFn$_invoke$arity$1 = G__62083__1;
G__62083.cljs$core$IFn$_invoke$arity$2 = G__62083__2;
return G__62083;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__60644 = arguments.length;
switch (G__60644) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_62082(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_62082(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__60660 = arguments.length;
switch (G__60660) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__60658_SHARP_){
if(cljs.core.truth_((p1__60658_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__60658_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__60658_SHARP_.call(null,topic)))){
return p1__60658_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60658_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async60661 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60661 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta60662){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta60662 = meta60662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async60661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60663,meta60662__$1){
var self__ = this;
var _60663__$1 = this;
return (new cljs.core.async.t_cljs$core$async60661(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta60662__$1));
}));

(cljs.core.async.t_cljs$core$async60661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60663){
var self__ = this;
var _60663__$1 = this;
return self__.meta60662;
}));

(cljs.core.async.t_cljs$core$async60661.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60661.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async60661.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async60661.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async60661.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async60661.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async60661.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async60661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta60662","meta60662",-719316215,null)], null);
}));

(cljs.core.async.t_cljs$core$async60661.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async60661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60661");

(cljs.core.async.t_cljs$core$async60661.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async60661");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async60661.
 */
cljs.core.async.__GT_t_cljs$core$async60661 = (function cljs$core$async$__GT_t_cljs$core$async60661(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60662){
return (new cljs.core.async.t_cljs$core$async60661(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta60662));
});

}

return (new cljs.core.async.t_cljs$core$async60661(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__59374__auto___62094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_60748){
var state_val_60749 = (state_60748[(1)]);
if((state_val_60749 === (7))){
var inst_60744 = (state_60748[(2)]);
var state_60748__$1 = state_60748;
var statearr_60750_62095 = state_60748__$1;
(statearr_60750_62095[(2)] = inst_60744);

(statearr_60750_62095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (20))){
var state_60748__$1 = state_60748;
var statearr_60751_62096 = state_60748__$1;
(statearr_60751_62096[(2)] = null);

(statearr_60751_62096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (1))){
var state_60748__$1 = state_60748;
var statearr_60752_62097 = state_60748__$1;
(statearr_60752_62097[(2)] = null);

(statearr_60752_62097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (24))){
var inst_60727 = (state_60748[(7)]);
var inst_60736 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_60727);
var state_60748__$1 = state_60748;
var statearr_60753_62100 = state_60748__$1;
(statearr_60753_62100[(2)] = inst_60736);

(statearr_60753_62100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (4))){
var inst_60671 = (state_60748[(8)]);
var inst_60671__$1 = (state_60748[(2)]);
var inst_60672 = (inst_60671__$1 == null);
var state_60748__$1 = (function (){var statearr_60755 = state_60748;
(statearr_60755[(8)] = inst_60671__$1);

return statearr_60755;
})();
if(cljs.core.truth_(inst_60672)){
var statearr_60756_62103 = state_60748__$1;
(statearr_60756_62103[(1)] = (5));

} else {
var statearr_60757_62104 = state_60748__$1;
(statearr_60757_62104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (15))){
var inst_60721 = (state_60748[(2)]);
var state_60748__$1 = state_60748;
var statearr_60758_62105 = state_60748__$1;
(statearr_60758_62105[(2)] = inst_60721);

(statearr_60758_62105[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (21))){
var inst_60741 = (state_60748[(2)]);
var state_60748__$1 = (function (){var statearr_60759 = state_60748;
(statearr_60759[(9)] = inst_60741);

return statearr_60759;
})();
var statearr_60760_62106 = state_60748__$1;
(statearr_60760_62106[(2)] = null);

(statearr_60760_62106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (13))){
var inst_60703 = (state_60748[(10)]);
var inst_60705 = cljs.core.chunked_seq_QMARK_(inst_60703);
var state_60748__$1 = state_60748;
if(inst_60705){
var statearr_60761_62107 = state_60748__$1;
(statearr_60761_62107[(1)] = (16));

} else {
var statearr_60762_62108 = state_60748__$1;
(statearr_60762_62108[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (22))){
var inst_60733 = (state_60748[(2)]);
var state_60748__$1 = state_60748;
if(cljs.core.truth_(inst_60733)){
var statearr_60763_62109 = state_60748__$1;
(statearr_60763_62109[(1)] = (23));

} else {
var statearr_60764_62110 = state_60748__$1;
(statearr_60764_62110[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (6))){
var inst_60671 = (state_60748[(8)]);
var inst_60727 = (state_60748[(7)]);
var inst_60729 = (state_60748[(11)]);
var inst_60727__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_60671) : topic_fn.call(null,inst_60671));
var inst_60728 = cljs.core.deref(mults);
var inst_60729__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_60728,inst_60727__$1);
var state_60748__$1 = (function (){var statearr_60765 = state_60748;
(statearr_60765[(7)] = inst_60727__$1);

(statearr_60765[(11)] = inst_60729__$1);

return statearr_60765;
})();
if(cljs.core.truth_(inst_60729__$1)){
var statearr_60766_62111 = state_60748__$1;
(statearr_60766_62111[(1)] = (19));

} else {
var statearr_60767_62112 = state_60748__$1;
(statearr_60767_62112[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (25))){
var inst_60738 = (state_60748[(2)]);
var state_60748__$1 = state_60748;
var statearr_60768_62113 = state_60748__$1;
(statearr_60768_62113[(2)] = inst_60738);

(statearr_60768_62113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (17))){
var inst_60703 = (state_60748[(10)]);
var inst_60712 = cljs.core.first(inst_60703);
var inst_60713 = cljs.core.async.muxch_STAR_(inst_60712);
var inst_60714 = cljs.core.async.close_BANG_(inst_60713);
var inst_60715 = cljs.core.next(inst_60703);
var inst_60681 = inst_60715;
var inst_60682 = null;
var inst_60683 = (0);
var inst_60684 = (0);
var state_60748__$1 = (function (){var statearr_60769 = state_60748;
(statearr_60769[(12)] = inst_60681);

(statearr_60769[(13)] = inst_60684);

(statearr_60769[(14)] = inst_60682);

(statearr_60769[(15)] = inst_60714);

(statearr_60769[(16)] = inst_60683);

return statearr_60769;
})();
var statearr_60770_62114 = state_60748__$1;
(statearr_60770_62114[(2)] = null);

(statearr_60770_62114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (3))){
var inst_60746 = (state_60748[(2)]);
var state_60748__$1 = state_60748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60748__$1,inst_60746);
} else {
if((state_val_60749 === (12))){
var inst_60723 = (state_60748[(2)]);
var state_60748__$1 = state_60748;
var statearr_60771_62116 = state_60748__$1;
(statearr_60771_62116[(2)] = inst_60723);

(statearr_60771_62116[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (2))){
var state_60748__$1 = state_60748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60748__$1,(4),ch);
} else {
if((state_val_60749 === (23))){
var state_60748__$1 = state_60748;
var statearr_60772_62117 = state_60748__$1;
(statearr_60772_62117[(2)] = null);

(statearr_60772_62117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (19))){
var inst_60671 = (state_60748[(8)]);
var inst_60729 = (state_60748[(11)]);
var inst_60731 = cljs.core.async.muxch_STAR_(inst_60729);
var state_60748__$1 = state_60748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60748__$1,(22),inst_60731,inst_60671);
} else {
if((state_val_60749 === (11))){
var inst_60681 = (state_60748[(12)]);
var inst_60703 = (state_60748[(10)]);
var inst_60703__$1 = cljs.core.seq(inst_60681);
var state_60748__$1 = (function (){var statearr_60773 = state_60748;
(statearr_60773[(10)] = inst_60703__$1);

return statearr_60773;
})();
if(inst_60703__$1){
var statearr_60774_62118 = state_60748__$1;
(statearr_60774_62118[(1)] = (13));

} else {
var statearr_60775_62119 = state_60748__$1;
(statearr_60775_62119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (9))){
var inst_60725 = (state_60748[(2)]);
var state_60748__$1 = state_60748;
var statearr_60777_62122 = state_60748__$1;
(statearr_60777_62122[(2)] = inst_60725);

(statearr_60777_62122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (5))){
var inst_60678 = cljs.core.deref(mults);
var inst_60679 = cljs.core.vals(inst_60678);
var inst_60680 = cljs.core.seq(inst_60679);
var inst_60681 = inst_60680;
var inst_60682 = null;
var inst_60683 = (0);
var inst_60684 = (0);
var state_60748__$1 = (function (){var statearr_60780 = state_60748;
(statearr_60780[(12)] = inst_60681);

(statearr_60780[(13)] = inst_60684);

(statearr_60780[(14)] = inst_60682);

(statearr_60780[(16)] = inst_60683);

return statearr_60780;
})();
var statearr_60781_62123 = state_60748__$1;
(statearr_60781_62123[(2)] = null);

(statearr_60781_62123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (14))){
var state_60748__$1 = state_60748;
var statearr_60785_62124 = state_60748__$1;
(statearr_60785_62124[(2)] = null);

(statearr_60785_62124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (16))){
var inst_60703 = (state_60748[(10)]);
var inst_60707 = cljs.core.chunk_first(inst_60703);
var inst_60708 = cljs.core.chunk_rest(inst_60703);
var inst_60709 = cljs.core.count(inst_60707);
var inst_60681 = inst_60708;
var inst_60682 = inst_60707;
var inst_60683 = inst_60709;
var inst_60684 = (0);
var state_60748__$1 = (function (){var statearr_60787 = state_60748;
(statearr_60787[(12)] = inst_60681);

(statearr_60787[(13)] = inst_60684);

(statearr_60787[(14)] = inst_60682);

(statearr_60787[(16)] = inst_60683);

return statearr_60787;
})();
var statearr_60788_62125 = state_60748__$1;
(statearr_60788_62125[(2)] = null);

(statearr_60788_62125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (10))){
var inst_60681 = (state_60748[(12)]);
var inst_60684 = (state_60748[(13)]);
var inst_60682 = (state_60748[(14)]);
var inst_60683 = (state_60748[(16)]);
var inst_60691 = cljs.core._nth(inst_60682,inst_60684);
var inst_60692 = cljs.core.async.muxch_STAR_(inst_60691);
var inst_60693 = cljs.core.async.close_BANG_(inst_60692);
var inst_60694 = (inst_60684 + (1));
var tmp60782 = inst_60681;
var tmp60783 = inst_60682;
var tmp60784 = inst_60683;
var inst_60681__$1 = tmp60782;
var inst_60682__$1 = tmp60783;
var inst_60683__$1 = tmp60784;
var inst_60684__$1 = inst_60694;
var state_60748__$1 = (function (){var statearr_60789 = state_60748;
(statearr_60789[(12)] = inst_60681__$1);

(statearr_60789[(13)] = inst_60684__$1);

(statearr_60789[(17)] = inst_60693);

(statearr_60789[(14)] = inst_60682__$1);

(statearr_60789[(16)] = inst_60683__$1);

return statearr_60789;
})();
var statearr_60790_62128 = state_60748__$1;
(statearr_60790_62128[(2)] = null);

(statearr_60790_62128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (18))){
var inst_60718 = (state_60748[(2)]);
var state_60748__$1 = state_60748;
var statearr_60791_62129 = state_60748__$1;
(statearr_60791_62129[(2)] = inst_60718);

(statearr_60791_62129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60749 === (8))){
var inst_60684 = (state_60748[(13)]);
var inst_60683 = (state_60748[(16)]);
var inst_60686 = (inst_60684 < inst_60683);
var inst_60687 = inst_60686;
var state_60748__$1 = state_60748;
if(cljs.core.truth_(inst_60687)){
var statearr_60792_62130 = state_60748__$1;
(statearr_60792_62130[(1)] = (10));

} else {
var statearr_60793_62131 = state_60748__$1;
(statearr_60793_62131[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59114__auto__ = null;
var cljs$core$async$state_machine__59114__auto____0 = (function (){
var statearr_60794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60794[(0)] = cljs$core$async$state_machine__59114__auto__);

(statearr_60794[(1)] = (1));

return statearr_60794;
});
var cljs$core$async$state_machine__59114__auto____1 = (function (state_60748){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_60748);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e60795){var ex__59117__auto__ = e60795;
var statearr_60796_62132 = state_60748;
(statearr_60796_62132[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_60748[(4)]))){
var statearr_60797_62133 = state_60748;
(statearr_60797_62133[(1)] = cljs.core.first((state_60748[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62134 = state_60748;
state_60748 = G__62134;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$state_machine__59114__auto__ = function(state_60748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59114__auto____1.call(this,state_60748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59114__auto____0;
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59114__auto____1;
return cljs$core$async$state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_60798 = f__59375__auto__();
(statearr_60798[(6)] = c__59374__auto___62094);

return statearr_60798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__60800 = arguments.length;
switch (G__60800) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__60803 = arguments.length;
switch (G__60803) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__60805 = arguments.length;
switch (G__60805) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__59374__auto___62138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_60859){
var state_val_60860 = (state_60859[(1)]);
if((state_val_60860 === (7))){
var state_60859__$1 = state_60859;
var statearr_60864_62139 = state_60859__$1;
(statearr_60864_62139[(2)] = null);

(statearr_60864_62139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60860 === (1))){
var state_60859__$1 = state_60859;
var statearr_60865_62141 = state_60859__$1;
(statearr_60865_62141[(2)] = null);

(statearr_60865_62141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60860 === (4))){
var inst_60815 = (state_60859[(7)]);
var inst_60814 = (state_60859[(8)]);
var inst_60817 = (inst_60815 < inst_60814);
var state_60859__$1 = state_60859;
if(cljs.core.truth_(inst_60817)){
var statearr_60866_62144 = state_60859__$1;
(statearr_60866_62144[(1)] = (6));

} else {
var statearr_60867_62145 = state_60859__$1;
(statearr_60867_62145[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60860 === (15))){
var inst_60844 = (state_60859[(9)]);
var inst_60849 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_60844);
var state_60859__$1 = state_60859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60859__$1,(17),out,inst_60849);
} else {
if((state_val_60860 === (13))){
var inst_60844 = (state_60859[(9)]);
var inst_60844__$1 = (state_60859[(2)]);
var inst_60845 = cljs.core.some(cljs.core.nil_QMARK_,inst_60844__$1);
var state_60859__$1 = (function (){var statearr_60871 = state_60859;
(statearr_60871[(9)] = inst_60844__$1);

return statearr_60871;
})();
if(cljs.core.truth_(inst_60845)){
var statearr_60872_62146 = state_60859__$1;
(statearr_60872_62146[(1)] = (14));

} else {
var statearr_60873_62147 = state_60859__$1;
(statearr_60873_62147[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60860 === (6))){
var state_60859__$1 = state_60859;
var statearr_60874_62150 = state_60859__$1;
(statearr_60874_62150[(2)] = null);

(statearr_60874_62150[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60860 === (17))){
var inst_60851 = (state_60859[(2)]);
var state_60859__$1 = (function (){var statearr_60877 = state_60859;
(statearr_60877[(10)] = inst_60851);

return statearr_60877;
})();
var statearr_60880_62152 = state_60859__$1;
(statearr_60880_62152[(2)] = null);

(statearr_60880_62152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60860 === (3))){
var inst_60856 = (state_60859[(2)]);
var state_60859__$1 = state_60859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60859__$1,inst_60856);
} else {
if((state_val_60860 === (12))){
var _ = (function (){var statearr_60882 = state_60859;
(statearr_60882[(4)] = cljs.core.rest((state_60859[(4)])));

return statearr_60882;
})();
var state_60859__$1 = state_60859;
var ex60876 = (state_60859__$1[(2)]);
var statearr_60883_62156 = state_60859__$1;
(statearr_60883_62156[(5)] = ex60876);


if((ex60876 instanceof Object)){
var statearr_60885_62158 = state_60859__$1;
(statearr_60885_62158[(1)] = (11));

(statearr_60885_62158[(5)] = null);

} else {
throw ex60876;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60860 === (2))){
var inst_60813 = cljs.core.reset_BANG_(dctr,cnt);
var inst_60814 = cnt;
var inst_60815 = (0);
var state_60859__$1 = (function (){var statearr_60886 = state_60859;
(statearr_60886[(7)] = inst_60815);

(statearr_60886[(11)] = inst_60813);

(statearr_60886[(8)] = inst_60814);

return statearr_60886;
})();
var statearr_60888_62160 = state_60859__$1;
(statearr_60888_62160[(2)] = null);

(statearr_60888_62160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60860 === (11))){
var inst_60822 = (state_60859[(2)]);
var inst_60823 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_60859__$1 = (function (){var statearr_60890 = state_60859;
(statearr_60890[(12)] = inst_60822);

return statearr_60890;
})();
var statearr_60891_62161 = state_60859__$1;
(statearr_60891_62161[(2)] = inst_60823);

(statearr_60891_62161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60860 === (9))){
var inst_60815 = (state_60859[(7)]);
var _ = (function (){var statearr_60892 = state_60859;
(statearr_60892[(4)] = cljs.core.cons((12),(state_60859[(4)])));

return statearr_60892;
})();
var inst_60830 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_60815) : chs__$1.call(null,inst_60815));
var inst_60831 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_60815) : done.call(null,inst_60815));
var inst_60832 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_60830,inst_60831);
var ___$1 = (function (){var statearr_60893 = state_60859;
(statearr_60893[(4)] = cljs.core.rest((state_60859[(4)])));

return statearr_60893;
})();
var state_60859__$1 = state_60859;
var statearr_60895_62167 = state_60859__$1;
(statearr_60895_62167[(2)] = inst_60832);

(statearr_60895_62167[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60860 === (5))){
var inst_60842 = (state_60859[(2)]);
var state_60859__$1 = (function (){var statearr_60896 = state_60859;
(statearr_60896[(13)] = inst_60842);

return statearr_60896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60859__$1,(13),dchan);
} else {
if((state_val_60860 === (14))){
var inst_60847 = cljs.core.async.close_BANG_(out);
var state_60859__$1 = state_60859;
var statearr_60897_62170 = state_60859__$1;
(statearr_60897_62170[(2)] = inst_60847);

(statearr_60897_62170[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60860 === (16))){
var inst_60854 = (state_60859[(2)]);
var state_60859__$1 = state_60859;
var statearr_60898_62174 = state_60859__$1;
(statearr_60898_62174[(2)] = inst_60854);

(statearr_60898_62174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60860 === (10))){
var inst_60815 = (state_60859[(7)]);
var inst_60835 = (state_60859[(2)]);
var inst_60836 = (inst_60815 + (1));
var inst_60815__$1 = inst_60836;
var state_60859__$1 = (function (){var statearr_60899 = state_60859;
(statearr_60899[(14)] = inst_60835);

(statearr_60899[(7)] = inst_60815__$1);

return statearr_60899;
})();
var statearr_60900_62175 = state_60859__$1;
(statearr_60900_62175[(2)] = null);

(statearr_60900_62175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60860 === (8))){
var inst_60840 = (state_60859[(2)]);
var state_60859__$1 = state_60859;
var statearr_60902_62176 = state_60859__$1;
(statearr_60902_62176[(2)] = inst_60840);

(statearr_60902_62176[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59114__auto__ = null;
var cljs$core$async$state_machine__59114__auto____0 = (function (){
var statearr_60907 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60907[(0)] = cljs$core$async$state_machine__59114__auto__);

(statearr_60907[(1)] = (1));

return statearr_60907;
});
var cljs$core$async$state_machine__59114__auto____1 = (function (state_60859){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_60859);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e60908){var ex__59117__auto__ = e60908;
var statearr_60909_62177 = state_60859;
(statearr_60909_62177[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_60859[(4)]))){
var statearr_60910_62178 = state_60859;
(statearr_60910_62178[(1)] = cljs.core.first((state_60859[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62179 = state_60859;
state_60859 = G__62179;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$state_machine__59114__auto__ = function(state_60859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59114__auto____1.call(this,state_60859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59114__auto____0;
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59114__auto____1;
return cljs$core$async$state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_60914 = f__59375__auto__();
(statearr_60914[(6)] = c__59374__auto___62138);

return statearr_60914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__60917 = arguments.length;
switch (G__60917) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59374__auto___62181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_60951){
var state_val_60952 = (state_60951[(1)]);
if((state_val_60952 === (7))){
var inst_60931 = (state_60951[(7)]);
var inst_60930 = (state_60951[(8)]);
var inst_60930__$1 = (state_60951[(2)]);
var inst_60931__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60930__$1,(0),null);
var inst_60932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_60930__$1,(1),null);
var inst_60933 = (inst_60931__$1 == null);
var state_60951__$1 = (function (){var statearr_60958 = state_60951;
(statearr_60958[(7)] = inst_60931__$1);

(statearr_60958[(8)] = inst_60930__$1);

(statearr_60958[(9)] = inst_60932);

return statearr_60958;
})();
if(cljs.core.truth_(inst_60933)){
var statearr_60959_62182 = state_60951__$1;
(statearr_60959_62182[(1)] = (8));

} else {
var statearr_60960_62183 = state_60951__$1;
(statearr_60960_62183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60952 === (1))){
var inst_60920 = cljs.core.vec(chs);
var inst_60921 = inst_60920;
var state_60951__$1 = (function (){var statearr_60961 = state_60951;
(statearr_60961[(10)] = inst_60921);

return statearr_60961;
})();
var statearr_60962_62184 = state_60951__$1;
(statearr_60962_62184[(2)] = null);

(statearr_60962_62184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60952 === (4))){
var inst_60921 = (state_60951[(10)]);
var state_60951__$1 = state_60951;
return cljs.core.async.ioc_alts_BANG_(state_60951__$1,(7),inst_60921);
} else {
if((state_val_60952 === (6))){
var inst_60947 = (state_60951[(2)]);
var state_60951__$1 = state_60951;
var statearr_60963_62185 = state_60951__$1;
(statearr_60963_62185[(2)] = inst_60947);

(statearr_60963_62185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60952 === (3))){
var inst_60949 = (state_60951[(2)]);
var state_60951__$1 = state_60951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60951__$1,inst_60949);
} else {
if((state_val_60952 === (2))){
var inst_60921 = (state_60951[(10)]);
var inst_60923 = cljs.core.count(inst_60921);
var inst_60924 = (inst_60923 > (0));
var state_60951__$1 = state_60951;
if(cljs.core.truth_(inst_60924)){
var statearr_60966_62186 = state_60951__$1;
(statearr_60966_62186[(1)] = (4));

} else {
var statearr_60967_62187 = state_60951__$1;
(statearr_60967_62187[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60952 === (11))){
var inst_60921 = (state_60951[(10)]);
var inst_60940 = (state_60951[(2)]);
var tmp60964 = inst_60921;
var inst_60921__$1 = tmp60964;
var state_60951__$1 = (function (){var statearr_60968 = state_60951;
(statearr_60968[(10)] = inst_60921__$1);

(statearr_60968[(11)] = inst_60940);

return statearr_60968;
})();
var statearr_60969_62188 = state_60951__$1;
(statearr_60969_62188[(2)] = null);

(statearr_60969_62188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60952 === (9))){
var inst_60931 = (state_60951[(7)]);
var state_60951__$1 = state_60951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60951__$1,(11),out,inst_60931);
} else {
if((state_val_60952 === (5))){
var inst_60945 = cljs.core.async.close_BANG_(out);
var state_60951__$1 = state_60951;
var statearr_60970_62192 = state_60951__$1;
(statearr_60970_62192[(2)] = inst_60945);

(statearr_60970_62192[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60952 === (10))){
var inst_60943 = (state_60951[(2)]);
var state_60951__$1 = state_60951;
var statearr_60971_62193 = state_60951__$1;
(statearr_60971_62193[(2)] = inst_60943);

(statearr_60971_62193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60952 === (8))){
var inst_60931 = (state_60951[(7)]);
var inst_60930 = (state_60951[(8)]);
var inst_60921 = (state_60951[(10)]);
var inst_60932 = (state_60951[(9)]);
var inst_60935 = (function (){var cs = inst_60921;
var vec__60926 = inst_60930;
var v = inst_60931;
var c = inst_60932;
return (function (p1__60915_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__60915_SHARP_);
});
})();
var inst_60936 = cljs.core.filterv(inst_60935,inst_60921);
var inst_60921__$1 = inst_60936;
var state_60951__$1 = (function (){var statearr_60972 = state_60951;
(statearr_60972[(10)] = inst_60921__$1);

return statearr_60972;
})();
var statearr_60973_62195 = state_60951__$1;
(statearr_60973_62195[(2)] = null);

(statearr_60973_62195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59114__auto__ = null;
var cljs$core$async$state_machine__59114__auto____0 = (function (){
var statearr_60975 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60975[(0)] = cljs$core$async$state_machine__59114__auto__);

(statearr_60975[(1)] = (1));

return statearr_60975;
});
var cljs$core$async$state_machine__59114__auto____1 = (function (state_60951){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_60951);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e60976){var ex__59117__auto__ = e60976;
var statearr_60977_62197 = state_60951;
(statearr_60977_62197[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_60951[(4)]))){
var statearr_60979_62198 = state_60951;
(statearr_60979_62198[(1)] = cljs.core.first((state_60951[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62199 = state_60951;
state_60951 = G__62199;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$state_machine__59114__auto__ = function(state_60951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59114__auto____1.call(this,state_60951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59114__auto____0;
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59114__auto____1;
return cljs$core$async$state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_60982 = f__59375__auto__();
(statearr_60982[(6)] = c__59374__auto___62181);

return statearr_60982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__60989 = arguments.length;
switch (G__60989) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59374__auto___62201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_61025){
var state_val_61026 = (state_61025[(1)]);
if((state_val_61026 === (7))){
var inst_61004 = (state_61025[(7)]);
var inst_61004__$1 = (state_61025[(2)]);
var inst_61005 = (inst_61004__$1 == null);
var inst_61006 = cljs.core.not(inst_61005);
var state_61025__$1 = (function (){var statearr_61031 = state_61025;
(statearr_61031[(7)] = inst_61004__$1);

return statearr_61031;
})();
if(inst_61006){
var statearr_61032_62202 = state_61025__$1;
(statearr_61032_62202[(1)] = (8));

} else {
var statearr_61037_62203 = state_61025__$1;
(statearr_61037_62203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61026 === (1))){
var inst_60999 = (0);
var state_61025__$1 = (function (){var statearr_61038 = state_61025;
(statearr_61038[(8)] = inst_60999);

return statearr_61038;
})();
var statearr_61039_62204 = state_61025__$1;
(statearr_61039_62204[(2)] = null);

(statearr_61039_62204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61026 === (4))){
var state_61025__$1 = state_61025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61025__$1,(7),ch);
} else {
if((state_val_61026 === (6))){
var inst_61018 = (state_61025[(2)]);
var state_61025__$1 = state_61025;
var statearr_61040_62208 = state_61025__$1;
(statearr_61040_62208[(2)] = inst_61018);

(statearr_61040_62208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61026 === (3))){
var inst_61022 = (state_61025[(2)]);
var inst_61023 = cljs.core.async.close_BANG_(out);
var state_61025__$1 = (function (){var statearr_61041 = state_61025;
(statearr_61041[(9)] = inst_61022);

return statearr_61041;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61025__$1,inst_61023);
} else {
if((state_val_61026 === (2))){
var inst_60999 = (state_61025[(8)]);
var inst_61001 = (inst_60999 < n);
var state_61025__$1 = state_61025;
if(cljs.core.truth_(inst_61001)){
var statearr_61043_62215 = state_61025__$1;
(statearr_61043_62215[(1)] = (4));

} else {
var statearr_61044_62216 = state_61025__$1;
(statearr_61044_62216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61026 === (11))){
var inst_60999 = (state_61025[(8)]);
var inst_61009 = (state_61025[(2)]);
var inst_61010 = (inst_60999 + (1));
var inst_60999__$1 = inst_61010;
var state_61025__$1 = (function (){var statearr_61045 = state_61025;
(statearr_61045[(8)] = inst_60999__$1);

(statearr_61045[(10)] = inst_61009);

return statearr_61045;
})();
var statearr_61046_62219 = state_61025__$1;
(statearr_61046_62219[(2)] = null);

(statearr_61046_62219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61026 === (9))){
var state_61025__$1 = state_61025;
var statearr_61047_62220 = state_61025__$1;
(statearr_61047_62220[(2)] = null);

(statearr_61047_62220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61026 === (5))){
var state_61025__$1 = state_61025;
var statearr_61050_62221 = state_61025__$1;
(statearr_61050_62221[(2)] = null);

(statearr_61050_62221[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61026 === (10))){
var inst_61015 = (state_61025[(2)]);
var state_61025__$1 = state_61025;
var statearr_61051_62222 = state_61025__$1;
(statearr_61051_62222[(2)] = inst_61015);

(statearr_61051_62222[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61026 === (8))){
var inst_61004 = (state_61025[(7)]);
var state_61025__$1 = state_61025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61025__$1,(11),out,inst_61004);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59114__auto__ = null;
var cljs$core$async$state_machine__59114__auto____0 = (function (){
var statearr_61053 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61053[(0)] = cljs$core$async$state_machine__59114__auto__);

(statearr_61053[(1)] = (1));

return statearr_61053;
});
var cljs$core$async$state_machine__59114__auto____1 = (function (state_61025){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_61025);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e61054){var ex__59117__auto__ = e61054;
var statearr_61055_62223 = state_61025;
(statearr_61055_62223[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_61025[(4)]))){
var statearr_61056_62224 = state_61025;
(statearr_61056_62224[(1)] = cljs.core.first((state_61025[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62225 = state_61025;
state_61025 = G__62225;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$state_machine__59114__auto__ = function(state_61025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59114__auto____1.call(this,state_61025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59114__auto____0;
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59114__auto____1;
return cljs$core$async$state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_61058 = f__59375__auto__();
(statearr_61058[(6)] = c__59374__auto___62201);

return statearr_61058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61062 = (function (f,ch,meta61063){
this.f = f;
this.ch = ch;
this.meta61063 = meta61063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61064,meta61063__$1){
var self__ = this;
var _61064__$1 = this;
return (new cljs.core.async.t_cljs$core$async61062(self__.f,self__.ch,meta61063__$1));
}));

(cljs.core.async.t_cljs$core$async61062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61064){
var self__ = this;
var _61064__$1 = this;
return self__.meta61063;
}));

(cljs.core.async.t_cljs$core$async61062.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61062.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async61062.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async61062.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61062.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61066 = (function (f,ch,meta61063,_,fn1,meta61067){
this.f = f;
this.ch = ch;
this.meta61063 = meta61063;
this._ = _;
this.fn1 = fn1;
this.meta61067 = meta61067;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61068,meta61067__$1){
var self__ = this;
var _61068__$1 = this;
return (new cljs.core.async.t_cljs$core$async61066(self__.f,self__.ch,self__.meta61063,self__._,self__.fn1,meta61067__$1));
}));

(cljs.core.async.t_cljs$core$async61066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61068){
var self__ = this;
var _61068__$1 = this;
return self__.meta61067;
}));

(cljs.core.async.t_cljs$core$async61066.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61066.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async61066.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61066.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__61059_SHARP_){
var G__61069 = (((p1__61059_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__61059_SHARP_) : self__.f.call(null,p1__61059_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__61069) : f1.call(null,G__61069));
});
}));

(cljs.core.async.t_cljs$core$async61066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61063","meta61063",1299899999,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async61062","cljs.core.async/t_cljs$core$async61062",-549686764,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta61067","meta61067",-798631309,null)], null);
}));

(cljs.core.async.t_cljs$core$async61066.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61066.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61066");

(cljs.core.async.t_cljs$core$async61066.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async61066");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61066.
 */
cljs.core.async.__GT_t_cljs$core$async61066 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61066(f__$1,ch__$1,meta61063__$1,___$2,fn1__$1,meta61067){
return (new cljs.core.async.t_cljs$core$async61066(f__$1,ch__$1,meta61063__$1,___$2,fn1__$1,meta61067));
});

}

return (new cljs.core.async.t_cljs$core$async61066(self__.f,self__.ch,self__.meta61063,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__61078 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__61078) : self__.f.call(null,G__61078));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async61062.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61062.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async61062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61063","meta61063",1299899999,null)], null);
}));

(cljs.core.async.t_cljs$core$async61062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61062");

(cljs.core.async.t_cljs$core$async61062.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async61062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61062.
 */
cljs.core.async.__GT_t_cljs$core$async61062 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async61062(f__$1,ch__$1,meta61063){
return (new cljs.core.async.t_cljs$core$async61062(f__$1,ch__$1,meta61063));
});

}

return (new cljs.core.async.t_cljs$core$async61062(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61080 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61080 = (function (f,ch,meta61081){
this.f = f;
this.ch = ch;
this.meta61081 = meta61081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61082,meta61081__$1){
var self__ = this;
var _61082__$1 = this;
return (new cljs.core.async.t_cljs$core$async61080(self__.f,self__.ch,meta61081__$1));
}));

(cljs.core.async.t_cljs$core$async61080.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61082){
var self__ = this;
var _61082__$1 = this;
return self__.meta61081;
}));

(cljs.core.async.t_cljs$core$async61080.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61080.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async61080.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61080.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async61080.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61080.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async61080.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61081","meta61081",944331681,null)], null);
}));

(cljs.core.async.t_cljs$core$async61080.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61080");

(cljs.core.async.t_cljs$core$async61080.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async61080");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61080.
 */
cljs.core.async.__GT_t_cljs$core$async61080 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async61080(f__$1,ch__$1,meta61081){
return (new cljs.core.async.t_cljs$core$async61080(f__$1,ch__$1,meta61081));
});

}

return (new cljs.core.async.t_cljs$core$async61080(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61083 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61083 = (function (p,ch,meta61084){
this.p = p;
this.ch = ch;
this.meta61084 = meta61084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61085,meta61084__$1){
var self__ = this;
var _61085__$1 = this;
return (new cljs.core.async.t_cljs$core$async61083(self__.p,self__.ch,meta61084__$1));
}));

(cljs.core.async.t_cljs$core$async61083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61085){
var self__ = this;
var _61085__$1 = this;
return self__.meta61084;
}));

(cljs.core.async.t_cljs$core$async61083.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61083.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async61083.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async61083.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61083.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async61083.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61083.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async61083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta61084","meta61084",-1239738246,null)], null);
}));

(cljs.core.async.t_cljs$core$async61083.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61083");

(cljs.core.async.t_cljs$core$async61083.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async61083");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61083.
 */
cljs.core.async.__GT_t_cljs$core$async61083 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async61083(p__$1,ch__$1,meta61084){
return (new cljs.core.async.t_cljs$core$async61083(p__$1,ch__$1,meta61084));
});

}

return (new cljs.core.async.t_cljs$core$async61083(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__61087 = arguments.length;
switch (G__61087) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59374__auto___62255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_61108){
var state_val_61109 = (state_61108[(1)]);
if((state_val_61109 === (7))){
var inst_61104 = (state_61108[(2)]);
var state_61108__$1 = state_61108;
var statearr_61110_62256 = state_61108__$1;
(statearr_61110_62256[(2)] = inst_61104);

(statearr_61110_62256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61109 === (1))){
var state_61108__$1 = state_61108;
var statearr_61111_62257 = state_61108__$1;
(statearr_61111_62257[(2)] = null);

(statearr_61111_62257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61109 === (4))){
var inst_61090 = (state_61108[(7)]);
var inst_61090__$1 = (state_61108[(2)]);
var inst_61091 = (inst_61090__$1 == null);
var state_61108__$1 = (function (){var statearr_61112 = state_61108;
(statearr_61112[(7)] = inst_61090__$1);

return statearr_61112;
})();
if(cljs.core.truth_(inst_61091)){
var statearr_61113_62258 = state_61108__$1;
(statearr_61113_62258[(1)] = (5));

} else {
var statearr_61114_62260 = state_61108__$1;
(statearr_61114_62260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61109 === (6))){
var inst_61090 = (state_61108[(7)]);
var inst_61095 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_61090) : p.call(null,inst_61090));
var state_61108__$1 = state_61108;
if(cljs.core.truth_(inst_61095)){
var statearr_61115_62263 = state_61108__$1;
(statearr_61115_62263[(1)] = (8));

} else {
var statearr_61116_62264 = state_61108__$1;
(statearr_61116_62264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61109 === (3))){
var inst_61106 = (state_61108[(2)]);
var state_61108__$1 = state_61108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61108__$1,inst_61106);
} else {
if((state_val_61109 === (2))){
var state_61108__$1 = state_61108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61108__$1,(4),ch);
} else {
if((state_val_61109 === (11))){
var inst_61098 = (state_61108[(2)]);
var state_61108__$1 = state_61108;
var statearr_61120_62265 = state_61108__$1;
(statearr_61120_62265[(2)] = inst_61098);

(statearr_61120_62265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61109 === (9))){
var state_61108__$1 = state_61108;
var statearr_61123_62266 = state_61108__$1;
(statearr_61123_62266[(2)] = null);

(statearr_61123_62266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61109 === (5))){
var inst_61093 = cljs.core.async.close_BANG_(out);
var state_61108__$1 = state_61108;
var statearr_61124_62267 = state_61108__$1;
(statearr_61124_62267[(2)] = inst_61093);

(statearr_61124_62267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61109 === (10))){
var inst_61101 = (state_61108[(2)]);
var state_61108__$1 = (function (){var statearr_61125 = state_61108;
(statearr_61125[(8)] = inst_61101);

return statearr_61125;
})();
var statearr_61126_62268 = state_61108__$1;
(statearr_61126_62268[(2)] = null);

(statearr_61126_62268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61109 === (8))){
var inst_61090 = (state_61108[(7)]);
var state_61108__$1 = state_61108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61108__$1,(11),out,inst_61090);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59114__auto__ = null;
var cljs$core$async$state_machine__59114__auto____0 = (function (){
var statearr_61127 = [null,null,null,null,null,null,null,null,null];
(statearr_61127[(0)] = cljs$core$async$state_machine__59114__auto__);

(statearr_61127[(1)] = (1));

return statearr_61127;
});
var cljs$core$async$state_machine__59114__auto____1 = (function (state_61108){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_61108);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e61128){var ex__59117__auto__ = e61128;
var statearr_61129_62269 = state_61108;
(statearr_61129_62269[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_61108[(4)]))){
var statearr_61130_62270 = state_61108;
(statearr_61130_62270[(1)] = cljs.core.first((state_61108[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62271 = state_61108;
state_61108 = G__62271;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$state_machine__59114__auto__ = function(state_61108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59114__auto____1.call(this,state_61108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59114__auto____0;
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59114__auto____1;
return cljs$core$async$state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_61132 = f__59375__auto__();
(statearr_61132[(6)] = c__59374__auto___62255);

return statearr_61132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__61140 = arguments.length;
switch (G__61140) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__59374__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_61214){
var state_val_61215 = (state_61214[(1)]);
if((state_val_61215 === (7))){
var inst_61210 = (state_61214[(2)]);
var state_61214__$1 = state_61214;
var statearr_61216_62273 = state_61214__$1;
(statearr_61216_62273[(2)] = inst_61210);

(statearr_61216_62273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (20))){
var inst_61180 = (state_61214[(7)]);
var inst_61191 = (state_61214[(2)]);
var inst_61192 = cljs.core.next(inst_61180);
var inst_61162 = inst_61192;
var inst_61163 = null;
var inst_61164 = (0);
var inst_61165 = (0);
var state_61214__$1 = (function (){var statearr_61217 = state_61214;
(statearr_61217[(8)] = inst_61162);

(statearr_61217[(9)] = inst_61164);

(statearr_61217[(10)] = inst_61163);

(statearr_61217[(11)] = inst_61191);

(statearr_61217[(12)] = inst_61165);

return statearr_61217;
})();
var statearr_61218_62274 = state_61214__$1;
(statearr_61218_62274[(2)] = null);

(statearr_61218_62274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (1))){
var state_61214__$1 = state_61214;
var statearr_61219_62275 = state_61214__$1;
(statearr_61219_62275[(2)] = null);

(statearr_61219_62275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (4))){
var inst_61151 = (state_61214[(13)]);
var inst_61151__$1 = (state_61214[(2)]);
var inst_61152 = (inst_61151__$1 == null);
var state_61214__$1 = (function (){var statearr_61220 = state_61214;
(statearr_61220[(13)] = inst_61151__$1);

return statearr_61220;
})();
if(cljs.core.truth_(inst_61152)){
var statearr_61221_62282 = state_61214__$1;
(statearr_61221_62282[(1)] = (5));

} else {
var statearr_61222_62283 = state_61214__$1;
(statearr_61222_62283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (15))){
var state_61214__$1 = state_61214;
var statearr_61226_62284 = state_61214__$1;
(statearr_61226_62284[(2)] = null);

(statearr_61226_62284[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (21))){
var state_61214__$1 = state_61214;
var statearr_61227_62285 = state_61214__$1;
(statearr_61227_62285[(2)] = null);

(statearr_61227_62285[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (13))){
var inst_61162 = (state_61214[(8)]);
var inst_61164 = (state_61214[(9)]);
var inst_61163 = (state_61214[(10)]);
var inst_61165 = (state_61214[(12)]);
var inst_61176 = (state_61214[(2)]);
var inst_61177 = (inst_61165 + (1));
var tmp61223 = inst_61162;
var tmp61224 = inst_61164;
var tmp61225 = inst_61163;
var inst_61162__$1 = tmp61223;
var inst_61163__$1 = tmp61225;
var inst_61164__$1 = tmp61224;
var inst_61165__$1 = inst_61177;
var state_61214__$1 = (function (){var statearr_61228 = state_61214;
(statearr_61228[(8)] = inst_61162__$1);

(statearr_61228[(9)] = inst_61164__$1);

(statearr_61228[(10)] = inst_61163__$1);

(statearr_61228[(12)] = inst_61165__$1);

(statearr_61228[(14)] = inst_61176);

return statearr_61228;
})();
var statearr_61229_62290 = state_61214__$1;
(statearr_61229_62290[(2)] = null);

(statearr_61229_62290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (22))){
var state_61214__$1 = state_61214;
var statearr_61230_62291 = state_61214__$1;
(statearr_61230_62291[(2)] = null);

(statearr_61230_62291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (6))){
var inst_61151 = (state_61214[(13)]);
var inst_61160 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_61151) : f.call(null,inst_61151));
var inst_61161 = cljs.core.seq(inst_61160);
var inst_61162 = inst_61161;
var inst_61163 = null;
var inst_61164 = (0);
var inst_61165 = (0);
var state_61214__$1 = (function (){var statearr_61232 = state_61214;
(statearr_61232[(8)] = inst_61162);

(statearr_61232[(9)] = inst_61164);

(statearr_61232[(10)] = inst_61163);

(statearr_61232[(12)] = inst_61165);

return statearr_61232;
})();
var statearr_61233_62292 = state_61214__$1;
(statearr_61233_62292[(2)] = null);

(statearr_61233_62292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (17))){
var inst_61180 = (state_61214[(7)]);
var inst_61184 = cljs.core.chunk_first(inst_61180);
var inst_61185 = cljs.core.chunk_rest(inst_61180);
var inst_61186 = cljs.core.count(inst_61184);
var inst_61162 = inst_61185;
var inst_61163 = inst_61184;
var inst_61164 = inst_61186;
var inst_61165 = (0);
var state_61214__$1 = (function (){var statearr_61235 = state_61214;
(statearr_61235[(8)] = inst_61162);

(statearr_61235[(9)] = inst_61164);

(statearr_61235[(10)] = inst_61163);

(statearr_61235[(12)] = inst_61165);

return statearr_61235;
})();
var statearr_61236_62293 = state_61214__$1;
(statearr_61236_62293[(2)] = null);

(statearr_61236_62293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (3))){
var inst_61212 = (state_61214[(2)]);
var state_61214__$1 = state_61214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61214__$1,inst_61212);
} else {
if((state_val_61215 === (12))){
var inst_61200 = (state_61214[(2)]);
var state_61214__$1 = state_61214;
var statearr_61237_62294 = state_61214__$1;
(statearr_61237_62294[(2)] = inst_61200);

(statearr_61237_62294[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (2))){
var state_61214__$1 = state_61214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61214__$1,(4),in$);
} else {
if((state_val_61215 === (23))){
var inst_61208 = (state_61214[(2)]);
var state_61214__$1 = state_61214;
var statearr_61239_62295 = state_61214__$1;
(statearr_61239_62295[(2)] = inst_61208);

(statearr_61239_62295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (19))){
var inst_61195 = (state_61214[(2)]);
var state_61214__$1 = state_61214;
var statearr_61240_62299 = state_61214__$1;
(statearr_61240_62299[(2)] = inst_61195);

(statearr_61240_62299[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (11))){
var inst_61162 = (state_61214[(8)]);
var inst_61180 = (state_61214[(7)]);
var inst_61180__$1 = cljs.core.seq(inst_61162);
var state_61214__$1 = (function (){var statearr_61241 = state_61214;
(statearr_61241[(7)] = inst_61180__$1);

return statearr_61241;
})();
if(inst_61180__$1){
var statearr_61242_62300 = state_61214__$1;
(statearr_61242_62300[(1)] = (14));

} else {
var statearr_61243_62301 = state_61214__$1;
(statearr_61243_62301[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (9))){
var inst_61202 = (state_61214[(2)]);
var inst_61203 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_61214__$1 = (function (){var statearr_61244 = state_61214;
(statearr_61244[(15)] = inst_61202);

return statearr_61244;
})();
if(cljs.core.truth_(inst_61203)){
var statearr_61245_62305 = state_61214__$1;
(statearr_61245_62305[(1)] = (21));

} else {
var statearr_61246_62306 = state_61214__$1;
(statearr_61246_62306[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (5))){
var inst_61154 = cljs.core.async.close_BANG_(out);
var state_61214__$1 = state_61214;
var statearr_61247_62307 = state_61214__$1;
(statearr_61247_62307[(2)] = inst_61154);

(statearr_61247_62307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (14))){
var inst_61180 = (state_61214[(7)]);
var inst_61182 = cljs.core.chunked_seq_QMARK_(inst_61180);
var state_61214__$1 = state_61214;
if(inst_61182){
var statearr_61248_62312 = state_61214__$1;
(statearr_61248_62312[(1)] = (17));

} else {
var statearr_61249_62313 = state_61214__$1;
(statearr_61249_62313[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (16))){
var inst_61198 = (state_61214[(2)]);
var state_61214__$1 = state_61214;
var statearr_61250_62316 = state_61214__$1;
(statearr_61250_62316[(2)] = inst_61198);

(statearr_61250_62316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61215 === (10))){
var inst_61163 = (state_61214[(10)]);
var inst_61165 = (state_61214[(12)]);
var inst_61174 = cljs.core._nth(inst_61163,inst_61165);
var state_61214__$1 = state_61214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61214__$1,(13),out,inst_61174);
} else {
if((state_val_61215 === (18))){
var inst_61180 = (state_61214[(7)]);
var inst_61189 = cljs.core.first(inst_61180);
var state_61214__$1 = state_61214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61214__$1,(20),out,inst_61189);
} else {
if((state_val_61215 === (8))){
var inst_61164 = (state_61214[(9)]);
var inst_61165 = (state_61214[(12)]);
var inst_61171 = (inst_61165 < inst_61164);
var inst_61172 = inst_61171;
var state_61214__$1 = state_61214;
if(cljs.core.truth_(inst_61172)){
var statearr_61252_62324 = state_61214__$1;
(statearr_61252_62324[(1)] = (10));

} else {
var statearr_61253_62325 = state_61214__$1;
(statearr_61253_62325[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__59114__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__59114__auto____0 = (function (){
var statearr_61255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61255[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__59114__auto__);

(statearr_61255[(1)] = (1));

return statearr_61255;
});
var cljs$core$async$mapcat_STAR__$_state_machine__59114__auto____1 = (function (state_61214){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_61214);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e61256){var ex__59117__auto__ = e61256;
var statearr_61257_62327 = state_61214;
(statearr_61257_62327[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_61214[(4)]))){
var statearr_61258_62330 = state_61214;
(statearr_61258_62330[(1)] = cljs.core.first((state_61214[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62331 = state_61214;
state_61214 = G__62331;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__59114__auto__ = function(state_61214){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__59114__auto____1.call(this,state_61214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__59114__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__59114__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_61260 = f__59375__auto__();
(statearr_61260[(6)] = c__59374__auto__);

return statearr_61260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));

return c__59374__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__61262 = arguments.length;
switch (G__61262) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__61266 = arguments.length;
switch (G__61266) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__61268 = arguments.length;
switch (G__61268) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59374__auto___62361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_61292){
var state_val_61293 = (state_61292[(1)]);
if((state_val_61293 === (7))){
var inst_61287 = (state_61292[(2)]);
var state_61292__$1 = state_61292;
var statearr_61294_62362 = state_61292__$1;
(statearr_61294_62362[(2)] = inst_61287);

(statearr_61294_62362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61293 === (1))){
var inst_61269 = null;
var state_61292__$1 = (function (){var statearr_61295 = state_61292;
(statearr_61295[(7)] = inst_61269);

return statearr_61295;
})();
var statearr_61296_62363 = state_61292__$1;
(statearr_61296_62363[(2)] = null);

(statearr_61296_62363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61293 === (4))){
var inst_61272 = (state_61292[(8)]);
var inst_61272__$1 = (state_61292[(2)]);
var inst_61273 = (inst_61272__$1 == null);
var inst_61274 = cljs.core.not(inst_61273);
var state_61292__$1 = (function (){var statearr_61297 = state_61292;
(statearr_61297[(8)] = inst_61272__$1);

return statearr_61297;
})();
if(inst_61274){
var statearr_61298_62364 = state_61292__$1;
(statearr_61298_62364[(1)] = (5));

} else {
var statearr_61299_62365 = state_61292__$1;
(statearr_61299_62365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61293 === (6))){
var state_61292__$1 = state_61292;
var statearr_61300_62366 = state_61292__$1;
(statearr_61300_62366[(2)] = null);

(statearr_61300_62366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61293 === (3))){
var inst_61289 = (state_61292[(2)]);
var inst_61290 = cljs.core.async.close_BANG_(out);
var state_61292__$1 = (function (){var statearr_61301 = state_61292;
(statearr_61301[(9)] = inst_61289);

return statearr_61301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61292__$1,inst_61290);
} else {
if((state_val_61293 === (2))){
var state_61292__$1 = state_61292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61292__$1,(4),ch);
} else {
if((state_val_61293 === (11))){
var inst_61272 = (state_61292[(8)]);
var inst_61281 = (state_61292[(2)]);
var inst_61269 = inst_61272;
var state_61292__$1 = (function (){var statearr_61302 = state_61292;
(statearr_61302[(10)] = inst_61281);

(statearr_61302[(7)] = inst_61269);

return statearr_61302;
})();
var statearr_61303_62367 = state_61292__$1;
(statearr_61303_62367[(2)] = null);

(statearr_61303_62367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61293 === (9))){
var inst_61272 = (state_61292[(8)]);
var state_61292__$1 = state_61292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61292__$1,(11),out,inst_61272);
} else {
if((state_val_61293 === (5))){
var inst_61269 = (state_61292[(7)]);
var inst_61272 = (state_61292[(8)]);
var inst_61276 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_61272,inst_61269);
var state_61292__$1 = state_61292;
if(inst_61276){
var statearr_61305_62368 = state_61292__$1;
(statearr_61305_62368[(1)] = (8));

} else {
var statearr_61306_62369 = state_61292__$1;
(statearr_61306_62369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61293 === (10))){
var inst_61284 = (state_61292[(2)]);
var state_61292__$1 = state_61292;
var statearr_61307_62370 = state_61292__$1;
(statearr_61307_62370[(2)] = inst_61284);

(statearr_61307_62370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61293 === (8))){
var inst_61269 = (state_61292[(7)]);
var tmp61304 = inst_61269;
var inst_61269__$1 = tmp61304;
var state_61292__$1 = (function (){var statearr_61308 = state_61292;
(statearr_61308[(7)] = inst_61269__$1);

return statearr_61308;
})();
var statearr_61309_62375 = state_61292__$1;
(statearr_61309_62375[(2)] = null);

(statearr_61309_62375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59114__auto__ = null;
var cljs$core$async$state_machine__59114__auto____0 = (function (){
var statearr_61310 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61310[(0)] = cljs$core$async$state_machine__59114__auto__);

(statearr_61310[(1)] = (1));

return statearr_61310;
});
var cljs$core$async$state_machine__59114__auto____1 = (function (state_61292){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_61292);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e61311){var ex__59117__auto__ = e61311;
var statearr_61312_62376 = state_61292;
(statearr_61312_62376[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_61292[(4)]))){
var statearr_61313_62377 = state_61292;
(statearr_61313_62377[(1)] = cljs.core.first((state_61292[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62378 = state_61292;
state_61292 = G__62378;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$state_machine__59114__auto__ = function(state_61292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59114__auto____1.call(this,state_61292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59114__auto____0;
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59114__auto____1;
return cljs$core$async$state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_61314 = f__59375__auto__();
(statearr_61314[(6)] = c__59374__auto___62361);

return statearr_61314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__61316 = arguments.length;
switch (G__61316) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59374__auto___62380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_61354){
var state_val_61355 = (state_61354[(1)]);
if((state_val_61355 === (7))){
var inst_61350 = (state_61354[(2)]);
var state_61354__$1 = state_61354;
var statearr_61356_62381 = state_61354__$1;
(statearr_61356_62381[(2)] = inst_61350);

(statearr_61356_62381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61355 === (1))){
var inst_61317 = (new Array(n));
var inst_61318 = inst_61317;
var inst_61319 = (0);
var state_61354__$1 = (function (){var statearr_61357 = state_61354;
(statearr_61357[(7)] = inst_61319);

(statearr_61357[(8)] = inst_61318);

return statearr_61357;
})();
var statearr_61358_62382 = state_61354__$1;
(statearr_61358_62382[(2)] = null);

(statearr_61358_62382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61355 === (4))){
var inst_61322 = (state_61354[(9)]);
var inst_61322__$1 = (state_61354[(2)]);
var inst_61323 = (inst_61322__$1 == null);
var inst_61324 = cljs.core.not(inst_61323);
var state_61354__$1 = (function (){var statearr_61359 = state_61354;
(statearr_61359[(9)] = inst_61322__$1);

return statearr_61359;
})();
if(inst_61324){
var statearr_61360_62383 = state_61354__$1;
(statearr_61360_62383[(1)] = (5));

} else {
var statearr_61361_62384 = state_61354__$1;
(statearr_61361_62384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61355 === (15))){
var inst_61344 = (state_61354[(2)]);
var state_61354__$1 = state_61354;
var statearr_61362_62385 = state_61354__$1;
(statearr_61362_62385[(2)] = inst_61344);

(statearr_61362_62385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61355 === (13))){
var state_61354__$1 = state_61354;
var statearr_61363_62389 = state_61354__$1;
(statearr_61363_62389[(2)] = null);

(statearr_61363_62389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61355 === (6))){
var inst_61319 = (state_61354[(7)]);
var inst_61340 = (inst_61319 > (0));
var state_61354__$1 = state_61354;
if(cljs.core.truth_(inst_61340)){
var statearr_61364_62392 = state_61354__$1;
(statearr_61364_62392[(1)] = (12));

} else {
var statearr_61365_62393 = state_61354__$1;
(statearr_61365_62393[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61355 === (3))){
var inst_61352 = (state_61354[(2)]);
var state_61354__$1 = state_61354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61354__$1,inst_61352);
} else {
if((state_val_61355 === (12))){
var inst_61318 = (state_61354[(8)]);
var inst_61342 = cljs.core.vec(inst_61318);
var state_61354__$1 = state_61354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61354__$1,(15),out,inst_61342);
} else {
if((state_val_61355 === (2))){
var state_61354__$1 = state_61354;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61354__$1,(4),ch);
} else {
if((state_val_61355 === (11))){
var inst_61334 = (state_61354[(2)]);
var inst_61335 = (new Array(n));
var inst_61318 = inst_61335;
var inst_61319 = (0);
var state_61354__$1 = (function (){var statearr_61366 = state_61354;
(statearr_61366[(7)] = inst_61319);

(statearr_61366[(10)] = inst_61334);

(statearr_61366[(8)] = inst_61318);

return statearr_61366;
})();
var statearr_61367_62400 = state_61354__$1;
(statearr_61367_62400[(2)] = null);

(statearr_61367_62400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61355 === (9))){
var inst_61318 = (state_61354[(8)]);
var inst_61332 = cljs.core.vec(inst_61318);
var state_61354__$1 = state_61354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61354__$1,(11),out,inst_61332);
} else {
if((state_val_61355 === (5))){
var inst_61322 = (state_61354[(9)]);
var inst_61319 = (state_61354[(7)]);
var inst_61318 = (state_61354[(8)]);
var inst_61327 = (state_61354[(11)]);
var inst_61326 = (inst_61318[inst_61319] = inst_61322);
var inst_61327__$1 = (inst_61319 + (1));
var inst_61328 = (inst_61327__$1 < n);
var state_61354__$1 = (function (){var statearr_61368 = state_61354;
(statearr_61368[(11)] = inst_61327__$1);

(statearr_61368[(12)] = inst_61326);

return statearr_61368;
})();
if(cljs.core.truth_(inst_61328)){
var statearr_61369_62401 = state_61354__$1;
(statearr_61369_62401[(1)] = (8));

} else {
var statearr_61370_62402 = state_61354__$1;
(statearr_61370_62402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61355 === (14))){
var inst_61347 = (state_61354[(2)]);
var inst_61348 = cljs.core.async.close_BANG_(out);
var state_61354__$1 = (function (){var statearr_61372 = state_61354;
(statearr_61372[(13)] = inst_61347);

return statearr_61372;
})();
var statearr_61373_62404 = state_61354__$1;
(statearr_61373_62404[(2)] = inst_61348);

(statearr_61373_62404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61355 === (10))){
var inst_61338 = (state_61354[(2)]);
var state_61354__$1 = state_61354;
var statearr_61374_62405 = state_61354__$1;
(statearr_61374_62405[(2)] = inst_61338);

(statearr_61374_62405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61355 === (8))){
var inst_61318 = (state_61354[(8)]);
var inst_61327 = (state_61354[(11)]);
var tmp61371 = inst_61318;
var inst_61318__$1 = tmp61371;
var inst_61319 = inst_61327;
var state_61354__$1 = (function (){var statearr_61375 = state_61354;
(statearr_61375[(7)] = inst_61319);

(statearr_61375[(8)] = inst_61318__$1);

return statearr_61375;
})();
var statearr_61376_62406 = state_61354__$1;
(statearr_61376_62406[(2)] = null);

(statearr_61376_62406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59114__auto__ = null;
var cljs$core$async$state_machine__59114__auto____0 = (function (){
var statearr_61377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61377[(0)] = cljs$core$async$state_machine__59114__auto__);

(statearr_61377[(1)] = (1));

return statearr_61377;
});
var cljs$core$async$state_machine__59114__auto____1 = (function (state_61354){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_61354);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e61378){var ex__59117__auto__ = e61378;
var statearr_61379_62407 = state_61354;
(statearr_61379_62407[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_61354[(4)]))){
var statearr_61380_62408 = state_61354;
(statearr_61380_62408[(1)] = cljs.core.first((state_61354[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62409 = state_61354;
state_61354 = G__62409;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$state_machine__59114__auto__ = function(state_61354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59114__auto____1.call(this,state_61354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59114__auto____0;
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59114__auto____1;
return cljs$core$async$state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_61381 = f__59375__auto__();
(statearr_61381[(6)] = c__59374__auto___62380);

return statearr_61381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__61383 = arguments.length;
switch (G__61383) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__59374__auto___62411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__59375__auto__ = (function (){var switch__59113__auto__ = (function (state_61425){
var state_val_61426 = (state_61425[(1)]);
if((state_val_61426 === (7))){
var inst_61421 = (state_61425[(2)]);
var state_61425__$1 = state_61425;
var statearr_61427_62412 = state_61425__$1;
(statearr_61427_62412[(2)] = inst_61421);

(statearr_61427_62412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61426 === (1))){
var inst_61384 = [];
var inst_61385 = inst_61384;
var inst_61386 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_61425__$1 = (function (){var statearr_61428 = state_61425;
(statearr_61428[(7)] = inst_61385);

(statearr_61428[(8)] = inst_61386);

return statearr_61428;
})();
var statearr_61429_62413 = state_61425__$1;
(statearr_61429_62413[(2)] = null);

(statearr_61429_62413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61426 === (4))){
var inst_61389 = (state_61425[(9)]);
var inst_61389__$1 = (state_61425[(2)]);
var inst_61390 = (inst_61389__$1 == null);
var inst_61391 = cljs.core.not(inst_61390);
var state_61425__$1 = (function (){var statearr_61430 = state_61425;
(statearr_61430[(9)] = inst_61389__$1);

return statearr_61430;
})();
if(inst_61391){
var statearr_61431_62414 = state_61425__$1;
(statearr_61431_62414[(1)] = (5));

} else {
var statearr_61432_62415 = state_61425__$1;
(statearr_61432_62415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61426 === (15))){
var inst_61415 = (state_61425[(2)]);
var state_61425__$1 = state_61425;
var statearr_61433_62416 = state_61425__$1;
(statearr_61433_62416[(2)] = inst_61415);

(statearr_61433_62416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61426 === (13))){
var state_61425__$1 = state_61425;
var statearr_61434_62418 = state_61425__$1;
(statearr_61434_62418[(2)] = null);

(statearr_61434_62418[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61426 === (6))){
var inst_61385 = (state_61425[(7)]);
var inst_61410 = inst_61385.length;
var inst_61411 = (inst_61410 > (0));
var state_61425__$1 = state_61425;
if(cljs.core.truth_(inst_61411)){
var statearr_61435_62419 = state_61425__$1;
(statearr_61435_62419[(1)] = (12));

} else {
var statearr_61436_62420 = state_61425__$1;
(statearr_61436_62420[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61426 === (3))){
var inst_61423 = (state_61425[(2)]);
var state_61425__$1 = state_61425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61425__$1,inst_61423);
} else {
if((state_val_61426 === (12))){
var inst_61385 = (state_61425[(7)]);
var inst_61413 = cljs.core.vec(inst_61385);
var state_61425__$1 = state_61425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61425__$1,(15),out,inst_61413);
} else {
if((state_val_61426 === (2))){
var state_61425__$1 = state_61425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61425__$1,(4),ch);
} else {
if((state_val_61426 === (11))){
var inst_61393 = (state_61425[(10)]);
var inst_61389 = (state_61425[(9)]);
var inst_61403 = (state_61425[(2)]);
var inst_61404 = [];
var inst_61405 = inst_61404.push(inst_61389);
var inst_61385 = inst_61404;
var inst_61386 = inst_61393;
var state_61425__$1 = (function (){var statearr_61437 = state_61425;
(statearr_61437[(11)] = inst_61405);

(statearr_61437[(7)] = inst_61385);

(statearr_61437[(8)] = inst_61386);

(statearr_61437[(12)] = inst_61403);

return statearr_61437;
})();
var statearr_61438_62423 = state_61425__$1;
(statearr_61438_62423[(2)] = null);

(statearr_61438_62423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61426 === (9))){
var inst_61385 = (state_61425[(7)]);
var inst_61401 = cljs.core.vec(inst_61385);
var state_61425__$1 = state_61425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61425__$1,(11),out,inst_61401);
} else {
if((state_val_61426 === (5))){
var inst_61393 = (state_61425[(10)]);
var inst_61386 = (state_61425[(8)]);
var inst_61389 = (state_61425[(9)]);
var inst_61393__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_61389) : f.call(null,inst_61389));
var inst_61394 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_61393__$1,inst_61386);
var inst_61395 = cljs.core.keyword_identical_QMARK_(inst_61386,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_61396 = ((inst_61394) || (inst_61395));
var state_61425__$1 = (function (){var statearr_61439 = state_61425;
(statearr_61439[(10)] = inst_61393__$1);

return statearr_61439;
})();
if(cljs.core.truth_(inst_61396)){
var statearr_61440_62426 = state_61425__$1;
(statearr_61440_62426[(1)] = (8));

} else {
var statearr_61441_62427 = state_61425__$1;
(statearr_61441_62427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61426 === (14))){
var inst_61418 = (state_61425[(2)]);
var inst_61419 = cljs.core.async.close_BANG_(out);
var state_61425__$1 = (function (){var statearr_61443 = state_61425;
(statearr_61443[(13)] = inst_61418);

return statearr_61443;
})();
var statearr_61444_62428 = state_61425__$1;
(statearr_61444_62428[(2)] = inst_61419);

(statearr_61444_62428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61426 === (10))){
var inst_61408 = (state_61425[(2)]);
var state_61425__$1 = state_61425;
var statearr_61445_62429 = state_61425__$1;
(statearr_61445_62429[(2)] = inst_61408);

(statearr_61445_62429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61426 === (8))){
var inst_61385 = (state_61425[(7)]);
var inst_61393 = (state_61425[(10)]);
var inst_61389 = (state_61425[(9)]);
var inst_61398 = inst_61385.push(inst_61389);
var tmp61442 = inst_61385;
var inst_61385__$1 = tmp61442;
var inst_61386 = inst_61393;
var state_61425__$1 = (function (){var statearr_61446 = state_61425;
(statearr_61446[(7)] = inst_61385__$1);

(statearr_61446[(8)] = inst_61386);

(statearr_61446[(14)] = inst_61398);

return statearr_61446;
})();
var statearr_61447_62432 = state_61425__$1;
(statearr_61447_62432[(2)] = null);

(statearr_61447_62432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__59114__auto__ = null;
var cljs$core$async$state_machine__59114__auto____0 = (function (){
var statearr_61448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61448[(0)] = cljs$core$async$state_machine__59114__auto__);

(statearr_61448[(1)] = (1));

return statearr_61448;
});
var cljs$core$async$state_machine__59114__auto____1 = (function (state_61425){
while(true){
var ret_value__59115__auto__ = (function (){try{while(true){
var result__59116__auto__ = switch__59113__auto__(state_61425);
if(cljs.core.keyword_identical_QMARK_(result__59116__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__59116__auto__;
}
break;
}
}catch (e61449){var ex__59117__auto__ = e61449;
var statearr_61450_62436 = state_61425;
(statearr_61450_62436[(2)] = ex__59117__auto__);


if(cljs.core.seq((state_61425[(4)]))){
var statearr_61451_62437 = state_61425;
(statearr_61451_62437[(1)] = cljs.core.first((state_61425[(4)])));

} else {
throw ex__59117__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__59115__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62439 = state_61425;
state_61425 = G__62439;
continue;
} else {
return ret_value__59115__auto__;
}
break;
}
});
cljs$core$async$state_machine__59114__auto__ = function(state_61425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__59114__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__59114__auto____1.call(this,state_61425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__59114__auto____0;
cljs$core$async$state_machine__59114__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__59114__auto____1;
return cljs$core$async$state_machine__59114__auto__;
})()
})();
var state__59376__auto__ = (function (){var statearr_61452 = f__59375__auto__();
(statearr_61452[(6)] = c__59374__auto___62411);

return statearr_61452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__59376__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
