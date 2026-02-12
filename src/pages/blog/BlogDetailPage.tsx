import { useParams } from 'react-router-dom';

function BlogDetailPage() {
  const { id } = useParams();

  return <h1>Blog Detail Page: {id}</h1>;
}

export default BlogDetailPage;
