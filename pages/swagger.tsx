// pages/swagger.tsx
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

import swaggerDocument from '../public/swagger.json';  // Certifique-se de ajustar o caminho conforme necessário

const Swagger = () => (
  <SwaggerUI
    url=""
    docExpansion="none"
    defaultModelExpandDepth={0}
    defaultModelsExpandDepth={0}
    spec={swaggerDocument}
  />
);

export default Swagger;
