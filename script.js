//empty array of all employees
var allEmployees = [];
//empty array of all the salaries
var allSalaries = [];
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
      // var individualSalary = {
      //   'salary' : annualSalary
      // };

     // adds individual object to employees array
    allEmployees.push( individual );
    allSalaries.push( parseInt(annualSalary) );
    // console.log( 'added Employee ' + individual.lastName);

    listEmployees();
    listSalary();

};
    //lists the employee information under the inputs
    var listEmployees = function(){
    document.getElementById('EmployeeInfoOutput').innerHTML=' ';
    for( var i=0; i < allEmployees.length; i++){
      var employeeInfoLine ="<b>Employee Name: </b>" + allEmployees[i].lastName+ "<b>, </b>" + allEmployees[i].firstName + "<b> Title: </b>" + allEmployees[i].jobTitle + "<b> Employee # </b>" + allEmployees[i].number + "<b> Salary: $</b>" + allEmployees[i].salary;
       document.getElementById('EmployeeInfoOutput').innerHTML += '<p>' + employeeInfoLine + '</p>';
     }
    };
    //lists total salary info
  var listSalary = function(){
    document.getElementById('salaryInfoOutput').innerHTML = ' ';
    for(var j=0; j<allSalaries.length; j++){
      var totalSalaries = allSalaries;
      var monthlySalaries = totalSalaries/12;
      var salaryInfoLine ='<b>Total of all Salaries this Month: </b>'+ monthlySalaries + '<b> Total of all Annual Salaries: </b>' + totalSalaries;
      document.getElementById('salaryInfoOutput').innerHTML += '<p>' + salaryInfoLine + '</p>';
    }
  };
