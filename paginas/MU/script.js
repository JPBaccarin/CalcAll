

document.getElementById('calc_vm').onclick = calcular_VM;
document.getElementById('calc_am').onclick = calcular_AM;
document.getElementById('calc_fhd').onclick = calcular_FHD;
document.getElementById('reset').onclick = resetar;
document.getElementById('reset2').onclick = resetar_2;
document.getElementById('reset3').onclick = resetar_3;

function calcular_VM() {
    var ds = document.getElementById('DS').value;
    var dt = document.getElementById('DT').value;
    var vm = document.getElementById('VM').value;

    if (vm === '') {
        vm = parseFloat(ds) / parseFloat(dt)
        document.getElementById('VM').value = vm.toFixed(2);
    }
    if (ds === '') {
        ds = parseFloat(vm) * parseFloat(dt)
        document.getElementById('DS').value = ds.toFixed(2);
    }
    if (dt === '') {
        dt = parseFloat(ds) / parseFloat(vm);
        document.getElementById('DT').value = dt.toFixed(2);
    }
}

function calcular_AM() {
    var dva = document.getElementById('DVa').value;
    var dta = document.getElementById('DTa').value;
    var ama = document.getElementById('AMa').value;

    if (ama === '') {
        ama = parseFloat(dva) / parseFloat(dta)
        document.getElementById('AMa').value = ama.toFixed(2);
    }
    if (dva === '') {
        dva = parseFloat(ama) * parseFloat(dta)
        document.getElementById('DVa').value = dva.toFixed(2);
    }
    if (dta === '') {
        dta = parseFloat(dva) / parseFloat(ama);
        document.getElementById('DTa').value = dta.toFixed(2);
    }
}

function calcular_FHD() {
    var S = document.getElementById('S').value
    var So = document.getElementById('So').value
    var V = document.getElementById('V').value
    var T = document.getElementById('T').value

    if (S === '') {
        var S = parseFloat(So) + parseFloat(V) * parseFloat(T)
        var S = document.getElementById('S').value = S.toFixed(2)
    }
    else if (T === '') {
        var T = (parseFloat(S) + parseFloat(So)) / parseFloat(V)
        var T = document.getElementById('T').value = T.toFixed(2)
    }
    else if (So === '') {
        var So = parseFloat(S) / (parseFloat(V) * parseFloat(T))
        var So = document.getElementById('So').value = So.toFixed(2)
    }
    else if (V === '') {
        var V = (parseFloat(S) + (parseFloat(So)) / parseFloat(T))
        var V = document.getElementById('V').value = V.toFixed(2)
    }

}

function resetar_3() {
    var S = document.getElementById('S').value = '';
    var So = document.getElementById('So').value = '';
    var V = document.getElementById('V').value = '';
    var T = document.getElementById('T').value = '';
}
//resets
function resetar() {
    document.getElementById('DS').value = '';
    document.getElementById('DT').value = '';
    document.getElementById('VM').value = '';
}
function resetar_2() {
    document.getElementById('DVa').value = '';
    document.getElementById('DTa').value = '';
    document.getElementById('AMa').value = '';
}