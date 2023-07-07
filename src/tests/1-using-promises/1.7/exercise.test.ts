import makeExercise from "../../../content/1-using-promises/1.7/exercise";
import { makeGraphExerciseTestCase } from "../../../lib/graphExercise/graphExerciseTestCase";

const graphExerciseTestCase = makeGraphExerciseTestCase({ makeExercise });

graphExerciseTestCase("1.7", [
  { created: ["A", "B"] },
  { resolved: "A", created: ["C"] },
  { resolved: "B", created: ["D"] },
  { resolved: "C", created: ["E"] },
  { resolved: "D", created: [] },
  { resolved: "E", created: [] },
]);

graphExerciseTestCase("1.7", [
  { created: ["A", "B"] },
  { resolved: "B", created: [] },
  { resolved: "A", created: ["C", "D"] },
  { resolved: "D", created: [] },
  { resolved: "C", created: ["E"] },
  { resolved: "E", created: [] },
]);

graphExerciseTestCase("1.7", [
  { created: ["A", "B"] },
  { resolved: "B", created: [] },
  { resolved: "A", created: ["C", "D"] },
  { resolved: "D", created: [] },
  { resolved: "C", created: ["E"] },
  { resolved: "E", created: [] },
]);

graphExerciseTestCase("1.7", [
  { created: ["A", "B"] },
  { resolved: "B", created: [] },
  { resolved: "A", created: ["C", "D"] },
  { resolved: "C", created: ["E"] },
  { resolved: "D", created: [] },
  { resolved: "E", created: [] },
]);
