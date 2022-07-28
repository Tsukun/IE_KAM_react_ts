import { type } from '@testing-library/user-event/dist/type';
import { off } from 'process';
import React from 'react';

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
  toggle: boolean;
  name: string;
  type: string;
  value: string;
}

export default class ParamEditor extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      IModel: props.model,
      IParam: props.params,
      toggle: true,
      name: '',
      type: '',
      value: '',
    };
  }
  public getModel(): IModel {
    return this.state.IModel;
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
                      <h2>Название: {dataP.name}</h2>
                      Значение:
                      <input
                        id={String(dataP.id)}
                        onChange={e => this.changeValue(Number(e.target.id), e.target.value)}
                        defaultValue={dataM.value}
                        type='text'
                      />
                      {this.state.IModel.colors.map(colors => {
                        if (colors.id == dataM.paramId) {
                          return (
                            <>
                              Цвет:
                              <input
                                id={String(colors.id)}
                                onChange={e =>
                                  this.changeColor(Number(e.target.id), e.target.value)
                                }
                                defaultValue={colors.color}
                                type='text'
                              />
                            </>
                          );
                        }
                      })}
                    </div>
                  );
                }
              })}
            </>
          );
        })}
        <div>
          <button onClick={() => console.log(this.getModel())}>Получить модель</button>
          <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
            Добавить новый параметр
          </button>
          {!this.state.toggle && (
            <div>
              <h1>Введите параметры</h1>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor='name'>Название</label>
                  <input id='name' onChange={e => this.setState({ name: e.target.value })} />
                </div>
                <div>
                  <label htmlFor='type'>Тип</label>
                  <input id='type' onChange={e => this.setState({ type: e.target.value })} />
                </div>
                <div>
                  <label htmlFor='value'>Значение</label>
                  <input id='value' onChange={e => this.setState({ value: e.target.value })} />
                </div>
                <input type='submit' value='Добавить' />
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  changeValue = (id: number, value: string) => {
    let items: IModel = this.state.IModel;
    items.paramValues.map((element, index) => {
      if (element.paramId === id) {
        items.paramValues[index].value = value;
        this.setState({ IModel: items });
      }
    });
    console.log(this.state.IModel);
  };

  changeColor = (id: number, color: string) => {
    let items: IModel = this.state.IModel;
    items.colors.map((element, index) => {
      if (element.id === id) {
        items.colors[index].color = color;
        this.setState({ IModel: items });
      }
    });
  };
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let max = 0;
    console.log(this.state.IModel);
    let arrayModel: IModel = this.state.IModel;
    let arrayParams: IParam[] = this.state.IParam;
    arrayModel.paramValues.map(value => {
      if (value.paramId > max) {
        max = value.paramId;
      }
    });
    arrayModel.paramValues.push({ paramId: max + 1, value: this.state.value });
    arrayParams.push({ id: max + 1, name: this.state.name, type: this.state.type });
    this.setState({ IModel: arrayModel });
    this.setState({ IParam: arrayParams });

    console.log(this.state.IModel);
    console.log(this.state.IParam);
  };
}
