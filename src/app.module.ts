import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app/app.controller'
import { AppService } from './app/app.service'
import { LicenseService } from './modules/license/license.service';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { License, LicenseSchema } from './database/mongoose/license/license.schema'
import { LicenseController } from './modules/license/license.controller'
import { LicenseModule } from './modules/license/license.module'
import { ProductModule } from './modules/product/product.module';


@Module({
  imports: [
    MongooseModule.forRootAsync( {
      imports: [ ConfigModule ],
      useFactory: async ( configService: ConfigService ) =>
      {
          return {
              uri: `mongodb://${ process.env.MONGO_INITDB_USERNAME }:${ process.env.MONGO_INITDB_PASSWORD }@${ process.env.MONGO_HOSTNAME }:${ process.env.MONGO_PORT }/${ process.env.MONGO_INITDB_DATABASE }`,
          }
      },
      inject: [ ConfigService ],
  } ),
    ConfigModule.forRoot( {
      isGlobal: true,
  } ),
  LicenseModule,
  ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
