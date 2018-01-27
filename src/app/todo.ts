import { Itodo } from "./interfaces/itodo";

export class Todo implements Itodo {
  id: number;
  title: string;
  done: boolean;
  dateOfCreation: Date;
  dateOfEditing: Date;
  dateOfPerformance: Date;


  constructor(
    {
      id,
      title,
      done,
      dateOfCreation,
      dateOfEditing,
      dateOfPerformance
    }: Itodo) {
    this.id = id;
    this.title = title;
    this.done = done;
    this.dateOfCreation = dateOfCreation;
    this.dateOfEditing = dateOfEditing;
    this.dateOfPerformance = dateOfPerformance;
  }
}
