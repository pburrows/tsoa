export declare type MethodDecoratorReturn = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
export declare type ClassDecoratorReturn = (constructor: any) => void;
export declare type ParameterDecoratorReturn = (target: object, propertyKey: string | symbol, parameterIndex: number) => void;
