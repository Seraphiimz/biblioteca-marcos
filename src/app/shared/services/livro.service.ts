import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../model/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private apiUrl = 'http://localhost:8080/api/livros';

  constructor(private http: HttpClient) {}

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl);
  }
  listar(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiUrl);
  }
  cadastrar(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.apiUrl, livro);
  }
  remover(livro: Livro): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${livro.id}`);
  }
  pesquisarPorId(ids: string): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.apiUrl}/pesquisarPorId`, { params: { ids } });
  }

  atualizar(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.apiUrl}/${livro.id}`, livro);
  }

  erro(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.apiUrl}/${livro.id}`, livro);
  }
}
