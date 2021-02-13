const verifyToken = require('../middleware/authjwt')
const verifyAdmin = require('../middleware/authjwt')

module.exports={
    verifyToken,
    verifyAdmin
}
