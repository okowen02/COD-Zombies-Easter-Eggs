//Mail Clocks
document.getElementById("mailFire").addEventListener("click", (e) => {
    document.getElementById("mailFire").style.border = "3px solid red";
    document.getElementById("mailWater").style.border = "3px solid gray";
    document.getElementById("mailAir").style.border = "3px solid gray";
    document.getElementById("mailEarth").style.border = "3px solid gray";
});

document.getElementById("mailWater").addEventListener("click", (e) => {
    document.getElementById("mailWater").style.border = "3px solid red";
    document.getElementById("mailFire").style.border = "3px solid gray";
    document.getElementById("mailAir").style.border = "3px solid gray";
    document.getElementById("mailEarth").style.border = "3px solid gray";
});

document.getElementById("mailAir").addEventListener("click", (e) => {
    document.getElementById("mailAir").style.border = "3px solid red";
    document.getElementById("mailWater").style.border = "3px solid gray";
    document.getElementById("mailFire").style.border = "3px solid gray";
    document.getElementById("mailEarth").style.border = "3px solid gray";
});

document.getElementById("mailEarth").addEventListener("click", (e) => {
    document.getElementById("mailEarth").style.border = "3px solid red";
    document.getElementById("mailWater").style.border = "3px solid gray";
    document.getElementById("mailAir").style.border = "3px solid gray";
    document.getElementById("mailFire").style.border = "3px solid gray";
});

document.getElementById("mailReset").addEventListener("click", (e) => {
    document.getElementById("mailEarth").style.border = "3px solid gray";
    document.getElementById("mailWater").style.border = "3px solid gray";
    document.getElementById("mailAir").style.border = "3px solid gray";
    document.getElementById("mailFire").style.border = "3px solid gray";
    document.getElementById("mailClock").value = "";
});

//Captains Clocks
document.getElementById("capFire").addEventListener("click", (e) => {
    document.getElementById("capFire").style.border = "3px solid red";
    document.getElementById("capWater").style.border = "3px solid gray";
    document.getElementById("capAir").style.border = "3px solid gray";
    document.getElementById("capEarth").style.border = "3px solid gray";
});

document.getElementById("capWater").addEventListener("click", (e) => {
    document.getElementById("capWater").style.border = "3px solid red";
    document.getElementById("capFire").style.border = "3px solid gray";
    document.getElementById("capAir").style.border = "3px solid gray";
    document.getElementById("capEarth").style.border = "3px solid gray";
});

document.getElementById("capAir").addEventListener("click", (e) => {
    document.getElementById("capAir").style.border = "3px solid red";
    document.getElementById("capWater").style.border = "3px solid gray";
    document.getElementById("capFire").style.border = "3px solid gray";
    document.getElementById("capEarth").style.border = "3px solid gray";
});

document.getElementById("capEarth").addEventListener("click", (e) => {
    document.getElementById("capEarth").style.border = "3px solid red";
    document.getElementById("capWater").style.border = "3px solid gray";
    document.getElementById("capAir").style.border = "3px solid gray";
    document.getElementById("capFire").style.border = "3px solid gray";
});

document.getElementById("capReset").addEventListener("click", (e) => {
    document.getElementById("capEarth").style.border = "3px solid gray";
    document.getElementById("capWater").style.border = "3px solid gray";
    document.getElementById("capAir").style.border = "3px solid gray";
    document.getElementById("capFire").style.border = "3px solid gray";
    document.getElementById("capClock").value = "";
});

//Grand Staircase
document.getElementById("grandFire").addEventListener("click", (e) => {
    document.getElementById("grandFire").style.border = "3px solid red";
    document.getElementById("grandWater").style.border = "3px solid gray";
    document.getElementById("grandAir").style.border = "3px solid gray";
    document.getElementById("grandEarth").style.border = "3px solid gray";
});

document.getElementById("grandWater").addEventListener("click", (e) => {
    document.getElementById("grandWater").style.border = "3px solid red";
    document.getElementById("grandFire").style.border = "3px solid gray";
    document.getElementById("grandAir").style.border = "3px solid gray";
    document.getElementById("grandEarth").style.border = "3px solid gray";
});

document.getElementById("grandAir").addEventListener("click", (e) => {
    document.getElementById("grandAir").style.border = "3px solid red";
    document.getElementById("grandWater").style.border = "3px solid gray";
    document.getElementById("grandFire").style.border = "3px solid gray";
    document.getElementById("grandEarth").style.border = "3px solid gray";
});

document.getElementById("grandEarth").addEventListener("click", (e) => {
    document.getElementById("grandEarth").style.border = "3px solid red";
    document.getElementById("grandWater").style.border = "3px solid gray";
    document.getElementById("grandAir").style.border = "3px solid gray";
    document.getElementById("grandFire").style.border = "3px solid gray";
});

document.getElementById("grandReset").addEventListener("click", (e) => {
    document.getElementById("grandEarth").style.border = "3px solid gray";
    document.getElementById("grandWater").style.border = "3px solid gray";
    document.getElementById("grandAir").style.border = "3px solid gray";
    document.getElementById("grandFire").style.border = "3px solid gray";
    document.getElementById("grandClock").value = "";
});

//1st class
document.getElementById("1stFire").addEventListener("click", (e) => {
    document.getElementById("1stFire").style.border = "3px solid red";
    document.getElementById("1stWater").style.border = "3px solid gray";
    document.getElementById("1stAir").style.border = "3px solid gray";
    document.getElementById("1stEarth").style.border = "3px solid gray";
});

document.getElementById("1stWater").addEventListener("click", (e) => {
    document.getElementById("1stWater").style.border = "3px solid red";
    document.getElementById("1stFire").style.border = "3px solid gray";
    document.getElementById("1stAir").style.border = "3px solid gray";
    document.getElementById("1stEarth").style.border = "3px solid gray";
});

