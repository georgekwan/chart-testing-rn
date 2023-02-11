import { StyleSheet, View, ScrollView } from 'react-native';

import React from 'react';
import SvgLineChart from './src/components/SvgChart';
import FancyLineChart from './src/components/FancyLineChart';
import InteractiveChart from './src/components/InteractiveChart';

const App = () => {
  return (
    <View>
      <View>
        <SvgLineChart />
      </View>
      <View>
        <FancyLineChart />
      </View>
      <ScrollView>
        <InteractiveChart />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
