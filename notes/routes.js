const router = require('express').Router()
//get all notes
router.get('/', (req, res, next) => {
    res.send('All notes')
})

//get single note by id
router.get('/:id', (req, res, next) => {
    res.send('get note by id')
})


router.post('/', (req, res, next) => {
    res.send('create note')
})

router.put('/:id', (req, res, next) => {
    res.send('update note')
})

router.delete('/', (req, res, next) => {
    res.send('delete note')
})

module.exports = router