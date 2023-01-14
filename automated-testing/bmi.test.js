const myFunction = require("./bmi_calcu");

//check function MultiplyVariables
test("Checks if the result is 3375", () => {
 expect(myFunction.multiply((225 / 30), 30, 15)).toBe(3375);
});