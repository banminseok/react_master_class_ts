//fetcher Func
// export async function fetchCoins() {
//   const response = await fetch("https://api.coinpaprika.com/v1/coins");
//   const json = await response.json();
//   return json;
// }
const BASE_URL = `https://api.coinpaprika.com/v1`;
const BASE_URL2 = `https://ohlcv-api.nomadcoders.workers.dev`;

export function fetchCoins() {
  // return fetch("https://api.coinpaprika.com/v1/coins").then((response) =>
  //   response.json()
  // );
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  //https://ohlcv-api.nomadcoders.workers.dev/?coinId=btc-bitcoin
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(`${BASE_URL2}/?coinId=${coinId}&start=${startDate}&end=${endDate}`)
    .then((response) => response.json());
}