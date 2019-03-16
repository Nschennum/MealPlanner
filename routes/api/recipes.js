const express = require('express'); 
const router = express.Router(); 
const auth = require('../../middleware/auth');

//Recipe Model
const Recipe = require('../../models/Recipe'); 

router.get('/', (req, res) => {
    Recipe.find()
    .sort({ date: -1})
    .then(recipes => res.json(recipes));
})

router.post('/', auth, (req, res) => {
   const newRecipe = new Recipe({
       title: req.body.title,
       text: req.body.text
   }); 
   newRecipe.save().then(recipe => res.json(recipe)); 
});

router.put('/:id', auth, (req, res) => {
  Recipe.findByIdAndUpdate(req.params, {$set:req.body}, function(newRecipe) {
      res.json(newRecipe);
    })
    .catch(err => res.json(err));
});

router.delete('/:id', auth, (req, res) => {
    Recipe.findById(req.params.id)
    .then(recipe => recipe.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({sucess: false}));
})

module.exports = router; 
