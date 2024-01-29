import { IGroupClass } from "../src/interfaces/IGroupClass";

export const ClassesMock: IGroupClass[] = [
    {
      id: 1,
      name: "Power Step",
      description: "Descrição da aula",
      date: "12/12/2020",
      time: "12:00",
      location: "Centro",
      teacher: [{
        id: 1,
        name: "Sara",
      }],
      capacity: 10,
    },
    {
      id: 2,
      name: "Body Attack",
      description: "Descrição da aula",
      date: "12/12/2020",
      time: "12:00",
      location: "Centro",
      teacher: [{
        id: 1,
        name: "Sara",
      }],
      capacity: 10,
    },
  ];