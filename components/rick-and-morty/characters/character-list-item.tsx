import Link from 'next/link';
import React from 'react';
import { Character } from '../../../services/rick-and-morty-api';

type CharacterListItemProps = {
	character: Character;
};

const CharacterListItem: React.FC<CharacterListItemProps> = ({ character }) => {
	return (
		<li key={character.id}>
			<Link href={`/rick-and-morty/character/${character.id}`}>
				{character.name}
			</Link>
		</li>
	);
};

export default CharacterListItem;
