export class CourseCategory{
  public id!: number;
   public title!: string;
  private children:Array<CourseCategory> = new Array;

}