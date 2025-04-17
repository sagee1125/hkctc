import React, { useEffect } from "react";
import * as echarts from "echarts";
import type { ChartProps } from "./types";
import { useSettings } from "../../context";

type AreaChartProps = ChartProps & {
  desc: string;
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
    desc,
  } = props;
  const { isPC } = useSettings();

  useEffect(() => {
    const areaChartElement = document.getElementById(elementId) as HTMLElement;
    const areaChart = echarts.init(areaChartElement);
    // 在窗口尺寸变化时重设图表大小
    const resizeHandler = () => areaChart.resize();
    window.addEventListener("resize", resizeHandler);
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
          fontSize: isPC ? 16 : 10,
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
          fontSize: isPC ? 16 : 10,
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
          symbolSize: isPC ? 10 : 4, // 设置点的大小
          lineStyle: {
            width: isPC ? 2 : 1,
          },
        },
      ],
    };

    areaChart.setOption(option);
    return () => {
      window.removeEventListener("resize", resizeHandler); // 清除事件监听
      areaChart.dispose();
    };
  }, [
    seriesData,
    xAxisData,
    seriesBackgroundColor,
    seriesItemColor,
    elementId,
    yAxisStartValue,
    isPC,
  ]);

  return (
    <div
      className="flex flex-col justify-center"
      style={{
        overflow: "visible",
      }}
    >
      <div>{title}</div>
      <div
        style={{
          paddingLeft: isPC ? "0px" : "20px",
          overflow: "visible",
        }}
      >
        <div
          id={elementId}
          role="img"
          aria-label={desc}
          style={{
            width: "100%",
            minHeight: isPC ? "500px" : "240px",
            overflow: "visible",
          }}
        />
      </div>
    </div>
  );
};
