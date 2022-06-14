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
        <PageInnerContent>
          {!selectedSurvivor && (
            <div>
              <PageTitle>Zombie Apocalypse</PageTitle>
              <Text alignment="center" color="orange">
                A list of survivors in a post-apocalyptic world. You can see
                below wether people you know is still alive or...became mindless
                zombies!
              </Text>
            </div>
          )}
          {selectedSurvivor && (
            <SelectedSurvivor
              onInfectSurvivor={() => handleRefetch()}
              survivor={selectedSurvivor!}
            />
          )}
        </PageInnerContent>
      </Main>
    </>
  );
};

export default Home;
