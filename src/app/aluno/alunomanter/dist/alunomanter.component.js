"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var aluno_1 = require("../service/aluno");
var AlunomanterComponent = /** @class */ (function () {
    function AlunomanterComponent(routeActivated, alunoService, router) {
        this.routeActivated = routeActivated;
        this.alunoService = alunoService;
        this.router = router;
        this.aluno = new aluno_1.Aluno();
        this.operacao = "Incluir";
        this.nome = "";
    }
    AlunomanterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nome = this.routeActivated.snapshot.params.id;
        if (this.nome != null) {
            this.operacao = "Alterar";
            this.alunoService.pesquisar(this.nome).subscribe(function (data) {
                _this.aluno = data[0];
            });
        }
    };
    AlunomanterComponent.prototype.incluir = function () {
        var _this = this;
        this.alunoService.incluir(this.aluno).subscribe(function (retorno) {
            alert(retorno["mensagem"]);
            _this.voltar();
        });
    };
    AlunomanterComponent.prototype.voltar = function () {
        this.router.navigate(["/aluno"]);
    };
    AlunomanterComponent.prototype.alterar = function () {
        var _this = this;
        this.alunoService.alterar(this.aluno).subscribe(function (data) {
            alert(data["mensagem"]);
            _this.router.navigate(["/aluno"]);
        });
    };
    AlunomanterComponent = __decorate([
        core_1.Component({
            selector: "app-alunomanter",
            templateUrl: "./alunomanter.component.html",
            styleUrls: ["./alunomanter.component.scss"]
        })
    ], AlunomanterComponent);
    return AlunomanterComponent;
}());
exports.AlunomanterComponent = AlunomanterComponent;
