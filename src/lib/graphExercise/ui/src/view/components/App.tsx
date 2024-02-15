import { ExerciseProvider } from "../../application/ExerciseProvider.js";
import styles from "./App.module.scss";
import { useExercise } from "../../application/useExercise.js";
import { Header } from "./Header.js";
import { RecordsDisplay } from "./RecordsDisplay.js";
import { ControlPanel } from "./ControlPanel.js";
import { VariantSelector } from "./VariantSelector.js";
import { Footer } from "./Footer.js";
import { Sidebar } from "./Sidebar.js";

function App() {
  const { exercise } = useExercise();

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <Header />
        <div className={styles.center}>
          {exercise && (
            <>
              <VariantSelector />

              <RecordsDisplay />
            </>
          )}
        </div>

        <div>
          <ControlPanel />
        </div>
        <Footer />
      </main>
    </div>
  );
}

const AppWithProviders = () => (
  <ExerciseProvider>
    <App />
  </ExerciseProvider>
);

export default AppWithProviders;
