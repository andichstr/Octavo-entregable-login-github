import { Router } from 'express';
import passport from 'passport';

export const sessionRouter = Router();

sessionRouter.get('/github', passport.authenticate('github', {scope:['user:email']}), async (req, res) => {})

sessionRouter.get('/githubcallback', passport.authenticate('github', {failureRedirect: '/login'}), async (req, res) => {
    console.log(req.user);
    req.session.firstName = req.user.firstName;
    req.session.lastName = req.user.lastName;
    req.session.email = req.user.email;
    req.session.role = req.user.role;
    req.session.cartId = req.user.cart;
    res.redirect('/products');
});
