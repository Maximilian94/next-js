import React, { useEffect, useState } from 'react';

function PreRenderingPage() {
	const [characters, setCharacters] = useState([]);

	const getCharacters = async () => {
		const request = await fetch('https://rickandmortyapi.com/api/character');
		const response = await request.json();
		setCharacters(response.results);
	};

	useEffect(() => {
		getCharacters();
	}, []);

	return (
		<div>
			<h1>Characters</h1>
			<h2>
				In that way we, the request is made on the client side, you can try to
				have a look on source code and try the find the characters list, it not
				be there{' '}
			</h2>
			<ul>
				{characters.map((character, index) => (
					<li key={index}>{character.name}</li>
				))}
			</ul>
		</div>
	);
}

export default PreRenderingPage;
