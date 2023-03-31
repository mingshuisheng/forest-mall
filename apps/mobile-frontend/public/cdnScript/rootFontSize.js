var baseSize = 100;
var baseWidth = 375;
var fontSize = (document.documentElement.clientWidth / baseWidth * baseSize).toFixed(2);
document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px';
