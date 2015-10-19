# MEAN Crud
Aprendendo mean (MongoDB, Express, AngularJS, NodeJs através das video-aulas de:

1. Learn Coding Tutorials, disponível em: https://www.youtube.com/watch?v=kHV7gOHvNdk


# Iniciar os serviços para a Execução #
Iniciar o mongo
` mongo `

Vá para a pasta do projeto, no meu caso `cd /var/www/html/mean` e execute o comando abaixo
` node service `

# Preparar o Ambiente de Desenvolvimento #
## Instalações ##
### Install NodeJS ###
```
curl --silent --location https://deb.nodesource.com/setup_4.x | sudo bash -
sudo apt-get install nodejs
```

### Install MongoDB ###
```
sudo apt-get install mongodb
mkdir /data/mongodb
# Dê as permissões na pasta
mongod
```

## Complementos ##

### Install MongoJS ###
`npm install mongojs`

### Install Body-parser ###
`npm install body-parser`