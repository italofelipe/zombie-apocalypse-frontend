const mockSurvivorList: Survivors[] = [
  {
    gender: "male",
    id: "1234",
    isInfected: false,
    name: "Mock Survivor",
    skills: [
      {
        rate: 0,
        skill: "cook" as Skill,
      },
    ],
  },
  {
    name: "Elon Musk",
    isInfected: false,
    skills: [
      {
        skill: "hacking" as Skill,
        rate: 9,
      },
    ],
    id: "412",
    gender: "male",
  },
];

export { mockSurvivorList };
