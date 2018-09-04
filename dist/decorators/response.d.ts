import { MethodDecoratorReturn } from '../interfaces/decorator-return';
export declare function SuccessResponse(name: string | number, description?: string): MethodDecoratorReturn;
export declare function Response<T>(name: string | number, description?: string, example?: T): MethodDecoratorReturn;
