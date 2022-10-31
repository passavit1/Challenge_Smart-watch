setInterval(time, 1000);
setInterval(date, 1000);

function time() {
    const t = new Date();
    document.getElementById('time').innerHTML = t.toLocaleTimeString('th-TH', { hour12: false });
}

function date() {
    const d = new Date('31 Oct 2022');
    document.getElementById('date').innerHTML = d.toDateString('th-TH');
}