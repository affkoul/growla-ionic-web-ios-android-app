#import <Cordova/CDVPlugin.h>

@interface UserDefaults : CDVPlugin
- (void) save:(CDVInvokedUrlCommand*)command;
@end
