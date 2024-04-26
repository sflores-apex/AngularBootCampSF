import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-pagination',
  templateUrl: './list-pagination.component.html',
  styleUrl: './list-pagination.component.scss'
})
export class ListPaginationComponent {
  @Input() listLength: number = 0;
  @Output() paginate = new EventEmitter<number>();

  get paginationBtnsCount(): number[] {
    if (!this.listLength) {
      return [];
    }

    const btnCount = Math.ceil(this.listLength / 5)
    return [...Array(btnCount).keys()].map(i => i + 1);;
  }

  protected goToPage(page: number): void {
    this.paginate.next(page);
  }

}
