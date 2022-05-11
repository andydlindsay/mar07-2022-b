interface IContainer<T, B> {
  name: string;
  contents: T;
  password?: B
}

const numberContainer: IContainer<number, string> = {
  name: 'number container',
  contents: 42
};

const stringContainer: IContainer<string, boolean> = {
  name: 'string container',
  contents: 'hello world'
};