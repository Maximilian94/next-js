import Link from 'next/link';

const ClientsPage = () => {
	const clients = [
		{ id: 'max', name: 'Maximilian' },
		{ id: 'manu', name: 'Manuel' },
	];
	return (
		<div>
			<h1>The Clientes Page</h1>
			<ul>
				{clients.map((clientData) => (
					<li key={`first-way-${clientData.id}`}>
						<Link
							href={`/clients/${clientData.id}`}
						>{`${clientData.name}`}</Link>
					</li>
				))}
				<p>Other Way</p>
				{/* {Alternative way} */}
				{clients.map((clientData) => (
					<li key={`first-way-${clientData.id}`}>
						<Link
							href={{ pathname: '/clients/[id]', query: { id: clientData.id } }}
						>{`${clientData.name}`}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ClientsPage;
