import carefourData from '../data/Carrefour.json';
import { TaskService } from '@/tasks/TaskService';

export class CarrefourTaskService extends TaskService {
  getData(): Record<string, any>[] {
    return carefourData;
  }
}
