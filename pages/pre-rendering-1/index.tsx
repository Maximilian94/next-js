import React from 'react';

function PreRenderingPage(props) {
	const { characters } = props;
	console.log(props);
	return (
		<div>
			<h1>Characters</h1>
			<h2>
				In that way we, the request is made on the server side, you can try to
				have a look on source code and try the find the characters list, it will
				be there.
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
	const request = await fetch('https://rickandmortyapi.com/api/character');
	const response = await request.json();
	return {
		props: { characters: response.results },
	};
};

export default PreRenderingPage;
