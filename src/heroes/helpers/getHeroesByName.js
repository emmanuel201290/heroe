import { heroes } from "../data/heroes";

export const getHeroByName  = (name = '') =>{
  console.log('cual es el nombre', name)

    name = name.toLocaleLowerCase().trim();

    if( name.length === 0) return []
    
     return heroes.filter(
         hero => hero.superhero.toLocaleLowerCase().includes( name )
     )

}