import { Public } from ':src/shared/auth.guard';
import { ObjectResponse } from ':src/shared/types';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class ToolsController {
  @Public()
  @Get('/')
  get(): ObjectResponse<{ message: string }> {
    return {
      status: 'success',
      data: {
        message: 'Welcome to the Connery Runner API 👋',
      },
    };
  }

  @Get('/verify-access')
  verifyAccess(): ObjectResponse<undefined> {
    // By default every API endpoint is protected by the AuthGuard. Including this one.
    // And the AuthGuard will throw an exception if the request is not authenticated.
    // This endpoint does not contain any business logic, it is only used to verify if the request is authenticated by the clients.

    return {
      status: 'success',
      data: undefined,
    };
  }
}
