import { Component, EventEmitter, Input, Output } from '@angular/core';
import { APARTMENTS, RESIDENCES } from 'src/core/globals';
import { Apartment } from 'src/core/models/apartement';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-show-one-residence',
  templateUrl: './show-one-residence.component.html',
  styleUrls: ['./show-one-residence.component.css']
})
export class ShowOneResidenceComponent {
  @Input() residence!: Residence;
  @Input() key!: number;

  @Input() isLiked!: boolean;

  @Output() emitter = new EventEmitter()

  listResidences: Residence[] = RESIDENCES
  listApartments: Apartment[] = APARTMENTS

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
      filteredApartments = this.listApartments.filter(apartment => apartment.residence === selectedResidence);
    }

    if (this.surfaceFilter) {
      filteredApartments = this.listApartments.filter(apartment => apartment.surface >= this.surfaceFilter);
    }

    return filteredApartments;
  }

  handleLike(): void {
    this.emitter.emit(this.key)
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
