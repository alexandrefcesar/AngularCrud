import { Component, OnInit } from "@angular/core";
import { Aluno } from "../service/aluno";
import { AlunoService } from "../service/aluno.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-alunomanter",
  templateUrl: "./alunomanter.component.html",
  styleUrls: ["./alunomanter.component.scss"]
})
export class AlunomanterComponent implements OnInit {
  aluno: Aluno = new Aluno();
  operacao: string = "Incluir";
  nome: string = "";


  constructor(
    private routeActivated: ActivatedRoute,
    private alunoService: AlunoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.nome = this.routeActivated.snapshot.params.id;
    if (this.nome != null) {
      this.operacao = "Alterar";
      this.alunoService.pesquisar(this.nome).subscribe(data => {
        this.aluno = (<Aluno[]>data)[0];
      });
    }
  }
  incluir() {
    this.alunoService.incluir(this.aluno).subscribe(retorno => {
      alert(retorno["mensagem"]);
      this.voltar();
    });
  }
  voltar() {
    this.router.navigate(["/aluno"]);
  }

  alterar() {
    this.alunoService.alterar(this.aluno).subscribe(data => {
      alert(data["mensagem"]);
      this.router.navigate(["/aluno"]);
    });
  }
}
