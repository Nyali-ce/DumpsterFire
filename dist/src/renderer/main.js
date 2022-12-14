"use strict";
var _a, _b, _c;
(_a = document.getElementById('sleep')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    var _a;
    // @ts-expect-error
    (_a = window.api) === null || _a === void 0 ? void 0 : _a.sleep();
});
(_b = document.getElementById('league')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    var _a;
    // @ts-expect-error
    (_a = window.api) === null || _a === void 0 ? void 0 : _a.league();
});
(_c = document.getElementById('exit')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    var _a;
    // @ts-expect-error
    (_a = window.api) === null || _a === void 0 ? void 0 : _a.exit();
});
