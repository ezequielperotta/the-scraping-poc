import lccData from '../data/LCC.json';
import { TaskService } from '@/tasks/TaskService';

export class LCCTaskService extends TaskService {
  getData(): Record<string, any>[] {
    return lccData;
  }
}
