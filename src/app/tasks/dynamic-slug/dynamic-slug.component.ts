import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-slug',
  templateUrl: './dynamic-slug.component.html',
  styleUrl: './dynamic-slug.component.scss'
})
export class DynamicSlugComponent implements OnInit {

  protected slug: string = '';

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
  }

}
