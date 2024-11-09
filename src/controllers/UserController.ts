// Import Service
import Helper from '../controllers/Helper';
import UserService from '../services/UserService';

export default class UserController {
	/**
	 * Create A User
	 * @param {object} req
	 * @param {object} res
	 * @returns {object} UserController object
	 */
	static createUser = async (req: any, res: any) => {
		try {
			if (!req.body.user || !req.body.password) {
				return res.status(400).send({ message: 'Some values are missing' });
			}
			const userData = req.body;
			const userId = await UserService.createUser(userData);
			const token = Helper.generateToken(userId[0]);
			return res.status(201).send({ token });
		} catch (err) {
			console.error(err);
		}
	};
	/**
	 * Login
	 * @param {object} req
	 * @param {object} res
	 * @returns {object} user object
	 */
	static loginUser = async (req: any, res: any) => {
		try {
			if (!req.body.user || !req.body.password) {
				return res.status(400).send({ message: 'Some values are missing' });
			}
			const userData = req.body;
			const user = await UserService.loginUser(userData);
			const {
				id: userId,
				first_name: firstName,
				last_name: lastName,
				username,
				password,
				created_at: createdAt,
				updated_at: updatedAt,
			}: any = user;
			const token = Helper.generateToken(userId);
			return res.status(201).send({ token });
		} catch (err: any) {
			return res.status(401).send(err.message);
		}
	};
}
