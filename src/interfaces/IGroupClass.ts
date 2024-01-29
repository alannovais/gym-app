import { ITeacher } from "./ITeacher";

export interface IGroupClass {
    id: number;
    name: string;
    description: string;
    date: string;
    time: string;
    location: string;
    teacher: ITeacher[];
    capacity: number;
  };