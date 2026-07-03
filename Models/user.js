const moongoose = require('mongoose');

const userSchema = new moongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true
    },
    token: {
        type: String,
        required: [true, 'Token is required'],
        unique: true
    },
    online: {
        type: Boolean,
        default: false,
    }
});

module.exports = moongoose.model('User', userSchema);