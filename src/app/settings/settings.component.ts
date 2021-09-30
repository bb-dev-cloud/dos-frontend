import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  token: String = "";
  ticketTypes: Array<any> = new Array();

  ticketTypeForm = new FormGroup({
    name: new FormControl(''),
    project: new FormControl(''),
    workItem: new FormControl('')
  });

  constructor(private settingsService: SettingsService) {
    settingsService.getToken().subscribe(x => {
      this.token = x;
    });
  }

  ngOnInit(): void {
  }

  addTicketType(): void {
    //would do some api call here

    this.ticketTypes.push(this.ticketTypeForm.value);
    this.ticketTypeForm.reset();
  }

  deleteTicketType(i: number): void {
    //would do some api call here

    this.ticketTypes.splice(i, 1);
  }

}
