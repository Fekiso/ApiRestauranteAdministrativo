import swaggerJSDoc, { OAS3Definition, OAS3Options, Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.3",
  info: {
    title: "Menu Api - OpenAPI 3.0",
    version: "1.0.0",
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      TipoComida: {
        type: "object",
        required: ["id", "nombre", "habilitado"],
        properties: {
          id: { type: "integer", example: 1 },
          nombre: { type: "string", example: "Pizza" },
          descripcion: { type: "string", example: "" },
          habilitado: { type: "boolean", example: true },
          fecha_creacion: { type: "string", format: "date-time", example: "2023-09-04 HH:MM:SS" },
          fecha_: { type: "string", format: "date-time", example: "2023-09-04 HH:MM:SS" },
        },
      },
      Comida: {
        type: "object",
        required: ["id", "nombre", "tipo", "precio"],
        properties: {
          id: { type: "integer", example: 1 },
          nombre: { type: "string", example: "Pizza" },
          descripcion: { type: "string", example: "" },
          precio: { type: "double", example: 1 },
          habilitado: { type: "boolean", example: true },
          fecha_creacion: { type: "string", format: "date-time", example: "2023-09-04 HH:MM:SS" },
          fecha_: { type: "string", format: "date-time", example: "2023-09-04 HH:MM:SS" },
        },
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["../routes/*.ts"],
};
