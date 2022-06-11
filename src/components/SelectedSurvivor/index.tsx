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
            <p>{skill.skill}</p>
            <p>{skill.rate}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default SelectedSurvivor;
