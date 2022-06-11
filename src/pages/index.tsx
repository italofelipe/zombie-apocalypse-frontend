import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SelectedSurvivor from "../components/SelectedSurvivor";
import SurvivorsList from "../components/SurvivorsList";
import useFetch from "../hooks/useFetch";

import { Main, PageInnerContent, PageTitle, Text } from "../styles/styles";

const Home = () => {
  const { data, error, loading } = useFetch();
  const [survivorsList, setSurvivors] = useState<Survivors[]>([]);
  const [selectedSurvivor, setSelectedSuvivor] = useState<Survivors | null>(
    null
  );
  const route = useRouter();
  useEffect(() => {
    console.log("Resultado do custom hook", data);
    setSurvivors(data);
  }, [data]);

  const handleSelectSurvivor = (survivor: Survivors) => {
    console.log("Skill", survivor.skills);
    route.push(`/?survivor=${survivor.name}`, undefined, { shallow: true });
    setSelectedSuvivor(survivor);
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
        <PageInnerContent>
          <PageTitle>Zombie Apocalypse</PageTitle>
          <Text alignment="center" color="orange">
            A list of survivors in a post-apocalyptic world. You can see below
            wether people you know is still alive or...became mindless zombies!
          </Text>
        {selectedSurvivor && <SelectedSurvivor survivor={selectedSurvivor} />}
        </PageInnerContent>

      </Main>
    </>
  );
};

export default Home;
