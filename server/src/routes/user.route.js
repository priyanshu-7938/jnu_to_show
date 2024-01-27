import Router from 'express';
import { Login, Signup, getVideofromModule, showModules, showModulesbytag, updateModuleDetails, updateProfile } from '../controllers/blind/user.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';



const router = Router();

router.route('/signin').post(Signup);  
router.route('/login').post(Login);
router.route('/getmodules').post(verifyJWT,showModules);
router.route('/updateprofile').post(verifyJWT,updateProfile);
router.route('/getmodulesBytags').post(verifyJWT,showModulesbytag);
router.route('/getvideo').post(verifyJWT,getVideofromModule);
router.route('/updateprogress').post(verifyJWT,updateModuleDetails);

export default router;
