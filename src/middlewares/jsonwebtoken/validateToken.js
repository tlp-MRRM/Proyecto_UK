import Jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
    const { token  } = req.headers.authorization;

    if (!token) 
    return res.status(401).json({
        message: 'No token, autorization denied'
    })

    Jwt.verify(token, process.env.TOKEN_SECRET_KEY , (err, user) => {
        if(err) return res.status(403).json({ message: "Invalid token"});   
        
        req.user = user
        next();
    })

}

