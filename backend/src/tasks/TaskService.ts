export abstract class TaskService {
  protected _taskID: string;

  constructor(taskID: string) {
    this._taskID = taskID;
  }

  abstract getData(): Record<string, any>;
}
