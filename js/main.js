document.addEventListener("DOMContentLoaded", function() {
    // Get the current path (e.g., "index.html", "about.html", etc.)
    const currentPath = window.location.pathname.split("/").pop();

    // Get all links in the navigation and offcanvas menu
    const links = document.querySelectorAll('.sidenavbar ul li a');

    // Loop through each link and add the 'active' class if the paths match
    links.forEach(link => {
        const linkPath = link.getAttribute('href').split("/").pop();
        if (linkPath === currentPath || (linkPath === '' && currentPath === '' && window.location.pathname === '/')) {
            link.classList.add('active');
        }
    });
});
 

document.addEventListener("DOMContentLoaded", function() {
    const profileButton = document.getElementById("profileButton");
    const profileDetails = document.getElementById("profileDetails");

    profileButton.addEventListener("click", function() {
        // Toggle the visibility of the profile details
        profileDetails.style.display = profileDetails.style.display === "block" ? "none" : "block";
    });

    // Hide the profile details if clicked outside
    document.addEventListener("click", function(event) {
        if (!profileButton.contains(event.target) && !profileDetails.contains(event.target)) {
            profileDetails.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const notificationBell = document.querySelector(".notification i");
    const notificationContainer = document.querySelector(".notification");

    notificationBell.addEventListener("click", function() {
        notificationContainer.classList.toggle("active");
    });

    // Close the dropdown if clicked outside of it
    document.addEventListener("click", function(event) {
        if (!notificationContainer.contains(event.target)) {
            notificationContainer.classList.remove("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const settingsIcon = document.querySelector(".settings i");
    const settingsContainer = document.querySelector(".settings");

    settingsIcon.addEventListener("click", function() {
        settingsContainer.classList.toggle("active");
    });

    // Close the dropdown if clicked outside of it
    document.addEventListener("click", function(event) {
        if (!settingsContainer.contains(event.target)) {
            settingsContainer.classList.remove("active");
        }
    });
});

document.getElementById("actionButton").addEventListener("click", function() {
    var actionDetails = document.getElementById("actionDetails");
    if (actionDetails.style.display === "none" || actionDetails.style.display === "") {
        actionDetails.style.display = "block";
    } else {
        actionDetails.style.display = "none";
    }
});

// contacts

// document.addEventListener('DOMContentLoaded', function() {
//     // Load saved data from local storage and populate the table
//     loadTableData();

//     // Handle save button click event
//     document.getElementById('saveButton').addEventListener('click', function() {
//         const id = document.getElementById('saveButton').dataset.id;
//         const isEditing = id !== undefined && id !== "";

//         // Get form values
//         const salutation = document.getElementById('salutation').value;
//         const firstName = document.getElementById('firstName').value;
//         const lastName = document.getElementById('lastName').value;
//         const accountName = document.getElementById('accountName').value;
//         const title = document.getElementById('title').value;
//         const reportsTo = document.getElementById('reportsTo').value;
//         const description = document.getElementById('description').value;

//         let formData = JSON.parse(localStorage.getItem('formData')) || [];

//         if (isEditing) {
//             // Update existing data
//             formData = formData.map(data => data.id === parseInt(id) ? { id: parseInt(id), salutation, firstName, lastName, accountName, title, reportsTo, description } : data);
//             document.getElementById('saveButton').removeAttribute('data-id');
//         } else {
//             // Create new data object
//             const newData = {
//                 id: formData.length + 1,
//                 salutation,
//                 firstName,
//                 lastName,
//                 accountName,
//                 title,
//                 reportsTo,
//                 description
//             };
//             formData.push(newData);
//         }

//         // Save updated data to local storage
//         localStorage.setItem('formData', JSON.stringify(formData));

//         // Reload table data
//         loadTableData();

//         // Clear the form
//         document.getElementById('myForm').reset();

//         // Close the modal
//         const modalElement = document.getElementById('exampleModal');
//         const formModal = bootstrap.Modal.getInstance(modalElement);
//         formModal.hide();
//     });

//     function loadTableData() {
//         const tableBody = document.getElementById('tableBody');
//         tableBody.innerHTML = ""; // Clear existing table data

//         const formData = JSON.parse(localStorage.getItem('formData')) || [];
//         formData.forEach(data => addTableRow(data));
//     }

//     function addTableRow(data) {
//         const tableBody = document.getElementById('tableBody');
//         const newRow = document.createElement('tr');

//         const cells = [
//             data.id,
//             data.salutation,
//             data.firstName,
//             data.lastName,
//             data.accountName,
//             data.title,
//             data.reportsTo,
//             data.description
//         ];

//         cells.forEach(function(cellText) {
//             const newCell = document.createElement('td');
//             newCell.textContent = cellText;
//             newRow.appendChild(newCell);
//         });

//         // Create action dropdown cell
//         const actionCell = document.createElement('td');
//         actionCell.innerHTML = `
//             <div class="dropdown">
//                 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton${data.id}" data-bs-toggle="dropdown" aria-expanded="false">
//                     Actions
//                 </button>
//                 <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton${data.id}">
//                     <li><a class="dropdown-item edit-row" href="#" data-id="${data.id}">Edit</a></li>
//                     <li><a class="dropdown-item delete-row" href="#" data-id="${data.id}">Delete</a></li>
//                 </ul>
//             </div>
//         `;
//         newRow.appendChild(actionCell);

//         tableBody.appendChild(newRow);

//         // Attach edit and delete event listeners
//         document.querySelector(`.edit-row[data-id='${data.id}']`).addEventListener('click', function() {
//             editRow(data.id);
//         });
//         document.querySelector(`.delete-row[data-id='${data.id}']`).addEventListener('click', function() {
//             deleteRow(data.id);
//         });
//     }

//     function editRow(id) {
//         const formData = JSON.parse(localStorage.getItem('formData')) || [];
//         const dataToEdit = formData.find(data => data.id === id);

//         if (dataToEdit) {
//             document.getElementById('salutation').value = dataToEdit.salutation;
//             document.getElementById('firstName').value = dataToEdit.firstName;
//             document.getElementById('lastName').value = dataToEdit.lastName;
//             document.getElementById('accountName').value = dataToEdit.accountName;
//             document.getElementById('title').value = dataToEdit.title;
//             document.getElementById('reportsTo').value = dataToEdit.reportsTo;
//             document.getElementById('description').value = dataToEdit.description;
//             document.getElementById('saveButton').dataset.id = id;

//             // Open the modal for editing
//             const modalElement = document.getElementById('exampleModal');
//             const formModal = new bootstrap.Modal(modalElement);
//             formModal.show();
//         }
//     }

//     function deleteRow(id) {
//         let formData = JSON.parse(localStorage.getItem('formData')) || [];
//         formData = formData.filter(data => data.id !== id);
//         localStorage.setItem('formData', JSON.stringify(formData));

//         // Reload table data
//         loadTableData();
//     }
// });

