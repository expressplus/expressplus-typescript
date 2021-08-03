var _a = require('@ulvimemmeedov/expressjsplus'), Service = _a.Service, Router = _a.Router, ExpressPlusDebug = _a.ExpressPlusDebug;
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this._port = process.env.PORT || 3000;
        this.StartApp = function () {
            Router.route('/').get(function (req, res, next) { return res.json({ message: "Hello Express +" }); });
            ExpressPlusDebug["default"].Start(Service);
            Service.use(Router).listen(_this._port, function () { return console.log("app running port " + _this._port); });
        };
    }
    return App;
}());
var app = new App();
app.StartApp();
