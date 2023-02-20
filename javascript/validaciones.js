/*const inputnacimiento=document.querySelector('#birth');
inputnacimiento.addEventListener('blur',(evento)=>{
validarNacimiento(evento.target);
})*/
export function validar(input){
    const tipoDeInput=input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input);
    }
    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector('.input-message-invalid').innerHTML=''

    } else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector('.input-message-error').innerHTML=
        mostrarMensajesDeError(tipoDeInput,input);


    }
}
const tiposDeErrores=[
    "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",

]
const mensajesDeError={
    nombre:{
        valueMissing:"este campo no puede estar vacio"
    },
    email:{
        valueMissing:"este campo no puede estar vacio",
        typeMismatch:"el correo no es valido"
    },
    password:{
        valueMissing:"este campo no puede estar vacio",
        patternMismatch:"al menos un mumero y una letra mayuscuala"


        
    },
    nacimiento:{
        valueMissing:"este campo no puedeestar vacio",
        customError:"Debes tener al menos 18 años"
    },
    numero:{
        valueMissing:"este campo no puede estar vacio",
        patternMismatch:"el formato requerido es de 10 numeros"

    },
    direccion:{
        valueMissing:"este campo no puede estar vacio",
        patternMismatch:"el formato requerido es de 10 numeros"

    },
    ciudad:{
        valueMissing:"este campo no puede estar vacio",
        patternMismatch:"el formato requerido es de 10 numeros"

    },
    estado:{
        valueMissing:"este campo no puede estar vacio",
        patternMismatch:"el formato requerido es de 10 numeros"

    }
        
};
const validadores={
    nacimiento: input=>validarNacimiento(input),
};
function mostrarMensajesDeError(tipoDeInput,input){
    let mensaje=''
    tiposDeErrores.forEach(error=>{
        if(input.validity[error]){
            console.log(tipoDeInput.error);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje=mensajesDeError[tipoDeInput][error];
        }
    })

    return mensaje;
}

function validarNacimiento(input){
    const fechaCliente=new Date( input.value);
    validarMayorEdad(fechaCliente);
    let mensaje='';
    if(!validarMayorEdad(fechaCliente)){
        mensaje="Debes tener al menos 18 años";


    }
    input.setCustomValidity(mensaje)

}

function validarMayorEdad(fecha){
    const fechaActual= new Date();
    const diferenciaFechas=new Date( fecha.getUTCFullYear()+18,fecha.getUTCMonth(), fecha.getUTCDay());
    console.log(diferenciaFechas);
    return diferenciaFechas <= fechaActual;

}
