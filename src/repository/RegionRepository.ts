import { IRegion } from "../types/IRegion";
import { Status } from "../types/Status";
import { BaseRepository } from "./BaseRepository";

export class RegionRepository extends BaseRepository<IRegion> {
  protected createRegionFromData(data: { id: string; title: string }): IRegion {
    const region = new IRegion();
    region.id = data.id;
    region.title = data.title;
    region.status = Status.OK;
    return region;
  }
}