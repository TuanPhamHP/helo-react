import React from 'react';

// default export
export default function GreetingFunctionalComponents() {
	// logic
	console.log('Da khoi tao');
	// view
	return <h1>Hello from GreetingFunctionalComponents</h1>;
}

// Component thứ 2
// named export
export function AnotherWords() {
	// logic

	// view
	return (
		<>
			<div className='abc'>div 1 nè</div>
			<div>div 2 nè</div>

			<img src='' />
		</>
	);
}

export function Avatar() {
	const user = {
		avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png',
		name: 'Anh Tuaasn',
		tag: 'p',
	};

	return (
		<>
			<img className='avatar' src={user.avatar} alt={user.name} width='64px' />
			<p>Name: {user.name}</p>
		</>
	);
}
