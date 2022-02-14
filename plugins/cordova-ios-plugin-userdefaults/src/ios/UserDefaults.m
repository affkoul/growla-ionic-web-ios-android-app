#import "UserDefaults.h"
#import <Cordova/CDV.h>
#import <Cordova/CDVPluginResult.h>

@implementation UserDefaults

- (void) save:(CDVInvokedUrlCommand*)command
{
    NSDictionary* arguments = [command.arguments objectAtIndex:0];
    NSString* key = [arguments objectForKey:@"key"];
    NSString* value = [arguments objectForKey:@"value"];
    NSString* suite = [arguments objectForKey:@"suite"];

    NSUserDefaults *prefs = [[NSUserDefaults alloc] initWithSuiteName:suite];
    [prefs setObject:value forKey:key];
    [prefs synchronize];

    CDVPluginResult* result = nil;
    if([[prefs stringForKey:key] isEqualToString:value])
    {
      result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
    } else {
      result = [CDVPluginResult resultWithStatus:CDVCommandStatus_IO_EXCEPTION];
    }
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

- (void) load:(CDVInvokedUrlCommand*)command
{
    NSDictionary* arguments = [command.arguments objectAtIndex:0];
    NSString* key = [arguments objectForKey:@"key"];
    NSString* suite = [arguments objectForKey:@"suite"];

    NSUserDefaults *prefs = [[NSUserDefaults alloc] initWithSuiteName:suite];
    NSString* callbackResult = [prefs stringForKey:key];

    CDVPluginResult* result = nil;
    if(callbackResult != nil)
    {
      result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:callbackResult];
    } else {
      result = [CDVPluginResult resultWithStatus:CDVCommandStatus_IO_EXCEPTION];
    }
    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end
