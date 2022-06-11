import { Text } from "../../styles/styles";
import { Aside, SurvivorsItem } from "./styles";
type SurvivorsListProps = {
  survivors: Survivors[];
  onSelect: (survivor: Survivors) => void;
};

const SurvivorsList = ({ onSelect, survivors }: SurvivorsListProps) => {
  return (
    <Aside>
      <h3>Survivors</h3>
      {survivors.map((survivor) => (
        <SurvivorsItem
          data-testid={`survivor-item-${survivor.id}`}
          key={survivor.id}
          onClick={() => onSelect(survivor)}
        >
          <Text alignment="center" color="green">
            {survivor.name}
          </Text>
        </SurvivorsItem>
      ))}
    </Aside>
  );
};
export default SurvivorsList;
