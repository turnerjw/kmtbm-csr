import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

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

  if (!data)
    return (
      <div className="layout">
        <p>Loading</p>
      </div>
    );

  return (
    <div className="layout">
      <div className="card">
        <p style={{ fontSize: "20px" }}>
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
    </div>
  );
};

export default Pokemon;
