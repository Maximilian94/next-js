import { useRouter } from 'next/router';
import React from 'react';

function Character({ characterId }) {
	const router = useRouter();
	const { id } = router.query;

	console.log(characterId);

	return <div>Id do personagem {id}</div>;
}

export const getStaticProps = (context) => {
	const { params } = context;

	const characterId = params.id;
	console.log(characterId);
	return {
		props: { characterId },
	};
};

export const getStaticPaths = async () => {
	return {
		paths: [
			{ params: { id: '1' } },
			{ params: { id: '2' } },
			{ params: { id: '3' } },
		],
		fallback: false,
	};
};

export default Character;
