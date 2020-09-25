import { Module } from "@apm/common";
import { Http } from "@apm/http";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  immports: [],
  controllers: [AppController],
  providers: [AppService, Http],
})
export class AppModule {}
