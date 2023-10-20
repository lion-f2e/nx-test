const z = require("zod");

const destination = z.object({
  Code: z.string(),
  Kind: z.string(),
  Longitude: z.optional(z.number()),
  Latitude: z.optional(z.number()),
  Distance: z.optional(z.number()),
});

const room = z.object({
  AdultQty: z.number(),
  ChildQty: z.number(),
  ChildAges: z.array(z.number()),
});

const priceRange = z.object({
  From: z.number(),
  To: z.number(),
});

const filter = z.object({
  Allotment: z.number(),
  PayKind: z.optional(z.string()),
  PriceRanges: z.array(priceRange),
  HotelCategory: z.array(z.string()),
  HotelTheme: z.array(z.string()),
  Areas: z.array(z.string()),
  BusinessZones: z.array(z.string()),
  Transportations: z.array(z.string()),
  Stars: z.array(z.number()),
  Brand: z.array(z.string()),
  Facility: z.array(z.string()),
  Subsidy: z.number(),
  Rating: z.array(z.string()),
  Quarantine: z.string(),
  // THSR: z.number(),
});

const getHotelListPayload = z.object({
  Destination: destination,
  IsLogin: z.optional(z.boolean()),
  CheckIn: z.string(),
  CheckOut: z.string(),
  Rooms: z.array(room),
  Filter: filter,
  OrderBy: z.number(),
  PageIndex: z.number(),
  PageSize: z.number(),
});

export { getHotelListPayload };
