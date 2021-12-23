import "./App.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import ExpereinceEducation from "./components/ExperienceEducation";
import { Stack } from "@chakra-ui/layout";
import Projects from "./components/Projects";
import { useColorMode } from "@chakra-ui/color-mode";
import { Divider } from "@chakra-ui/layout";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Stack spacing="24px">
      <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
      {colorMode === "dark" ? <Divider /> : null}
      <Skills />
      {colorMode === "dark" ? <Divider /> : null}
      <ExpereinceEducation colorMode={colorMode} />
      {colorMode === "dark" ? <Divider /> : null}
      <Projects colorMode={colorMode} />
    </Stack>
  );
}

export default App;
