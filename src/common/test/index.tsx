import * as React from 'react';
import { connect } from 'react-redux';

export interface IHomePageState {
  name: string
}

export interface IHomePageProps {
  home: string;
}

class Test extends React.PureComponent<IHomePageProps, IHomePageState> {
  constructor(props: IHomePageProps) {
    super(props);
    this.state = {
      name: ""
    };
  }

  public setName = () => {
    this.setState({
      name: "icepy",
    });
  }

  public render() {
    const { name } = this.state;
    const { home } = this.props;
    return (
      <div>
        <div onClick={this.setName}> set name </div>
        <div>{name} {home}</div>
      </div>
    )
  }
}

export default connect(null, null)(Test);
