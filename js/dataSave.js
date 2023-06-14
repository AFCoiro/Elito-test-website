
/*asignar clase activa a plan seleccionado */
let plan = document.querySelectorAll(".plan");
let planBtn = document.querySelectorAll(".planBtn");
let selectPlan;

for (let i = 0; i < planBtn.length; i++) {
  planBtn[i].addEventListener("click",fnActive);
  function fnActive() {
    let activo = document.getElementsByClassName(" planBtnAct");
    if (activo.length > 0) {
      activo[0].className = activo[0].className.replace(" planBtnAct", "");
    }
    this.className += " planBtnAct";

    selectPlan = plan[i].name;
    return selectPlan;
  };

}

/*Guardar correo email y plan elegido en localstorage y en array*/
let myform = document.querySelector(".myform");
let myInputMail = document.querySelector(".myInputMail");
let submitEnvelope = document.querySelector(".formEnvelope");

class Clientes {
  constructor(id,plan,correo) {
    this.id = id;
    this.plan = plan;
    this.correo = correo;
   }
}
const arrayClientes = [];

myform.addEventListener("submit",(e)=>{
e.preventDefault();

let usuarioClave = "Usuario"+arrayClientes.length;
let clienteJson = new Clientes(arrayClientes.length, selectPlan, myInputMail.value);

localStorage.setItem(usuarioClave, JSON.stringify(clienteJson));

let clienteString = localStorage.getItem(usuarioClave);

arrayClientes.push(JSON.parse(clienteString));
  
  console.log("usuario : "+clienteString);    
  Toastify({
    text: `We send you a e-mail to ${myInputMail.value}`,
    duration: 5000,
    close: true,
    stopOnFocus: true, 
    style: {
      background: "rgb(65, 182, 41)",
    },
    }).showToast();

  myInputMail.value = "";
});

  
