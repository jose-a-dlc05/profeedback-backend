import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('product_feedback').del();

	// Inserts seed entries
	await knex('product_feedback').insert([
		{
			id: '5880a4ae-1ddc-48b2-9375-2e8287053192',
			title: 'Add tags for solutions',
			category: 'Enhancement',
			upvotes: 112,
			status: 'suggestion',
			description: 'Easier to search for solutions based on a specific stack.',
		},
		{
			id: 'ec483c04-46c2-415b-915a-465d6ec28395',
			title: 'Add a dark theme option',
			category: 'Feature',
			upvotes: 99,
			status: 'suggestion',
			description:
				'It would help people with light sensitivities and who prefer dark mode.',
		},
		{
			id: 'cda1ba6d-ad80-4aa1-a6de-3b3bdab1c0f3',
			title: 'Q&A within the challenge hubs',
			category: 'Feature',
			upvotes: 65,
			status: 'suggestion',
			description: 'Challenge-specific Q&A would make for easy reference.',
		},
		{
			id: '1d5e7baf-b964-44ad-92c0-653c48dbba9d',
			title: 'Add image/video upload to feedback',
			category: 'Enhancement',
			upvotes: 51,
			status: 'suggestion',
			description: 'Images and screencasts can enhance comments on solutions.',
		},
		{
			id: '0b721ee7-a93c-4c13-9815-d3907ec8e9a0',
			title: 'Ability to follow others',
			category: 'Feature',
			upvotes: 42,
			status: 'suggestion',
			description: 'Stay updated on comments and solutions other people post.',
		},
	]);
}
