import { Text } from 'react-native';
import { Grid, Path, LineChart } from 'react-native-svg-charts';

const SvgLineChart = () => {
  const drillAccuracy = [
    80, 10, 95, 48, 24, 67, 51, 12, 33, 0, 24, 20, 50, 50, 10, 40, 95, 85, 91,
    35, 53, 24, 50,
  ];

  const Shadow = ({ line }) => (
    <Path
      key={'shadow'}
      y={2}
      d={line}
      fill={'none'}
      strokeWidth={5}
      stroke={'#FF000060'}
    />
  );

  return (
    <LineChart
      style={{ height: 100 }}
      gridMin={0}
      gridMax={100}
      data={drillAccuracy}
      svg={{ stroke: '#FF0000' }}
      contentInset={{ top: 10, bottom: 10 }}
    >
      <Grid />
      <Shadow />
    </LineChart>
  );
};

export default SvgLineChart;
