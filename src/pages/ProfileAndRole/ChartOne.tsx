import React, { useEffect } from "react";
import * as echarts from "echarts";

export const ChartOne: React.FC = () => {
  useEffect(() => {
    const chartElement = document.getElementById("chart") as HTMLElement;
    const chart = echarts.init(chartElement);

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
        data: [
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020",
          "2021",
          "2022",
        ],
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
      },
      series: [
        {
          data: [
            500, 520, 540, 560, 590, 620, 650, 700, 750, 800, 880, 950, 980,
            1000,
          ],
          type: "line",
          areaStyle: {
            color: "rgba(190, 149, 255, 0.5)", // 设置渐变色
          },
          itemStyle: {
            color: "#BE95FF",
          },
          symbol: "circle", // 使用圆形点
          symbolSize: 10, // 设置点的大小
          lineStyle: {
            width: 2,
          },
        },
      ],
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div>
      <p className="text-heading-m pt-[24px] ml-[24px]">
        Number of institutions engaged in testing and certification activities
        <br />
        from 2009 to 2022
      </p>
      <div
        id="chart"
        style={{
          width: "100%",
          height: "500px",
        }}
      />
    </div>
  );
};
