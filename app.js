const randBtn = document.querySelector(".rand-btn");
const cityHead = document.querySelector(".city-heading");
const image = document.querySelector(".rand-img");
const link = document.querySelector(".random-link");
randBtn.addEventListener("click", ()=>{
    var n = Math.floor(Math.random()*10+1);
    switch(n) {
        case 1:
            showCity("Kerala");
            break;
        case 2:
            showCity("Goa");
            break;
        case 3:
            showCity("Rajasthan");
            break;
        case 4:
            showCity("Punjab");
            break;         
        case 5:
            showCity("Tamil-Nadu");
            break;
        case 6:
            showCity("France");
            break;
        case 7:
            showCity("Scotland");
            break;
        case 8:
            showCity("Cuba");
            break;
        case 9:
            showCity("Peru");
            break; 
        case 10:
            showCity("Vietnam");
            break;                   
    }
    console.log("working");
});


function showCity (n) {
    randomImageSource = "images/random-" + n +".png";
    image.setAttribute("src", randomImageSource);
    randomCityLink = "html/" + n + ".html";
    link.setAttribute("href", randomCityLink);
}
