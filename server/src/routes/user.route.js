import Router from 'express';
import { Login, Signup, getVideofromModule, showModules, showModulesbytag, updateModuleDetails, updateProfile } from '../controllers/blind/user.controller';



const router = Router();

router.route('/signin').post(Signup);
router.route('/login').post(Login);
router.route('/getmodules').post(showModules);
router.route('/updateprofile').post(updateProfile);
router.route('/getmodulesBytags').post(showModulesbytag);
router.route('/getvideo').post(getVideofromModule);
router.route('/updateprogress').post(updateModuleDetails);

export default router;
