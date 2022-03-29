import { useRouter } from 'next/router';

const BlogPostsPage = () => {
	const router = useRouter();

	//  For test, http://localhost:3000/blog/max/projeto1
	console.log(router.query);

	return (
		<div>
			<h1>The Blog Posts</h1>
		</div>
	);
};

export default BlogPostsPage;
