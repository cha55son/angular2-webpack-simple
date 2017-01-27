"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var title_1 = require("./title");
var analyst_queue_component_html_1 = require("./analyst-queue.component.html");
var analyst_queue_component_scss_1 = require("./analyst-queue.component.scss");
var AnalystQueueComponent = (function () {
    // TypeScript public modifiers
    function AnalystQueueComponent(appState, title) {
        this.appState = appState;
        this.title = title;
        // Set our default values
        this.localState = { value: '' };
    }
    AnalystQueueComponent.prototype.ngOnInit = function () {
        console.log('hello `Analyst Queue` component');
        // this.title.getData().subscribe(data => this.data = data);
    };
    AnalystQueueComponent.prototype.submitState = function (value) {
        console.log('submitState', value);
        this.appState.set('value', value);
        this.localState.value = '';
    };
    return AnalystQueueComponent;
}());
AnalystQueueComponent = __decorate([
    core_1.Component({
        // The selector is what angular internally uses
        // for `document.querySelectorAll(selector)` in our index.html
        // where, in this case, selector is the string 'home'
        selector: 'analyst-queue',
        // We need to tell Angular's Dependency Injection which providers are in our app.
        providers: [
            title_1.Title
        ],
        styles: [analyst_queue_component_scss_1["default"]],
        template: analyst_queue_component_html_1["default"]
    })
], AnalystQueueComponent);
exports.AnalystQueueComponent = AnalystQueueComponent;
