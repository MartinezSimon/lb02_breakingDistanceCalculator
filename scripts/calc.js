//Eventlistener for Input (Button)
//Read user input Data (Velocity, Breakingtype)
function calculateFromInput(){
    // Get in - and output elements for later usage.
    var veloctiyElement = document.getElementById("velocity"); 
    var breakingTypeElement = document.getElementById("breakingType");
    var outputElement = document.getElementById("output");

    //Prepared JASON Object for calculation
    var input={
        velocity: veloctiyElement.value,
        breakingType: breakingTypeElement.value
    };
    //Checks if the user input is a number
    if (isNaN(input.velocity)){
        alert("Velocity should be a number.");
        return;
    }
    //Write calculated result in output element.
    var breakingDistanceMeters = calculate(input);
    outputElement.innerHTML = `${breakingDistanceMeters} meters.`;
}

function calculate(input){
    var breakingDistance;
    //Prints Jason object in console
    console.dir(input);

    if(input.breakingType == "breakNormal"){
        //Calculation for normal breaking distance
        breakingDistance = (input.velocity / 10) * (input.velocity /10) ;
    }
    else{
        //Calculation for emergency breaking distance
        breakingDistance = ((input.velocity / 10) * (input.velocity /10)) / 2 ;
    }
    //Rounds breakingdistance two digits after comma
    breakingDistance = Math.round(breakingDistance * 100) /100 ;
    //Returns breaking distance
    return breakingDistance;    
}