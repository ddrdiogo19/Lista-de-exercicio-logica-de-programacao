let eleitores = 1000;
let validos = 850;
let brancos = 100; 
let nulos = 50

function cal_validos () {
    cal_validos = console.log((validos) *0.1)
    return console.log ("É a porcentagem de votos validos")
}

function cal_brancos () {
    cal_brancos = console.log (brancos *0.1)
    return console.log ("É a porcentagem de votos em branco")
}

function cal_nulos () {
    cal_nulos = console.log (nulos *0.1)
    return console.log ("É a porcentagem de votos nulos")
}

cal_validos ();
cal_brancos ();
cal_nulos (); 
