const randBtn = document.querySelector(".rand-btn");
const cityName = document.querySelector(".cityname");
const image = document.querySelector(".rand-img");

randBtn.addEventListener("click", ()=>{
    var n = Math.floor(Math.random()*6+1);
    switch(n) {
        case 1:
            showCity("Delhi");
            break;
        case 2:
            showCity("Mumbai");
            break;
        case 3:
            showCity("Bangalore");
            break;
        case 4:
            showCity("Kolkata");
            break;         
        case 5:
            showCity("Chennai");
            break;
        case 6:
            showCity("Hyderabad");
            break;
    }
    console.log("working");
});


function showCity (n) {
    randomCity = n + ".jpg";
    randomImageSource = "images/" + randomCity;
    image.setAttribute("src", randomImageSource);
    cityName.innerHTML = "This is " + n;
}
