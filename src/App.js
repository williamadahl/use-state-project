import './App.css';
import SimpleUseStateExapmle from './setupFiles/simple-usestate-example'
import UseStateArray from './setupFiles/use-state-array-example'
import UseStateObject from './setupFiles/use-state-object-example'
import UseStateCounter from './setupFiles/use-state-counter-example'
import UseEffectBasic from './useEffect/useEffect-basic'
import UseEffectCleanup from './useEffect/useEffect-cleanup'
import UseEffectFetchData from './useEffect/use-effect-fetch-users'
import MultipleReturns from './conditionalRendering/multiple-returns'


function App() {
  return (
      <div className = 'container'>
      <MultipleReturns />
      </div>
  );
}

export default App;
