import { Component } from '@angular/core';
import { Apartment } from 'src/core/models/apartement';
import { ApartementService } from '../services/apartement.service';
import { CalculateService } from '../services/calculate.service';
import { ConsumerApartementService } from '../services/consumer-apartement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartements',
  templateUrl: './apartements.component.html',
  styleUrls: []
})
export class ApartementsComponent {
  listAppartements!: Apartment[]
  surfaceFilter!: number
  countSurface!: number
  countTerrace!: number
  sumSurface!: number
  sumTerrace!: number

  constructor(private cons: ConsumerApartementService, private route: Router, private calculateService: CalculateService) { }

  ngOnInit() {
    // this.listAppartements = this.service.APARTMENTS
    this.cons.getApartments().subscribe((data) => this.listAppartements = data)
    this.countSurface = this.calculateService.count(this.listAppartements, 'surface', this.surfaceFilter)
    this.countTerrace = this.calculateService.count(this.listAppartements, 'surfaceTerrace', 0)
    this.sumSurface = this.calculateService.sum(this.listAppartements, 'surface')
    this.sumSurface = this.calculateService.sum(this.listAppartements, 'surfaceTerrace')
  }





  getFilteredApartments(): Apartment[] {
    let filteredApartments: Apartment[] = [];

    if (this.surfaceFilter > 0) {
      filteredApartments = this.listAppartements.filter(apartment => apartment.surface >= this.surfaceFilter);
      this.countSurface = this.calculateService.count(this.listAppartements, 'surface', this.surfaceFilter)
    }
    else {
      filteredApartments = this.listAppartements
    }

    return filteredApartments;
  }

  favoritList: number[] = []

  handleDelete(id: number) {
    this.cons.deteleApartment(id).subscribe(() => this.ngOnInit())
  }

  handleUpdate(id: number) {
    this.route.navigateByUrl(`/apartements/update/${id}`)
  }

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
