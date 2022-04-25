import { IRegion } from "../types/IRegion";
import { Status } from "../types/Status";

export interface RegionStatusServiceInterface {
  getStatus(region: IRegion): Promise<Status>;
}