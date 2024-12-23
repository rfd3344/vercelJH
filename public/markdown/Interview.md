## Javascript

- closures
- debounce

- EventLoop: MicroTask, nextTick, promise
- TaskQueue, including setTimeout/seInterval, readFileError, setImmediate, readFile

## Typescript

- Generic Type
- interface (object oriented), type(union, Intersection)
- UtilityType, Partial, Required, Record, Omit, Pick, Exclude, Parameters, Readonly
- any, unknown, never
- optional chaining(obj?.prop?.nested) nullish coalescing(value ?? "default")

## React

- Virtual DOM, diff algorithm, tree-structure
- React.memo, useMemo, useCallback
- useContext, createContext, ContextProvider, useReducer
- useEffect(async) vs useLayoutEffect(synchronously, before paint screen)
- Controlled vs Uncontrolled components
- Suspend, React.lazy, useTransition, useDeferredValue
- reconciliation algorithm, Keys, default index,
- HOC, custom hooks, render props
- use (promise and context)

## Nextjs

- SSR, SSG, Dynamic API, CSR
- File System-Based Routing, Dynamic Routes, [slug], [...slug], [[...slug]]
-
- image

## AWS

- SQS, SNS

- SQL, CID properties, indexing, sharding
- NoSQL, Caching,

## Solid Principle

ref1: https://learnku.com/articles/4160/solid-notes-on-object-oriented-design-and-programming-oodoop

ref2: https://www.c-sharpcorner.com/UploadFile/damubetha/solid-principles-in-C-Sharp/

> _SRP - Single Responsibility Principle_

> _OCP - Opened Closed Principle_

- add new function for new requirement, not change existing function
- open for extension, close for modification

> _LSP - Liskov Substitution Principle_

- subclass can replace superclass without error
- override method from superclass should keep same input and output parameters

- https://stackify.com/solid-design-liskov-substitution-principle/
- https://stackoverflow.com/questions/56860/what-is-an-example-of-the-liskov-substitution-principle

> _ISP Interface Segregation Principle_

- break interface to small, not fat interface

> _DIP Dependency Inversion Principle_

- high-level class depends on abstract/interface, not low-level classes

## System Design

- Design Patterns: Event-driven architecture, pub/sub, database replication

## Design Pattern

创建型：单例模式、抽象工厂模式、建造者模式、工厂模式、原型模式

结构型：适配器模式、桥接模式、装饰模式、组合模式、外观模式、享元模式、代理模式

行为型：模版方法模式、命令模式、迭代器模式、观察者模式、中介者模式、备忘录模式、解释器模式、状态模式、策略模式、职责链模式(责任链模式)、访问者模式
