# Práctica de Cristian Varela Casas, módulo de Fundamentos de React, Bootcamp Web XIV de KeepCoding.

## 2a corrección de la práctica; notas para David:

1. Se consigue que en el repositorio el nombre de Button.jsx no figure como button.jsx. ('/src/components/common/Button.jsx').
2. Se utiliza un error en el interceptor de axios para que, en la página de login, se le de feedback al usuario en el caso de que haya cometido algún error. En LoginPage.jsx ha sido necesario crear un estado de error y he decidido cambiar de promesas a async/await en la petición de los datos al servidor. Se ha realizado el estilo CSS con Chat GPT.
3. Se utiliza el hook useLocation() en el componente de autenticación (AuthComponent.jsx) junto con la propiedad 'state' en su Navigate para pasárselo a LoginPage y redirigir a la página solicitada por el usuario cuando haga el login.
4. Se crea un contexto para manejar la autenticación: todas las propiedades que han necesitado ser pasadas han salido de app.js y han llegado a Layout.jsx, LoginPage.jsx y AuthComponent.jsx.
5. 
6. 
7. Se inserta en el .then() la redirección a '/' para que para que no se lleve a cabo antes de resolver el borrado
('/src/components/AdvertsPage.jsx').
8. Se elimina dos Componentes React innecesarios: Button.jsx y Confirm.jsx (se sustituyen por elementos button y sus onClick's

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
