import React from 'react';
import CanvasJsFile from '../Canvas/canvasjs.min';
var CanvasJS = CanvasJsFile.Chart ? CanvasJsFile : window.CanvasJsFile;

class CanvasJSChart extends React.Component {
  static _cjsContainerId = 0;
  constructor(props) {
    super(props);
    this.options = props.options ? props.options : {};
    this.containerProps = props.containerProps
      ? { ...props.containerProps }
      : { width: '100%', position: 'relative' };
    this.containerProps.height =
      props.containerProps && props.containerProps.height
        ? props.containerProps.height
        : this.options.height
        ? this.options.height + 'px'
        : '400px';
    this.chartContainerId = 'canvasjs-react-chart-container-' + CanvasJSChart._cjsContainerId++;
  }

  componentDidMount() {
    this.chart = new CanvasJS.Chart(this.chartContainerId, this.options);
    this.chart.render();
    if (this.props.onRef) this.props.onRef(this.chart);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(nextProps.options === this.options);
  }

  componentDidUpdate() {
    this.chart.options = this.props.options;
    this.chart.render();
  }

  componentWillUnmount() {
    if (this.chart) this.chart.destroy();
    if (this.props.onRef) this.props.onRef(undefined);
  }

  render() {
    return <div id={this.chartContainerId} style={this.containerProps} />;
  }
}

var CanvasJSReact = {
  CanvasJSChart: CanvasJSChart,
  CanvasJS: CanvasJS
};

export default CanvasJSReact;
