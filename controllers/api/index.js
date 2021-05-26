const router = require('express').Router();

const userRoutes = require('./user-routes');
const budgetRoutes = require('./budget-routes.js');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/budgets', budgetRoutes);
router.use('/category', categoryRoutes);

module.exports = router;