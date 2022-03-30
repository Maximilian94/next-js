import React from 'react';
import { Character } from '../../../types';

type CharacterProps = {
	character: Character;
};

const CharacterBox: React.FC<CharacterProps> = ({ character }) => {
	return (
		<div
			style={{
				width: 200,
				height: 200,
				background: 'red',
				borderRadius: 20,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<h4>{character.name}</h4>
			<h5>{character.status}</h5>
		</div>
	);
};

export default CharacterBox;
