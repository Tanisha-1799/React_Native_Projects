import React,{useState} from 'react';
import Home from './components/Home';
import Onboard from './components/Onboard';

const App=()=>{
  const [showOnboard, setShowOnboard]=useState(true);

  const handleOnboardFinish=()=>{
    setShowOnboard(false);
  };

  return(showOnboard?<Onboard handleDone={handleOnboardFinish}/>:<Home />);
};
export default App;