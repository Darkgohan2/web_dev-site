// example 2
VANTA.WAVES({
  el: '#wave',
  color: 0x111111,
  waveHeight: 20,
  shininess: 50,
  waveSpeed: 1.5,
  zoom: 0.75
});

// Initialize Firebase (import and configure Firebase properly)
const firebaseConfig = {

  apiKey: "AIzaSyBdvbHj1MYDelnXgTSc2Pn1QByaeZ9JCMA",
  authDomain: "contact-validation.firebaseapp.com",
  projectId: "contact-validation",
  storageBucket: "contact-validation.appspot.com",
  messagingSenderId: "988310866905",
  appId: "1:988310866905:web:6d25a4050178cf9fa427c8",
  measurementId: "G-BLVZQQ23KJ"
};




firebase.initializeApp(firebaseConfig);

// Get references to form elements and success message
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('Email');
const phonenum = document.getElementById('Phonenum');
const successMessage = document.getElementById('successMessage');

// Add event listener to the form for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  
  // Validate form inputs here (you can use your validation logic)
  if (allInputsValid()) {
    // Push data to Firebase
    firebase.database().ref('submissions').push({
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      phonenum: phonenum.value
    })
    .then(() => {
      alert('Form submitted successfully!');
      form.reset();
      successMessage.style.display = 'block'; // Display success message
      setTimeout(() => {
        successMessage.style.display = 'none'; // Hide the success message after 3 seconds
      }, 3000);
    })
    .catch((error) => {
      alert('Form submission failed: ' + error.message);
    });
  }
});

// Add event listener to each form element for input validation
const formElements = [fname, lname, email, phonenum];

formElements.forEach((element) => {
  element.addEventListener('change', handleChange);
});

// Function to check if all form inputs are valid
function allInputsValid() {
  let isValid = true;
  
  formElements.forEach((element) => {
    if (!element.checkValidity()) {
      isValid = false;
      showError(element);
    } else {
      clearError(element);
    }
  });
  
  return isValid;
}

// Function to handle form input changes and display errors
function handleChange(event) {
  const element = event.target;
  if (!element.checkValidity()) {
    showError(element);
  } else {
    clearError(element);
  }
}

// Function to display an error message for a form element
function showError(element) {
  element.style.borderColor = 'red';
  element.nextElementSibling.style.color = 'red';
  element.nextElementSibling.style.display = 'block';
  element.previousElementSibling.style.color = 'red';
}

// Function to clear the error message for a form element
function clearError(element) {
  element.style.borderColor = '#CED4DA';
  element.nextElementSibling.style.color = '#CED4DA';
  element.nextElementSibling.style.display = 'none';
  element.previousElementSibling.style.color = '#212529';
}