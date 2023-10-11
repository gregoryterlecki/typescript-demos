import * as _ from 'lodash';

const sayHello = async (): Promise<URL> => {
  const url: URL = new URL('https://www.linkedin.com/in/greg-terlecki-808/');
  return url;
};

console.log(sayHello());