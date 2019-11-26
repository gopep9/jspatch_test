//
//  JPObject.m
//  jspatch_test
//
//  Created by 黄剑 on 2019/4/4.
//  Copyright © 2019 黄剑. All rights reserved.
//

#import "JPObject.h"

@implementation JPObject

+ (void)request:(void(^)(NSString *content, BOOL success))callback
{
    callback(@"I'm content", YES);
}

+ (JSBlock)genBlock
{
    NSString *ctn = @"JSPatch";
    JSBlock block = ^(NSDictionary *dict) {
        NSLog(@"I'm %@, version: %@", ctn, dict[@"v"]);
    };
    return block;
}

@end
