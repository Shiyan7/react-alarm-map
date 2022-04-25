import { Status } from "./Status";

export class IRegion {
  id!: string;
  title?: string;
  status: Status = Status.OK;
}