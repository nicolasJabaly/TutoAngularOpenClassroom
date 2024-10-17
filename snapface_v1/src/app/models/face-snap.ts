import { SnapType } from "./snap-type.type";

export class FaceSnap {

  location?: string;
  id: string;

  constructor(public title : string,
              public description : string,
              public createdAt : Date,
              public snaps : number,
              public imageUrl : string) {
    this.id = crypto.randomUUID();
  }

  addSnap() : void {
    this.snaps++;
  }

  snap(snapType: SnapType){
    if(snapType == 'snap')
      this.addSnap();
    else
      this.removeSnap();
  }

  removeSnap(): void {
    this.snaps--;
  }

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}
