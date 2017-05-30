console.log("Hi");
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];


planets.forEach(planetfunc);

function planetfunc(item) {
    var planettext = document.getElementById("planets");
    planettext.innerHTML = planettext.innerHTML + item + "<br>"
}
var el = document.getElementById("planets1");
var newarray = planets.map(function(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);

});

el.innerHTML = newarray;
var el2 = document.getElementById("planets2");
var newarray1 = planets.filter(function(value, index) {
    return value.includes("e");
});
el2.innerHTML = newarray1;





var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];


var sentence = words.reduce(function(value1, value2) {
    return value1 + " " + value2;

});
document.getElementById("planets3").innerHTML = sentence;
