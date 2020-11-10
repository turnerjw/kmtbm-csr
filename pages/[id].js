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
        .then((data) => setData(data))
        .catch();
  }, [id]);

  console.log(data);

  if (!data)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "lightgray",
          height: "100vh",
        }}
      >
        <p>Loading</p>
      </div>
    );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "light-gray",
        height: "100vh",
      }}
    >
      <div
        style={{
          margin: "100px",
          backgroundImage: `linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)`,
          //backdropFilter: "blur(8px)",
          backgroundSize: "cover",
          borderRadius: "50px",
          padding: "30px 50px",
          height: "max-content",
          boxShadow: `
          0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048),
          0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086),
          0 100px 80px rgba(0, 0, 0, 0.12)`,
        }}
      >
        <p style={{fontSize: "20px"}}>
          <b>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</b> #{id}
        </p>
        <div style={{ backgroundColor: "white", borderRadius: "100%" }}>
          <img style={{ width: "100%" }} src={data.sprites.front_default} />
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
