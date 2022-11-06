import express from 'express';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load(
    path.resolve(__dirname, '../../docs/swagger/swagger.yaml')
);
const router = express.Router();
if (process.env.environment != 'production') {
    router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
export = router;
