import express from 'express';
import validateUser from './../../shared/validateUser.js';
import User from './../models/user.js';

const router = express.Router();

router.post('/', (req, res) => {
    const { errors, isValid } = validateUser(req.body);

    if (!isValid) {
        res.status(400).json(errors);
    }
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

    newUser.createUser((err, user) => {
        if (err) throw err;
        res.status(200).json(user);
    })

})

export default router;
