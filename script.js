var allEmployees = [];
var addEmployee = function(){
     //console.log("testing");
    var lastName= document.getElementById('lastNameIn').value;
    var firstName= document.getElementById('firstNameIn').value;
    var employeeNum= document.getElementById('employeeNumIn').value;
    var employeeTitle= document.getElementById('employeeTitleIn').value;
    var annualSalary= document.getElementById('annualSalaryIn').value;

    var individual = {
       'lastName' : lastName,
       'firstName' : firstName,
       'number' : employeeNum,
       'title' : employeeTitle,
       'salary' : annualSalary

    };
    allEmployees.push( individual );
    console.log( 'added Employee ' + individual.lastName);
};
