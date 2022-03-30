import React from 'react';
import { CharactersList } from '../../../components/rick-and-morty/characters/characters-list';
import { getAllCharacters } from '../../../services/rick-and-morty-api';

function PreRenderingPage(props) {
	const { characters } = props;

	return (
		<div>
			<h1>Characters</h1>
			<h2>
				In that way we, the request is made on the server side, you can try to
				have a look on source code and try the find the characters list, it will
				be there.
			</h2>
			<CharactersList characters={characters} />
		</div>
	);
}

export const getStaticProps = async () => {
	const characters = await getAllCharacters();

	if (!characters) {
		return { notFound: true }; //	Will render 404 page
	}

	return {
		props: { characters },
	};
};

export default PreRenderingPage;
