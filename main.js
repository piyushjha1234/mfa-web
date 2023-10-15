import getToken from 'totp-generator';

const token = getToken('JBSWY3DPEHPK3PXP');
document.getElementsByTagName('strong')[0].innerText = token;
