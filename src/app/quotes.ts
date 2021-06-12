export class Quotes {
  showDescription: boolean
  constructor(public id: number, public name: string, public description: string, public author: string, public poster: string, public completeDate: Date, public numberOflikes: number, public numberOfdislikes: 0) {
    this.showDescription = false;
  }
}
