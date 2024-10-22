const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword;
    }
    catch(err){
        console.log(err)
    }
}

const check_password = async(password, hashed_password) => {
    try{
        const match = await bcrypt.compare(password, hashed_password)
        return match
    }
    catch(err){
        console.log(err);
    }
}

module.exports = { hashPassword, check_password }