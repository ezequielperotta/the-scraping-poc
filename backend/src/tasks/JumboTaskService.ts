import jumboData from '../data/Jumbo.json';
import { TaskService } from '@/tasks/TaskService';

export class JumboTaskService extends TaskService {
  getData(): Record<string, any>[] {
    return jumboData;
  }
}
