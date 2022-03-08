/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LocationWhereInput } from "./LocationWhereInput";
import { Type } from "class-transformer";
import { LocationOrderByInput } from "./LocationOrderByInput";

@ArgsType()
class LocationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LocationWhereInput,
  })
  @Field(() => LocationWhereInput, { nullable: true })
  @Type(() => LocationWhereInput)
  where?: LocationWhereInput;

  @ApiProperty({
    required: false,
    type: LocationOrderByInput,
  })
  @Field(() => LocationOrderByInput, { nullable: true })
  @Type(() => LocationOrderByInput)
  orderBy?: LocationOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LocationFindManyArgs };
