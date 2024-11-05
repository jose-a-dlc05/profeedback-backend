// Import Service
const feedbackService = require('../services/feedbackService');

class FeedbackController {
	getFeedback = async (req: any, res: any) => {
		try {
			console.log('controller: getFeedback');
			return res.status(200).json(await feedbackService.getFeedback());
		} catch (err) {
			console.error(err);
		}
	};
	getSingleFeedback = async (req: any, res: any) => {
		try {
			const id = req.params.id;
			return res.status(200).json(await feedbackService.getSingleFeedback(id));
		} catch (err) {
			console.error(err);
		}
	};
	getSingleFeedbackComments = async (req: any, res: any) => {
		try {
			const id = req.params.id;
			return res
				.status(200)
				.json(await feedbackService.getSingleFeedbackComments(id));
		} catch (err) {
			console.error(err);
		}
	};
	createFeedback = async (req: any, res: any) => {
		try {
			const postData = req.body;
			await feedbackService.createFeedback(postData);
			return res.status(201).json(feedbackService.getFeedback());
		} catch (err) {
			console.error(err);
		}
	};
	updateFeedback = async (req: any, res: any) => {
		try {
			const id: string = req.params.id;
			const postData = req.body;
			await feedbackService.updateFeedback(postData, id);
			return res.status(200).json(await feedbackService.getFeedback());
		} catch (err) {
			console.error(err);
		}
	};
	deleteFeedback = async (req: any, res: any) => {
		try {
			const id: string = req.params.id;
			await feedbackService.deleteFeedback(id);
			return res.status(204).send('Feedback Deleted');
		} catch (err) {
			console.error(err);
		}
	};
}

module.exports = new FeedbackController();
