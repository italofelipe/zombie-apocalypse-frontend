type AxiosHandler = {
  config: {
    path: "/survivors" | "/survivor";
    params?: string;
  };
   body: Survivors;
};


type Skills = {
  skill: Skill;
  rate: number;
};

enum Skill {
  cook = "cook",
  animal_hunt = "animal_hunt",
  shooting = "shooting",
  fighting = "fighting",
  lockpick = "lockpick",
  hacking = "hacking",
}

type Survivors = {
  id: string;
  name: string;
  skills: Skills[] | [];
  isInfected: boolean;
  gender: "male" | "female";
};
