import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
]
})
export class HeaderComponent {
  product={
    name:'iphone', color:'red', location:"../../assets/OIP.jpg"
  }

}
