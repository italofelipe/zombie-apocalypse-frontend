import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

import { axiosGet } from "../services";
import { ImageContainer, Main, PageTitle, Text } from "../styles/styles";

const Home = () => {
  const [error, setError] = useState(false);

  const [survivorsList, setSurvivors] = useState<Survivors[]>([]);

  const handleGet = useCallback(() => {
    console.log("Chamou a API", survivorsList);
    axiosGet<
      [
        {
          id: string;
          name: string;
          skills: Skills[];
          isInfected: boolean;
          gender: "male" | "female";
        }
      ]
    >({
      path: "/survivors",
    })
      .then((response) => {
        console.log("Response", response);
        setSurvivors([...response.data]);
        console.log("Chamou a API", survivorsList);
      })
      .catch((err) => {
        console.log("Caiu no catch", err);

        return setError(error);
      });
  }, [error]);

  useEffect(() => {
    handleGet();
  }, [handleGet]);

  return (
    <>
      <Head>
        <title>Maxihost Zombie App</title>
        <meta
          name="description"
          content="A zombie apocalypse survival list application made with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <PageTitle>Zombie Apocalypse</PageTitle>
        <Text alignment="center" color="orange">
          A list of survivors in a post-apocalyptic world. You can see below
          wether people you know is still alive or...became mindless zombies!
        </Text>

        {survivorsList.map((survivor) => (
          <>
            <h2>Survivor {survivor.name}</h2>
          </>
        ))}

        <ImageContainer>
          {/*  <Image
            src={AskImage}
            width={180}
            height={300}
            alt={"Imagem de uma pessoa pedindo algo"}
          />
          <Image
            src={BookImage}
            width={180}
            height={300}
            alt={"Imagem de um livro"}
          /> */}
        </ImageContainer>
      </Main>
    </>
  );
};

export default Home;
