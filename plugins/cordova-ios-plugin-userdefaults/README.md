# Cordova NSUserDefaults Plugin for App Groups

## Description

If you like to share some variables between your main app and an share extension, you need to save your variables in a NSUserDefaults container. The NSUserData container can be shared between your both apps and hold all the data you want to transfer.

Please make sure you add the App Groups in the XCode Project for sharing the container between apps.

## Install

```bash
cordova plugin add cordova-ios-plugin-userdefaults
```

## Sample Code

The Plugin is only for iOS.

### Save in UserDefaults

```javascript
var options = { key: "foo", value: "bar", suite: "group.com.example" };

window.UserDefaults.save(
  options,
  () => console.log("success"),
  () => console.log("error")
);
```

### Load from UserDefaults

```javascript
var options = { key: "foo", suite: "group.com.example" };
window.UserDefaults.load(
  options,
  (data) => console.log(data),
  (error) => cosnole.log(error)
);
```
