require('UIView, UIColor, UILabel, UIButton','NSMutableDictionary','NSData')
//多个参数调用var indexPath = require('NSIndexPath').indexPathForRow_inSection(0, 1);

defineClass('AppDelegate', {
  // replace the -genView method
    genView: function() {
        var dataDict = NSMutableDictionary.alloc().init();
        dataDict = NSData.alloc().init();
        var view = self.ORIGgenView();
        view.setBackgroundColor(UIColor.greenColor())
        var label = UILabel.alloc().initWithFrame(view.frame());
        label.setText("JSPatch");
        label.setTextAlignment(1);
        view.addSubview(label);
        var button = UIButton.buttonWithType(1);
        button.setBackgroundColor(UIColor.yellowColor());
        button.setFrame({x:20, y:20, width:100, height:100});
        view.addSubview(button);
        button.addTarget_action_forControlEvents(self,"buttonTouch:",64);
            
    require('JPObject').request(block("NSString *, BOOL", function(ctn, succ) {
                                      //这里传进来的参数都是0？
                                      console.log("call block in js")
                                      console.log(ctn)
                                      console.log(succ)
                                      if (succ) console.log(ctn)  //output: I'm content
                                      }))

            var blk = require('JPObject').genBlock();
            console.log("blk print")
            console.log(typeof blk)
            blk({v: "0.0.1"});  //output: I'm JSPatch, version: 0.0.1

            blk2 = test_return();
            blk2(1);
    return view;
  }
});
