// Middleware to allow verification to access to other routes

const jwt = require('jsonwebtoken');

const SECRET_TOKEN = process.env.SECRET_TOKEN

const tokenVerify = (req, res, next) => {
    // Getting the token from header request
    const token = req.header('auth-token')

    // Token validation
    if(!token){
        return res.status(401).json({error: 'Acceso denegado'})
    }
    try {
        // Token verification using jwt and the method .verify
        //const verified = jwt.verify(token, process.env.SECRET_TOKEN)
        //req.user = verified

        const profile = jwt.verify(token, `${SECRET_TOKEN}`)
        if (profile) {
            request.profile = profile.role
            next();
            return
        }
        return res.status(401).json({ res: 'Acceso denegado' })

        // next() indicates that req passed the test and may continue its path
        //next();
    } catch (error) {
        res.status(401).json({error: 'Token no válido, acceso denegado'})
    }
}

const admin = (req, res, next) => {
    if(req.profile != "administrador") {
        return res.status(403).json({ res: "Permisos insuficientes"})
    }
    next();
}

const leader = (req, res, next) => {
    if(req.profile != "lider") {
        return res.status(403).json({ res: "Permisos insuficientes"})
    }
    next();
}

const student = (req, res, next) => {
    if (req.profile != "estudiante") {
        return res.status(403).json({ res: "Permisos insuficientes"})
    }
    next();
}

const isAdmin = (role) => {
    return role === "administrador"
}

const isLeader = (role) => {
    return role === "lider"
}

const isStudent = (role) => {
    return role === "estudiante"
}



module.exports = {
    tokenVerify,
    admin,
    leader,
    student,
    isAdmin,
    isLeader,
    isStudent
}