const express = require( 'express' );
const router = express.Router();

const mongoose = require( 'mongoose' );

// auth
// const jwt = require('jsonwebtoken');

//Instead of using mongoose's promise-like system, we'll be using Javascript's promise system:
mongoose.Promise = global.Promise;

const {DATABASE_URL, PORT} = require( '../config' );
const {User} = require( '../models/user' ); // importing USER model


//--------------  READ: List all users  ----------------//

async function allUsers( req, res, next ) {
    const users = await User.find( {} );
    res.render( 'userslist.ejs', {users} );
}

//--------------  READ single user Profile  ----------------//

async function userProfile( req, res, next ) {
    const oneUser = await User.findById( req.params.id );
    res.render( 'userprofile.ejs', {oneUser} );
}

//--------------  CREATE new user  ----------------//

function signup( req, res, next ) {
    const requiredFields = ['firstName', 'lastName', 'email'];

    for ( let i = 0; i < requiredFields.length; i++ ) {
        const field = requiredFields[i];
        if ( !(field in req.body) ) {
            const errorMessage = `missing ${field} in request body`;
            console.error( errorMessage );
            return res.send( errorMessage );
        }
    }

    //normalizing email
    req.body.email = req.body.email.toLowerCase();
    console.log( req.body );

    const {firstName, lastName, email} = req.body;

    console.log( req.body );
    const newUser = {firstName, lastName, email};

    User.create( newUser );

    res.redirect( '/' );
}

//--------------  READ single user Profile  ----------------//

//--------------  UPDATE user  ----------------//
async function updateUserById(req, res, next) {
    try {
        const theUser = await User.findById(req.params.id);
        res.render('userupdateform.ejs', { theUser });
    } catch (error) {
        console.error('Error finding user:', error);
        res.status(500).send('Internal Server Error');
    }
}

async function updateUserInDB(req, res, next) {
    try {
        const requiredFields = ['firstName', 'lastName'];

        for (let i = 0; i < requiredFields.length; i++) {
            const field = requiredFields[i];
            if (!(field in req.body)) {
                const errorMessage = `missing ${field} in request body`;
                console.error(errorMessage);
                return res.status(400).send(errorMessage);
            }
        }

        // Normalizing email
        req.body.email = req.body.email.toLowerCase();

        const { _id, firstName, lastName, email } = req.body;

        const updatedUser = { firstName, lastName, email };

        await User.findByIdAndUpdate(_id, updatedUser, { new: true, runValidators: true });

        res.redirect('/users');
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Internal Server Error');
    }

}

//--------------  DELETE user  ----------------//


async function deleteUser( req, res ) {
    console.log( 'id', req.params.id );
    await User.findByIdAndRemove( req.params.id );
    res.redirect( '/users' );
}

module.exports = {signup, allUsers, updateUserById, updateUserInDB, userProfile, deleteUser};
