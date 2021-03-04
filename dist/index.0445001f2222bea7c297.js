(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

async function getComponent() {
	const element = document.createElement('div');
	const { default: _ } = await __webpack_require__.e(/*! import() */ "vendors").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "./node_modules/lodash/lodash.js", 23));
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	return element;
}

getComponent().then((component) => {
	document.body.appendChild(component);
});


/***/ })

},
0,[["./src/index.js","runtime"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsUUFBUSxhQUFhLFNBQVMsMkpBQWdCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJpbmRleC4wNDQ1MDAxZjIyMjJiZWE3YzI5Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbImFzeW5jIGZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCB7IGRlZmF1bHQ6IF8gfSA9IGF3YWl0IGltcG9ydCgnbG9kYXNoJyk7XG5cdGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuZ2V0Q29tcG9uZW50KCkudGhlbigoY29tcG9uZW50KSA9PiB7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==