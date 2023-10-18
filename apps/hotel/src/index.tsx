import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import "./styles/global.css";

import { HomeLayout } from "@shared-features/home";
import navigation from "./constants/navigation";
import pokemonImg from "./assets/pokemon.png";

export function HomePage() {
  // fetch(
  //   "/uhotelzkk/search/gethotellist?searchParam=%7B%22Destination%22:%7B%22Code%22:%22TW_TPE_180030%22,%22Kind%22:%2208%22%7D,%22IsLogin%22:false,%22CheckIn%22:%222023%2F11%2F13%22,%22CheckOut%22:%222023%2F11%2F23%22,%22Rooms%22:[%7B%22AdultQty%22:%222%22,%22ChildQty%22:%220%22,%22ChildAges%22:[]%7D],%22Filter%22:%7B%22Allotment%22:1,%22THSR%22:0,%22Quarantine%22:0,%22PriceRanges%22:[],%22HotelCategory%22:[],%22HotelTheme%22:[],%22Areas%22:[],%22BusinessZones%22:[],%22Transportations%22:[],%22Stars%22:[],%22Brand%22:[],%22Facility%22:[],%22Subsidy%22:0,%22Rating%22:[]%7D,%22OrderBy%22:3,%22PageIndex%22:1,%22PageSize%22:20%7D"
  // );
  return (
    <HomeLayout title="訂房的小小世界" navigation={navigation}>
      <img src={pokemonImg} alt="" />
    </HomeLayout>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
