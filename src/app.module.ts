import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      //autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      typePaths: ['./**/*.graphql'],
      definitions: {
        
        path: join(process.cwd(), 'src/models/graphql.ts'),
        outputAs: 'class',
      },
      debug: true,
      playground: true
    }),
    UserModule,
  ],
})
export class AppModule { }