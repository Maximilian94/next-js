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
