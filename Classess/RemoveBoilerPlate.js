var CustomerOptimize = /** @class */ (function () {
    function CustomerOptimize(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(CustomerOptimize.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerOptimize.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerOptimize;
}());
var myCustomnerOpt = new CustomerOptimize("talha", "farriah");
console.log(myCustomnerOpt.firstName);
