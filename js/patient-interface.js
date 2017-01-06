var Patient = require('./../js/patient.js').patientModule;

var displayResults = function(result) {
  var doctor_array = [];
  var data_array = result.data;
  for (var i = 0; i < data_array.length; i++) {
    doctor_array.push(result.data[i].profile);
  }
  $('#results').show();
  doctor_array.forEach(function(doctor){
    $('#doctors').append("<h3>" + doctor.first_name +" "+ doctor.last_name + " (MD) </h3> <img" + doctor.image_url + ">");
  });
};

$(document).ready(function(){
  $('form#patient-form').submit(function(event){
  event.preventDefault();
  $('#doctors').empty();
  var firstName = $('#first_name').val();
  var lastName = $('#last_name').val();
  var medicalIssue = $('#medical_issue').val();
  $('.patient').text(firstName + " " + lastName)
  patient = new Patient(firstName, lastName, medicalIssue);
  patient.getDoctors(displayResults);
  });
});
