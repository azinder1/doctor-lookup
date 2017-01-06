var apiKey = require('./../.env').apiKey;

function Patient(firstName, lastName, medicalIssue) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.medicalIssue = medicalIssue;

}

Patient.prototype.getDoctors = function(displayFunction) {
  medicalIssue = this.medicalIssue;
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     displayFunction(result);
    })
   .fail(function(error){
      $('#doctors').append("Sorry we couldn't find a doctor under your search criteria, please try again");
    });
};


exports.patientModule = Patient;
