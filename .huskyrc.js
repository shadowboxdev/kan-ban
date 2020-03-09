// @ts-check
const { covalentHooks, generateHuskyConfig } = require('./.config/standards/husky/husky.js');
const huskyHooks = generateHuskyConfig(covalentHooks());
module.exports = huskyHooks;
