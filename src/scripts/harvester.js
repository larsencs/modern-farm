export const harvestPlants = (plantsArr) =>{
    const harvestedPlants = []

    for(let i = 0; i<plantsArr.length; i++){
        for(let j = 0; j<plantsArr.output; j++){
            harvestPlants.push(plantsArr[i])
        }
    }
    return harvestedPlants
}