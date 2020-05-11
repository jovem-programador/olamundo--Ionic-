import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  // Cria formulario
  public userForm: FormGroup;

  constructor(
    // Construtor do formulário reativo
    private formBuilder: FormBuilder,

    // Importa o serviçe da API
    private usersService: UsersService,

    public navCtrl: NavController
  ) {
    // Definindo campos do formulario
    this.userForm = this.formBuilder.group({
      // Campo 'id'
      id: [null],

      // Campo 'name'
      name: [ // Nome do campo
        'Anderson Marley', // Valor inicial
        Validators.compose([  // Regras de validação
          Validators.required,  // Campos obrigatorios
          Validators.minLength(3) // Comprimento minimo
        ])
      ],

      // Campo email
      email: [
        'andersonmarley011@gmail.com',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$')
        ])
      ],

      // Campo avatar
      avatar: [
        'https://picsum.photos/200/300',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i)
        ])
      ],

      // Campo status
      status: [1]
    });
  }

  ngOnInit() {}

  onSubmit() {
    //console.log(this.userForm.value);

    // Se o campo id está vazio, estamos cadastrando um usuário
    if (this.userForm.value.id === null) {

      // Cadastra usuário

      // Remove o campo id
      delete this.userForm.value.id;

      // Ajusta o valor do campo status para numerico
      if (!this.userForm.value.status) {
        this.userForm.value.status = 0;
      } else {
        this.userForm.value.status = 1;
      }
      // Salvar dados na API
      this.usersService.postUser(this.userForm.value).subscribe((res:any) => {

        // se foi adicionado
        if (res.status === 'success') {
          alert(`"${this.userForm.value.name}" foi adicionado com sucesso!`);
        }
        // Rota para lista
        this.navCtrl.navigateForward('lista');

        // Limpa o formulario
        //this.userForm.reset();
      });
    } else {
      // Edita usuário
    }
  }

}