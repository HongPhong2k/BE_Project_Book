"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _bookService = _interopRequireDefault(require("../service/bookService"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var postCreateBook = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _bookService["default"].createBookService(req.body);
        case 2:
          data = _context.sent;
          if (!(data && data.DT)) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(201).json({
            message: "create success",
            data: data.info
          }));
        case 7:
          return _context.abrupt("return", res.status(400).json({
            message: "Create fail"
          }));
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function postCreateBook(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getInfoBook = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _bookService["default"].getInfoBookService(req.params.id);
        case 2:
          data = _context2.sent;
          if (!(data && data.DT)) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(200).json({
            message: "Get info success",
            data: data.inf
          }));
        case 7:
          return _context2.abrupt("return", res.status(400).json({
            message: "Get info fail"
          }));
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getInfoBook(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteBook = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _bookService["default"].deleteBookService(req.params.id);
        case 2:
          data = _context3.sent;
          if (!(data && data.DT)) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(200).json({
            data: "Delete success",
            EC: 1
          }));
        case 7:
          return _context3.abrupt("return", res.status(400).json({
            message: "wrong some thing"
          }));
        case 8:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function deleteBook(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateBook = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, up, data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          up = req.body;
          _context4.next = 4;
          return _bookService["default"].updateBookService(id, up);
        case 4:
          data = _context4.sent;
          if (!(data && data.DT)) {
            _context4.next = 9;
            break;
          }
          return _context4.abrupt("return", res.status(200).json({
            message: "Update success",
            data: data.DT
          }));
        case 9:
          return _context4.abrupt("return", res.status(400).json({
            message: "Some thing wrong"
          }));
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateBook(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var getListBookPaginateAdmin = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$query, current, pageSize, field, sort, mainText, price, category, data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$query = req.query, current = _req$query.current, pageSize = _req$query.pageSize, field = _req$query.field, sort = _req$query.sort, mainText = _req$query.mainText, price = _req$query.price, category = _req$query.category;
          _context5.next = 3;
          return _bookService["default"].getListBookService(current, pageSize, field, sort, mainText, price, category);
        case 3:
          data = _context5.sent;
          if (!data) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", res.status(200).json({
            data: {
              EC: 1,
              meta: {
                current: current,
                pageSize: pageSize,
                pages: Math.ceil(+data.total / +pageSize),
                total: data.total
              },
              result: data.list
            }
          }));
        case 8:
          return _context5.abrupt("return", res.status(500).json({
            message: "Something wrong in server",
            EC: -1
          }));
        case 9:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getListBookPaginateAdmin(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getListBookHome = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _req$query2, current, pageSize, category, field, sort, rate, price, data;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$query2 = req.query, current = _req$query2.current, pageSize = _req$query2.pageSize, category = _req$query2.category, field = _req$query2.field, sort = _req$query2.sort, rate = _req$query2.rate, price = _req$query2.price;
          _context6.next = 3;
          return _bookService["default"].getListBookHomeService(current, pageSize, category, field, sort, rate, price);
        case 3:
          data = _context6.sent;
          if (!(data && data.list)) {
            _context6.next = 8;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            data: {
              EC: 1,
              meta: {
                current: current,
                pageSize: pageSize,
                pages: Math.ceil(+data.total / +pageSize),
                total: data.total
              },
              result: data.list
            }
          }));
        case 8:
          return _context6.abrupt("return", res.status(400).json({
            message: "Something wrong ",
            EC: -1
          }));
        case 9:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getListBookHome(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var putBookAfterOrder = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return _bookService["default"].updateBookAfterOrder(+req.body.id, +req.body.count);
        case 2:
          data = _context7.sent;
          if (!(data && data.DT)) {
            _context7.next = 7;
            break;
          }
          return _context7.abrupt("return", res.status(200).json({
            EC: 1,
            data: data.DT
          }));
        case 7:
          return _context7.abrupt("return", res.status(400).json({
            message: "Có lỗi xảy ra"
          }));
        case 8:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function putBookAfterOrder(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var getListBookPopulateAll = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return _bookService["default"].listBookPopulateServiceAll();
        case 2:
          data = _context8.sent;
          if (!(data && data.DT)) {
            _context8.next = 7;
            break;
          }
          return _context8.abrupt("return", res.status(200).json({
            EC: 1,
            data: data.DT
          }));
        case 7:
          return _context8.abrupt("return", res.status(400).json({
            message: "Có lỗi xảy ra"
          }));
        case 8:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function getListBookPopulateAll(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var getListSearchBook = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$query3, current, pageSize, mainText, data;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _req$query3 = req.query, current = _req$query3.current, pageSize = _req$query3.pageSize, mainText = _req$query3.mainText;
          _context9.next = 3;
          return _bookService["default"].searchBookService(mainText, current, pageSize);
        case 3:
          data = _context9.sent;
          if (!(data && data.list)) {
            _context9.next = 8;
            break;
          }
          return _context9.abrupt("return", res.status(200).json({
            data: {
              EC: 1,
              meta: {
                current: current,
                pageSize: pageSize,
                pages: Math.ceil(+data.total / +pageSize),
                total: data.total
              },
              result: data.list
            }
          }));
        case 8:
          return _context9.abrupt("return", res.status(400).json({
            message: "Something wrong ",
            EC: -1
          }));
        case 9:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function getListSearchBook(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var _default = {
  postCreateBook: postCreateBook,
  getInfoBook: getInfoBook,
  getListBookPaginateAdmin: getListBookPaginateAdmin,
  deleteBook: deleteBook,
  updateBook: updateBook,
  getListBookHome: getListBookHome,
  putBookAfterOrder: putBookAfterOrder,
  getListBookPopulateAll: getListBookPopulateAll,
  getListSearchBook: getListSearchBook
};
exports["default"] = _default;