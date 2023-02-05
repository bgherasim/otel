import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  private readonly authors: Record<string, Author> = {};

  create(author: Author) {
    this.authors[author.id] = author;
    return this.authors[author.id];
  }

  findOneById(id: number) {
    return this.authors[id];
  }

  findAll(): Author[] {
    return Object.values(this.authors);
  }
}