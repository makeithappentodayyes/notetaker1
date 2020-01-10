const router = require('express').Router()
//get all notes



router.post('/login', (req, res, next) => {
    res.send('login')
})

router.post('/register', (req, res, next) => {
    res.send('Register')
})



module.exports = router