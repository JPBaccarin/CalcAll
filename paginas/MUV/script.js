

document.getElementById('calc_T').onclick = calcular_T;
document.getElementById('calc_FHP').onclick = calcular_FHP;
document.getElementById('calc_V').onclick = calcular_V;

document.getElementById('reset').onclick = resetar;
document.getElementById('reset_2').onclick = resetar_2;
document.getElementById('reset_3').onclick = resetar_3;

function calcular_T() {
    var V = document.getElementById('V').value
    var Vo = document.getElementById('Vo').value
    var A = document.getElementById('A').value
    var ΔS = document.getElementById('ΔS').value
    var dois = document.getElementById('dois').value


    if (V === '') {
        V = Math.pow(parseFloat(Vo), 2) + parseFloat(dois) * parseFloat(A) * parseFloat(ΔS)
        V = Math.sqrt(V)
        V = document.getElementById('V').value = V.toFixed(2)
    }
    else if (A === '') {
        A = (Math.pow(parseFloat(V), 2) - Math.pow(parseFloat(Vo), 2)) / (parseFloat(ΔS) * parseFloat(dois))
        A = document.getElementById('A').value = A.toFixed(2)
    }
    else if (Vo === '') {
        Vo = ((parseFloat(dois) * parseFloat(A)) * parseFloat(ΔS))
        Vo = Math.sqrt(Vo)
        Vo = document.getElementById('Vo').value = Vo.toFixed(2)
    }
    else if (ΔS === '') {
        ΔS = (Math.pow(parseFloat(V), 2) - Math.pow(parseFloat(Vo), 2)) / (parseFloat(A) * parseFloat(dois))
        ΔS = document.getElementById('ΔS').value = ΔS.toFixed(2)
    }


}

function calcular_FHP() {
    var S_2 = document.getElementById('S_2').value
    var So_2 = document.getElementById('So_2').value
    var T_2 = document.getElementById('T_2').value
    var A_2 = document.getElementById('A_2').value
    var Vo_2 = document.getElementById('Vo_2').value
    var T2_2 = document.getElementById('T2_2').value

    if (S_2 === '') {
        S_2 = parseFloat(So_2) + parseFloat(Vo_2) * parseFloat(T_2) + parseFloat(A_2) * Math.pow(T2_2, 2) / 2
        S_2 = document.getElementById('S_2').value = S_2.toFixed(2);
    }
    else if (A_2 === '') {
        var A_2 = (parseFloat(V_2) + parseFloat(Vo_2)) / parseFloat(T_2)
        var A_2 = document.getElementById('A_2').value = A_2.toFixed(2)
    }

}

function calcular_V(){
    var V_3 = document.getElementById('V_3').value
    var Vo_3 = document.getElementById('Vo_3').value
    var A_3 = document.getElementById('A_3').value
    var T_3 = document.getElementById('T_3').value

    if (V_3 === '') {
        var V_3 = parseFloat(Vo_3) + parseFloat(A_3) * parseFloat(T_3)
        var V_3 = document.getElementById('V_3').value = V_3.toFixed(2)
    }
    else if (T_3 === '') {
        var T_3 = (parseFloat(V_3) + parseFloat(Vo_3)) / parseFloat(A_3)
        var T_3 = document.getElementById('T_3').value = T_3.toFixed(2)
    }
    else if (Vo_3 === '') {
        var Vo_3 = parseFloat(V_3) / (parseFloat(A_3) * parseFloat(T_3))
        var Vo_3 = document.getElementById('Vo_3').value = Vo_3.toFixed(2)
    }
    else if (A_3 === '') {
        var A_3 = (parseFloat(V_3) + parseFloat(Vo_3)) / parseFloat(T_3)
        var A_3 = document.getElementById('A_3').value = A_3.toFixed(2)
    }
}


function resetar() {
    var V = document.getElementById('V').value = '';
    var Vo = document.getElementById('Vo').value = '';
    var A = document.getElementById('A').value = '';
    var ΔS = document.getElementById('ΔS').value = '';
    var dois = document.getElementById('dois').value = '';
}

function resetar_2() {
    document.getElementById('S_2').value = '';
    document.getElementById('So_2').value = '';
    document.getElementById('T_2').value = '';
    document.getElementById('A_2').value = '';
    document.getElementById('Vo_2').value = '';
    document.getElementById('T2_2').value = '';
}
function resetar_3() {
    var V = document.getElementById('V_3').value = '';
    var Vo = document.getElementById('Vo_3').value = '';
    var A = document.getElementById('A_3').value = '';
    var T = document.getElementById('T_3').value = '';
}