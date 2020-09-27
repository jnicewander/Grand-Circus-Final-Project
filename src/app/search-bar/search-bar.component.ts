// TODO: Submit needs to pass query into config.component
import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private search: SearchService) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    this.search.submitData({query: form.value.query.toLowerCase()});
  }

}

