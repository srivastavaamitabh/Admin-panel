const validUsername = "amitabh1234";
const validPassword = "1234567";

function login() {
    // Get values from input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate credentials
    if (username === validUsername && password === validPassword) {
      
        window.location.href = "index.html"; 
        return false; 
    } else {
      
        document.getElementById("error-message").style.display = "block";
        return false; 
    }
}
function showProperties() {
    document.getElementById("properties-list").style.display = "block";
}

// dashboard
let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("navclose");
})




// code for hide button hide the row when clicked
document.querySelectorAll('.hide-btn').forEach(button => {
    button.addEventListener('click', function () {
        const row = this.closest('tr');
        row.style.display = 'none'; 
    });
});


// code for entries
document.getElementById('entries-select').addEventListener('change', function() {
    const selectedValue = this.value;
    console.log(`Show ${selectedValue} entries`);
    // Implement logic to update the number of entries displayed, e.g., fetching or filtering data.
});


// script for logout and change password

// Change Password Modal
const changePasswordBtn = document.getElementById('changePasswordBtn');
const changePasswordModal = document.getElementById('changePasswordModal');
const closePasswordModal = document.getElementById('closePasswordModal');

changePasswordBtn.onclick = function() {
    changePasswordModal.style.display = 'block';
}

closePasswordModal.onclick = function() {
    changePasswordModal.style.display = 'none';
}

// Logout Modal
const logoutBtn = document.getElementById('logoutBtn');
const logoutModal = document.getElementById('logoutModal');
const confirmLogout = document.getElementById('confirmLogout');
const cancelLogout = document.getElementById('cancelLogout');

// Show the logout modal when logout button is clicked
logoutBtn.onclick = function() {
    logoutModal.style.display = 'block';
}

// Close the logout modal when cancel button is clicked
cancelLogout.onclick = function() {
    logoutModal.style.display = 'none';
}

// Perform the logout action and redirect to login page
confirmLogout.onclick = function() {
    // Redirect to login.html after logout
    window.location.href = 'login.html'; // Replace 'login.html' with the correct path if necessary
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    if (event.target == changePasswordModal) {
        changePasswordModal.style.display = 'none';
    } else if (event.target == logoutModal) {
        logoutModal.style.display = 'none';
    }
}
