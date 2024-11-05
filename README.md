# **APLICACIÓN DUMMY - HELLO WORLD (nodejs - express)**

# Descripción del proyecto

Este proyecto dummy consiste en una aplicación Backend contenerizada desarrollada con nodejs y express.

## Objetivo

El objetivo principal de este proyecto es proporcionar un entorno de prueba para el equipo DevOps. Se utiliza para realizar pruebas de los templates desarrollados en el repositorio ‘ads_pipeline_cicd’. Estas pruebas incluyen:

- Compilación de código.
- Ejecución de pruebas unitarias.
- Despliegue de imágenes a un container registry.
- Despliegue de la aplicación en OpenShift.

Este proyecto sirve como un sandbox donde el equipo DevOps puede experimentar y validar el funcionamiento de los flujos de trabajo y plantillas de CI/CD desarrollados para implementaciones más complejas.

<!-- ---
## **Estructura del proyecto:**
Se maneja una estructura modular:

1. **/src**: Directorio que contiene los archivos .jsx y .css del desarrollo de la aplicación.
2. **/tests**: Directorio que contiene el/los archivos Python (.py) de las pruebas unitarias, **el nombramiento debe manejar el prefijo estándar de nombre de archivo ‘test_’.**
3. **azure-pipelines.yml:** Pipeline origen que emplearan y gestionarán los analistas de desarrollo para la creación de sus propios pipelines, de esta manera se agrega velocidad a los equipos de trabajo y se reduce la brecha de dependencia con el Team DevOps.
4. **Dockerfile:** Archivo requerido en todas las aplicaciones contenerizadas en donde se referencia la imagen a emplear y los comando requeridos para disponibilizar la aplicación.
5. **requirements.txt:** Archivo requerido por la aplicación Python para indicar las dependencias y librerias necesarias para su funcionamiento. -->

---

# Implementación en local de aplicación Dummy
Con el objetivo de desplegar localmente la aplicación Dummy se requieren las siguientes tecnologías.

## Tecnologías necesarias
- git
- DockerDesktop

## Pasos de instalación en local
1. Abrir DockerDesktop.
2. Clonar el repositorio.
3. Ingresar a la carpeta raíz del proyecto en una terminal.
4. Ejecutar el comando ` docker-compose up --build` para correr el compose con el build del frontend y una BD Mongo.
5. Ingresar por el navegador a la URL http://localhost:8080/  para ver el proyecto ejecutarse en local.

---

