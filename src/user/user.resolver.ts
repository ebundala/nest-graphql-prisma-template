import { ResolveField, Resolver, Query, Mutation,Int, Args, Parent} from '@nestjs/graphql';
 import {User,AuthInput,AuthResult,Role} from '../models/graphql'
@Resolver(of => User)
export class UsersResolver {
  constructor(
  ) {}
  @Mutation(returns => User)
  async signup(@Args('credentials', { type: () => AuthInput }) credential: AuthInput): Promise<AuthResult> {
    return {
      message:"error incorect credentials",
    error:"invalid_credentials",
    user:{
      id:"1",
      email:credential.email,
      name: credential.password,
      role: Role.MODERATOR,
      createdAt:"",
      updatedAt:"",
      TokenOrder:[],
      bids:[],
      chats:[],
      jobs:[],
      expertise:[
        {
          id:"2",name:"tech",weight:111,jobs:[],users:[],createdAt:"",updatedAt:""
        }
      ]
    }
  };
  }

  @Mutation(returns => User)
  async signin(@Args('credentials', { type: () => AuthInput }) credential: AuthInput): Promise<AuthResult> {
    return {
    token: "xxxxxxxxxxxxxxxxxxxx",
    message:"successs",
    user:{
      id:"1",
      email:"example@email.com",
      name: "jon doe",
      role:Role.ADMIN,
      createdAt:"",
      updatedAt:"",
      TokenOrder:[],
      bids:[],
      chats:[],
      jobs:[],
      expertise:[
        {
          id:"2",name:"tech",weight:111,jobs:[],users:[],createdAt:"",updatedAt:""
        }
      ]
    }
  };;
  }
}