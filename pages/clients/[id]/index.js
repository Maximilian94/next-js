import { useRouter } from 'next/router';

const ClientProjectsPage = () => {
	const router = useRouter();

	const loadProjectHandle = () => {
		// router.push('/clients/max/projecta');

		// {Alternative way}
		router.push({
			pathname: '/clients/[id]/[clientProjectId]',
			query: { id: 'max', clientProjectId: 'projecta' },
		});
	};
	return (
		<div>
			<h1>The Projects of Given Client</h1>
			<button onClick={loadProjectHandle}>Load Project A</button>
		</div>
	);
};

export default ClientProjectsPage;
