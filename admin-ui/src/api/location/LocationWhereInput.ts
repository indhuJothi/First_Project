import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type LocationWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  tasks?: TaskListRelationFilter;
};
