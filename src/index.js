class A {
  prop: number;

  constructor(n){
    this.prop = n;
  }
}

class B extends A {
  prop: number;

  constructor(n){
    super(n);
  }
}

export { A };
export default B;
