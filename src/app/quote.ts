export class Quote {
 public showName: boolean;
  constructor (public id: number,public description: string,public name: string,
    public completeDate: Date) {
    this.showName=false;
  }
}