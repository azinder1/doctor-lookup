var Patient = require('./../js/patient.js').patientModule;


$(document).ready(function(){
  $('form#patient-form').submit(function(event){
  event.preventDefault();
  var firstName = $('#first_name').val();
  var lastName = $('#last_name').val();
  var medicalIssue = $('#medical_Issue').val();
  patient = new Patient(firstName, lastName, medicalIssue);
  patient.getDoctors(firstName, lastName, medicalIssue);
  console.log("hello world");
  });
});
