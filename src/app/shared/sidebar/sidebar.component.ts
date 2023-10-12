import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule, FooterComponent],
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { label: 'Inicio', link: '/home' },
    { label: 'Productos', link: '/products' },
    { label: 'Usuarios', link: '/users' },
    // Agrega más elementos de la lista según tus necesidades
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
  }

  selectMenuItem(index: number) {
    const list = document.querySelectorAll('.list');
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove('active');
    }
    list[index].classList.add('active');
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}

interface MenuItem {
  label: string;
  link: string;
}
