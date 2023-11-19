const router = require('express').Router();
const { register, login, activate, resetPassword } = require('../controllers/auth.controllers');

router.post('/register', register);
router.post('/login', login);
router.get('/whoami', restrict, whoami);

router.get('/email-activation', (req, res) => {
    let { token } = req.query;
    res.render('email-activation', { token });
});

router.post('/email-activation', activate);

router.get('/reset-password', (req, res) => {
    res.render('reset-password');
});

router.post('/reset-password', resetPassword);


module.exports = router;