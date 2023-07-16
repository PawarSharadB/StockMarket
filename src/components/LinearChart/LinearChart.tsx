// LineChart.js
import React from 'react';
import {View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Svg, {Line} from 'react-native-svg';

const data = {
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Customize line color
      strokeWidth: 2, // Customize line width
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const CustomYAxis = () => {
  const width = 300; // Width of the chart
  const height = 300; // Height of the chart
  const y1 = 0; // Y position of the starting point
  const y2 = height; // Y position of the ending point
  const x = 0; // X position of the Y-axis line

  return (
    <Svg height={height} width={width}>
      <Line x1={x} y1={y1} x2={x} y2={y2} stroke="black" strokeWidth="1" />
    </Svg>
  );
};

export const LinearChart = () => {
  return (
    <View style={{height: 300}}>
      <CustomYAxis />
      <LineChart
        data={data}
        width={300}
        height={300}
        chartConfig={chartConfig}
        bezier
        style={{borderRadius: 16}}
        withHorizontalLines={false} // Hide horizontal grid lines
      />
    </View>
  );
};
