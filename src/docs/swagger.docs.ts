import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "ApiRestaurante",
    version: "1.0",
    contact: { email: "fcejas484@gmail.com", name: "Fekiso", url: "https://github.com/Fekiso" },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      Auth: {
        type: "object",
        properties: {
          user: { type: "string", example: "Fekiso" },
          pass: { type: "string", example: "Fekiso48" },
          rol: { type: "integer", example: 1 },
        },
      },
      Bebida: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          nombre: { type: "string", example: "Coca Cola" },
          descripcion: { type: "string", example: "350CC. (Latita)" },
          tipo: { type: "integer", example: 1 },
          precio: { type: "integer", example: 800.0 },
          habilitado: { type: "boolean", example: true },
          TipoBebida: { $ref: "#/components/schemas/TipoBebida" },
        },
      },
      Carta: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          carta: { type: "integer", example: 1 },
          promocion: { type: "integer", example: 1 },
          comida: { type: "integer", example: 1 },
          bebida: { type: "integer", example: 1 },
          DetallesCarta: {
            type: "array",
            items: { $ref: "#/components/schemas/DetalleCarta" },
          },
        },
      },
      Comida: {
        type: "object",
        properties: {
          id: { type: "integer", example: 3 },
          nombre: { type: "string", example: "Othila" },
          descripcion: {
            type: "string",
            example:
              "Salsa de tomate, mozzarella, jamon cocida, morrones en vinagreta, oregano y aceitunas verdes",
          },
          tipo: { type: "integer", example: 1 },
          precio: { type: "integer", example: 5400.0 },
          habilitado: { type: "boolean", example: true },
          TipoComida: { $ref: "#/components/schemas/TipoComida" },
        },
      },
      DetalleCarta: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          comida: { type: "integer", example: null },
          bebida: { type: "integer", example: 2 },
          promocion: { type: "integer", example: null },
          Comida: { $ref: "#/components/schemas/Comida" },
          Bebida: { $ref: "#/components/schemas/Bebida" },
          Promocion: { $ref: "#/components/schemas/Promocion" },
        },
      },
      DetallePromocion: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          promocion: { type: "integer", example: 1 },
          comida: { type: "integer", example: null },
          bebida: { type: "integer", example: 2 },
          cantidad: { type: "integer", example: 2 },
          Comida: { $ref: "#/components/schemas/Comida" },
          Bebida: { $ref: "#/components/schemas/Bebida" },
        },
      },
      DetalleFactura: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          factura: { type: "integer", example: 1 },
          comida: { type: "integer", example: null },
          bebida: { type: "integer", example: 2 },
          promocion: { type: "integer", example: null },
          nombreProducto: {
            type: "string",
            example: "Coca",
          },
          precio: { type: "integer", example: null },
          cantidad: { type: "integer", example: null },
          Comida: { $ref: "#/components/schemas/Comida" },
          Bebida: { $ref: "#/components/schemas/Bebida" },
          Promocion: { $ref: "#/components/schemas/Promocion" },
          Factura: { $ref: "#/components/schemas/Factura" },
        },
      },
      DetallePedido: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          pedido: { type: "integer", example: 1 },
          comida: { type: "integer", example: null },
          bebida: { type: "integer", example: 2 },
          promocion: { type: "integer", example: null },
          nombreProducto: {
            type: "string",
            example: "Coca",
          },
          precio: { type: "integer", example: null },
          cantidad: { type: "integer", example: null },
          Comida: { $ref: "#/components/schemas/Comida" },
          Bebida: { $ref: "#/components/schemas/Bebida" },
          Promocion: { $ref: "#/components/schemas/Promocion" },
          Pedido: { $ref: "#/components/schemas/Pedido" },
        },
      },
      Empleado: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          user: { type: "string", example: "Fekiso" },
          pass: { type: "string", example: "Fekiso48" },
          nombre: { type: "string", example: "Fekiso" },
          apellido: { type: "string", example: "Othila" },
          tipoDocumento: { type: "integer", example: 1 },
          nroDocumento: { type: "integer", example: 48848123 },
          rol: { type: "integer", example: 1 },
          telefono: { type: "string", example: "3525484848" },
          email: { type: "string", example: null },
          habilitado: { type: "boolean", example: true },
          TipoDocumento: { $ref: "#/components/schemas/TipoDocumento" },
          TipoRol: { $ref: "#/components/schemas/TipoRol" },
        },
      },
      Factura: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          valida: { type: "boolean", example: true },
          estado: { type: "integer", example: 1 },
          metodoPago: { type: "integer", example: 1 },
          mesa: { type: "integer", example: 1 },
          empleadoAtiende: { type: "integer", example: 1 },
          empleadoFaturo: { type: "integer", example: 1 },
          DetallesPedido: {
            type: "array",
            items: { $ref: "#/components/schemas/DetallePedido" },
          },
          EmpleadoAtiende: { $ref: "#/components/schemas/Empleado" },
          EmpleadoFacturo: { $ref: "#/components/schemas/Empleado" },
          EstadoFactura: { $ref: "#/components/schemas/TipoEstadoFactura" },
          MetodoPago: { $ref: "#/components/schemas/TipoPago" },
          Mesa: { $ref: "#/components/schemas/Mesa" },
        },
      },
      Mesa: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          ubicacion: { type: "integer", example: 1 },
        },
      },
      ErrorHTTP: {
        type: "object",
        properties: {
          code: { type: "integer", description: "Codigo error http", example: 400 },
          message: { type: "string", description: "Descripcion error http", example: "Fekiso" },
        },
      },
      Pedido: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          valida: { type: "boolean", example: true },
          estado: { type: "integer", example: 1 },
          mesa: { type: "integer", example: 1 },
          empleadoAtiende: { type: "integer", example: 1 },
          DetallesPedido: {
            type: "array",
            items: { $ref: "#/components/schemas/DetallePedido" },
          },
          EmpleadoAtiende: { $ref: "#/components/schemas/Empleado" },
          EstadoPedido: { $ref: "#/components/schemas/TipoEstadoPedido" },
          Mesa: { $ref: "#/components/schemas/Mesa" },
        },
      },
      Promocion: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          nombre: { type: "string", example: "Promocion de prueba" },
          descripcion: { type: "string", example: "Descripción de la promocion" },
          precio: { type: "number", example: 10.99 },
          fechaInicio: { type: "string", example: "2023-08-01" }, // Formato: "YYYY-MM-DD"
          fechaFin: { type: "string", example: "2023-08-31" }, // Formato: "YYYY-MM-DD"
          horaInicio: { type: "string", example: "08:00:00" }, // Formato: "HH:MM:SS"
          horaFin: { type: "string", example: "20:00:00" }, // Formato: "HH:MM:SS"
          validoLunes: { type: "boolean", example: true },
          validoMartes: { type: "boolean", example: true },
          validoMiercoles: { type: "boolean", example: false },
          validoJueves: { type: "boolean", example: false },
          validoViernes: { type: "boolean", example: true },
          validoSabado: { type: "boolean", example: false },
          validoDomingo: { type: "boolean", example: false },
          habilitado: { type: "boolean", example: true },
          DetallesPromocion: {
            type: "array",
            items: { $ref: "#/components/schemas/DetallePromocion" },
          },
        },
      },
      TipoBebida: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          nombre: { type: "string", example: "Gaseosas" },
          descripcion: { type: "string", example: null },
          habilitado: { type: "boolean", example: true },
        },
      },
      TipoComida: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          nombre: { type: "string", example: "Pizza" },
          descripcion: { type: "string", example: null },
          habilitado: { type: "boolean", example: true },
        },
      },
      TipoDocumento: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          nombre: { type: "string", example: "Documento Unico" },
          descripcion: { type: "string", example: null },
          habilitado: { type: "boolean", example: true },
        },
      },
      TipoEstadoFactura: {
        type: "object",
        properties: {
          id: { type: "integer", example: 3 },
          nombre: { type: "string", example: "Facturada" },
          descripcion: { type: "string", example: null },
          habilitado: { type: "boolean", example: true },
        },
      },
      TipoEstadoPedido: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          nombre: { type: "string", example: "Preparacion" },
          descripcion: { type: "string", example: null },
          habilitado: { type: "boolean", example: true },
        },
      },
      TipoPago: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          nombre: { type: "string", example: "Efectivo" },
          descripcion: { type: "string", example: null },
          habilitado: { type: "boolean", example: true },
        },
      },
      TipoRol: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          nombre: { type: "string", example: "Administrador" },
          descripcion: { type: "string", example: null },
          habilitado: { type: "boolean", example: true },
        },
      },
    },
  },
  paths: {
    "/auth/login": {
      post: {
        tags: ["Auth"],
        summary: "Iniciar sesión de usuario",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Auth", // Referencia al esquema AuthType
              },
            },
          },
        },
        responses: {
          200: {
            description: "Login exitoso, devuelve un JWT.",
            content: {
              "application/json": {
                schema: {
                  type: "string",
                },
              },
            },
          },
          403: {
            description: "Credenciales incorrectas. No se pudo iniciar sesión.",
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/auth/register": {
      post: {
        tags: ["Auth"],
        summary: "Crear nuevo usuario",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Empleado", // Referencia al esquema AuthType
              },
            },
          },
        },
        responses: {
          200: {
            description: "Login exitoso, devuelve un JWT.",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Empleado",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/bebida/": {
      get: {
        tags: ["Bebida"],
        summary: "Consulta todas las bebidas que coincidan con los filtros",
        requestBody: {
          required: false,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  tipo: {
                    type: "integer",
                    example: 1,
                  },
                  habilitado: {
                    type: "boolean",
                    example: true,
                  },
                  nombre: {
                    type: "string",
                    example: "Coca Cola",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Consulta exitosa. Retorna un array de Bebidas",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Bebida",
                  },
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["Bebida"],
        summary: "Crea nueva bebida",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Bebida",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Consulta exitosa. Retorna la nueva Bebida",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Bebida",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["Bebida"],
        summary: "Actualiza una bebida por ID",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Bebida",
              },
            },
          },
        },
        responses: {
          204: {
            description: "Actualizacion exitosa. Retorna una Bebida",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Bebida",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/bebida/{id}": {
      get: {
        tags: ["Bebida"],
        summary: "Obtener una bebida por ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              example: 1,
            },
          },
        ],
        responses: {
          200: {
            description: "Consulta exitosa. Retorna una Bebida",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Bebida",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ["Bebida"],
        summary: "Borrar una bebida por ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              example: 1,
            },
          },
        ],
        responses: {
          204: {
            description: "Borrado exitoso.",
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/comida/": {
      get: {
        tags: ["Comida"],
        summary: "Consulta todas las comidas que coincidan con los filtros",
        requestBody: {
          required: false,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  tipo: {
                    type: "integer",
                    example: 1,
                  },
                  habilitado: {
                    type: "boolean",
                    example: true,
                  },
                  nombre: {
                    type: "string",
                    example: "Othila",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Consulta exitosa. Retorna un array de Comidas",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Comida",
                  },
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["Comida"],
        summary: "Crea nueva comida",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Comida",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Consulta exitosa. Retorna la nueva Comida",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Comida",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["Comida"],
        summary: "Actualiza una comida por ID",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Comida",
              },
            },
          },
        },
        responses: {
          204: {
            description: "Actualizacion exitosa. Retorna una Comida",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Comida",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/comida/{id}": {
      get: {
        tags: ["Comida"],
        summary: "Obtener una comida por ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              example: 1,
            },
          },
        ],
        responses: {
          200: {
            description: "Consulta exitosa. Retorna una Comida",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Comida",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ["Comida"],
        summary: "Borrar una comida por ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              example: 1,
            },
          },
        ],
        responses: {
          204: {
            description: "Borrado exitoso.",
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/empleado/": {
      get: {
        tags: ["Empleado"],
        summary: "Consulta todos los empleados que coincidan con los filtros",
        requestBody: {
          required: false,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  tipo: {
                    type: "integer",
                    example: 1,
                  },
                  habilitado: {
                    type: "boolean",
                    example: true,
                  },
                  nombre: {
                    type: "string",
                    example: "Othila",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Consulta exitosa. Retorna un array de empleados",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Empleado",
                  },
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["Empleado"],
        summary: "Crea nuevo empleado",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Empleado",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Consulta exitosa. Retorna el nuevo Empleado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Empleado",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["Empleado"],
        summary: "Actualiza un empleado por ID",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Empleado",
              },
            },
          },
        },
        responses: {
          204: {
            description: "Actualizacion exitosa. Retorna un Empleado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Empleado",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/empleado/{id}": {
      get: {
        tags: ["Empleado"],
        summary: "Obtener una empleado por ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              example: 1,
            },
          },
        ],
        responses: {
          200: {
            description: "Consulta exitosa. Retorna una Empleado",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Empleado",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      delete: {
        tags: ["Empleado"],
        summary: "Borrar una empleado por ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              example: 1,
            },
          },
        ],
        responses: {
          204: {
            description: "Borrado exitoso.",
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/tipoBebida/": {
      get: {
        tags: ["TipoBebida"],
        summary: "Consulta todos los tiposBebida que coincidan con los filtros",
        requestBody: {
          required: false,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  tipo: {
                    type: "integer",
                    example: 1,
                  },
                  habilitado: {
                    type: "boolean",
                    example: true,
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Consulta exitosa. Retorna un array de tiposBebida",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/TipoBebida",
                  },
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["TipoBebida"],
        summary: "Crea nuevo tipoBebida",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TipoBebida",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Consulta exitosa. Retorna el nuevo TipoBebida",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TipoBebida",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["TipoBebida"],
        summary: "Actualiza un tipoBebida por ID",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TipoBebida",
              },
            },
          },
        },
        responses: {
          204: {
            description: "Actualizacion exitosa. Retorna un TipoBebida",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TipoBebida",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/tipoBebida/{id}": {
      delete: {
        tags: ["TipoBebida"],
        summary: "Borrar una tipoBebida por ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              example: 1,
            },
          },
        ],
        responses: {
          204: {
            description: "Borrado exitoso.",
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/tipoComida/": {
      get: {
        tags: ["TipoComida"],
        summary: "Consulta todos los tipoComida que coincidan con los filtros",
        requestBody: {
          required: false,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  tipo: {
                    type: "integer",
                    example: 1,
                  },
                  habilitado: {
                    type: "boolean",
                    example: true,
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Consulta exitosa. Retorna un array de tipoComida",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/TipoComida",
                  },
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["TipoComida"],
        summary: "Crea nuevo tipoComida",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TipoComida",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Consulta exitosa. Retorna el nuevo tipoComida",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TipoComida",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["TipoComida"],
        summary: "Actualiza un tipoComida por ID",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TipoComida",
              },
            },
          },
        },
        responses: {
          204: {
            description: "Actualizacion exitosa. Retorna un tipoComida",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TipoComida",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/tipoComida/{id}": {
      delete: {
        tags: ["TipoComida"],
        summary: "Borrar una tipoComida por ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              example: 1,
            },
          },
        ],
        responses: {
          204: {
            description: "Borrado exitoso.",
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/tipoDocumento/": {
      get: {
        tags: ["TipoDocumento"],
        summary: "Consulta todos los tipoDocumento que coincidan con los filtros",
        requestBody: {
          required: false,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  tipo: {
                    type: "integer",
                    example: 1,
                  },
                  habilitado: {
                    type: "boolean",
                    example: true,
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Consulta exitosa. Retorna un array de tipoDocumento",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/TipoDocumento",
                  },
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["TipoDocumento"],
        summary: "Crea nuevo tipoDocumento",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TipoDocumento",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Consulta exitosa. Retorna el nuevo tipoDocumento",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TipoDocumento",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["TipoDocumento"],
        summary: "Actualiza un tipoDocumento por ID",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TipoDocumento",
              },
            },
          },
        },
        responses: {
          204: {
            description: "Actualizacion exitosa. Retorna un tipoDocumento",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TipoDocumento",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/tipoDocumento/{id}": {
      delete: {
        tags: ["TipoDocumento"],
        summary: "Borrar una tipoDocumento por ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              example: 1,
            },
          },
        ],
        responses: {
          204: {
            description: "Borrado exitoso.",
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/tipoRol/": {
      get: {
        tags: ["TipoRol"],
        summary: "Consulta todos los tipoRol que coincidan con los filtros",
        requestBody: {
          required: false,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  tipo: {
                    type: "integer",
                    example: 1,
                  },
                  habilitado: {
                    type: "boolean",
                    example: true,
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Consulta exitosa. Retorna un array de tipoRol",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/TipoRol",
                  },
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["TipoRol"],
        summary: "Crea nuevo tipoRol",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TipoRol",
              },
            },
          },
        },
        responses: {
          201: {
            description: "Consulta exitosa. Retorna el nuevo tipoRol",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TipoRol",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
      put: {
        tags: ["TipoRol"],
        summary: "Actualiza un tipoRol por ID",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/TipoRol",
              },
            },
          },
        },
        responses: {
          204: {
            description: "Actualizacion exitosa. Retorna un tipoRol",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/TipoRol",
                },
              },
            },
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
    "/tipoRol/{id}": {
      delete: {
        tags: ["TipoRol"],
        summary: "Borrar una tipoRol por ID",
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "integer",
              example: 1,
            },
          },
        ],
        responses: {
          204: {
            description: "Borrado exitoso.",
          },
          default: {
            description: "Error genérico",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ErrorHTTP",
                },
              },
            },
          },
        },
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
