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
              private _liveAnnouncer:LiveAnnouncer) {
    this.artistsQuery.selectAllArtists$.pipe().subscribe(
      artists => {
        this.artists = artists;
          this.dataSource = new MatTableDataSource<Artist>(artists);
      }
    )
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
announceSortChange(sortState: Sort) {
  // This example uses English messages. If your application supports
  // multiple language, you would internationalize these strings.
  // Furthermore, you can customize the message to add additional
  // details about the values being sorted.
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
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

// constructor(private _liveAnnouncer: LiveAnnouncer) {}
//
// @ViewChild(MatSort) sort: MatSort;
//
// ngAfterViewInit() {
//   this.dataSource.sort = this.sort;
// }
//
// /** Announce the change in sort state for assistive technology. */
// announceSortChange(sortState: Sort) {
//   // This example uses English messages. If your application supports
//   // multiple language, you would internationalize these strings.
//   // Furthermore, you can customize the message to add additional
//   // details about the values being sorted.
//   if (sortState.direction) {
//     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
//   } else {
//     this._liveAnnouncer.announce('Sorting cleared');
//   }
// }


//
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }
//
// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
//
// /**
//  * @title Table with columns defined using ngFor instead of statically written in the template.
//  */
// @Component({
//   selector: 'table-generated-columns-example',
//   styleUrls: ['table-generated-columns-example.css'],
//   templateUrl: 'table-generated-columns-example.html',
// })
// export class TableGeneratedColumnsExample {
//   columns = [
//     {
//       columnDef: 'position',
//       header: 'No.',
//       cell: (element: PeriodicElement) => `${element.position}`,
//     },
//     {
//       columnDef: 'name',
//       header: 'Name',
//       cell: (element: PeriodicElement) => `${element.name}`,
//     },
//     {
//       columnDef: 'weight',
//       header: 'Weight',
//       cell: (element: PeriodicElement) => `${element.weight}`,
//     },
//     {
//       columnDef: 'symbol',
//       header: 'Symbol',
//       cell: (element: PeriodicElement) => `${element.symbol}`,
//     },
//   ];
//   dataSource = ELEMENT_DATA;
//   displayedColumns = this.columns.map(c => c.columnDef);
// }
