import ComponentA from "./Component1";
// import ComponentB from "./ComponentB";


// function plugins(Vue) {
//   Vue.component("componen-a", ComponentA);
//   // Vue.component("componen-b", ComponentB);
// }

// export default plugins;

const plugins = {
  install: function (Vue) {
    Vue.component("componen-a", ComponentA);
    //   Vue.component("componen-b", ComponentB);
  }
}
export default plugins;
