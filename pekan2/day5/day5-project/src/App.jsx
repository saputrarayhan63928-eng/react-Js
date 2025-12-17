// import './App.css'
import Calculator from "./component/TemperatureInput";
import CounterWithReducer from "./component/CounterWithReducer";
import DuitConverter from "./component2/MoneyConfersion";
import Main from "./component2/PropsDarling/inti";
import PerentComponent from "./component2/ParentAndChild/Perent";
import AksiReducer from "./component2/UseReducer/CountAngka";

// ThemeProvider Component
import ThemeProvider from "./component2/ComponentThemeProvider/ThemeProvider";
import Header from "./component2/ComponentThemeProvider/Header";
import Content from "./component2/ComponentThemeProvider/Content";
import ThemeToggleButton from "./component2/ComponentThemeProvider/ThemeToggleButton";
import "./component2/ComponentThemeProvider/ThemeProvider.css";

function App() {
  return (
    <>
      {/* <Calculator/> */}
      {/* <CounterWithReducer /> */}
      {/* <DuitConverter/> */}
      {/* <Main/> */}
      {/* <PerentComponent/> */}
      <AksiReducer/>

      {/* ThemProvider Component */}
      <ThemeProvider>
        <Header />
        <ThemeToggleButton />
        <Content />
      </ThemeProvider>
    </>
  );
}

export default App;
