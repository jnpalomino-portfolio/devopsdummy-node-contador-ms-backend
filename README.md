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
1. Abrir una consola e iniciar conexión con token personal al openshift preproductivo:
   ```sh
   oc login --token=<token> --server=https://api.preprodalcaldia.medellin.gov.co:6443
   ```
2. Ejecutar port-forwarding para redirigir el puerto 27017 del pod de mongo al puerto 27017 de tu máquina local:
   ```sh
   oc port-forward pod/mongo-7fb85c9497-mkk72 27017:27017
   ```
   **NOTA:** Ten en cuenta que "mongo-7fb85c9497-mkk72" es el nombre del pod de mongo, revisa que sea correcto su nombre.

3. Abrir una consola nueva y clonar el repositorio:
   ```sh
   git clone https://AlcaldiaMedellin@dev.azure.com/AlcaldiaMedellin/DevOps%20Dummy/_git/devopsdummy-node-contador-ms-backend
   ```
4. Ingresar a la carpeta raíz del proyecto:
   ```sh
   cd devopsdummy-node-contador-ms-backend
   ```
5. Crear un archivo .env en la carpeta raíz del proyecto y configurar las variables de entorno.
    ```sh
    DB_MONGO=mongodb://root:rootpassword@localhost:27017
    ```
6. Instalar dependencias:
   ```sh
   npm install
   ```
7. Iniciar el proyecto en modo desarrollo:
   ```sh
   npm run dev
   ```
   **NOTA:** Este paso solo inicia el servidor, no ejecuta pruebas unitarias.

8. La API estará disponible en: [http://localhost:3000](http://localhost:3000).

9. (Opcional) Puedes realizar pruebas de inserción de datos en postman:

   MÉTODO: POST
   URL: http://localhost:3000/api/app_dummy
   BODY:
      {
         "usuario": "karen melissa docker",
         "numeroClicks": 2
      }  

   **NOTA:** Ten en cuenta que esto inserta datos en la base de datos preproductiva.

10. (Opcional) Ejecutar pruebas unitarias:
   ```sh
   npm test
   ```
11. (Opcional) Ejecutar pruebas unitarias con cobertura:
   ```sh
   npm test -- --coverage
   ```

---

### **Opción 2: Instalación con Docker**
#### **Tecnologías necesarias**
- Docker Desktop
- git

#### **Pasos de instalación y ejecución**

1. Abrir una consola e iniciar conexión con token personal al openshift preproductivo:
   ```sh
   oc login --token=<token> --server=https://api.preprodalcaldia.medellin.gov.co:6443
   ```
2. Ejecutar port-forwarding para redirigir el puerto 27017 del pod de mongo al puerto 27017 de tu máquina local:
   ```sh
   oc port-forward pod/mongo-7fb85c9497-mkk72 27017:27017
   ```
   **NOTA:** Ten en cuenta que "mongo-7fb85c9497-mkk72" es el nombre del pod de mongo, revisa que sea correcto su nombre.

3. Abrir Docker Desktop y asegurarse de que esté en ejecución.

4. Abrir una consola nueva y clonar el repositorio:
   ```sh
   git clone https://AlcaldiaMedellin@dev.azure.com/AlcaldiaMedellin/DevOps%20Dummy/_git/devopsdummy-node-contador-ms-backend
   ```
5. Ingresar a la carpeta raíz del proyecto::
   ```sh
   cd devopsdummy-node-contador-ms-backend
   ```
6. Construir la imagen Docker:
   ```sh
   docker build -t devopsdummynode:1 .
   ```
7. Ejecutar el contenedor:
   ```sh
   docker run -p 3000:3000 --env DB_MONGO=mongodb://root:rootpassword@host.docker.internal:27017 devopsdummynode:1
   ```
8. La API estará disponible en: [http://localhost:3000](http://localhost:3000)

9. (Opcional) Puedes realizar pruebas de inserción de datos en postman:

   MÉTODO: POST
   URL: http://localhost:3000/api/app_dummy
   BODY:
      {
         "usuario": "karen melissa docker",
         "numeroClicks": 2
      }  

   **NOTA:** Ten en cuenta que esto inserta datos en la base de datos preproductiva.

---