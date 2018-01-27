const phone_handler = {
  set(target, key, value) {
    target[key] = value.match(/[O - 9]/g).join('');
  },

  get(target, key, value, original = false) {
    if (original) {
      return target[key];
    }
    return target[key].replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
  },
};

const phone_numbers = {};
