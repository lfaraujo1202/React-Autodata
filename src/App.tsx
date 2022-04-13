import { GlobalStytle } from "./styles/global";
import { Header } from "./components/Header";
import { Grades } from "./components/Grades";

export function App() {
  return (
    <>
      <Header /> 
      <Grades /> 
      <GlobalStytle />
    </> 
  );
}
