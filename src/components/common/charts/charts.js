import { useEffect, useRef } from "react"
import { Chart } from "chart.js/auto"
import { URLS_CREATED, ADMINS, URL_CLICKS, URL_SHARES } from "@/constants/tempData";
import { Link1, MouseCircle, Profile2User, Send2 } from "iconsax-react";
import Select from "../Select/Select";

function BarChart() {
  const chartCanvas = useRef(null);
  const urlsIcon = useRef(null);
  const adminsIcon = useRef(null);
  const clicksIcon = useRef(null);
  const sharesIcon = useRef(null);

  const colors = {
    purple: "#6259CDB2",
    green: "#00B29AB2"
  };

  useEffect(() => {
    const ctx = chartCanvas.current.getContext("2d");

    const icons = [ urlsIcon, adminsIcon, clicksIcon, sharesIcon ]
    const weights = [ ADMINS, URLS_CREATED, URL_CLICKS, URL_SHARES ]
    const alternatingColors = [
      colors.purple, colors.green,
      colors.purple, colors.green,
    ]

    const data = {
      labels: icons.map(element => element.current.textContent),
      datasets: [
        {
          label: "",
          data: weights.map(weight => weight.length),
          backgroundColor: alternatingColors,
          borderRadius: 3,
          barPercentage: 0.25,
          width: 6
        }
      ]
    };
    
    const config = {
      type: "bar",
      data: data,
      options: {
        legend: { display: false },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      plugins: [HTMLLegendElement]
    }

    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <>
      <canvas id="myChart" ref={chartCanvas} />

      <div className="labels hidden">
        <Link1 ref={urlsIcon} />
        <Profile2User ref={adminsIcon} />
        <MouseCircle ref={clicksIcon} />
        <Send2 ref={sharesIcon} />
      </div>
    </>
  )
}


function BarChart__Variable({ variant }) {
  const chartCanvas = useRef(null);
  const urlsIcon = useRef(null);
  const adminsIcon = useRef(null);
  const clicksIcon = useRef(null);
  const sharesIcon = useRef(null);

  const colors = {
    purple: "#6259CDB2",
    green: "#00B29AB2"
  };

  useEffect(() => {
    const ctx = chartCanvas.current.getContext("2d");

    const labels = [ "3m", "6m", "9m", "1y" ]
    const weights = [ ADMINS, URLS_CREATED, URL_CLICKS, URL_SHARES ]
    const alternatingColors = [
      colors.purple, colors.green,
      colors.purple, colors.green,
    ]

    const data = {
      labels: labels,
      datasets: [
        {
          label: "",
          data: weights.map(weight => weight.length),
          backgroundColor: alternatingColors,
          borderRadius: 3,
          barPercentage: 0.25,
          width: 6
        },
      ]
    };
    
    const config = {
      type: "bar",
      data: data,
      options: {
        legend: { display: false },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      plugins: [HTMLLegendElement]
    }

    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div className="space-y-[20px]">
      <div className="flex flex-col gap-[20px] lg:flex-row lg:justify-between">
        <span className="text-normal">Link Performance</span>

        <div className="flex gap-[10px]">
          <Select current="Everyone" options={["Everyone"]} />
          <Select current="This Month" options={["This Month", "All Time"]} />
        </div>
      </div>

      <div className="py-[25px] px-[22px] bg-ecx-white shadow-[0_2px_16px_0_rgba(0,0,0,0.05)] aspect-[1.75] lg:aspect-[2] rounded-[5px] lg:rounded-[10px]">
        <canvas id="myChart" ref={chartCanvas} className="!w-full !h-full" />
      </div>

      <div className="labels hidden">
        <Link1 ref={urlsIcon} />
        <Profile2User ref={adminsIcon} />
        <MouseCircle ref={clicksIcon} />
        <Send2 ref={sharesIcon} />
      </div>
    </div>
  )
}

function LineChart__Variable({ variant }) {
  const chartCanvas = useRef(null);
  const urlsIcon = useRef(null);
  const adminsIcon = useRef(null);
  const clicksIcon = useRef(null);
  const sharesIcon = useRef(null);

  const colors = {
    purple: "#6259CDB2",
    green: "#00B29AB2"
  };

  useEffect(() => {
    const ctx = chartCanvas.current.getContext("2d");

    const labels = [ "1w", "2w", "3w", "1m", "" ]
    const weights = [ ADMINS, URLS_CREATED, URL_CLICKS, URL_SHARES ]
    const alternatingColors = [
      colors.purple, colors.green,
      colors.purple, colors.green,
    ]

    const data = {
      labels: labels,
      datasets: [
        {
          label: "",
          data: weights.map(weight => weight.length),
          backgroundColor: alternatingColors,
          borderRadius: 3,
          barPercentage: 0.25,
          width: 6
        },
      ]
    };
    
    const config = {
      type: "line",
      data: data,
      options: {
        legend: { display: false },
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
      plugins: [HTMLLegendElement]
    }

    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  return (
    <div className="space-y-[20px]">
      <div className="flex gap-[10px]">
        <Select current="Everyone" options={["Everyone"]} />
        <Select current="All Time" options={["This Month", "All Time"]} />
      </div>

      <div className="py-[25px] px-[22px] bg-ecx-white shadow-[0_2px_16px_0_rgba(0,0,0,0.05)] aspect-[1.75] lg:aspect-[2] rounded-[5px] lg:rounded-[10px]">
        <canvas id="myChart" ref={chartCanvas} className="!w-full !h-full" />
      </div>


      <div className="labels hidden">
        <Link1 ref={urlsIcon} />
        <Profile2User ref={adminsIcon} />
        <MouseCircle ref={clicksIcon} />
        <Send2 ref={sharesIcon} />
      </div>
    </div>
  )
}


export { BarChart, BarChart__Variable, LineChart__Variable }