import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss']
})
export class ArtistPageComponent implements OnInit {

  params?:any;
  obj: Object = {
    asda: "sdf",
    asd: 34
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.params = this.route.snapshot.queryParams;
    console.log(this.params)
  }



}
