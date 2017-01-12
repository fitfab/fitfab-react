import express from 'express';
import Validator from 'validator';
import { isEmpty } from 'lodash';

const router = express.Router();

function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'This field is required.'
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'This field is required.'
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'This field is required.'
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required.'
  }

  if (Validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = 'This field is required.'
  }

  if (!Validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = 'Passwords must match'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
};

router.post('/', (req, res) => {
  console.log(req.body);
  const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  } else {
    res.status(200).json(req.body);
  }

})

export default router;
