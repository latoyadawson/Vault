const router = require('express').Router();

const userRoutes = require('./user-routes');
const budgetRoutes = require('./budget-routes.js');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
<<<<<<< HEAD
router.use('/budgets', budgetRoutes);
router.use('/category', categoryRoutes);
=======
router.use('/budget', budgetRoutes);
>>>>>>> 2e147df4783265264ab27ba060d8ca527c5a9534

module.exports = router;