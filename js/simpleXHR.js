/* Copyright 2007 HoangKC - http://sulivandinh.googlepages.com */
XHR=function(c,method){this.method=method||"Get";this.d=false;this.j=this.o();this.c=c;};XHR.prototype={send:function(url,data){if(this.d)return this;this.d=true;data=this.g(data);if(data!=null&&this.method.toLowerCase()=="get"){url+=((url.indexOf("?")!= -1)?"&":"?")+data;data=null;}this.j.open(this.method.toUpperCase(),url,true);this.j.onreadystatechange=XHR.l(this,this.f);this.j.send(data);},o:function(){return(window.XMLHttpRequest)?new XMLHttpRequest():(window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):false);},g:function(source){if(!source)return "";if(typeof source=="string")return source;var e=[];for(var k in source)e.push(encodeURIComponent(k)+"="+encodeURIComponent(source[k]));return e.join("&");},f:function(){if(this.j.readyState!=4|| !this.d)return;this.d=false;if(this.c)this.c.call(null,{text:this.j.responseText,xml:this.j.responseXML});this.j.onreadystatechange=function(){};}};XHR.l=function(o,f){return function(){return f.apply(o,arguments)}};