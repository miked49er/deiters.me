(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deiters-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MyHammerConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_project_project_feature_project_feature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/project/project-feature/project-feature.component */ "./src/app/components/project/project-feature/project-feature.component.ts");
/* harmony import */ var _components_project_project_feature_list_project_feature_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/project/project-feature-list/project-feature-list.component */ "./src/app/components/project/project-feature-list/project-feature-list.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_scroll_bar_scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/scroll-bar/scroll-button/scroll-button.component */ "./src/app/components/scroll-bar/scroll-button/scroll-button.component.ts");
/* harmony import */ var _components_scroll_bar_scroll_bar_scroll_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/scroll-bar/scroll-bar/scroll-bar.component */ "./src/app/components/scroll-bar/scroll-bar/scroll-bar.component.ts");
/* harmony import */ var _components_project_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/project/project-details/project-details.component */ "./src/app/components/project/project-details/project-details.component.ts");
/* harmony import */ var _components_project_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/project/project-list/project-list.component */ "./src/app/components/project/project-list/project-list.component.ts");
/* harmony import */ var _components_project_project_link_project_link_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/project/project-link/project-link.component */ "./src/app/components/project/project-link/project-link.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_social_link_social_link_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/social-link/social-link.component */ "./src/app/components/social-link/social-link.component.ts");
/* harmony import */ var _directives_wheel_scroll_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/wheel-scroll.directive */ "./src/app/directives/wheel-scroll.directive.ts");
/* harmony import */ var _directives_wheel_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/wheel.directive */ "./src/app/directives/wheel.directive.ts");
/* harmony import */ var _components_overlays_overlay_shape_overlay_shape_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/overlays/overlay-shape/overlay-shape.component */ "./src/app/components/overlays/overlay-shape/overlay-shape.component.ts");
/* harmony import */ var _components_project_project_list_view_project_list_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/project/project-list-view/project-list-view.component */ "./src/app/components/project/project-list-view/project-list-view.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', component: _components_project_project_feature_list_project_feature_list_component__WEBPACK_IMPORTED_MODULE_7__["ProjectFeatureListComponent"] },
    { path: 'projects', component: _components_project_project_list_view_project_list_view_component__WEBPACK_IMPORTED_MODULE_19__["ProjectListViewComponent"] },
    { path: 'projects/:link', component: _components_project_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_11__["ProjectDetailsComponent"], pathMatch: 'full' },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"] }
];
var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHammerConfig.prototype.buildHammer = function (element) {
        var mc = new hammerjs__WEBPACK_IMPORTED_MODULE_2__["Manager"](element, {
            touchAction: 'auto',
            recognizers: [
                [hammerjs__WEBPACK_IMPORTED_MODULE_2__["Pan"], { direction: hammerjs__WEBPACK_IMPORTED_MODULE_2__["DIRECTION_VERTICAL"] }],
            ]
        });
        return mc;
    };
    return MyHammerConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerGestureConfig"]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_project_project_feature_project_feature_component__WEBPACK_IMPORTED_MODULE_6__["ProjectFeatureComponent"],
                _components_project_project_feature_list_project_feature_list_component__WEBPACK_IMPORTED_MODULE_7__["ProjectFeatureListComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _components_scroll_bar_scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_9__["ScrollButtonComponent"],
                _components_scroll_bar_scroll_bar_scroll_bar_component__WEBPACK_IMPORTED_MODULE_10__["ScrollBarComponent"],
                _components_project_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_11__["ProjectDetailsComponent"],
                _components_project_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_12__["ProjectListComponent"],
                _components_project_project_link_project_link_component__WEBPACK_IMPORTED_MODULE_13__["ProjectLinkComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                _components_social_link_social_link_component__WEBPACK_IMPORTED_MODULE_15__["SocialLinkComponent"],
                _directives_wheel_scroll_directive__WEBPACK_IMPORTED_MODULE_16__["WheelScrollDirective"],
                _directives_wheel_directive__WEBPACK_IMPORTED_MODULE_17__["WheelDirective"],
                _components_overlays_overlay_shape_overlay_shape_component__WEBPACK_IMPORTED_MODULE_18__["OverlayShapeComponent"],
                _components_project_project_list_view_project_list_view_component__WEBPACK_IMPORTED_MODULE_19__["ProjectListViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
            ],
            providers: [
                {
                    provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
                    useClass: MyHammerConfig
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<deiters-nav [primary]=\"primary\" [accent]=\"!primary\"></deiters-nav>\r\n\r\n<div class=\"aboutHeaderWrapper\"\r\n  deitersWheelScroll\r\n  [active]=\"info\"\r\n  (next)=\"revealAbout()\"\r\n  (top)=\"hideAbout()\">\r\n  <div class=\"aboutSlide fullscreen\"\r\n    [style.backgroundImage]=\"'url('+ backgroundImage +')'\"></div>\r\n\r\n  <div class=\"aboutOverlay\"\r\n    [@scrollListOverlay]=\"slide\"></div>\r\n\r\n  <div class=\"aboutTitle\"\r\n    [@scrollListTitle]=\"slide\">\r\n    <div class=\"ascii-wrapper name-ascii\">\r\n      <div class=\"ascii\">{{ name }}</div>\r\n    </div>\r\n    <div class=\"ascii-wrapper job-ascii\">\r\n      <div class=\"ascii\">{{ job }}</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"aboutInfo\"\r\n    [@scrollAbout]=\"info\">\r\n    <div class=\"about\">\r\n      <p>I’m an software developer currently based in Atlanta with experience building web apps and desktop software. I’m passionate about the quality of code, efficiency, best practices and software security.</p>\r\n      <p>I continue to learn new technologies and improve my skills for the next project. I enjoy experimenting with new frameworks and technologies while I work toward delivering a beautiful, functional product to the user or client.</p>\r\n      <p>Some of my hobbies include board games, card games and low light photography.</p>\r\n    </div>\r\n\r\n    <div class=\"social-links\">\r\n      <deiters-social-link [social]=\"'email'\" [primary]=\"primary\"></deiters-social-link>\r\n      <deiters-social-link [social]=\"'github'\" [primary]=\"primary\"></deiters-social-link>\r\n      <deiters-social-link [social]=\"'linkedin'\" [primary]=\"primary\"></deiters-social-link>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.fullscreen {\n  width: 100vw;\n  height: 100vh;\n  position: absolute; }\n.ascii-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.ascii-wrapper .ascii {\n    display: block;\n    white-space: pre;\n    line-height: normal;\n    font-family: monospace;\n    font-weight: bold;\n    color: #fff;\n    font-size: .35rem; }\n@media (min-width: 480px) {\n      .ascii-wrapper .ascii {\n        font-size: .5rem; } }\n@media (min-width: 1024px) {\n      .ascii-wrapper .ascii {\n        font-size: 1rem; } }\n.scrollWrapper {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 31; }\n.aboutHeaderWrapper .aboutOverlay {\n  opacity: .9;\n  -webkit-clip-path: polygon(70% 54%, 100% 64%, 100% 100%, 0px 100%, 0px 76%);\n          clip-path: polygon(70% 54%, 100% 64%, 100% 100%, 0px 100%, 0px 76%); }\n@media (min-width: 480px) {\n    .aboutHeaderWrapper .aboutOverlay {\n      -webkit-clip-path: polygon(70% 48%, 100% 60%, 100% 100%, 0px 100%, 0px 76%);\n              clip-path: polygon(70% 48%, 100% 60%, 100% 100%, 0px 100%, 0px 76%); } }\n@media (min-width: 768px) {\n    .aboutHeaderWrapper .aboutOverlay {\n      -webkit-clip-path: polygon(70% 42%, 100% 56%, 100% 100%, 0 100%, 0 76%);\n              clip-path: polygon(70% 42%, 100% 56%, 100% 100%, 0 100%, 0 76%); } }\n@media (min-width: 1024px) {\n    .aboutHeaderWrapper .aboutOverlay {\n      -webkit-clip-path: polygon(70% 36%, 100% 52%, 100% 100%, 0 100%, 0 76%);\n              clip-path: polygon(70% 36%, 100% 52%, 100% 100%, 0 100%, 0 76%); } }\n.aboutHeaderWrapper .aboutTitle {\n  top: 70%;\n  right: 10%;\n  width: 60%; }\n.aboutHeaderWrapper .aboutTitle .projectName {\n    height: 100px; }\n@media (min-width: 480px) {\n    .aboutHeaderWrapper .aboutTitle {\n      top: 65%; }\n      .aboutHeaderWrapper .aboutTitle .projectName {\n        height: 130px; } }\n@media (min-width: 768px) {\n    .aboutHeaderWrapper .aboutTitle .projectName {\n      margin-bottom: 10px; } }\n@media (min-width: 1024px) {\n    .aboutHeaderWrapper .aboutTitle {\n      top: 60%; }\n      .aboutHeaderWrapper .aboutTitle .projectName {\n        height: 200px;\n        margin-bottom: 20px; } }\n.aboutInfo .about p {\n  font-size: .8rem; }\n@media (min-width: 480px) {\n  .aboutInfo .about p {\n    font-size: 1rem; } }\n@media (min-width: 768px) {\n  .aboutInfo .about p {\n    font-size: 1.2rem; } }\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.aboutHeaderWrapper {\n  z-index: 20;\n  overflow: hidden; }\n.aboutHeaderWrapper .aboutSlide {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover; }\n.aboutHeaderWrapper .aboutOverlay {\n    position: fixed;\n    bottom: 0;\n    background-color: #00BCD4;\n    width: 100%;\n    height: 100vh; }\n.aboutHeaderWrapper .aboutTitle {\n    position: fixed;\n    color: #fff;\n    display: block; }\n.aboutHeaderWrapper .aboutTitle .name-ascii .ascii {\n      font-size: .35rem; }\n.aboutHeaderWrapper .aboutTitle .job-ascii .ascii {\n      font-size: .28rem; }\n@media (min-width: 480px) {\n      .aboutHeaderWrapper .aboutTitle .name-ascii .ascii {\n        font-size: .5rem; }\n      .aboutHeaderWrapper .aboutTitle .job-ascii .ascii {\n        font-size: .43rem; } }\n@media (min-width: 768px) {\n      .aboutHeaderWrapper .aboutTitle {\n        top: 60%; }\n        .aboutHeaderWrapper .aboutTitle .name-ascii .ascii {\n          font-size: .6rem; }\n        .aboutHeaderWrapper .aboutTitle .job-ascii .ascii {\n          font-size: .53rem; } }\n@media (min-width: 1024px) {\n      .aboutHeaderWrapper .aboutTitle {\n        top: 55%; }\n        .aboutHeaderWrapper .aboutTitle .name-ascii .ascii {\n          font-size: .7rem; }\n        .aboutHeaderWrapper .aboutTitle .job-ascii .ascii {\n          font-size: .63rem; } }\n.aboutInfo {\n  opacity: 1;\n  width: 100%;\n  min-height: 100vh;\n  z-index: 22;\n  padding: 100px 20%;\n  display: -ms-grid;\n  display: grid;\n  grid: \"about\"\r \"social\";\n  grid-gap: 25px; }\n.aboutInfo .about {\n    grid-area: about;\n    color: #FFFFFF; }\n.aboutInfo .social-links {\n    grid-area: social;\n    width: 200px;\n    -ms-grid-column-align: center;\n        justify-self: center; }\n@media (min-width: 480px) {\n    .aboutInfo {\n      grid-gap: 50px; } }\n@media (min-width: 1024px) {\n    .aboutInfo {\n      padding: 100px 15%;\n      grid: \"about social\"; }\n      .aboutInfo .about {\n        width: 80%;\n        -ms-grid-column-align: center;\n            justify-self: center; }\n      .aboutInfo .about, .aboutInfo .social-links {\n        -ms-grid-row-align: center;\n            align-self: center; } }\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(projectService) {
        this.projectService = projectService;
        this.primary = false;
        this.backgroundImage = "assets/img/about-bg.jpg";
        this.slide = 'hide';
        this.info = 'hide';
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = this.projectService.getNameAscii();
        this.job = this.projectService.getJobAscii();
        this.slideViewTimer = setTimeout(function () { return _this.slide = 'show'; }, 100);
    };
    AboutComponent.prototype.revealAbout = function () {
        var _this = this;
        this.slide = 'reveal';
        this.aboutViewTimer = setTimeout(function () {
            _this.info = 'show';
            _this.primary = true;
        }, 500);
    };
    AboutComponent.prototype.hideAbout = function () {
        clearTimeout(this.aboutViewTimer);
        this.slide = 'show';
        this.info = 'hide';
        this.primary = false;
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deiters-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scrollListOverlay', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: "translateY(0)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('reveal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        "clip-path": "polygon(70% -40%, 100% -24%, 100% 100%, 0 100%, 0 0)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: "translateY(100%)",
                        display: "none"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => reveal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => reveal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('reveal => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('reveal => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scrollListTitle', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: "translateX(0)",
                        opacity: 1,
                        display: "block"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('reveal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: "translateX(10%)",
                        opacity: 0,
                        display: "none"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: "translateX(10%)",
                        opacity: 0,
                        display: "none"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms 400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => reveal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => reveal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('reveal => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('reveal => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scrollAbout', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        display: 'none',
                        transform: 'translateY(100%)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"logo project{{ project }}\"\r\n  [ngClass]=\"{'primary': primary, 'accent': accent}\"\r\n  [routerLink]=\"['']\">Mike Deiters</h1>\r\n\r\n<ul class=\"nav-links project{{ project }}\"\r\n  [ngClass]=\"{'primary': primary, 'accent': accent}\">\r\n  <li><a [routerLink]=\"['/projects']\">Projects</a></li>\r\n  <li><a [routerLink]=\"['/about']\">About+Contact</a></li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.project1 {\n  color: #3F51B5; }\n.project2 {\n  color: #3F51B5; }\n.project3 {\n  color: #3F51B5; }\n.project4 {\n  color: #00BCD4; }\n.project5 {\n  color: #00BCD4; }\n.logo {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 30;\n  -webkit-transform-origin: bottom 50%;\n  transform-origin: bottom 50%;\n  -webkit-transform: translate(-30%, 350%) rotate(-90deg);\n  transform: translate(-30%, 350%) rotate(-90deg);\n  transition: all 400ms ease-in-out;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.primary {\n  color: #3F51B5; }\n.accent {\n  color: #00BCD4; }\n.nav-links {\n  transition: all 400ms ease-in-out;\n  position: fixed;\n  top: 0;\n  right: 14px;\n  z-index: 30;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: hidden; }\n.nav-links li a {\n    transition: all 400ms ease-in-out;\n    display: block;\n    color: inherit;\n    text-decoration: none;\n    text-align: right;\n    font-family: \"Nova Mono\", monospace;\n    font-size: 1rem;\n    font-weight: bold;\n    padding: 6px 0;\n    margin-top: 5px; }\n@media (min-width: 480px) {\n    .nav-links li {\n      float: left; }\n    .nav-links li a {\n      margin-top: 0;\n      text-align: center;\n      padding: 10px 14px; } }\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(projectService) {
        this.projectService = projectService;
        this.dynamic = false;
        this.primary = false;
        this.accent = false;
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dynamic) {
            this.projectService.getProjectIndex()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroySubject$))
                .subscribe(function (index) {
                _this.project = index;
            });
        }
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.destroySubject$.next();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NavComponent.prototype, "dynamic", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NavComponent.prototype, "primary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], NavComponent.prototype, "accent", void 0);
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deiters-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/components/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/overlays/overlay-shape/overlay-shape.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/overlays/overlay-shape/overlay-shape.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projectOverlay\"\r\n  [@scrollListOverlay]=\"slide\"\r\n  [ngClass]=\"{'primary': primary, 'accent': !primary}\"></div>\r\n\r\n<div class=\"projectTitle\"\r\n  [@scrollListTitle]=\"slide\">\r\n  <div class=\"ascii-wrapper projectName\">\r\n    <div class=\"ascii\">{{title}}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/overlays/overlay-shape/overlay-shape.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/overlays/overlay-shape/overlay-shape.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.fullscreen {\n  width: 100vw;\n  height: 100vh;\n  position: absolute; }\n.ascii-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.ascii-wrapper .ascii {\n    display: block;\n    white-space: pre;\n    line-height: normal;\n    font-family: monospace;\n    font-weight: bold;\n    color: #fff;\n    font-size: .35rem; }\n@media (min-width: 480px) {\n      .ascii-wrapper .ascii {\n        font-size: .5rem; } }\n@media (min-width: 1024px) {\n      .ascii-wrapper .ascii {\n        font-size: 1rem; } }\n.scrollWrapper {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 31; }\n.projectOverlay {\n  opacity: .9;\n  -webkit-clip-path: polygon(70% 54%, 100% 64%, 100% 100%, 0px 100%, 0px 76%);\n          clip-path: polygon(70% 54%, 100% 64%, 100% 100%, 0px 100%, 0px 76%); }\n@media (min-width: 480px) {\n    .projectOverlay {\n      -webkit-clip-path: polygon(70% 48%, 100% 60%, 100% 100%, 0px 100%, 0px 76%);\n              clip-path: polygon(70% 48%, 100% 60%, 100% 100%, 0px 100%, 0px 76%); } }\n@media (min-width: 768px) {\n    .projectOverlay {\n      -webkit-clip-path: polygon(70% 42%, 100% 56%, 100% 100%, 0 100%, 0 76%);\n              clip-path: polygon(70% 42%, 100% 56%, 100% 100%, 0 100%, 0 76%); } }\n@media (min-width: 1024px) {\n    .projectOverlay {\n      -webkit-clip-path: polygon(70% 36%, 100% 52%, 100% 100%, 0 100%, 0 76%);\n              clip-path: polygon(70% 36%, 100% 52%, 100% 100%, 0 100%, 0 76%); } }\n.projectTitle {\n  top: 70%;\n  right: 10%;\n  width: 60%; }\n.projectTitle .projectName {\n    height: 100px; }\n@media (min-width: 480px) {\n    .projectTitle {\n      top: 65%; }\n      .projectTitle .projectName {\n        height: 130px; } }\n@media (min-width: 768px) {\n    .projectTitle .projectName {\n      margin-bottom: 10px; } }\n@media (min-width: 1024px) {\n    .projectTitle {\n      top: 60%; }\n      .projectTitle .projectName {\n        height: 200px;\n        margin-bottom: 20px; } }\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.primary {\n  background-color: #3F51B5; }\n.accent {\n  background-color: #00BCD4; }\n.projectOverlay {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 100vh; }\n.projectTitle {\n  position: fixed;\n  color: #fff;\n  display: block; }\n"

/***/ }),

/***/ "./src/app/components/overlays/overlay-shape/overlay-shape.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/overlays/overlay-shape/overlay-shape.component.ts ***!
  \******************************************************************************/
/*! exports provided: OverlayShapeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayShapeComponent", function() { return OverlayShapeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverlayShapeComponent = /** @class */ (function () {
    function OverlayShapeComponent() {
        this.primary = true;
    }
    OverlayShapeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OverlayShapeComponent.prototype, "slide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], OverlayShapeComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], OverlayShapeComponent.prototype, "primary", void 0);
    OverlayShapeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deiters-overlay-shape',
            template: __webpack_require__(/*! ./overlay-shape.component.html */ "./src/app/components/overlays/overlay-shape/overlay-shape.component.html"),
            styles: [__webpack_require__(/*! ./overlay-shape.component.scss */ "./src/app/components/overlays/overlay-shape/overlay-shape.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scrollListOverlay', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: "translateY(0)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('reveal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        "clip-path": "polygon(70% -40%, 100% -24%, 100% 100%, 0 100%, 0 0)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: "translateY(100%)",
                        display: "none"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => reveal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => reveal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('reveal => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('reveal => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scrollListTitle', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: "translateX(0)",
                        opacity: 1,
                        display: "block"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('reveal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: "translateX(10%)",
                        opacity: 0,
                        display: "none"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: "translateX(10%)",
                        opacity: 0,
                        display: "none"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms 400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => reveal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => reveal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('reveal => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('reveal => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], OverlayShapeComponent);
    return OverlayShapeComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project-details/project-details.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/project/project-details/project-details.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollWrapper\"\r\n  [active]=\"hideDetails\"\r\n  deitersWheelScroll\r\n  (next)=\"hideSlide()\"\r\n  (top)=\"showSlide()\"\r\n  (bottom)=\"showProjectTitle()\"\r\n  (bottomUp)=\"hideProjectList()\"\r\n  (bottomDown)=\"revealProjectList()\">\r\n\r\n  <deiters-nav [primary]=\"!primary\" [accent]=\"primary\"></deiters-nav>\r\n\r\n  <div class=\"projectHeaderWrapper\">\r\n    <div class=\"projectSlide fullscreen\"\r\n      [style.backgroundImage]=\"'url('+ project.location + project.featureImage +')'\"\r\n      [@scrollBackground]=\"project.state\"></div>\r\n\r\n    <div class=\"projectOverlay fullscreen\"\r\n      [ngClass]=\"{'primary-bg': primary, 'accent-bg': !primary}\"\r\n      [@scrollOverlay]=\"project.state\"></div>\r\n\r\n    <div class=\"projectTitle\"\r\n      [@scrollTitle]=\"project.state\">\r\n      <div class=\"ascii-wrapper projectName\">\r\n        <div class=\"ascii\">{{project.asciiName}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"detailsWrapper\"\r\n    [@revealDetails]=\"hideDetails\">\r\n\r\n    <div class=\"ascii-wrapper projectName\">\r\n      <div class=\"ascii\">{{project.asciiName}}</div>\r\n    </div>\r\n\r\n    <a class=\"live-link\" *ngIf=\"project.site\" [href]=\"project.site\">Live</a>\r\n\r\n    <div class=\"detailsText\">\r\n      <p>{{project.details}}</p>\r\n    </div>\r\n\r\n    <div class=\"projectFeature\">\r\n      <img [src]=\"project.location + project.featureImage\">\r\n    </div>\r\n\r\n    <div class=\"projectGrid\">\r\n      <img *ngFor=\"let image of project.images\"\r\n        [src]=\"project.location + image\">\r\n    </div>\r\n  </div>\r\n\r\n  <deiters-overlay-shape\r\n    [slide]=\"moreProjects\"\r\n    [title]=\"moreProjectsTitle\"></deiters-overlay-shape>\r\n\r\n  <div class=\"moreProjects\">\r\n    <deiters-project-list\r\n      [projectView]=\"projectList\"></deiters-project-list>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project/project-details/project-details.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/project/project-details/project-details.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.fullscreen {\n  width: 100vw;\n  height: 100vh;\n  position: absolute; }\n.ascii-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.ascii-wrapper .ascii {\n    display: block;\n    white-space: pre;\n    line-height: normal;\n    font-family: monospace;\n    font-weight: bold;\n    color: #fff;\n    font-size: .35rem; }\n@media (min-width: 480px) {\n      .ascii-wrapper .ascii {\n        font-size: .5rem; } }\n@media (min-width: 1024px) {\n      .ascii-wrapper .ascii {\n        font-size: 1rem; } }\n.scrollWrapper {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 31; }\n.detailsWrapper .detailsText p {\n  font-size: .8rem; }\n@media (min-width: 480px) {\n  .detailsWrapper .detailsText p {\n    font-size: 1rem; } }\n@media (min-width: 768px) {\n  .detailsWrapper .detailsText p {\n    font-size: 1.2rem; } }\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.primary {\n  color: #3F51B5; }\n.accent {\n  color: #00BCD4; }\n.primary-bg {\n  background-color: #3F51B5; }\n.accent-bg {\n  background-color: #00BCD4; }\n.detailsWrapper {\n  width: 60%;\n  margin: 100px auto;\n  display: -ms-grid;\n  display: grid;\n  grid: \"name\"\r \"link\"\r \"details\"\r \"feature\"\r \"images\";\n  grid-gap: 15px; }\n.detailsWrapper img {\n    width: 100%; }\n@media (min-width: 768px) {\n    .detailsWrapper {\n      grid: \"name link\"\r \"details details\"\r \"feature feature\"\r \"images images\";\n      grid-gap: 25px; } }\n.detailsWrapper .ascii-wrapper {\n    grid-area: \"name\";\n    display: block;\n    margin-left: -10px; }\n.detailsWrapper .ascii-wrapper .ascii {\n      color: #3F51B5; }\n@media (min-width: 480px) {\n      .detailsWrapper .ascii-wrapper {\n        margin-left: -30px; } }\n@media (min-width: 768px) {\n      .detailsWrapper .ascii-wrapper {\n        margin-left: -50px; } }\n@media (min-width: 1024px) {\n      .detailsWrapper .ascii-wrapper {\n        margin-left: -50px; } }\n.detailsWrapper .live-link {\n    transition: all 400ms ease-in-out;\n    grid-area: link;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n    justify-self: center;\n    text-align: center;\n    vertical-align: middle;\n    height: 40px;\n    text-decoration: none;\n    color: #00BCD4;\n    border: medium solid #00BCD4;\n    border-radius: 30px;\n    padding: 0 10px; }\n.detailsWrapper .live-link:hover {\n      color: #FFFFFF;\n      background-color: #00BCD4;\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2); }\n.detailsWrapper .live-link:active {\n      transition-duration: 100ms;\n      -webkit-transform: scale(0.8);\n              transform: scale(0.8); }\n@media (min-width: 768px) {\n      .detailsWrapper .live-link {\n        font-size: 1.4rem;\n        height: 50px;\n        padding: 0 20px; } }\n.detailsWrapper .detailsText {\n    grid-area: details; }\n.detailsWrapper .projectFeature {\n    grid-area: feature;\n    width: 100%; }\n.detailsWrapper .projectGrid {\n    transition: all 400ms ease-in-out;\n    grid-area: images;\n    display: -ms-grid;\n    display: grid;\n    grid: 1fr;\n    grid-column-gap: 10px;\n    grid-row-gap: 10px; }\n@media (min-width: 768px) {\n      .detailsWrapper .projectGrid {\n        grid: auto-flow 1fr/1fr calc(50% - 10px / 2); } }\n.projectHeaderWrapper {\n  z-index: 23;\n  overflow: hidden;\n  position: fixed; }\n.projectHeaderWrapper .projectSlide {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover; }\n.projectHeaderWrapper .projectOverlay {\n    position: fixed;\n    opacity: .9;\n    -webkit-clip-path: polygon(30% 41%, 0 31%, 0 0, 100% 0, 100% 19%);\n            clip-path: polygon(30% 41%, 0 31%, 0 0, 100% 0, 100% 19%); }\n@media (min-width: 480px) {\n      .projectHeaderWrapper .projectOverlay {\n        -webkit-clip-path: polygon(30% 42%, 0 30%, 0 0, 100% 0, 100% 14%);\n                clip-path: polygon(30% 42%, 0 30%, 0 0, 100% 0, 100% 14%); } }\n@media (min-width: 768px) {\n      .projectHeaderWrapper .projectOverlay {\n        -webkit-clip-path: polygon(30% 48%, 0 34%, 0 0, 100% 0, 100% 14%);\n                clip-path: polygon(30% 48%, 0 34%, 0 0, 100% 0, 100% 14%); } }\n@media (min-width: 1024px) {\n      .projectHeaderWrapper .projectOverlay {\n        -webkit-clip-path: polygon(30% 54%, 0 38%, 0 0, 100% 0, 100% 14%);\n                clip-path: polygon(30% 54%, 0 38%, 0 0, 100% 0, 100% 14%); } }\n.projectHeaderWrapper .projectTitle {\n    position: fixed;\n    color: #fff;\n    display: block;\n    top: 13%;\n    left: 18%; }\n@media (min-width: 480px) {\n      .projectHeaderWrapper .projectTitle {\n        top: 10%;\n        left: 15%; } }\n@media (min-width: 768px) {\n      .projectHeaderWrapper .projectTitle {\n        top: 8%;\n        left: 13%; } }\n@media (min-width: 1024px) {\n      .projectHeaderWrapper .projectTitle {\n        top: 8%;\n        left: 10%; } }\n.moreProjects {\n  position: relative;\n  background-color: #3F51B5;\n  z-index: 2;\n  opacity: .9; }\n"

/***/ }),

/***/ "./src/app/components/project/project-details/project-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/project/project-details/project-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(route, projectService) {
        this.route = route;
        this.projectService = projectService;
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject$))
            .subscribe(function () {
            _this.getProject();
        });
    };
    ProjectDetailsComponent.prototype.ngOnDestroy = function () {
        this.cleanUp();
        this.destroySubject$.next();
    };
    ProjectDetailsComponent.prototype.cleanUp = function () {
        clearTimeout(this.showSlideTimer);
        clearTimeout(this.hideSlideTimer);
        clearTimeout(this.primaryTimer);
        clearTimeout(this.hideDetailsTimer);
        clearTimeout(this.moreProjectsTimer);
    };
    ProjectDetailsComponent.prototype.getProject = function () {
        var _this = this;
        var link = this.route.snapshot.paramMap.get('link');
        this.projectService.getProject(link)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject$))
            .subscribe(function (project) {
            _this.moreProjects = 'hide';
            _this.projectList = 'hide';
            _this.project = project;
            _this.project.state = 'hide';
            _this.showSlideTimer = setTimeout(function () { return _this.showSlide(); }, 100);
        });
        this.moreProjectsTitle = this.projectService.getMoreProjectsTitle();
    };
    ProjectDetailsComponent.prototype.hideSlide = function () {
        var _this = this;
        clearTimeout(this.hideSlideTimer);
        if (this.project.state === 'show') {
            this.project.state = 'hide';
            this.hideDetailsTimer = setTimeout(function () { return _this.hideDetails = 'show'; }, 500);
            this.primaryTimer = setTimeout(function () { return _this.primary = false; }, 1000);
        }
    };
    ProjectDetailsComponent.prototype.showSlide = function () {
        var _this = this;
        clearTimeout(this.hideDetailsTimer);
        clearTimeout(this.primaryTimer);
        this.project.state = 'show';
        this.hideDetails = 'hide';
        this.primary = this.project.primary;
        this.hideSlideTimer = setTimeout(function () { return _this.hideSlide(); }, 3000);
    };
    ProjectDetailsComponent.prototype.showProjectTitle = function () {
        this.moreProjects = 'show';
    };
    ProjectDetailsComponent.prototype.revealProjectList = function () {
        var _this = this;
        this.moreProjectsTimer = setTimeout(function () {
            _this.moreProjects = 'hide';
            _this.projectList = 'show';
        }, 1000);
        this.primaryTimer = setTimeout(function () { return _this.primary = true; }, 2000);
    };
    ProjectDetailsComponent.prototype.hideProjectList = function () {
        var _this = this;
        this.moreProjects = 'hide';
        this.projectList = 'hide';
        this.primaryTimer = setTimeout(function () { return _this.primary = false; }, 1000);
    };
    ProjectDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deiters-project-details',
            template: __webpack_require__(/*! ./project-details.component.html */ "./src/app/components/project/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.scss */ "./src/app/components/project/project-details/project-details.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('scrollBackground', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: "translateY(0)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: "translateY(-100%)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms 600ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('scrollOverlay', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: "translateY(0)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: "translateY(-100%)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms 400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms 400ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('scrollTitle', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: "translateX(0)",
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: "translateX(-10%)",
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms 800ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('revealDetails', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0,
                        display: 'none'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('projects', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: "translateY(-100%)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('details', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        transform: "translateY(0)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms 300ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hide => projects', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('show => projects', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('projects => details', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('details => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project-feature-list/project-feature-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/project/project-feature-list/project-feature-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <deiters-nav [dynamic]=\"true\"></deiters-nav>\r\n  <deiters-scroll-bar></deiters-scroll-bar>\r\n  <div id=\"wrapper\"\r\n    class=\"fullscreen carousel\"\r\n    deitersWheel\r\n    (next)=\"nextProject($event)\">\r\n    <deiters-project-feature\r\n      *ngFor=\"let projectFeature of projectFeatures\"\r\n      [projectFeature]=\"projectFeature\"></deiters-project-feature>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project/project-feature-list/project-feature-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/project/project-feature-list/project-feature-list.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  overflow: hidden;\n  min-height: 100vh; }\n\n.carousel {\n  overflow: hidden;\n  background-color: #000; }\n"

/***/ }),

/***/ "./src/app/components/project/project-feature-list/project-feature-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/project/project-feature-list/project-feature-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProjectFeatureListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFeatureListComponent", function() { return ProjectFeatureListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectFeatureListComponent = /** @class */ (function () {
    function ProjectFeatureListComponent(projectService) {
        this.projectService = projectService;
        this.index = 0;
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ProjectFeatureListComponent.prototype.ngOnInit = function () {
        this.getProjectFeatures();
    };
    ProjectFeatureListComponent.prototype.ngOnDestroy = function () {
        this.destroySubject$.next();
    };
    ProjectFeatureListComponent.prototype.getProjectFeatures = function () {
        var _this = this;
        this.projectService.resetFeatureProjects();
        this.projectService.getProjectFeatures()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroySubject$))
            .subscribe(function (projectFeatures) { return _this.projectFeatures = projectFeatures; });
    };
    ProjectFeatureListComponent.prototype.nextProject = function (next) {
        this.projectService.changeProject(next);
    };
    ProjectFeatureListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deiters-project-feature-list',
            template: __webpack_require__(/*! ./project-feature-list.component.html */ "./src/app/components/project/project-feature-list/project-feature-list.component.html"),
            styles: [__webpack_require__(/*! ./project-feature-list.component.scss */ "./src/app/components/project/project-feature-list/project-feature-list.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], ProjectFeatureListComponent);
    return ProjectFeatureListComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project-feature/project-feature.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/project/project-feature/project-feature.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projectFeatureWrapper\">\r\n  <div class=\"projectFeatureSlide fullscreen\"\r\n    [style.backgroundImage]=\"'url('+ projectFeature.location + projectFeature.featureImage +')'\"\r\n    [@scrollBackground]=\"projectFeature.state\">\r\n  </div>\r\n\r\n  <div class=\"projectFeatureOverlay fullscreen project{{ projectFeature.id }}\"\r\n    [@scrollOverlay]=\"projectFeature.state\"></div>\r\n\r\n  <div class=\"projectFeatureTitle\"\r\n    [@scrollTitle]=\"projectFeature.state\">\r\n    <div class=\"ascii-wrapper projectName\">\r\n      <div class=\"ascii\">{{ projectFeature.asciiName }}</div>\r\n    </div>\r\n    <div class=\"ascii-wrapper moreInfo\">\r\n      <div class=\"ascii link\"\r\n        [routerLink]=\"['/projects', projectFeature.link]\">{{ moreInfo }}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project/project-feature/project-feature.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/project/project-feature/project-feature.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.project1 {\n  background-color: #3F51B5; }\n.project2 {\n  background-color: #3F51B5; }\n.project3 {\n  background-color: #3F51B5; }\n.project4 {\n  background-color: #00BCD4; }\n.project5 {\n  background-color: #00BCD4; }\n.fullscreen {\n  width: 100vw;\n  height: 100vh;\n  position: absolute; }\n.ascii-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.ascii-wrapper .ascii {\n    display: block;\n    white-space: pre;\n    line-height: normal;\n    font-family: monospace;\n    font-weight: bold;\n    color: #fff;\n    font-size: .35rem; }\n@media (min-width: 480px) {\n      .ascii-wrapper .ascii {\n        font-size: .5rem; } }\n@media (min-width: 1024px) {\n      .ascii-wrapper .ascii {\n        font-size: 1rem; } }\n.scrollWrapper {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 31; }\n.projectFeatureOverlay {\n  opacity: .9;\n  -webkit-clip-path: polygon(70% 54%, 100% 64%, 100% 100%, 0px 100%, 0px 76%);\n          clip-path: polygon(70% 54%, 100% 64%, 100% 100%, 0px 100%, 0px 76%); }\n@media (min-width: 480px) {\n    .projectFeatureOverlay {\n      -webkit-clip-path: polygon(70% 48%, 100% 60%, 100% 100%, 0px 100%, 0px 76%);\n              clip-path: polygon(70% 48%, 100% 60%, 100% 100%, 0px 100%, 0px 76%); } }\n@media (min-width: 768px) {\n    .projectFeatureOverlay {\n      -webkit-clip-path: polygon(70% 42%, 100% 56%, 100% 100%, 0 100%, 0 76%);\n              clip-path: polygon(70% 42%, 100% 56%, 100% 100%, 0 100%, 0 76%); } }\n@media (min-width: 1024px) {\n    .projectFeatureOverlay {\n      -webkit-clip-path: polygon(70% 36%, 100% 52%, 100% 100%, 0 100%, 0 76%);\n              clip-path: polygon(70% 36%, 100% 52%, 100% 100%, 0 100%, 0 76%); } }\n.projectFeatureTitle {\n  top: 70%;\n  right: 10%;\n  width: 60%; }\n.projectFeatureTitle .projectName {\n    height: 100px; }\n@media (min-width: 480px) {\n    .projectFeatureTitle {\n      top: 65%; }\n      .projectFeatureTitle .projectName {\n        height: 130px; } }\n@media (min-width: 768px) {\n    .projectFeatureTitle .projectName {\n      margin-bottom: 10px; } }\n@media (min-width: 1024px) {\n    .projectFeatureTitle {\n      top: 60%; }\n      .projectFeatureTitle .projectName {\n        height: 200px;\n        margin-bottom: 20px; } }\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.project1 {\n  background-color: #3F51B5; }\n.project2 {\n  background-color: #3F51B5; }\n.project3 {\n  background-color: #3F51B5; }\n.project4 {\n  background-color: #00BCD4; }\n.project5 {\n  background-color: #00BCD4; }\n.projectFeatureWrapper {\n  z-index: 10; }\n.projectFeatureWrapper:nth-of-type(2) {\n    z-index: 11; }\n.projectFeatureWrapper:nth-of-type(3) {\n    z-index: 12; }\n.projectFeatureWrapper:nth-of-type(4) {\n    z-index: 13; }\n.projectFeatureWrapper:nth-of-type(5) {\n    z-index: 14; }\n.projectFeatureSlide {\n  top: 0;\n  left: 0;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n.projectFeatureTitle {\n  transition: all 400ms ease-in-out;\n  color: #fff;\n  display: block;\n  position: absolute; }\n.projectFeatureTitle .moreInfo {\n    align-items: center; }\n.projectFeatureTitle .moreInfo .ascii {\n      font-size: .15rem; }\n.projectFeatureTitle .link {\n    transition: all 400ms ease-in-out; }\n.projectFeatureTitle .link:hover {\n      -webkit-transform: scale(1.3);\n              transform: scale(1.3); }\n@media (min-width: 1024px) {\n    .projectFeatureTitle .moreInfo .ascii {\n      font-size: .2rem; } }\n"

/***/ }),

/***/ "./src/app/components/project/project-feature/project-feature.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/project/project-feature/project-feature.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProjectFeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFeatureComponent", function() { return ProjectFeatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_data_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/projects */ "./src/app/data/projects.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectFeatureComponent = /** @class */ (function () {
    function ProjectFeatureComponent() {
        this.moreInfo = src_app_data_projects__WEBPACK_IMPORTED_MODULE_1__["MORE_INFO"];
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectFeatureComponent.prototype, "projectFeature", void 0);
    ProjectFeatureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deiters-project-feature',
            template: __webpack_require__(/*! ./project-feature.component.html */ "./src/app/components/project/project-feature/project-feature.component.html"),
            styles: [__webpack_require__(/*! ./project-feature.component.scss */ "./src/app/components/project/project-feature/project-feature.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scrollBackground', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: "translateY(0)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: "translateY(100%)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms 600ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scrollOverlay', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: "translateY(0)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: "translateY(100%)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms 400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms 400ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scrollTitle', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: "translateX(0)",
                        opacity: 1,
                        display: "block"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: "translateX(10%)",
                        opacity: 0,
                        display: "none"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms 800ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectFeatureComponent);
    return ProjectFeatureComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project-link/project-link.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/project/project-link/project-link.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"\r\n  [style.backgroundImage]=\"'url('+ project.location + project.featureImage +')'\">\r\n  <div class=\"ascii-wrapper projectName\">\r\n    <div class=\"ascii\"\r\n      [routerLink]=\"['/projects', project.link]\">{{ project.asciiName }}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project/project-link/project-link.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/project/project-link/project-link.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.background {\n  transition: all 400ms ease-in-out;\n  width: 100%;\n  height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\n.background .ascii-wrapper {\n    transition: all 400ms ease-in-out;\n    transition-duration: 600ms;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.6); }\n.background .ascii-wrapper .ascii {\n      transition: all 400ms ease-in-out;\n      transition-duration: 800ms;\n      -webkit-transform: scale(1);\n              transform: scale(1); }\n.background .ascii-wrapper:hover .ascii {\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2); }\n@media (min-width: 768px) {\n    .background .ascii-wrapper {\n      background-color: rgba(0, 0, 0, 0.4); }\n      .background .ascii-wrapper .ascii {\n        font-size: .28rem; }\n      .background .ascii-wrapper:hover {\n        background-color: rgba(0, 0, 0, 0.6); } }\n@media (min-width: 1024px) {\n    .background {\n      height: 400px; }\n      .background .ascii-wrapper .ascii {\n        -webkit-transform: scale(0.6);\n                transform: scale(0.6);\n        font-size: .65rem; } }\n"

/***/ }),

/***/ "./src/app/components/project/project-link/project-link.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/project/project-link/project-link.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectLinkComponent", function() { return ProjectLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectLinkComponent = /** @class */ (function () {
    function ProjectLinkComponent() {
    }
    ProjectLinkComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectLinkComponent.prototype, "project", void 0);
    ProjectLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deiters-project-link',
            template: __webpack_require__(/*! ./project-link.component.html */ "./src/app/components/project/project-link/project-link.component.html"),
            styles: [__webpack_require__(/*! ./project-link.component.scss */ "./src/app/components/project/project-link/project-link.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectLinkComponent);
    return ProjectLinkComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project-list-view/project-list-view.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/project/project-list-view/project-list-view.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<deiters-nav [primary]=\"primary\" [accent]=\"!primary\"></deiters-nav>\r\n\r\n<div class=\"projectHeaderWrapper\"\r\n  deitersWheelScroll\r\n  [active]=\"projectView\"\r\n  (next)=\"revealProjects()\"\r\n  (top)=\"hideProjects()\">\r\n  <div class=\"projectSlide fullscreen\"\r\n    [style.backgroundImage]=\"'url('+ backgroundImage +')'\"></div>\r\n\r\n  <deiters-overlay-shape\r\n    [slide]=\"slide\"\r\n    [title]=\"projectTitle\"></deiters-overlay-shape>\r\n\r\n  <deiters-project-list\r\n    [projectView]=\"projectView\"></deiters-project-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project/project-list-view/project-list-view.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/components/project/project-list-view/project-list-view.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.fullscreen {\n  width: 100vw;\n  height: 100vh;\n  position: absolute; }\n.ascii-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.ascii-wrapper .ascii {\n    display: block;\n    white-space: pre;\n    line-height: normal;\n    font-family: monospace;\n    font-weight: bold;\n    color: #fff;\n    font-size: .35rem; }\n@media (min-width: 480px) {\n      .ascii-wrapper .ascii {\n        font-size: .5rem; } }\n@media (min-width: 1024px) {\n      .ascii-wrapper .ascii {\n        font-size: 1rem; } }\n.scrollWrapper {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 31; }\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.projectHeaderWrapper {\n  z-index: 20;\n  overflow: hidden; }\n.projectHeaderWrapper .projectSlide {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover; }\n"

/***/ }),

/***/ "./src/app/components/project/project-list-view/project-list-view.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/project/project-list-view/project-list-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProjectListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListViewComponent", function() { return ProjectListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectListViewComponent = /** @class */ (function () {
    function ProjectListViewComponent(projectService) {
        this.projectService = projectService;
        this.primary = false;
        this.backgroundImage = 'assets/img/projects-bg.jpg';
        this.projectView = 'hide';
        this.slide = 'hide';
    }
    ProjectListViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slideViewTimer = setTimeout(function () { return _this.slide = 'show'; }, 100);
        this.projectTitle = this.projectService.getProjectsTitle();
    };
    ProjectListViewComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.projectViewTimer);
    };
    ProjectListViewComponent.prototype.revealProjects = function () {
        var _this = this;
        this.slide = 'reveal';
        this.projectViewTimer = setTimeout(function () { return _this.projectView = 'show'; }, 500);
    };
    ProjectListViewComponent.prototype.hideProjects = function () {
        this.slide = 'show';
        this.projectView = 'hide';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectListViewComponent.prototype, "slide", void 0);
    ProjectListViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deiters-project-list-view',
            template: __webpack_require__(/*! ./project-list-view.component.html */ "./src/app/components/project/project-list-view/project-list-view.component.html"),
            styles: [__webpack_require__(/*! ./project-list-view.component.scss */ "./src/app/components/project/project-list-view/project-list-view.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], ProjectListViewComponent);
    return ProjectListViewComponent;
}());



/***/ }),

/***/ "./src/app/components/project/project-list/project-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/project/project-list/project-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projects\"\r\n[@scrollProjects]=\"projectView\">\r\n<div class=\"projectList\">\r\n  <div class=\"listItem\"\r\n    *ngFor=\"let project of projects\">\r\n    <deiters-project-link [project]=\"project\"></deiters-project-link>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project/project-list/project-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/project/project-list/project-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.fullscreen {\n  width: 100vw;\n  height: 100vh;\n  position: absolute; }\n.ascii-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.ascii-wrapper .ascii {\n    display: block;\n    white-space: pre;\n    line-height: normal;\n    font-family: monospace;\n    font-weight: bold;\n    color: #fff;\n    font-size: .35rem; }\n@media (min-width: 480px) {\n      .ascii-wrapper .ascii {\n        font-size: .5rem; } }\n@media (min-width: 1024px) {\n      .ascii-wrapper .ascii {\n        font-size: 1rem; } }\n.scrollWrapper {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 31; }\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.projects {\n  opacity: 1;\n  width: 100%;\n  min-height: 100vh;\n  z-index: 21;\n  padding: 100px 10%;\n  padding-left: 15%; }\n.projects .projectList {\n    display: -ms-grid;\n    display: grid;\n    grid: 1fr;\n    grid-gap: 10px;\n    width: 100%; }\n@media (min-width: 768px) {\n      .projects .projectList {\n        -ms-grid-columns: 1fr 1fr;\n            grid-template-columns: 1fr 1fr; } }\n@media (min-width: 1024px) {\n      .projects .projectList {\n        grid-gap: 25px; } }\n"

/***/ }),

/***/ "./src/app/components/project/project-list/project-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/project/project-list/project-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(projectService) {
        this.projectService = projectService;
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.projectView = 'hide';
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectListComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.projectViewTimer);
        this.destroySubject$.next();
    };
    ProjectListComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject$))
            .subscribe(function (projects) { return _this.projects = projects; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ProjectListComponent.prototype, "projectView", void 0);
    ProjectListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deiters-project-list',
            template: __webpack_require__(/*! ./project-list.component.html */ "./src/app/components/project/project-list/project-list.component.html"),
            styles: [__webpack_require__(/*! ./project-list.component.scss */ "./src/app/components/project/project-list/project-list.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('scrollProjects', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        display: 'none',
                        transform: 'translateY(100%)',
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/components/scroll-bar/scroll-bar/scroll-bar.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/scroll-bar/scroll-bar/scroll-bar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"scrollBar\">\r\n  <deiters-scroll-button\r\n    *ngFor=\"let projectFeature of projectFeatures\"\r\n    [projectFeature]=\"projectFeature\"\r\n    [project]=\"project\"\r\n    (projectChange)=\"hideProjects($event)\"></deiters-scroll-button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/scroll-bar/scroll-bar/scroll-bar.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/scroll-bar/scroll-bar/scroll-bar.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.scrollBar {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n  display: block;\n  right: 15px;\n  z-index: 31;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/components/scroll-bar/scroll-bar/scroll-bar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/scroll-bar/scroll-bar/scroll-bar.component.ts ***!
  \**************************************************************************/
/*! exports provided: ScrollBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollBarComponent", function() { return ScrollBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScrollBarComponent = /** @class */ (function () {
    function ScrollBarComponent(projectService) {
        this.projectService = projectService;
        this.project = 0;
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ScrollBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProjectFeatures();
        this.projectService.getProjectIndex()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroySubject$))
            .subscribe(function (index) {
            _this.project = index;
        });
    };
    ScrollBarComponent.prototype.ngOnDestroy = function () {
        this.destroySubject$.next();
    };
    ScrollBarComponent.prototype.getProjectFeatures = function () {
        var _this = this;
        this.projectService.getProjectFeatures()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroySubject$))
            .subscribe(function (projectFeatures) { return _this.projectFeatures = projectFeatures; });
    };
    ScrollBarComponent.prototype.hideProjects = function (e) {
        this.projectService.changeProjectTo(e);
    };
    ScrollBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deiters-scroll-bar',
            template: __webpack_require__(/*! ./scroll-bar.component.html */ "./src/app/components/scroll-bar/scroll-bar/scroll-bar.component.html"),
            styles: [__webpack_require__(/*! ./scroll-bar.component.scss */ "./src/app/components/scroll-bar/scroll-bar/scroll-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], ScrollBarComponent);
    return ScrollBarComponent;
}());



/***/ }),

