"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_details_details_module_ts"],{

/***/ 5048:
/*!***************************************************!*\
  !*** ./src/app/details/details-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 1735);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ 396:
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 5048);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 1735);







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage]
    })
], DetailsPageModule);



/***/ }),

/***/ 1735:
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page.html?ngResource */ 3877);
/* harmony import */ var _details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page.scss?ngResource */ 7437);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let DetailsPage = class DetailsPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.button1 = false;
        this.button2 = false;
        this.button3 = false;
        this.button4 = false;
        this.button5 = false;
        this.myCustomIcon = "/assets/icons/brain.svg";
        this.myCustomIcon2 = "/assets/icons/happy.svg";
        this.steps = [
            {
                no: 1,
                checked: true
            },
            {
                no: 2,
                checked: true
            },
            {
                no: 3,
                checked: true
            },
            {
                no: 4,
                checked: false
            },
            {
                no: 5,
                checked: false
            }
        ];
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.name = this.router.getCurrentNavigation().extras.state.name;
                this.up = this.router.getCurrentNavigation().extras.state.up;
                this.down = this.router.getCurrentNavigation().extras.state.down;
                this.degrees = this.router.getCurrentNavigation().extras.state.degrees;
                console.log('up', this.up);
                console.log('degrees', this.degrees);
                console.log('down', this.down);
                this.rotateImage();
                if (this.name == 'mind') {
                    this.button1 = true;
                    this.button2 = false;
                    this.button3 = false;
                    this.button4 = false;
                    this.button5 = false;
                }
                else if (this.name == 'body') {
                    this.button2 = true;
                    this.button1 = false;
                    this.button3 = false;
                    this.button4 = false;
                    this.button5 = false;
                }
                else if (this.name == 'Relationships') {
                    this.button3 = true;
                    this.button2 = false;
                    this.button1 = false;
                    this.button4 = false;
                    this.button5 = false;
                }
                else if (this.name == 'wealth') {
                    this.button4 = true;
                    this.button2 = false;
                    this.button3 = false;
                    this.button1 = false;
                    this.button5 = false;
                }
                else if (this.name == 'work') {
                    this.button4 = false;
                    this.button2 = false;
                    this.button3 = false;
                    this.button1 = false;
                    this.button5 = true;
                }
            }
        });
    }
    ngOnInit() {
    }
    rotateImage2(num) {
        this.degrees = (num + 90) % 360;
        console.log(this.degrees);
        if (this.degrees == 180) {
            this.up = 360;
            this.down = 180;
            this.button1 = false;
            this.button2 = true;
            this.button3 = false;
            this.button4 = false;
            this.button5 = false;
        }
        else if (this.degrees == 90) {
            this.up = 45;
            this.down = 90;
            this.button2 = false;
            this.button1 = false;
            this.button3 = false;
            this.button4 = true;
            this.button5 = false;
        }
        else if (this.degrees == 135) {
            this.up = 270;
            this.down = 360;
            this.button5 = true;
            this.button2 = false;
            this.button3 = false;
            this.button1 = false;
            this.button4 = false;
        }
        else if (this.degrees == 0) {
            this.up = 180;
            this.down = 45;
            this.button3 = true;
            this.button4 = false;
            this.button5 = false;
            this.button2 = false;
            this.button1 = false;
        }
        else if (this.degrees == 270) {
            this.up = 90;
            this.down = 270;
            this.button1 = true;
            this.button2 = false;
            this.button3 = false;
            this.button4 = false;
            this.button5 = false;
        }
        // console.log('up',this.up)
        // console.log('degree',this.degrees)
        // console.log('down',this.down)
        this.img.className = "rotate" + this.degrees;
    }
    rotateImage() {
        this.img = document.getElementById('container');
        this.degrees = (this.degrees + 90) % 360;
        this.img.className = "rotate" + this.degrees;
    }
    segmentChanged(event) {
        console.log('ye call hwa');
        this.name = event.target.value;
        if (event.target.value == 'mind') {
            this.button1 = true;
            this.button2 = false;
            this.button3 = false;
            this.button4 = false;
            this.button5 = false;
            this.up = 90;
            this.down = 270;
            this.degrees = 180;
            this.rotateImage();
        }
        else if (event.target.value == 'body') {
            this.button2 = true;
            this.button1 = false;
            this.button3 = false;
            this.button4 = false;
            this.button5 = false;
            this.up = 360;
            this.degrees = 90;
            this.down = 180;
            this.rotateImage();
        }
        else if (event.target.value == 'Relationships') {
            this.button3 = true;
            this.button2 = false;
            this.button1 = false;
            this.button4 = false;
            this.button5 = false;
            this.up = 180;
            this.degrees = 270;
            this.down = 45;
            this.rotateImage();
        }
        else if (event.target.value == 'wealth') {
            this.button4 = true;
            this.button2 = false;
            this.button3 = false;
            this.button1 = false;
            this.button5 = false;
            this.up = 45;
            this.degrees = 360;
            this.down = 90;
            this.rotateImage();
        }
        else if (event.target.value == 'work') {
            this.button5 = true;
            this.button4 = false;
            this.button2 = false;
            this.button3 = false;
            this.button1 = false;
            this.up = 270;
            this.degrees = 45;
            this.down = 360;
            this.rotateImage();
        }
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-details',
        template: _details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailsPage);



