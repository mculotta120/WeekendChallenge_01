//empty array of all employees
var allEmployees = [];
//adds employee to allEmloyees array
var addEmployee = function(){
     //console.log("testing");
     //take in values from form and make variables
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
       'jobTitle' : employeeTitle,
       'salary' : annualSalary

    };
     // adds individual object to employees array
    allEmployees.push( individual );
    console.log( 'added Employee ' + individual.lastName);
    listEmployees();
};

  var listEmployees = function(){
    document.getElementById('output').innerHTML=' ';
    for( var i=0; i < allEmployees.length; i++){
      var line ="<b>Employee Name: </b>" + allEmployees[i].lastName+ "<b>, </b>" + allEmployees[i].firstName + "<b> Title: </b>" + allEmployees[i].jobTitle + "<b>  # </b>" + allEmployees[i].number + "<b> Salary: $</b>" + allEmployees[i].salary;
       document.getElementById('output').innerHTML += '<p>' + line + '</p>';
     }
  };
