console.log("Welcome to the main module")

import { createPlan } from './plan.js';
// import {createCorn} from "./seeds/corn.js";
// import {createSunflower} from "./seeds/sunflower.js";
// import {createSoybean} from "./seeds/soybean.js";
// import {createAsparagus} from "./seeds/asparagus.js";
// import {createWheat} from "./seeds/wheat.js";
// import {createPotato} from "./seeds/potato.js";
// import {addPlant} from "./field.js";
// import {usePlants} from "./field.js";
import {plantSeeds} from "./tractor.js";

console.log(plantSeeds(createPlan()))

// addPlant(createSunflower())
// console.log(usePlants())
// addPlant(createCorn())
// console.log(usePlants())

// const yearlyPlan = createPlan()
// const cornTester = createCorn()
// const sunflowerTester = createSunflower()
// const soybeanTester = createSoybean()
// const asparagusTester = createAsparagus()
// const wheatTester = createWheat()
// const potatoTester = createPotato()

// console.log(yearlyPlan)
// console.log(sunflowerTester)
// console.log(soybeanTester)
// console.log(asparagusTester)
// console.log(wheatTester)
// console.log(potatoTester)
// console.log(cornTester)


