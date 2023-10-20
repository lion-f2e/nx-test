import { z } from "zod";
import { getHotelListPayload } from "@data-hotel";

type GetHotelListPayload = z.infer<typeof getHotelListPayload>;
