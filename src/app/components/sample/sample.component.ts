import { Component, OnInit } from '@angular/core';
import { SampleService } from '../../data/sample.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})

export class SampleComponent {

  private videos: Array<any>;

  constructor(private sampleService: SampleService) {}

  ngOnInit() {
    this.sampleService.getVideos().then(data => {
      console.log(data);
      this.videos = data;
    });
  }
}
