function Captcha(pattern,operater,leftoperand,rightoperand){
  this.generate = function(){
    return new LeftOperand(pattern,leftoperand)+new Operater(operater)+new RightOperand(pattern,rightoperand);
  }
}

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

function LeftOperand(pattern,lo){
  let message='';
  this.toString=function(){
    if (pattern===1) {
       return lo;
    }
    else if(pattern===2){
      if(lo==='0'){
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
}

function RightOperand(pattern,ro){
  let message='';
  this.toString=function(){
    if (pattern===1) {
      if(ro===0){
        message = 'Zero';
      }
      else if(ro===1){
        message = 'One';
      }
      else if(ro===2){
        message = 'Two';
      }
      else if(ro===3){
        message = 'Three';
      }
      else if(ro===4){
        message = 'Four';
      }
      else if(ro===5){
        message = 'Five';
      }
      else if(ro===6){
        message = 'Six';
      }
      else if(ro===7){
        message = 'Seven';
      }
      else if(ro===8){
        message = 'Eight';
      }
      else if(ro===9){
        message = 'Nine';
      }
     return message;
    }
    else if(pattern===2){
      return ro;
    }
  }
}

describe('Captcha', function(){
  pat1=1;
  pat2=2;
  it('Pattern1',function(){
    var capt = new Captcha(pat1,1,0,0);
    expect(capt.generate()).toEqual('0+Zero');
  });

});
