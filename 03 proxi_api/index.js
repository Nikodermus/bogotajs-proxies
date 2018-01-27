const api = {
  id: 14235,
  name: 'Friendly Api',
  full_name: 'Friendly Api, Inc',
  lat: 359529,
  lon: 395923,
};

const api_handler = {
  set(target, key, value) {
    const maybe = Object.keys(target)
      .find(obj_key => obj_key.toLowerCase() === key.toLowerCase());

    if (!target[key] && maybe) {
      throw new Error(`Try with '${maybe}' instead`);
    }

    return target[key];
  },

  get(target, key, value) {
    const maybe = Object.keys(target)
      .find(obj_key => obj_key.toLowerCase() === key.toLowerCase());


    if (typeof target[key] === 'undefined' && maybe) {
      //In case the property is a 0 or ''
      console.warn(`Returning '${maybe}' instead`);
      return target[maybe];
    }

    return target[key];
  },
};


const api_proxy = new Proxy(api, api_handler);
