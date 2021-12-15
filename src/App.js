import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import ExpereinceEducation from "./components/ExperienceEducation";
import { VStack } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import Projects from "./components/Projects";

function App() {
  return (
    <Stack spacing="24px">
      <Header />
      <Skills />
      <ExpereinceEducation />
      <Projects />
    </Stack>
  );
}

export default App;
