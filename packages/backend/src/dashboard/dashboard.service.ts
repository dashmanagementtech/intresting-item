import { DashboardProject } from '@dash/shared';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { prisma } from 'config/prisma';
import { getUserFromRequest } from 'utils/helpers';

@Injectable()
export class DashboardService {
  async findAll(req: any): Promise<{ data: DashboardProject[] }> {
    try {
      const user = await getUserFromRequest(req);
      let tasks: unknown[] = [];

      switch (user.role) {
        case 'ADMIN':
          tasks = await prisma.tasks.findMany({
            include: {
              sprint: {
                include: {
                  project: {
                    select: {
                      title: true,
                    },
                  },
                },
              },
            },
            where: {
              NOT: {
                status: 'DONE',
              },
            },
          });
          break;

        default:
          tasks = await prisma.tasks.findMany({
            where: {
              uid: user.id,
              NOT: {
                status: 'DONE',
              },
            },
            include: {
              sprint: {
                include: {
                  project: {
                    select: {
                      title: true,
                    },
                  },
                },
              },
            },
          });
          break;
      }

      const dashboard: Record<string, DashboardProject[]> = {};

      tasks.forEach((task: any) => {
        dashboard[task.sprint.pid] = {
          id: task.sprint.pid,
          title: task.sprint.project.title,
          tasks: [...(dashboard[task.sprint.pid]?.tasks || []), task],
        };
      });

      return { data: Object.values(dashboard).flat() };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException({ error });
    }
  }
}
