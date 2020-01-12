const router = require('express').Router()
const NoteModel = require('./model')


// get all
router.get('/', (req, res, next)=>{Note
   NoteModel.find()
   .then((results)=>{
       if(!results){
         res
         .status(404)  
         .send('No Notes found')

       }else{
           res.json(results)
       }

   })
    .catch((err)=>{
        console.log(err)
        res
        .status(500)
        .send('Error Happened')
    })
})

// get single
router.get('/:id', (req, res, next)=>{
    NoteModel.findById(req.params.id)
    .then((results)=>{
        if(!results){
          res
          .status(404)  
          .send('No Note found')
 
        }else{
            res.json(results)
        }
    })
     .catch((err)=>{
         console.log(err)
         res
         .status(500)
         .send('Error Happened')
     })
    // res.send('get note by id')
})


// create
router.post('/',
inputValidation,
(req, res, next)=>{
    const newNote = new NoteModel({
        title: req.body.title,
        body: req.body.body
    })

    newNote
    .save()
    .then((document)=>{
        if(document){
            res.json(document)  
        }else{
            res.send('document did not save')
        }
    })
.catch((err)=>{
    console.log(err)
    res.send('error happened')
})

})
//update
router.put('/:id', (req, res, next)=>{
    res.send('update note')
})

// delete
router.delete('/', (req, res, next)=>{
    res.send('delete note')
})

function inputValidation(req, res, next) {
    const {title, body} = req.body
    const missingFields = []

    
    if(!title){
        missingFields.push('title')
    }
      
    if(!body){
        missingFields.push('body')
    }

    if(missingFields.length){
        res
        .status(400)
        .send(`The following fields are missing: ${missingFields.join(',')}`)
    }else{
        next()
    }
}

module.exports = router