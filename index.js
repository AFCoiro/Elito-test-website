/* Mouse mueve iconos flotantes */

let myHome = document.getElementById("myHome");
let iconProf1 = document.querySelectorAll(".iconProf1");
let iconProf2 = document.querySelectorAll(".iconProf2");
let iconProf3 = document.querySelectorAll(".iconProf3");


myHome.addEventListener('mousemove', (e) => {
  const mouse_x_position = e.pageX * -1 / 80;
  const mouse_y_position = e.pageY * -1 / 80;

  iconProf1[0].style.transform = `translate(${mouse_x_position}px, ${mouse_y_position}px)`;
  iconProf2[0].style.transform = `translate(${mouse_x_position}px, ${mouse_y_position}px)`;
  iconProf3[0].style.transform = `translate(${mouse_x_position}px, ${mouse_y_position}px)`;
})

/*Hidden Navbar */

let lastScrollTop;
let myHeader = document.getElementById('myHeader');
window.addEventListener('scroll',function(){
let scrollTop = window.pageY || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
    myHeader.style.top='-100px';
}
else{
    myHeader.style.top='0';
    myHeader.style.backgroundColor= `#242424`;
}
lastScrollTop = scrollTop;
if(window.scrollY<=1){
    myHeader.style.backgroundColor= `transparent`;
    let contentArrow = this.document.querySelector(".contentArrow").style.display = 'none';
  }else{
    let contentArrow = this.document.querySelector(".contentArrow").style.display = 'block';
  }        
});

/*Asignar clase activa a los Li del navbar */      
let myLi = document.querySelectorAll(".myLi");

for (let i = 0; i < myLi.length; i++) {
    myLi[i].addEventListener("click",fnActive);
    function fnActive() {
      let current = document.getElementsByClassName("activeLi");
      current[0].className = current[0].className.replace(" activeLi", "");
      this.className += " activeLi";
    };
  }
  /**/
const sections = document.querySelectorAll("article[id]");

window.addEventListener("scroll", ActiveScrollNav);

function ActiveScrollNav() {
  
  let myScroll = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 200;
    const sectionId = current.getAttribute("id");
    
    if (
      myScroll > sectionTop &&
      myScroll <= sectionTop + sectionHeight
    ){
      document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.add("activeLi");
    } else {
      document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.remove("activeLi");
    }
  });
}


/*carrousel de jquery*/

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        0: {
            items: 1
        }
    }
})


/*couner */
const counters = document.querySelectorAll(".counter");

counters.forEach((counter)=>{
    counter.innerText = "0";

    const updateCounter = ()=>{
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;
        // const increment = target / 80 va en el Math sumado a c;

        if(c < target){
            counter.innerText = `${c+7}`;
            setTimeout(updateCounter,70);
        }else{
            counter.innerText = target;
        }
    };
    updateCounter();
});

/*opiniones - carousel doble*/

let prevC = document.querySelectorAll(".carousel-control-prev");
let nextC = document.querySelectorAll(".carousel-control-next");

prevC[1].addEventListener("click",()=>{prevC[0].click()});
nextC[1].addEventListener("click",()=>{nextC[0].click()});