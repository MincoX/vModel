import longPress from './longPress';
import debounce from './debounce';
import inputNumber from './inputNumber';
import modal from './modal';

const directives = {
    longPress,
    debounce,
    inputNumber,
    modal,
}

export default {
    install(Vue) {
        Object.keys(directives).forEach(key => {
            Vue.directive(key, directives[key])
        })
    }
}
