import React from 'react';
import ParamEditor from './ParamEditor';
interface IParamValue {
  paramId: number;
  value: string;
}
interface IColor {
  id: number;
  color: string;
}
interface IModel {
  paramValues: IParamValue[];
  colors: IColor[];
}

interface IParam {
  id: number;
  name: string;
  type: string;
}

interface IProps {
  params: IParam[];
  model: IModel;
}

interface IState {
  IParam: IParam[];
  IModel: IModel;
}

const dataProps: IProps = {
  params: [
    { id: 1, name: 'test1', type: 'string' },
    { id: 2, name: 'test2', type: 'string' },
    { id: 3, name: 'test3', type: 'string' },
    { id: 4, name: 'test4', type: 'string' },
  ],
  model: {
    paramValues: [
      { paramId: 1, value: '1' },
      { paramId: 2, value: '2' },
      { paramId: 3, value: '3' },
      { paramId: 4, value: '4' },
    ],
    colors: [{ id: 1, color: 'white' }],
  },
};

function App() {
  return <ParamEditor params={dataProps.params} model={dataProps.model} />;
}

export default App;
