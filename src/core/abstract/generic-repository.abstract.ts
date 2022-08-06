export abstract class IGenericRepository<T> {
  abstract find(options: any): Promise<T[]>;
  abstract findOne(id: string): Promise<T>;
  abstract create(item: T): Promise<void>;
  abstract update(id: string, item: T);
}
