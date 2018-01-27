/*eslint env-node*/

const {
  METHODS,
} = require('http');

const api = new Proxy({}, {
  get(target, propKey) {
    const method = METHODS.find(method =>
      propKey.startsWith(method.toLowerCase()));
    if (!method) return;

    const path =
      `/${
        propKey
          .substring(method.length)
          .replace(/([a-z])([A-Z])/g, '$1/$2')
          .replace(/\$/g, '/$/')
          .toLowerCase()}`;
    return (...args) => {
      const finalPath = path.replace(/\$/g, () => args.shift());
      const queryOrBody = args.shift() || {};
      // You could use fetch here
      // return fetch(finalPath, { method, body: queryOrBody })
      console.log(method, finalPath, queryOrBody);
    };
  },
});

// GET /
api.get();
api.getUsers();
api.getUsers$Likes('1234');
api.getUsers$Likes('1234', {
  page: 2,
});
api.postItems({
  name: 'Item name',
});


// api.foobar is not a function
// api.foobar();


//Taken from https://medium.com/dailyjs/how-to-use-javascript-proxies-for-fun-and-profit-365579d4a9f8
