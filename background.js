(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-121985229-2']);
_gaq.push(['_trackPageview']);

// 安装完成后
chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === 'install' || details.reason === 'update') {
    chrome.storage.sync.remove('playerShow');
  }
});