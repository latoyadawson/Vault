const router = require('express').Router();
const { BudgetItems, Category } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');


// Get total of all expenses from a category
router.get('/', (req, res) => {
    BudgetItems.findAll({
        attributes: [
            'id',
            'name',
            'budget_amount',
            'category_id',
            'date',
            // [sequelize.literal('(SELECT COUNT(*) FROM budgetItem WHERE budgetitem.id = user.id)'), 'user_budget']
            [sequelize.literal('(SELECT COUNT(*) FROM budgetItems)')]
        ],
        include: [
            {
                model: Category,
                attributes: ['category_name', 'category_id']
                // include: {
                //     model: User,
                //     attributes: ['first_name']
                // }
            }
        ]
    })
        .then(dbBudgetData => res.json(dbBudgetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.post('/', withAuth, (req, res) => {
    BudgetItems.create({
        category_id: req.body.category_id,
        name: req.body.name,
        budget_amount: req.body.budget_amount
    })
        .then(dbBudgetData => {
            if (!dbBudgetData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbBudgetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

})

// Update(PUT) budget amount by ID

// router.put('/:id', withAuth, (req, res) => {
//     BudgetItems.update(req.body, {
//         individualHooks: true,
//         where: {
//             id: req.params.id
//         }
//     })
//         .then(dbBudgetData => {
//             if (!dbBudgetData[0]) {
//                 res.status(404).json({ message: 'No budget item found with this id' });
//                 return;
//             }
//             res.json(dbUserData);
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//         });

// })

// Delete(destroy) budget item amount by budget ID




module.exports = router;
