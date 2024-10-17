import { FaceSnapService } from './../services/face-snaps.service';
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
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
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{

  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapService: FaceSnapService, private router: Router) {

  }

  ngOnInit(): void {

      this.snapButtonText = 'Oh snap';
      this.userHasSnapped = false;
  }

  onViewFaceSnap() {
      this.router.navigateByUrl('facesnaps/'+this.faceSnap.id);
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
