import React from 'react';

function PreRenderingPage(props) {
	const { characters } = props;
	console.log(props);
	return (
		<div>
			<h1>Characters</h1>
			<h2>
				In this case, if a request is made before 30s from the last pre-render,
				this is gonna pre-render again
			</h2>
			<ul>
				{characters.map((character, index) => (
					<li key={index}>{character.name}</li>
				))}
			</ul>
		</div>
	);
}

export const getStaticProps = async () => {
	console.log('Rendering');
	const request = await fetch('https://rickandmortyapi.com/api/character');
	const response = await request.json();

	if (!response.results) {
		return { redirect: { destination: '/no-data' } }; //	If no data is found, will redirect to no-data-page
	}

	if (response.results.length === 0) {
		return { notFound: true }; //	If the is some error on request, Will render 404 page
	}
	return {
		props: { characters: response.results },
		revalidate: 30,
	};
};

export default PreRenderingPage;
