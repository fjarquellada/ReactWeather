#############################
       PUESTA EN MARCHA
#############################

nmp init

npm install express@4 --save

#Cuando instale borrar el paquete node_mudules y volver a ejecutar npm install
#creo que lo hace para que en el package.json se guarde la entrada "dependencies": {
#  "express": "^4.15.2"
#}

{
  "name": "hello-react",
  "version": "1.0.0",
  "description": "Simple React App",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Francisco José",
  "license": "ISC",
  "dependencies": {
    "express": "^4.15.2"
  }
}


npm install

#Se generará nuevamente la carpeta node_modules, con muchas dependencias
#Crear el fichero server.js con el siguiente contenido:

var express = require('express');

//create our App
var app = express();
app.use(express.static('public'));

app.listen(3000, function(){
    console.log('express server is up on port 3000 ...');
});

#Crear una carpeta public y dentro un fichero index.html con un contenido muy básico:
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"></meta>
  </head!>
  <body>
    <h1>Hello World </h1>
  </body>
</html>
#ejecutar el siguiente comando para arrancar el servidor
node server.js
#ver el resultado en http://localhost:3000

################################
#       ADDING WEBPACK         #
################################
npm install -g webpack

npm install --save react react-dom

npm install --save-dev babel babel-core babel-loader babel-preset-es2015 babel-preset-react

#Con esto ya tenemos todo lo necesario en el fichero package.json, ahora se puede borrar
#tranquilamente el directorio node_modules y ejecutar npm install, así 
#se volverá a crear el directorio con todas las dependencias necesarias
npm install

#Para poder usar nuevas funcionalidades de ES6 se instala el siguiente paquete
npm install babel-preset-stage-0 --save-dev

#Instalación del router de react:
npm install react-router@2.0.0 --save

#Libreria para llamadas Ajax axios
npm install axios --save

#comandos git
git init
git status
git add .
git commmit -m 'message'
#para comitear ficheros que ya están en git, pero que han sido modificados.
git commit -a -m 'message'

#Crear clave ssh para GitHub
#Se mira si hay alguna ssh key en el directorio .ssh
ls -al ~/.ssh 
#comando para crear la llave
ssh-keygen -t rsa -b 4096 -C 'fj.arquellada@gmail.com'
#
eval "$(ssh-agent -s)"
#comprobación si se ha creado
ls -al ~/.ssh
#Añadir la clave creada
ssh-add ~/.ssh/id_rsa

#Comando para mostrar la clave:
more ~/.ssh/id_rsa.pub
#se copia y se pega en Github settings SSH and GPG keys

#para probar la conexión con github se ejecuta el siguiente comando
ssh -T git@github.com

#####################
###### HEROKU #######
#####################
#instalar las tools de heroku
brew install heroku
#login
$heroku login
#Crear aplicaicón en heroku
$ heroku create
Creating app... done, ⬢ fierce-springs-71844
https://fierce-springs-71844.herokuapp.com/ | https://git.heroku.com/fierce-springs-71844.git
#Verificar rutas de repositorios 
$ git remote -v
heroku	https://git.heroku.com/fierce-springs-71844.git (fetch)
heroku	https://git.heroku.com/fierce-springs-71844.git (push)
origin	https://github.com/fjarquellada/ReactWeather.git (fetch)
origin	https://github.com/fjarquellada/ReactWeather.git (push)
#Subir aplicación a Heroku
$ git push heroku master
#Después de hacer cambios en el código para subirlos a heroku
$ webpack #crea el nuevo fichero builder.js
$ git commit -a -m 'Mensage' # commit de los cambios
$ git push origin master #sube a GitHub
$ git push heroku master #sube a Heroku provocando recarga de app