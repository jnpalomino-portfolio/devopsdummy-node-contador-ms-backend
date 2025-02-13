# **DEVOPS DUMMY - CONTADOR**
# **NODE JS - EXPRESS**

## Descripción del proyecto
Este proyecto dummy consiste en un BackEnd contenerizado desarrollado en `Node JS` usando el framework `Express`, sus pruebas unitarias fueron desarrolladas utilizando `Jest`.

## Objetivo

El objetivo principal de este proyecto es proporcionar un entorno de prueba para el equipo DevOps. Se utiliza para realizar pruebas de los templates desarrollados en el repositorio ‘devops-pipeline-cicd’. Estas pruebas incluyen:

- Compilación de código.
- Ejecución de pruebas unitarias.
- Despliegue de imágenes a un container registry.
- Despliegue de la aplicación en OpenShift.

Este proyecto sirve como un sandbox donde el equipo DevOps puede experimentar y validar el funcionamiento de los flujos de trabajo y plantillas de CI/CD desarrollados para implementaciones más complejas.

## Funcionamiento
Este proyecto funciona como Backend del proyecto `holavite` de React, integrando una base de datos Mongo (desplegada en Openshift), estas son las acciones que realiza.

- Crear un nuevo contador (crearContador).
- Obtener todos los contadores (obtenerContadores).
- Obtener un contador por ID (obtenerContador).
- Actualizar un contador (actualizarContador).
- Eliminar un contador (eliminarContador).

## Objetivo
El objetivo principal de este proyecto es proporcionar un proyecto de prueba para el equipo DevOps. Se utiliza para realizar pruebas de los pipelines de CI/CD desarrollados en el repositorio `devops-pipeline-cicd`. 

Los pasos del pipeline incluyen:

- Compilación de código.
- Ejecución de pruebas unitarias.
- Despliegue de imágenes a Azure Container Registry.
- Despliegue de la aplicación en OpenShift preproductivo y productivo en el namespace `devopsdummy`.

---

## **Implementación en local de la aplicación Dummy**
Para desplegar localmente la aplicación Dummy, se pueden seguir dos métodos: sin Docker o con Docker.

### **Opción 1: Instalación sin Docker**
#### **Tecnologías necesarias**
- Node.js
- npm o yarn
- git

#### **Pasos de instalación y ejecución**
1. Clonar el repositorio:
   ```sh
   git clone https://AlcaldiaMedellin@dev.azure.com/AlcaldiaMedellin/DevOps%20Dummy/_git/devopsdummy-node-contador-ms-backend
   ```
2. Ingresar a la carpeta del proyecto:
   ```sh
   cd devopsdummy-node-contador-ms-backend
   ```
3. Instalar dependencias:
   ```sh
   npm install
   ```
4. Configurar las variables de entorno (REVISAR MONGO)
    ```sh
    DB_MONGO=mongodb://root:rootpassword@mongo:27017
    PORT=4000
    ```
4. Iniciar el proyecto en modo desarrollo (esto solo inicia el servidor, no ejecuta pruebas unitarias):
   ```sh
   npm run dev
   ```
5. La API estará disponible en: [http://localhost:4000](http://localhost:4000)
6. (Opcional) Ejecutar pruebas unitarias:
   ```sh
   npm test
   ```
7. (Opcional) Ejecutar pruebas unitarias con cobertura:
   ```sh
   npm test -- --coverage
   ```

---

### **Opción 2: Instalación con Docker**
#### **Tecnologías necesarias**
- Docker Desktop
- git

#### **Pasos de instalación y ejecución**
1. Abrir Docker Desktop y asegurarse de que esté en ejecución.

2. Clonar el repositorio:
   ```sh
   git clone https://AlcaldiaMedellin@dev.azure.com/AlcaldiaMedellin/DevOps%20Dummy/_git/devopsdummy-node-contador-ms-backend
   ```
3. Ingresar a la carpeta raíz del proyecto en una terminal:
   ```sh
   cd devopsdummy-node-contador-ms-backend
   ```
4. Construir la imagen Docker:
   ```sh
   docker build -t devopsdummynode:1 .
   ```
5. Ejecutar el contenedor: (REVISAR MONGO)
   ```sh
   docker run -p 4000:4000 --env DB_MONGO=mongodb://root:rootpassword@mongo:27017 devopsdummynode:1
   ```
6. Acceder a la aplicación en el navegador: [http://localhost:4000](http://localhost:4000)

---