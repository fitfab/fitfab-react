import express from 'express';
import validateUser from './../../shared/validateUser.js';
const router = express.Router();

router.post('/', (req, res) => {
    const { errors, isValid } = validateUser(req.body);

    if (!isValid) {
        res.status(400).json(errors);
    }
    res.status(200).json(req.body);

})

export default router;
