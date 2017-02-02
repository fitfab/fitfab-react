import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define model schema
const UserSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
});

UserSchema.methods.createUser = function(callback) {
    let user = this;
    return bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash;
            user.save(callback)
        });
    });
}

// compile eschema
const User = mongoose.model('User', UserSchema);
export default User;
