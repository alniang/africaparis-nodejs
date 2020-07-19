Le projet africaparis est un site web qui permet de regrouper tout ce qui tourne au tour de la mode et de la culture africaine et afro caribéenne. 
L'architechture du projet comprend les éléments suivants :
- Un front Angular qui se connecter à un backend via une API rest
- Un backend Java / Spring boot sur lequel Angular viendra se connecter
- Une base de données MySQL pour stocker les informations “métiers” du Backend
- Une base de données MongoDB pour stocker les informations “data”
- Une partie server-side en NodeJS, qui devra récolter des données, les traiter et les insérer dans la base de données MongoDB.

Le projet est composé de 6 repos github :

# scrapping : https://github.com/alniang/scrapping
# africaparis-nodejs : https://github.com/alniang/africaparis-nodejs
# africaparis-ms-evenement : https://github.com/alniang/africaparis-ms-evenement
# africaparis-ms-boutique :https://github.com/alniang/africaparis-ms-boutique
# africaparis-ms-login : https://github.com/alniang/africaparis-ms-login
# africaparis-frontend-angular : https://github.com/alniang/africaparis-frontend-angular


   # africaparis-nodejs #
Cette partie permet de de créer une api qui sera utilisé par les microservices spring. Dans cette partie on a :
  my_generic_mongo_client.js qui permet de faire la connexion avec mongodb afin d'executer le crud
  events-api-routes.js qui permet d'avoir les routes pour les appels dans les microservices de spring
  server.js qui permet d'exposer tout ce programme via une API rest
  
Ce projet est réalisé avec nodejs v12.16.3 et express 4.17.1
Pour l'utiliser il faut executer la commande npm install dans le dossier africaparis-nodejs afin d'installer les modules ensuite node server.js.
Il faut aussi changer les paramétres d'acccés à mongodb dans my_generic_mongo_client.js et eventuellement le port dans server.js
