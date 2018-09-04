import { ClassDecoratorReturn, MethodDecoratorReturn } from '../interfaces/decorator-return';
export declare function Route(name?: string): ClassDecoratorReturn;
/**
 * can be used to entirely hide an method from documentation
 */
export declare function Hidden(): MethodDecoratorReturn;
