"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
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
(_c = document.getElementById('youtube')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    var _a;
    // @ts-expect-error
    (_a = window.api) === null || _a === void 0 ? void 0 : _a.youtube();
});
(_d = document.getElementById('roblox')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
    var _a;
    // @ts-expect-error
    (_a = window.api) === null || _a === void 0 ? void 0 : _a.roblox();
});
(_e = document.getElementById('minecraft')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
    var _a;
    // @ts-expect-error
    (_a = window.api) === null || _a === void 0 ? void 0 : _a.minecraft();
});
(_f = document.getElementById('lastbtn')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', () => {
    var _a;
    // @ts-expect-error
    (_a = window.api) === null || _a === void 0 ? void 0 : _a.last();
});
(_g = document.getElementById('playbtn')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', () => {
    var _a;
    // @ts-expect-error
    (_a = window.api) === null || _a === void 0 ? void 0 : _a.play();
});
(_h = document.getElementById('nextbtn')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', () => {
    var _a;
    // @ts-expect-error
    (_a = window.api) === null || _a === void 0 ? void 0 : _a.next();
});
(_j = document.getElementById('volume')) === null || _j === void 0 ? void 0 : _j.addEventListener('input', (e) => {
    var _a;
    const input = e.target;
    const volume = input.value;
    // @ts-expect-error
    (_a = window.api) === null || _a === void 0 ? void 0 : _a.volume(volume);
});
(_k = document.getElementById('minimize')) === null || _k === void 0 ? void 0 : _k.addEventListener('click', () => {
    var _a;
    // @ts-expect-error
    (_a = window.api) === null || _a === void 0 ? void 0 : _a.minimize();
});
(_l = document.getElementById('exit')) === null || _l === void 0 ? void 0 : _l.addEventListener('click', () => {
    var _a;
    // @ts-expect-error
    (_a = window.api) === null || _a === void 0 ? void 0 : _a.exit();
});
const glowCursor = document.getElementById('glowCursor');
if (glowCursor) {
    glowCursor.style.display = 'block';
}
document.addEventListener('mousemove', (e) => {
    if (glowCursor) {
        glowCursor.style.left = e.clientX + 'px';
        glowCursor.style.top = e.clientY + 'px';
    }
});
const counter = document.getElementById('counter');
const initialTime = 1122696000;
const averageLifespan = 82.96 * 365 * 24 * 60 * 60;
if (counter) {
    setInterval(() => {
        const time = Math.floor((Date.now() / 1000) - initialTime);
        const timeLeft = averageLifespan - time;
        counter.innerHTML = `Time remaining: ${timeLeft.toString()}`;
    }, 1000);
}
