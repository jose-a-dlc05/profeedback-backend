// Import Service
const feedbackService = require('../services/FeedbackService');

class FeedbackController {
	getFeedback = async (req: any, res: any, next: any) => {
		try {
			return res.status(200).json(await feedbackService.getFeedback());
		} catch (err) {
			console.log(err);
		}
	};
	getSingleFeedback = async (req: any, res: any, next: any) => {
		try {
			const id = req.params.id;
			return res.status(200).json(await feedbackService.getSingleFeedback(id));
		} catch (err) {
			console.log(err);
		}
	};
	getSingleFeedbackComments = async (req: any, res: any, next: any) => {
		try {
			const id = req.params.id;
			return res
				.status(200)
				.json(await feedbackService.getSingleFeedbackComments(id));
		} catch (err) {
			console.log(err);
		}
	};
	createFeedback = async (req: any, res: any, next: any) => {
		try {
			const postData = req.body;
			await feedbackService.createFeedback(postData);
			return res.status(201).json(feedbackService.getFeedback());
		} catch (err) {
			console.log(err);
		}
	};
	updateFeedback = async (req: any, res: any, next: any) => {
		try {
			const id: string = req.params.id;
			const postData = req.body;
			await feedbackService.updateFeedback(postData, id);
			return res.status(200).json(await feedbackService.getFeedback());
		} catch (err) {
			console.log(err);
		}
	};
	deleteFeedback = async (req: any, res: any, next: any) => {
		try {
			const id: string = req.params.id;
			await feedbackService.deleteFeedback(id);
			return res.status(204).send('Feedback Deleted');
		} catch (err) {
			console.log(err);
		}
	};
}

module.exports = new FeedbackController();
