import { useGetHotelListQuery } from "./store";

function SearchPage() {
  const { data: hotelList } = useGetHotelListQuery({
    Destination: {
      Code: "TW_TPE_180030",
      Kind: "08",
    },
    IsLogin: false,
    CheckIn: "2023/10/26",
    CheckOut: "2023/11/19",
    Rooms: [
      {
        AdultQty: 2,
        ChildQty: 0,
        ChildAges: [],
      },
    ],
    Filter: {
      Allotment: 1,
      // THSR: 0,
      Quarantine: "0",
      PriceRanges: [],
      HotelCategory: [],
      HotelTheme: [],
      Areas: [],
      BusinessZones: [],
      Transportations: [],
      Stars: [],
      Brand: [],
      Facility: [],
      Subsidy: 0,
      Rating: [],
    },
    OrderBy: 3,
    PageIndex: 2,
    PageSize: 20,
  });

  console.log(hotelList);

  return (
    <div>
      <h1>Search Page</h1>
    </div>
  );
}

export default SearchPage;
