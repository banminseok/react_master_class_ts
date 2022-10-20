import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}

function Coin() {
  const { coinId } = useParams<"coinId">();
  return (
    <>
      <h1>Coin: {coinId}</h1>
    </>
  );
}

export default Coin;


// Coin 스크린
