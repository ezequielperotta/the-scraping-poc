import carefourData from '../data/Carrefour.json';

export class CarrefourTaskService {
  private _taskID: string;

  constructor(taskID: string) {
    this._taskID = taskID;
  }

  getData(): Record<string, any>[] {
    return carefourData;
  }
}
