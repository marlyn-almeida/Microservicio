# Microservicio
# Sistema Automatizado para Supermercado Antojitos

Este proyecto es un sistema automatizado para el supermercado **Antojitos**, diseñado para modernizar el registro de ventas y el control de inventario mediante una arquitectura de microservicios. La aplicación cuenta con un frontend desarrollado en React y un backend en Django, que se comunican a través de APIs RESTful.

## Características

- **Gestión de clientes**: Visualización de una lista de clientes con detalles como nombre, apellido, teléfono y dirección.
- **Control de inventario**: Gestión y visualización de productos disponibles en el inventario, incluyendo nombre, descripción, precio, stock e imágenes de los productos.
- **Registro de ventas**: Registro de las ventas con detalles del cliente, productos comprados, cantidad y precio total por venta.
- **Diseño adaptable**: Estilo moderno y fácil de usar, con componentes responsivos y animaciones en los botones para mejorar la experiencia del usuario.

## Tecnologías Utilizadas

### Frontend:
- **React**: Para la creación de componentes dinámicos y el manejo de estado.
- **CSS**: Para el diseño y la personalización del estilo visual.
- **Fetch API**: Para la comunicación con el backend y la obtención de datos.

### Backend:
- **Django**: Framework web de Python que gestiona el modelo de datos y las APIs.
- **Django REST Framework (DRF)**: Para la creación de APIs RESTful y la serialización de datos.
- **SQLite**: Base de datos utilizada para el almacenamiento de los datos.

### Almacenamiento de Imágenes:
- Django maneja la carga de imágenes de productos a través de `ImageField` y utiliza `Pillow` para procesar imágenes.

## Instalación y Configuración

### Backend (Django)

1. Clona el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/antojitos.git
    cd antijitos
    ```

2. Crea y activa un entorno virtual:

    ```bash
    python -m venv env
    source env/bin/activate
    ```

3. Instala las dependencias:

    ```bash
    pip install -r requirements.txt
    ```

4. Realiza las migraciones para crear la base de datos:

    ```bash
    python manage.py migrate
    ```

5. Ejecuta el servidor de desarrollo:

    ```bash
    python manage.py runserver
    ```

### Frontend (React)

1. Desde la carpeta raíz del proyecto, navega al directorio del frontend:

    ```bash
    cd frontend
    ```

2. Instala las dependencias de React:

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo de React:

    ```bash
    npm start
    ```

El frontend estará disponible en `http://localhost:3000` y el backend en `http://localhost:8000`.

## Uso

### Secciones de la aplicación:

- **Clientes**: Visualización de la lista de clientes registrados.
- **Inventario**: Visualización de los productos con stock disponible, incluyendo las imágenes.
- **Ventas**: Registro de ventas con detalles de productos y clientes.

### Endpoints de la API:

- `/api/clientes/`: Devuelve los detalles de los clientes.
- `/api/inventario/productos/`: Devuelve los productos disponibles.
- `/api/ventas/ventas/`: Devuelve los registros de ventas con detalles.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una rama con la nueva funcionalidad (`git checkout -b nueva-funcionalidad`).
3. Haz un commit de tus cambios (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo `LICENSE`.
