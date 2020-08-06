import agent from './agent';

const plugins = function (Vue) {

  Vue.prototype.$agent = new agent();
};

export default plugins;
