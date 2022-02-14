var UserDefaults = function () {};

UserDefaults.prototype.save = function (options, success, fail) {
  cordova.exec(success, fail, "UserDefaults", "save", [options]);
};

UserDefaults.prototype.load = function (options, success, fail) {
  cordova.exec(success, fail, "UserDefaults", "load", [options]);
};

var UserDefaults = new UserDefaults();
module.exports = UserDefaults;
