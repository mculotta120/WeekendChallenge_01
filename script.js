//empty array of all employees
var allEmployees = [];
//adds employee to allEmloyees array
var addEmployee = function(){
     //console.log("testing");
     //take in variables from form
    var lastName= document.getElementById('lastNameIn').value;
    var firstName= document.getElementById('firstNameIn').value;
    var employeeNum= document.getElementById('employeeNumIn').value;
    var employeeTitle= document.getElementById('employeeTitleIn').value;
    var annualSalary= document.getElementById('annualSalaryIn').value;
      //turns employee info into object
    var individual = {
       'lastName' : lastName,
       'firstName' : firstName,
       'number' : employeeNum,
       'title' : employeeTitle,
       'salary' : annualSalary

    };
     // adds individual object to employees array
    allEmployees.push( individual );
    console.log( 'added Employee ' + individual.lastName);
};
