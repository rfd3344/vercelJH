## Javascript

- Closures
- Debounce

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
- reconciliation algorithm, Keys, default index
- HOC, custom hooks, render props
- use (promise and context)
- ShareComponents: NPMPrivatePackage, MicroFrontend

## Nextjs

- SSR, SSG, Dynamic API, CSR
- File System-Based Routing, Dynamic Routes, [slug], [...slug], [[...slug]]
-
- image

## Nodejs

- EventLoop MicroTask: nextTick, promise
- MacroTask: setImmediate, setTimeout, IO task(fetchAPI, readFile)
- Express Middleware, app/router level, error handler
- router: express.Router()

## Postgres

- schema, tables
- views, materialized views, WITH CHECK OPTION
- data types, JSONB, JSON,
- indexing: B-tree, Hash, GIN, GiST, and BRIN
- JOIN: LEFT, RIGHT, INNER, FULL
- GROUP BY, HAVING/WHERE
- ExecutionOrder: FROM/JOIN, WHERE, GROUP BY, HAVING, SELECT, DISTINCT, ORDER BY, LIMIT/OFFSET
- EXPLAIN/EXPLAIN ANALYZE
- Partitioning
- Streaming Replication, Logical Replication
- transactions: BEGIN, COMMIT, ROLLBACK, SAVEPOINT
- trigger, NotRecommended, last_modified

## NoSQL

- Diff SQL: Schemaless, Sharding
- ChatMessages
- indexing, explain, Partitioning, Replication
- Aggregation Framework in MongoDB

## AWS

- SQS, SNS

- SQL, CID properties, indexing, sharding
- NoSQL, Caching

## System Design

- Scalability: LoadBalance, Microservice, database sharding and replication
- Availability: HealthCheck, MultiInstance
- Reliability: MessageQueue, Backup
- Performance: Cache, CDN, DatabaseQuery
-
- Design Patterns: Monolith, Microservices, Service-Oriented Architecture, Event-driven architecture
- CAP Theorem, Consistency, Availability, Partition Tolerance(always in distributed system)

- React, Node
- Postgres, Mongodb, Redis, ElasticSearch, S3
- SQS, SNS

- Example

  1. URL Shortener - API Gateway, URLShortening Service, Database, Redirection Service, Cache, Analytics Service
  2. Chat System
  3. Social Media Platform
  4. E-Commerce Platform
  5. File Storage System
  6. Video Streaming Service

```md
1. URL Shortener
   Problem: Design a service like TinyURL that takes a long URL and returns a shorter, unique one.
   Key Concepts: Database design, hashing, handling collisions, scalability, availability, and expiration of URLs.
2. Chat System
   Problem: Design a real-time chat application like WhatsApp or Slack.
   Key Concepts: Real-time messaging, message queues, database schema, handling offline messages, and scaling chat servers.
3. Social Media Platform
   Problem: Design a system like Facebook or Twitter.
   Key Concepts: User profiles, posts, comments, likes, news feed generation, followers, and content caching.
4. E-Commerce Platform
   Problem: Design an online shopping system like Amazon.
   Key Concepts: Product catalog, search functionality, user cart, order management, payment processing, and inventory management.
5. File Storage System
   Problem: Design a system like Google Drive or Dropbox.
   Key Concepts: File storage, file sharing, data replication, synchronization, and version control.
6. Video Streaming Service
   Problem: Design a system like YouTube or Netflix.
   Key Concepts: Video storage, streaming protocols, content delivery networks (CDN), load balancing, and user recommendations.
7. Ride-Sharing Service
   Problem: Design a system like Uber or Lyft.
   Key Concepts: Real-time location tracking, matching algorithms, dynamic pricing, and dispatch systems.
8. Search Engine
   Problem: Design a search engine like Google.
   Key Concepts: Web crawling, indexing, ranking algorithms, query processing, and distributed systems.
9. Notification System
   Problem: Design a notification system like the one used by Facebook or LinkedIn.
   Key Concepts: Push notifications, user preferences, delivery guarantees, and throttling.
10. Online Booking System
    Problem: Design a system for hotel or flight booking.
    Key Concepts: Inventory management, booking engine, concurrency handling, and payment gateways.
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
- Proxy (AccessControl)

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

- Design Consistency for UI component, follow Figma design
- State Management, challenge for debug and feature updates
- API refactor, dynamic filter based on location
- data cache, Compare RTKQuery/ReactQuery
- Infinite Scroll
- Image/components lazy loading
- render optimization, Memo, key list
- Speed from 5s to 2s, user experience

## SubscriptionFunnel

- id verification
- bank statement check
- payment integration, illion

## CarlyNow

- DealerTools, sales and dealer

## NextCarly

- Nextjs
- Tailwind, shandcn
- RTK Query
- Heaps, google analytics
- AWS Lambda, Amplify, Cognito, Codepipeline

## Maxamation

- airline revenue management
- Electron, internal desktop app
- ElasticSearch, data import and query

## SunixVision

- https://www.sunixvision.com.au/
