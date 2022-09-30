import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response, Request } from 'express';
import {
  ICustomHttpExceptionResponse,
  IHttpExceptionResponse,
} from 'src/Domaine/models/exceptionModels/http-exeption.response.interface';

/**
 *
 * UN USED
 */
@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();

    let status: HttpStatus;
    let errorMessage: string;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const errorResponse = exception.getResponse();

      errorMessage =
        (errorResponse as IHttpExceptionResponse).error || exception.message;
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      errorMessage = 'Critical intern server error occured (ET)';
    }
    const errorResponse = this.getErrorResponse(status, errorMessage, request);
    this.logError(errorResponse, request, exception);
  }

  private getErrorResponse(
    status: HttpStatus,
    errorMessage: string,
    requestObject: Request,
  ): ICustomHttpExceptionResponse {
    return {
      statusCode: status,
      error: errorMessage,
      path: requestObject.url,
      method: requestObject.method,
      timeStamp: new Date(),
    };
  }

  private logError(
    errorResponse: ICustomHttpExceptionResponse,
    request: Request,
    exception: unknown,
  ): void {
    const { statusCode, error } = errorResponse;
    const { method, url } = request;
    const errorLog = `Response Code: ${statusCode} - Method: ${method} - URL: ${url}\n\n
    ${exception instanceof HttpException ? exception.stack : error}\n\n
    `;
  }
}
