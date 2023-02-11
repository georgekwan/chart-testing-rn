import React from 'react';
import { LineChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Circle, G, Line, Rect, Text } from 'react-native-svg';

const FancyLineChart = () => {
  const drillAccuracy = [
    80, 10, 95, 48, 24, 67, 51, 12, 33, 0, 24, 20, 50, 50, 10, 40, 95, 85, 91,
    35, 53, 24, 50,
  ];

  const HorizontalLine = ({ y }) => (
    <Line
      key={'zero-axis'}
      x1={'0%'}
      x2={'100%'}
      y1={y(50)}
      y2={y(50)}
      stroke={'grey'}
      strokeDasharray={[4, 8]}
      strokeWidth={2}
    />
  );

  const Tooltip = ({ x, y }) => (
    <G
      x={x(5) - 75 / 2}
      key={'tooltip'}
      onPress={() => console.log('tooltip clicked')}
    >
      <G y={50}>
        <Rect
          height={40}
          width={75}
          stroke={'grey'}
          fill={'white'}
          ry={10}
          rx={10}
        />
        <Text
          x={75 / 2}
          dy={20}
          alignmentBaseline={'middle'}
          textAnchor={'middle'}
          stroke={'rgb(134, 65, 244)'}
        >
          {`${drillAccuracy[5]}ºC`}
        </Text>
      </G>
      <G x={75 / 2}>
        <Line
          y1={50 + 40}
          y2={y(drillAccuracy[5])}
          stroke={'grey'}
          strokeWidth={2}
        />
        <Circle
          cy={y(drillAccuracy[5])}
          r={6}
          stroke={'rgb(134, 65, 244)'}
          strokeWidth={2}
          fill={'white'}
        />
      </G>
    </G>
  );

  // const Shadow = ({ line }) => (
  //   <Path
  //     key={'shadow'}
  //     y={2}
  //     d={line}
  //     fill={'none'}
  //     strokeWidth={5}
  //     stroke={'#FF000060'}
  //   />
  // );

  return (
    <LineChart
      style={{ height: 200 }}
      data={drillAccuracy}
      svg={{
        stroke: 'rgb(134, 65, 244)',
        strokeWidth: 2,
      }}
      contentInset={{ top: 20, bottom: 20 }}
      curve={shape.curveLinear}
    >
      <Grid />
      <HorizontalLine />
      <Tooltip />
    </LineChart>
  );
};

export default FancyLineChart;
