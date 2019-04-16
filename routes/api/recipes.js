const express = require('express'); 
const router = express.Router(); 
const auth = require('../../middleware/auth');
// const mongoose = require("mongoose");
// const path = require("path");
// const crypto = require('crypto');
// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');

//Recipe Model
const Recipe = require('../../models/Recipe'); 

// Create mongo connection
// const conn = mongoose.createConnection('mongoURI');
// let DB = 'mongoURI'
// // Init gfs
// let gfs;

// conn.once('open', () => {
//   // Init stream
//   gfs = Grid(conn.DB, mongoose.mongodb);
//   gfs.collection('uploads');
// });

// // Create storage engine
// const storage = new GridFsStorage({
//   url: DB,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads'
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });
// const upload = multer({ storage });

// app.post('/upload', upload.single('img'), (req, res) => {
//   res.json({ file: req.file });
// });

// app.get('/upload/:id', (req, res) => {
//   gfs.files.findOne({ img: req.params.img }, (err, file) => {
//     // Check if file
//     if (!file || file.length === 0) {
//       return res.status(404).json({
//         err: 'No file exists'
//       });
//     }

//     // Check if image
//     if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
//       // Read output to browser
//       const readstream = gfs.createReadStream(file.filename);
//       readstream.pipe(res);
//     } else {
//       res.status(404).json({
//         err: 'Not an image'
//       });
//     }
//   });

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