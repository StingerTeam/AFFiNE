import { Module } from '@nestjs/common';

import { FeatureModule } from '../features';
import { QuotaModule } from '../quota';
import { StorageModule } from '../storage';
import { UserAvatarController } from './controller';
import { UserResolver } from './resolver';
import { UsersService } from './users';

@Module({
  imports: [StorageModule, FeatureModule, QuotaModule],
  providers: [UserResolver, UsersService],
  controllers: [UserAvatarController],
  exports: [UsersService],
})
export class UsersModule {}

export { UserType } from './types';
export { UsersService } from './users';
