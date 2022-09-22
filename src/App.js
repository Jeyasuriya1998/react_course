import React, {Component} from 'react';
import './App.css';
import MyComponent from './components/function_component';
import Class_Component from './components/class_component';
import JSX_JS from './components/jsx_js';
import Props_Component from "./components/props_explain"
import SetState_Component from './components/setstate_learn';
import Detail_setState from './components/detail_setstate';
import FunctionClickEvent from './components/FunctionClickEvent';
import ClassEventBinding from './components/ClassEventBinding';
import ParentComponent from './components/ParentComponent';
import ConditionalRebdring from './components/ConditionalRebdring';
import NameListRender from './components/NameListRender';
import StyleSheetComponent from './components/StyleSheetComponent';
import InlineCssComponent from './components/InlineCssComponent';
import './components/AppStyles.css';
import suriya from './components/appStyles.module.css'
import FormComponent from './components/FormComponent';
import LifecylceMountA from './components/LifecylceMountA';
import { LifecylceUpdate } from './components/LifeCycleUpdate';
import FragementsComponent from './components/FragementsComponent';
import ParentComponent_Pure from './components/ParentComponent_Pure';
import RefsComponent from './components/RefsComponent';
import FRefParentComponent from './components/FRefParentComponent';
import PortalComponnent from './components/PortalComponnent';
import ErrorHeros from './components/ErrorHeros';
import ErrorBoundryComponnent from './components/ErrorBoundryComponnent';
import ButtonClickHigherComponent from './components/ButtonClickHigherComponent';
import MoveOverHigherComponent from './components/MoveOverHigherComponent';
import UseStaeForm1 from './components/UseStaeForm1';
import AxiosGetComponent from './components/AxiosGetComponent';
import AxiosPostComponent from './components/AxiosPostComponent';

class App extends Component {
  render(){
    const heros = ["Batman", "Superman", 'Joker']
    return (
      <div className="App">
        <FormComponent />
        {/* <h1 className="primary">AppSyle.css</h1>
        <h1 className={suriya.success}>AppSyle.modulescss</h1> */}
        {/* <ErrorBoundryComponnent >
          <ErrorHeros hero="BatMan" />
          <ErrorHeros hero="Super Mam" />
          <ErrorHeros hero="Joker" />
        </ErrorBoundryComponnent> */}
        {/* {console.log(heros)}
        {heros.map((h, index)=>(
          <ErrorBoundryComponnent>
            <ErrorHeros key={index} hero={h} />
          </ErrorBoundryComponnent>
        ))} */}

        {/* <Detail_setState /> */}
        {/* <SetState_Component message="Welcome Suriya"/> */}

        {/* <MyComponent name="Suriya" />
        <Class_Component />
        <JSX_JS />

        <Props_Component name="Suriya" >
          <p>This Chile for first</p>
        </Props_Component>
        <Props_Component name="saravan" />
        <Props_Component name="iraianbu" /> */}
      </div>
      
    );
  }
}

export default App;