/***/ "./src/app/components/scroll-bar/scroll-button/scroll-button.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/scroll-bar/scroll-button/scroll-button.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"scrollButton project{{ project }}\"\r\n  [@scrollBar]=\"projectFeature.state\"\r\n  (click)=\"scrollBarButton()\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/scroll-bar/scroll-button/scroll-button.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/scroll-bar/scroll-button/scroll-button.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.project1 {\n  background-color: #3F51B5; }\n.project2 {\n  background-color: #3F51B5; }\n.project3 {\n  background-color: #3F51B5; }\n.project4 {\n  background-color: #00BCD4; }\n.project5 {\n  background-color: #00BCD4; }\n.scrollButton {\n  display: block;\n  width: 21px;\n  height: 21px;\n  border-radius: 100%;\n  border-width: medium;\n  border-style: solid;\n  border-color: #fff;\n  margin: 8px 0;\n  cursor: pointer;\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/components/scroll-bar/scroll-button/scroll-button.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/scroll-bar/scroll-button/scroll-button.component.ts ***!
  \********************************************************************************/
/*! exports provided: ScrollButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollButtonComponent", function() { return ScrollButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollButtonComponent = /** @class */ (function () {
    function ScrollButtonComponent() {
        this.projectChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ScrollButtonComponent.prototype.ngOnInit = function () {
    };
    ScrollButtonComponent.prototype.scrollBarButton = function () {
        this.projectChange.next(this.projectFeature.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScrollButtonComponent.prototype, "projectFeature", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ScrollButtonComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScrollButtonComponent.prototype, "projectChange", void 0);
    ScrollButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deiters-scroll-button',
            template: __webpack_require__(/*! ./scroll-button.component.html */ "./src/app/components/scroll-bar/scroll-button/scroll-button.component.html"),
            styles: [__webpack_require__(/*! ./scroll-button.component.scss */ "./src/app/components/scroll-bar/scroll-button/scroll-button.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('scrollBar', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: "scale(1)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: "scale(.5)"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ScrollButtonComponent);
    return ScrollButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/social-link/social-link.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/social-link/social-link.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"social-link group\" [href]=\"link\"\r\n  [ngClass]=\"{'primary': primary, 'accent': !primary}\">\r\n\r\n  <div class=\"icon\" *ngIf=\"social === 'email'\">\r\n    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n    \t viewBox=\"0 0 415 414.996\" enable-background=\"new 0 0 415 414.996\" xml:space=\"preserve\">\r\n    <path d=\"M353.381,160.858L211.748,62.806c-3.152-2.447-7.652-2.674-11.087-0.259L61.396,160.994\r\n    \tc-2.666,1.646-4.442,4.594-4.442,7.957v175.852c0,5.161,4.184,9.346,9.347,9.346h282.397c5.164,0,9.348-4.184,9.348-9.346V168.949\r\n    \tC358.046,165.494,356.169,162.476,353.381,160.858z M206.093,81.557l125.977,87.213l-113.423,75.059l-6.032-4.16\r\n    \tc-3.145-2.508-7.681-2.777-11.153-0.364l-6.022,4.194L82.799,168.71L206.093,81.557z M75.649,186.35l103.332,68.611L75.649,326.914\r\n    \tV186.35z M96.066,335.453l110.772-77.134l6.048,4.169c0.24,0.186,0.49,0.355,0.747,0.515l105.093,72.45H96.066z M339.354,327.04\r\n    \tl-104.15-71.802l104.15-68.921V327.04z\"/>\r\n    </svg>\r\n  </div>\r\n  <div class=\"icon\" *ngIf=\"social === 'github'\">\r\n    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n    \t viewBox=\"0 0 415 414.996\" enable-background=\"new 0 0 415 414.996\" xml:space=\"preserve\">\r\n    <path d=\"M331.313,86.24c-33.748-33.745-74.246-50.62-122.166-50.62c-47.921,0-88.42,16.875-122.169,50.62\r\n    \tc-33.748,33.749-50.622,74.247-50.622,122.172c0,47.921,16.874,88.419,50.622,122.168c33.749,33.744,74.248,50.621,122.169,50.621\r\n    \tc47.92,0,88.418-16.877,122.166-50.621c33.745-33.749,50.623-74.247,50.623-122.168C381.938,160.487,365.059,119.989,331.313,86.24z\r\n    \t M265.842,342.053c-4.749,1.965-8.775,3.377-13.5,4.727V321.13c0-13.499-4.725-23.625-14.171-30.375\r\n    \tc37.119-2.7,77.618-17.55,77.618-81.67c0-17.549-5.399-32.398-16.874-44.547c4.726-13.5,4.05-28.35-2.024-43.872l-4.05-0.677\r\n    \tc-5.368-0.893-22.274,4.727-41.174,17.549c-13.496-4.05-27.674-6.073-41.845-6.073c-14.174,0-28.349,2.023-41.174,6.073\r\n    \tc-33.072-20.922-45.222-17.549-45.897-16.872c-6.074,15.522-6.749,30.372-2.024,43.872c-11.476,12.149-16.874,26.999-16.874,44.547\r\n    \tc0,64.12,40.497,78.97,77.621,81.67c-8.775,6.076-13.5,16.199-13.5,30.375v26.323c-5.399-1.35-10.775-3.436-15.523-5.398\r\n    \tc-34.402-14.234-62.441-42.662-76.946-76.947c-15.194-35.912-15.194-77.479,0-113.392c14.505-34.285,42.66-62.441,76.946-76.947\r\n    \tc35.914-15.193,77.479-15.193,113.392,0c34.286,14.506,62.441,42.662,76.946,76.947c15.193,35.912,15.193,77.479,0,113.392\r\n    \tC328.283,299.391,300.24,327.818,265.842,342.053z\"/>\r\n    </svg>\r\n  </div>\r\n  <div class=\"icon\" *ngIf=\"social === 'linkedin'\">\r\n    <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n    \t viewBox=\"0 0 415 414.996\" enable-background=\"new 0 0 415 414.996\" xml:space=\"preserve\">\r\n    <g>\r\n    \t<path d=\"M107.855,132.377c19.812,0,32.15-13.141,32.15-29.546c-0.369-16.771-12.338-29.54-31.771-29.54\r\n    \t\tc-19.441,0-32.15,12.769-32.15,29.54c0,16.405,12.334,29.546,31.402,29.546H107.855L107.855,132.377z M136.27,326.684V155.711\r\n    \t\tH79.443v170.973H136.27L136.27,326.684z\"/>\r\n    \t<path d=\"M167.715,326.684h56.826v-95.479c0-5.108,0.369-10.218,1.871-13.863c4.109-10.213,13.457-20.788,29.156-20.788\r\n    \t\tc20.568,0,28.787,15.684,28.787,38.664v91.467h56.825V228.65c0-52.515-28.032-76.952-65.426-76.952\r\n    \t\tc-30.657,0-44.116,17.139-51.59,28.81h0.375v-24.797h-56.826C168.461,171.75,167.715,326.684,167.715,326.684L167.715,326.684z\"/>\r\n    </g>\r\n    </svg>\r\n  </div>\r\n\r\n  <p class=\"linkTitle\">{{social | lowercase}}</p>\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/components/social-link/social-link.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/social-link/social-link.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n/*\r\n00 - 09: Normal\r\n10 - 19: Project Feature Layers\r\n20 - 29: Overlays\r\n30 - 39: Headers/Titles\r\n40 - 49:\r\n50 - 59:\r\n60 - 69:\r\n70 - 71:\r\n80 - 89:\r\n90 - 99: Animations\r\n*/\n.group {\n  width: 200px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  margin-bottom: .4rem;\n  cursor: pointer;\n  -webkit-transform: scale(1);\n          transform: scale(1); }\n.group:hover .icon {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2); }\n.group:hover .linkTitle {\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5); }\n.group:active .icon {\n    transition-duration: 100ms;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n.group:active .linkTitle {\n    transition-duration: 100ms;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8); }\n.icon {\n  transition: all 400ms ease-in-out;\n  width: 50px;\n  margin-right: 30px; }\n.linkTitle {\n  transition: all 400ms ease-in-out;\n  color: #FFFFFF;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.social-link {\n  text-transform: capitalize;\n  text-decoration: none; }\n.primary {\n  fill: #3F51B5; }\n.accent {\n  fill: #00BCD4; }\n"

/***/ }),

/***/ "./src/app/components/social-link/social-link.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/social-link/social-link.component.ts ***!
  \*****************************************************************/
/*! exports provided: SocialLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLinkComponent", function() { return SocialLinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialLinkComponent = /** @class */ (function () {
    function SocialLinkComponent() {
        // Icons
        this.iconDir = "assets/icons/social/";
        this.emailIcon = this.iconDir + "Email.svg";
        this.githubIcon = this.iconDir + "GitHub circle.svg";
        this.linkedinIcon = this.iconDir + "Linked in.svg";
        // Links
        this.emailLink = "mailto:mike@deiters.me";
        this.githubLink = "https://www.github.com/miked49er";
        this.linkedinLink = "https://www.linkedin.com/in/mikedeiters";
        this.social = "email";
        this.primary = false;
        this.icon = this.emailIcon;
        this.link = this.emailLink;
    }
    SocialLinkComponent.prototype.ngOnInit = function () { };
    SocialLinkComponent.prototype.ngAfterContentInit = function () {
        if (this.social !== 'null' || this.social !== undefined) {
            switch (this.social.toLowerCase()) {
                case "email":
                    this.icon = this.emailIcon;
                    this.link = this.emailLink;
                    break;
                case "github":
                    this.icon = this.githubIcon;
                    this.link = this.githubLink;
                    break;
                case "linkedin":
                    this.icon = this.linkedinIcon;
                    this.link = this.linkedinLink;
                    break;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SocialLinkComponent.prototype, "social", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SocialLinkComponent.prototype, "primary", void 0);
    SocialLinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'deiters-social-link',
            template: __webpack_require__(/*! ./social-link.component.html */ "./src/app/components/social-link/social-link.component.html"),
            styles: [__webpack_require__(/*! ./social-link.component.scss */ "./src/app/components/social-link/social-link.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialLinkComponent);
    return SocialLinkComponent;
}());



/***/ }),

/***/ "./src/app/data/projects.ts":
/*!**********************************!*\
  !*** ./src/app/data/projects.ts ***!
  \**********************************/
/*! exports provided: IMG, PROJECTS, MORE_PROJECTS, MORE_INFO, PROJECTS_TITLE, NAME_ASCII, JOB_ASCII */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG", function() { return IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MORE_PROJECTS", function() { return MORE_PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MORE_INFO", function() { return MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS_TITLE", function() { return PROJECTS_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME_ASCII", function() { return NAME_ASCII; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOB_ASCII", function() { return JOB_ASCII; });
var IMG = "assets/img/";
var PROJECTS = [
    {
        id: 1,
        name: "GGC Maps",
        state: 'show',
        link: "ggc_maps",
        site: "http://ggcmaps.com",
        location: IMG + "ggcmaps/",
        featureImage: "ggcmaps.jpg",
        images: [
            "ggcmaps1.png",
            "ggcmaps2.png",
            "ggcmaps3.png",
            "ggcmaps4.png"
        ],
        primary: true,
        asciiName: "\n   ____  ____  ____   __  __    _    ____  ____\n  / ___|/ ___|/ ___| |  \\/  |  / \\  |  _ \\/ ___|\n | |  _| |  _| |     | |\\/| | / _ \\ | |_) \\___ \\\n | |_| | |_| | |___  | |  | |/ ___ \\|  __/ ___) |\n  \\____|\\____|\\____| |_|  |_/_/   \\_\\_|   |____/\n    ",
        details: "For students and faculty trying to find a room in some buildings on campus it is a major pain, in particular looking for a\n      room in the A building. Though our application, anyone is able to search for the room he or she is trying to find and immediately see\n      the location of the room highlighted on one of our maps. Before this application, the school had provided pdf's of each of the\n      buildings to the community. Some of these pdf's were poorly designed and difficult to find rooms on. In addition to that a number of\n      them had multiple rooms that were labeled with the same room number. As we created out maps we fixed these issues to help improve the\n      overall quality and experience of searching for rooms."
    },
    {
        id: 2,
        name: "Chem Reality",
        state: 'hide',
        link: "chem_reality",
        site: "http://wiki.ggc.edu/wiki/ChemReality",
        location: IMG + "chem_reality/",
        featureImage: "chemreality.jpg",
        images: [
            "chemreality1.png",
            "chemreality2.png",
            "chemreality3.png",
            "chemreality4.png"
        ],
        primary: true,
        asciiName: "\n   ____ _   _ _____ __  __\n  / ___| | | | ____|  \\/  |\n | |   | |_| |  _| | |\\/| |\n | |___|  _  | |___| |  | |\n  \\____|_| |_|_____|_|  |_|\n  ____  _____    _    _     ___ _______   __\n |  _ \\| ____|  / \\  | |   |_ _|_   _\\ \\ / /\n | |_) |  _|   / _ \\ | |    | |  | |  \\ V /\n |  _ <| |___ / ___ \\| |___ | |  | |   | |\n |_| \\_\\_____/_/   \\_\\_____|___| |_|   |_|\n    ",
        details: "Augmented reality provides an extra layer of information over the user\u2019s view, typically through the use of a camera lens and\n      a screen. Using augmented reality and image recognition together, I have created an application for smartphones and tablets which\n      allows the user to use the device\u2019s camera and a picture of a molecule to view that molecule in three-dimensional space, which they\n      may interact with and view from any angle as if it actually exists in the real world."
    },
    {
        id: 3,
        name: "Motorris",
        state: 'hide',
        link: "motorris",
        site: "http://motorris.com",
        location: IMG + "motorris/",
        featureImage: "motorris.jpg",
        images: [
            "motorris1.png",
            "motorris2.png",
            "motorris3.png",
            "motorris4.png"
        ],
        primary: true,
        asciiName: "\n  __  __  ___ _____ ___  ____  ____  ___ ____\n |  \\/  |/ _ \\_   _/ _ \\|  _ \\|  _ \\|_ _/ ___|\n | |\\/| | | | || || | | | |_) | |_) || |\\___ \\\n | |  | | |_| || || |_| |  _ <|  _ < | | ___) |\n |_|  |_|\\___/ |_| \\___/|_| \\_\\_| \\_\\___|____/\n    ",
        details: "Motorris is like a craigslist for motorcross bikes. I rebuilt the site from the ground up with the MEAN Stack. Redesigned\n      Motorris to give it a better overall layout, and now users have the ability to post bikes to the site themselves, without needing to\n      create an account. The users of Motorris were adimate on the fact that they did not want to have to create an account, but at the\n      same time be able to update and delete their bikes on the site. With this in mind I used a salted hash of the bike to create the\n      bike's editing url. So yes anyone with the link to the bike would be able to edit it, but someone is not going to just stumble apon a\n      bike's personal editing url unless the owner of the url didn't keep it safe."
    },
    {
        id: 4,
        name: "Oh Counter, My Counter",
        state: 'hide',
        link: "oh_counter",
        site: "http://ohcounter.com",
        location: IMG + "ohcounter/",
        featureImage: "ohcounter.jpg",
        images: [
            "ohcounter1.png",
            "ohcounter2.png",
            "ohcounter3.png",
            "ohcounter4.jpg"
        ],
        primary: false,
        asciiName: "\n   ___  _   _\n  / _ \\| | | |\n | | | | |_| |\n | |_| |  _  |\n  \\___/|_| |_|\n   ____ ___  _   _ _   _ _____ _____ ____\n  / ___/ _ \\| | | | \\ | |_   _| ____|  _ \\\n | |  | | | | | | |  \\| | | | |  _| | |_) |\n | |__| |_| | |_| | |\\  | | | | |___|  _ <\n  \\____\\___/ \\___/|_| \\_| |_| |_____|_| \\_\\\n    ",
        details: "Magic the Gathering, other trading card games, and some board games all require one to track some counters. Oh Counter, My\n      Counter was built using a modular design to allow the app to be used for any game. Using JSON I create a game template that the app\n      will build into the counter interface. With multiple players, a common issue to resolve is who goes first. In the menu there is a\n      random player selector option. This feature allow one to select all players or any number of them to be included in the random\n      selection. Knowing that phone storage is at a premium for some users and internet access is not always available, I designed the app\n      to be a progressive web app, PWA which allows one to use it offline. PWA's require significately less space than native apps, by\n      being available in the browser and the user has the option to install the PWA for offline use."
    },
    {
        id: 5,
        name: "Blackwing Sy_ths",
        state: 'hide',
        link: "blackwing_syths",
        site: "",
        location: IMG + "blackwing_syths/",
        featureImage: "syths.jpg",
        images: [
            "syths1.png",
            "syths2.png"
        ],
        primary: false,
        asciiName: "\n  ____  _        _    ____ _  ____        _____ _   _  ____\n | __ )| |      / \\  / ___| |/ /\\ \\      / /_ _| \\ | |/ ___|\n |  _ \\| |     / _ \\| |   | ' /  \\ \\ /\\ / / | ||  \\| | |  _\n | |_) | |___ / ___ \\ |___| . \\   \\ V  V /  | || |\\  | |_| |\n |____/|_____/_/   \\_\\____|_|\\_\\   \\_/\\_/  |___|_| \\_|\\____|\n  ______   _______ _   _ ____\n / ___\\ \\ / /_   _| | | / ___|\n \\___ \\\\ V /  | | | |_| \\___ \\\n  ___) || |   | | |  _  |___) |\n |____/ |_|___|_| |_| |_|____/\n         |_____|\n    ",
        details: "Music production is a creative art that many people have a knack for, but getting started is difficult. We decided to build\n      an application that would allow budding musicians interested in creating music with a MIDI board to create music with their own\n      keyboard. For those musicians working off laptops or any keyboard with ghosting, we built in an option for the user to have the\n      functionality of an anti-ghosting keyboard by just tapping the key instead of holding. While what we built would not be used in its\n      current form factor for live shows, it will allow musicians to experiment where ever they are without needed to either bring their\n      MIDI board with them or even needing to own one."
    },
    {
        id: 6,
        name: "Is It Expired",
        state: 'hide',
        link: "is_it_expired",
        site: "https://isitexpired.p404.xyz",
        location: IMG + "isitexpired/",
        featureImage: "isitexpired.jpg",
        images: [
            "isitexpired1.png",
            "isitexpired2.png"
        ],
        primary: false,
        asciiName: "\n  ___ ____    ___ _____\n |_ _/ ___|  |_ _|_   _|\n  | |\\___ \\   | |  | |\n  | | ___) |  | |  | |\n |___|____/  |___| |_|\n  _______  ______ ___ ____  _____ ____\n | ____\\ \\/ /  _ \\_ _|  _ \\| ____|  _ \\\n |  _|  \\  /| |_) | || |_) |  _| | | | |\n | |___ /  \\|  __/| ||  _ <| |___| |_| |\n |_____/_/\\_\\_|  |___|_| \\_\\_____|____/\n    ",
        details: "Retail establishments that sell tobacco products have a difficult time ensuring that all the product on their shelves are not\n      expired. Tobacco companies use cryptic codes to define when their product expires. I built this website to decrypt the expiration\n      dates so that employees can easily determine which products are expired and which are about to expire."
    }
];
var MORE_PROJECTS = {
    id: 6,
    name: "More Projects",
    state: 'hide',
    link: "",
    site: "",
    location: IMG,
    featureImage: "projects-bg.jpg",
    images: [],
    primary: true,
    asciiName: "\n  __  __  ___  ____  _____\n |  \\/  |/ _ \\|  _ \\| ____|\n | |\\/| | | | | |_) |  _|\n | |  | | |_| |  _ <| |___\n |_|  |_|\\___/|_| \\_\\_____|\n  ____  ____   ___      _ _____ ____ _____ ____\n |  _ \\|  _ \\ / _ \\    | | ____/ ___|_   _/ ___|\n | |_) | |_) | | | |_  | |  _|| |     | | \\___ \\\n |  __/|  _ <| |_| | |_| | |__| |___  | |  ___) |\n |_|   |_| \\_\\\\___/ \\___/|_____\\____| |_| |____/\n  ",
    details: ''
};
var MORE_INFO = "\n  \u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557    \u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557\n  \u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D    \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\n  \u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557      \u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551   \u2588\u2588\u2551\n  \u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u255D      \u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D  \u2588\u2588\u2551   \u2588\u2588\u2551\n  \u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557    \u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551     \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\n  \u255A\u2550\u255D     \u255A\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D    \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D\u255A\u2550\u255D      \u255A\u2550\u2550\u2550\u2550\u2550\u255D\n";
var PROJECTS_TITLE = "\n  ____  ____   ___      _ _____ ____ _____ ____\n |  _ \\|  _ \\ / _ \\    | | ____/ ___|_   _/ ___|\n | |_) | |_) | | | |_  | |  _|| |     | | \\___ \\\n |  __/|  _ <| |_| | |_| | |__| |___  | |  ___) |\n |_|   |_| \\_\\\\___/ \\___/|_____\\____| |_| |____/\n";
var NAME_ASCII = "\n  __  __ _ _          ____       _ _\n |  \\/  (_) | _____  |  _ \\  ___(_) |_ ___ _ __ ___\n | |\\/| | | |/ / _ \\ | | | |/ _ \\ | __/ _ \\ '__/ __|\n | |  | | |   <  __/ | |_| |  __/ | ||  __/ |  \\__ \\\n |_|  |_|_|_|\\_\\___| |____/ \\___|_|\\__\\___|_|  |___/\n";
var JOB_ASCII = "\n  ____         __ _\n / ___|  ___  / _| |___      ____ _ _ __ ___\n \\___ \\ / _ \\| |_| __\\ \\ /\\ / / _` | '__/ _ \\\n  ___) | (_) |  _| |_ \\ V  V / (_| | | |  __/\n |____/ \\___/|_|  \\__| \\_/\\_/ \\__,_|_| _\\___|\n                 |  _ \\  _____   _____| | ___  _ __   ___ _ __\n                 | | | |/ _ \\ \\ / / _ \\ |/ _ \\| '_ \\ / _ \\ '__|\n                 | |_| |  __/\\ V /  __/ | (_) | |_) |  __/ |\n                 |____/ \\___| \\_/ \\___|_|\\___/| .__/ \\___|_|\n                                              |_|\n";


/***/ }),

/***/ "./src/app/decorators/debounce.ts":
/*!****************************************!*\
  !*** ./src/app/decorators/debounce.ts ***!
  \****************************************/
/*! exports provided: Debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debounce", function() { return Debounce; });
function Debounce(delay) {
    if (delay === void 0) { delay = 300; }
    return function (target, propertyKey, descriptor) {
        var timeout = null;
        var original = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () { return original.apply(_this, args); }, delay);
        };
        return descriptor;
    };
}


/***/ }),

/***/ "./src/app/directives/wheel-scroll.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/wheel-scroll.directive.ts ***!
  \******************************************************/
/*! exports provided: WheelScrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WheelScrollDirective", function() { return WheelScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var WheelScrollDirective = /** @class */ (function () {
    function WheelScrollDirective(document) {
        this.document = document;
        this.scrollPosition = 0;
        this.bottomPosition = -1;
        this.activeState = 'show';
        this.inactiveState = 'hide';
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.top = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bottom = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bottomUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bottomDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WheelScrollDirective.prototype.checkScroll = function (e) {
        if (this.active === 'hide') {
            this.bottomPosition = -1;
        }
        if (e.deltaY > 0 && this.active === this.inactiveState) {
            e.preventDefault();
            this.next.emit();
        }
        else if (this.active === this.activeState) {
            var bottom = document.documentElement.scrollTop + document.documentElement.clientHeight === document.documentElement.scrollHeight;
            if (e.deltaY < 0 && this.scrollPosition <= 0) {
                this.top.emit();
            }
            else if (e.deltaY < 0 && this.scrollPosition <= this.bottomPosition + 100) {
                this.bottomUp.emit();
            }
            else if (e.deltaY > 0 && this.scrollPosition >= this.bottomPosition - this.document.documentElement.clientHeight
                && this.bottomPosition !== -1) {
                this.bottomDown.emit();
            }
            else if (e.deltaY > 0 && bottom) {
                if (this.bottomPosition === -1) {
                    this.bottomPosition = document.documentElement.scrollTop + document.documentElement.clientHeight;
                }
                this.bottom.emit();
            }
        }
    };
    WheelScrollDirective.prototype.onWindowScroll = function (e) {
        if (this.active === 'hide') {
            this.bottomPosition = -1;
        }
        this.scrollPosition = e.pageY || this.document.documentElement.scrollTop;
    };
    WheelScrollDirective.prototype.checkPan = function (e) {
        if (this.active === 'hide') {
            this.bottomPosition = -1;
        }
        if (e.additionalEvent === 'panup' && this.active === this.inactiveState) {
            this.next.emit();
        }
        else if (this.active === this.activeState) {
            var bottom = document.documentElement.scrollTop + document.documentElement.clientHeight === document.documentElement.scrollHeight;
            if (e.additionalEvent === 'pandown' && this.scrollPosition <= 0) {
                this.top.emit();
            }
            else if (e.additionalEvent === 'pandown' && this.scrollPosition <= this.bottomPosition + 100) {
                this.bottomUp.emit();
            }
            else if (e.additionalEvent === 'panup' && this.scrollPosition >= this.bottomPosition - this.document.documentElement.clientHeight
                && this.bottomPosition !== -1) {
                this.bottomDown.emit();
            }
            else if (e.additionalEvent === 'panup' && bottom) {
                this.bottom.emit();
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WheelScrollDirective.prototype, "active", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WheelScrollDirective.prototype, "activeState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], WheelScrollDirective.prototype, "inactiveState", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WheelScrollDirective.prototype, "next", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WheelScrollDirective.prototype, "top", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WheelScrollDirective.prototype, "bottom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WheelScrollDirective.prototype, "bottomUp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WheelScrollDirective.prototype, "bottomDown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('wheel', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WheelScrollDirective.prototype, "checkScroll", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WheelScrollDirective.prototype, "onWindowScroll", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('pan', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WheelScrollDirective.prototype, "checkPan", null);
    WheelScrollDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[deitersWheelScroll]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], WheelScrollDirective);
    return WheelScrollDirective;
}());



/***/ }),

/***/ "./src/app/directives/wheel.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/wheel.directive.ts ***!
  \***********************************************/
/*! exports provided: WheelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WheelDirective", function() { return WheelDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_decorators_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/decorators/debounce */ "./src/app/decorators/debounce.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WheelDirective = /** @class */ (function () {
    function WheelDirective() {
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WheelDirective.prototype.checkScroll = function (e) {
        if (e.deltaY > 0) {
            this.next.emit(true);
        }
        else if (e.deltaY < 0) {
            this.next.emit(false);
        }
    };
    WheelDirective.prototype.checkPan = function (e) {
        if (e.additionalEvent === 'panup') {
            this.next.emit(true);
        }
        else if (e.additionalEvent === 'pandown') {
            this.next.emit(false);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], WheelDirective.prototype, "next", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('wheel', ['$event']),
        Object(src_app_decorators_debounce__WEBPACK_IMPORTED_MODULE_1__["Debounce"])(500),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WheelDirective.prototype, "checkScroll", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('pan', ['$event']),
        Object(src_app_decorators_debounce__WEBPACK_IMPORTED_MODULE_1__["Debounce"])(500),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], WheelDirective.prototype, "checkPan", null);
    WheelDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[deitersWheel]'
        }),
        __metadata("design:paramtypes", [])
    ], WheelDirective);
    return WheelDirective;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/projects */ "./src/app/data/projects.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = /** @class */ (function () {
    function ProjectService() {
        this.project = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_data_projects__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"][0]);
        this.projects = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.projectFeatures = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.projects.next(_data_projects__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"]);
        var newArr = _data_projects__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"].slice(0, 5);
        this.projectFeatures.next(newArr);
    }
    ProjectService.prototype.getProjectFeatures = function () {
        return this.projectFeatures.asObservable();
    };
    ProjectService.prototype.getProjects = function () {
        return this.projects.asObservable();
    };
    ProjectService.prototype.getProject = function (link) {
        this.updateProject(link);
        return this.project.asObservable();
    };
    ProjectService.prototype.getProjectIndex = function () {
        var project = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1);
        this.getProjectFeatures().subscribe(function (projects) {
            var index = 1;
            for (var i = 0; i < projects.length; i++) {
                if (projects[i].state === 'show') {
                    index += i;
                    break;
                }
            }
            project.next(index);
        });
        return project.asObservable();
    };
    ProjectService.prototype.updateProject = function (link) {
        var _this = this;
        this.getProjects().subscribe(function (projects) {
            for (var i = 0; i < projects.length; i++) {
                if (projects[i].link === link) {
                    _this.project.next(projects[i]);
                    break;
                }
            }
        });
    };
    ProjectService.prototype.showNext = function (index) {
        this.hideFeatureProject(index);
        if (index + 1 < this.projectFeatures.getValue().length) {
            this.showFeatureProject(index + 1);
        }
        else {
            this.showFeatureProject(0);
        }
        this.emitProject();
    };
    ProjectService.prototype.showPrev = function (index) {
        this.hideFeatureProject(index);
        if (index - 1 >= 0) {
            this.showFeatureProject(index - 1);
        }
        else {
            this.showFeatureProject(this.projectFeatures.getValue().length - 1);
        }
        this.emitProject();
    };
    ProjectService.prototype.showFeatureProject = function (index) {
        this.projectFeatures.getValue()[index].state = 'show';
    };
    ProjectService.prototype.hideFeatureProject = function (index) {
        this.projectFeatures.getValue()[index].state = 'hide';
    };
    ProjectService.prototype.resetFeatureProjects = function () {
        for (var i = 0; i < this.projectFeatures.getValue().length; i++) {
            this.hideFeatureProject(i);
        }
        this.showFeatureProject(0);
    };
    ProjectService.prototype.changeProjectTo = function (id) {
        for (var i = 0; i < this.projectFeatures.getValue().length; i++) {
            if (this.projectFeatures.getValue()[i].id === id) {
                this.showFeatureProject(i);
            }
            else {
                this.hideFeatureProject(i);
            }
        }
        this.emitProject();
    };
    ProjectService.prototype.changeProject = function (next) {
        for (var i = 0; i < this.projectFeatures.getValue().length; i++) {
            if (this.projectFeatures.getValue()[i].state === 'show') {
                if (next) {
                    this.showNext(i);
                }
                else {
                    this.showPrev(i);
                }
                break;
            }
        }
    };
    ProjectService.prototype.emitProject = function () {
        this.projectFeatures.next(this.projectFeatures.getValue());
    };
    ProjectService.prototype.getMoreInfo = function () {
        return _data_projects__WEBPACK_IMPORTED_MODULE_1__["MORE_INFO"];
    };
    ProjectService.prototype.getProjectsTitle = function () {
        return _data_projects__WEBPACK_IMPORTED_MODULE_1__["PROJECTS_TITLE"];
    };
    ProjectService.prototype.getMoreProjectsTitle = function () {
        return _data_projects__WEBPACK_IMPORTED_MODULE_1__["MORE_PROJECTS"].asciiName;
    };
    ProjectService.prototype.getNameAscii = function () {
        return _data_projects__WEBPACK_IMPORTED_MODULE_1__["NAME_ASCII"];
    };
    ProjectService.prototype.getJobAscii = function () {
        return _data_projects__WEBPACK_IMPORTED_MODULE_1__["JOB_ASCII"];
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\git\deiters.me\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map