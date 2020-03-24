"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var curso_1 = require("../servico/curso");
var CursomanterComponent = /** @class */ (function () {
    function CursomanterComponent(routeActivated, cursoService, router) {
        this.routeActivated = routeActivated;
        this.cursoService = cursoService;
        this.router = router;
        this.nomeCurso = "";
        this.curso = new curso_1.Curso();
        this.operacao = "Incluir";
    }
    CursomanterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.nomeCurso = this.routeActivated.snapshot.params.id;
        if (this.nomeCurso != null) {
            this.operacao = "Alterar";
            this.cursoService.pesquisar(this.nomeCurso).subscribe(function (data) {
                _this.curso = data[0];
            });
        }
    };
    CursomanterComponent.prototype.incluir = function () {
        var _this = this;
        this.cursoService.incluir(this.curso).subscribe(function (retorno) {
            alert(retorno["mensagem"]);
            _this.voltar();
        });
    };
    CursomanterComponent.prototype.voltar = function () {
        this.router.navigate(["/curso"]);
    };
    CursomanterComponent.prototype.alterar = function () {
        var _this = this;
        this.cursoService.alterar(this.curso).subscribe(function (data) {
            alert(data["mensagem"]);
            _this.router.navigate(["/curso"]);
        });
    };
    CursomanterComponent = __decorate([
        core_1.Component({
            selector: "app-cursomanter",
            templateUrl: "./cursomanter.component.html",
            styleUrls: ["./cursomanter.component.scss"]
        })
    ], CursomanterComponent);
    return CursomanterComponent;
}());
exports.CursomanterComponent = CursomanterComponent;
