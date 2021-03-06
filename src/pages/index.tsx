import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import SelectedSurvivor from "../components/SelectedSurvivor";
import SurvivorsList from "../components/SurvivorsList";
import useFetch from "../hooks/useFetch";
import { Main, PageInnerContent, PageTitle, Text } from "../styles/styles";

const Home = () => {
  const { data, error, loading, reFetch } = useFetch();

  const [survivorsList, setSurvivors] = useState<Survivors[]>([]);
  const [selectedSurvivor, setSelectedSuvivor] = useState<Survivors | null>(
    null
  );
  const route = useRouter();
  useEffect(() => {
    setSurvivors(data);
  }, [data, selectedSurvivor, reFetch]);

  const handleSelectSurvivor = (survivor: Survivors) => {
    setSelectedSuvivor(survivor);
    route.push(`/?survivor=${survivor.name}`, undefined, { shallow: true });
  };

  const handleRefetch = useCallback(() => {
    reFetch();
  }, [reFetch]);

  const handleRendering = () => {
    if (!selectedSurvivor && !error && !loading) {
      return (
        <>
          <PageTitle>Zombie Apocalypse</PageTitle>
          <Text alignment="center" color="orange">
            A list of survivors in a post-apocalyptic world. You can see below
            wether people you know is still alive or...became mindless zombies!
          </Text>
        </>
      );
    } else if (error) {
      return (
        <>
          <Text alignment="center" color="green">
            Houve um erro ao processar a requisição.
          </Text>
        </>
      );
    } else if (!error && !selectedSurvivor && loading) {
      <Text alignment="center" color="green">
        Carregando...
      </Text>;
    } else {
      return (
        <SelectedSurvivor
          onInfectSurvivor={() => handleRefetch()}
          survivor={selectedSurvivor!}
        />
      );
    }
  };

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
        <SurvivorsList
          survivors={survivorsList}
          onSelect={(survivor) => handleSelectSurvivor(survivor)}
        />
        <PageInnerContent>{handleRendering()}</PageInnerContent>
      </Main>
    </>
  );
};

export default Home;
