const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const budgetRoutes = require('./budget-routes');



router.use('/users', userRoutes);
router.use('/budgets', budgetRoutes);

module.exports = router;