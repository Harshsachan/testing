import { Module } from '@nestjs/common';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver,ApolloDriverConfig} from '@nestjs/apollo';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),// code first
  }),
  PetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
