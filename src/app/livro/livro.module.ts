import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import {FormsModule} from "@angular/forms";
import { CadastroListagemComponent } from './cadastro-listagem/cadastro-listagem.component';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    ListagemComponent,
    CadastroListagemComponent,
    ManutencaoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ]
})
export class LivroModule { }
