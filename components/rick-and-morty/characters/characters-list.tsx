import React from 'react';
import CharacterListItem from './character-list-item';

export const CharactersList = ({ characters }) => {
	return (
		<ul>
			{characters.map((character) => (
				<CharacterListItem character={character} key={character.id} />
			))}
		</ul>
	);
};
