import CommentService from '../services/CommentService';

export default class CommentController {
	/**
	 * Create Comment
	 * @params {object} req
	 * @params {object} res
	 * @returns {object} CommentController object
	 */
	static createComment = async (req: any, res: any) => {
		try {
			if (!req.body.comment || !req.params.id || !req.user.id) {
				return res.status(400).send({ message: 'There is no value' });
			}
			const { comment } = req.body;

			const commentCreated = await CommentService.createComment(
				comment,
				req.user.id,
				req.params.id
			);
			console.log(commentCreated);
			return res.status(201).json(commentCreated);
		} catch (err) {
			return res.status(400).send(err);
		}
	};
}
