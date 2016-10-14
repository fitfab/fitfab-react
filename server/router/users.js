import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty'

const users = express.Router();

function validateInput(data) {
  let errors = {};

  if(Validator.isNull(data.email)) {
    errors.email = 'This field is required.'
  }
  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid.'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

users.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if(!isValid) {
    res.status(400).json(errors);
  }
})

export default users;
