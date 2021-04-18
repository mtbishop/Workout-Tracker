const router = require('express')
const apiRoutes = require('./apiRoutes')
const htmlRoutes = require('./htmlRoutes')

router.use(apiRoutes);
router.use(htmlRoutes);

module.exports = router;
