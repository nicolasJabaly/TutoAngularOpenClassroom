import { FaceSnapService } from './../services/face-snaps.service';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps! : FaceSnap[];

  constructor(private faceSnapService: FaceSnapService){

  }

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;

  ngOnInit(): void {

    this.faceSnaps = this.faceSnapService.getFaceSnaps();
  }
}
