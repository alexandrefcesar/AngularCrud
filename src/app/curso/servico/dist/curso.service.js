"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CursoService = /** @class */ (function () {
    function CursoService(http) {
        this.http = http;
    }
    CursoService.prototype.pesquisar = function (nome) {
        return this.http.get("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/consultar/" +
            nome);
    };
    CursoService.prototype.incluir = function (curso) {
        return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/incluir", curso);
    };
    CursoService.prototype.remover = function (curso) {
        return this.http.post("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/remover", curso);
    };
    CursoService.prototype.alterar = function (curso) {
        return this.http.patch("https://cors-anywhere.herokuapp.com/https://stormy-badlands-29216.herokuapp.com/api/curso/alterarparcial", curso);
    };
    CursoService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], CursoService);
    return CursoService;
}());
exports.CursoService = CursoService;
