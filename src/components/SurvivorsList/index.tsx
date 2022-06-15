import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import {
  Button,
  Form,
  FormContainer,
  Input,
  InputLabel,
  Text
} from "../../styles/styles";
import Switch from "../Switch";
import { Aside, SurvivorsItem, SwitchContainer } from "./styles";
type SurvivorsListProps = {
  survivors: Survivors[];
  onSelect: (survivor: Survivors) => void;
};

const SurvivorsList = ({ onSelect, survivors }: SurvivorsListProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchFilteredSurvivors, setSearchFilteredSurvivors] =
    useState<Survivors | null>(null);
  const [filterByInfected, setFilterByInfected] = useState(false);
  const [searchFilteredSurvivorsError, setSearchFilteredSurvivorsError] =
    useState(false);

  const resetInputAndFilter = () => {
    setSearchInput("");
    setSearchFilteredSurvivors(null);
  };

  /**
   *
   * @returns A survivor, based on user's input
   */
  const filterSurvivor = () => {
    setSearchFilteredSurvivorsError(false)
    const filter = survivors.find((survivor) =>
      survivor.name.toLocaleLowerCase().includes(searchInput.toLowerCase())
    );
    filter
      ? setSearchFilteredSurvivors(filter!)
      : setSearchFilteredSurvivorsError(true);
    if (searchInput === "") resetInputAndFilter();
    return filter;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterSurvivor();
  };

  /**
   * @returns A piece of UI based on what filters are active.
   */
  const handleFilters = () => {
    if (!searchFilteredSurvivors && !filterByInfected) {
      return survivors.map((survivor) => (
        <SurvivorsItem
          data-testid={`survivor-item-${survivor.id}`}
          key={survivor.id}
          onClick={() => onSelect(survivor)}
        >
          <Text alignment="center" color="green">
            {survivor.name}
          </Text>
        </SurvivorsItem>
      ));
    } else if (searchFilteredSurvivors && !filterByInfected) {
      return (
        <SurvivorsItem onClick={() => onSelect(searchFilteredSurvivors!)}>
          <Text alignment="center" color="green">
            {searchFilteredSurvivors!.name}
          </Text>
        </SurvivorsItem>
      );
    } else {
      return survivors
        .filter((survivor) => survivor.isInfected)
        .map((infectedSurvivor) => (
          <SurvivorsItem
            data-testid={`survivor-item-${infectedSurvivor.id}`}
            key={infectedSurvivor.id}
            onClick={() => onSelect(infectedSurvivor)}
          >
            <Text alignment="center" color="green">
              {infectedSurvivor.name}
            </Text>
          </SurvivorsItem>
        ));
    }
  };

  const handleFilterByDead = () => {
    resetInputAndFilter();
    setFilterByInfected(!filterByInfected);
  };
  return (
    <Aside>
      <SwitchContainer>
      <Text size="lg" alignment="right" color="orange">
          Todos
        </Text>
        <Switch
          isChecked={filterByInfected}
          onCheck={() => handleFilterByDead()}
        />
        <Text size="lg" alignment="right" color="orange">
          Infectados
        </Text>
      </SwitchContainer>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <InputLabel htmlFor="search-survivor">Procurar por nome</InputLabel>
        <FormContainer>
          <Input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onBlur={() => filterSurvivor()}
            id="search-survivor"
            placeholder="Sobrevivente da Silva"
            data-testid="search-survivor-input"
          />
          <FontAwesomeIcon
            width={"1rem"}
            icon={faTrash}
            onClick={() => resetInputAndFilter()}
            title="Limpar busca"
          />
        </FormContainer>

        <Button
          disabled={!searchInput}
          type="submit"
          data-testid="search-button"
        >
          Procurar
        </Button>
      </Form>
      <>
        {searchFilteredSurvivorsError && (
          <Text alignment="left" color="orange" size="md">
            Não foi encontrado nenhum sobrevivente com esse nome. Exibindo todos
            os sobreviventes encontrados.
          </Text>
        )}
        {handleFilters()}
      </>
    </Aside>
  );
};
export default SurvivorsList;