/***/ }),

/***/ 7437:
/*!******************************************************!*\
  !*** ./src/app/details/details.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".ion-segment {\n  --background:#ffff;\n}\n\n.ion-segment-button {\n  --indicator-color:#fff;\n}\n\n.bg-image {\n  object-position: 250% 0%;\n  margin-left: 50%;\n  height: 250px;\n}\n\n.button1 {\n  width: 100px;\n  height: 50px;\n  margin-left: 75%;\n  z-index: 10;\n  position: absolute;\n  background-color: transparent;\n}\n\n.button2 {\n  width: 100px;\n  height: 50px;\n  margin-left: 75%;\n  z-index: 10;\n  position: absolute;\n  background-color: transparent;\n  margin-top: -50px;\n}\n\n#container.rotate0 {\n  margin-left: 50%;\n  transition: 0.5s;\n  transform: rotate(380deg);\n  -webkit-transform: rotate(380deg);\n  -ms-transform: rotate(380deg);\n}\n\n#container.rotate90 {\n  margin-left: 50%;\n  transition: 0.5s;\n  transform: rotate(150deg);\n  -webkit-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n}\n\n#container.rotate135 {\n  margin-left: 50%;\n  transition: 0.5s;\n  transform: rotate(90deg);\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n}\n\n#container.rotate180 {\n  margin-left: 50%;\n  transition: 0.5s;\n  transform: rotate(240deg);\n  -webkit-transform: rotate(240deg);\n  -ms-transform: rotate(240deg);\n}\n\n#container.rotate270 {\n  margin-left: 50%;\n  transition: 0.5s;\n  transform: rotate(300deg);\n  -webkit-transform: rotate(300deg);\n  -ms-transform: rotate(300deg);\n}\n\n#container.rotate360 {\n  margin-left: 50%;\n  transition: 0.5s;\n  transform: rotate(360deg);\n  -webkit-transform: rotate(360deg);\n  -ms-transform: rotate(360deg);\n}\n\n.icon-start {\n  font-size: 40px;\n  margin-left: 10px;\n  margin-top: 30px;\n  padding: 0 !important;\n}\n\n.title {\n  margin-top: -50px;\n  margin-left: 20%;\n  font-size: 20px;\n}\n\n.text {\n  font-size: 16px;\n  margin-left: 20%;\n  margin-top: -5px;\n}\n\n.icon-end {\n  font-size: 25px;\n  float: right;\n  margin-top: -60px;\n}\n\n.progressbar-wrapper {\n  position: relative;\n  z-index: 1;\n  border: 1px solid lightgray;\n  border-radius: 12px;\n  background-color: #e3ffe4;\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.progressbar {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  border-radius: 12px;\n  background-color: #30f93a;\n  z-index: -1;\n}\n\n.progressbar-wrapper2 {\n  position: relative;\n  z-index: 1;\n  border: 1px solid lightgray;\n  border-radius: 12px;\n  background-color: #ffe9e3;\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.progressbar2 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n  background-color: #f93030;\n  z-index: -1;\n}\n\n.progressbar-wrapper3 {\n  position: relative;\n  z-index: 1;\n  border: 1px solid lightgray;\n  border-radius: 12px;\n  background-color: #fffae3;\n  margin: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.progressbar3 {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  border-top-left-radius: 12px;\n  border-bottom-left-radius: 12px;\n  background-color: #f99130;\n  z-index: -1;\n}\n\n.hl {\n  margin-top: 5px;\n  margin-left: 18px;\n  border-left: 6px solid green;\n  height: 100%;\n  position: absolute;\n}\n\n.hl2 {\n  margin-left: 18px;\n  border-left: 6px solid gray;\n  height: 100%;\n  position: absolute;\n}\n\n.circle {\n  margin-top: -5px;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  border: 1px solid grey;\n  font-size: 30px;\n  text-align: center;\n  left: 0;\n  position: relative;\n  background-color: green;\n  color: #fff;\n}\n\n.circle2 {\n  margin-top: 8px;\n  font-size: 30px;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  border: 1px solid grey;\n  left: 0;\n  text-align: center;\n  background-color: gray;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7QUFESjs7QUFLQTtFQUNJLHNCQUFBO0FBRko7O0FBS0E7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUZKOztBQU1BO0VBQ0UsWUFBQTtFQUNDLFlBQUE7RUFDRCxnQkFBQTtFQUNGLFdBQUE7RUFDQSxrQkFBQTtFQUNFLDZCQUFBO0FBSEY7O0FBS0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNELGdCQUFBO0VBQ0QsV0FBQTtFQUNBLGtCQUFBO0VBQ0MsNkJBQUE7RUFDQSxpQkFBQTtBQUZEOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtBQUZKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtBQURKOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtBQUFKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2QkFBQTtBQUVKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDRixxQkFBQTtBQUNGOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0MseUJBQUE7RUFDRCxZQUFBO0VBRUEsMENBQUE7QUFDSjs7QUFFQTtFQUVJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLFdBQUE7QUFESjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQyx5QkFBQTtFQUNELFlBQUE7RUFFQSwwQ0FBQTtBQUZGOztBQUtBO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0MseUJBQUE7RUFDRCxZQUFBO0VBRUEsMENBQUE7QUFKRjs7QUFPQTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUxGOztBQVFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDRixZQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRRTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDRixZQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0QsdUJBQUE7RUFDQSxXQUFBO0FBTEg7O0FBUUU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFMSiIsImZpbGUiOiJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uaW9uLXNlZ21lbnR7XG4gICAgLS1iYWNrZ3JvdW5kOiNmZmZmO1xuIFxuICBcbn1cbi5pb24tc2VnbWVudC1idXR0b257XG4gICAgLS1pbmRpY2F0b3ItY29sb3I6I2ZmZjtcbn1cblxuLmJnLWltYWdle1xuICAgIG9iamVjdC1wb3NpdGlvbjogMjUwJSAwJTtcbiAgICBtYXJnaW4tbGVmdDo1MCU7XG4gICAgaGVpZ2h0OjI1MHB4O1xuXG5cbn1cbi5idXR0b24xe1xuICB3aWR0aDoxMDBweDtcbiAgIGhlaWdodDo1MHB4O1xuICBtYXJnaW4tbGVmdDo3NSU7XG56LWluZGV4OiAxMDtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uYnV0dG9uMntcbiAgd2lkdGg6MTAwcHg7XG4gIGhlaWdodDo1MHB4O1xuIG1hcmdpbi1sZWZ0Ojc1JTtcbnotaW5kZXg6IDEwO1xucG9zaXRpb246IGFic29sdXRlO1xuIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuIG1hcmdpbi10b3A6LTUwcHg7XG59XG5cbiNjb250YWluZXIucm90YXRlMCAge1xuICAgIG1hcmdpbi1sZWZ0OjUwJTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM4MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzODBkZWcpIDtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzgwZGVnKSA7XG4gIH1cblxuI2NvbnRhaW5lci5yb3RhdGU5MCAge1xuICAgIG1hcmdpbi1sZWZ0OjUwJTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpIDtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKSA7XG4gIH1cbiAgI2NvbnRhaW5lci5yb3RhdGUxMzUgIHtcbiAgICBtYXJnaW4tbGVmdDo1MCU7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgO1xuICB9XG4gICNjb250YWluZXIucm90YXRlMTgwICB7XG4gICAgbWFyZ2luLWxlZnQ6NTAlO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKSA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpIDtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKSA7XG4gIH1cbiAgI2NvbnRhaW5lci5yb3RhdGUyNzAgIHtcbiAgICBtYXJnaW4tbGVmdDo1MCU7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpIDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZykgO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpIDtcbiAgfVxuICAjY29udGFpbmVyLnJvdGF0ZTM2MCAge1xuICAgIG1hcmdpbi1sZWZ0OjUwJTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSA7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgO1xuICB9XG5cblxuICAuaWNvbi1zdGFydHtcbiAgICBmb250LXNpemU6NDBweDtcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgIG1hcmdpbi10b3A6MzBweDtcbiAgcGFkZGluZzowIWltcG9ydGFudDtcbiAgfVxuICAudGl0bGV7XG4gICAgbWFyZ2luLXRvcDotNTBweDtcbiAgICBtYXJnaW4tbGVmdDoyMCU7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgXG4gICAgXG4gIH1cbiAgLnRleHQge1xuICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgIG1hcmdpbi1sZWZ0OjIwJTtcbiAgICBtYXJnaW4tdG9wOi01cHg7XG4gICAgXG4gIH1cbiAgLmljb24tZW5ke1xuICAgIGZvbnQtc2l6ZToyNXB4O1xuICAgIGZsb2F0OnJpZ2h0O1xuICAgIG1hcmdpbi10b3A6LTYwcHg7XG4gIH1cbiAgLnByb2dyZXNzYmFyLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJvcmRlcjoxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6MTJweDtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZmZlNDtcbiAgICBtYXJnaW46MTBweDtcbiAgIFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLnByb2dyZXNzYmFyIHtcbiAgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItcmFkaXVzOjEycHg7XG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwZjkzYTtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLnByb2dyZXNzYmFyLXdyYXBwZXIyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXI6MXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czoxMnB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTllMztcbiAgbWFyZ2luOjEwcHg7XG4gXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLnByb2dyZXNzYmFyMiB7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjkzMDMwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnByb2dyZXNzYmFyLXdyYXBwZXIzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXI6MXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czoxMnB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmFlMztcbiAgbWFyZ2luOjEwcHg7XG4gXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcbn1cblxuLnByb2dyZXNzYmFyMyB7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxMnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjk5MTMwO1xuICB6LWluZGV4OiAtMTtcbn1cblxuICAuaGx7XG4gICAgbWFyZ2luLXRvcDo1cHg7XG4gICAgbWFyZ2luLWxlZnQ6MThweDtcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGdyZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB9XG5cbiAgLmhsMntcbiAgICBtYXJnaW4tbGVmdDoxOHB4O1xuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgZ3JheTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgfVxuXG4gIC5jaXJjbGV7XG4gICAgbWFyZ2luLXRvcDotNXB4O1xuICAgIGhlaWdodDo0MHB4O1xuICAgIHdpZHRoOjQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBncmV5O1xuICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZWZ0OjA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcbiAgIGNvbG9yOiNmZmY7XG4gIH1cblxuICAuY2lyY2xlMntcbiAgICBtYXJnaW4tdG9wOjhweDtcbiAgICBmb250LXNpemU6MzBweDtcbiAgICBoZWlnaHQ6NDBweDtcbiAgICB3aWR0aDo0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgIGJvcmRlcjoxcHggc29saWQgZ3JleTtcbiAgICBsZWZ0OjA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6Z3JheTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuXG4gIl19 */";

