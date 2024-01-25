class Dep {
  constructor() {
    this.subscribers = [];
  }

  depend(target) {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }

  notify() {
    this.subscribers.forEach(target => target());
  }
}

const dep = new Dep();

let price = 5;
let quantity = 10;
let total = 0;

let target = () => {
  total = price * quantity;
};

dep.depend(target);
target();
console.log(total); // 50

price = 20;
dep.notify();
console.log(total); // 200
