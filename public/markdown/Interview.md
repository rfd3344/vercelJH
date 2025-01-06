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

> _OCP - Opened Closed Principle_·

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

#### Creation Patterns

- deal with Object Creation
- SFBP

- Singleton (GlobalInstance)
- Factory
- Builder
- Prototype

#### Structural Patterns

- deal with Object Inherence

- Adapter (IncompatibleInterface)
- Bridge Separates an object’s abstraction from its implementation.
- Composite (ReactComponent)
- Decorator (HighOrderComponent)
- Facade (Combination)
- Flyweight Reduces memory usage by sharing as much data as possible between similar objects.
- Proxy Provides a surrogate or placeholder for another object to control access to it.

#### Behavioral Patterns

- deal with Object Communication

- Observer (ReactHooks)
- Strategy: Allows a family of algorithms to be defined and swapped interchangeably at runtime.
- Command: Encapsulates a request as an object, thereby allowing users to parameterize clients with queues, requests, and operations.
- Chain of Responsibility Passes a request along a chain of handlers until one of them handles it.
- Mediator (Redux)
- State Allows an object to alter its behavior when its internal state changes.
- Visitor: Separates an algorithm from the objects it operates on.
- Template Method Defines the skeleton of an algorithm in a base class but lets subclasses override specific steps of the algorithm.


# Projects
