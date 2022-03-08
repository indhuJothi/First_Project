import { TaskUpdateManyWithoutLocationsInput } from "./TaskUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  name?: string | null;
  tasks?: TaskUpdateManyWithoutLocationsInput;
};
