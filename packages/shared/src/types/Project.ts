import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export interface Project { }

export interface UpdateProject {
  title?: string
  description?: string
  startDate?: Date
  endDate?: Date
  cuid?: string
  type?: string
  status?: string
}

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  startDate!: Date;

  @IsString()
  endDate!: Date;

  @IsString()
  cuid!: string;

  @IsString()
  type!: string;
}

export class UpdateProjectDto {
  @IsString()
  @IsOptional()
  title!: string;

  @IsString()
  @IsOptional()
  description!: string;

  @IsString()
  @IsOptional()
  startDate!: Date;

  @IsString()
  @IsOptional()
  endDate!: Date;

  @IsString()
  @IsOptional()
  cuid!: string;

  @IsString()
  @IsOptional()
  type!: string;

  @IsString()
  @IsOptional()
  status!: string
}