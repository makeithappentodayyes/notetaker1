const router = require('express').Router()



// create
router.post('/login', (req, res, next)=>{
    res.send('login')
})

// create
router.post('/register', (req, res, next)=>{
    res.send('Register')
})



module.exports = router