const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, BudgetItems, Category } = require('../models');
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
                attributes:['id']
            }
        ],
        raw:true
    })
    .then(dbBudgetData => {
        console.log("Handlebars check",dbBudgetData)
        //const budget = dbBudgetData.map(data => data.get({ plain: true }));
        // function testReturn() {
        //     // if(dbBudgetData.category_id = 1 && dbBudgetData.name === 'Saving Account') {
        //     //     res.render('dashboard',{budget_amount, loggedIn: req.session.loggedIn});
        //     // }
        //     if(budget.category_id = 1 && budget.name === 'Saving Account') {
        //        res.render('dashboard', budget.budget_amount) 
        //         // res.render('dashboard',{budget_amount, loggedIn: req.session.loggedIn});
        //     }
        // };
        // const savings = {
        //     savingsAccount: testReturn(),
        //     checkingAccount: 20,
        //     investmentAccount:30,
        //     retirementAccount: 40,
        // }

        let total = [{
            saving:0,
            housing:0,
            transportation:0,
            lifestyle:0
        }]
        let saving = 0
        let housing = 0
        let transportation = 0
        let lifestyle = 0
        for(let i =0;i<dbBudgetData.length;i++){
            if(dbBudgetData[i].category_id == 1){
            saving +=  dbBudgetData[i].budget_amount
            }
            else if(dbBudgetData[i].category_id == 2) {
                housing += dbBudgetData[i].budget_amount
            }
            else if(dbBudgetData[i].category_id == 3) {
                transportation += dbBudgetData[i].budget_amount
            }
            else if(dbBudgetData[i].category_id == 4) {
                lifestyle += dbBudgetData[i].budget_amount
            }
        }
        console.log(total)
        res.render('dashboard', { saving:saving,housing:housing,transportation:transportation,lifestyle:lifestyle, loggedIn: req.session.loggedIn });
        // res.render('dashboard', { savings, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});






module.exports = router;