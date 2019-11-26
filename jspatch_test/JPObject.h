//
//  JPObject.h
//  jspatch_test
//
//  Created by 黄剑 on 2019/4/4.
//  Copyright © 2019 黄剑. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

typedef void (^JSBlock)(NSDictionary *dict);
@interface JPObject : NSObject

+ (void)request:(void(^)(NSString *content, BOOL success))callback;

+ (JSBlock)genBlock;

@end

NS_ASSUME_NONNULL_END
