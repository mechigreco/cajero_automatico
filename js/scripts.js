const user = [
    {nombre: "Marian", pwd: "12345", saldo:"200"},
    {nombre: "Mercedes", pwd: "54321", saldo:"290"},
    {nombre: "Pepa", pwd: "333", saldo:"67"},
];

const login_form = document.querySelector("#loginForm");
const estadodeCuenta = document.querySelector("#estadoCuenta");
var saldo;
var montoIngresado=document.querySelector("#dinero");

login_form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = login_form["nombre"];
    const pwd = login_form["pwd"];
    console.log(name, 'login input');
    console.log(pwd, 'login input');

    for (let index = 0; index < user.length; index++) {

        if(user[index].nombre==name.value && user[index].pwd== pwd.value){
            console.log('login');
            saldo = user[index].saldo
            console.log(saldo);
            const respuesta = template(user[index].nombre);
            estadodeCuenta.innerHTML = respuesta;
            return saldo;
        }else{
            console.log('incorrecto');
            const respuestaIncorrecta = template1('Usuario o Contraseña incorrectas')
            estadodeCuenta.innerHTML = respuestaIncorrecta
            
        }
    }
});

function template(respuesta){
    var rta = `<p> El usuario es ${respuesta}. Que operaciones desea realizar?</p> ` 
    // var rta = `<p> El usuario es ${respuesta}. Que operaciones desea realizar?</p> <button id="consultarSaldo" class="btn btn-primary">Consultar Saldo</button> <button id="ingresar" class="btn btn-primary">Ingresar Monto</button> <button id="retirar" class="btn btn-primary">Retirar Monto</button>` 

    return rta;
}

function template1 (respuestaIncorrecta){
    var rta = `<p> ${respuestaIncorrecta}, favor ingrese de nuevo </p>. <button type="reset" class="btn btn-danger">Reintentar</button>`
    return rta;
}
    
const botonConsultar = document.querySelector("#consultarSaldo");
console.log(botonConsultar);
const botonIngresar = document.querySelector("#ingresar");
const botoRetirar = document.querySelector("#retirar");

botonConsultar.addEventListener("click", function(event){
    event.preventDefault();
    
    console.log('aqui debe consultar su saldo');
    const btnConsulta = document.querySelector('#elSaldo')
    btnConsulta.innerHTML = template2(saldo);
})


botonIngresar.addEventListener("click", function(event){
    event.preventDefault();
    console.log('aqui debe ingresar su saldo');
    let saldoTemporal=parseInt(saldo)+parseInt(montoIngresado.value);

    if(saldoTemporal<10 || saldoTemporal >990) { 
        alert("no se puede realizar la operacion");

    }else{ 
        saldo=saldoTemporal;
        const btnIngresaMonto=document.querySelector("#saldoActual");
        console.log(btnIngresaMonto);
        btnIngresaMonto.innerHTML=template3(saldo);
    }
})

function template3 (saldo){
    var rta = `<p> ${saldo}, Su saldo actual es </p>`
    return rta;
}

botoRetirar.addEventListener("click", function(event){
    event.preventDefault();
    console.log('aqui debe retirar su saldo');
    let saldoTemporal=parseInt(saldo)-parseInt(montoIngresado.value);
    console.log(montoIngresado.value);
    console.log(saldo);
    if(saldoTemporal<10 || saldoTemporal >990) { 
        alert("no se puede realizar la operacion")
    }else{ 
        saldo=saldoTemporal;
        const btnRetirarMonto=document.querySelector("#saldoActual");
        console.log(btnRetirarMonto);
        btnRetirarMonto.innerHTML=template3(saldo);
    }

})

function template2 (saldo){
    const res = `<p>Su saldo disponible es ${saldo}</p>`;
    return res;
}
