import { Injectable } from '@angular/core';
import {ArtistsStore} from "../artists-state/aritsts.store";
import {ArtistDataAccessService} from "./artist-data-access.service";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArtistsStateManagementService {



  constructor(private store: ArtistsStore, private artistDataAccessService:ArtistDataAccessService ) {

  }

  setAllArtists() {
    console.log("setAllArtists is actually setting the state")
    this.artistDataAccessService.getArtists().subscribe((artists)=> {
      console.log("in subscribe", artists);
      this.store.loadArtists(artists)
    })
  }
}

  // getAllCourses(): Observable<Course[]> {
  //   return this.http.get<Course[]>('/api/courses').pipe(
  //     tap(courses => {
  //       this.store.loadCourses(courses, true);
  //     })
  //   );
  // }

  // updateCourse(courseId: string, course: Course): Observable<any> {
  //   return this.http.put('/api/courses/' + courseId, course).pipe(
  //     tap(result => {
  //       this.store.update(courseId, course);
  //     })
  //   );
  // }

