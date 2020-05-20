import { observable, action, computed } from "mobx";
import React, { createContext } from "react";

class MarvelModel {
  @observable events = null;
  @observable comics = null;

  @action async loadEvents() {
    const response = await fetch("http://gateway.marvel.com/v1/public/events/253?ts=1&apikey=5cfd7abf0015cce44e75995718376ac6&hash=5ba629ad49c439677d0b421267057665");
    const json = await response.json();
    if(json.results != null) {
      this.events = json.results;
    } else {
      this.events = "love";
    }
    // Afegeixo un camp de tipus per poder distingir als favourites
    //this.events.forEach((event) => (event.type = "event"));
  }

  /*
  @action async loadComics() {
    const response = await fetch("http://gateway.marvel.com//v1/public/comics/78629?ts=1&apikey=5cfd7abf0015cce44e75995718376ac6&hash=5ba629ad49c439677d0b421267057665");
    const json = await response.json();
    this.setState({
      comics: json.code
    });
    // Afegeixo un camp de tipus per poder distingir als favourites
    this.comics.forEach((comic) => (comic.type = "comic"));
  }
  */
  

  /*@computed get favourites() {
    let favs = [
      ...(this.people ? this.people.filter((p) => p.favourite) : []),
      ...(this.planets ? this.planets.filter((p) => p.favourite) : []),
    ];
    return favs;
  }*/
}
/*
const model = new MarvelModel();

export const MarvelContext = createContext(model);

export const MarvelProvider = ({ children }) => (
  <MarvelContext.Provider value={model}>{children}</MarvelContext.Provider>
);
*/

const MarvelContext = new MarvelModel();
export default MarvelContext;