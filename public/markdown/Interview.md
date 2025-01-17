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

## Postgres

- schema, tables
- views, materialized views, WITH CHECK OPTION
- data types, JSONB, JSON,
- indexing: B-tree, Hash, GIN, GiST, and BRIN
- JOIN: LEFT, RIGHT, INNER, FULL,
- GRUP BY, HAVING/WHERE
- ExecutionOrder: FROM, WHERE, GROUP BY, HAVING, SELECT, DISTINCT, ORDER BY, LIMIT/OFFSET
- EXPLAIN/EXPLAIN ANALYZE
- table partitioning
- transactions: BEGIN, COMMIT, ROLLBACK, SAVEPOINT
- trigger，OtherWay, last_modified

- Streaming Replication，Logical Replication

## AWS

- SQS, SNS

- SQL, CID properties, indexing, sharding
- NoSQL, Caching

## System Design

- Design Patterns: Monolith, Microservices, Service-Oriented Architecture, Event-driven architecture
- CAP Theorem and eventual consistency
- database partition and sharding

- Example
  1. URL shorteners
  2. chat system
  3. file storage systems
  4. ATM system

```
  Step 5: Practice System Design

  Gradually move to more complex systems like e-commerce platforms, video streaming services, or social media platforms.
  Use whiteboard tools or system design interview books to simulate real-world scenarios.

  Step 6: Learn from Real-World Systems
  Study the architecture of real-world systems like Uber, Netflix, Amazon, etc.
  Read case studies and blog posts from tech companies to understand how they scale their systems.

```

-  Common questions 11, https://igotanoffer.com/blogs/tech/system-design-interviews

```
How would you design a social media app?
How would you design X game?
How would you design a parking lot?
How would you design a URL-shortening service?
How would you design a web cache?
How would you design autocomplete for a search engine?
How would you design an API?
How would you design a messaging app?
How would you design an online file-sharing system
How would you design an e-commerce store
How would you design a ride-hailing / delivery app
```

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

## Design Pattern

#### Creation Patterns

- Creation
-
- Singleton (GlobalInstance)
- Factory (MostCommon, ReactComponent)
- Builder (ComplexObject, Flexible, Multi-Step)
- Prototype (ReuseObject, ExpensiveToCreate)

#### Structural Patterns

- Assemble to large Object
-
- Adapter (IncompatibleInterface)
- Bridge (DecoupleAbstraction)
- Composite (ReactChildComponent)
- Decorator (HighOrderComponent)
- Facade (CombineMultiStep)
- Flyweight (ReduceMemoryByShareProperty)
- Proxy (ControlAccess)

#### Behavioral Patterns

- deal with Object Communication

- Observer (ReactHooks)
- Strategy: Allows a family of algorithms to be defined and swapped interchangeably at runtime.
- Command (Undo/Redo )
- Chain of Responsibility (ReduxMiddleware)
- Mediator (Redux)
- State (SwitchMode)
- Visitor: Separates an algorithm from the objects it operates on.
- Template Method Defines the skeleton of an algorithm in a base class but lets subclasses override specific steps of the algorithm.

# Projects

- STAR: Situation, Task, Action, Result

## CarSearchRefactor

- UI component consistency, follow Figma design, user experience
- state management, challenge for debug and feature updates
- Speed from 5s to 2s,
- dynamic filter based on location
- infinite scroll
- image lazy loading
- data cache, using RTK query

## SubscriptionFunnel

- id verification
- bank statement check
- payment integration, illion

## CarlyNow

- DealerTools, sales and dealer

## NextCarly

- Nextjs
- Tailwind, Flowbite
- RTK Query
- Heaps, google analytics
- AWS Lambda, Amplify, Cognito, Codepipeline

## Maxamation

- airline revenue management
- Electron, internal desktop app
- ElasticSearch, data import and query
