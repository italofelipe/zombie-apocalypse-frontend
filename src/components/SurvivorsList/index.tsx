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
import { Aside, SurvivorsItem } from "./styles";
type SurvivorsListProps = {
  survivors: Survivors[];
  onSelect: (survivor: Survivors) => void;
};

const SurvivorsList = ({ onSelect, survivors }: SurvivorsListProps) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredSurvivors, setFilteredSurvivors] = useState<Survivors | null>(
    null
  );

  const resetInputAndFilter = () => {
    setSearchInput("");
    setFilteredSurvivors(null);
  };

  const filterSurvivor = () => {
    const filter = survivors.find((survivor) =>
      survivor.name.toLocaleLowerCase().includes(searchInput)
    );
    setFilteredSurvivors(filter!);
    if (searchInput === "") resetInputAndFilter();
    return filter;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    filterSurvivor();
  };
  return (
    <Aside>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <InputLabel htmlFor="search-survivor">Search</InputLabel>
        <FormContainer>
          <Input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onBlur={() => filterSurvivor()}
            id="search-survivor"
          />
          <FontAwesomeIcon
            width={"1rem"}
            icon={faTrash}
            onClick={() => resetInputAndFilter()}
            title="Limpar busca"
          />
        </FormContainer>

        <Button disabled={!searchInput} type="submit">
          Procurar
        </Button>
      </Form>
      {survivors && !filteredSurvivors ? (
        survivors.map((survivor) => (
          <SurvivorsItem
            data-testid={`survivor-item-${survivor.id}`}
            key={survivor.id}
            onClick={() => onSelect(survivor)}
          >
            <Text alignment="center" color="green">
              {survivor.name}
            </Text>
          </SurvivorsItem>
        ))
      ) : (
        <SurvivorsItem onClick={() => onSelect(filteredSurvivors!)}>
          <Text alignment="center" color="green">
            {filteredSurvivors!.name}
          </Text>
        </SurvivorsItem>
      )}
    </Aside>
  );
};
export default SurvivorsList;
