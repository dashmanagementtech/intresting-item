import { Controller, Get } from '@nestjs/common';
import { CronService } from './cron.service';
import { Public } from 'decorators/public.decorator';

@Controller('cron')
export class CronController {
  constructor(private readonly cronService: CronService) {}

  @Public()
  @Get('/weekly-reports')
  sendAll() {
    return this.cronService.sendAllReportToClient();
  }
}
