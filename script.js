const curtain = document.getElementById('curtain');
const Animals = {Pigeon:"pigeon", Rabbit:"Rabbit"};

curtain.addEventListener("click", () => {
  curtain.style.transition = "1s";
  curtain.style.bottom = "100%";
});

const lamp = document.getElementById('lamp');
const switcher = document.getElementById('switch');

lamp.addEventListener("mousedown", () => {
  switcher.style.marginTop = "5vh";
});

lamp.addEventListener("mouseup", () => {
  switcher.style.marginTop = "2vh";
});

const light = document.getElementById('light');
const magic = document.getElementById('magic');
const layerUpForMagic = document.getElementById('layerUpForMagic');

lamp.addEventListener("click", () => {
  if (light.style.opacity === "0.5") {
    light.style.opacity = 0;
    magic.style.opacity = "0";
    layerUpForMagic.style.display = "none";
  }
  else {
    light.style.opacity = 0.5;
    magic.style.opacity = "1";
    layerUpForMagic.style.display = "block";
  }
});

const rabbit = document.getElementById('rabbit');
const pigeon = document.getElementById('pigeon');
let animal = Animals.Rabbit;

function changeAnimal() {
  rabbit.style.transition = "0.5s";
  pigeon.style.transition = "0.5s";
switch(animal)
{
  case Animals.Pigeon:
  {
    pigeon.style.bottom = "9vh";
    setTimeout(() => (rabbit.style.bottom = "25vh"), 500);
    animal = Animals.Rabbit;
    break;
  }
  case Animals.Rabbit:
  {
    rabbit.style.bottom = "9vh";
    setTimeout(() => (pigeon.style.bottom = "25vh"), 500);
    animal = Animals.Pigeon;
  }
}

  setTimeout(() => {
    rabbit.style.transition = "0s";
    pigeon.style.transition = "0s";
  }, 1000);
}
