const{createHash}=require('crypto');

//create hash string
function hash(input){
    return createHash('sha256').update(input).digest('base64');

}

//compare hashed passwords
let password='artist';
const hash1=hash(password);
console.log(hash1)

password='artist';
const hash2=hash(password);
const match=hash1===hash2;

console.log(match?'Yes,passwords match':'No,password does not match');
