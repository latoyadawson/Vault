const router = require('express').Router();
const sequelize = require('../config/connection');
const { Budget, User } = require('../models')

router.get('/', (req, res) => {
    res.render('landing');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        // ToDo 
        // GET routes retreiving objects from our model structure 
        // that we want available in the Handlebars
        // homepage template go here
        //
        //  The following will go at the end, but using our parameters.
        //  This will loop over and map each Sequelize object into a
        //  serialized version of itself, saving the results in a new array.
        //  Then we can plug that array into the Homepage template.
        //  Passing an array to the template will break the page unless the
        //  built in helpers of Handlebars are used. Offers minimal logic-like
        //  looping over an array. Just remember to use Octothorps in the template.
        //  just using handlebars will look for an object with a property of the key,
        //  eg. id property, title property. {{#each}} tells handlebars to begin the
        //  loop through the array and {{/each}} where to end.
        //  
        //  
        //   .then(dbPostData => {
        //     const posts = dbPostData.map(post => post.get({ plain: true}));
        //     res.render('homepage', { posts });
        // })
        // .catch(err => {
        //     console.log(err);
        //     res.status(500).json(err);
        // });




    });
});


module.exports = router;