import { Text } from "../../styles/styles";


type SelectedSurvivorProps = {
  survivor: Survivors;
};

const SelectedSurvivor = ({ survivor }: SelectedSurvivorProps) => {
  return (
    <section>
      <h1>{survivor.name}</h1>

      <div>
        <p>Skills:</p>{" "}
        {survivor.skills.map((skill) => (
          <div key={skill.rate}>
            <Text alignment="center" color="green">{skill.skill}</Text>
            <Text alignment="center" color="green">{skill.rate}</Text>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SelectedSurvivor;
