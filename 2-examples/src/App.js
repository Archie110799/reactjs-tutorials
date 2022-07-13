import './App.css';
import React from 'react'
import ES6 from './Examples/ES6';
import JSX from './Examples/JSX'
import LifecycleExample from './Examples/LifecycleExamples'
import Countdown from './Examples/LifecycleExamples/Countdown'
import EventHandlerExamples from './Examples/EventHandlerExamples'
import EventHandler from './Examples/EventHandlerExamples/event'
import ConditionalRenderingExamples from './Examples/ConditionalRenderingExamples'
import LifecyleHookExamples from './Examples/LifecyleHookExamples'
import StateFunction from './Examples/State/stateFunction'
import StateClass from './Examples/State/stateClass'
import Session02 from './Homeworks/Session02'
import Session03 from './Homeworks/Session03'
import Basic from './Examples/Hooks/useRef-hook/Basic'
import UseEffect from './Examples/Hooks/useEffect'
import ListAccordions from './Homeworks/Session03/Accordions/ListAccordions'

import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000/'

function App() {
  return (
    <>
      {/* <JSX /> */}
      {/* <ES6 /> */}
      {/* <StateFunction /> */}
      {/* <StateClass /> */}
      {/* <LifecycleExample /> */}
      {/* <Countdown /> */}
      {/* <Basic /> */}
      {/* <LifecyleHookExamples /> */}
      {/* <EventHandlerExamples /> */}
      {/* <EventHandler /> */}
      {/* <ConditionalRenderingExamples /> */}
      {/* <Session02 /> */}
      {/* <Session03/> */}
      {/* <UseEffect /> */}
      <ListAccordions />
    </>
  );
}

export default App;
