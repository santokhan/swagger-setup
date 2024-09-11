import express from 'express';                  
import swaggerUi from 'swagger-ui-express';

const app = express();

const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "title": "Authentication API",
        "description": "",
        "version": "1.0"
    },
    "produces": ["application/json"],
    "paths": {
        "/test": {
            "post": {
                "x-swagger-router-controller": "home",
                "operationId": "index",
                "tags": ["/test"],
                "description": "[Login 123](https://www.google.com)",
                "parameters": [{
                    "name": "test",
                    "in": "formData",
                    "type": "array",
                    "collectionFormat": "multi",
                    "items": {
                        "type": "integer"
                    }
                },
                { "name": "profileId", "in": "formData", "required": true, "type": "string" },
                { "name": "file", "in": "formData", "type": "file", "required": "true" }],
                "responses": {}
            }
        },
        "/bar": {
            "get": {
                "x-swagger-router-controller": "bar",
                "operationId": "impossible",
                "tags": ["/test"],
                "description": "",
                "parameters": [],
                "responses": {}
            }
        }
    }
};

app.post('/test', function (req, res) {
    console.log('req', req)
    res.json({ status: 'OK' });
});

app.use('/api-docs', swaggerUi.serve)
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))

export default app