import { Component, OnInit } from '@angular/core';
import { Aluno } from './service/aluno';
import { AlunoService } from './service/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {
  aluno: Aluno = new Aluno();
  listaAlunos: Aluno[] = [];
  constructor( private router: Router, private alunoServico: AlunoService) { }
  selecionado: Aluno;
  ngOnInit(): void {
    this.pesquisar();
  }


  pesquisar(){
    this.alunoServico.pesquisar(this.aluno.nome).subscribe(
      (retorno: Aluno[]) => {
        this.listaAlunos = retorno;
      }

    );

  }
  incluir(){
    this.router.navigate(['/aluno/incluir']);
  }
  alterar(){
    this.router.navigate(['/aluno/alterar/'+ this.selecionado.nome]);
  }
  selecionar(valor){
    this.selecionado = valor;
  }
  remover(){

    this.alunoServico.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );

  }

}
