import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  Query,
  Put,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import {
  AddProjectDocumentDto,
  AddStaffToProjectDto,
} from './dto/update-project.dto';

import { UpdateProjectDto, CreateProjectDto } from '@dash/shared';

import { PaginationDto } from 'utils/pagination.dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto, @Request() req: any) {
    return this.projectsService.create(createProjectDto, req);
  }

  @Get()
  findAll(@Query() query: PaginationDto, @Request() req) {
    return this.projectsService.fetchAllProjects(query, req);
  }

  @Get('/analytics')
  getAnalytics(@Request() req) {
    return this.projectsService.projectAnalytics(req);
  }

  @Get('/upcoming')
  getUpcomingTasks(@Request() req) {
    return this.projectsService.upcomingTasks(req);
  }

  @Get('/my-tasks')
  getUserTasks(@Request() req) {
    return this.projectsService.getUserTasks(req);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @Put(':id')
  updateProject(
    @Request() req,
    @Param('id') id: string,
    @Body() project: UpdateProjectDto,
  ) {
    return this.projectsService.updateProject(req, id, project);
  }

  @Get(':id/documents')
  findProjectDocuments(@Param('id') id: string) {
    return this.projectsService.findProjectDocuments(id);
  }

  @Put(':id/document')
  addDocument(@Param('id') id: string,
    @Body() document: AddProjectDocumentDto,
  ) {
    return this.projectsService.addProjectDocuments(id, document);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProjectDto: AddStaffToProjectDto[],
  ) {
    return this.projectsService.addStaffToProject(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.projectsService.deleteProject(req, id);
  }
}
