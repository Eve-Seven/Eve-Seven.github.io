// build time:Wed Dec 12 2018 18:56:35 GMT+0800 (GMT+08:00)
typeof DUOSHUO!=="undefined"?hookTemplate():$("#duoshuo-script")[0].onload=hookTemplate;function hookTemplate(){var o=DUOSHUO.templates.post;DUOSHUO.templates.post=function(a,e){var r=o(a,e);var s=a.post.agent;var n=a.post.author.user_id;var i="";if(n&&n==CONFIG.duoshuo.userId){i='<span class="duoshuo-ua-admin">'+CONFIG.duoshuo.author+"</span>"}if(s&&/^Mozilla/.test(s)){r=r.replace(/<\/div><p>/,i+getAgentInfo(s)+"</div><p>")}return r}}function getAgentInfo(o){$.ua.set(o);var a="Unknown";var e=$.ua;var r=m()?"<br><br>":'<span class="duoshuo-ua-separator"></span>';var s=e.os.name||a;var n=e.os.version||a;var i=e.browser.name||a;var t=e.browser.version||a;var u={os:{android:"android",linux:"linux",windows:"windows",ios:"apple","mac os":"apple",unknown:"desktop"},browser:{chrome:"chrome",chromium:"chrome",firefox:"firefox",opera:"opera",safari:"safari",ie:"internet-explorer",wechat:"wechat",qq:"qq",unknown:"globe"}};var p=u.os[s.toLowerCase()];var l=u.browser[c()];return r+'<span class="duoshuo-ua-platform duoshuo-ua-platform-'+s.toLowerCase()+'">'+'<i class="fa fa-'+p+'"></i>'+s+" "+n+"</span>"+r+'<span class="duoshuo-ua-browser duoshuo-ua-browser-'+i.toLowerCase()+'">'+'<i class="fa fa-'+l+'"></i>'+i+" "+t+"</span>";function c(){var o=i.toLowerCase();if(o.match(/WeChat/i)){return"wechat"}if(o.match(/QQBrowser/i)){return"qq"}return o}function m(){var o=window.navigator.userAgent;var a=o.match(/iPad/i)!==null;var e=["iphone","android","phone","mobile","wap","netfront","x11","java","opera mobi","opera mini","ucweb","windows ce","symbian","symbianos","series","webos","sony","blackberry","dopod","nokia","samsung","palmsource","xda","pieplus","meizu","midp","cldc","motorola","foma","docomo","up.browser","up.link","blazer","helio","hosin","huawei","novarra","coolpad","webos","techfaith","palmsource","alcatel","amoi","ktouch","nexian","ericsson","philips","sagem","wellcom","bunjalloo","maui","smartphone","iemobile","spice","bird","zte-","longcos","pantech","gionee","portalmmm","jig browser","hiptop","benq","haier","^lct","320x320","240x320","176x220"];var r=new RegExp(e.join("|"),"i");return!a&&o.match(r)}}
//rebuild by neat 