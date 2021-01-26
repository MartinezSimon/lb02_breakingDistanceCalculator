function calculateFromInput(){
    var veloctiyElement = document.getElementById("velocity"); 
    var breakingTypeElement = document.getElementById("breakingType");
    var outputElement = document.getElementById("output");

    var input={
        velocity: veloctiyElement.value,
        breakingType: breakingTypeElement.value
    };
    var breakingDistanceMeters = calculate(input);
    outputElement.innerHTML = `${breakingDistanceMeters} meters.`;
}

function calculate(input){
    if(input.breakingType == "breakNormal"){
        var breakingDistanceNormal = (input.velocity / 10) * (input.velocity /10) ;
        return breakingDistanceNormal;
    }
    else{
        var breakingDistanceEmergency = ((input.velocity / 10) * (input.velocity /10)) / 2 ;
        return breakingDistanceEmergency;
    }
}