document.getElementById("1stAir").addEventListener("click", (e) => {
    document.getElementById("1stAir").style.border = "3px solid red";
    document.getElementById("1stWater").style.border = "3px solid gray";
    document.getElementById("1stFire").style.border = "3px solid gray";
    document.getElementById("1stEarth").style.border = "3px solid gray";
});

document.getElementById("1stEarth").addEventListener("click", (e) => {
    document.getElementById("1stEarth").style.border = "3px solid red";
    document.getElementById("1stWater").style.border = "3px solid gray";
    document.getElementById("1stAir").style.border = "3px solid gray";
    document.getElementById("1stFire").style.border = "3px solid gray";
});

document.getElementById("1stReset").addEventListener("click", (e) => {
    document.getElementById("1stEarth").style.border = "3px solid gray";
    document.getElementById("1stWater").style.border = "3px solid gray";
    document.getElementById("1stAir").style.border = "3px solid gray";
    document.getElementById("1stFire").style.border = "3px solid gray";
    document.getElementById("1stClock").value = "";
});

//3rd class
document.getElementById("3rdFire").addEventListener("click", (e) => {
    document.getElementById("3rdFire").style.border = "3px solid red";
    document.getElementById("3rdWater").style.border = "3px solid gray";
    document.getElementById("3rdAir").style.border = "3px solid gray";
    document.getElementById("3rdEarth").style.border = "3px solid gray";
});

document.getElementById("3rdWater").addEventListener("click", (e) => {
    document.getElementById("3rdWater").style.border = "3px solid red";
    document.getElementById("3rdFire").style.border = "3px solid gray";
    document.getElementById("3rdAir").style.border = "3px solid gray";
    document.getElementById("3rdEarth").style.border = "3px solid gray";
});

document.getElementById("3rdAir").addEventListener("click", (e) => {
    document.getElementById("3rdAir").style.border = "3px solid red";
    document.getElementById("3rdWater").style.border = "3px solid gray";
    document.getElementById("3rdFire").style.border = "3px solid gray";
    document.getElementById("3rdEarth").style.border = "3px solid gray";
});

document.getElementById("3rdEarth").addEventListener("click", (e) => {
    document.getElementById("3rdEarth").style.border = "3px solid red";
    document.getElementById("3rdWater").style.border = "3px solid gray";
    document.getElementById("3rdAir").style.border = "3px solid gray";
    document.getElementById("3rdFire").style.border = "3px solid gray";
});

document.getElementById("3rdReset").addEventListener("click", (e) => {
    document.getElementById("3rdEarth").style.border = "3px solid gray";
    document.getElementById("3rdWater").style.border = "3px solid gray";
    document.getElementById("3rdAir").style.border = "3px solid gray";
    document.getElementById("3rdFire").style.border = "3px solid gray";
    document.getElementById("3rdClock").value = "";
});

//Galley
document.getElementById("galFire").addEventListener("click", (e) => {
    document.getElementById("galFire").style.border = "3px solid red";
    document.getElementById("galWater").style.border = "3px solid gray";
    document.getElementById("galAir").style.border = "3px solid gray";
    document.getElementById("galEarth").style.border = "3px solid gray";
});

document.getElementById("galWater").addEventListener("click", (e) => {
    document.getElementById("galWater").style.border = "3px solid red";
    document.getElementById("galFire").style.border = "3px solid gray";
    document.getElementById("galAir").style.border = "3px solid gray";
    document.getElementById("galEarth").style.border = "3px solid gray";
});

document.getElementById("galAir").addEventListener("click", (e) => {
    document.getElementById("galAir").style.border = "3px solid red";
    document.getElementById("galWater").style.border = "3px solid gray";
    document.getElementById("galFire").style.border = "3px solid gray";
    document.getElementById("galEarth").style.border = "3px solid gray";
});

document.getElementById("galEarth").addEventListener("click", (e) => {
    document.getElementById("galEarth").style.border = "3px solid red";
    document.getElementById("galWater").style.border = "3px solid gray";
    document.getElementById("galAir").style.border = "3px solid gray";
    document.getElementById("galFire").style.border = "3px solid gray";
});

document.getElementById("galReset").addEventListener("click", (e) => {
    document.getElementById("galEarth").style.border = "3px solid gray";
    document.getElementById("galWater").style.border = "3px solid gray";
    document.getElementById("galAir").style.border = "3px solid gray";
    document.getElementById("galFire").style.border = "3px solid gray";
    document.getElementById("galClock").value = "";
});

//Outlets
document.getElementById("outletReset").addEventListener("click", (e) => {
    document.getElementById("stateOut").value = "";
    document.getElementById("grandOut").value = "";
    document.getElementById("3rdOut").value = "";
    document.getElementById("aftOut").value = "";
    document.getElementById("dineOut").value = "";
    document.getElementById("1stOut").value = "";
});

//Planets
document.getElementById("planetReset").addEventListener("click", (e) => {
    document.getElementById("1Planet").value = "";
    document.getElementById("1Done").checked = false;
    document.getElementById("2Planet").value = "";
    document.getElementById("2Done").checked = false;
    document.getElementById("3Planet").value = "";
    document.getElementById("3Done").checked = false;
    document.getElementById("4Planet").value = "";
    document.getElementById("4Done").checked = false;
    document.getElementById("5Planet").value = "";
    document.getElementById("5Done").checked = false;
    document.getElementById("6Planet").value = "";
    document.getElementById("6Done").checked = false;
    document.getElementById("7Planet").value = "";
    document.getElementById("7Done").checked = false;
    document.getElementById("8Planet").value = "";
    document.getElementById("8Done").checked = false;
    document.getElementById("9Done").checked = false;
});