const bcrypt = require('bcrypt')

function encryptpass(plainpass) {
    const encpass = bcrypt.hashSync(plainpass,10)
    return encpass
}

function dcryptpass(plainpass,encriptedpass) {
    const encpass = bcrypt.compareSync(plainpass,encriptedpass)
    return encpass
}

module.exports = {
    encryptpass,
    dcryptpass
}