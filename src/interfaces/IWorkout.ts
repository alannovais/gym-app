import { IMuscleRoutine } from "./IMuscleRoutine";

  enum WeekDays {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
  }
  
export interface IPlan {
    name: string;
    dayDefined: string;
    routine: IMuscleRoutine[] | [];
  }