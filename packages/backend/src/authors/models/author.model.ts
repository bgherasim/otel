import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import { InputPost, Post } from './post.model';

@ObjectType()
export class Author {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [Post])
  posts: Post[];
}

@InputType()
export class InputAuthor {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [InputPost], {nullable: true})
  posts: Post[];
}