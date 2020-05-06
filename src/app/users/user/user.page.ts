import { ResponseUser } from './../../models/users.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Importa modelo dos dados
import { User } from '../../models/users.model';

// importa o service dos usuários
import { UsersService } from '../../services/users.service';
// Importa a classe de navegação
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  // Obtem o id do usuário da url
  id: string = this.route.snapshot.paramMap.get('id');

    // Variável indentifica setemos usuários
    noUser = false;

    // Variável com array de usuários obtidos
    data: User;

  constructor(
    // Inicializa rotas dinâmicas para obter o ID
    private route: ActivatedRoute,
    private usersService: UsersService,
    
    //Navegação
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    //console.log('ID: ', this.id);

    // 2) Consultar a API para id informado
    this.usersService.getUser(this.id).subscribe(
      (res: any) => {
        //console.log(res);

        // Caso a consulta falhe...
        if (res.status !== 'success') {
          console.error(`Erro: ${res.result}`);
          return false;
        }
        // Se não retornou ninguem
        if (res.result === 'No record found') {
          // Informa o Html que o usuario não existe

          this.noUser = true;
          return false;

        } else {
          this.data = res.result;
          //console.log(this.data);
        }

      }
    );

  }

  // Ação do botão editar

editUser(id: string) {
  alert(`Editando ${id}...`);
}

delUser(id: string, name: string) {

  // Comfirmação
  if ( !confirm(`Tem certeza que deseja apagar "$(name)"?\n
  Esta ação é irreversivel\n
  Clique em [ok] para apagar e [Cancelar] para não apagar`)) {

    // Sai sem fazer nada
    return false;
    }

    // Apaga o registro
    this.usersService.deleteUser(this.id).subscribe((res:any) => {
      // Se apagou
      if(res.status === 'success' && res.result === 'Record deleted successfully') {
        // Feedback
        alert(`Usuario apagado com sucesso`);

      // Retorna para listagem de usuario
        this.navCtrl.navigateForward('lista');
      } else {
        // Se não apagou
        console.error('Falha ao apagar usuário', res.result);
}
});

}
listUsers() {
  this.navCtrl.navigateForward('lista');
}
}