import makeExercises from "../../exercises/graph/5/exercise";
import { makeGraphExerciseTests } from "../../lib/graphExercise/graphExerciseTests";

const graphExerciseTests = makeGraphExerciseTests(makeExercises);

graphExerciseTests("5", [
  {
    label: "A",
    dependencies: [],
  },
  {
    label: "B",
    dependencies: [["A"]],
  },
  {
    label: "C",
    dependencies: [["A"]],
  },
  {
    label: "D",
    dependencies: [["B"]],
  },
  {
    label: "E",
    dependencies: [["C"]],
  },
  {
    label: "F",
    dependencies: [["D", "E"]],
  },
]);
