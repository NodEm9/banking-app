import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/user.actions';
import React from 'react'

const SignUp = async () =>{
	const loggedUser = await getLoggedInUser();
	if (loggedUser) {
		console.log('User is logged in');
	}
	console.log(loggedUser);

	return (
		<section className='flex-center size-full max-sm:px-6'>
			<AuthForm type='sign-up' />
		</section>
	)
}

export default SignUp