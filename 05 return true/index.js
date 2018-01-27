const handler = {
  get: (target, name) => target[name] += 1,
};

const data = new Proxy({}, handler);

data.a = 1; //1
console.log(data.a); //2
console.log(data.a); //3
