const randBtn = document.querySelector(".rand-btn");
const cityName = document.querySelector(".cityname");
const image = document.querySelector(".rand-img");

randBtn.addEventListener("click", ()=>{
    var n = Math.floor(Math.random()*5+1);
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
    }
    console.log("working");
});


function showCity (n) {
    randomImageSource = "images/random-" + n +".jpg";
    image.setAttribute("src", randomImageSource);
    cityName.innerHTML = "This is " + n;
}
