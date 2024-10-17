import { FaceSnapService } from '../services/face-snaps.service';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapService: FaceSnapService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

      this.snapButtonText = 'Oh snap';
      this.userHasSnapped = false;

      this.prepareInterface();
  }

  private prepareInterface() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap() : void {
    if(this.userHasSnapped){

      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapButtonText = 'Oh snap';
      this.userHasSnapped = false;
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapButtonText = 'Oops, un snap';
      this.userHasSnapped = true;
    }
  }
}
