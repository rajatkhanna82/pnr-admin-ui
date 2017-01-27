import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}} {{lastName}}</h1>
  `,
})
export class AppComponent  {
  name = 'Rajat';
  lastName = 'Khanna'

}
