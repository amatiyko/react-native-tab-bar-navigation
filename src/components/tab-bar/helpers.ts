import { Dimensions } from 'react-native';
import * as d3 from 'd3-shape';
import { HOME, LIST, TASK, TRANSFER, PROFILE } from '../../constants/routes';

export const { width } = Dimensions.get('window');
export const height = 50;

export const routeIcon = {
  [HOME]: 'home',
  [LIST]: 'list',
  [TASK]: 'crosshair',
  [TRANSFER]: 'navigation',
  [PROFILE]: 'user',
};

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
    [width - 7, 0],
    [width - 7 + 5, 0],
    [width - 7  + 10, 10],
    [width - 7  + 20, height + 5],
    [width + 7 + tabWidth - 20, height + 5],
    [width + 7 + tabWidth - 10, 10],
    [width + 7 + tabWidth - 5, 0],
    [width + 7 + tabWidth, 0],
  ]);

  const rightTopLine = d3
    .line()
    .x(([x]) => x)
    .y(([, y]) => y)([
    [width * 2 + tabWidth, 0],
    [width * 2 + tabWidth, height],
    [0, height],
    [0, 0],
  ]);

  return `${leftTopLine} ${currentTabCurve} ${rightTopLine}`;
};
