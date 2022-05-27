import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-style',
  template: `
    <p>
      style works!
    </p>
  `,
  styles: [
  ]
})
export class StyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
