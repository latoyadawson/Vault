const router = require('express').Router();
const sequelize = require('../../config/connection');
const { BudgetItems, Category, User } = require('../../models');
const withAuth = require('../../utils/auth');


// Get total of all expenses from a category
router.get('/', (req, res) => {
    BudgetItems.findOne({
        attributes: [
            'id',
            'name',
            'budget_amount',
            'category_id',
            'date',
            // [sequelize.literal('(SELECT COUNT(*) FROM budgetItem WHERE budgetitem.id = user.id)'), 'user_budget']
            [sequelize.literal('(SELECT COUNT(*) FROM BudgetItem)'), 'all_budget']
        ],
        include: [
            {
                model: Category,
                attributes: ['category_name', 'category_id'],
                include: {
                    model: User,
                    attributes: ['first_name']
                }
            },
            {
                model: User,
                attributes: ['first_name']
            }
        ]
    },
    {
        where: {
            id: req.params.id
        }
    })
        .then(dbBudgetData => res.json(dbBudgetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Update(PUT) budget amount by ID

router.put('/:id', withAuth, (req, res) => {
    BudgetItems.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
        .then(dbBudgetData => {
            if (!dbBudgetData[0]) {
                res.status(404).json({ message: 'No budget item found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

})

// Delete(destroy) budget item amount by budget ID

router.delete('/:id', withAuth, (req, res) => {
    BudgetItems.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

})



module.exports = router;
