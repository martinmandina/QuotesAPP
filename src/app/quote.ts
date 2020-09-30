export class Quote {
  showName: boolean;
  constructor(public id: number,public description: string,public name: string){
    this.showName=false;
  }
}