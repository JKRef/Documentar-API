import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "API",
            description: "API created for coderhouse course"
        }
    },
    apis:  [`src/docs/**/*.yaml`]
};

export const specs = swaggerJSDoc(swaggerOptions);

