import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {

      this.snapButtonText = 'Oh snap';
      this.userHasSnapped = false;
  }

  onSnap() : void {
    if(this.userHasSnapped){
      this.faceSnap.removeSnap();
      this.snapButtonText = 'Oh snap';
      this.userHasSnapped = false;
    } else {
      this.faceSnap.addSnap();
      this.snapButtonText = 'Oops, un snap';
      this.userHasSnapped = true;
    }
  }
}
