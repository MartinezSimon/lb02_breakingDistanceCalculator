function calculateFromInput(){
    var veloctiyElement = document.getElementById("velocity"); 
    var breakingTypeElement = document.getElementById("breakingType");
    var outputElement = document.getElementById("output");

    var input={
        velocity: veloctiyElement.value,
        breakingType: breakingTypeElement.value
    };
    calculate(input);
}

function calculate(input){
    if(breakingType == "breakNormal"){
        var breakingDistanceNormal = (velocity / 10) * (velocity /10) ;
        outputElement.innerHTML = breakingDistanceNormal;
    }
    else{
        var breakingDistanceNormal = ((velocity / 10) * (velocity /10)) / 2 ;
        outputElement.innerHTML = breakingDistanceNormal;
    }
}