import { observable, action, computed } from "mobx";
import React, { createContext } from "react";

class MarvelModel {
  @observable secretWarsEvent = null;
  @observable starWarsEvent = null;
  @observable avengersEvent = null;
  
  @observable event = null;

  @action async loadEvents() {
    const response1 = await fetch("http://gateway.marvel.com/v1/public/events/323?ts=1&apikey=5cfd7abf0015cce44e75995718376ac6&hash=5ba629ad49c439677d0b421267057665");
    const json1 = await response1.json();
    this.secretWarsEvent = json1.data.results;

    const response2 = await fetch("http://gateway.marvel.com/v1/public/events/327?ts=1&apikey=5cfd7abf0015cce44e75995718376ac6&hash=5ba629ad49c439677d0b421267057665");
    const json2 = await response2.json();
    this.starWarsEvent = json2.data.results;

    const response3 = await fetch("http://gateway.marvel.com/v1/public/events/310?ts=1&apikey=5cfd7abf0015cce44e75995718376ac6&hash=5ba629ad49c439677d0b421267057665");
    const json3 = await response3.json();
    this.avengersEvent = json3.data.results;
    /*if(json.data && json.data.results) {
      this.events = json.data.results;
    } else {
      this.events = "love";
    }*/
    // Afegeixo un camp de tipus per poder distingir als favourites
    //this.events.forEach((event) => (event.type = "event"));
  }

  @action async loadEventById(id) {
    const response1 = await fetch("http://gateway.marvel.com/v1/public/events/" + id + "?ts=1&apikey=5cfd7abf0015cce44e75995718376ac6&hash=5ba629ad49c439677d0b421267057665");
    const json1 = await response1.json();
    this.event = json1.data.results;
  }

  @action async loadComicById(id) {
    const response1 = await fetch("http://gateway.marvel.com/v1/public/comics/" + id + "?ts=1&apikey=5cfd7abf0015cce44e75995718376ac6&hash=5ba629ad49c439677d0b421267057665");
    const json1 = await response1.json();
    this.comic = json1.data.results;
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

const model = new MarvelModel();

export const MarvelContext = createContext(model);
export default MarvelContext;

export const MarvelProvider = ({ children }) => (
  <MarvelContext.Provider value={model}>
    {children}
  </MarvelContext.Provider>
);

