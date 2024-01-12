import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/core/models/apartement';
import { ApartementService } from '../services/apartement.service';
import { ConsumerApartementService } from '../services/consumer-apartement.service';

@Component({
  selector: 'app-apartement-details',
  templateUrl: './apartement-details.component.html',
  styleUrls: []
})
export class ApartementDetailsComponent {
  listApartements!: Apartment[]
  id!: number
  apartement!: Apartment | undefined

  constructor(private route: ActivatedRoute, private cons: ConsumerApartementService, private service: ApartementService) { }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id']
    })
    // this.id = this.route.snapshot.params['id']
    // this.apartement = this.service.APARTMENTS.find((value) => value.id === this.id)
    this.cons.getApartmentById(this.id).subscribe((data) => this.apartement = data)
  }

}
