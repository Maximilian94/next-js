//  Documentation
//  https://rickandmortyapi.com/documentation/#character

import { Character, CharacterAPIResponse } from '../../types';

export const getAllCharacters = async () => {
	const request = await fetch('https://rickandmortyapi.com/api/character');
	const response: CharacterAPIResponse = await request.json();
	return response.results;
};

export const getCharacterById = async (id: string) => {
	const request = await fetch(
		`https://rickandmortyapi.com/api/character/${id}`
	);
	const response: Character = await request.json();
	return response;
};
