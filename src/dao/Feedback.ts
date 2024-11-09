//import db
const db = require('../config/db/db');
import { v4 as uuidv4 } from 'uuid';

// create a class called FeedbackDAO and create methods with queries on accessing db:
export default class FeedbackDAO {
	static async getFeedback() {
		const knex = await db;
		return await knex
			.default('product_feedback')
			.leftJoin(
				'comments',
				'product_feedback.id',
				'=',
				'comments.product_feedback_id'
			)
			.select(
				'product_feedback.id',
				'product_feedback.title',
				'product_feedback.category',
				'product_feedback.upvotes',
				'product_feedback.status',
				'product_feedback.description',
				'product_feedback.created_at',
				'product_feedback.updated_at'
			)
			.count('comments.id as comments')
			.groupBy(
				'product_feedback.id',
				'product_feedback.title',
				'product_feedback.category',
				'product_feedback.upvotes',
				'product_feedback.status',
				'product_feedback.description',
				'product_feedback.created_at',
				'product_feedback.updated_at'
			);
	}

	static async getSingleFeedback(id: string) {
		const productFeedbackId: string = id;
		const knex = await db;
		return await knex
			.default('product_feedback')
			.select('id', 'title', 'category', 'upvotes', 'status', 'description')
			.where('id', productFeedbackId);
	}

	static async getSingleFeedbackComments(id: string) {
		const productFeedbackId: string = id;
		const knex = await db;
		const comments = await knex
			.default('comments')
			.select(
				'content',
				'id',
				'user_id',
				'replying_to_user',
				'parent_id',
				'created_at'
			)
			.where('product_feedback_id', productFeedbackId);
		return comments;
	}

	static async createFeedback(
		feedbackTitle: string,
		category: string,
		feedbackDetail: string
	) {
		const knex = await db;
		return await knex.default('product_feedback').insert({
			id: uuidv4(),
			title: feedbackTitle,
			category,
			upvotes: 0,
			status: 'suggestion',
			description: feedbackDetail,
		});
	}

	static async updateFeedback(
		title: string,
		category: string,
		status: string,
		upvotes: number,
		description: string,
		id: string
	) {
		const knex = await db;
		return await knex.default('product_feedback').where('id', id).update({
			title,
			category,
			status,
			upvotes,
			description,
		});
	}

	static async deleteFeedback(id: string) {
		const feedbackId: string = id;
		const knex = await db;
		return await knex.default('product_feedback').where('id', feedbackId).del();
	}
}
