import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage {

  constructor(private router: Router) { }

  navigateTo(location: string) {
    const routes = {
      'home': '/home',
      'servicos': '/servicos',
      'produtos': '/produtos',
      'sobre': '/sobre',
      'contato': '/contato'
    };

    // Verifica se a localização fornecida existe no mapeamento de rotas
    const route = routes[location];
    if (route) {
      this.router.navigate([route], { replaceUrl: true });
    } else {
      // Opção para lidar com uma rota não encontrada, opcional
      console.error('Rota não encontrada:', location);
      // Você pode redirecionar para uma rota padrão ou página de erro, se desejar
      // this.router.navigate(['/pagina-nao-encontrada'], { replaceUrl: true });
    }
  }

}
