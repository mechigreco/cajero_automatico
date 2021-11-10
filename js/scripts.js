const user = [
    {nombre: "Marian", pwd: "12345", saldo:"200"},
    {nombre: "Mercedes", pwd: "54321", saldo:"290"},
    {nombre: "Pepa", pwd: "333", saldo:"67"},
];

const login_form = document.querySelector("#loginForm");
let bandera = false;
const estadodeCuenta = document.querySelector("#estadoCuenta");
var saldo;
var montoIngresado=document.querySelector("#dinero");

login_form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = event.target["nombre"].value;
    const pwd = event.target["pwd"].value;
    console.log(name, 'login input');
    console.log(pwd, 'login input');
    
    const filtro = user.filter((index)=> index.nombre=== name && index.pwd === pwd);
    console.log(filtro);
    
    if (filtro.length<=0){
        console.log('incorrecto');
        const respuestaIncorrecta = template1('Usuario o Contraseña incorrecto');
        estadodeCuenta.innerHTML = respuestaIncorrecta;
        bandera = false;
    }else{
        console.log('correcto');
        estadodeCuenta.innerHTML = ''
        saldo = filtro[0].saldo;
        console.log(saldo);
        const respuesta = template(filtro[0].nombre);
        estadodeCuenta.innerHTML = respuesta;
        bandera = true;
        const mostrar = document.getElementById('operaciones');
        console.log(mostrar);

        if(bandera){
            console.log('en el si');
            mostrar.style.visibility="visible";
        }else{
            console.log('en el no');
            mostrar.style.visibility="hidden";
        }

        return saldo;
    }
});


function template(respuesta){
    var rta = `<p> El usuario es ${respuesta}. Que operaciones desea realizar?</p> ` 

    return rta;
}

function template1 (respuestaIncorrecta){
    var rta = `<p> ${respuestaIncorrecta}, favor ingrese de nuevo </p>. <button id="btnReset" type="reset" class="btn btn-danger">Reintentar</button>`
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
        montoIngresado.value='';
    }
})

function template3 (saldo){
    var rta = `<p>  Su saldo actual es ${saldo}</p>`
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
        montoIngresado.value='';

    }

})

function template2 (saldo){
    const res = `<p>Su saldo disponible es ${saldo}</p>`;
    return res;
}
