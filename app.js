let boton1 = document.getElementById('sumar');
let boton2 = document.getElementById('restar');
let boton3 = document.getElementById('multiplicar');
let boton4 = document.getElementById('dividir');
let respuesta = document.getElementById('respuesta');

boton1.addEventListener('click', hacersuma);
boton2.addEventListener('click', hacerresta);
boton3.addEventListener('click', hacermultiplicar);
boton4.addEventListener('click', hacerdividir);

function hacersuma(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3 =n1+n2;
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}

function hacerresta(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3 =n1-n2;
    respuesta.innerHTML=`El resultado de la resta es: ${n3}`;
}

function hacermultiplicar(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3 =n1*n2;
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}

function hacerdividir(){
    let n1=parseFloat(document.getElementById('n1').value);
    let n2=parseFloat(document.getElementById('n2').value);
    let n3 =n1/n2;
    respuesta.innerHTML=`El resultado de la resta es: ${n3}`;
}