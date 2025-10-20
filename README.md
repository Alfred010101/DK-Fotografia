# DK Fotografia

Este proyecto es una aplicación web Full Stack desarrollada para la gestión y venta de **paquetes de fotografía para eventos**.  
Su objetivo es permitir a los usuarios explorar diferentes paquetes, personalizar servicios, realizar reservas y consultar información sobre sesiones fotográficas.

La plataforma está dividida en dos módulos principales:

- **Frontend:** construido con **React**, **Vite**, **TypeScript** y **Material UI**, ofreciendo una interfaz moderna, responsiva y enfocada en la experiencia del usuario.  
- **Backend:** desarrollado en **Spring Boot (Java)**, encargado de manejar la lógica de negocio, autenticación, gestión de usuarios, pedidos y conexión con la base de datos **MySQL/MariaDB**.

El sistema está diseñado bajo una arquitectura cliente-servidor, con comunicación mediante **API REST**, lo que facilita la escalabilidad, mantenimiento y futura integración con aplicaciones móviles o servicios externos.

Entre sus principales características se incluyen:
- Gestión de usuarios y clientes.  
- Catálogo de paquetes de fotografía personalizables.  
- Registro y administración de reservas.  
- Visualización de precios, promociones y disponibilidad.  
- Panel administrativo para la gestión de contenido y pedidos.

Este proyecto busca ofrecer una solución completa para negocios dedicados a la fotografía de eventos, integrando una interfaz intuitiva y una base sólida para futuras ampliaciones.

## 🖥️ Requerimientos de Software

- **Lenguaje de programación**  
  - Java 21+
  - TypeScript 5+

- **Frameworks y librerías principales**  
  - Backend: Spring Boot (Gradle)
  - Frontend: React + Vite + Material UI

- **Base de datos**
  - MySQL / MariaDB


## ⚙️ Herramientas recomendadas
- IDE Java: IntelliJ IDEA / VS Code con extensión Java
- IDE Frontend: VS Code


## 📦  Gestor de dependencias:
- npm (frontend)
- Gradle (backend)


##  🗂️ Control de versiones:
- Git


**Intrucciones para correr el front-end**
```bash
cd front/fotografia
npm install
```

```bash
npm run dev
```

**Intrucciones para correr el back-end**
```bash
cd back/fotografia
./gradlew bootRun   
```
