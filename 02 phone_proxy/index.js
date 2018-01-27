const phone_handler = {
  set(target, key, value) {
    console.log(value);
    target[key] = value.match(/\d/g).join('');
  },

  get(target, key, value) {
    if (!target[key]) return undefined;
    return target[key].replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
  },
};

const phone_numbers = new Proxy({}, phone_handler);
