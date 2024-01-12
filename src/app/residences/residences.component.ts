import { Component } from '@angular/core';
import { Apartment } from 'src/core/models/apartement';
import { APARTMENTS, RESIDENCES, } from 'src/core/globals';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: []
})
export class ResidencesComponent {
  listResidences: Residence[] = RESIDENCES
  listAppartements: Apartment[] = APARTMENTS

  selectedResidenceIndex?: number;
  surfaceFilter!: number;

  showApartments(index: number): void {
    if (this.selectedResidenceIndex === index)
      this.selectedResidenceIndex = undefined
    else
      this.selectedResidenceIndex = index;
  }

  getFilteredApartments(): Apartment[] {
    let filteredApartments: Apartment[] = [];

    if (this.selectedResidenceIndex) {
      const selectedResidence = this.listResidences[this.selectedResidenceIndex];
      filteredApartments = this.listAppartements.filter(apartment => apartment.residence === selectedResidence);
    }

    if (this.surfaceFilter) {
      filteredApartments = this.listAppartements.filter(apartment => apartment.surface >= this.surfaceFilter);
    }

    return filteredApartments;
  }

  likeList: number[] = []

  reciveLikes(e: any): void {
    const index = this.likeList.indexOf(e);

    if (index !== -1) {
      this.likeList.splice(index, 1);
    } else {
      this.likeList.push(e);
    }
  }
  isLiked(residenceIndex: number): boolean {
    return this.likeList.includes(residenceIndex);
  }

  favoritList: number[] = []

  handleFavorit(appartementId: number): void {
    const index = this.favoritList.indexOf(appartementId);

    if (index !== -1) {
      this.favoritList.splice(index, 1);
    } else {
      this.favoritList.push(appartementId);
    }
  }

  isFavorite(appartementId: number): boolean {
    return this.favoritList.includes(appartementId);
  }

  buyList: number[] = []

  handleBuyAppartement(appartementId: number): void {
    this.buyList.push(appartementId)
  }

  isAppartementAvailable(appartementId: number): boolean {
    return this.buyList.includes(appartementId);
  }




}
