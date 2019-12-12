const cookie = require('cookie');
const jwt = require('jsonwebtoken');


const createToken = () => {

    const data = {
        userId: 1
    };

    const secret = 'arsenal123';

    let tokenRes = "";

    jwt.sign(data, secret, (err,res) => {
        if (err) {
            console.log(err);
        } else {
            tokenRes = res;
        }
    });
    
    console.log("tokenRes = ", tokenRes);
    return tokenRes;

}

// const verifyToken = () => {

// }

module.exports = { createToken, verifyToken };