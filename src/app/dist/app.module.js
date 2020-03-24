"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var aluno_service_1 = require("./aluno/service/aluno.service");
var alunomanter_component_1 = require("./aluno/alunomanter/alunomanter.component");
var aluno_component_1 = require("./aluno/aluno.component");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var curso_component_1 = require("./curso/curso.component");
var layout_component_1 = require("./layout/layout.component");
var curso_service_1 = require("./curso/servico/curso.service");
var cursomanter_component_1 = require("./curso/cursomanter/cursomanter.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                curso_component_1.CursoComponent,
                layout_component_1.LayoutComponent,
                cursomanter_component_1.CursomanterComponent,
                aluno_component_1.AlunoComponent,
                alunomanter_component_1.AlunomanterComponent
            ],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, http_1.HttpClientModule],
            providers: [curso_service_1.CursoService, aluno_service_1.AlunoService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
