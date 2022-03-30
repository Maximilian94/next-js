//  Documentation
//  https://rickandmortyapi.com/documentation/#character

export type Character = {
	id: number;
	name: string;
	status: 'Alive' | 'Dead' | 'unknown';
	species: string;
	type: string;
	gender: string;
	origin: Object;
	location: Object;
	image: string;
	episode: string[];
	url: string;
	created: string;
};

export type CharacterAPIResponse = {
	info: Object;
	results: Character[];
};

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
	console.log(response);
};
