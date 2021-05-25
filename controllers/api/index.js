const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const budgetRoutes = require('./budget-routes');



router.use('/users', userRoutes);
router.use('/budget', budgetRoutes);

router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;