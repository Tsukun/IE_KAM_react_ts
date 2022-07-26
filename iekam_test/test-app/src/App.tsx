import React from 'react';
import ParamEditor from './ParamEditor';
interface IParamValue {
  paramId: number;
  value: string;
}
interface IColor {
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
    { id: 1, name: 'test', type: 'string' },
    { id: 2, name: 'test', type: 'string' },
    { id: 3, name: 'test', type: 'string' },
    { id: 4, name: 'test', type: 'string' },
  ],
  model: {
    paramValues: [{ paramId: 1, value: '1' }],
    colors: [{ color: 'white' }],
  },
};

function App() {
  return <ParamEditor params={dataProps.params} model={dataProps.model} />;
}

export default App;
