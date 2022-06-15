import {
  InfectedSurvivorLabel,
  InfectedSurvivorSlider,
  InfectedSurvivorSwitch
} from "./styles";

type SwitchProps = {
  onCheck: () => void;
  isChecked: boolean;
};

const Switch = ({ isChecked, onCheck }: SwitchProps) => {
  return (
    <InfectedSurvivorLabel>
      <InfectedSurvivorSwitch
        type="radio"
        checked={isChecked}
        onClick={onCheck}
      />
      <InfectedSurvivorSlider />
    </InfectedSurvivorLabel>
  );
};

export default Switch;
