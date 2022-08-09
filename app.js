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
        .then(data => console.log(data))
};



