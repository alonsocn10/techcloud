const { verify } = require("jsonwebtoken")

module.exports={
    verifyToken: async (req,res,next) => {

        const token = req.headers["x-access-token"]
        console.log(token)
    }
}