 import {proxy} from 'valtio'; 

 const state = proxy({
    intro: true, // are we in homepage or not 
    color: '#EFBD48',
    isLogoTexture: true,// are we using logo texture or not on shirt 
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png',
 });

 export default state; 