"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var aluno_1 = require("./service/aluno");
var AlunoComponent = /** @class */ (function () {
    function AlunoComponent(router, alunoServico) {
        this.router = router;
        this.alunoServico = alunoServico;
        this.aluno = new aluno_1.Aluno();
        this.listaAlunos = [];
    }
    AlunoComponent.prototype.ngOnInit = function () {
        this.pesquisar();
    };
    AlunoComponent.prototype.pesquisar = function () {
        var _this = this;
        this.alunoServico.pesquisar(this.aluno.nome).subscribe(function (retorno) {
            _this.listaAlunos = retorno;
        });
    };
    AlunoComponent.prototype.incluir = function () {
        this.router.navigate(['/aluno/incluir']);
    };
    AlunoComponent.prototype.alterar = function () {
        this.router.navigate(['/aluno/alterar/' + this.selecionado.nome]);
    };
    AlunoComponent.prototype.selecionar = function (valor) {
        this.selecionado = valor;
    };
    AlunoComponent.prototype.remover = function () {
        this.alunoServico.remover(this.selecionado).subscribe(function (data) {
            alert(data['mensagem']);
        });
    };
    AlunoComponent = __decorate([
        core_1.Component({
            selector: 'app-aluno',
            templateUrl: './aluno.component.html',
            styleUrls: ['./aluno.component.scss']
        })
    ], AlunoComponent);
    return AlunoComponent;
}());
exports.AlunoComponent = AlunoComponent;
