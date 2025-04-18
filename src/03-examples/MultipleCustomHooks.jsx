import { useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/1"
  );

  return (
    <>
      <h1>Pokemon Information</h1>
      <hr />

      {isLoading && <p>Loading...</p>}

      <h2>{data?.name}</h2>
    </>
  );
};
