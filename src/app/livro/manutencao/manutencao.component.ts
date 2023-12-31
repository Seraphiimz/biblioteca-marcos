import { Component } from '@angular/core';
import {Livro} from "../../shared/model/livro";
import {LivroService} from "../../shared/services/livro.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IMensagem} from "../../shared/model/imensagem";


@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.component.html',
  styleUrls: ['./manutencao.component.css']
})
export class ManutencaoComponent {

  readonly NAME_BUTTON_CADASTRAR = 'Cadastrar';
  readonly NAME_BUTTON_ATUALIZAR = 'Atualizar';
  livroTratamento: Livro;
  mensagemErro = '';
  estahCadastrando = true;
  nomeBotao = this.NAME_BUTTON_CADASTRAR;

  constructor(private LivroService: LivroService, private rotaAtivada: ActivatedRoute, private roteador: Router, private mensagemService: IMensagem) {
    const idEdicao = this.rotaAtivada.snapshot.params['id'];
    if (idEdicao) {
      this.estahCadastrando = false;
      this.LivroService.pesquisarPorId(idEdicao).subscribe(alunoRetornado => {
        this.livroTratamento = this.livroTratamento;
      });
    }
    this.livroTratamento = new Livro('','', '', '','');
    this.nomeBotao = this.estahCadastrando ? this.NAME_BUTTON_CADASTRAR : this.NAME_BUTTON_ATUALIZAR;
  }

  cadastrarOuAtualizar(): void {
    if (this.estahCadastrando) {
      this.LivroService.pesquisarPorId(this.livroTratamento.id.toString()).subscribe(
        livroPesquisado => {
          if (livroPesquisado && livroPesquisado.length > 0) {
            const erroLivroDuplicado: Livro = {
              id: '',
              titulo: 'Erro',
              autor: 'Erro',
              descricao: 'Já há livro com a id ' + this.livroTratamento.id,
              categoria: 'Erro'
            };
            this.LivroService.erro(erroLivroDuplicado);
          } else {
            this.LivroService.cadastrar(this.livroTratamento).subscribe(
              livroCadastrado => {
                this.mensagemService.sucesso('Livro foi cadastrado!');
                this.roteador.navigate(['/listagem-livros']);
              });
          }
        }
      );
    } else {
      this.LivroService.atualizar(this.livroTratamento).subscribe(aluno => {
        this.mensagemService.sucesso('Livro foi atualizado!');
        this.roteador.navigate(['/listagem-livros']);
      });
    }
  }
}
