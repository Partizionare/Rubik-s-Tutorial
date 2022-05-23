var started = false, space, resetted;
var startTime = 0, dec = 0, sec = 0;
var counterdown = 0, counterup = 0;
var best = 0, worst = 0;
const tempi = [];
var n = 0;

function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}

function media(n, array) {
    var somma = 0;
    for (let index = 0; index < n; index++) {
        somma += array[index];
    }
    somma = parseFloat(somma);
    n = parseFloat(n);
    return roundUp((somma / n), 2);
}

function migliore(valore) {
    if (valore < best || best == 0) {
        best = valore;
    }
    return best;
}

function peggiore(valore) {
    if (valore > worst || worst == 0) {
        worst = valore;
    }
    return worst;
}

function timerFunc() {
    if (started) {
        dec = parseInt(dec);
        sec = parseInt(sec);

        dec += 1;

        if (dec == 100) {
            sec += 1;
            dec = 0;
        }

        document.getElementById('timer').innerHTML = sec + "." + dec;

        setTimeout(timerFunc, 10);
    }
}

function startTimer() {
    if (!started) {
        started = true;
        timerFunc();
    }
}

document.addEventListener("keyup", (event) => {
    if (event.keyCode == 32) {
        space = false;
        if (!space && !resetted) {
            startTimer();
        }
    }
})

document.addEventListener("keydown", (event) => {
    if (event.keyCode == 32) {
        space = true;
        resetted = false;
        t = parseFloat(sec + "." + dec);
        if (space && t != 0.00) {
            // Aggiunta valori alla tabella
            var tbody = document.getElementById('tbody_tempo');
            tbody.innerHTML += "<tr><td>" + n + "</td><td>" + sec + "." + dec + "</td></tr>";
            // Array dei tempi      
            tempi[n] = t;
            n++;
            // Aggiornamento Tabella Statistiche
            document.getElementById('media').innerHTML = "Media: " + media(n, tempi);
            document.getElementById('best').innerHTML = "Migliore: " + migliore(t);
            document.getElementById('worst').innerHTML = "Peggiore: " + peggiore(t);
            // Reset Cronometro 
            started = false;
            dec = 0;
            sec = 0;
            document.getElementById('timer').innerHTML = "0.00";
            resetted = true;
        }
    }
})
