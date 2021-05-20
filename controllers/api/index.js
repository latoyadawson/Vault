const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const budgetRoutes = require('./budget-routes');
const commentRoutes = require('./comment-routes');


router.use('/users', userRoutes);
router.use('/category', postRoutes);
router.use('/budgets', commentRoutes);

module.exports = router;