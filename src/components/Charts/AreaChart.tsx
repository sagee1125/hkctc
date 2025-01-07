import React, { useEffect } from "react";
import * as echarts from "echarts";
import type { ChartProps } from "./types";

type AreaChartProps = ChartProps & {
  xAxisData: string[] | number[];
  yAxisStartValue?: number;
  seriesData: number[];
  seriesBackgroundColor?: string;
  seriesItemColor?: string;
};

export const AreaChart: React.FC<AreaChartProps> = (props: AreaChartProps) => {
  const {
    title,
    elementId,
    xAxisData,
    yAxisStartValue = 0,
    seriesData,
    seriesBackgroundColor = "#D9B6F6",
    seriesItemColor = "#BD78FC",
  } = props;
  useEffect(() => {
    const areaChartElement = document.getElementById(elementId) as HTMLElement;
    const areaChart = echarts.init(areaChartElement);

    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: "axis", // 根据轴触发
        formatter: (params: any) => {
          // 自定义提示框内容
          const dataPoint = params[0];
          return `
                <div>
                  <strong>${dataPoint.name}</strong>: ${dataPoint.value}
                </div>
              `;
        },
        backgroundColor: "rgba(50, 50, 50, 0.8)", // 提示框背景色
        textStyle: {
          color: "#fff", // 提示框文字颜色
        },
        borderWidth: 1,
        borderColor: "#ccc", // 边框颜色
      },

      xAxis: {
        type: "category",
        boundaryGap: false,
        data: xAxisData,
        axisLine: {
          lineStyle: {
            color: "#000", // 设置 X 轴线颜色为黑色
          },
        },
        axisLabel: {
          color: "#000", // 设置 X 轴标签颜色为黑色
          fontSize: 16,
        },
        axisTick: {
          show: false, // 隐藏 X 轴刻度
        },
      },
      yAxis: {
        axisLine: {
          show: true,
          lineStyle: {
            color: "#000", // 黑色 Y 轴线
          },
        },
        axisLabel: {
          color: "#000", // 黑色标签
          fontSize: 16,
        },
        axisTick: {
          show: true, // 显示刻度
          lineStyle: {
            color: "#000",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#eee",
          },
        },
        startValue: yAxisStartValue,
      },
      series: [
        {
          data: seriesData,
          type: "line",
          areaStyle: {
            color: seriesBackgroundColor, // 设置渐变色
          },
          itemStyle: {
            color: seriesItemColor,
          },
          symbol: "circle", // 使用圆形点
          symbolSize: 10, // 设置点的大小
          lineStyle: {
            width: 2,
          },
        },
      ],
    };

    areaChart.setOption(option);

    return () => {
      areaChart.dispose();
    };
  }, [
    seriesData,
    xAxisData,
    seriesBackgroundColor,
    seriesItemColor,
    elementId,
    yAxisStartValue,
  ]);

  return (
    <div>
      <div>{title}</div>
      <div
        id={elementId}
        style={{
          width: "100%",
          height: "500px",
        }}
      />
    </div>
  );
};
