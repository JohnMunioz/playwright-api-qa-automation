# 📡 playwright-api-testing

Proyecto de automatización de pruebas para API REST utilizando [Playwright](https://playwright.dev/) y TypeScript. Este repositorio tiene como objetivo afianzar conocimientos en QA mediante la validación de endpoints HTTP de ejemplo, siguiendo buenas prácticas en pruebas automatizadas.

## 🚀 Tecnologías utilizadas

- [`Playwright`](https://playwright.dev/)
- [`TypeScript`](https://www.typescriptlang.org/)
- [`Node.js`](https://nodejs.org/)
- [`JSONPlaceholder`](https://jsonplaceholder.typicode.com/) (API pública para pruebas)

---

## 📁 Estructura del proyecto
```plaintext
playwright-api-testing/
├── tests/
│   └── requests.spec.ts       # Contiene pruebas de API: GET, POST, PUT y DELETE
├── playwright.config.ts       # Configuración de Playwright: baseURL, headers, reporter, etc.
├── package.json               # Configura dependencias y scripts de ejecución del proyecto
├── package-lock.json          # Registra versiones exactas de dependencias instaladas
├── .gitignore                 # Archivos y carpetas excluidos del control de versiones
├── node_modules/              # Módulos instalados por npm
├── playwright-report/         # Reporte HTML generado tras ejecutar pruebas
└── test-results/              # Resultados de ejecución y trazas de Playwright
```

---


## 🧪 Casos de prueba incluidos

| Método | Endpoint            | Descripción                                 |
|--------|---------------------|---------------------------------------------|
| GET    | `/todos/1`          | Obtener un recurso específico               |
| POST   | `/posts/`           | Crear un nuevo recurso                      |
| PUT    | `/posts/1`          | Editar un recurso existente                 |
| DELETE | `/posts/1`          | Eliminar un recurso existente               |


---

## ⚙️ Cómo ejecutar

1. `Instala las dependencias:`
   ```bash
   npm install
    ```

2. `Ejecuta todas las pruebas:`
   ```bash
   npx playwright test
    ```

3. `Abre el reporte HTML generado:`
   ```bash
   npx playwright show-report
    ```
---

### 📷 Capturas y trazas
Playwright genera automáticamente reportes con trazas cuando una prueba falla (o en el primer intento si está configurado). Puedes acceder a ellos desde la carpeta `playwright-report/.`

### 🎯 Objetivo del proyecto
Este proyecto tiene como objetivo:

- `Practicar automatización de pruebas de API con Playwright.`
- `Aplicar principios de testing como validación de status code, headers y contenido.`
- `Familiarizarse con el flujo de trabajo de pruebas automáticas en entornos de desarrollo reales.`

### 📌 Configuración destacada
- `Base URL configurada: https://jsonplaceholder.typicode.com/todos`
- `Headers personalizados incluidos en cada request.`
- `Reporter en formato HTML.`
- `Se habilita traza en primer intento fallido (trace: 'on-first-retry').`

## 👨‍💻 Autor
-`Nombre: ***John Muñoz***`

### 📚 Recursos de referencia
[`Playwright Docs`](https://playwright.dev/docs/api/class-playwright)
[`JSONPlaceholder`](https://jsonplaceholder.typicode.com/)

### 💡 Siéntete libre de clonar este repo y usarlo como base para tus propios proyectos de automatización API.
🚀 Este proyecto forma parte de una serie de ejercicios prácticos para fortalecer habilidades en testing automatizado de APIs usando tecnologías modernas.