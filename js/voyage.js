//Clocks, for reseting time and location
document.getElementById("fireReset").addEventListener("click", (e) => {
    document.getElementById("fireClock").value = "Location";
    document.getElementById("fire").value = "";
});

document.getElementById("waterReset").addEventListener("click", (e) => {
    document.getElementById("waterClock").value = "Location";
    document.getElementById("water").value = "";
});

document.getElementById("airReset").addEventListener("click", (e) => {
    document.getElementById("airClock").value = "Location";
    document.getElementById("air").value = "";
});

document.getElementById("earthReset").addEventListener("click", (e) => {
    document.getElementById("earthClock").value = "Location";
    document.getElementById("earth").value = "";
});

//Outlets, for reseting them
document.getElementById("outletReset").addEventListener("click", (e) => {
    document.getElementById("acidOut").value = "Location";
    document.getElementById("waterOut").value = "Location";
    document.getElementById("electricOut").value = "Location";
    document.getElementById("fireOut").value = "Location";
});

//Planets
function getPlanet(sID, pID) { //Sets text for where it is
    const planet = sID.value;
    switch(planet) {
        case "neptune":
            pID.innerText = "Aft Deck"
            break;
        case "uranus":
            pID.innerText = "States";
            break;
        case "saturn":
            pID.innerText = "Bridge";
            break;
        case "jupiter":
            pID.innerText = "Engine Room";
            break;
        case "mars":
            pID.innerText = "Boiler Room";
            break;
        case "moon":
            pID.innerText = "Grand Staircase";
            break;
        case "venus":
            pID.innerText = "Millionaire Suite";
            break;
        case "mercury":
            pID.innerText = "Mail Room";
            break;
        default:
            pID.innerText = "";
    }
}

document.getElementById("planetReset").addEventListener("click", (e) => {
    //Resets the planets location and check value
    document.getElementById("1Planet").value = "Location";
    document.getElementById("1Done").checked = false;
    document.getElementById("2Planet").value = "Location";
    document.getElementById("2Done").checked = false;
    document.getElementById("3Planet").value = "Location";
    document.getElementById("3Done").checked = false;
    document.getElementById("4Planet").value = "Location";
    document.getElementById("4Done").checked = false;
    document.getElementById("5Planet").value = "Location";
    document.getElementById("5Done").checked = false;
    document.getElementById("6Planet").value = "Location";
    document.getElementById("6Done").checked = false;
    document.getElementById("7Planet").value = "Location";
    document.getElementById("7Done").checked = false;
    document.getElementById("8Planet").value = "Location";
    document.getElementById("8Done").checked = false;
    document.getElementById("9Done").checked = false;

    //updates the text
    getPlanet(document.getElementById("1Planet"), document.getElementById("p1"));
    getPlanet(document.getElementById("2Planet"), document.getElementById("p2"));
    getPlanet(document.getElementById("3Planet"), document.getElementById("p3"));
    getPlanet(document.getElementById("4Planet"), document.getElementById("p4"));
    getPlanet(document.getElementById("5Planet"), document.getElementById("p5"));
    getPlanet(document.getElementById("6Planet"), document.getElementById("p6"));
    getPlanet(document.getElementById("7Planet"), document.getElementById("p7"));
    getPlanet(document.getElementById("8Planet"), document.getElementById("p8"));
});

//Updates planet text
document.getElementById("1Planet").addEventListener("change", function(){getPlanet(document.getElementById("1Planet"), document.getElementById("p1"))});
document.getElementById("2Planet").addEventListener("change", function(){getPlanet(document.getElementById("2Planet"), document.getElementById("p2"))});
document.getElementById("3Planet").addEventListener("change", function(){getPlanet(document.getElementById("3Planet"), document.getElementById("p3"))});
document.getElementById("4Planet").addEventListener("change", function(){getPlanet(document.getElementById("4Planet"), document.getElementById("p4"))});
document.getElementById("5Planet").addEventListener("change", function(){getPlanet(document.getElementById("5Planet"), document.getElementById("p5"))});
document.getElementById("6Planet").addEventListener("change", function(){getPlanet(document.getElementById("6Planet"), document.getElementById("p6"))});
document.getElementById("7Planet").addEventListener("change", function(){getPlanet(document.getElementById("7Planet"), document.getElementById("p7"))});
document.getElementById("8Planet").addEventListener("change", function(){getPlanet(document.getElementById("8Planet"), document.getElementById("p8"))});