import {Component, OnInit, ViewChild} from '@angular/core';
import {Artist} from "../../models/artist.interface";
import {ArtistsQuery} from "../../artists-state/artists.query";
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  artists: Artist[] = [];
  dataSource!: MatTableDataSource<Artist>;


  constructor(private artistsQuery: ArtistsQuery,
              private _liveAnnouncer: LiveAnnouncer) {
    this.artistsQuery.selectAllArtists$.pipe().subscribe(
      artists => {
        this.artists = artists;
        this.dataSource = new MatTableDataSource<Artist>(artists);
      }
    )
    this.dataSource.sortingDataAccessor = this.nestedProperty
  }

  @ViewChild(MatSort) sort!: MatSort;


  nestedProperty = (data: any, sortHeaderId: string): string | number => {
    return sortHeaderId
      .split('.')
      .reduce((acc, key) => acc && acc[key], data) as string | number;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // columns: string[] = ['Name', 'Genres', 'Country', 'City', 'Active Since', 'Popularity']
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (artist: Artist) => `${artist.name}`,
    },
    {
      columnDef: 'genres',
      header: 'Genres',
      cell: (artist: Artist) => `${artist.genres}`,
    },
    {
      columnDef: 'origin.country',
      header: 'Country',
      cell: (artist: Artist) => `${artist.origin.country}`,
    },
    {
      columnDef: 'origin.city',
      header: 'City',
      cell: (artist: Artist) => `${artist.origin.city}`,
    },
    {
      columnDef: 'active_since',
      header: 'Active Since',
      cell: (artist: Artist) => `${artist.active_since}`,
    }
  ]

  displayedColumns = this.columns.map(c => c.columnDef);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit(): void {
  }

}
