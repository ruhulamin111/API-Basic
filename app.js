const address = {
    village: 'shukhnagar',
    post: 2030,
    upazila: 'anondonagar',
    zila: 'mayabinagar',
};
const stringified = JSON.stringify(address);
console.log(stringified);
const parse = JSON.parse(stringified);
console.log(parse);

