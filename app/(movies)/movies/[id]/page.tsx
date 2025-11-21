type MovieDetailProps = {
  params: {
    id: string;
  };
};

export default async function MovieDetail({ params }: MovieDetailProps) {
  const { id } = params;
  return <h1>Movie {id}</h1>;
}