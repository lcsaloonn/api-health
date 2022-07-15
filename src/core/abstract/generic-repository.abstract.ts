export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;
  abstract get(id: string): Promise<T>;
  abstract create(item: T): Promise<void>;
  abstract update(id: string, item: T);
}
