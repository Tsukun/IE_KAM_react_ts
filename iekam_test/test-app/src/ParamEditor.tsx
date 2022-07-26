import React from 'react';

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

export default class ParamEditor extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      IModel: props.model,
      IParam: props.params,
    };
  }
  render() {
    return (
      <div>
        {this.getModel().paramValues.map(dataM => {
          return (
            <div>
              {this.props.params.map(dataP => {
                if (dataM.paramId === dataP.id) {
                  return (
                    <>
                      <h2>{dataP.name}</h2>
                      <input value={dataM.value} type='text' />
                    </>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    );
  }
  public getModel(): IModel {
    return this.state.IModel;
  }
}
