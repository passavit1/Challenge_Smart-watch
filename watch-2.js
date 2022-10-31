setInterval(time, 1000);
setInterval(date, 1000);

function time() {
    const t = new Date();
    document.getElementById('time').innerHTML = t.toLocaleTimeString('th-TH', { hour12: false });
}

function date() {
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const weakday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const info = new Date();
    let wd = weakday[info.getDay()]
    let d = info.getDate();
    let m = month[info.getMonth()];
    let y = info.getFullYear();
    let merge = wd + " " + d + ' ' + m + " " + y;
    document.getElementById('date').innerHTML = merge;
}