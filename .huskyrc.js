// @ts-check
const { commitHooks, generateHuskyConfig } = require('./.config/standards/husky/husky.js');
const huskyHooks = generateHuskyConfig(commitHooks());
console.log(huskyHooks);
module.exports = huskyHooks;
