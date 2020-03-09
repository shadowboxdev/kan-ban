// @ts-check
const { commitHooks, generateHuskyConfig } = require('./.config/standards/husky/husky.js');
const huskyHooks = generateHuskyConfig(commitHooks());
module.exports = huskyHooks;
