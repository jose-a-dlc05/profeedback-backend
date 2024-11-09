import feedbackDAO from '../dao/Feedback';

export default class FeedbackService {
	static async getFeedback() {
		try {
			return await feedbackDAO.getFeedback();
		} catch (err) {
			console.error(err);
		}
	}

	static async getSingleFeedback(id: string) {
		try {
			const feedbackId = id;
			return await feedbackDAO.getSingleFeedback(feedbackId);
		} catch (err) {
			console.error(err);
		}
	}

	static async getSingleFeedbackComments(id: string) {
		try {
			const feedbackId = id;
			const comments = await feedbackDAO.getSingleFeedbackComments(feedbackId);
			if (comments.length > 0) {
				return comments;
			} else {
				return 'No Comments for this feedback';
			}
		} catch (err) {
			console.error(err);
		}
	}

	static async createFeedback(data: object) {
		try {
			let {
				feedback_title: feedbackTitle,
				category,
				feedback_detail: feedbackDetail,
			}: any = data;
			return await feedbackDAO.createFeedback(
				feedbackTitle,
				category,
				feedbackDetail
			);
		} catch (err) {
			console.error(err);
		}
	}

	static async updateFeedback(data: object, id: string) {
		try {
			let { title, category, status, description, upvotes }: any = data;
			return await feedbackDAO.updateFeedback(
				title,
				category,
				status,
				upvotes,
				description,
				id
			);
		} catch (err) {
			console.error(err);
		}
	}

	static async deleteFeedback(id: string) {
		try {
			const feedbackId = id;
			return await feedbackDAO.deleteFeedback(feedbackId);
		} catch (err) {
			console.error(err);
		}
	}
}
