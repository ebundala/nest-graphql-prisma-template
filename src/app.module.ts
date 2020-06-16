import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './user/user.module';
//import { PrismaClientModule } from './prisma-client/prisma-client.module';
import { UserService } from './user/user-service';
import { PrismaClientModule } from './prisma-client/prisma-client.module';
import { UsersResolver } from './user/user.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/models/graphql.ts'),
       outputAs: 'class',
      },
      debug: true,
      playground: true,
    }),
   UserModule,
  ],
 //providers: [UsersResolver,],
})
export class AppModule {}
