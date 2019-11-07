import { uuid } from '../util/uuid';

/**
 * A User represents an agent that sends messages
 */
export class User {
  id: string;
  name: string;

  constructor(public n: string,
              public avatarSrc: string) {
    this.id = uuid();
    this.name = n;
  }

  public getUser(): string {
    return this.name;
  }
}
