import React from 'react';
import Style from './PageLine.module.scss';

class PageLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      point: 0,
      inter: false,
    };
  }

  componentDidMount() {
    this.runInterval('up');
  }
  
  componentDidUpdate(prevProps) {
    const { percent } = this.props;
    const { percent: prevPercent } = prevProps;
    if (percent !== prevPercent) {
      let act = 'up';
      if (percent < this.state.point) act = 'down';
      this.runInterval(act);
    }
    const { point } = this.state;
    if (point === percent)
      clearInterval(this.state.inter);
  }

  componentWillUnmount() {
    clearInterval(this.state.inter);
  }

  runInterval = (act) => {
    const interval = setInterval(() => {
      if (act === 'up')
      this.setState({ point: this.state.point+=1 });
      if (act === 'down')
      this.setState({ point: this.state.point-=1 });
    }, 25);
    this.setState({ inter: interval });
  };
  
  render() {
    return (
      <div className={Style.wrapper}>
        <div className={Style.line} style={{ height: `${this.state.point}%` }}/>
        <div className={Style.cartoon} >
          <img src='/spider2.gif' alt='spider.gif' />
        </div>
      </div>
    );
  }

};

export default PageLine;