import React from 'react';
import { Chart, ChartSeries, ChartSeriesItem,ChartLegendItem, ChartLegend } from '@progress/kendo-react-charts';

const PieChart = props => {

    const statusCounts = props.listOfProduct.reduce((acc, product) => {
        const status = product.stateType;
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {});

      const chartData = Object.keys(statusCounts).map(status => ({
        category: status,
        value: statusCounts[status]
      }));

      const statusColors = {
        'INITIAL': '#B5BAC0',
        'NOT_READY': '#FF6813',
        'READY': '#2B80C2',
        'SENT': '#004E9C',
      };

      const coloredChartData = chartData.map(item => ({
        ...item,
        color: statusColors[item.category]
      }));
    
    return (
      <Chart>
          <ChartLegend position="bottom" markerType="circle"/>
          <ChartSeries>
              <ChartSeriesItem type="pie" data={coloredChartData} field="value" categoryField="category" />
          </ChartSeries>
      </Chart>
    );
};

export default PieChart;