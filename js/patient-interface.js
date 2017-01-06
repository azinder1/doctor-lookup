var Patient = require('./../js/patient.js').patientModule;

var displayResults = function(result) {
  var doctor_array = [];
  var data_array = result.data;
  for (var i = 0; i < data_array.length; i++) {
    doctor_array.push(result.data[i].profile);
  }
  doctor_array.forEach(function(doctor){
    console.log("hello");
    $('div#doctors').append("<li>" + doctor.first_name +" "+ doctor.last_name + "--MD </li>");
  });
};

$(document).ready(function(){
  $('form#patient-form').submit(function(event){
  event.preventDefault();
  $('div#doctors').empty();
  var firstName = $('#first_name').val();
  var lastName = $('#last_name').val();
  var medicalIssue = $('#medical_issue').val();
  patient = new Patient(firstName, lastName, medicalIssue);
  patient.getDoctors(displayResults);
  });
});
