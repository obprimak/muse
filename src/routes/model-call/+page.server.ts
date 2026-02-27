import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	apply: async ({ request }) => {
		const data = await request.formData();

		const firstName = data.get('firstName')?.toString().trim();
		const lastName = data.get('lastName')?.toString().trim();
		const email = data.get('email')?.toString().trim();
		const phone = data.get('phone')?.toString().trim();
		const cityState = data.get('cityState')?.toString().trim();
		const canTravel = data.get('canTravel')?.toString();
		const age = data.get('age')?.toString();
		const clothingSize = data.get('clothingSize')?.toString() || '';
		const meaningToYou = data.get('meaningToYou')?.toString().trim();
		const whatDrewYou = data.get('whatDrewYou')?.toString().trim();
		const styles = data.getAll('styles').map((s) => s.toString());
		const socialHandle = data.get('socialHandle')?.toString().trim() || '';
		const investmentAck = data.get('investmentAck');
		const bestTime = data.get('bestTime')?.toString();
		const readyWithin4Weeks = data.get('readyWithin4Weeks');

		// Validate required fields
		if (
			!firstName ||
			!lastName ||
			!email ||
			!phone ||
			!cityState ||
			!canTravel ||
			!age ||
			!meaningToYou ||
			!whatDrewYou ||
			!investmentAck ||
			!bestTime ||
			!readyWithin4Weeks
		) {
			return fail(400, { message: 'Please fill in all required fields.' });
		}

		// Basic email validation
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			return fail(400, { message: 'Please enter a valid email address.' });
		}

		const submission = {
			firstName,
			lastName,
			email,
			phone,
			cityState,
			canTravel,
			age,
			clothingSize,
			meaningToYou,
			whatDrewYou,
			styles,
			socialHandle,
			bestTime,
			submittedAt: new Date().toISOString()
		};

		// TODO: Send via Resend / store in Supabase (future issue)
		console.log('[model-call] New application:', JSON.stringify(submission, null, 2));

		return { success: true };
	}
} satisfies Actions;
