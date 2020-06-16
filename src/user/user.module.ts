import { Module, HttpModule, HttpService } from '@nestjs/common';
import { UsersResolver } from './user.resolver';
import { UserService } from './user-service';
import { PrismaClientModule } from 'src/prisma-client/prisma-client.module';
import { PrismaClientService } from 'src/prisma-client/prisma-client-service';
import { FirebaseModule } from 'src/firebase-admin/firebase.module';
import { FirebaseService } from 'src/firebase-admin/firebase.service';

@Module({
  imports: [HttpModule,PrismaClientModule,FirebaseModule],
  providers: [UsersResolver,UserService,PrismaClientService,FirebaseService],
})
export class UserModule {}
