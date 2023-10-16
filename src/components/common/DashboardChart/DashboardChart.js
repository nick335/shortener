import "./DashboardChart.css"
import { useEffect, useRef } from "react"
import { useSelector } from "react-redux";
import { Chart } from "chart.js/auto"
import { Link1, MouseCircle, Profile2User, Send2 } from "iconsax-react";
import Select from "@/components/common/Select/Select";


export default function DashboardChart({
  variant = 'bar', // bar || line
  title = '',
  labels,  // Array
  shadow = false,
  select = false
}) {
  const admins = useSelector(state => state.admins)
  const urlsCreated = useSelector(state => state.urls.urlsCreated)
  const urlClicks = useSelector(state => state.urls.urlClicks)
  const urlShares = useSelector(state => state.urls.urlShares)


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

    const weights = [ admins, urlsCreated, urlClicks, urlShares ]
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
      type: variant,
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
    <div className="chart-section">
      {
        select ? (
          <div className="flex flex-col gap-[20px] lg:flex-row lg:justify-between">
            {
              title ? (
                <span className="text-normal">
                  {title}
                </span>
              ) : null
            }

            <div className="chart-selects">
              <Select variant="admins" />
              <Select variant="time" />
            </div>
          </div>
        ) : null
      }

      <div className={`chart-canvas-container ${shadow ? "with-shadow" : ""}`}>
        <canvas ref={chartCanvas} className="!w-full !h-full" />
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