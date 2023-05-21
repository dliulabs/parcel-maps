# Implementing a Parcel Web App

Setup Environment:

```
nvm use lts                                                                                                       

npm install -g parcel-bundler                                                                                     
npm install --global yarn

yarn add --dev parcel                                                                                             
yarn parcel .\index.html                                                                                          
```

Add faker library:

```
npm install @faker-js/faker

yarn start
```

Add Google Maps library:

```
npm i -D @types/google.maps
```

Here are some sample code for adding markers:

[Add Marker][https://developers.google.com/maps/documentation/javascript/examples/marker-collision-management#maps_advanced_markers_collision-typescript]


Here are some sample code for adding InfoWindow by add event listners:

[Add InfoWindow](https://developers.google.com/maps/documentation/javascript/examples/event-click-latlng)
