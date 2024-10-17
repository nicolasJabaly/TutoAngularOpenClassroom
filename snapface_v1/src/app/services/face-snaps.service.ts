import { SnapType } from './../models/snap-type.type';
import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
  providedIn : 'root'
})

export class FaceSnapService {
  private faceSnaps: FaceSnap[] = [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami',
        new Date(),
        0,
        'https://miro.medium.com/v2/resize:fit:1400/1*bMgQ8MhbnQexpqHgIgBJPA.png'
      ),
      new FaceSnap(
        'Chat',
        'Super Mignon',
        new Date(),
        155,
        'https://www.agria.fr/imagevault/publishedmedia/9vgy569fypmkernjg4x6/Orange_cat_laying_indoor.jpg'
      ).withLocation("a la maison")
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  snapFaceSnapById(id: string, snapType: SnapType): void {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if(!foundFaceSnap)
      throw new Error("pas trouvéo");
    foundFaceSnap.snap(snapType);
  }

  getFaceSnapById(id: string){
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === id);
    if(!foundFaceSnap)
      throw new Error("pas trouvéo");
    return foundFaceSnap;
  }
}
