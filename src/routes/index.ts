import express from 'express';
import Auth from '../middleware/Auth';
// Import controller
const FeedbackController = require('../controllers/feedbackController');
const UserController = require('../controllers/UserController');
const CommentController = require('../controllers/CommentController');

const router = express.Router();

// FEEDBACK
// Show all feedback
router.get(['/', '/feedbackproduct'], FeedbackController.getFeedback);
// Show one feedback
router.get(
	['/:id', '/feedbackproduct/:id'],
	FeedbackController.getSingleFeedback
);
// Update a feedback
router.patch(
	['/:id', '/feedbackproduct/:id'],
	FeedbackController.updateFeedback
);
// Show comments within feedback
router.get(
	['/:id/comments', '/feedbackproduct/:id/comments'],
	FeedbackController.getSingleFeedbackComments
);
// Add new feedback to database
router.post(['/', '/feedbackproduct'], FeedbackController.createFeedback);
// Delete feedback from database
router.delete(
	['/:id', '/feedbackproduct/:id'],
	FeedbackController.deleteFeedback
);
// USER
// Create User
router.post('/users', UserController.createUser);

// Login User
router.post('/users/login', UserController.loginUser);

// COMMENTS
router.post(
	['/:id/comments', '/feedbackproduct/:id/comments'],
	Auth.verifyToken,
	CommentController.createComment
);
export default router;
