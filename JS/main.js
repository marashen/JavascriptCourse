function dict() {
  var ani = {
    Species: "Dog",
    Color: "Black",
    Breed: "Labrador",
    Age: "5",
    Sound: "Bark!",
    };
    delete ani.Sound;
    document.getElementById("dicti").innerHTML = ani.Sound;
}
