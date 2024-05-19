// document.addEventListener("DOMContentLoaded", function() {
//     fetch('/user')
//     .then(response => response.json())
//     .then(data => {
//         if (data && Array.isArray(data.results) && data.results.length > 0) {
//             const user = data.results[0];
//             const userInfoDiv = document.getElementById('user-info');

//             const userInfoHTML = `
//                 <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
//                 <img src="${user.picture.large}" alt="User Picture">
//                 <p><strong>Gender:</strong> ${user.gender}</p>
//                 <p><strong>Address:</strong> ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}</p>
//                 <p><strong>Coordinates:</strong> Latitude ${user.location.coordinates.latitude}, Longitude ${user.location.coordinates.longitude}</p>
//                 <p><strong>Timezone:</strong> ${user.location.timezone.description} (Offset: ${user.location.timezone.offset})</p>
//                 <p><strong>Email:</strong> ${user.email}</p>
//                 <p><strong>Username:</strong> ${user.login.username}</p>
//                 <p><strong>Date of Birth:</strong> ${new Date(user.dob.date).toLocaleDateString()}</p>
//                 <p><strong>Age:</strong> ${user.dob.age}</p>
//                 <p><strong>Registered:</strong> ${new Date(user.registered.date).toLocaleDateString()} (Age: ${user.registered.age})</p>
//                 <p><strong>Phone:</strong> ${user.phone}</p>
//                 <p><strong>Cell:</strong> ${user.cell}</p>
//                 <p><strong>Nationality:</strong> ${user.nat}</p>
//             `;

//             userInfoDiv.innerHTML = userInfoHTML;
//         } else {
//             console.error('No user data found or data is not in expected format:', data);
//         }
//     })
//     .catch(error => console.error('Error fetching user info:', error));
// });


document.addEventListener("DOMContentLoaded", function() {
    fetch('/user')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data && Array.isArray(data.results) && data.results.length > 0) {
            const user = data.results[0];
            const userInfoDiv = document.getElementById('user-info');

            const userInfoHTML = `
                <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
                <img src="${user.picture.large}" alt="User Picture">
                <p><strong>Gender:</strong> ${user.gender}</p>
                <p><strong>Address:</strong> ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}</p>
                <p><strong>Coordinates:</strong> Latitude ${user.location.coordinates.latitude}, Longitude ${user.location.coordinates.longitude}</p>
                <p><strong>Timezone:</strong> ${user.location.timezone.description} (Offset: ${user.location.timezone.offset})</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Username:</strong> ${user.login.username}</p>
                <p><strong>Date of Birth:</strong> ${new Date(user.dob.date).toLocaleDateString()}</p>
                <p><strong>Age:</strong> ${user.dob.age}</p>
                <p><strong>Registered:</strong> ${new Date(user.registered.date).toLocaleDateString()} (Age: ${user.registered.age})</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Nationality:</strong> ${user.nat}</p>
            `;

            userInfoDiv.innerHTML = userInfoHTML;
        } else {
            console.error('No user data found or data is not in expected format:', data);
        }
    })
    .catch(error => console.error('Error fetching user info:', error));
});