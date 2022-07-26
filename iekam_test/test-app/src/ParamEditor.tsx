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
  toggle: boolean;
}

export default class ParamEditor extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      IModel: props.model,
      IParam: props.params,
      toggle: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.IModel.paramValues.map(dataM => {
          return (
            <>
              {this.props.params.map(dataP => {
                if (dataM.paramId === dataP.id) {
                  return (
                    <div>
                      <h2>{dataP.name}</h2>
                      <input
                        id={String(dataP.id)}
                        onChange={e => this.changeValue(Number(e.target.id), e.target.value)}
                        defaultValue={dataM.value}
                        type='text'
                      />
                    </div>
                  );
                }
              })}
            </>
          );
        })}
        <div>
          <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
            Добавить новый параметр
          </button>
          {!this.state.toggle && (
            <div>
              <h1>Введите параметры</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
  public getModel(): IModel {
    return this.state.IModel;
  }

  changeValue = (id: number, value: string) => {
    this.state.IModel.paramValues.map((element, index) => {
      if (element.paramId === id) {
        this.state.IModel.paramValues[index].value = value;
      }
    });
    console.log(this.state.IModel.paramValues);
  };
}
