//unsupported ES2015 feature
//import utils from './libs/utils';

//NODE.js version for import

const utils=require('./libs/utils');

let original=[2,9,11,8,15,5,4,20,12,8,35];

let result=utils.search(original, n=>n%5==0 || n%3==0)


utils.show('result',...result);
