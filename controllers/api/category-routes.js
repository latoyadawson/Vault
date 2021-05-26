const router = require('express').Router();
const { User, BudgetItems, Category, Income } = require('../../models');
// const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Category.findAll({
             attributes: { exclude: ['[password'] },
             attributes:[
                "name",
                "id"
             ]

         })
         .then(dbCategoryData => res.json(dbCategoryData))
         .catch(err => {
             console.log(err);
             res.status(500).json(err);
         });
});
router.get('/:id', (req, res) => {
    Category.findOne({
             attributes: { exclude: ['[password'] },
             where: {
                 id: req.params.id
             },
             attributes:[
                "name",
                "id"
             ]
             // include: {
             //     model: Category,
             //     attributes: ['category_id']
             // }
         })
         .then(dbCategoryData => res.json(dbCategoryData))
         .catch(err => {
             console.log(err);
             res.status(500).json(err);
         });
 });
 

router.post('/', (req, res) => {
    Category.create({
        name: req.body.name,
        user_id: req.session.user_id,

    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;