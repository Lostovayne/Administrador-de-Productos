# Administrador de Productos

## Introducción

Este proyecto es un Administrador de Productos que utiliza un Stack PERN (PostgreSQL, Express, React, Node.js) y una Rest API para la comunicación entre el backend y el frontend.

## Características

- Mejoras visuales con Tailwind CSS
- Mejoras de seguridad en las transacciones de datos

## Tecnologías Utilizadas

- Node.js: Entorno de ejecución para JavaScript en el servidor.
- Express: Framework de Node.js para crear aplicaciones web.
- TypeScript: Superset de JavaScript con tipado estático.
- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Tailwind CSS: Framework de CSS para diseño rápido y responsivo.
- PostgreSQL: Sistema de gestión de bases de datos relacional.

## Estructura del Proyecto

Describir la estructura de carpetas del proyecto, como `src`, `models`, `handlers`, `config`, etc.

## Configuración y Requisitos Previos

- Node.js y npm o pnpm instalados.
- PostgreSQL instalado y configurado.
- Certificado `ca.crt` para la conexión a la base de datos PostgreSQL.

## Instalación

1. Clonar el repositorio: `git clone https://github.com/tu-usuario/tu-proyecto`.
2. Instalar dependencias: `pnpm install`.
3. Configurar la base de datos PostgreSQL.
4. Colocar el archivo `ca.crt` en la carpeta del proyecto.

## Uso

Explicar cómo iniciar el servidor y cómo navegar por la interfaz de usuario de React.

## Documentación de la API del Administrador de Productos

Esta documentación describe los endpoints disponibles en la API del Administrador de Productos, que permite la gestión de un catálogo de productos.

## Endpoints

### Obtener todos los productos

- **GET** `/api/products`
- **Descripción**: Retorna una lista de todos los productos.
- **Parámetros**: No aplica.
- **Respuesta de éxito**: Código 200 (OK) y un array de productos.

```json
{
  "products": [
    {
      "id": 1,
      "name": "Producto 1",
      "price": 10.99,
      "availability": true
    },
    {
      "id": 2,
      "name": "Producto 2",
      "price": 7.99,
      "availability": false
    }
  ]
}
```

## Obtener un producto por ID

- GET /api/products/:id
  Descripción: Retorna el producto con el ID especificado.
- Parámetros:
- id (en ruta): El ID del producto a obtener.
- Respuesta de éxito: Código 200 (OK) y el producto solicitado.

```json
{
  "product": {
    "id": 1,
    "name": "Producto 1",
    "price": 10.99,
    "availability": true
  }
}
```

## Crear un nuevo producto

- POST /api/products
  Descripción: Crea un nuevo proyecto con los datos proporcionados.
- Parámetros:
- name (en cuerpo): El nombre del proyecto.
- price (en cuerpo): El precio del proyecto.
- availability (en cuerpo): La disponibilidad del proyecto.
- Respuesta de opción: Código 201 (CREATED) y el proyecto creado.

```json
{
  "product": {
    "id": 1,
    "name": "Producto 1",
    "price": 10.99,
    "availability": true
  }
}
```

## Actualizar un proyecto por ID

- PUT /api/products/:id
  Descripción: Actualiza el proyecto con el ID especificado con los datos proporcionados.
- Parámetros:
- id (en ruta): El ID del proyecto a actualizar.
- name (en cuerpo): El nuevo nombre del proyecto.
- price (en cuerpo): El nuevo precio del proyecto.
- availability (en cuerpo): La nueva disponibilidad del proyecto.
- Respuesta de búsqueda: Código 200 (OK) y el proyecto actualizado.

```json
{
  "product": {
    "id": 1,
    "name": "Producto 1",
    "price": 10.99,
    "availability": true
  }
}
```

## Eliminar un proyecto por ID

- DELETE /api/products/:id
  Descripción: Elimina el proyecto con el ID especificado.
- Parámetros:
- id (en ruta): El ID del proyecto a eliminar.
- Respuesta de búsqueda: Código 200 (OK) y el proyecto eliminado.

```json
{
  "message": "Product deleted"
}
```

# Documentación de Pruebas (Testing) para Administrador de Productos

## Herramienta de Prueba: Jest

Este proyecto utiliza [Jest](https://jestjs.io/) como el marco de pruebas, que proporciona un enfoque en la simplicidad para escribir pruebas unitarias y de integración.

### Configuración de Jest

La configuración de Jest está definida en `jest.config.js`. Se usa `ts-jest` para trabajar con TypeScript y el entorno de prueba es `node`, adecuado para pruebas en un entorno de servidor.

```javascript
// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

## Estructura de Archivos de Pruebas

Las pruebas se encuentran en src/**tests** y siguen el patrón \*.test.ts.

```javascript
// src/__tests__/server.test.ts
describe("Nuestra primer prueba", () => {
  test("Debe revisar que 1+1 = 2", () => {
    expect(1 + 1).toBe(2);
  });
});
```
