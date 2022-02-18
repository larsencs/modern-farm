import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (plantingPlan) =>{

    for(let i = 0; i<plantingPlan.length; i++){
        if(Array.isArray(plantingPlan[i])){
            for(let j = 0; j <plantingPlan[i].length; j++){
                
                let type = plantingPlan[i][j]
                
                switch(type){
                    case "Asparagus":
                        createAsparagus()
                        break;
                    case "Corn":
                        createCorn()
                        break;
                    case "Potato":
                        createPotato()
                        break;
                    case "Soybean":
                        createSoybean()
                        break;
                    case "Sunflower":
                        createSunflower()
                        break;
                    case "Wheat":
                        createWheat()
                        break;
                    default:
                        break;
                }
                
            }
        }

    }


    
}
