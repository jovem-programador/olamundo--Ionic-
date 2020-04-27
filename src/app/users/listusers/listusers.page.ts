import { Component, OnInit } from '@angular/core';

// Serviço de acesso à API
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.page.html',
  styleUrls: ['./listusers.page.scss'],
})
export class ListusersPage implements OnInit {

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

        res.result.forEach((value) =>{

          if (value !== null) {
            this.data.push(value);
          }

        });

        // Se não existem usuarios
        if (this.data.length === 0) {
          this.noUsers = true;
        }

      } else {
        console.error('Falha no acesso à API.');
      }

    });
  }

}
