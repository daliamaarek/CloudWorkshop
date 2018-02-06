webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* @import \"../assets/bootstrap/variables-blue\"; */\n\nbody {\n  background: #242424;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: auto;\n\ttext-align: center;\n\tcolor: #fff;\n\tpadding: 3em;\n\t.col-lg-4 {\n\t\tpadding :0;\n\t}\n}\n\na {\n\t\tcursor: pointer;\n\t}\n\nh1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 40px;\n    color: #fee202;\n      /* font-size: 20px; */\n      /* font-weight: 300; */\n    font-family: 'Josefin Slab', sans-serif;\n    margin-top: 150px;\n\n    margin-bottom: 50x;\n    /* } */\n  }\n\nh2 {\n    font-size: 20px;\n    font-family: 'Josefin Slab', sans-serif;\n  }\n\n.input-lg {\n\t    height: 46px;\n\t    padding: 10px 16px;\n\t    font-size: 18px !important;\n\t    line-height: 1.3333333;\n\t    border-radius: 0;\n\t}\n\n.input-underline {\n\t    background: 0 0;\n\t    border: none;\n\t    -webkit-box-shadow: none;\n\t            box-shadow: none;\n\t    border-bottom: 2px solid #FFF;\n\t    color: #ffeac9;\n\t    border-radius: 0;\n      font-size:24px;\n      font-family: 'Josefin Slab', sans-serif;\n\t}\n\n.input-underline:focus {\n\t    border-bottom: 2px solid #FFF;\n\t    -webkit-box-shadow: none;\n\t            box-shadow: none;\n\t}\n\n.rounded-btn{\n\t\tborder-radius: 10px;\n\t\tcolor: #FFF;\n\t\tbackground: #242424;\n\t\tborder: 0px solid rgba(255,255,255,0.8);\n\t\tfont-size: 20px;\n    font-family: 'Josefin Slab';\n\t    line-height: 22px;\n\t    padding: 0 5px;\n\t}\n\n.rounded-btn:hover,.rounded-btn:focus,.rounded-btn:active,.rounded-btn:visited{\n\t\tcolor: #fee202;\n\t\tborder: 0px solid rgba(255,255,255,1);\n\t\toutline: none;\n\t}\n\n.form-group {\n\t\tpadding: 8px 0;\n\t\tinput::-webkit-input-placeholder {\n\t\tcolor: rgba(255,255,255,0.6) !important;\n\t\t}\n\n\t\tinput:-moz-placeholder {\n\t\tcolor: rgba(255,255,255,0.6) !important;\n\t\t}\n\n\t\tinput:-ms-input-placeholder {\n\t\tcolor: rgba(255,255,255,0.6) !important;\n\t\t}\n\t}\n\n.form-content {\n\t\tpadding: 40px 0;\n\t}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <html lang=\"en\" >\n  <head>\n    <link href=\"http://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed|Alegreya:700\" rel=\"stylesheet\" type=\"text/css\" />\n<link href=\"http://fonts.googleapis.com/css?family=Oswald:700|Droid+Serif:400,700italic\" rel=\"stylesheet\" type=\"text/css\" />\n<link href=\"https://fonts.googleapis.com/css?family=Cairo|Josefin+Slab\" rel=\"stylesheet\">\n\n  </head>\n  <body ng-app=\"AppComponent\" ng-cloak ng->\n    <div style = \"text-align: center\">\n        <h1> {{title}} </h1>\n      <div padding:10px>\n        <input #box type=\"text\" class = \"input-underline\" required md-maxlength=\"10\">\n        <button class = \"rounded-btn\" (click) = \"sendRequest(box.value)\">Send</button>\n      </div>\n      <h2> {{ (AlfredResponse | async)?.message }} </h2>\n    </div>\n\n  </body>\n\n  </html>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(appSvc) {
        this.appSvc = appSvc;
        this.title = 'Alfred';
    }
    AppComponent.prototype.sendRequest = function (value) {
        if (value) {
            var x = this.appSvc.sendRequest(value);
            console.log(x);
            this.AlfredResponse = x;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]])
    ], AppComponent);
    return AppComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        // private port = (process.env.VCAP_APP_PORT || 3000);
        // private host = (process.env.VCAP_APP_HOST|| "localhost");
        this.port = 3000;
        this.host = 'localhost';
        this.body = "ok";
    }
    AppService.prototype.sendRequest = function (req) {
        console.log(JSON.stringify(req));
        return this.http.post('https://alfred-backend.cfapps.io', { message: req })
            .toPromise()
            .then(function (data) {
            return data.json();
        });
    };
    AppService.prototype.getRequest = function () {
        console.log("get request!");
        return this.http.get('https://alfred-backend.cfapps.io')
            .toPromise()
            .then(function (data) {
            return data.json();
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map