'use strict';

import { Apartment } from "./models/apartement";
import { Residence } from "./models/residence";

export const RESIDENCES: Residence[] = [
    { id: 1, name: "El fel", address: "Borj Cedria", image: "../../assets/images/R1.jpg" },
    { id: 2, name: "El yasmine", address: "Ezzahra", image: "../../assets/images/R2.jpg" },
    { id: 3, name: "El Arij", address: "Rades", image: "../../assets/images/R3.jpg" },
    { id: 4, name: "El Anber", address: "Manzah 5", image: "../../assets/images/R4.jpg" },
    { id: 5, name: "La Perla", address: "La Marsa", image: "../../assets/images/R5.jpg" },
    { id: 6, name: "Golden Sands", address: "Gammarth", image: "../../assets/images/R6.jpg" },
    { id: 7, name: "Jasmine Towers", address: "Les Berges du Lac", image: "../../assets/images/R7.jpg" },
    { id: 8, name: "Royal Residence", address: "Carthage", image: "../../assets/images/R8.jpg" }
];

export const APARTMENTS: Apartment[] = [
    { id: 1, appartNum: 1, floorNum: 0, surface: 100, terrace: "oui", surfaceTerrace: 20, category: "S+1", description: "AppartementS+1", residence: RESIDENCES[0] },
    { id: 2, appartNum: 2, floorNum: 0, surface: 130, terrace: "non", surfaceTerrace: 0, category: "S+2", description: "AppartementS+2", residence: RESIDENCES[0] },
    { id: 3, appartNum: 3, floorNum: 0, surface: 150, terrace: "oui", surfaceTerrace: 30, category: "S+3", description: "AppartementS+3", residence: RESIDENCES[1] },
    { id: 4, appartNum: 4, floorNum: 0, surface: 120, terrace: "oui", surfaceTerrace: 25, category: "S+2", description: "AppartementS+2", residence: RESIDENCES[3] },
    { id: 5, appartNum: 5, floorNum: 1, surface: 90, terrace: "non", surfaceTerrace: 0, category: "S+1", description: "AppartementS+1", residence: RESIDENCES[3] },
    { id: 6, appartNum: 6, floorNum: 0, surface: 110, terrace: "oui", surfaceTerrace: 20, category: "S+1", description: "AppartementS+1", residence: RESIDENCES[4] },
    { id: 7, appartNum: 7, floorNum: 2, surface: 140, terrace: "oui", surfaceTerrace: 30, category: "S+3", description: "AppartementS+3", residence: RESIDENCES[4] },
    { id: 8, appartNum: 8, floorNum: 1, surface: 100, terrace: "non", surfaceTerrace: 0, category: "S+2", description: "AppartementS+2", residence: RESIDENCES[5] },
    { id: 9, appartNum: 9, floorNum: 0, surface: 130, terrace: "oui", surfaceTerrace: 25, category: "S+1", description: "AppartementS+1", residence: RESIDENCES[5] },
    { id: 10, appartNum: 10, floorNum: 2, surface: 150, terrace: "oui", surfaceTerrace: 40, category: "S+3", description: "AppartementS+3", residence: RESIDENCES[6] },
    { id: 11, appartNum: 11, floorNum: 0, surface: 80, terrace: "non", surfaceTerrace: 0, category: "S+1", description: "AppartementS+1", residence: RESIDENCES[6] },
    { id: 12, appartNum: 12, floorNum: 1, surface: 120, terrace: "oui", surfaceTerrace: 30, category: "S+2", description: "AppartementS+2", residence: RESIDENCES[6] }
];
