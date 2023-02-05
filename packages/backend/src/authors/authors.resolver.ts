import { Resolver, Query, ResolveField, Args, Parent, Int, Mutation } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author, InputAuthor } from './models/author.model';

@Resolver(of => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
  ) {}

  @Query(returns => Author, { nullable: true })
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  @Mutation(returns => Author)
    async createPost(@Args({ name: 'author', type: () => InputAuthor }) author: InputAuthor) {
    return this.authorsService.create(author);
  }

  @ResolveField()
  async posts(@Parent() author: Author) {
    const { id } = author;
    return [];
  }
}