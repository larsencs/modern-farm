export const createCorn = () =>{
    const cornArray = []
    const cornObject = {
        type: "Corn"
        , height: 380
        , output: 3
    }
    for(let i = 0; i<2; i++){
        cornArray.push(cornObject)
    }

    return cornArray
}