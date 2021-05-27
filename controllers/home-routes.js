const router = require('express').Router();
const sequelize = require('../config/connection');
const { Budget, User, BudgetItems, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('landing');
});


router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/dashboard', withAuth, (req, res) => {
    // res.render('dashboard'); 
   BudgetItems.findAll({
        attributes: [
            'id',
            'name',
            'budget_amount',
            'category_id'
        ],
        include: [
            {
                model: User,
                attributes: ['id']
            },
            {
                model: Category,
                attributes: ['id']
            }
        ]
    })
    .then(dbBudgetData => {
        const budget = dbBudgetData.map(data => data.get({ plain: true }));
        res.render('dashboard', { budget, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});







module.exports = router;