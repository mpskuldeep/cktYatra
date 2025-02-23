import { Component } from '@angular/core';
import { InProgressComponent } from "../common/in-progress/in-progress.component";

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [InProgressComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {

}
