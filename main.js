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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _picture_card_bank_picture_card_bank_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./picture-card-bank/picture-card-bank.component */ "./src/app/picture-card-bank/picture-card-bank.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _display_picture_display_picture_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./display-picture/display-picture.component */ "./src/app/display-picture/display-picture.component.ts");
/* harmony import */ var _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index-page/index-page.component */ "./src/app/index-page/index-page.component.ts");
/* harmony import */ var _change_picture_change_picture_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./change-picture/change-picture.component */ "./src/app/change-picture/change-picture.component.ts");
/* harmony import */ var _my_pictures_my_pictures_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-pictures/my-pictures.component */ "./src/app/my-pictures/my-pictures.component.ts");
/* harmony import */ var _exit_exit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./exit/exit.component */ "./src/app/exit/exit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: 'pictureCard',
        component: _picture_card_bank_picture_card_bank_component__WEBPACK_IMPORTED_MODULE_4__["PictureCardBankComponent"]
    },
    {
        path: 'displayPicture',
        component: _display_picture_display_picture_component__WEBPACK_IMPORTED_MODULE_7__["DisplayPictureComponent"]
    },
    {
        path: '',
        component: _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_8__["IndexPageComponent"]
    },
    {
        path: 'changePicture',
        component: _change_picture_change_picture_component__WEBPACK_IMPORTED_MODULE_9__["ChangePictureComponent"]
    },
    {
        path: 'myPictures',
        component: _my_pictures_my_pictures_component__WEBPACK_IMPORTED_MODULE_10__["MyPicturesComponent"]
    },
    {
        path: 'exit',
        component: _exit_exit_component__WEBPACK_IMPORTED_MODULE_11__["ExitComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _picture_card_bank_picture_card_bank_component__WEBPACK_IMPORTED_MODULE_4__["PictureCardBankComponent"],
                _display_picture_display_picture_component__WEBPACK_IMPORTED_MODULE_7__["DisplayPictureComponent"],
                _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_8__["IndexPageComponent"],
                _change_picture_change_picture_component__WEBPACK_IMPORTED_MODULE_9__["ChangePictureComponent"],
                _my_pictures_my_pictures_component__WEBPACK_IMPORTED_MODULE_10__["MyPicturesComponent"],
                _exit_exit_component__WEBPACK_IMPORTED_MODULE_11__["ExitComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/change-picture/change-picture.component.css":
/*!*************************************************************!*\
  !*** ./src/app/change-picture/change-picture.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container_fluid_css{\r\n\theight: 900px;\r\n\tbackground-color: #000;\r\n}\r\n.imgDiv{\r\n\tpadding-left: 0%;\r\n}\r\n.container_css{\r\n\twidth:800px;\r\n\theight: 600px;\r\n\tbackground-color: #6598cc;\r\n}\r\n.txt-right{\r\n\ttext-align: right;\r\n}\r\n.txt-left{\r\n\ttext-align: left;\r\n}\r\n.title{\r\n\tcolor: #fff;\r\n\tfont-size:2.3em;\r\n}\r\n.printDiv{\r\n\tpadding-right: 0%;\r\n}\r\n.sub-title-btn{\r\n\tcolor: #fff;\r\n\tfont-size: 16px;\r\n\tbackground-color: #6598cc;\r\n\tborder-style: hidden;\r\n}\r\n.padding-30{\t\r\n\tpadding: 3.8%;\r\n}\r\n.lAlign{\r\n\tmargin-left: -34px;\r\n}\r\n.row_2{\t\r\n\theight: 7%;\r\n}\r\n.inline{\r\n\t/* position: fixed; \r\n\tmargin: 4px 1px 1px 81px;*/\r\n\tmargin-top: 6px;\r\n\tfont-family: cursive;\r\n\t\r\n}\r\n.select {\r\n\tcolor: #1050de;\r\n\tfont-size: 18px;\r\n\ttext-shadow: 0 2px 5px #f5fffc;\r\n\t-moz-text-shadow: 0 0 2px #fff;\r\n\t-webkit-text-shadow: 0 0 2px #fff;\r\n}\r\n.series{\r\n\tcolor: #ae3737;\r\n\tfont-size: 21px;\r\n\ttext-shadow: 0 0 2px #fff; /* horizontal-offset vertical-offset 'blur' colour */\r\n\t-moz-text-shadow: 0 0 2px #fff;\r\n\t-webkit-text-shadow: 0 0 2px #fff;\r\n}\r\n.search{\r\n\tdisplay: inline;\r\n\t/* width: 85% ;\r\n\tfloat: left; */\r\n}\r\n.row_3{\r\n\tbackground-color: #f6f8e6;\r\n\tborder: 1px solid #5a7bb3;\r\n}\r\n.btn-go{\r\n\tborder-style: hidden;\r\n\tcolor:#fff;\r\n\tfont-size: 20px;\r\n\tbackground-color: #a52121;\t\r\n\tdisplay: inline;\r\n\t/* float: right; */\r\n}\r\n.width-50{\r\n\twidth:50%;\r\n}\r\n.width-100{\r\n\twidth: 100%;\r\n}\r\n.color_blk{\r\n\tbackground-color: #000;\r\n}\r\n.clr-red{\r\n\tcolor: #a52121 !important;\r\n}\r\n.height-full{\r\n\theight: 880px;\r\n}\r\n.subject{\r\n\tcursor: pointer !important;\r\n}\r\n.subject1{\r\n\ttext-shadow: 2px 2px #212529;\r\n}\r\n.selectval{\r\n\theight: 285px;\r\n\twidth: 228px;\r\n}\r\n.max-ht-100{\r\n\tmax-height: 100px;\r\n}\r\n.padding-40{\r\n\tpadding: 35px 30px;\r\n}\r\n.mg-top-10{\r\n\tmargin-top: 10%;\r\n}\r\n.mg-top-5{\r\n\tmargin-top: 5%;\r\n}\r\n.clr-blue{\r\n\tcolor: #547caf;\r\n}\r\n.bold{\r\n\tfont-weight: bold;\r\n}\r\nselect option:hover {\r\n\tcolor: #ff01ff; \r\n}\r\n.shad-btn{\r\n\ttext-shadow: 2px 3px 1px #000;\r\n}\r\n/* .displ-grid{\r\n\tdisplay: grid;\r\n} */\r\n.pad-bottom-10{\r\n\tpadding-bottom: 18%;\r\n}\r\n.pd-top-20{\r\n\tpadding-top: 20%;\r\n}\r\n.pd-right-25{\r\n\tpadding-right: 25%;\r\n}\r\n/* .dlng{\r\n\tmargin-left: 15px;\r\n} */\r\n.changeLang{\r\n\tfont-size: 20px;\r\n\tfont-weight: 600;\r\n\ttext-shadow: -2px 0 #fff, 0px 1px #fff, 1px 0 #fff, 0 -2px #fff;\r\n}\r\n.save{\r\n\tfont-size: 20px;\r\n\tfont-weight: 600;\r\n\tpadding-right: 5%;\r\n\tmargin-left: 100px;\r\n\tpadding-left: 25%;\r\n\ttext-shadow: -2px 0 #fff, 0px 1px #fff, 1px 0 #fff, 0 -2px #fff;\r\n}\r\n.print{\r\n\tfont-size: 20px;\r\n\tfont-weight: 600;\r\n\tpadding-left: 20%;\r\n\tmargin-left: 30px;\r\n\tpadding-bottom: 20%;\r\n\ttext-shadow: -2px 0 #fff, 0px 1px #fff, 1px 0 #fff, 0 -2px #fff;\r\n}\r\n.pd-right-10{\r\n\tpadding-right: 10%;\r\n}\r\n.block{\r\n\tdisplay: inline-block;\r\n}\r\n.hidden{\r\n\tvisibility: hidden;\r\n}\r\n.selectAudio :active,.selectAudio :hover{\r\n\tborder-color:  #fff;\r\n}\r\na, p, button{\r\n\tfont-family: cursive;\r\n}\r\n.pd-right-8{\r\n\tpadding-right: 8%;\r\n}\r\n.btnDirect {\r\n\tposition: relative;\r\n\tpadding-left: 14px;\r\n\tpadding-right: 14px;\r\n\tpadding-top: 0;\r\n\tpadding-bottom: 2.8px;\r\n\tfont-size: 14px;\r\n\theight: 22px;\r\n\tcursor: pointer;\r\n}\r\n.btnDirect::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 0;\r\n\theight: 0;\r\n}\r\n.btnDirect:hover {\r\n\tcolor: #a52121;\r\n\tbackground-color: #fff !important;\r\n\tborder: 1px solid #a52121;\r\n}\r\n.btnDirect1 {\r\n\tposition: relative;\r\n\tpadding-left: 15px;\r\n\tpadding-right: 15px;\r\n\tpadding-top: 0;\r\n\tpadding-bottom: 2.8px;\r\n\tfont-size: 16px;\r\n\theight: 30px;\r\n}\r\n.btnDirect1::after {\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\twidth: 0;\r\n\theight: 28px;\r\n}\r\n.btnDirect1:hover {\r\n\tcolor: #a52121;\r\n\tbackground-color: #fff !important;\r\n\tborder: 1px solid #a52121;\r\n}\r\n.next::after {\r\n\tright: -22px;\r\n\tborder-style: solid;\r\n\tborder-width: 11px;\r\n\tborder-color: transparent transparent transparent #a52121;\r\n}\r\n.next:hover::after {\r\n\tborder-color: transparent transparent transparent #a52121;\r\n}\r\n.prev::after {\r\n\tleft: -22px;\r\n\tborder-color: transparent #dc3545 transparent transparent;\r\n\tborder-width: 11px;\r\n\tborder-style: solid;\r\n}\r\n.prev:hover::after {\r\n\tborder-color: transparent #fff transparent transparent;\r\n}\r\n.save:hover{\r\n\tcolor: #fff !important;\r\n\ttext-shadow: -2px 0 #ae3737, 0px 1px #ae3737, 1px 0 #ae3737, 0 -2px #ae3737;\r\n}\r\n.print:hover{\r\n\tcolor: #fff !important;\r\n\ttext-shadow: -2px 0 #ae3737, 0px 1px #ae3737, 1px 0 #ae3737, 0 -2px #ae3737;\r\n}\r\n.changeLang:hover{\r\n\tcolor: #fff !important;\r\n\ttext-shadow: -2px 0 #ae3737, 0px 1px #ae3737, 1px 0 #ae3737, 0 -2px #ae3737;\r\n}\r\n.sub-title-btn:hover{\r\n\tcolor: #a52121;\r\n}\r\n.white{\r\n\tcolor: #fff;\r\n}\r\n.imgHover:hover{\r\n\tbackground: url(\"./assets/save_icon_hover.png\") no-repeat;\r\n}\r\n.imgHover{\r\n\tbackground: url(\"./assets/save_icon.png\") no-repeat;\r\n}\r\n.printimgHover:hover{\r\n\tbackground: url(\"./assets/print_icon_hover.png\") no-repeat;\r\n}\r\n.printimgHover{\r\n\tbackground: url(\"./assets/print_icon.png\") no-repeat;\r\n}\r\n.container-fluid{\r\n\tpadding-left: 0px !important;\r\n}\r\n.mg-top-3{\r\n\tmargin-top: 3%;\r\n}\r\n.mg-top-18{\r\n\tmargin-top: 18%;\r\n}\r\n.pd-top-22{\r\n\tpadding-top: 22%;\r\n}\r\n.pd-top-5{\r\n\tpadding-top: 5%;\r\n}\r\n.mg-bottom-3{\r\n    margin-bottom: 3.5%;\r\n}\r\n.selectImg{\r\n\toutline: 3px solid #3366ff;\r\n    outline-offset: -2px;\r\n}\r\n.removeSelectImg{\r\n\toutline: none;\r\n\toutline-offset: 0;\r\n}\r\n.wordBreak{\r\n\twidth:148px;\r\n\ttext-align: left;\r\n}"

/***/ }),

/***/ "./src/app/change-picture/change-picture.component.html":
/*!**************************************************************!*\
  !*** ./src/app/change-picture/change-picture.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center color_blk height-full\">\r\n\r\n  <div class=\"container bg-3 text-center container_css\">\r\n    <div class=\"row max-ht-100\">\r\n      <div class=\"col-md-5 pull-left txt-left padding-40\">\r\n        <button class=\"rollover subject\" (click)=\"backButton()\"></button>\r\n      </div>\r\n      <div class=\"col-md-7 pull-right txt-right padding-30 white\">\r\n        <button class=\"sub-title-btn shad-btn subject\" (click)=\"beginNewSearch()\">BEGIN NEW SEARCH</button> |\r\n        <button class=\"sub-title-btn shad-btn subject\" (click)=\"myPictures()\">MY PICTURES</button> |\r\n        <button class=\"sub-title-btn shad-btn subject\" (click)=\"exit()\">EXIT</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"container bg-3 text-center container1_css\">\r\n      <div class=\"row mg-top-3\">\r\n        <div class=\"col-md-4 pd-top-22\">\r\n          <div class=\"row lAlign\">\r\n            <img class=\"audioimgHover block subject\" #audioIcon (click)=\"playAudio(selectImgPath)\" />\r\n            <label class=\"inline dlng wordBreak\" #diffLanguage id=\"diffLanguage\">{{englishLetterName}}</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 pd-top-5\">\r\n          <div class=\"imageGallery mg-top-5\" id=\"print-section\">\r\n            <img *ngIf=\"selectImgPath\" src=\"./assets/pict_media/img/{{selectImgPath}}.jpg\" />\r\n            <br>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-2 displ-grid mg-bottom-3\">\r\n          <ng-container *ngFor=\"let otherImagePath of changeImgPath; let i=index\">\r\n            <img *ngIf=\"otherImagePath\" class=\"subject mg-top-18\" [ngClass]=\"selectedIndex == i ? 'selectImg' : 'removeSelectImg'  \"\r\n              src=\"./assets/pict_media/thumb/{{otherImagePath}}.jpg\" (click)=\"getChangeImage(otherImagePath,i)\" />\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 pull-left pd-right-25\">\r\n          <a class=\"clr-red subject changeLang\" #changeLang (click)=\"changeLanguage()\">En español</a>\r\n        </div>\r\n        <div class=\"col-md-3 \">\r\n          <a class=\"clr-red subject save imgHover\" (click)=\"saveImage(englishLetterName,selectImgPath)\">\r\n            Save</a>\r\n        </div>\r\n        <div class=\"col-md-3 printDiv \">\r\n          <a class=\"clr-red subject print printimgHover\" (click)=\"print()\">\r\n            Print</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/change-picture/change-picture.component.ts":
/*!************************************************************!*\
  !*** ./src/app/change-picture/change-picture.component.ts ***!
  \************************************************************/
/*! exports provided: ChangePictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePictureComponent", function() { return ChangePictureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePictureComponent = /** @class */ (function () {
    function ChangePictureComponent(httpService, _router) {
        this.httpService = httpService;
        this._router = _router;
        this.categoriesData = [];
        this.lettersData = [];
        this.subjectsData = [];
        this.imageLetterValue = [];
        this.changeImgPath = [];
        this.changeImgEngName = [];
        this.changeImgSpanName = [];
    }
    ChangePictureComponent.prototype.ngOnInit = function () {
        var _this = this;
        var selectedChangeData = JSON.parse(localStorage.getItem('selectedChangeData'));
        if (!selectedChangeData || selectedChangeData && selectedChangeData.length == 0) {
            localStorage.setItem('selectedChangeData', JSON.stringify([]));
        }
        this.httpService.get('./assets/json/category.json').subscribe(function (data) {
            _this.categoriesData = data; // FILL THE ARRAY WITH DATA.
        }, function (err) {
            console.log(err.message);
        });
        this.httpService.get('./assets/json/letter.json').subscribe(function (data) {
            _this.lettersData = data; // FILL THE ARRAY WITH DATA.
            if (data) {
                _this.ChangeImageValue();
            }
        }, function (err) {
            console.log(err.message);
        });
        this.httpService.get('./assets/json/subject.json').subscribe(function (data) {
            _this.subjectsData = data; // FILL THE ARRAY WITH DATA.
        }, function (err) {
            console.log(err.message);
        });
    };
    ChangePictureComponent.prototype.playAudio = function (audioPath) {
        var audio = new Audio();
        audio.src = "./assets/pict_media/audio/e_" + audioPath + ".mp3";
        audio.load();
        audio.play();
    };
    ChangePictureComponent.prototype.ChangeImageValue = function () {
        var imgSelectValue = localStorage.getItem('selectedWordValue');
        if (imgSelectValue) {
            var fstImageLetter = imgSelectValue.charAt(0);
        }
        this.viewImage(fstImageLetter, imgSelectValue);
    };
    ChangePictureComponent.prototype.viewImage = function (img_letter, img_val) {
        this.imageLetterValue = [];
        this.selectImgPath = "";
        this.spanishLetterName = "";
        this.changeImgPath = [];
        var subLetter;
        var imgLetterType = localStorage.getItem('letterName');
        //Letter Data
        var letobjectKeys = Object.keys(this.lettersData);
        this.letKeyName = letobjectKeys;
        if (imgLetterType) {
            if (this.letKeyName[1] == imgLetterType) {
                for (var i = 0; i < this.lettersData.Letter.length; i++) {
                    var subLetterData = this.lettersData.Letter;
                    if (subLetterData[i].ID == img_letter) {
                        subLetter = subLetterData[i].data;
                        for (var j = 0; j < subLetter.length; j++) {
                            var subCellLetter = void 0;
                            subCellLetter = subLetter[j].Cell;
                            if (subCellLetter[0].text == img_val) {
                                for (var k = 0; k < subCellLetter.length; k++) {
                                    this.selectImgPath = subCellLetter[2].text;
                                    this.englishLetterName = subCellLetter[0].text;
                                    this.spanishLetterName = subCellLetter[1].text;
                                    var getCorrsImgPath = subCellLetter[3].text;
                                    this.changeImgPath = getCorrsImgPath.split(",");
                                    var getCorresEngImgName = subCellLetter[4].text;
                                    this.changeImgEngName = getCorresEngImgName.split(",");
                                    var getCorresImgSpanName = subCellLetter[5].text;
                                    this.changeImgSpanName = getCorresImgSpanName.split(",");
                                }
                            }
                        }
                    }
                }
            }
        }
        //Category Data
        var imgCategoryType = localStorage.getItem('categoryName');
        var imgCategoryTypeValue = localStorage.getItem('categoryNameValue');
        var catobjectKeys = Object.keys(this.categoriesData);
        this.catKeyName = catobjectKeys;
        if (imgCategoryType) {
            if (this.catKeyName[1] == imgCategoryType) {
                for (var i = 0; i < this.categoriesData.Category.length; i++) {
                    var subcategoryData = this.categoriesData.Category;
                    if (subcategoryData[i].ID == imgCategoryTypeValue) {
                        var subCategory = subcategoryData[i].data;
                        for (var j = 0; j < subCategory.length; j++) {
                            var subCellCategory = subCategory[j].Cell;
                            if (subCellCategory[0].text == img_val) {
                                for (var k = 0; k < subCellCategory.length; k++) {
                                    this.selectImgPath = subCellCategory[2].text;
                                    this.englishLetterName = subCellCategory[0].text;
                                    this.spanishLetterName = subCellCategory[1].text;
                                    var getCorrsImgPath = subCellCategory[3].text;
                                    this.changeImgPath = getCorrsImgPath.split(",");
                                    var getCorresEngImgName = subCellCategory[4].text;
                                    this.changeImgEngName = getCorresEngImgName.split(",");
                                    var getCorresImgSpanName = subCellCategory[5].text;
                                    this.changeImgSpanName = getCorresImgSpanName.split(",");
                                }
                            }
                        }
                    }
                }
            }
        }
        //Subject Data
        var imgSubjectType = localStorage.getItem('subjectName');
        var imgSubjectTypeValue = localStorage.getItem('subjectNameValue');
        var imgHealthType = localStorage.getItem('healthNameValue');
        var subobjectKeys = Object.keys(this.subjectsData);
        this.subKeyName = subobjectKeys;
        if (imgSubjectType) {
            if (this.subKeyName[1] == imgSubjectType) {
                for (var i = 0; i < this.subjectsData.subject.length; i++) {
                    var subSubjectData = this.subjectsData.subject;
                    if (subSubjectData[i].id == imgSubjectTypeValue) {
                        var subSubject = subSubjectData[i][imgSubjectTypeValue];
                        for (var j = 0; j < subSubject.length; j++) {
                            if (subSubject[j].ID == imgHealthType) {
                                var subDataSubject = subSubject[j].data;
                                for (var k = 0; k < subDataSubject.length; k++) {
                                    var subCellSubject = subDataSubject[k].Cell;
                                    if (subCellSubject[0].text == img_val) {
                                        for (var m = 0; m < subCellSubject.length; m++) {
                                            this.selectImgPath = subCellSubject[2].text;
                                            this.englishLetterName = subCellSubject[0].text;
                                            this.spanishLetterName = subCellSubject[1].text;
                                            var getCorrsImgPath = subCellSubject[3].text;
                                            this.changeImgPath = getCorrsImgPath.split(",");
                                            var getCorresEngImgName = subCellSubject[4].text;
                                            this.changeImgEngName = getCorresEngImgName.split(",");
                                            var getCorresImgSpanName = subCellSubject[5].text;
                                            this.changeImgSpanName = getCorresImgSpanName.split(",");
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    ChangePictureComponent.prototype.backButton = function () {
        this.playClickSound();
        localStorage.removeItem('selectedWordValue');
        localStorage.removeItem('letterName');
        localStorage.removeItem('categoryName');
        localStorage.removeItem('categoryNameValue');
        localStorage.removeItem('subjectName');
        localStorage.removeItem('subjectNameValue');
        localStorage.removeItem('healthNameValue');
        this._router.navigate(['/displayPicture'], { skipLocationChange: true });
    };
    ChangePictureComponent.prototype.beginNewSearch = function () {
        this.playClickSound();
        localStorage.removeItem('categoryValue');
        localStorage.removeItem('letterValue');
        localStorage.removeItem('subjectValue');
        localStorage.removeItem('healthValue');
        localStorage.removeItem('selectedWordValue');
        localStorage.removeItem('letterName');
        localStorage.removeItem('categoryName');
        localStorage.removeItem('categoryNameValue');
        localStorage.removeItem('subjectName');
        localStorage.removeItem('subjectNameValue');
        localStorage.removeItem('healthNameValue');
        this._router.navigate(['/pictureCard'], { skipLocationChange: true });
    };
    ChangePictureComponent.prototype.myPictures = function () {
        this.playClickSound();
        localStorage.setItem('backBtnState', "changePicture");
        this._router.navigate(['/myPictures'], { skipLocationChange: true });
    };
    ChangePictureComponent.prototype.exit = function () {
        this.playClickSound();
        this._router.navigate(['/exit'], { skipLocationChange: true });
    };
    ChangePictureComponent.prototype.getChangeImage = function (imgPath, index) {
        this.selectedIndex = index;
        this.playClickSound();
        if (imgPath != this.selectImgPath) {
            this.selectImgPath = imgPath;
            for (var i = 0; i < this.changeImgPath.length; i++) {
                if (this.changeImgPath[i] == imgPath) {
                    if (this.changeLang.nativeElement.innerHTML == "English") {
                        if (this.audioIcon.nativeElement.classList.contains == 'hidden') {
                            this.diffLanguage.nativeElement.innerHTML = this.changeImgSpanName[i];
                            this.changeImgEngIndexNo = i;
                        }
                        else {
                            this.audioIcon.nativeElement.classList.add('hidden');
                            this.diffLanguage.nativeElement.innerHTML = this.changeImgSpanName[i];
                            this.changeImgEngIndexNo = i;
                        }
                    }
                    else {
                        if (this.audioIcon.nativeElement.classList.contains == 'block') {
                            this.diffLanguage.nativeElement.innerHTML = this.changeImgEngName[i];
                            this.englishLetterName = this.changeImgEngName[i];
                            this.changeImgEngIndexNo = i;
                        }
                        else {
                            this.audioIcon.nativeElement.classList.add('block');
                            this.diffLanguage.nativeElement.innerHTML = this.changeImgEngName[i];
                            this.englishLetterName = this.changeImgEngName[i];
                            this.changeImgEngIndexNo = i;
                        }
                    }
                }
            }
        }
    };
    ChangePictureComponent.prototype.changeLanguage = function () {
        var _this = this;
        this.playClickSound();
        var imageName = this.diffLanguage.nativeElement.innerHTML;
        this.changeImgEngName.forEach(function (obj, index) {
            if (obj == imageName) {
                _this.changeImgEngIndexNo = index;
            }
        });
        if (this.changeLang.nativeElement.innerHTML == "En español") {
            this.changeLang.nativeElement.innerHTML = "English";
            this.playClickSound();
            if (this.diffLanguage.nativeElement.id == "diffLanguage") {
                if (this.changeImgEngIndexNo >= 0) {
                    this.spanishLetterName = this.changeImgSpanName[this.changeImgEngIndexNo];
                    this.diffLanguage.nativeElement.innerHTML = this.spanishLetterName;
                    this.audioIcon.nativeElement.classList.remove('block');
                    this.audioIcon.nativeElement.classList.add('hidden');
                }
                else {
                    this.diffLanguage.nativeElement.innerHTML = this.spanishLetterName;
                    this.audioIcon.nativeElement.classList.remove('block');
                    this.audioIcon.nativeElement.classList.add('hidden');
                }
            }
        }
        else {
            this.changeLang.nativeElement.innerHTML = "En español";
            this.playClickSound();
            if (this.diffLanguage.nativeElement.id == "diffLanguage") {
                if (this.changeImgEngIndexNo >= 0) {
                    this.englishLetterName = this.changeImgEngName[this.changeImgEngIndexNo];
                    this.diffLanguage.nativeElement.innerHTML = this.englishLetterName;
                    this.audioIcon.nativeElement.classList.remove('hidden');
                    this.audioIcon.nativeElement.classList.add('block');
                }
                else {
                    this.diffLanguage.nativeElement.innerHTML = this.englishLetterName;
                    this.audioIcon.nativeElement.classList.remove('hidden');
                    this.audioIcon.nativeElement.classList.add('block');
                }
            }
        }
    };
    ChangePictureComponent.prototype.saveImage = function (letterValue, imagePath) {
        this.playClickSound();
        var selectedChangeData = JSON.parse(localStorage.getItem('selectedChangeData'));
        if (letterValue && imagePath) {
            if (letterValue instanceof Array) {
                letterValue = letterValue[0];
                selectedChangeData.push({ letterValue: letterValue, imagePath: imagePath });
            }
            else {
                selectedChangeData.push({ letterValue: letterValue, imagePath: imagePath });
            }
            localStorage.setItem('selectedChangeData', JSON.stringify(selectedChangeData));
        }
    };
    ChangePictureComponent.prototype.print = function () {
        this.playClickSound();
        var printContents, popupWin, printText;
        printContents = document.getElementById('print-section').innerHTML;
        printText = document.getElementById('diffLanguage').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n <base href=\"/content/hsp/reading/excursions/ca/common/picture_card_bank_9780153852954_/pictureCardBank.html\"> \n        <style>\n          body{\n            margin-top:300px;\n          }\n          .img{\n\n            text-align: center;\n          }\n          .printTextClass{\n            font-family: cursive;\n            padding-top:10px;\n          }\n          div.a {\n            text-align: center;\n          }\n          </style>\n        </head>\n        <body onload=\"window.print();window.close()\">\n        <div class=\"img\">\n        " + printContents + "\n        </div>\n        <div class=\"a\">\n            <label class=\"printTextClass\">" + printText + "</label>\n        </div>\n        </body>\n      </html>");
        popupWin.document.close();
    };
    ChangePictureComponent.prototype.playClickSound = function () {
        var audio = new Audio();
        audio.src = "./assets/pict_media/onclick_audio/onClick.mp3";
        audio.load();
        audio.play();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('changeLang'),
        __metadata("design:type", Object)
    ], ChangePictureComponent.prototype, "changeLang", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('diffLanguage'),
        __metadata("design:type", Object)
    ], ChangePictureComponent.prototype, "diffLanguage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('audioIcon'),
        __metadata("design:type", Object)
    ], ChangePictureComponent.prototype, "audioIcon", void 0);
    ChangePictureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-picture',
            template: __webpack_require__(/*! ./change-picture.component.html */ "./src/app/change-picture/change-picture.component.html"),
            styles: [__webpack_require__(/*! ./change-picture.component.css */ "./src/app/change-picture/change-picture.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChangePictureComponent);
    return ChangePictureComponent;
}());



/***/ }),

/***/ "./src/app/display-picture/display-picture.component.css":
/*!***************************************************************!*\
  !*** ./src/app/display-picture/display-picture.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container_fluid_css{\r\n    height: 900px;\r\n    background-color: #000;\r\n}\r\n.imageGallery{\r\n    width: 336px;\r\n}\r\n.container_css{\r\n    width:800px;\r\n    height: 600px;\r\n    background-color: #6598cc;\r\n}\r\n.txt-right{\r\n    text-align: right;\r\n}\r\n.txt-left{\r\n    text-align: left;\r\n}\r\n.title{\r\n    color: #fff;\r\n    font-size:2.3em;\r\n}\r\n.sub-title-btn{\r\n    color: #fff;\r\n    font-size: 16px;\r\n    background-color: #6598cc;\r\n    border-style: hidden;\r\n}\r\n.padding-30{\t\r\n    padding: 3.8%;\r\n}\r\n.row_2{\t\r\n    height: 7%;\r\n}\r\n.inline{\r\n    display: inline;\r\n}\r\n.select {\r\n    color: #1050de;\r\n    font-size: 18px;\r\n    text-shadow: 0 2px 5px #f5fffc;\r\n    -moz-text-shadow: 0 0 2px #fff;\r\n    -webkit-text-shadow: 0 0 2px #fff;\r\n}\r\n.series{\r\n    color: #ae3737;\r\n    font-size: 21px;\r\n    text-shadow: 0 0 2px #fff; /* horizontal-offset vertical-offset 'blur' colour */\r\n    -moz-text-shadow: 0 0 2px #fff;\r\n    -webkit-text-shadow: 0 0 2px #fff;\r\n}\r\n.search{\r\n    display: inline;\r\n  \r\n}\r\n.row_3{\r\n    background-color: #f6f8e6;\r\n    border: 1px solid #5a7bb3;\r\n}\r\n.btn-go{\r\n    border-style: hidden;\r\n    color: #fff;\r\n\r\n    background-color: #a52121 !important;\r\n    display: inline;\r\n\r\n    margin-left: 8%;\r\n    box-shadow: 3px 3px 5px 0px #fff\r\n}\r\n.width-50{\r\n    width:50%;\r\n}\r\n.width-100{\r\n    width: 100%;\r\n}\r\n.color_blk{\r\n    background-color: #000;\r\n}\r\n.clr-red{\r\n    color: #a52121 !important;\r\n}\r\n.height-full{\r\n    height: 880px;\r\n}\r\n.subject{\r\n    cursor: pointer !important;\r\n}\r\n.subject1{\r\n\ttext-shadow: 2px 3px 1px  #000;\r\n}\r\n.selectval{\r\n    height: 310px;\r\n    width: 230px;\r\n   /*  margin-left: 6%; */\r\n    font-size: 17px;\r\n    font-family: cursive;\r\n    padding: 5% 1%;\r\n    border: 1px solid #547caf;\r\n}\r\n.max-ht-100{\r\n    max-height: 100px;\r\n}\r\n.padding-40{\r\n    padding: 35px 30px;\r\n}\r\n.mg-top-10{\r\n    margin-top: 6%;\r\n}\r\n.cont1{\r\n    margin-top: 6px;\r\n    width: 98%;\r\n}\r\n.mg-top-5{\r\n    margin-top: 5%;\r\n}\r\n.clr-blue{\r\n    color: #547caf;\r\n    font-family: cursive;\r\n}\r\n.bold{\r\n    font-weight: bold;\r\n}\r\nselect option:hover {\r\n    color: #ff01ff; \r\n}\r\n.save{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    padding-left: 15%;\r\n    text-shadow: -2px 0 #fff, 0px 1px #fff, 1px 0 #fff, 0 -2px #fff;\r\n}\r\n.sub-title-btn:hover{\r\n    color: #a52121;\r\n}\r\n.btnDirect {\r\n    position: relative;\r\n    padding-left: 14px;\r\n    padding-right: 14px;\r\n    padding-top: 0;\r\n    padding-bottom: 2.8px;\r\n    font-size: 14px;\r\n    height: 22px;\r\n    cursor: pointer;\r\n}\r\n.btnDirect::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n.btnDirect:hover {\r\n    color: #a52121;\r\n    background-color: #fff !important;\r\n    border: 1px solid #a52121;\r\n}\r\n.btnDirect1 {\r\n    position: relative;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    padding-top: 0;\r\n    padding-bottom: 2.8px;\r\n    font-size: 16px;\r\n    height: 30px;\r\n}\r\n.btnDirect1::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    width: 0;\r\n    height: 28px;\r\n}\r\n.btnDirect1:hover {\r\n    color: #a52121;\r\n    background-color: #fff !important;\r\n    border: 1px solid #a52121;\r\n}\r\n.next::after {\r\n    font-family: cursive;\r\n    right: -22px;\r\n    border-style: solid;\r\n    border-width: 11px;\r\n    border-color: transparent transparent transparent #a52121;\r\n}\r\n.next:hover::after {\r\n    font-family: cursive;\r\n    border-color: transparent transparent transparent #a52121;\r\n}\r\n.prev::after {\r\n    left: -22px;\r\n    border-color: transparent #dc3545 transparent transparent;\r\n    border-width: 11px;\r\n    border-style: solid;\r\n}\r\n.prev:hover::after {\r\n    border-color: transparent #fff transparent transparent;\r\n}\r\n.save:hover{\r\n    color: #fff !important;\r\n    text-shadow: -2px 0 #ae3737, 0px 1px #ae3737, 1px 0 #ae3737, 0 -2px #ae3737;\r\n}\r\n.bottomRow{\r\n    margin-top: 22px;\r\n}\r\na, p, button{\r\n    font-family: cursive;\r\n}\r\n/* .selDev{\r\n    padding-left: 30px;\r\n} */\r\n.catCol{\r\n    padding-left: 10.5%;\r\n}\r\n.catRow{\r\n    width: 100%;\r\n}\r\n.p1{\r\n    padding-left: 5%;\r\n}\r\n.imageDiv{\r\n    padding-left: 3.8%;\r\n}\r\n.selDev{\r\n    word-wrap: inherit;\r\n    margin-left: 15%;\r\n}\r\n.bold-500{\r\n    font-weight: 500;\r\n}\r\n.white{\r\n    color: #fff;\r\n}\r\n.imgHover:hover{\r\n    background: url(\"./assets/save_icon_hover.png\") no-repeat;\r\n}\r\n.imgHover{\r\n    background: url(\"./assets/save_icon.png\") no-repeat;\r\n}\r\n.container-fluid {\r\n    padding-left: 33px !important;\r\n}\r\n.catCol1{\r\npadding-left: 10.5%;\r\n}\r\n.saveBtn{\r\n    margin: 8px 0px 0px 0px;\r\n}"

/***/ }),

/***/ "./src/app/display-picture/display-picture.component.html":
/*!****************************************************************!*\
  !*** ./src/app/display-picture/display-picture.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"color_blk height-full\">\r\n  <div class=\"container bg-3 container_css\">\r\n    <div class=\"row max-ht-100\">\r\n      <div class=\"col-md-5 pull-left txt-left padding-40\">\r\n        <button class=\"rollover subject\" (click)=\"backButton()\"></button>\r\n      </div>\r\n      <div class=\"col-md-7 pull-right txt-right padding-30 white\">\r\n        <button class=\"sub-title-btn subject subject1\" (click)=\"beginNewSearch()\">BEGIN NEW SEARCH</button> |\r\n        <button class=\"sub-title-btn subject subject1\" (click)=\"myPictures()\">MY PICTURES</button> |\r\n        <button class=\"sub-title-btn subject subject1\" (click)=\"exit()\">EXIT</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container bg-3 container1_css\">\r\n      <form [formGroup]=\"addImageForm\" (ngSubmit)=\"changeImage(addImageForm.value)\">\r\n        <div class=\"row mg-top-10\">\r\n          <div class=\"row catRow\">\r\n            <div class=\"col-md-8 catCol1\">\r\n              <div *ngIf=\"categoryDataArr.length>0\">\r\n                <label for=\"catImagSlide\" class=\"clr-blue label_title\">{{catKeyName}}: {{selectCatName}}</label>\r\n              </div>\r\n              <div *ngIf=\"subLetterValue.length>0\">\r\n                <label for=\"letterImagSlide\" class=\"clr-blue label_title\">{{letterKeyName | titlecase}}: {{selectLetterName}}</label>\r\n              </div>\r\n              <div *ngIf=\"healthDataArr.length>0\">\r\n                <label for=\"letterImagSlide\" class=\"clr-blue label_title\">{{subjectKeyName | titlecase}}: {{selectSubjectName}} : {{selectHealthName}}\r\n                </label>\r\n              </div>\r\n              <div *ngIf=\"searchValue!= ''\">\r\n                <label for=\"letterImagSlide\" class=\"clr-blue label_title\">Search Result\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-4 \">\r\n              <label class=\"clr-blue p1 bold\">Preview</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row cont1\">\r\n            <div class=\"col-md-6 imageDiv\">\r\n              <div *ngIf=\"categoryDataArr.length>0\" class=\"selDev\">\r\n                <select id=\"catImagSlide\" size=\"12\" class=\"form-control selectval\" [(ngModel)]=\"categorySelectValue\" (change)=\"getCategoryImage(true)\"\r\n                  formControlName=\"categorySelectValue\">\r\n                  <ng-container *ngFor=\"let categoryData of categoryDataArr\">\r\n                    <ng-container *ngIf=\"categoryData.subCategory_data.length > 0\">\r\n                      <option class=\"bold-500 subject\" *ngFor=\"let catDataIns of categoryData.subCategory_data\" [value]=\"catDataIns.Cell[0].text\">{{catDataIns.Cell[0].text}}</option>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </select>\r\n              </div>\r\n              <div *ngIf=\"subLetterValue.length>0\" class=\"selDev \">\r\n                <select id=\"letterImagSlide\" size=\"12\" class=\"form-control selectval\" [(ngModel)]=\"letterSelectValue\" (change)=\"getLetterImage(true)\"\r\n                  formControlName=\"letterSelectValue\">\r\n                  <ng-container *ngFor=\"let letterData of subLetterValue\">\r\n                    <ng-container *ngFor=\"let subLetterData of letterData.subLetter_data; let i= index;\">\r\n                      <option class=\"bold-500 subject\" *ngIf=\"subLetterData.Cell[0].text != 'empty' \" [value]=\"subLetterData.Cell[0].text\">{{subLetterData.Cell[0].text}}</option>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </select>\r\n              </div>\r\n              <div *ngIf=\"healthDataArr.length>0\" class=\"selDev \">\r\n                <select id=\"healthImagSlide\" size=\"12\" class=\"form-control selectval\" [(ngModel)]=\"letterSelectValue\" (change)=\"getLetterImage(true)\"\r\n                  formControlName=\"letterSelectValue\">\r\n                  <ng-container *ngFor=\"let healthData of healthDataArr\">\r\n                    <ng-container *ngIf=\"healthData.subHealth_data.length > 0\">\r\n                      <option class=\"bold-500 subject\" *ngFor=\"let subHealthData of healthData.subHealth_data\" [value]=\"subHealthData.Cell[0].text\">{{subHealthData.Cell[0].text}}</option>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </select>\r\n              </div>\r\n              <div *ngIf=\"searchValue!='' \" class=\"selDev\">\r\n                <select id=\"letterImagSlide\" size=\"12\" class=\"form-control selectval\" [(ngModel)]=\"letterSelectValue\" (change)=\"getLetterImage(true)\"\r\n                  formControlName=\"letterSelectValue\">\r\n                  <ng-container *ngFor=\"let searchItem of searchValue\">\r\n                    <option class=\"bold-500 subject\" [value]=\"searchItem.letterName\">{{searchItem.letterName}}</option>\r\n                  </ng-container>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6 text-center\">\r\n              <div class=\"imageGallery\" *ngIf=\"letterImagePath != '' \">\r\n                <img src=\"./assets/pict_media/img/{{letterImagePath}}.jpg\" />\r\n              </div>\r\n              <div class=\"row bottomRow\" *ngIf=\"categoryDataArr || subLetterValue || healthDataArr || searchValue\">\r\n                <div class=\"col-md-4\">\r\n                </div>\r\n                <div class=\"col-md-5 saveBtn\">\r\n                  <a class=\"clr-red subject save imgHover\" (click)=\"saveImage(letterSelectValue,categorySelectValue,letterImagePath)\">\r\n                    &nbsp; Save</a>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                  <button type=\"submit\" class=\"saveGoButtonimg subject\" (click)=\"changeImage(addImageForm.value)\"></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/display-picture/display-picture.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/display-picture/display-picture.component.ts ***!
  \**************************************************************/
/*! exports provided: DisplayPictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayPictureComponent", function() { return DisplayPictureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayPictureComponent = /** @class */ (function () {
    function DisplayPictureComponent(httpService, _router) {
        this.httpService = httpService;
        this._router = _router;
        this.categoriesData = [];
        this.lettersData = [];
        this.subjectsData = [];
        this.categoryDataArr = [];
        this.letterDataArr = [];
        this.healthDataArr = [];
        this.catImagePath = "";
        this.letterImagePath = "";
        this.subLetterValue = [];
        this.categorySelectValue = [];
        this.letterSelectValue = [];
        this.searchValue = "";
    }
    DisplayPictureComponent.prototype.ngOnInit = function () {
        var _this = this;
        var selectedDisplayData = JSON.parse(localStorage.getItem('selectedDisplayData'));
        if (!selectedDisplayData || selectedDisplayData && selectedDisplayData.length == 0) {
            localStorage.setItem('selectedDisplayData', JSON.stringify([]));
        }
        var catV = localStorage.getItem('categoryValue');
        var letV = localStorage.getItem('letterValue');
        var subjV = localStorage.getItem('subjectValue');
        var hthV = localStorage.getItem('healthValue');
        if (catV != null) {
            localStorage.removeItem('letterValue');
            localStorage.removeItem('subjectValue');
            localStorage.removeItem('healthValue');
        }
        else if (letV != null) {
            localStorage.removeItem('categoryValue');
            localStorage.removeItem('subjectValue');
            localStorage.removeItem('healthValue');
        }
        else if (subjV != null && hthV != null) {
            localStorage.removeItem('categoryValue');
            localStorage.removeItem('letterValue');
        }
        else {
            localStorage.removeItem('categoryValue');
        }
        this.httpService.get('./assets/json/category.json').subscribe(function (data) {
            _this.categoriesData = data; // FILL THE ARRAY WITH DATA.
            if (data) {
                _this.fetchCatValue();
                _this.getImage();
            }
        }, function (err) {
            console.log(err.message);
        });
        this.httpService.get('./assets/json/letter.json').subscribe(function (data) {
            _this.lettersData = data; // FILL THE ARRAY WITH DATA.
            if (data) {
                _this.fetchLetterValue();
                _this.getImage();
            }
        }, function (err) {
            console.log(err.message);
        });
        this.httpService.get('./assets/json/subject.json').subscribe(function (data) {
            _this.subjectsData = data; // FILL THE ARRAY WITH DATA.
            if (data) {
                _this.fetchHealthValue();
                // this.getImage();
            }
        }, function (err) {
            console.log(err.message);
        });
        this.addImageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            letterSelectValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            categorySelectValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    };
    DisplayPictureComponent.prototype.fetchCatValue = function () {
        var categoryItem = localStorage.getItem('categoryValue');
        this.viewCategory(categoryItem);
    };
    DisplayPictureComponent.prototype.viewCategory = function (cat_val) {
        this.categorySelectValue = [];
        this.categoryDataArr = [];
        var subcategory;
        var objectKeys = Object.keys(this.categoriesData);
        this.catKeyName = objectKeys[1];
        this.selectCatName = cat_val;
        subcategory = this.categoriesData.Category;
        for (var i = 0; i < subcategory.length; i++) {
            if (subcategory[i].ID == cat_val) {
                var obj = { subCategory_data: subcategory[i].data };
                if (obj.subCategory_data.length > 0) {
                    var value = obj.subCategory_data[0].Cell[0];
                    this.categorySelectValue.push(value.text);
                }
                this.categoryDataArr.push(obj);
                localStorage.setItem('categoryName', this.catKeyName);
                localStorage.setItem('categoryNameValue', this.selectCatName);
            }
        }
    };
    DisplayPictureComponent.prototype.fetchHealthValue = function () {
        var subjectItem = localStorage.getItem('subjectValue');
        var healthItem = localStorage.getItem('healthValue');
        this.viewHealth(subjectItem, healthItem);
    };
    DisplayPictureComponent.prototype.viewHealth = function (subject_val, health_val) {
        this.healthDataArr = [];
        var objectKeys = Object.keys(this.subjectsData);
        this.subjectKeyName = objectKeys[1];
        this.selectSubjectName = subject_val;
        this.selectHealthName = health_val;
        for (var i = 0; i < this.subjectsData.subject.length; i++) {
            var subSubject = this.subjectsData.subject;
            if (subSubject[i].id == subject_val) {
                var healthValue = subSubject[i][subject_val];
                for (var j = 0; j < healthValue.length; j++) {
                    if (healthValue[j].ID == health_val) {
                        var subHealthData = healthValue[j].data;
                        var obj = { subHealth_data: subHealthData };
                        if (obj.subHealth_data.length > 0) {
                            var imgPath = obj.subHealth_data[0].Cell[2];
                            this.letterImagePath = imgPath.text;
                            var value = obj.subHealth_data[0].Cell[0];
                            this.letterSelectValue.push(value.text);
                        }
                        this.healthDataArr.push(obj);
                        localStorage.setItem('subjectName', this.subjectKeyName);
                        localStorage.setItem('subjectNameValue', this.selectSubjectName);
                        localStorage.setItem('healthNameValue', this.selectHealthName);
                    }
                }
            }
        }
    };
    DisplayPictureComponent.prototype.fetchLetterValue = function () {
        var letterItem = localStorage.getItem('letterValue');
        if (letterItem) {
            var searchLetterValue = letterItem.charAt(0);
        }
        this.viewLetter(searchLetterValue);
    };
    DisplayPictureComponent.prototype.viewLetter = function (letter_val) {
        this.subLetterValue = [];
        this.searchValue = [];
        var subLetter;
        this.letterKeyName = "Letter";
        this.selectLetterName = letter_val;
        var letter_text;
        for (var i = 0; i < this.lettersData.Letter.length - 1; i++) {
            var subLetterData = this.lettersData.Letter;
            if (subLetterData[i].disable != "disable") {
                if (!isNaN(letter_val)) {
                    if (subLetterData[i].data.length == 2) {
                        subLetter = subLetterData[i].data[0];
                    }
                    else {
                        subLetter = subLetterData[i].data;
                    }
                    for (var j = 0; j < subLetter.length; j++) {
                        if (subLetter != null && subLetter[j].Cell != null) {
                            var cellData = subLetter[j].Cell;
                            if (cellData[2].text == letter_val) {
                                this.letterImagePath = cellData[2].text;
                                letter_text = cellData[0].text;
                                this.letterSelectValue.push({ letterName: letter_text });
                                this.searchValue.push({ letterName: letter_text });
                                break;
                            }
                        }
                    }
                    // this.searchValue = this.letterSelectValue;
                }
                else {
                    if (subLetterData[i].ID == letter_val) {
                        subLetter = subLetterData[i].data;
                        var obj = { subLetter_data: subLetter };
                        if (obj.subLetter_data.length > 0) {
                            var value = obj.subLetter_data[0].Cell[0];
                            this.letterSelectValue.push(value.text);
                        }
                        this.subLetterValue.push(obj);
                    }
                }
            }
        }
        localStorage.setItem('letterName', this.letterKeyName);
    };
    DisplayPictureComponent.prototype.backButton = function () {
        // this.playClickSound();
        localStorage.removeItem('categoryValue');
        localStorage.removeItem('letterValue');
        localStorage.removeItem('subjectValue');
        localStorage.removeItem('healthValue');
        this._router.navigate(['/pictureCard'], { skipLocationChange: true });
    };
    DisplayPictureComponent.prototype.beginNewSearch = function () {
        // this.playClickSound();
        localStorage.setItem('beginSearchState', "searchDisplayPicture");
        localStorage.removeItem('categoryValue');
        localStorage.removeItem('letterValue');
        localStorage.removeItem('subjectValue');
        localStorage.removeItem('healthValue');
        this._router.navigate(['/pictureCard'], { skipLocationChange: true });
    };
    DisplayPictureComponent.prototype.myPictures = function () {
        this.playClickSound();
        localStorage.setItem('backBtnState', "displayPicture");
        this._router.navigate(['/myPictures'], { skipLocationChange: true });
    };
    DisplayPictureComponent.prototype.exit = function () {
        this.playClickSound();
        this._router.navigate(['/exit'], { skipLocationChange: true });
    };
    DisplayPictureComponent.prototype.getImage = function () {
        if (this.categorySelectValue.length > 0) {
            this.getCategoryImage(null);
        }
        if (this.letterSelectValue.length > 0) {
            this.getLetterImage(null);
        }
    };
    DisplayPictureComponent.prototype.getCategoryImage = function (play) {
        if (play != null) {
            this.playClickSound();
        }
        this.catImagePath = "";
        var subcategory;
        subcategory = this.categoriesData.Category;
        for (var i = 0; i < subcategory.length; i++) {
            var subDatacategory = void 0;
            subDatacategory = subcategory[i].data;
            for (var j = 0; j < subDatacategory.length; j++) {
                var subCellcategory = void 0;
                subCellcategory = subDatacategory[j].Cell;
                for (var k = 0; k < subCellcategory.length; k++) {
                    if (subCellcategory[0].text == this.categorySelectValue) {
                        this.letterImagePath = subCellcategory[2].text;
                    }
                }
            }
        }
    };
    DisplayPictureComponent.prototype.getLetterImage = function (play) {
        if (play != null) {
            this.playClickSound();
        }
        // this.letterImagePath = "";
        var subLetter;
        if (this.letterSelectValue.length > 0) {
            if (this.letterSelectValue[0].letterName) {
                var fstImageLetter = this.letterSelectValue[0].letterName.charAt(0);
            }
            else {
                var fstImageLetter = this.letterSelectValue[0].charAt(0);
            }
        }
        for (var i = 0; i < this.lettersData.Letter.length; i++) {
            var letterData = this.lettersData.Letter;
            if (letterData[i].ID == fstImageLetter) {
                subLetter = letterData[i].data;
                if (subLetter) {
                    for (var j = 0; j < subLetter.length; j++) {
                        var celSubLetter = void 0;
                        celSubLetter = subLetter[j].Cell;
                        if (celSubLetter) {
                            for (var k = 0; k < celSubLetter.length; k++) {
                                if (celSubLetter[0].text == this.letterSelectValue) {
                                    this.letterImagePath = celSubLetter[2].text;
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    DisplayPictureComponent.prototype.changeImage = function (get_word) {
        this.playClickSound();
        if (this.letterSelectValue.length > 0) {
            localStorage.setItem('selectedWordValue', this.letterSelectValue);
        }
        if (this.categorySelectValue.length > 0) {
            localStorage.setItem('selectedWordValue', this.categorySelectValue);
        }
        if (localStorage.getItem('categoryValue') != null && localStorage.getItem('letterValue') == null && localStorage.getItem('subjectValue') == null && localStorage.getItem('healthValue') == null) {
            localStorage.removeItem('letterValue');
            localStorage.removeItem('subjectValue');
            localStorage.removeItem('healthValue');
            this._router.navigate(['/changePicture'], { skipLocationChange: true });
        }
        else if (localStorage.getItem('categoryValue') == null && localStorage.getItem('letterValue') != null && localStorage.getItem('subjectValue') == null && localStorage.getItem('healthValue') == null) {
            localStorage.removeItem('categoryValue');
            localStorage.removeItem('subjectValue');
            localStorage.removeItem('healthValue');
            this._router.navigate(['/changePicture'], { skipLocationChange: true });
        }
        else if (localStorage.getItem('categoryValue') == null && localStorage.getItem('letterValue') == null && localStorage.getItem('subjectValue') != null && localStorage.getItem('healthValue') != null) {
            localStorage.removeItem('categoryValue');
            localStorage.removeItem('letterValue');
            this._router.navigate(['/changePicture'], { skipLocationChange: true });
        }
        else {
            this._router.navigate(['/changePicture'], { skipLocationChange: true });
        }
    };
    DisplayPictureComponent.prototype.saveImage = function (letterValue, catLetterValue, imagePath) {
        this.playClickSound();
        var selectedDisplayData = JSON.parse(localStorage.getItem('selectedDisplayData'));
        if (letterValue.length > 0) {
            if (letterValue && imagePath) {
                if (letterValue instanceof Array) {
                    letterValue = letterValue[0];
                    selectedDisplayData.push({ letterValue: letterValue, imagePath: imagePath });
                }
                else {
                    selectedDisplayData.push({ letterValue: letterValue, imagePath: imagePath });
                }
                localStorage.setItem('selectedDisplayData', JSON.stringify(selectedDisplayData));
            }
        }
        if (catLetterValue.length > 0) {
            if (catLetterValue && imagePath) {
                selectedDisplayData.push({ letterValue: catLetterValue, imagePath: imagePath });
                localStorage.setItem('selectedDisplayData', JSON.stringify(selectedDisplayData));
            }
        }
    };
    DisplayPictureComponent.prototype.playClickSound = function () {
        var audio = new Audio();
        audio.src = "./assets/pict_media/onclick_audio/onClick.mp3";
        audio.load();
        audio.play();
    };
    DisplayPictureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-picture',
            template: __webpack_require__(/*! ./display-picture.component.html */ "./src/app/display-picture/display-picture.component.html"),
            styles: [__webpack_require__(/*! ./display-picture.component.css */ "./src/app/display-picture/display-picture.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DisplayPictureComponent);
    return DisplayPictureComponent;
}());



/***/ }),

/***/ "./src/app/exit/exit.component.css":
/*!*****************************************!*\
  !*** ./src/app/exit/exit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".height-full{\r\n\theight: 880px;\r\n}\r\n.color_blk{\r\n\tbackground-color: #000;\r\n} \r\n"

/***/ }),

/***/ "./src/app/exit/exit.component.html":
/*!******************************************!*\
  !*** ./src/app/exit/exit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center color_blk height-full\">\r\n  <div class=\"container bg-3 text-center container_css\">\r\n    <img src=\"./assets/help.png\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/exit/exit.component.ts":
/*!****************************************!*\
  !*** ./src/app/exit/exit.component.ts ***!
  \****************************************/
/*! exports provided: ExitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitComponent", function() { return ExitComponent; });
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

var ExitComponent = /** @class */ (function () {
    function ExitComponent() {
    }
    ExitComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('categoryValue');
        localStorage.removeItem('letterValue');
        localStorage.removeItem('subjectValue');
        localStorage.removeItem('healthValue');
        localStorage.removeItem('selectedWordValue');
        localStorage.removeItem('letterName');
        localStorage.removeItem('categoryName');
        localStorage.removeItem('categoryNameValue');
        localStorage.removeItem('subjectName');
        localStorage.removeItem('subjectNameValue');
        localStorage.removeItem('healthNameValue');
        localStorage.removeItem('selectedChangeData');
        localStorage.removeItem('selectedDisplayData');
        localStorage.removeItem('myLetter');
        localStorage.removeItem('selectedTabNo');
        localStorage.removeItem('backBtnState');
    };
    ExitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exit',
            template: __webpack_require__(/*! ./exit.component.html */ "./src/app/exit/exit.component.html"),
            styles: [__webpack_require__(/*! ./exit.component.css */ "./src/app/exit/exit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExitComponent);
    return ExitComponent;
}());



/***/ }),

/***/ "./src/app/index-page/index-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/index-page/index-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".height-full{\r\n\theight: 880px;\r\n}\r\n.color_blk{\r\n\tbackground-color: #000;\r\n}\r\n.enter_btn{\r\n    position: absolute;\r\n    top: 420px;\r\n    left: 615px;\r\n    z-index: 3;\r\n    width: 200px;\r\n    height: 200px;\r\n    cursor: pointer;\r\n}\r\n.imgHover:hover{\r\n    border: none;\r\n    margin: 9px 1px 1px 2px;\r\n    display: block;\r\n    width: 109px;\r\n    height: 40px;\r\n    background: url(\"./assets/enter_button.png\") no-repeat left bottom;\r\n}\r\n.imgHover{\r\n    border: none;\r\n    margin: 9px 1px 1px 2px;\r\n    display: block;\r\n    width: 109px;\r\n    height: 40px;\r\n    background: url(\"./assets/enter_button.png\") no-repeat left top;\r\n}"

/***/ }),

/***/ "./src/app/index-page/index-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/index-page/index-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"text-center color_blk height-full\">\r\n    <div class=\"container bg-3 text-center container_css\">\r\n      <img src=\"./assets/home.png\" />\r\n      <a class=\"enter_btn imgHover\" (click)=\"enter()\"></a>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/index-page/index-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/index-page/index-page.component.ts ***!
  \****************************************************/
/*! exports provided: IndexPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexPageComponent", function() { return IndexPageComponent; });
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


var IndexPageComponent = /** @class */ (function () {
    function IndexPageComponent(_router) {
        this._router = _router;
    }
    IndexPageComponent.prototype.ngOnInit = function () {
    };
    IndexPageComponent.prototype.enter = function () {
        // let audio = new Audio();
        // audio.src = "../../../assets/pict_media/onclick_audio/onClick.mp3";
        // audio.load();
        // audio.play();
        this._router.navigate(['/pictureCard'], { skipLocationChange: true });
        //    this._router.navigate(['/pictureCard']);
    };
    IndexPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index-page',
            template: __webpack_require__(/*! ./index-page.component.html */ "./src/app/index-page/index-page.component.html"),
            styles: [__webpack_require__(/*! ./index-page.component.css */ "./src/app/index-page/index-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], IndexPageComponent);
    return IndexPageComponent;
}());



/***/ }),

/***/ "./src/app/my-pictures/my-pictures.component.css":
/*!*******************************************************!*\
  !*** ./src/app/my-pictures/my-pictures.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container_fluid_css{\r\n\t height: 900px;\r\n\t background-color: #000;\r\n}\r\n\r\n.container_css{\r\n\t width:800px;\r\n\t height: 600px;\r\n\t background-color: #6598cc;\r\n}\r\n\r\n.txt-right{\r\n\t text-align: right;\r\n}\r\n\r\n.txt-left{\r\n\t text-align: left;\r\n}\r\n\r\n.title{\r\n\t color: #fff;\r\n\t font-size:2.3em;\r\n}\r\n\r\n.dlng{\r\n\tmargin-top: 5px;\r\n}\r\n\r\n.sub-title-btn{\r\n\t color: #fff;\r\n\t font-size: 16px;\r\n\t background-color: #6598cc;\r\n\t border-style: hidden;\r\n}\r\n\r\n.sub-title-btn1{\r\n\t color: #a52121;\r\n\t font-size: 16px;\r\n\t background-color: #6598cc;\r\n\t border-style: hidden;\r\n}\r\n\r\n.padding-30{\r\n\t padding: 3.8%;\r\n}\r\n\r\n.row_2{\r\n\t height: 7%;\r\n}\r\n\r\n.inline{\r\n/* \t margin-top: 8px; */\r\n\t display: inline;\r\n\t font-family: cursive;\r\n}\r\n\r\n.select {\r\n\t color: #1050de;\r\n\t font-size: 18px;\r\n\t text-shadow: 0 2px 5px #f5fffc;\r\n\t -moz-text-shadow: 0 0 2px #fff;\r\n\t -webkit-text-shadow: 0 0 2px #fff;\r\n}\r\n\r\n.series{\r\n\t color: #ae3737;\r\n\t font-size: 21px;\r\n\t text-shadow: 0 0 2px #fff;\r\n\t -moz-text-shadow: 0 0 2px #fff;\r\n\t -webkit-text-shadow: 0 0 2px #fff;\r\n}\r\n\r\n.search{\r\n\t display: inline;\r\n\t/*  width: 85%;\r\n\t float: left;\r\n\t margin-top: 1%;\r\n\t height: 70%; */\r\n}\r\n\r\n.row_3{\r\n\t background-color: #f6f8e6;\r\n\t border: 1px solid #5a7bb3;\r\n}\r\n\r\n.btn-go{\r\n\t border-style: hidden;\r\n\t color:#fff;\r\n\t font-size: 20px;\r\n\t background-color: #a52121;\r\n\t display: inline;\r\n\t/*  float: right; */\r\n}\r\n\r\n.width-50{\r\n\t width:50%;\r\n}\r\n\r\n.width-100{\r\n\t width: 100%;\r\n}\r\n\r\n.color_blk{\r\n\t background-color: #000;\r\n}\r\n\r\n.clr-red{\r\n\t color: #a52121 !important;\r\n}\r\n\r\n.imageDiv{\r\n\tpadding-left: 10.4%;\r\n}\r\n\r\n.height-full{\r\n\t height: 880px;\r\n}\r\n\r\n.subject{\r\n\t cursor: pointer !important;\r\n}\r\n\r\n.selDev{\r\n\tword-wrap: inherit;\r\n}\r\n\r\n.myPicAlign{\r\n\tpadding-right: 88px;\r\n}\r\n\r\n.subject1{\r\n\ttext-shadow: 2px 3px 1px #000;\r\n}\r\n\r\n.selectval{\r\n\t height: 315px;\r\n\t width: 230px;\r\n\t font-family: cursive;\r\n\t padding: 5% 1%;\r\n\t border: 1px solid #547caf;\r\n}\r\n\r\n.audioimgHover{\r\n\tcursor: pointer;\r\n}\r\n\r\n.p1{\r\n\tpadding-left: 40%;\r\n}\r\n\r\n.imageGallery{\r\n\twidth: 336px;\r\n}\r\n\r\n.cont1{\r\n\tmargin-top: 6px;\r\n    width: 98%;\r\n}\r\n\r\n.max-ht-100{\r\n\t max-height: 100px;\r\n}\r\n\r\n.padding-40{\r\n\t padding:35px 30px;\r\n}\r\n\r\n.mg-top-10{\r\n\t margin-top: 6%;\r\n}\r\n\r\n.mg-top-5{\r\n\t margin-top: 5%;\r\n}\r\n\r\n.clr-blue{\r\n\t color: #547caf;\r\n\t font-family: cursive;\r\n}\r\n\r\n.bold{\r\n\t font-weight: bold;\r\n}\r\n\r\nselect option:hover {\r\n\t color: #ff01ff;\r\n}\r\n\r\n.alText{\r\n\tmargin: 10px 2px 1px;\r\n}\r\n\r\n.block{\r\n\t display: inline-block;\r\n}\r\n\r\n.hidden{\r\n\t visibility: hidden;\r\n}\r\n\r\na, p, button{\r\n\t font-family: cursive;\r\n}\r\n\r\n.pd-right-8{\r\n\t padding-right: 8%;\r\n}\r\n\r\n.btnDirect {\r\n\t position: relative;\r\n\t padding-left: 14px;\r\n\t padding-right: 14px;\r\n\t padding-top: 0;\r\n\t padding-bottom: 2.8px;\r\n\t font-size: 14px;\r\n\t height: 22px;\r\n\t cursor: pointer;\r\n}\r\n\r\n.cont1{\r\n    margin-top: 6px;\r\n    width: 98%;\r\n}\r\n\r\n.catRow{\r\n\twidth: 100%;\r\n   /*  margin-left: 5.8%; */\r\n}\r\n\r\n.catCol1{\r\n\tpadding-left: 10.5%;\r\n}\r\n\r\n.label_title{\r\n    font-family: cursive;\r\n    padding-left: 22px;\r\n    word-wrap: unset;\r\n}\r\n\r\n.btnDirect::after {\r\n\t content: '';\r\n\t position: absolute;\r\n\t top: 0;\r\n\t width: 0;\r\n\t height: 0;\r\n}\r\n\r\n.delete{\r\n\tpadding-left: .01%;\r\n}\r\n\r\n.btnDirect:hover {\r\n\t color: #a52121;\r\n\t background-color: #fff !important;\r\n\t border: 1px solid #a52121;\r\n}\r\n\r\n.btnDirect1 {\r\n\t position: relative;\r\n\t padding-left: 15px;\r\n\t padding-right: 15px;\r\n\t padding-top: 0;\r\n\t padding-bottom: 2.8px;\r\n\t font-size: 16px;\r\n\t height: 30px;\r\n}\r\n\r\n.btnDirect1::after {\r\n\t content: '';\r\n\t position: absolute;\r\n\t top: 0;\r\n\t width: 0;\r\n\t height: 28px;\r\n}\r\n\r\n.btnDirect1:hover {\r\n\t color: #a52121;\r\n\t background-color: #fff !important;\r\n\t border: 1px solid #a52121;\r\n}\r\n\r\n.next::after {\r\n\t right: -22px;\r\n\t border-style: solid;\r\n\t border-width: 11px;\r\n\t border-color: transparent transparent transparent #a52121;\r\n}\r\n\r\n.next:hover::after {\r\n\t border-color: transparent transparent transparent #a52121;\r\n}\r\n\r\n.prev::after {\r\n\t left: -22px;\r\n\t border-color: transparent #dc3545 transparent transparent;\r\n\t border-width: 11px;\r\n\t border-style: solid;\r\n}\r\n\r\n.prev:hover::after {\r\n\t border-color: transparent #fff transparent transparent;\r\n}\r\n\r\n.save:hover{\r\n\t color: #fff !important;\r\n\t text-shadow: -2px 0 #ae3737, 0px 1px #ae3737, 1px 0 #ae3737, 0 -2px #ae3737;\r\n}\r\n\r\n.print:hover{\r\n\t color: #fff !important;\r\n\t text-shadow: -2px 0 #ae3737, 0px 1px #ae3737, 1px 0 #ae3737, 0 -2px #ae3737;\r\n}\r\n\r\n.changeLang:hover{\r\n\t color: #fff !important;\r\n\t text-shadow: -2px 0 #ae3737, 0px 1px #ae3737, 1px 0 #ae3737, 0 -2px #ae3737;\r\n}\r\n\r\n.sub-title-btn:hover{\r\n\t color: #a52121;\r\n}\r\n\r\n.white{\r\n\t color: #fff;\r\n}\r\n\r\n.printimgHover:hover{\r\n\tborder: none;\r\n    margin: 0px 0px 0px 0px;\r\n    width: 36px;\r\n    height: 34px;\r\n\tbackground: url(\"./assets/print_icon_hover.png\") no-repeat;\r\n}\r\n\r\n.printimgHover{\r\n\tborder: none;\r\n    margin: 0px 0px 0px 0px;\r\n    width: 36px;\r\n    height: 34px;\r\n\tbackground: url(\"./assets/print_icon.png\") no-repeat;\r\n}\r\n\r\n.printClass{\r\n\tmargin: 1px 1px 1px 31px;\r\n}\r\n\r\n.btmRow{\r\n\tmargin-left: 40px;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.ptCol{\r\n    text-align: center;\r\n    padding-left: 50px;\r\n}\r\n\r\n.mg-right-50{\r\n\tmargin-left: -10px;\r\n}\r\n\r\n.dffLng{\r\n\tword-wrap: normal;\r\n}"

/***/ }),

/***/ "./src/app/my-pictures/my-pictures.component.html":
/*!********************************************************!*\
  !*** ./src/app/my-pictures/my-pictures.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" color_blk height-full\">\r\n\r\n  <div class=\"container bg-3  container_css\">\r\n    <div class=\"row max-ht-100\">\r\n      <div class=\"col-md-5 pull-left txt-left padding-40\">\r\n        <button class=\"rollover subject\" (click)=\"backButton()\"></button>\r\n      </div>\r\n      <div class=\"col-md-7 pull-right txt-right padding-30 white\">\r\n        <button class=\"sub-title-btn subject subject1\" (click)=\"beginNewSearch()\">BEGIN NEW SEARCH</button> |\r\n        <button class=\"sub-title-btn1 subject subject1\" disabled>MY PICTURES</button> |\r\n        <button class=\"sub-title-btn subject subject1\" (click)=\"exit()\">EXIT</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container bg-3  container1_css\">\r\n      <form [formGroup]=\"addImageForm\">\r\n        <div class=\"row mg-top-10\">\r\n          <div class=\"row catRow\">\r\n            <div class=\"col-md-6 catCol1\">\r\n              <label for=\"catImagSlide\" class=\"clr-blue\">My Pictures</label>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <label class=\"clr-blue p1 bold\">Preview</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"row cont1\">\r\n            <div class=\"col-md-6 imageDiv\">\r\n              <!-- <label for=\"catImagSlide\" class=\"clr-blue\">My Pictures</label> -->\r\n              <select id=\"catImagSlide\" size=\"12\" class=\"form-control selectval\" [(ngModel)]=\"myLetterSelectValue\" (change)=\"getLetterImage()\"\r\n                formControlName=\"myLetterSelectValue\">\r\n                <ng-container *ngFor=\"let letter of myLetter; let i= index;\">\r\n                  <option class=\"subject\" [value]=\"letter.letterValue\">{{letter.letterValue}}</option>\r\n                </ng-container>\r\n              </select>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <!-- <label class=\"clr-blue bold\">Preview</label> -->\r\n              <div class=\"imageGallery de\" *ngIf=\"myImagePath == '' \">\r\n                <img src=\"./assets/default.png\" />\r\n              </div>\r\n              <div class=\"imageGallery\" id=\"print-section\" *ngIf=\"myImagePath != '' \">\r\n                <img src=\"./assets/pict_media/img/{{myImagePath}}.jpg\" />\r\n              </div>\r\n\r\n              <div class=\"mg-right-50\" *ngIf=\"myImagePath != '' && englishLetterName !=''\">\r\n                <div class=\"row diffLanguage\">\r\n                  <img #audioIcons class=\"audioimgHover\" (click)=\"playAudio(myImagePath)\" />\r\n                  <label #diffLanguages class=\"inline alText\" id=\"diffLanguage\">{{englishLetterName}}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row btmRow\">\r\n          <div class=\"col-md-6 delete\">\r\n            <a class=\"clr-red subject changeLang \" (click)=\"deleteImageWord(myLetterSelectValue)\">\r\n              <img src=\"./assets/delete_icon.png\" />Delete Picture</a>\r\n          </div>\r\n          <div class=\"col-md-3 ptCol\" *ngIf=\"myImagePath != '' && englishLetterName !='' \">\r\n            <div class=\"pull-left pd-right-25 inline\">\r\n              <a #changeLangs class=\"clr-red subject changeLang diffLng\" (click)=\"changeLanguage()\">En español</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\" *ngIf=\"myImagePath != '' && englishLetterName !='' \">\r\n            <a class=\"clr-red subject print inline printimgHover\" (click)=\"print()\">\r\n              <label class=\"printClass subject\">Print</label>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/my-pictures/my-pictures.component.ts":
/*!******************************************************!*\
  !*** ./src/app/my-pictures/my-pictures.component.ts ***!
  \******************************************************/
/*! exports provided: MyPicturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPicturesComponent", function() { return MyPicturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyPicturesComponent = /** @class */ (function () {
    function MyPicturesComponent(httpService, _router) {
        this.httpService = httpService;
        this._router = _router;
        this.myLetter = [];
        this.myImagePath = [];
        this.letterImagePath = "";
        this.spanishLetterName = "";
        this.englishLetterName = "";
        this.englishSpanishNameArray = [];
        this.lettersData = [];
        this.myLetter = JSON.parse(localStorage.getItem('myLetter'));
        if (!this.myLetter) {
            this.myLetter = [];
        }
        this.myImagePath = JSON.parse(localStorage.getItem('myImagePath'));
        if (!this.myImagePath) {
            this.myImagePath = [];
        }
    }
    MyPicturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchMyPictures();
        this.getLetterImage();
        this.addImageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            myLetterSelectValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.httpService.get('./assets/json/letter.json').subscribe(function (data) {
            _this.lettersData = data; // FILL THE ARRAY WITH DATA.
            if (data) {
                _this.spanishLanguageData();
            }
        }, function (err) {
            console.log(err.message);
        });
    };
    MyPicturesComponent.prototype.fetchMyPictures = function () {
        var _this = this;
        this.myLetterSelectValue = [];
        var selectedDisplayData = JSON.parse(localStorage.getItem('selectedDisplayData'));
        var selectedChangeData = JSON.parse(localStorage.getItem('selectedChangeData'));
        if (this.myLetter.length > 0) {
            this.myLetter.forEach(function (obj, index) {
                if (selectedDisplayData && selectedDisplayData.length > 0) {
                    selectedDisplayData.forEach(function (displayData, index) {
                        if (displayData != null) {
                            if (displayData.letterValue == obj.letterValue) {
                                _this.myLetter[index] = displayData;
                            }
                            else {
                                _this.myLetter.push(displayData);
                            }
                        }
                    });
                }
                if (selectedChangeData && selectedChangeData.length > 0) {
                    selectedChangeData.forEach(function (ChangeData, index) {
                        if (ChangeData != null) {
                            if (ChangeData.letterValue == obj.letterValue) {
                                _this.myLetter[index] = ChangeData;
                            }
                            else {
                                _this.myLetter.push(ChangeData);
                            }
                        }
                    });
                }
            });
        }
        else {
            if (selectedDisplayData && selectedDisplayData.length > 0) {
                selectedDisplayData.forEach(function (displayData, index) {
                    if (displayData) {
                        _this.myLetter.push(displayData);
                    }
                });
            }
            if (selectedChangeData && selectedChangeData.length > 0) {
                selectedChangeData.forEach(function (ChangeData, index) {
                    if (ChangeData) {
                        _this.myLetter.push(ChangeData);
                    }
                });
            }
        }
        this.myLetter = this.myLetter.filter(function (el) {
            if (Array.isArray(el) && el.length == 0) {
                return false;
            }
            return el;
        });
        this.myLetter = this.removeDuplicates(this.myLetter);
        if (this.myLetter && this.myLetter.length > 0) {
            this.myLetterSelectValue = this.myLetter[0].letterValue;
        }
        localStorage.setItem('myLetter', JSON.stringify(this.myLetter));
    };
    MyPicturesComponent.prototype.removeDuplicates = function (arr) {
        var unique_array = [];
        var _loop_1 = function (i) {
            var found = false;
            if (unique_array.length > 0) {
                unique_array.forEach(function (obj, index) {
                    if (arr[i].letterValue == obj.letterValue) {
                        found = true;
                    }
                });
            }
            if (!found) {
                unique_array.push(arr[i]);
            }
        };
        for (var i = 0; i < arr.length; i++) {
            _loop_1(i);
        }
        return unique_array;
    };
    MyPicturesComponent.prototype.getLetterImage = function () {
        this.playClickSound();
        this.englishLetterName = "";
        if (this.myLetterSelectValue instanceof Array) {
            var imgSelectedValue = this.myLetterSelectValue[0];
        }
        else {
            var imgSelectedValue = this.myLetterSelectValue;
        }
        for (var i = 0; i < this.myLetter.length; i++) {
            if (this.myLetter[i].letterValue == imgSelectedValue) {
                this.myImagePath = this.myLetter[i].imagePath;
                this.englishLetterName = this.myLetter[i].letterValue;
            }
        }
        for (var i = 0; i < this.englishSpanishNameArray.length; i++) {
            if (this.englishSpanishNameArray[i].letterValue == imgSelectedValue) {
                this.spanishLetterName = this.englishSpanishNameArray[i].spanishLetter;
            }
        }
        if (!this.changeLangs || !this.changeLangs.nativeElement) {
            return;
        }
        else {
            if (this.changeLangs.nativeElement.innerHTML == "English") {
                if (this.audioIcons.nativeElement.classList.contains == 'hidden') {
                    this.diffLanguages.nativeElement.innerHTML = this.spanishLetterName;
                }
                else {
                    this.audioIcons.nativeElement.classList.add('hidden');
                    this.diffLanguages.nativeElement.innerHTML = this.spanishLetterName;
                }
            }
            else {
                if (this.audioIcons.nativeElement.classList.contains == 'block') {
                    this.diffLanguages.nativeElement.innerHTML = imgSelectedValue;
                }
                else {
                    this.audioIcons.nativeElement.classList.add('block');
                    this.diffLanguages.nativeElement.innerHTML = imgSelectedValue;
                }
            }
        }
    };
    MyPicturesComponent.prototype.playAudio = function (audioPath) {
        var audio = new Audio();
        audio.src = "./assets/pict_media/audio/e_" + audioPath + ".mp3";
        audio.load();
        audio.play();
    };
    MyPicturesComponent.prototype.deleteImageWord = function (selectLetter) {
        this.playClickSound();
        // var selectedLetter = selectLetter[0];
        var index = this.myLetter.map(function (o) { return o.letterValue; }).indexOf(selectLetter);
        if (index !== -1) {
            this.myLetter.splice(index, 1);
        }
        localStorage.setItem('myLetter', JSON.stringify(this.myLetter));
        var selectedDisplayData = JSON.parse(localStorage.getItem('selectedDisplayData'));
        if (selectedDisplayData && selectedDisplayData.length > 0) {
            index = selectedDisplayData.map(function (o) { return o.letterValue; }).indexOf(selectLetter);
            ;
            if (index !== -1) {
                selectedDisplayData.splice(index, 1);
            }
            localStorage.setItem('selectedDisplayData', JSON.stringify(selectedDisplayData));
        }
        var selectedChangeData = JSON.parse(localStorage.getItem('selectedChangeData'));
        if (selectedChangeData && selectedChangeData.length > 0) {
            index = selectedChangeData.map(function (o) { return o.letterValue; }).indexOf(selectLetter);
            ;
            if (index !== -1) {
                selectedChangeData.splice(index, 1);
            }
            localStorage.setItem('selectedChangeData', JSON.stringify(selectedChangeData));
        }
        this.englishLetterName = "";
        this.myImagePath = [];
        if (this.myLetter.length > 0) {
            this.myImagePath = this.myLetter[0].imagePath;
            this.englishLetterName = this.myLetter[0].letterValue;
            this.myLetterSelectValue = this.englishLetterName;
        }
        if (!this.changeLangs || !this.changeLangs.nativeElement) {
            return;
        }
        else {
            if (this.changeLangs.nativeElement.innerHTML == "En español") {
                this.diffLanguages.nativeElement.innerHTML = this.englishLetterName;
            }
        }
    };
    MyPicturesComponent.prototype.spanishLanguageData = function () {
        var subLetter;
        var subCellLetter;
        if (this.myLetterSelectValue instanceof Array) {
            var imgSelectValue = this.myLetterSelectValue[0];
        }
        else {
            var imgSelectValue = this.myLetterSelectValue;
        }
        if (imgSelectValue && imgSelectValue.length > 0) {
            var fstImageLetter = imgSelectValue.charAt(0);
        }
        for (var i = 0; i < this.lettersData.Letter.length; i++) {
            if (this.lettersData.Letter[i].ID == fstImageLetter) {
                subLetter = this.lettersData.Letter[i].data;
                for (var j = 0; j < subLetter.length; j++) {
                    subCellLetter = subLetter[j].Cell;
                    if (subCellLetter[0].text == imgSelectValue) {
                        for (var k = 0; k < subCellLetter.length; k++) {
                            this.englishLetterName = subCellLetter[0].text;
                            this.spanishLetterName = subCellLetter[1].text;
                        }
                    }
                }
            }
        }
        // this.myLetter
        if (this.myLetter != null || this.myLetter.length > 0) {
            for (var i = 0; i < this.myLetter.length; i++) {
                for (var r = 0; r < this.lettersData.Letter.length; r++) {
                    if (this.lettersData.Letter[r].ID == this.myLetter[i].letterValue.charAt(0)) {
                        subLetter = this.lettersData.Letter[r].data;
                        for (var j = 0; j < subLetter.length; j++) {
                            subCellLetter = subLetter[j].Cell;
                            if (subCellLetter[0].text == this.myLetter[i].letterValue) {
                                for (var k = 0; k < subCellLetter.length; k++) {
                                    this.englishSpanishNameArray.push({ letterValue: subCellLetter[0].text, spanishLetter: subCellLetter[1].text });
                                }
                            }
                        }
                    }
                }
            }
        }
        this.englishSpanishNameArray = this.removeDuplicates(this.englishSpanishNameArray);
    };
    MyPicturesComponent.prototype.changeLanguage = function () {
        this.playClickSound();
        if (!this.changeLangs || !this.changeLangs.nativeElement) {
            return;
        }
        else {
            if (this.changeLangs.nativeElement.innerHTML == "En español") {
                this.changeLangs.nativeElement.innerHTML = "English";
                if (this.diffLanguages.nativeElement.id == "diffLanguage") {
                    this.diffLanguages.nativeElement.innerHTML = this.spanishLetterName;
                    this.audioIcons.nativeElement.classList.remove('block');
                    this.audioIcons.nativeElement.classList.add('hidden');
                }
            }
            else {
                this.changeLangs.nativeElement.innerHTML = "En español";
                if (this.diffLanguages.nativeElement.id == "diffLanguage") {
                    this.diffLanguages.nativeElement.innerHTML = this.englishLetterName;
                    this.audioIcons.nativeElement.classList.remove('hidden');
                    this.audioIcons.nativeElement.classList.add('block');
                }
            }
        }
    };
    MyPicturesComponent.prototype.print = function () {
        this.playClickSound();
        var printContents, popupWin, word;
        if (document.getElementById('diffLanguage') != null) {
            word = document.getElementById('diffLanguage').innerHTML;
            printContents = document.getElementById('print-section').innerHTML;
            popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
            popupWin.document.open();
			console.log(printContents);
            popupWin.document.write("\n        <html>\n          <head>\n  <base href=\"/content/hsp/reading/excursions/ca/common/picture_card_bank_9780153852954_/pictureCardBank.html\"> \n          <style>\n            body{\n              margin-top:300px;\n            }\n              .img{\n               \n                text-align: center;\n              }\n              .printTextClass{\n                padding-top:10px;\n                font-family: cursive;\n              }\n              \n              div.a {\n                text-align: center;\n              }\n            </style>\n          </head>\n          <body onload=\"window.print();window.close()\">\n          <div class=\"img\">\n        " + printContents + "\n        </div>\n          \n          <div class=\"a\">\n            <label class=\"printTextClass\">" + word + "</label>\n            </div>\n            </body>\n        </html>");
            popupWin.document.close();
        }
    };
    MyPicturesComponent.prototype.backButton = function () {
        this.playClickSound();
        if (localStorage.getItem('backBtnState')) {
            this._router.navigate(['/' + localStorage.getItem('backBtnState') + ''], { skipLocationChange: true });
        }
        else {
            localStorage.removeItem('categoryValue');
            localStorage.removeItem('letterValue');
            localStorage.removeItem('subjectValue');
            localStorage.removeItem('healthValue');
            localStorage.removeItem('selectedDisplayData');
            localStorage.removeItem('selectedChangeData');
            this._router.navigate(['/pictureCard'], { skipLocationChange: true });
        }
    };
    MyPicturesComponent.prototype.beginNewSearch = function () {
        // this.playClickSound();
        localStorage.removeItem('categoryValue');
        localStorage.removeItem('letterValue');
        localStorage.removeItem('subjectValue');
        localStorage.removeItem('healthValue');
        localStorage.removeItem('selectedDisplayData');
        localStorage.removeItem('selectedChangeData');
        this._router.navigate(['/pictureCard'], { skipLocationChange: true });
    };
    // myPictures() {
    //   this.playClickSound();
    //   localStorage.removeItem('categoryValue');
    //   localStorage.removeItem('letterValue');
    //   localStorage.removeItem('subjectValue');
    //   localStorage.removeItem('healthValue');
    //   this._router.navigate(['/myPictures'], { skipLocationChange: true });
    // }
    MyPicturesComponent.prototype.exit = function () {
        this.playClickSound();
        this._router.navigate(['/exit'], { skipLocationChange: true });
    };
    MyPicturesComponent.prototype.playClickSound = function () {
        var audio = new Audio();
        audio.src = "./assets/pict_media/onclick_audio/onClick.mp3";
        audio.load();
        audio.play();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('changeLangs'),
        __metadata("design:type", Object)
    ], MyPicturesComponent.prototype, "changeLangs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('diffLanguages'),
        __metadata("design:type", Object)
    ], MyPicturesComponent.prototype, "diffLanguages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('audioIcons'),
        __metadata("design:type", Object)
    ], MyPicturesComponent.prototype, "audioIcons", void 0);
    MyPicturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-pictures',
            template: __webpack_require__(/*! ./my-pictures.component.html */ "./src/app/my-pictures/my-pictures.component.html"),
            styles: [__webpack_require__(/*! ./my-pictures.component.css */ "./src/app/my-pictures/my-pictures.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MyPicturesComponent);
    return MyPicturesComponent;
}());



/***/ }),

/***/ "./src/app/picture-card-bank/picture-card-bank.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/picture-card-bank/picture-card-bank.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container_fluid_css{\r\n    height: 900px;\r\n    background-color: #000;\r\n}\r\n.container_css{\r\n    width:800px;\r\n    height: 600px;\r\n    background-color: #6598cc;\r\n}\r\n.txt-right{\r\n    text-align: right;\r\n}\r\n.txt-left{\r\n    text-align: left;\r\n}\r\n.title{\r\n   text-shadow: 2px 4px #212529;\r\n   color: #fff;\r\n   padding: 4.5% 1%;\r\n   font-family: cursive;\r\n}\r\n.sub-title-btn{\r\n    color: #fff;\r\n    font-size: 16px;\r\n    background-color: #6598cc;\r\n    border-style: hidden;\r\n}\r\n.padding-30{\r\n    padding: 3.8%;\r\n}\r\n.row_2{\r\n    height: 10%;\r\n    background-color: #bdc7dd;\r\n    padding-top: 2%;\r\n}\r\n.inline{\r\n    display: inline;\r\n}\r\n.select {\r\n    color: #13406f !important;\r\n    font-size: 18px;\r\n    text-shadow: 0 2px 5px #f5fffc;\r\n    -moz-text-shadow: 0 0 2px #fff;\r\n    -webkit-text-shadow: 0 0 2px #fff;\r\n    text-decoration: none;\r\n}\r\n.series{\r\n    color: #ae3737 !important;\r\n    font-size: 20px;\r\n    text-shadow: 0 0 2px #fff;\r\n    -moz-text-shadow: 0 0 2px #fff;\r\n    -webkit-text-shadow: 0 0 2px #fff;\r\n    text-decoration: none;\r\n}\r\n.search{\r\n    display: inline;\r\n    width: 98%;\r\n    margin-top: 2%;\r\n    height: 50%;\r\n    padding-left: 1px;\r\n    float: left;\r\n    font-weight:bold;\r\n    border: 1px solid black;\r\n    border-radius: unset;\r\n}\r\n.row_3{\r\n    background-color: #f6f8e6;\r\n    border-top: 2px solid #5678ae;\r\n    height: 9.5%;\r\n    /* border-bottom: 2px solid #5678ae; */\r\n}\r\n.btn-go{\r\n    border-style: hidden;\r\n    color: #fff;\r\n    width: 8%;\r\n    background-color: #a52121 !important;\r\n    display: inline;\r\n    margin-top: 2%;\r\n    margin-left: 3%;\r\n    box-shadow: 3px 3px 5px 0px #fff \r\n}\r\n.width-50{\r\n    width:50%;\r\n}\r\n.width-100{\r\n    width: 100%;\r\n}\r\n.color_blk{\r\n    background-color: #000 !important;\r\n}\r\n.clr-red{\r\n    color: #a52121 !important;\r\n}\r\n.height-full{\r\n    height: 880px;\r\n}\r\n.subject{\r\n    cursor: pointer !important;\r\n}\r\n.row_4{\r\n    background-color: #dde9ce;\r\n    height: 80%;\r\n}\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n.padding-0{\r\n    padding: 0 !important;\r\n}\r\n.ul_design{\r\n    height:40px;\r\n}\r\n.mg-top-3{\r\n    margin-top: 3%;\r\n}\r\n.ponter{\r\n    cursor: pointer;\r\n}\r\n.section_cat{\r\n    background-color: #dde9ce;\r\n    text-align: left;\r\n    padding-left: 1%;\r\n}\r\n.section_sub{\r\n    background-color: #b4d6b6;\r\n    text-align: left;\r\n    padding-left: 1%;\r\n}\r\n.height-325{\r\n    height: 338px !important;\r\n}\r\n.pad-top-3{\r\n    padding-top: 3%;\r\n}\r\n.mg-top-5{\r\n    margin-top: 2% !important;\r\n}\r\n.width-90{\r\n    width: 85%;\r\n}\r\nimg{\r\n\theight: 55px;\r\n    width: 55px;\t\r\n}\r\n.textBorder{\r\n    text-shadow: -2px 0 white, 0px 1px white, 1px 0 white, 0 -2px white;\r\n}\r\n.hoverEffect:hover{\r\n    text-shadow: -2px 0 #ae3737, 0px 1px #ae3737, 1px 0 #ae3737, 0 -2px #ae3737;\r\n    color: #fff !important;\r\n}\r\ntd > a:hover{\r\n    text-shadow: -2px 0 #ae3737, 0px 1px #ae3737, 1px 0 #ae3737, 0 -2px #ae3737;\r\n    color: #fff !important;\r\n}\r\n.disabled{\r\n    pointer-events: none;\r\n    color: #676767 !important;\r\n}\r\na, p, button{\r\n    font-family: cursive;\r\n}\r\ntd > a{\r\n    font-size: 12px;\r\n}\r\n.catTable{\r\n    text-align: center;\r\n    margin-left: -13px;\r\n}\r\ntable {\r\n    border-collapse:collapse; table-layout:fixed;\r\n}\r\ntable td {\r\n    width:100px; word-wrap:break-word;\r\n}\r\n.shad-btn{\r\n    text-shadow: 2px 3px 1px #000;\r\n}\r\n.disabledBtn{\r\n    pointer-events: none;\r\n}\r\n.btnDirect {\r\n    position: relative;\r\n    padding-left: 14px;\r\n    padding-right: 14px;\r\n    padding-top: 0;\r\n    padding-bottom: 2.8px;\r\n    font-size: 14px;\r\n    height: 22px;\r\n    cursor: pointer;\r\n}\r\n.btnDirect::after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n.btnDirect:hover {\r\n    color: #a52121;\r\n    background-color: #fff !important;\r\n    border: 1px solid #a52121;\r\n}\r\n.next::after {\r\n    right: -22px;\r\n    border-style: solid;\r\n    border-width: 11px;\r\n    border-color: transparent transparent transparent #a52121;\r\n}\r\n.next:hover::after {\r\n    background-color: #fff !important;\r\n}\r\n.sub-title-btn:hover{\r\n    color: #a52121;\r\n}\r\n.white{\r\n    color: #fff;\r\n}\r\na:hover {\r\n    color: #13406f;\r\n}\r\n.fullSelect{\r\n    display: block;\r\n    width: 100%;\r\n    height:100%;\r\n    color: #13406f !important;\r\n    padding-left: 2%;\r\n    padding-top: 1%;\r\n}\r\n.background_shadow {\r\n    text-shadow: -2px 0 white, 0px 2px white, 1px 0 white, 0 -2px white;\r\n}\r\n.color_text{\r\n    color: #476b6b;\r\n}\r\n.red_pointer {\r\n    color: #a52121;\r\n    text-shadow: -2px 0 white, 0px 1px maroon, 1px 0 white, 0 -2px white;\r\n}\r\n.red_pointer:hover {\r\n    font-weight:bold;\r\n}\r\n.red_pointer{\r\n   font-family: cursive;\r\n   text-shadow: 1px 1px #8a9281;\r\n}\r\n/* .tabbable-line{\r\n   margin: 7px 0px 0px 0px;\r\n} */\r\n.out-1{\r\n   /* outline: 1px solid;*/\r\n   border-top: 2px solid #5678ae;\r\n   border-top-right-radius: 25px; \r\n   /* border-bottom: none; */\r\n   border-left: none;\r\n   box-shadow:5px 0px 5px -2px black;\r\n}\r\n.out-2{\r\n   /* outline: 1px solid;*/\r\n   border-top: 2px solid #5678ae;\r\n   border-top-left-radius: 25px; \r\n   /* border-bottom: none; */\r\n   border-left: none;\r\n   box-shadow:-5px 0px 5px -2px black;\r\n}\r\n.brdr_btm{\r\n   border-bottom: none;    \r\n}\r\n.brdr_btm_clr{\r\n   border-bottom: 2px solid #5678ae;\r\n}\r\n.srcCol1{\r\n    padding-top: .8%;\r\n}\r\n.srcCol2{\r\n    padding-top: .3%;\r\n    padding-left: 0%;\r\n}\r\n.srcCol3{\r\n    padding-top: .3%;\r\n    padding-left: 0%;\r\n}\r\n.ft-bold{\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/picture-card-bank/picture-card-bank.component.html":
/*!********************************************************************!*\
  !*** ./src/app/picture-card-bank/picture-card-bank.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center color_blk height-full\">\r\n\r\n  <div class=\"container bg-3 text-center container_css\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7 pull-left txt-left\">\r\n        <h2 class=\"title\">PICTURE CARD BANK</h2>\r\n      </div>\r\n      <div class=\"col-md-5 pull-right txt-right padding-30 white\">\r\n        <button class=\"sub-title-btn subject shad-btn\" (click)=\"myPictures()\">MY PICTURES</button> |\r\n        <button class=\"sub-title-btn subject shad-btn\" (click)=\"exit()\">EXIT</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container bg-3 text-center container1_css\">\r\n      <div class=\"row row_2\">\r\n        <div class=\"col-md-3 pull-left txt-left\">\r\n          <p class=\"inline select pull-left background_shadow\">Select a letter: </p>\r\n        </div>\r\n        <div class=\"col-md-9 pull-right txt-left\">\r\n          <ng-container *ngFor=\"let letter of letters.Letter; let i=index;\">\r\n            <a class=\"inline series pull-right ponter textBorder hoverEffect\" (click)=\"getletter(letter.ID)\" *ngIf=\"i<26\" [class.disabled]=\"letters.Letter[i].disable == 'disable'\">\r\n              {{letter.ID | uppercase}} </a>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row row_3\">\r\n        <div class=\"col-md-12 pull-left txt-left\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-4 srcCol1 \">\r\n              <p class=\"inline select pull-left textBorder background_shadow \">Type in a word or number: </p>\r\n            </div>\r\n            <div class=\"col-md-7 srcCol2\">\r\n              <input type=\"search\" #search class=\" pull-left search\" [(ngModel)]=\"searchTextValue\" (keypress)=\"isAlphabatesKey($event)\" (keyup.enter)=\"getletter(searchTextValue);\">\r\n            </div>\r\n            <div class=\"col-md-1 srcCol3\">\r\n              <button type=\"submit\" class=\"goButtonimg  subject\" (click)=\"getletter(searchTextValue)\" [class.disabledBtn]=\"searchTextValue == null\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row row_4\">\r\n        <div class=\"col-md-12 padding-0\">\r\n          <div class=\"tabbable-panel\">\r\n            <div class=\"tabbable-line\">\r\n              <ul class=\"nav nav-tabs border-blue ul_design\">\r\n                <li class=\"background_shadow active width-50 select out-1 section_cat\">\r\n                  <a class=\"fullSelect\" #tab_default_1 href=\"#tab_default_1\" data-toggle=\"tab\" (click)=\"tabDefault1Selected()\">\r\n                    Select a category: </a>\r\n                </li>\r\n                <li class=\"background_shadow width-50 select section_sub out-2\">\r\n                  <a class=\"fullSelect\" #tab_default_2 href=\"#tab_default_2\" data-toggle=\"tab\" (click)=\"tabDefault2Selected()\">\r\n                    Select a school subject:</a>\r\n                </li>\r\n              </ul>\r\n              <div class=\"tab-content\">\r\n                <div class=\"tab-pane active section_cat\" id=\"tab_default_1\">\r\n                  <table *ngIf=\"categories\" class=\"mg-top-3 catTable\">\r\n                    <tr>\r\n                      <ng-container *ngFor=\"let number of [64,'30a',97,68,118,70,91,52]; let i= index;\">\r\n                        <td>\r\n                          <img class=\"ponter\" src=\"./assets/pict_media/thumb/{{number}}.jpg\" (click)=\"category(categories.Category[i].ID)\" />\r\n                        </td>\r\n                      </ng-container>\r\n                    </tr>\r\n                    <tr>\r\n                      <ng-container *ngFor=\"let cat of categories.Category | slice:0:8\">\r\n                        <td>\r\n                          <a class=\"clr-red ponter red_pointer\" (click)=\"category(cat.ID)\"> {{cat.ID}} </a>\r\n                        </td>\r\n                      </ng-container>\r\n                    </tr>\r\n                    <tr>\r\n                      <ng-container *ngFor=\"let number of ['102c','114d','115c',10,55,'122a','57a',40]; let i= index;\">\r\n                        <td>\r\n                          <img class=\"clr-red ponter red_pointer\" src=\"./assets/pict_media/thumb/{{number}}.jpg\" (click)=\"category(categories.Category[i+8].ID)\"\r\n                          />\r\n                        </td>\r\n                      </ng-container>\r\n                    </tr>\r\n                    <tr>\r\n                      <ng-container *ngFor=\"let cat of categories.Category| slice:8:16\">\r\n                        <td>\r\n                          <a class=\"clr-red ponter red_pointer\" (click)=\"category(cat.ID)\"> {{cat.ID}} </a>\r\n                        </td>\r\n                      </ng-container>\r\n                    </tr>\r\n                    <tr>\r\n                      <ng-container *ngFor=\"let number of [74,'67a',53,'3a','29b','80c']; let i=index;\">\r\n                        <td>\r\n                          <img class=\"ponter\" src=\"./assets/pict_media/thumb/{{number}}.jpg\" (click)=\"category(categories.Category[i+16].ID)\" />\r\n                        </td>\r\n                      </ng-container>\r\n                    </tr>\r\n                    <tr>\r\n                      <ng-container *ngFor=\"let cat of categories.Category| slice:16:23\">\r\n                        <td>\r\n                          <a class=\"clr-red ponter red_pointer\" (click)=\"category(cat.ID)\"> {{cat.ID}} </a>\r\n                        </td>\r\n                      </ng-container>\r\n                    </tr>\r\n\r\n                  </table>\r\n                </div>\r\n                <div class=\"tab-pane section_sub height-325 pad-top-3\" id=\"tab_default_2\">\r\n\r\n                  <table *ngIf=\"subjects\" class=\"width-100 \" style=\"margin-left: 24px;\">\r\n                    <tr>\r\n                      <ng-container *ngFor=\"let sub of subjects.subject\">\r\n                        <td>\r\n                          <a class=\"clr-red ponter subject ft-bold\" (click)=\"subject(sub.id)\"> {{sub.id}}</a>\r\n                        </td>\r\n                      </ng-container>\r\n                    </tr>\r\n                  </table>\r\n\r\n                  <table class=\"width-100 mg-top-5 text-center\">\r\n                    <tr>\r\n                      <ng-container *ngFor=\"let sub of subjectLessonData\">\r\n                        <ng-container *ngFor=\"let health of sub.subject_data | slice:0:7; let i= index;\">\r\n                          <td>\r\n                            <img class=\"ponter\" src=\"./assets/pict_media/thumb/{{health.image}}.jpg\" (click)=\"fetchSubjectHealth(sub.subject_data[i].ID)\"\r\n                            />\r\n                          </td>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                    </tr>\r\n                    <tr>\r\n                      <ng-container *ngFor=\"let sub of subjectLessonData\">\r\n                        <ng-container *ngFor=\"let health of sub.subject_data | slice:0:7\">\r\n                          <td>\r\n                            <a class=\"clr-red ponter\" (click)=\"fetchSubjectHealth(health.ID)\"> {{health.ID}}</a>\r\n                          </td>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                    </tr>\r\n                  </table>\r\n                  <table class=\"mg-top-5 width-90 text-center\">\r\n                    <tr>\r\n                      <ng-container *ngFor=\"let sub of subjectLessonData\">\r\n                        <ng-container *ngFor=\"let health of sub.subject_data | slice:7:15; let i= index;\">\r\n                          <td>\r\n                            <img class=\"ponter\" src=\"./assets/pict_media/thumb/{{health.image}}.jpg\" (click)=\"fetchSubjectHealth(sub.subject_data[i+7].ID)\"\r\n                            />\r\n                          </td>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                    </tr>\r\n                    <tr>\r\n                      <ng-container *ngFor=\"let sub of subjectLessonData\">\r\n                        <ng-container *ngFor=\"let health of sub.subject_data | slice:7:15\">\r\n                          <td>\r\n                            <a class=\"clr-red ponter\" (click)=\"fetchSubjectHealth(health.ID)\"> {{health.ID}}</a>\r\n                          </td>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                    </tr>\r\n                  </table>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/picture-card-bank/picture-card-bank.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/picture-card-bank/picture-card-bank.component.ts ***!
  \******************************************************************/
/*! exports provided: PictureCardBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureCardBankComponent", function() { return PictureCardBankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PictureCardBankComponent = /** @class */ (function () {
    function PictureCardBankComponent(httpService, _route, _router) {
        this.httpService = httpService;
        this._route = _route;
        this._router = _router;
        this.categories = [];
        this.letters = [];
        this.subjects = [];
        this.subjectLessonData = [];
        this.status = false;
    }
    PictureCardBankComponent.prototype.ngOnInit = function () {
        var _this = this;
        var beginSearchState = localStorage.getItem('beginSearchState');
        if (beginSearchState == 'searchDisplayPicture') {
            this.tabDefault1Selected();
        }
        this.httpService.get('./assets/json/category.json').subscribe(function (data) {
            _this.categories = data; // FILL THE ARRAY WITH DATA.
        }, function (err) {
            console.log(err.message);
        });
        this.httpService.get('./assets/json/letter.json').subscribe(function (data) {
            _this.letters = data; // FILL THE ARRAY WITH DATA.
        }, function (err) {
            console.log(err.message);
        });
        this.httpService.get('./assets/json/subject.json').subscribe(function (data) {
            _this.subjects = data; // FILL THE ARRAY WITH DATA.
            if (beginSearchState == 'searchDisplayPicture') {
                return;
            }
            else {
                var selectedTabNo = localStorage.getItem('selectedTabNo');
                if (!selectedTabNo || Number(selectedTabNo) == 1) {
                    _this.tabDefault1Selected();
                }
                else {
                    _this.tabDefault2Selected();
                    _this.subject(localStorage.getItem('subject'));
                }
            }
        }, function (err) {
            console.log(err.message);
        });
    };
    PictureCardBankComponent.prototype.subject = function (sub) {
        this.playAudio();
        localStorage.setItem('subjectValue', sub);
        localStorage.setItem('subject', sub);
        this.subjectLessonData = [];
        var subsubject;
        subsubject = this.subjects.subject;
        for (var i = 0; i < subsubject.length; i++) {
            if (subsubject[i].id == sub) {
                var obj = { subject_data: subsubject[i][sub] };
                this.subjectLessonData.push(obj);
            }
        }
    };
    PictureCardBankComponent.prototype.category = function (cat_val) {
        this.playAudio();
        localStorage.setItem('categoryValue', cat_val);
        this._router.navigate(['/displayPicture'], { skipLocationChange: true });
    };
    PictureCardBankComponent.prototype.getletter = function (letter_val) {
        this.playAudio();
        letter_val = letter_val.toLowerCase();
        if (letter_val) {
            var searchLetterValue = letter_val.charAt(0);
        }
        if (letter_val && !letter_val.trim() || letter_val == '' || searchLetterValue == 0) {
            return;
        }
        else {
            var trimLetterVal = letter_val.trim();
            localStorage.setItem('letterValue', trimLetterVal);
            this._router.navigate(['/displayPicture'], { skipLocationChange: true });
        }
    };
    PictureCardBankComponent.prototype.myPictures = function () {
        this.playClickSound(null);
        localStorage.setItem('backBtnState', "");
        this._router.navigate(['/myPictures'], { skipLocationChange: true });
    };
    PictureCardBankComponent.prototype.exit = function () {
        this.playClickSound(null);
        this._router.navigate(['/exit'], { skipLocationChange: true });
    };
    PictureCardBankComponent.prototype.fetchSubjectHealth = function (health_val) {
        this.playAudio();
        localStorage.setItem('healthValue', health_val);
        this._router.navigate(['/displayPicture'], { skipLocationChange: true });
    };
    PictureCardBankComponent.prototype.isAlphabatesKey = function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 32 && charCode < 48) || (charCode > 57 && charCode < 65) || (charCode > 122 && charCode < 256) || (charCode > 90 && charCode < 97))
            return false;
        return true;
    };
    PictureCardBankComponent.prototype.playClickSound = function (selectedTabNo) {
        if (selectedTabNo) {
            localStorage.setItem('selectedTabNo', selectedTabNo);
        }
        var audio = new Audio();
        audio.src = "./assets/pict_media/onclick_audio/onClick.mp3";
        audio.load();
        audio.play();
    };
    PictureCardBankComponent.prototype.tabDefault1Selected = function () {
        this.tabDefault1.nativeElement.click();
        this.playClickSound(1);
        this.subjectLessonData = [];
        this.searchTextValue = "";
        this.tabDefault1.nativeElement.parentNode.classList.add("brdr_btm");
        this.tabDefault1.nativeElement.parentNode.classList.remove("brdr_btm_clr");
        this.tabDefault2.nativeElement.parentNode.classList.remove("brdr_btm");
        this.tabDefault2.nativeElement.parentNode.classList.add("brdr_btm_clr");
    };
    PictureCardBankComponent.prototype.tabDefault2Selected = function () {
        this.tabDefault2.nativeElement.click();
        this.playClickSound(2);
        this.searchTextValue = "";
        this.tabDefault2.nativeElement.parentNode.classList.add("brdr_btm");
        this.tabDefault2.nativeElement.parentNode.classList.remove("brdr_btm_clr");
        this.tabDefault1.nativeElement.parentNode.classList.remove("brdr_btm");
        this.tabDefault1.nativeElement.parentNode.classList.add("brdr_btm_clr");
    };
    PictureCardBankComponent.prototype.playAudio = function () {
        var audio = new Audio();
        audio.src = "./assets/pict_media/onclick_audio/onClick.mp3";
        audio.load();
        audio.play();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tab_default_1'),
        __metadata("design:type", Object)
    ], PictureCardBankComponent.prototype, "tabDefault1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tab_default_2'),
        __metadata("design:type", Object)
    ], PictureCardBankComponent.prototype, "tabDefault2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        __metadata("design:type", Object)
    ], PictureCardBankComponent.prototype, "search", void 0);
    PictureCardBankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-picture-card-bank',
            template: __webpack_require__(/*! ./picture-card-bank.component.html */ "./src/app/picture-card-bank/picture-card-bank.component.html"),
            styles: [__webpack_require__(/*! ./picture-card-bank.component.css */ "./src/app/picture-card-bank/picture-card-bank.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PictureCardBankComponent);
    return PictureCardBankComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! D:\chanchal\POC\chanchal_updates\pictureCardBank\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map