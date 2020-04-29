import { Component, OnInit } from '@angular/core';

// Serviço de acesso à API
import { UsersService } from '../../services/users.service';

// Rolagem infinita da lista
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.page.html',
  styleUrls: ['./listusers.page.scss'],
})
export class ListusersPage implements OnInit {

  // Infinite Scroll
  itemsPage: any = [];
  private readonly offset: number = 13;
  private index = 0;

  // Variável indentifica setemos usuários
  noUsers = false;

  // Variável com array de usuários obtidos
  data: Array<any> = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

    // Obtendo os dados da API
    this.usersService.getUsers().subscribe((res: any) => {

      // Se obteve com sucesso
      if (res.status === 'success') {

        // Loop para descartar usuarios removidos

        res.result.forEach((value) => {

          if (value !== null) {
            this.data.push(value);
          }

        });

        // Se não existem usuarios
        if (this.data.length === 0) {
          this.noUsers = true;
          // Se existem usuarios
        } else {

          // Página atual
          this.itemsPage = this.data.slice(this.index, this.offset + this.index);

          // Proxima página
          this.index += this.offset;
        }

      } else {
        console.error('Falha no acesso à API.');
      }

    });
  }

  // Infinite Scrool
  loadData(event) {
    setTimeout(() => {

      // Paginação a cada rolagem
      const news = this.data.slice(this.index, this.offset + this.index);
      this.index += this.offset;

      for (let i = 0; i < news.length; i++) {
        this.itemsPage.push(news[i]);
      }
      event.target.complete();

      // Encerra a total de elementos
      if (this.itemsPage.length === this.data.length) {
        event.target.disabled = true;
      }
    }, 800);
  }

}
