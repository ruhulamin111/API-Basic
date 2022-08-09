// json stringified and parse
const address = {
    village: 'shukhnagar',
    post: 2030,
    upazila: 'anondonagar',
    zila: 'mayabinagar',
};
const stringified = JSON.stringify(address);
const parse = JSON.parse(stringified);

// load data 
function dataLoad() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayData(data))
};
// display on site 
function displayData(data) {
    const div = document.getElementById('users');
    for (const user of data) {
        const p = document.createElement('p');
        p.innerText = `Hey, There is a ${user.name} and her email is ${user.email}.`
        div.appendChild(p);
    }
}

// post method 
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        user: 'new user',
        email: 'user@gmail.com'
    }),
    headers: {
        'Content-type': 'application/json; charshet=UTF-8'
    }
})
    .then(res => res.json())
    .then(data => (data));
// put method
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'PUT',
    body: JSON.stringify({
        user: 'new user',
        email: 'user@gmail.com'
    }),
    headers: {
        'Content-type': 'application/json; charshet=UTF-8'
    }
})
    .then(res => res.json())
    .then(data => (data));
// patch method
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'PATCH',
    body: JSON.stringify({
        user: 'new user',
        email: 'user@gmail.com'
    }),
    headers: {
        'Content-type': 'application/json; charshet=UTF-8'
    }
})
    .then(res => res.json())
    .then(data => (data));
// delete method
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'DELETE',
})

// random user api 
const randomBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => buddyLoad(data))
}
const buddyLoad = data => {
    const buddy = data.results;
    const buddyShow = document.getElementById('random-users')
    for (const user of buddy) {
        const p = document.createElement('p')
        p.innerText = `Hey there is ${user.name.first} and he is ${user.registered.age}`
        buddyShow.appendChild(p);
    }
}

