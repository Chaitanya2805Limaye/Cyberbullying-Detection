// Dummy complaints data
let complaintsData = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '1234567890',
        complaint: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        complaintType: 'Gender-based Cyberbullying',
        platform: 'Facebook',
        country: 'USA',
        dateOfComplaint: '2024-04-09',
        status: 'Pending'
    },
    // Add more complaint objects as needed
];

// Function to display complaints in the table
function displayComplaints() {
    const complaintsTableBody = document.getElementById('complaints-table-body');
    complaintsTableBody.innerHTML = '';

    complaintsData.forEach((complaint, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${complaint.firstName}</td>
            <td>${complaint.lastName}</td>
            <td>${complaint.email}</td>
            <td>${complaint.phone}</td>
            <td>${complaint.complaintType}</td>
            <td>
                <select class="status-dropdown" onchange="changeStatus(${index}, this)">
                    <option value="Pending" ${complaint.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="In Progress" ${complaint.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                    <option value="Resolved" ${complaint.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
                    <option value="Investigation" ${complaint.status === 'Investigation' ? 'selected' : ''}>Investigation</option>
                </select>
            </td>
            <td>${complaint.complaint}</td>
            <td>${complaint.dateOfComplaint}</td>
        `;
        complaintsTableBody.appendChild(row);
    });
}

// Function to change status
function changeStatus(index, selectElement) {
    complaintsData[index].status = selectElement.value;
}

// Call function to display data
displayComplaints();
// Dummy cyberbullying counts data
const cyberbullyingTypeCounts = {
    'Gender-based Cyberbullying': 50,
    'Age-based Cyberbullying': 30,
    'Ethnicity-based Cyberbullying': 20,
    'Religion-based Cyberbullying': 10,
    'Other Cyberbullying': 15
};

// Function to display cyberbullying type counts as cards
function displayCyberbullyingCounts() {
    const cyberbullyingCountsContainer = document.getElementById('cyberbullying-counts-cards');
    cyberbullyingCountsContainer.innerHTML = '';

    for (const type in cyberbullyingTypeCounts) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${type}</h3>
            <p>Total Count: ${cyberbullyingTypeCounts[type]}</p>
        `;
        cyberbullyingCountsContainer.appendChild(card);
    }
}

// Call function to display cyberbullying counts
displayCyberbullyingCounts();

// Get references to the button and the add complaint section
const toggleButton = document.getElementById('toggle-add-complaint-section');
const addComplaintSection = document.getElementById('add-complaint-section');

// Add event listener to the button for toggling the section
toggleButton.addEventListener('click', function() {
    // Toggle the display style of the add complaint section
    if (addComplaintSection.style.display === 'none') {
        addComplaintSection.style.display = 'block';
    } else {
        addComplaintSection.style.display = 'none';
    }
});
