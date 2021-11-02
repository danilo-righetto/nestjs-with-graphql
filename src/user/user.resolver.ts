import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => User)
  async create(@Args('data') data: CreateUserInput): Promise<User> {
    const user = await this.userService.createUser(data);
    return user;
  }
}
