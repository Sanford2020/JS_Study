   /**
    JS中如果整数内存大于32位时, JS会自动屏蔽掉32位以后字节
    **/
        
    
    /**
    **转换为2进制，目前只考虑输入为十进制,只针对内存在32位之内的数值（2147483647）
    **/
    var defS = "0000000000000000000000000000000";//31个零
    function toBinaryString(num){
      var _ns = num.toString(2),
          _nsl = _ns.length,
          _dif = 31-_nsl,
          _rs = "(0{"+_dif+"})",
          _reg = new RegExp(_rs),
          _isNeg = _ns.charCodeAt(0) === 45;//是否是负数
      return (_isNeg?"10":"0")+defS.substring(0,_dif).replace(_reg,"$1"+_ns.replace("-",""));
    }
    /**
    **转换为10进制，目前只考虑输入为2进制，因为默认定义的数字为十进制所以输入参数为2进制数字的字符串表示
    **/
    function toDecimalString(num){
       var _n = num.length===32,//2进制字符串的长度是否等于32位
           _isNeg = false,//是否是负数
           _rg = /(0*)1/;
       if(_n){
         _isNeg = num.charAt(0) == 1;
         num = num.substring(1);//去除符号位
       }
       num = num.replace(_rg,""+1);
      return (_isNeg?"-":"")+parseInt(num,2)
    }
    
   /**
    *计算最大值 参数可以是数组和多个参数
    **/
    function max(){
      var _max = Math.max,
          _args = [].slice.call(arguments),
          _isAry = {}.toString.call(_args[0]) == "[object Array]";
      return _max.apply(null,_isAry?_args[0]:_args);
    }
    
    /**
    *计算最大值 参数可以是数组和多个参数,上边的改进版
    **/
    function max2(fst){
      var _max = Math.max,_isAry = fst instanceof Array;
      return _max.apply(null,_isAry?fst:arguments);
    }
