import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { isDarkAtom } from "../atoms";
import { useRecoilValue } from "recoil";

interface ChartProps {
  coinId: string;
}
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;// 시작가
  high: number;// 최고가
  low: number;// 최저가
  close: number;// 종가
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);

  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      //refetchInterval: 10000,
    });
  return (
    <>
      <div>
        {isLoading ? (
          "Loading chart ..."
        ) : (
          <>
            <ApexChart type="line"
              series={[
                {
                  name: "sales",
                  data: data?.map((price) => price.close) as number[], //data: data?.map((price => price.close)) ?? [],
                  //series data [] 가 받아야 하는 건 number 인데 저희는 data?.map() 으로 읽어올때랑 아닐때를 구분해서 받아야 하는데 읽어오면 number 이지만 못읽어오면 undefind 가 되서 문제가 되는거예요.
                },
              ]}
              options={{
                theme: {
                  mode: isDark ? "dark" : "light",
                },
                chart: {
                  height: 300,
                  width: 500,
                  toolbar: {
                    show: false,
                  },
                  background: "transparent",
                },
                grid: { show: false },
                stroke: {
                  curve: "smooth",
                  width: 4,
                },
                yaxis: {
                  show: false,
                },
                xaxis: {
                  axisBorder: { show: false },
                  axisTicks: { show: false },
                  labels: { show: false },
                  type: "datetime",
                  categories: data?.map((price) => price.time_close),
                },
                fill: {
                  type: "gradient",
                  gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
                },
                colors: ["#0fbcf9"],
                tooltip: {
                  y: {
                    formatter: (value) => `$${value.toFixed(2)}`,
                  },
                },
              }} />

            <ApexChart type="candlestick"
              series={[
                {
                  data: data?.map((price) => ({
                    x: new Date(parseFloat(price.time_close) * 1000).toUTCString(),
                    y: [price.open, price.high, price.low, price.close]
                  }))
                },
              ] as unknown as number[]}
              options={{
                theme: {
                  mode: isDark ? "dark" : "light",
                },
                grid: { show: true },
                chart: {
                  height: 300,
                  width: 500,
                  toolbar: {
                    show: false,
                  },
                  background: "transparent",
                },
                stroke: {
                  curve: "smooth",
                  width: 2,
                },
                yaxis: {
                  show: false,
                },
                xaxis: {
                  labels: {
                    show: true,
                  },
                  type: "datetime",
                  categories: data?.map((price) =>
                    new Date(parseFloat(price.time_close) * 1000).toUTCString()
                  ),
                },
                plotOptions: {
                  candlestick: {
                    colors: {
                      upward: "#3c90eb",
                      downward: "#df7d46",
                    },
                  },
                },
                fill: {
                  type: "solid",
                },
              }} />
          </>
        )}
      </div>
    </>
  );
}

export default Chart;