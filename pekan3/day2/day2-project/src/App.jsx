import './App.css';

// import ToggleButton from './component/CreateASimpleCustomHook/component/ToggleButton';
// import ToggleSwitch from './component/CreateASimpleCustomHook/component/ToggleSwitch';

// import PostDetail from './component/EkstraksiLogicToCustomHook/component/PostDetail';

// import CounterPanel from './component/HooksComposition/component/CounterPanel';

// import SimpleFrom from './component/CustomHookForFormHandling/component/SimpleForm';

import UserName from './component/CustomHookWithLocalStorage/component/localStorageExample/UserName';
import ToggleTheme from './component/CustomHookWithLocalStorage/component/localStorageExample/ThemeToggle';

function App(){

  return(
    <>
    {/* <div>
      <h2>Custom hooks: useToggle</h2>

      <ToggleButton/>
      <ToggleSwitch/>
    </div> */}

      {/* <div>
        <h1>useFetch Custom Hook</h1>
        <PostDetail/>
      </div> */}
{/* 
      <div>
        <h2>Hooks Composition</h2>
        <CounterPanel/>
      </div> */}

      {/* <div>
        <h1>Custoom Hooks: useFrom</h1>
        <SimpleFrom/> 
      </div> */}

        <div>
          <h1>Custom Hooks: useLocalStorage</h1>
          <UserName/>
          <ToggleTheme/>
        </div>

    </>
  )
}

export default App;