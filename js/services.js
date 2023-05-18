/*Popular Services Btn navigation */
let btnSec = document.querySelectorAll(".btnSec");
let subArt2 = document.querySelector(".subArt2");

// btnactivo y contenido de service

for (let i = 0; i < btnSec.length; i++) {
    btnSec[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("btnactivo");
      current[0].className = current[0].className.replace(" btnactivo", "");
      this.className += " btnactivo";
      subArt2.innerHTML = arrayServ[i];
    });
  }


let arrayServ = [
    `
    <div class="myCards">
        <div class="divImgArt"><img src="./img/icons/icon1-1.png" alt="icono diseño" class="imgArt"></div>
        <h3>Web Development</h3>
        <p>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.</p>
    </div>
    <div class="myCards">
        <div class="divImgArt"><img src="./img/icons/icon1-2.png" alt="icono diseño" class="imgArt"></div>
        <h3>App Development</h3>
        <p>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.</p>
    </div>
    <div class="myCards">
        <div class="divImgArt"><img src="./img/icons/icon1-3.png" alt="icono diseño" class="imgArt"></div>
        <h3>Softwere Development</h3>
        <p>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.</p>
    </div>`,
    `
    <div class="myCards">
        <div class="divImgArt"><img src="./img/icons/icon2-1.png" alt="icono diseño" class="imgArt"></div>
        <h3>Graphic Design</h3>
        <p>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.</p>
    </div>
    <div class="myCards">
        <div class="divImgArt"><img src="./img/icons/icon2-2.png" alt="icono diseño" class="imgArt"></div>
        <h3>Brand Identity</h3>
        <p>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.</p>
    </div>
    <div class="myCards">
        <div class="divImgArt"><img src="./img/icons/icon2-3.png" alt="icono diseño" class="imgArt"></div>
        <h3>UI/UX Design</h3>
        <p>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.</p>
    </div>`,
    `
    <div class="myCards">
        <div class="divImgArt"><img src="./img/icons/icon3-1.png" alt="icono diseño" class="imgArt"></div>
        <h3>Social Media Marketing</h3>
        <p>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.</p>
    </div>
    <div class="myCards">
        <div class="divImgArt"><img src="./img/icons/icon3-2.png" alt="icono diseño" class="imgArt"></div>
        <h3>Digital Marketing</h3>
        <p>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.</p>
    </div>
    <div class="myCards">
        <div class="divImgArt"><img src="./img/icons/icon3-3.png" alt="icono diseño" class="imgArt"></div>
        <h3>Email Marketing</h3>
        <p>Explain to you how all this mistaken idea of denouncing pleasure born and give you complete account the system.</p>
    </div>`];