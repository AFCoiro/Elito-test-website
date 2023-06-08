const Jobs = [
{   dates:"2015 - 2016",
    img:"https://wpocean.com/html/tf/elito-live/assets/images/work/1.png",
    position:"Junior Visual Designer",
    company:"Trapeza Group, USA."}
,
{   dates:"2017 - 2018",
    img:"https://wpocean.com/html/tf/elito-live/assets/images/work/2.png",
    position:"UI/UX Designer ",
    company:"Gallerie Ontario, Canada (Remote)"}
,
{   dates:"2019 - 2020",
    img:"https://wpocean.com/html/tf/elito-live/assets/images/work/3.png",
    position:"Seinor UI/UX Desinger",
    company:"Morson Hybrid, Canada"}
,
{   dates:"2020 - Present",
    img:"https://wpocean.com/html/tf/elito-live/assets/images/work/4.png",
    position:"Product Designer",
    company:"Myant Inc. Etobicoke, ON (Remote)"}
];

const secExp2 = document.querySelector(".secExp2");

for(const job of Jobs){
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class','work');
    newDiv.innerHTML = `
            <h3 class="itemJob col-8 col-lg-4">${job.dates}</h3>
            <img src=${job.img} alt=""class="itemJob col-4 col-lg-2">
            <div class="itemJob col-8 col-lg-4">
                <h4>${job.position}</h4>
                <p>${job.company}</p>
            </div>
            <a href="" class="itemJob col-4 col-lg-2">→ Go to website</a>
    `;
    secExp2.append(newDiv);
}

