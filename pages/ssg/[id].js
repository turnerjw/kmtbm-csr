import Image from "next/image";

const Pokemon = ({ data }) => {
  return (
    <div className="card">
      <p className="text">
        <b>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</b> #
        {data.id}
      </p>
      <div className="image">
        <Image
          src={data.sprites.front_default}
          width={100}
          height={100}
          priority
        />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "4" } },
      { params: { id: "7" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const data = await res.json();
  return {
    props: { data: data }, // will be passed to the page component as props
  };
}

export default Pokemon;
