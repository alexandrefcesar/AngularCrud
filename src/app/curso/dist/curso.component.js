"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var curso_1 = require("./servico/curso");
var CursoComponent = /** @class */ (function () {
    function CursoComponent(router, cursoServico) {
        this.router = router;
        this.cursoServico = cursoServico;
        this.curso = new curso_1.Curso();
        this.listaCurso = [];
    }
    CursoComponent.prototype.ngOnInit = function () {
        this.pesquisar();
    };
    CursoComponent.prototype.pesquisar = function () {
        var _this = this;
        this.cursoServico
            .pesquisar(this.curso.nome)
            .subscribe(function (retorno) {
            _this.listaCurso = retorno;
        });
    };
    CursoComponent.prototype.incluir = function () {
        this.router.navigate(["/curso/incluir"]);
    };
    CursoComponent.prototype.selecionar = function (valor) {
        this.selecionado = valor;
    };
    CursoComponent.prototype.remover = function () {
        this.cursoServico.remover(this.selecionado).subscribe(function (data) {
            alert(data["mensagem"]);
        });
    };
    CursoComponent.prototype.alterar = function () {
        this.router.navigate(["/curso/alterar/" + this.selecionado.nome]);
    };
    CursoComponent = __decorate([
        core_1.Component({
            selector: "app-curso",
            templateUrl: "./curso.component.html",
            styleUrls: ["./curso.component.scss"]
        })
    ], CursoComponent);
    return CursoComponent;
}());
exports.CursoComponent = CursoComponent;
