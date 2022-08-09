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
function displayData(data) {
    console.log(data)
    const div = document.getElementById('users');
    for (const user of data) {
        const p = document.createElement('p');
        p.innerText = `Hey, There is a ${user.name} and her email is ${user.email}.`
        div.appendChild(p);
    }
}



