import { Component } from '@angular/core';
import { InProgressComponent } from "../common/in-progress/in-progress.component";

@Component({
  selector: 'app-visit-pages',
  standalone: true,
  imports: [InProgressComponent],
  templateUrl: './visit-pages.component.html',
  styleUrl: './visit-pages.component.css'
})
export class VisitPagesComponent {

}
