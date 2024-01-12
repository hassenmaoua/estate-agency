import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApartementService } from '../services/apartement.service';
import { Apartment } from 'src/core/models/apartement';
import { ConsumerApartementService } from '../services/consumer-apartement.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-apartment',
  templateUrl: './form-apartment.component.html',
  styleUrls: ['./form-apartment.component.css']
})
export class FormApartmentComponent {

  constructor(private location: Location, private route: Router, private activeRoute: ActivatedRoute, private cons: ConsumerApartementService) { }

  id!: number
  apartment!: Apartment
  apartForm!: any


  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.id = +params['id']

    })

    this.id = this.activeRoute.snapshot.params['id']
    this.cons.getApartmentById(this.id).subscribe((data) => {
      this.apartment = data;

      this.apartForm.patchValue(this.apartment)
    })


    console.log(this.apartment)

    this.apartForm = new FormGroup(
      {
        appartNum: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
        floorNum: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
        surface: new FormControl('', [Validators.required]),
        terrace: new FormControl('yes', [Validators.required]),
        surfaceTerrace: new FormControl('', { validators: [this.surfaceTerraceValidator], updateOn: 'change' }),
        category: new FormControl('S+1', [Validators.required]),
        description: new FormControl('', [Validators.required, Validators.minLength(10)]),
        residence: new FormControl('', [Validators.required])

      }
    )



  }

  onSubmit() {
    // this.service.addApartment(this.apartForm.value)
    if (this.id) {
      this.cons.updateApartment(this.id, this.apartForm.value).subscribe({ next: () => this.route.navigateByUrl('/apartements'), error: (error) => console.log(error) })

    } else {
      this.cons.createApartment(this.apartForm.value).subscribe({ next: () => this.route.navigateByUrl('/apartements'), error: (error) => console.log(error) })
    }
  }

  reset() {
    this.apartForm.reset
    this.location.back()
  }



  surfaceTerraceValidator(control: any) {
    if (control.parent && control.parent.get('terrace').value === 'yes' && !control.value) {
      return { required: true };
    }
    return null;
  }

}
