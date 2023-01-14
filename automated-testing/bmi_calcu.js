//calories burned per minute
let CalPerMin = 225 / 30;

//num of days Sam wants to do cycling
let NumDays = 15;

//30 mins of cycling per day
let MinOfCycling = 30;

//formula - Lost Calories
let CalBurn = CalPerMin * MinOfCycling * NumDays;

//message
console.log(`Great work, Sam! After ${MinOfCycling} minutes of cycling every day for ${NumDays} days, you may lose a total of ${CalBurn} calories.`);

//MANUAL TESTING
function ManualTesting(){
    let ExpectedResult = 3375;
    console.assert(
    CalBurn === ExpectedResult,`The result ${CalBurn} doesn't match the expected value ${ExpectedResult}.`
    )
}

ManualTesting();

//AUTOMATED TESTING
const MultiplyVariables = {
    multiply: function (a, b, c){
        return a * b * c;
    }
}

//console.log(MultiplyVariables.multiply(CalPerMin,MinOfCycling,NumDays));

module.exports = MultiplyVariables;


