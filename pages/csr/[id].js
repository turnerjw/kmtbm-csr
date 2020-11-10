import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FallbackCard } from "../../components/FallbackCard";

const Pokemon = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState();

  useEffect(() => {
    if (id)
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => setData(data));
  }, [id]);

  if (!data) return <FallbackCard />;

  return (
    <div className="card">
      <p className="text">
        <b>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</b> #{id}
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

export default Pokemon;
