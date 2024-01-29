import { WeekDays } from "../src/helpers/Contants";
import { IPlan } from "../src/interfaces";


export const WorkoutDayMock: IPlan[] = [
  {
    name: "Rest",
    dayDefined: WeekDays[0],
    routine: [],
  },
  {
    name: "Plano 1",
    dayDefined: WeekDays[1],
    routine: [
      {
        muscle: "Cheast",
        exercises: [
          {
            name: "Press",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
          {
            name: "Crucifix",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
          {
            name: "Inclinated Press",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
        ],
      },
      {
        muscle: "Triceps",
        exercises: [
          {
            name: "French Triceps",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
          {
            name: "Bank Triceps",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
        ],
      },
    ],
  },
  {
    name: "Plano 2",
    dayDefined: WeekDays[2],
    routine: [
      {
        muscle: "Backs",
        exercises: [
          {
            name: "Pull machine",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
          {
            name: "Reverse Cross Over",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
          {
            name: "Low Row",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
          {
            name: "Pull over",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
        ],
      },
      {
        muscle: "Biceps",
        exercises: [
          {
            name: "Biceps curl",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
          {
            name: "Scott Biceps curl",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
          {
            name: "Forearm curl",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
        ],
      },
    ],
  },
  {
    name: "Plano 3",
    dayDefined: WeekDays[3],
    routine: [
      {
        muscle: "Legs",
        exercises: [
          {
            name: "Leg press",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
          {
            name: "Bulgarian Squats",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
          {
            name: "Deadlifts",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
          {
            name: "Stiff",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
          {
            name: "Hamst. Curl",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
          {
            name: "Hamst. Curl",
            sets: 3,
            reps: 10,
            weight: "-",
            during: null,
          },
        ],
      },
    ],
  },
  {
    name: "Rest",
    dayDefined: WeekDays[4],
    routine: [],
  },
];