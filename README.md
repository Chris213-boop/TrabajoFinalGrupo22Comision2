# 🛠 Proyecto: Trabajo Práctico Integrador – Programación Visual

Este proyecto es una aplicación web SPA desarrollada con React y Vite, en el marco del Trabajo Práctico Integrador de la materia Programación Visual. Su objetivo es aplicar y consolidar los conocimientos adquiridos durante la cursada, integrando tecnologías como JavaScript, React Router DOM, Context API y un framework de UI.

## 🔍 Funcionalidades principales

- Visualización de productos en tarjetas con imagen, precio, categoría y descripción.
- Sistema de **favoritos** persistente en contexto global.
- Página exclusiva para productos marcados como favoritos.
- Página de **detalle de producto** con más información.
- Formularios reutilizables para **crear y editar productos**.
- Buscador de productos por nombre o descripción.
- Sección de **productos eliminados** con posibilidad de recuperación.
- Autenticación de usuarios y **protección de rutas privadas**.
- Página "Nosotros" con presentación del equipo.
- Página de error personalizada (404).

## ⚙️ Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Context API](https://reactjs.org/docs/context.html)
- [Bootstrap / React Bootstrap](https://react-bootstrap.github.io/)
- API pública: [`https://fakestoreapi.com/products`](https://fakestoreapi.com/products)

## 📁 Estructura del proyecto

- `src/assets/components`: Componentes reutilizables (cards, formularios, buscador).
- `src/assets/pages`: Páginas principales del sitio.
- `src/assets/contexts`: Contextos para manejar productos y autenticación.
- `src/assets/hooks`: Custom hooks para lógica de login, validación y productos.
- `src/assets/data`: Datos locales de productos y usuarios.
- `src/assets/css`: Estilos personalizados.
- `src/assets/router`: Archivo principal de rutas protegidas.
- `src/App.jsx`: Componente raíz de la SPA. Define la estructura general y contiene el AppRouter.
- `src/main.jsx`: Punto de entrada de la aplicación. Renderiza el componente raíz y envuelve la app con los contextos.

## 📌 Hooks utilizados

- useState: Manejar formularios, favoritos, errores, etc.
- useEffect: Cargar productos al montar la app, sincronizar datos.
- useContext: 	Compartir estado global (productos, login).
- useNavigate: Redireccionar entre vistas.
## 🔧 Hooks personalizados

- useAut.js: Maneja la lógica de autenticación de usuario.
- useLogin.js: Controla el comportamiento del formulario de inicio de sesión.
- useProductos.js: Encapsula toda la lógica de productos (fetch, favoritos).
- useValidacionProducto.js: Realiza validaciones de los campos del formulario de productos.


## 👥 Integrantes del grupo

| **INTEGRANTES DEL GRUPO 22**             | **Nombres de usuario Github**          |
| ---------------------------------------- | -------------------------------------- |
| Antenor, Maximiliano Leandro             | maxiant                                |
| Cayo, Pedro Dardo Ramón Cayo             | PedroDardoRamonCayo                    |
| Torres, Pablo Gabriel                    | eneporene                              |
| Torres, Cintia Cristina                  | Chris213-boop                          |
| Vargas, Ana Lucia                        | luciasoraide                           |


## Informacion adicional para probar la App:
- En la carpeta Public se colocaron imagenes extra que sirven para probar el funcionamiento del formulario.