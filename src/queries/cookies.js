const cookie = require('cookie');
const jwt = require('jsonwebtoken');


const createToken = () => {

    const data = {
        userId: "tempuser"
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

const verifyToken = () => {
    if(req.headers.cookie) {
        let tempToken = cookie.parse(req.headers.cookie).logged_in
        let decodedToken = jwt.verify(tempToken, secret);
        if(decodedToken.userId === 'tempuser') {
            return true; 
        }
    } else {
        return false;
    }
}


module.exports = { createToken, verifyToken };