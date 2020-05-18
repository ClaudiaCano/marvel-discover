import { observable, action, computed } from "mobx";
import React, { createContext } from "react";

class MarvelModel {
  @observable events = null;

  @action async loadEvents() {
    const response = await fetch("https://gateway.marvel.com/v1/public/events");
    const json = await response.json();
    this.events = json.results;
    // Afegeixo un camp de tipus per poder distingir als favourites
    this.events.forEach((event) => (event.type = "event"));
  }

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

export const MarvelProvider = ({ children }) => (
  <MarvelContext.Provider value={model}>{children}</MarvelContext.Provider>
);