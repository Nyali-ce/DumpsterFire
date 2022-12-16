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
document.getElementById('exit')?.addEventListener('click', () => {
    // @ts-expect-error
    window.api?.exit();
})