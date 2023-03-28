const sh = require('./node_modules/shelljs/shell'); // npm i shelljs

const dir = 'repo';

sh.rm('-rf', dir);

sh.mkdir(dir);
sh.cd(dir);

sh.exec('git clone git@github.com:xxx.git');

sh.cd('..');

module.exports = {
    generator: 'ng-typescript',
    input: 'https://petstore3.swagger.io/api/v3/openapi.json',
    output: './output',
    clean: true,
    templateData: `${dir}/templates`,
    templateDataFile: `${dir}/template-data.js`,
    hooksFile: `${dir}/hooks.js`,
};
