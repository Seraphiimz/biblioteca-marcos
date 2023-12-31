import {Component, OnInit} from '@angular/core';
import {Livro} from "../../shared/model/livro";
import {LIVROS} from "../../shared/model/LIVROS";
import {LivroService} from "../../shared/services/livro.service";
import {Router} from "@angular/router";

@Component({
  selector: 'livro-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  livros: Livro[] = [];
  idPesquisados: Livro[] = [];
  livrosPesquisados: Array<Livro> = [];

  constructor(private livroService: LivroService, private roteador: Router) {
  }
  ngOnInit() {
    this.livroService.listar().subscribe(livrosRetornados =>
      {
        this.livros = livrosRetornados;
      }
    );
    console.log('ok!!');
    console.log(this.livros);
  }

  remover(livroARemover: Livro): void {
    this.livroService.remover(livroARemover).subscribe( livroRemovido => {
        console.log('Livro foi removido');
        const indxARemover = this.livros.findIndex(livro =>
          livro.id === livroARemover.id);

        if (indxARemover >= 0) {
          this.livros.splice(indxARemover, 1);
        }
      }
    );
  }
  editar(id: string): void {
    console.log('id');
    console.log(id);
    this.roteador.navigate(['edicao-livro', id]);
  }

}
