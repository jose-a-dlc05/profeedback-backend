import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default class FeedbackDAO {
	static async getFeedback() {
		try {
			const { data } = await supabase.from('product_feedback').select('*');
			return data;
		} catch (error) {
			if (error instanceof Error) {
				console.error('Error fetching feedback:', error.message);
			}
		}
	}

	static async getSingleFeedback(id: string) {
		try {
			const productFeedbackId: string = id;
			const { data } = await supabase
				.from('product_feedback')
				.select('*')
				.eq('id', productFeedbackId);
			return data;
		} catch (error) {
			if (error instanceof Error) {
				console.error('Error fetching feedback:', error.message);
			}
		}
	}

	static async getSingleFeedbackComments(id: string) {
		try {
			const productFeedbackId: string = id;
			const { data } = await supabase
				.from('comments')
				.select('*')
				.eq('product_feedback_id', productFeedbackId);
			return data;
		} catch (error) {
			if (error instanceof Error) {
				console.error('Error fetching feedback:', error.message);
			}
		}
	}

	static async createFeedback(
		feedbackTitle: string,
		category: string,
		feedbackDetail: string
	) {
		try {
			const { data } = await supabase
				.from('product_feedback')
				.insert([
					{
						id: uuidv4(),
						title: feedbackTitle,
						category,
						upvotes: 0,
						status: 'suggestion',
						description: feedbackDetail,
					},
				])
				.select('*');
			return data;
		} catch (error) {
			if (error instanceof Error) {
				console.error('Error creating feedback:', error.message);
			}
		}
	}

	static async updateFeedback(
		title: string,
		category: string,
		status: string,
		upvotes: number,
		description: string,
		id: string
	) {
		try {
			const { data } = await supabase
				.from('product_feedback')
				.update([
					{
						id,
						title,
						category,
						status,
						upvotes,
						description,
					},
				])
				.eq('id', id)
				.select();
			return data;
		} catch (error) {
			if (error instanceof Error) {
				console.error('Error updating feedback:', error.message);
			}
		}
	}

	static async deleteFeedback(id: string) {
		const feedbackId: string = id;
		try {
			await supabase.from('product_feedback').delete().eq('id', feedbackId);
		} catch (error) {
			if (error instanceof Error) {
				console.error('Error deleting feedback:', error.message);
			}
		}
	}
}
