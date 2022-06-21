"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
        this.slideOpts = {
            centeredSlides: false,
            initialSlide: 0,
            slidesPerView: 2.1,
            spaceBetween: 0
        };
        this.slides = [
            {
                icon: '/assets/icons/brain.svg',
                name: 'Mind',
                backgroundColor: '#ff4133',
                count: 3
            },
            { icon: '/assets/icons/happy.svg',
                name: 'Body',
                backgroundColor: '#ffb580',
                count: 5
            },
            {
                icon: '/assets/icons/home.svg',
                name: 'Relationships',
                backgroundColor: '#9780ff',
                count: 2
            },
            {
                icon: '/assets/icons/email.svg',
                name: 'Wealth',
                backgroundColor: '#80b7ff',
                count: 1
            },
            {
                icon: '/assets/icons/email.svg',
                name: 'Work',
                backgroundColor: '#d5d5d5',
                count: 1
            }
        ];
    }
    CalledR(name, up, degree, down) {
        console.log(name);
        let navigationExtras = {
            state: {
                name: name,
                up: up,
                degrees: degree,
                down: down
            }
        };
        this.router.navigate(['tabs/details'], navigationExtras);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ".donut-bg {\n  background: url('donut.png') no-repeat;\n  background-size: 80%;\n  background-repeat: none;\n  background-position-y: center;\n  background-origin: padding-box;\n  background-position: center;\n  margin-top: 50px;\n  padding: 12%;\n}\n\n.blue-area {\n  height: 120px;\n  width: 100%;\n  background-color: transparent;\n}\n\n.text1 {\n  padding-left: 10px;\n  display: inline-block;\n  font-size: 15px;\n}\n\n.label-icon1 {\n  font-size: 30px;\n  text-align: left;\n}\n\n.pink-area {\n  height: 120px;\n  width: 100%;\n  background-color: transparent;\n}\n\n.text2 {\n  padding-left: 10px;\n  display: inline-block;\n  font-size: 15px;\n}\n\n.label-icon2 {\n  font-size: 30px;\n  margin-left: 50px;\n}\n\n.yellow-area {\n  margin-top: -20px;\n  height: 120px;\n  width: 100%;\n  background-color: transparent;\n}\n\n.text3 {\n  padding-left: 10px;\n  display: inline-block;\n  font-size: 15px;\n}\n\n.label-icon3 {\n  font-size: 30px;\n  margin-top: 40px;\n  margin-left: -50px;\n}\n\n.purple-area {\n  margin-top: -20px;\n  height: 120px;\n  width: 100%;\n  background-color: transparent;\n}\n\n.text4 {\n  padding-left: 10px;\n  display: inline-block;\n  font-size: 15px;\n}\n\n.label-icon4 {\n  margin-top: 40px;\n  margin-left: 50px;\n  font-size: 30px;\n}\n\n.green-area {\n  height: 120px;\n  width: 100%;\n  background-color: transparent;\n}\n\n.text5 {\n  padding-left: 10px;\n  display: inline-block;\n  font-size: 15px;\n}\n\n.label-icon5 {\n  margin-top: 80px;\n  font-size: 30px;\n  text-align: center;\n}\n\nion-slide {\n  width: 180px !important;\n}\n\nion-card {\n  width: 250px !important;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.icon {\n  font-size: 30px;\n  text-align: left;\n}\n\nh5 {\n  margin-top: -1px;\n  text-align: left;\n  font-size: 14px;\n  color: black;\n}\n\np {\n  margin-top: -1px;\n  text-align: left;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBRUE7RUFFRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtBQUdIOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFDQTtFQUVFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDRCxrQkFBQTtBQUdEOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUVBO0VBRUUsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBRUE7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvbnV0LWJne1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZG9udXQucG5nJykgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6ODAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm9uZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOjUwcHg7XG4gIHBhZGRpbmc6MTIlO1xuICBcbn1cbi5ibHVlLWFyZWF7XG4gIGhlaWdodDoxMjBweDtcbiAgd2lkdGg6MTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudFxufVxuXG4udGV4dDF7XG4gIHBhZGRpbmctbGVmdDoxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZToxNXB4O1xufVxuLmxhYmVsLWljb24xe1xuICBmb250LXNpemU6MzBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcblxufVxuXG4ucGluay1hcmVhe1xuICBcbiAgaGVpZ2h0OjEyMHB4O1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50XG59XG4udGV4dDJ7XG4gIHBhZGRpbmctbGVmdDoxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZToxNXB4O1xufVxuLmxhYmVsLWljb24ye1xuICBmb250LXNpemU6MzBweDtcbiAgbWFyZ2luLWxlZnQ6NTBweDtcblxufVxuXG4ueWVsbG93LWFyZWF7XG4gIG1hcmdpbi10b3A6LTIwcHg7XG4gIGhlaWdodDoxMjBweDtcbiAgd2lkdGg6MTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudFxufVxuLnRleHQze1xuICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6MTVweDtcbn1cbi5sYWJlbC1pY29uM3tcbiAgZm9udC1zaXplOjMwcHg7XG4gICBtYXJnaW4tdG9wOjQwcHg7XG4gICBtYXJnaW4tbGVmdDotNTBweDtcblxufVxuXG4ucHVycGxlLWFyZWF7XG4gIG1hcmdpbi10b3A6LTIwcHg7XG4gIGhlaWdodDoxMjBweDtcbiAgd2lkdGg6MTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudFxufVxuLnRleHQ0e1xuICBwYWRkaW5nLWxlZnQ6MTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6MTVweDtcbn1cbi5sYWJlbC1pY29uNHtcbiAgbWFyZ2luLXRvcDo0MHB4O1xuICBtYXJnaW4tbGVmdDo1MHB4O1xuICBmb250LXNpemU6MzBweDtcbiBcblxufVxuXG4uZ3JlZW4tYXJlYXtcbiBcbiAgaGVpZ2h0OjEyMHB4O1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50XG59XG4udGV4dDV7XG4gIHBhZGRpbmctbGVmdDoxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZToxNXB4O1xufVxuLmxhYmVsLWljb241e1xuICBtYXJnaW4tdG9wOjgwcHg7XG4gIGZvbnQtc2l6ZTozMHB4O1xuIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG5pb24tc2xpZGV7XG4gIHdpZHRoOjE4MHB4IWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmR7XG4gIHdpZHRoOjI1MHB4IWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6MTBweDtcbiAgcGFkZGluZy1ib3R0b206MTBweDtcbiAgcGFkZGluZy1yaWdodDoxMHB4O1xuICBwYWRkaW5nLWxlZnQ6MTBweDtcbn1cblxuLmljb257XG4gIGZvbnQtc2l6ZTozMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG59XG5cbmg1e1xuIFxuICBtYXJnaW4tdG9wOi0xcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZToxNHB4O1xuICBjb2xvcjpibGFjaztcbn1cbnB7XG4gIFxuICBtYXJnaW4tdG9wOi0xcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiNmZmY7XG59XG5cblxuIl19 */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-row class=\"donut-bg ion-no-padding\">\n\n   <ion-col size=\"6\"  (click)=\"CalledR('mind',90,180,270)\" >\n    <div class=\"blue-area\">\n      <ion-icon [src]=\"slides[0].icon\" class=\"label-icon1\" ></ion-icon>\n     <h1 class=\"text1\">Mind</h1>\n    </div>\n   </ion-col>\n   <ion-col size=\"6\" (click)=\"CalledR('body',360,90,180)\">\n    <div class=\"pink-area\">\n      <ion-icon [src]=\"slides[1].icon\" class=\"label-icon2\" ></ion-icon>\n     <h1 class=\"text2\">Body</h1>\n    </div>\n   </ion-col>\n\n   <ion-col size=\"6\" (click)=\"CalledR('Relationships',180,270,45)\">\n    <h1></h1>\n   </ion-col>\n   <ion-col size=\"6\"  (click)=\"CalledR('body',360,90,180)\" >\n    <h1></h1>\n   </ion-col>\n\n   <ion-col size=\"6\"  (click)=\"CalledR('Relationships',180,270,45)\">\n    <div class=\"yellow-area\">\n      <ion-icon [src]=\"slides[2].icon\" class=\"label-icon3\" ></ion-icon>\n     <h1 class=\"text3\">Relationships</h1>\n    </div> \n   </ion-col>\n   <ion-col size=\"6\" class=\"ion-text-left\" (click)=\"CalledR('wealth',45,360,90)\">\n    <div class=\"purple-area\">\n      <ion-icon [src]=\"slides[3].icon\" class=\"label-icon4\" ></ion-icon>\n     <h1 class=\"text4\">Wealth</h1>\n    </div>\n  </ion-col>\n\n    <ion-col size=\"12\" class=\"ion-text-center\" (click)=\"CalledR('work',270,45,360)\">\n      <div class=\"green-area\">\n        <ion-icon [src]=\"slides[4].icon\" class=\"label-icon5\" ></ion-icon>\n       <h1 class=\"text5\">Work</h1>\n      </div>\n     </ion-col>\n    \n  \n   \n  \n  </ion-row>\n\n  <ion-slides [options]=\"slideOpts\" >\n    <ion-slide  *ngFor=\"let a of slides\" >\n      <ion-card [style.background]=\"a.backgroundColor\" class=\"ion-text-left\">\n        <ion-icon [src]=\"a.icon\" class=\"icon\" ></ion-icon>\n        <h5>\n          {{a.name}}\n        </h5>\n        <p>{{a.count}} in progress</p>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n\n \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map