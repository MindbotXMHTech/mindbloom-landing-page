import { useParams } from 'react-router-dom';

function ActivityDetailPage() {
  const { id } = useParams();

  return <h1>Activity Detail Page: {id}</h1>;
}

export default ActivityDetailPage;
