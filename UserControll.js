const UserModel = require('./UserModel');
var express = require('express');
var router = express.Router();

router.get('/retrieve', function(req, res) {
    UserModel.find((err, users) => {
        if(users) {
            res.send(users);
            console.debug(JSON.stringify(users));
        } else {
            res.send("not-found");
        }
    })
});

router.post('/create', function(req, res) {
    UserModel.create({
        id: req.body.id,
           userName: req.body.userName,
           fullName: req.body.fullName,
           email: req.body.email,
           birthday: req.body.birthday,
           avatar: req.body.avatar,
           cover: req.body.cover,
           isVerified: req.body.isVerified
    }).then(result => {
        res.send("successful");
    })
});


module.exports = router;
// module.exports = {

//     create: (req, res) => {
//         let user = new UserModel({
//            id: req.body.id,
//            userName: req.body.userName,
//            fullName: req.body.fullName,
//            email: req.body.email,
//            birthday: req.body.birthday,
//            avatar: req.body.avatar,
//            cover: req.body.cover,
//            isVerified: req.body.isVerified
//         })
//         user.save()
//         .then(result => {
//             res.json({ success: true, result: result})
//         })
//         .catch(err => {
//              res.json({ success: false, result: err})
//             })
//     },

//     update: (req, res) => {
//     UserModel.update({id: req.body.id}, req.body)
//     .then(user => {
//         if (!user) res.json({ success: false, result: "No such park exists"})
      
//         res.json(user)
//     })
//       .catch(err => {
//           res.json({ success: false, result: err})
//       })
//     },

//     retrieve: (req, res) => {
//         UserModel.find().exec((err, users) => {
//             if(!user) res.json({ success: false, result: "No parks found"});
//             else res.json({ sucess: true, result: result});
//         });
//         // UserModel.find()
//         // .then(user => {
//         //     if (!user) res.json({ success: false, result: "No parks found"})

//         //     res.json({ sucess: true, result: result})
//         // })
//         // .catch(err => {
//         //     res.json({ success: false, result: err})
//         // })
//     },

//     delete: (req, res) => {
//         UserModel.remove({ id: req.body.id})
//         .then(user => {
//             if (!user) res.json({ success: false, result: "No user with such ID was found" })
//             res.json({ success: true, result: result })
//         })
//         .catch(err => res.json({success: false, result: err}))
//     }
// }