describe('Captcha', function(){
  pat1=1;
  pat2=2;
  it('Pattern1',function(){
    var capt = new Captcha(pat1,1,0,0);
    expect(capt.generate()).toEqual('0+Zero');
  });

});
