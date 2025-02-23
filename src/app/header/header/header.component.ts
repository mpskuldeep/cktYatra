import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome'
import {faEnvelope, fas, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  iconEmail =  faEnvelope;
  iconWhatsapp = faWhatsapp;
  iconPhone = faPhone;
}
