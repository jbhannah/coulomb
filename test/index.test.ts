import _test, { TestInterface } from "ava";
import { SinonStub, stub } from "sinon";

type log = typeof console.log;

const test = _test as TestInterface<{
  log: SinonStub<Parameters<log>, ReturnType<log>>;
}>;

test.beforeEach((t) => {
  t.context.log = stub(console, "log");
});

test(`prints "Hello, world!"`, (t) => {
  require("../dist/index");
  t.assert(t.context.log.calledOnceWith("Hello, world!"));
});
