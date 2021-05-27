const router = require('express').Router();
const { User, BudgetItems, Category, Income } = require('../../models');
// const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
   BudgetItems.findAll({ //change back to find all if doesn't work
        attributes: { exclude: ['[password'] },
        attributes:[
            "id",
            "name", 
            "budget_amount",  
        ],
        include: {
            model: Category,
            attributes: ['id']
        },
        include: {
            model: User,
            attributes: ['id','first_name']
        }
     })
    .then(dbBudgetData => res.json(dbBudgetData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
   BudgetItems.findOne({
            attributes: { exclude: ['[password'] },
            where: {
                id: req.params.id
            },
            attributes:[
                "id",
                "name", 
                "budget_amount",
            ],
            include: {
                model: Category,
                attributes: ['id']
            },
            include: {
                model: User,
                attributes: ['id','first_name']
            }
        })
        .then(dbBudgetData => res.json(dbBudgetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    BudgetItems.create({
        name: req.body.name,
        budget_amount: req.body.budget_amount,
        user_id: req.session.user_id,
        category_id: req.body.category_id

    })
    .then(dbBudgetData => res.json(dbBudgetData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    if(req.session) {
        BudgetItems.update(
            {
                budget_amount: req.body.budget_amount
            },
            {
                where: {
                    id: req.params.id
                },
            }
        )
        .then(dbBudgetData => {
            if(!dbBudgetData) {
                res.status(404).json({message: 'No budget item found with this id'});
                return;
            }
            res.json(dbBudgetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }

});


module.exports = router;
