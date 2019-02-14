import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';

export interface IHomePageState {
  name: string
}

export interface IHomePageProps {
  home: string;
}

class Test extends React.PureComponent<IHomePageProps, IHomePageState> {

  public render() {
    const { name } = this.state;
    const { home, setName } = this.props;
    return (
      <div>
        <div onClick={setName}> set name </div>
        <div>{name} {home}</div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    name: state.getIn(['test', 'name'])
  }
}

const mapDispatchToProps = (dispatch: DispatchProp) => {
  return {
    setName() {
      console.log(123);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
