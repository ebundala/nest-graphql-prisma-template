import {
  ResolveField,
  Resolver,
  Query,
  Mutation,
  Int,
  Args,
  Parent,
} from '@nestjs/graphql';
import { User, AuthInput, AuthResult, Role } from '../models/graphql';
import { UserService } from './user-service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    private readonly userService: UserService
    ) {}
  @Mutation((returns) => User)
  async signup(
    @Args('credentials', { type: () => AuthInput }) credentials: AuthInput,
  ): Promise<AuthResult> {
   return this.userService.signup(credentials);
  }

  @Mutation((returns) => User)
  async signin(
    @Args('credentials', { type: () => AuthInput }) credential: AuthInput,
  ): Promise<AuthResult> {
    return {
      token: 'xxxxxxxxxxxxxxxxxxxx',
      message: 'successs',
      user: {
        id: 1,
        uid: "xxxxxxxxxxxxxxxxx",
        email: 'example@email.com',
        displayName: 'jon doe',
        emailVerified: false,
        disabled: false,
        role: Role.ADMIN,
        createdAt: '',
        updatedAt: '',
        TokenOrder: [],
        bids: [],
        chats: [],
        jobs: [],
        expertise: [
          {
            id: '2',
            name: 'tech',
            weight: 111,
            jobs: [],
            users: [],
            createdAt: '',
            updatedAt: '',
          },
        ],
      },
    };
  }
}
