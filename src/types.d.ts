declare module 'swagger-jsdoc';
declare module 'swagger-ui-express';


declare module 'swagger-jsdoc' {
  import { OpenAPIV3 } from 'openapi-types';

  function swaggerJSDoc(options: any): OpenAPIV3.Document;

  export default swaggerJSDoc;
}