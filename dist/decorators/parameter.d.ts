import { ParameterDecoratorReturn } from '../interfaces/decorator-return';
/**
 * Inject http Body
 *  @param {string} [name] properties name in body object
 */
export declare function Body(): ParameterDecoratorReturn;
/**
 * Inject value from body
 *
 * @param {string} [name] The name of the body parameter
 */
export declare function BodyProp(name?: string): ParameterDecoratorReturn;
/**
 * Inject http request
 */
export declare function Request(): ParameterDecoratorReturn;
/**
 * Inject value from Path
 *
 * @param {string} [name] The name of the path parameter
 */
export declare function Path(name?: string): ParameterDecoratorReturn;
/**
 * Inject value from query string
 *
 * @param {string} [name] The name of the query parameter
 */
export declare function Query(name?: string): ParameterDecoratorReturn;
/**
 * Inject value from Http header
 *
 * @param {string} [name] The name of the header parameter
 */
export declare function Header(name?: string): ParameterDecoratorReturn;
