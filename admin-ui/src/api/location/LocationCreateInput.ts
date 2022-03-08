import { TaskCreateNestedManyWithoutLocationsInput } from "./TaskCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  name?: string | null;
  tasks?: TaskCreateNestedManyWithoutLocationsInput;
};