/***/ }),

/***/ 3877:
/*!******************************************************!*\
  !*** ./src/app/details/details.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n     <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <ion-segment class=\"ion-segment\" mode=\"md\" scrollable [(ngModel)]=\"name\" (ionChange)=\"segmentChanged($event)\">\n    <ion-segment-button class=\"ion-segment-button\" value=\"mind\">\n      <ion-chip *ngIf=\"button1\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label color=\"secondary\">Mind</ion-label>\n      </ion-chip>\n      <ion-chip *ngIf=\"!button1\" outline>\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label color=\"secondary\">Mind</ion-label>\n      </ion-chip>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"body\" class=\"ion-segment-button\">\n      <ion-chip *ngIf=\"button2\">\n       \n        <ion-icon name=\"heart\"></ion-icon>\n        <ion-label color=\"secondary\">Body</ion-label>\n      </ion-chip>\n      <ion-chip *ngIf=\"!button2\" outline>\n       \n        <ion-icon name=\"heart\"></ion-icon>\n        <ion-label color=\"secondary\">Body</ion-label>\n      </ion-chip>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"Relationships\" class=\"ion-segment-button\">\n      <ion-chip *ngIf=\"button3\">\n       \n        <ion-icon name=\"pin\"></ion-icon>\n        <ion-label color=\"secondary\">Relationships</ion-label>\n      </ion-chip>\n      <ion-chip *ngIf=\"!button3\" outline>\n       \n        <ion-icon name=\"pin\"></ion-icon>\n        <ion-label color=\"secondary\">Relationships</ion-label>\n      </ion-chip>\n    </ion-segment-button>\n\n\n    <ion-segment-button value=\"wealth\" class=\"ion-segment-button\">\n      <ion-chip *ngIf=\"button4\">\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-label color=\"secondary\">Wealth</ion-label>\n      </ion-chip>\n      <ion-chip *ngIf=\"!button4\" outline>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-label color=\"secondary\">Wealth</ion-label>\n      </ion-chip>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"work\" class=\"ion-segment-button\">\n      <ion-chip *ngIf=\"button5\">\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-label color=\"secondary\">Work</ion-label>\n      </ion-chip>\n      <ion-chip *ngIf=\"!button5\" outline>\n        <ion-icon name=\"star\"></ion-icon>\n        <ion-label color=\"secondary\">Work</ion-label>\n      </ion-chip>\n    </ion-segment-button>\n  </ion-segment>\n\n  <ion-row>\n    <ion-col size=\"4\"></ion-col>\n    <ion-col size=\"8\">\n     \n       <button class=\"button1\" (click)=\"rotateImage2(up)\"></button>\n      <img src=\"../../assets/images/donut.png\" class=\"bg-image\" id=\"container\"/>\n      <button class=\"button2\" (click)=\"rotateImage2(down)\"></button>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"progressbar-wrapper\">\n        <ion-icon [src]=\"myCustomIcon\" class=\"icon-start\"></ion-icon>\n        \n          <p class=\"title\">\n            Some Text\n          </p>\n          <h5 class=\"text\">\n            Started 31 days ago\n          </h5>\n          <ion-icon name=\"chevron-forward-outline\" class=\"icon-end\"></ion-icon>\n          <div class=\"progressbar\" style=\"width:100%\"></div>\n        \n        \n    </div>\n\n    <div class=\"progressbar-wrapper2\">\n      <ion-icon name=\"earth-outline\" class=\"icon-start\"></ion-icon>\n      \n        <p class=\"title\">\n          Some Text\n        </p>\n        <h5 class=\"text\">\n          Started 31 days ago\n        </h5>\n        <ion-icon name=\"chevron-forward-outline\" class=\"icon-end\"></ion-icon>\n        <div class=\"progressbar2\" style=\"width:20%\"></div>\n      \n      \n  </div>\n\n  <div class=\"progressbar-wrapper3\">\n    <ion-icon [src]=\"myCustomIcon2\" class=\"icon-start\"></ion-icon>\n    \n      <p class=\"title\">\n        Some Text\n      </p>\n      <h5 class=\"text\">\n        Started 31 days ago\n      </h5>\n      <ion-icon name=\"chevron-forward-outline\" class=\"icon-end\"></ion-icon>\n      <div class=\"progressbar3\" style=\"width:50%\"></div>\n    \n    \n</div>\n\n      <ion-item *ngFor=\"let a of steps\" lines=\"none\">\n        <div class=\"hl\" *ngIf=\"a.checked\"></div>\n        <div class=\"hl2\" *ngIf=\"!a.checked\"></div>\n        <div class=\"circle\" *ngIf=\"a.checked\">\n          <ion-icon name=\"checkmark-sharp\"></ion-icon>\n        </div>\n        <div class=\"circle2\" *ngIf=\"!a.checked\">\n          <ion-icon name=\"checkmark-sharp\"></ion-icon>\n        </div>\n  \n        \n      </ion-item>\n\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_details_details_module_ts.js.map