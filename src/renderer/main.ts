document.getElementById('sleep')?.addEventListener('click', () => {
    // @ts-expect-error
    window.api?.sleep();
})
document.getElementById('league')?.addEventListener('click', () => {
    // @ts-expect-error
    window.api?.league();
})
document.getElementById('youtube')?.addEventListener('click', () => {
    // @ts-expect-error
    window.api?.youtube();
})
document.getElementById('roblox')?.addEventListener('click', () => {
    // @ts-expect-error
    window.api?.roblox();
})
document.getElementById('minecraft')?.addEventListener('click', () => {
    // @ts-expect-error
    window.api?.minecraft();
})
document.getElementById('lastbtn')?.addEventListener('click', () => {
    // @ts-expect-error
    window.api?.last();
})
document.getElementById('playbtn')?.addEventListener('click', () => {
    // @ts-expect-error
    window.api?.play();
})
document.getElementById('nextbtn')?.addEventListener('click', () => {
    // @ts-expect-error
    window.api?.next();
})
document.getElementById('volume')?.addEventListener('input', (e) => {
    const input = e.target as HTMLInputElement;
    const volume = input.value;
    // @ts-expect-error
    window.api?.volume(volume);
})
document.getElementById('minimize')?.addEventListener('click', () => {
    // @ts-expect-error
    window.api?.minimize();
})
document.getElementById('exit')?.addEventListener('click', () => {
    // @ts-expect-error
    window.api?.exit();
})

const glowCursor = document.getElementById('glowCursor');

if (glowCursor) {
    glowCursor.style.display = 'block';
}

document.addEventListener('mousemove', (e) => {
    if (glowCursor) {
        glowCursor.style.left = e.clientX + 'px';
        glowCursor.style.top = e.clientY + 'px';
    }
})

const counter = document.getElementById('counter');
const initialTime = 1122696000;
const averageLifespan = 82.96 * 365 * 24 * 60 * 60;

if (counter) {
    setInterval(() => {
        const time = Math.floor((Date.now() / 1000) - initialTime);
        const timeLeft = averageLifespan - time;
        counter.innerHTML = `Time remaining: ${timeLeft.toString()}`
    }, 1000);
}