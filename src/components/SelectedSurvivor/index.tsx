import Image from "next/image";
import { useEffect, useState } from "react";
import { axiosPut } from "../../services";
import { InputLabel, Text } from "../../styles/styles";
import Modal from "../Modal/Modal";
import { Checkbox, SkillsContainer, SurvivorCard, SurvivorStats } from "./styles";
const MaleImage = "/assets/man_image.svg";
const FemaleImage = "/assets/woman_image.svg";
const ZombieImage = "/assets/zombie_image.svg";

type SelectedSurvivorProps = {
  survivor: Survivors;
  onInfectSurvivor: () => void;
};

const SelectedSurvivor = ({
  onInfectSurvivor,
  survivor,
}: SelectedSurvivorProps) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalContext, setModalContext] = useState<"fail" | "success">("fail");
  const [infectedSurvivor, setInfectedSurvivor] = useState<Survivors | null>(
    null
  );

  const handleInfect = (survivor: Survivors) => {
    axiosPut<{
      id: string;
      name: string;
      skills: Skills[];
      isInfected: boolean;
      gender: "male" | "female";
    }>({
      config: { path: "/survivors", params: survivor.id },
      body: {
        ...survivor,
        isInfected: true,
      },
    })
      .then((response) => {
        onInfectSurvivor();
        setModalContext("success");
        setInfectedSurvivor(response.data);
        setModalOpened(true);
      })
      .catch(() => {
        setModalOpened(true);
        setModalContext("fail");
      });
  };
  useEffect(() => {
    setInfectedSurvivor(survivor);
  }, [survivor]);


  return (
    <>
      {infectedSurvivor && (
        <SurvivorCard>
          <Text alignment="center" color="orange">
            {infectedSurvivor.name}
          </Text>
          <Image
            src={
              infectedSurvivor.isInfected || infectedSurvivor?.isInfected
                ? ZombieImage
                : infectedSurvivor.gender === "female"
                ? FemaleImage
                : MaleImage
            }
            alt="Image of your survivor"
            
            layout="responsive"
            width={400}
            height={400}
          />
          <p>Skills:</p>
          <SkillsContainer>
             {infectedSurvivor.skills.map((skill, i) => (
            <SurvivorStats key={i}>
              <Text alignment="center" color="green">
                {skill.skill}
              </Text>
              <Text alignment="center" color="green">
                {skill.rate}
              </Text>
            </SurvivorStats>
          ))}
          </SkillsContainer>
         

          {!infectedSurvivor.isInfected && (
            <InputLabel>Deseja infectar {infectedSurvivor.name}?</InputLabel>
          )}
          <Checkbox
            disabled={infectedSurvivor.isInfected}
            type="checkbox"
            onChange={() => handleInfect(infectedSurvivor)}
            checked={infectedSurvivor?.isInfected}
            readOnly={infectedSurvivor?.isInfected}
          />
          <Modal
            context={modalContext}
            isOpen={modalOpened}
            handleDisplay={() => setModalOpened(!modalOpened)}
          />
        </SurvivorCard>
      )}
    </>
  );
};
export default SelectedSurvivor;
