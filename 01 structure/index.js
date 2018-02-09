const person = {
  name: 'Nico',
  age: '21',
};

const handler = {
  get(target, key) { //Short to 'get: function(){}'
    if (key === 'name') {
      return `My name is ${target[key]}`;
    }
    return target[key];
  },

  set(target, key, value) {
    target[key] = value.trim();
  },
};

const proxy_person = new Proxy(person, handler);

// console.log(proxy_person.name);