// Import Service
import feedbackService from '../services/FeedbackService';

export default class FeedbackController {
	static getFeedback = async (req: any, res: any) => {
		try {
			return res.status(200).json(await feedbackService.getFeedback());
		} catch (err) {
			console.error(err);
		}
	};
	static getSingleFeedback = async (req: any, res: any) => {
		try {
			const id = req.params.id;
			return res.status(200).json(await feedbackService.getSingleFeedback(id));
		} catch (err) {
			console.error(err);
		}
	};
	static getSingleFeedbackComments = async (req: any, res: any) => {
		try {
			const id = req.params.id;
			return res
				.status(200)
				.json(await feedbackService.getSingleFeedbackComments(id));
		} catch (err) {
			console.error(err);
		}
	};
	static createFeedback = async (req: any, res: any) => {
		try {
			const postData = req.body;
			await feedbackService.createFeedback(postData);
			return res.status(201).json(feedbackService.getFeedback());
		} catch (err) {
			console.error(err);
		}
	};
	static updateFeedback = async (req: any, res: any) => {
		try {
			const id: string = req.params.id;
			const postData = req.body;
			await feedbackService.updateFeedback(postData, id);
			return res.status(200).json(await feedbackService.getFeedback());
		} catch (err) {
			console.error(err);
		}
	};
	static deleteFeedback = async (req: any, res: any) => {
		try {
			const id: string = req.params.id;
			await feedbackService.deleteFeedback(id);
			return res.status(204).send('Feedback Deleted');
		} catch (err) {
			console.error(err);
		}
	};
}
