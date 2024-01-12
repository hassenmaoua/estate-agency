import { Injectable } from '@angular/core';
import { Apartment } from 'src/core/models/apartement';
import { RESIDENCES } from 'src/core/globals';

@Injectable({
  providedIn: 'root'
})
export class ApartementService {

  constructor() { }

  addApartment(a: any) { this.APARTMENTS.push(a) }

  APARTMENTS: Apartment[] = [
    { id: 1, appartNum: 1, floorNum: 0, surface: 100, terrace: "yes", surfaceTerrace: 20, category: "S+1", description: "AppartementS+1", residence: RESIDENCES[0] },
    { id: 2, appartNum: 2, floorNum: 0, surface: 130, terrace: "no", surfaceTerrace: 0, category: "S+2", description: "AppartementS+2", residence: RESIDENCES[0] },
    { id: 3, appartNum: 3, floorNum: 0, surface: 150, terrace: "yes", surfaceTerrace: 30, category: "S+3", description: "AppartementS+3", residence: RESIDENCES[1] },
    { id: 4, appartNum: 4, floorNum: 0, surface: 120, terrace: "yes", surfaceTerrace: 25, category: "S+2", description: "AppartementS+2", residence: RESIDENCES[3] },
    { id: 5, appartNum: 5, floorNum: 1, surface: 90, terrace: "no", surfaceTerrace: 0, category: "S+1", description: "AppartementS+1", residence: RESIDENCES[3] },
    { id: 6, appartNum: 6, floorNum: 0, surface: 110, terrace: "yes", surfaceTerrace: 20, category: "S+1", description: "AppartementS+1", residence: RESIDENCES[4] },
    { id: 7, appartNum: 7, floorNum: 2, surface: 140, terrace: "yes", surfaceTerrace: 30, category: "S+3", description: "AppartementS+3", residence: RESIDENCES[4] },
    { id: 8, appartNum: 8, floorNum: 1, surface: 100, terrace: "no", surfaceTerrace: 0, category: "S+2", description: "AppartementS+2", residence: RESIDENCES[5] },
    { id: 9, appartNum: 9, floorNum: 0, surface: 130, terrace: "yes", surfaceTerrace: 25, category: "S+1", description: "AppartementS+1", residence: RESIDENCES[5] },
    { id: 10, appartNum: 10, floorNum: 2, surface: 150, terrace: "yes", surfaceTerrace: 40, category: "S+3", description: "AppartementS+3", residence: RESIDENCES[6] },
    { id: 11, appartNum: 11, floorNum: 0, surface: 80, terrace: "no", surfaceTerrace: 0, category: "S+1", description: "AppartementS+1", residence: RESIDENCES[6] },
    { id: 12, appartNum: 12, floorNum: 1, surface: 120, terrace: "yes", surfaceTerrace: 30, category: "S+2", description: "AppartementS+2", residence: RESIDENCES[6] }
  ];

}
