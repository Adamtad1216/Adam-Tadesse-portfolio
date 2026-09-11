import { DesignPattern } from '@/types';

export const designPatterns: DesignPattern[] = [
  {
    name: 'Repository',
    category: 'structural',
    description:
      'Mediates between the domain and data mapping layers, acting like an in-memory collection of domain objects.',
    useCase: 'Database abstraction and data access logic isolation',
  },
  {
    name: 'Factory',
    category: 'creational',
    description:
      'Defines an interface for creating objects, letting subclasses decide which class to instantiate.',
    useCase: 'Object creation with complex initialization logic',
  },
  {
    name: 'Observer',
    category: 'behavioral',
    description:
      'Defines a one-to-many dependency so that when one object changes state, all dependents are notified.',
    useCase: 'Event-driven architectures and reactive data flows',
  },
  {
    name: 'Strategy',
    category: 'behavioral',
    description:
      'Defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.',
    useCase: 'Swappable business logic and algorithm selection',
  },
  {
    name: 'Adapter',
    category: 'structural',
    description:
      'Converts the interface of a class into another interface clients expect, enabling incompatible interfaces to work together.',
    useCase: 'Third-party API integration and legacy system bridging',
  },
  {
    name: 'Command',
    category: 'behavioral',
    description:
      'Encapsulates a request as an object, allowing parameterization and queuing of requests.',
    useCase: 'Undo/redo operations, task scheduling, and request queuing',
  },
  {
    name: 'Singleton',
    category: 'creational',
    description:
      'Ensures a class has only one instance and provides a global point of access to it.',
    useCase: 'Database connections, configuration managers, and logging',
  },
  {
    name: 'Middleware',
    category: 'behavioral',
    description:
      'Chains processing handlers together, each deciding whether to pass the request to the next handler.',
    useCase: 'Request processing pipelines, authentication, and logging chains',
  },
];
