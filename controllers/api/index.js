const router = require('express').Router();

const userRoutes = require('./user-routes');
const budgetRoutes = require('./budget-routes');

router.use('/users', userRoutes);

module.exports = router;