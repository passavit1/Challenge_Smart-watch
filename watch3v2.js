function ow() {
    let a = document.getElementById('ownername').value;
    document.getElementById('cownername').innerText = a
}


function bn() {
    let b = document.getElementById('bname').value;
    document.getElementById('cbname').innerText = b
}


function cn() {
    let c = document.getElementById('cnumber').value;
    if (c.length >= 5){
        let ca = c.match(/.{1,4}/g);
        let cb = ca.join(' ')
        document.getElementById('ccnumber').innerText = cb
    }
    else{
    document.getElementById('ccnumber').innerText = c
}
}


function mm() {
    let d = document.getElementById('mmyy').value;
    if (d.length >= 3){
        let da = d.match(/.{1,2}/g);
        let db = da.join('/')
        document.getElementById('cmmyy').innerText = db
    }
    else{
    document.getElementById('cmmyy').innerText = d
    }
}


function cvc() {
    let e = document.getElementById('cvc').value;
    document.getElementById('ccvc').innerText = e
}



