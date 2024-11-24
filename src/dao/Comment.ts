import { devSupabase } from '../config/supabase/supaDB';
import { v4 as uuidv4 } from 'uuid';

class CommentDAO {
	createComment = async (
		comment: string,
		userId: string,
		feedbackId: string
	) => {
		try {
			return await devSupabase.from('comments').insert([
				{
					id: uuidv4(),
					content: comment,
					product_feedback_id: feedbackId,
					user_id: userId,
				},
			]);
		} catch (err) {
			console.error(err);
		}
	};
}

export default new CommentDAO();
