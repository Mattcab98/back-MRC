## Backend CRUD - MRC

Este proyecto es un backend para la gestión de productos utilizando la arquitectura de carpetas MVC (Modelo-Vista-Controlador). Proporciona una API RESTful que permite realizar operaciones CRUD sobre una base de datos de productos.

## Características

CRUD Completo: Crear, Leer, Actualizar y Eliminar productos.

Arquitectura MVC: Separación de responsabilidades en Modelo, Vista y Controlador.

TypeScript: Tipado estático para mayor robustez y escalabilidad.

MongoDB: Base de datos NoSQL para almacenar productos.

## Tecnologías :

Node.js     ||    Express.js   ||    MongoDB    ||      TypeScript      ||      Mongoose

## Requisitos Previos :

-   Node.js (v14 o superior)

-   MongoDB

-   npm o yarn

## Instalación

Clona el repositorio:

-   git clone https://github.com/Mattcab98/back-MRC.git 

-   cd back-MRC

-   Instala las dependencias:

-   npm install

-   Configura las variables de entorno:

    * Crea un archivo .env en la raíz del proyecto con las siguientes variables:

        - PORT=3000
        - MONGO_URI=mongodb://localhost:27017/nombre_de_tu_base_de_datos

-   Inicia el servidor:

    * npm run dev

    * El servidor estará disponible en http://localhost:3000.

## Estructura de Carpetas

├── src
│   ├── controllers
│   │   └── productController.ts
│   ├── models
│   │   └── productModel.ts
│   ├── routes
│   │   └── productRoutes.ts
│   ├── services
│   │   └── productService.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md

## Endpoints de la API

-   Productos

    - GET /api/productsObtiene la lista de productos.

    - GET /api/products/:idObtiene un producto por su ID.

    - POST /api/productsCrea un nuevo producto.Body:

        {
        "name": "Nombre del producto",
        "price": 100,
        "category": "Categoría del producto"
        }   

    - PUT /api/products/:idActualiza un producto existente.Body:

        {
        "name": "Nuevo nombre",
        "price": 120
        }

    - DELETE /api/products/:idElimina un producto por su ID.

## Scripts Disponibles

    - En el directorio del proyecto, puedes ejecutar los siguientes comandos:

        1-  npm run dev

        Ejecuta la aplicación en modo desarrollo. El servidor se reiniciará automáticamente con cada cambio gracias a Nodemon.

        2-  npm run build

        Compila el código TypeScript a JavaScript en la carpeta dist.

        3-  npm start

        Ejecuta el servidor usando el código compilado.


## ¡Gracias por usar este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue o contactarme.