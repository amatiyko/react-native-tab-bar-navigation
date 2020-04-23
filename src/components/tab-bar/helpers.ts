import { Dimensions } from 'react-native';
import * as d3 from 'd3-shape';

const { width } = Dimensions.get('window');
const height = 70;

export const getShape = (tabWidth: number) => {
  const leftTopLine = d3
    .line()
    .x(([x]) => x)
    .y(([, y]) => y)([[0, 0], [width, 0]]);

  const currentTabCurve = d3
    .line()
    .x(([x]) => x)
    .y(([, y]) => y)
    .curve(d3.curveBundle)([
    [width, 0],
    [width + 5, 0],
    [width + 10, 10],
    [width + 20, height - 20],
    [width + tabWidth - 20, height - 20],
    [width + tabWidth - 10, 10],
    [width + tabWidth - 5, 0],
    [width + tabWidth, 0],
  ]);

  const rightTopLine = d3
    .line()
    .x(([x]) => x)
    .y(([, y]) => y)([
    [width * 2, 0],
    [width * 2, height],
    [0, height],
    [0, 0],
  ]);

  return `${leftTopLine} ${currentTabCurve} ${rightTopLine}`;
};
