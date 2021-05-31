const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, BudgetItems, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('landing');
});


router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/dashboard/'+ req.session.user_id);
        return;
    }
    res.render('login');
    
});

router.get('/signup', (req, res) => {
    
    // if(req.session.loggedIn) {
        
    //     res.redirect('/dashboard/'+ req.session.user_id);
        
    //     return;
    // } 
    
    res.render('signup') 
});

// router.get('/success', (req, res) => {
//     console.log(req.session.user_id);
   
// });

router.get('/dashboard', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/dashboard/'+ req.session.user_id);
        // res.render('/dashboard/'+ req.session.user_id, { loggedIn: req.session.loggedIn });
        return;
    } else {

    }
});

router.get('/dashboard/:id', withAuth, (req, res) => {
   User.findByPk(req.params.id,{
        include: [
            {
                model: BudgetItems,
                attributes: ['id','name', 'budget_amount', 'category_id'],
            },
        ]
    })
    .then(dbBudgetData => {
        const budget = dbBudgetData.dataValues.budgetItems.map(data => data.get({ plain: true }));
        // console.log(budget);
        //Note Cateogreys/ arrays
        
        let category = [
            [
                [],[],[],[]
            ],
            [
                [],[],[],[],[]
            ],
            [
                [],[],[],[]
            ],
            [
                [],[],[],[]
            ]
        ]; 
        // savingsAmount vars
        let savingsAcc = 0;
        let checkingAcc  = 0;
        let investAcc = 0;
        let retireAcc = 0;
         // hosuingAmount vars
        let mortgage = 0;
        let utils = 0;
        let repairs = 0;
        let remodel = 0;
        let propertyTax = 0;
         // transportationAmount vars
        let vehiclePay = 0;
        let gas = 0;
        let publicTrans = 0;
        let vehicleRep = 0;
        // transportationAmount vars
        let entertain = 0; 
        let clothing = 0;
        let travel = 0;
        let dining = 0;

        let savingsTotal = 0;
        let housingTotal = 0;
        let transportationTotal = 0;
        let lifestyleTotal = 0;
        
        budget.map((elment) =>  {
                if(elment.category_id == 1) {
                    const savingsAmount = elment.budget_amount;
                    if(elment.name === 'Savings Account'){
                        if(savingsAmount !== 0) {
                            savingsAcc = savingsAmount;
                            category[0][0].push(savingsAmount);
                        }
                        
                    } else if (elment.name === 'Checking Account') {
                        if(savingsAmount !== 0) {
                            checkingAcc = savingsAmount;
                            category[0][1].push(savingsAmount);
                        }
                        
                    } else if(elment.name === 'Investment Account') {
                        if(savingsAmount !== 0) {
                            investAcc = savingsAmount;
                             category[0][2].push(savingsAmount);
                        }
                       
                    } else {
                        if(savingsAmount !== 0) {
                            retireAcc = savingsAmount;
                            category[0][3].push(savingsAmount);
                        }
                        
                    }
                    
                } else if (elment.category_id == 2) {
                    const housingAmount = elment.budget_amount;
                     if(elment.name === 'Mortgage | Rent'){
                        if(housingAmount !== 0) {
                            mortgage = housingAmount
                        }
                        category[1][0].push(housingAmount)
                    } else if (elment.name === 'Utilites') {
                        if(housingAmount !== 0) {
                            utils = housingAmount
                        }
                        category[1][1].push(housingAmount)
                    } else if(elment.name === 'Repiars') {
                        if(housingAmount !== 0) {
                            repairs = housingAmount
                        }
                        category[1][2].push(housingAmount)
                    } else  if(elment.name === 'Remodeling'){
                        if(housingAmount !== 0) {
                            remodel = housingAmount
                        }
                        category[1][3].push(housingAmount)
                    } else {
                        if(housingAmount !== 0) {
                            propertyTax = housingAmount
                        }
                        category[1][4].push(housingAmount)
                    }
                    

                } else if (elment.category_id == 3) {
                    const transporationAmount = elment.budget_amount;
                    if(elment.name === 'Vehicle Payment'){
                        if(transporationAmount !== 0) {
                            vehiclePay = transporationAmount
                        }
                        category[2][0].push(transporationAmount)
                    } else if (elment.name === 'Gas') {
                        if(transporationAmount !== 0) {
                            gas = transporationAmount
                        }
                        category[2][1].push(transporationAmount)
                    } else if(elment.name === 'Public Transportation') {
                        if(transporationAmount !== 0) {
                            publicTrans = transporationAmount
                        }
                        category[2][2].push(transporationAmount)
                    } else {
                        if(transporationAmount !== 0) {
                            vehicleRep = transporationAmount
                        }
                        category[2][3].push(transporationAmount)
                    }
                } else {
                    const lifestyleAmount = elment.budget_amount;
                    if(elment.name === 'Entertainment'){
                        if(lifestyleAmount !== 0) {
                            entertain = lifestyleAmount
                        }
                        category[3][0].push(lifestyleAmount)
                    } else if (elment.name === 'Clothing') {
                        if(lifestyleAmount !== 0) {
                            clothing = lifestyleAmount
                        }
                        category[3][1].push(lifestyleAmount)
                    } else if(elment.name === 'Travel') {
                        if(lifestyleAmount !== 0) {
                            travel = lifestyleAmount
                        }
                        category[3][2].push(lifestyleAmount)
                    } else {
                        if(lifestyleAmount !== 0) {
                            dining = lifestyleAmount
                        }
                        category[3][3].push(lifestyleAmount)
                    }
                }

                savingsTotal = (savingsAcc + checkingAcc + investAcc + retireAcc);
                housingTotal = ( mortgage + utils + repairs + remodel + propertyTax);
                transportationTotal = (vehiclePay + gas + vehicleRep + publicTrans);
                lifestyleTotal = (clothing + dining + travel + entertain);
                return category;

                
        });
        // console.log(category);
        // const amount = budget.map(elment => elment.budget_amount);
        // console.log(amount);//amount is an array that i need to pass to handlebars
        res.render('dashboard', {savingsTotal, housingTotal, transportationTotal, lifestyleTotal ,savingsAcc,checkingAcc,investAcc,retireAcc,mortgage,utils,repairs,remodel,propertyTax, vehiclePay,vehicleRep,gas,publicTrans,entertain,clothing,travel,dining, loggedIn: req.session.loggedIn });
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    // }
});

module.exports = router;