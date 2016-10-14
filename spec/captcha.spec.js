function Operater(operater){
  this.toString = function(){
    if(operater===1){
      return '+';
    }
    else if(operater===2){
      return '-';
    }
  }
}

function changeOperand(lo){
  let message='';
  this.toString=function(){
    if(lo===0){
        message = 'Zero';
      }
      else if(lo===1){
        message = 'One';
      }
      else if(lo===2){
        message = 'Two';
      }
      else if(lo===3){
        message = 'Three';
      }
      else if(lo===4){
        message = 'Four';
      }
      else if(lo===5){
        message = 'Five';
      }
      else if(lo===6){
        message = 'Six';
      }
      else if(lo===7){
        message = 'Seven';
      }
      else if(lo===8){
        message = 'Eight';
      }
      else if(lo===9){
        message = 'Nine';
      }
    return message;
  }
}

function Captcha(pattern,operater,leftoperand,rightoperand){
  this.generate = function(){
    let L = '';
    let R = '';
    if (pattern===1){
      L = leftoperand;
      R = new changeOperand(rightoperand);
    }
    else   if (pattern===2){
      L = new changeOperand(leftoperand);
      R = rightoperand;
    }
    let O = new Operater(operater);
    return L+O+R;
  }
}

describe('Captcha', function(){
  pat1=1;
  pat2=2;
  //Pattern1
  //1
  it('Pattern1',function(){
    var capt = new Captcha(pat1,1,0,0);
    expect(capt.generate()).toEqual('0+Zero');
  });
  //2
  it('Pattern1',function(){
    var capt = new Captcha(pat1,1,1,1);
    expect(capt.generate()).toEqual('1+One');
  });
  //3
  it('Pattern1',function(){
    var capt = new Captcha(pat1,1,2,1);
    expect(capt.generate()).toEqual('2+One');
  });
  //4
  it('Pattern1',function(){
    var capt = new Captcha(pat1,1,3,4);
    expect(capt.generate()).toEqual('3+Four');
  });
  //5
  it('Pattern1',function(){
    var capt = new Captcha(pat1,1,5,6);
    expect(capt.generate()).toEqual('5+Six');
  });
  //6
  it('Pattern1',function(){
    var capt = new Captcha(pat1,2,1,1);
    expect(capt.generate()).toEqual('1-One');
  });
  //7
  it('Pattern1',function(){
    var capt = new Captcha(pat1,2,3,6);
    expect(capt.generate()).toEqual('3-Six');
  });
  //8
  it('Pattern1',function(){
    var capt = new Captcha(pat1,2,4,5);
    expect(capt.generate()).toEqual('4-Five');
  });
  //9
  it('Pattern1',function(){
    var capt = new Captcha(pat1,2,5,7);
    expect(capt.generate()).toEqual('5-Seven');
  });
  //10
  it('Pattern1',function(){
    var capt = new Captcha(pat1,2,6,0);
    expect(capt.generate()).toEqual('6-Zero');
  });
  //11
  it('Pattern1',function(){
    var capt = new Captcha(pat1,2,7,1);
    expect(capt.generate()).toEqual('7-One');
  });


});
