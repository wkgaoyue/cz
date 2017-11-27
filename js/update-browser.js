(function IEUpgrade(){
    var ua = window.navigator.userAgent.toLowerCase();
    if (/msie/.test(ua)) {
        window.location.href = 'http://www.smartisan.com/update-browser.html';
    }
})();