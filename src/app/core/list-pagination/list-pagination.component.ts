import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-pagination',
  templateUrl: './list-pagination.component.html',
  styleUrl: './list-pagination.component.scss'
})
export class ListPaginationComponent {
  @Input() list: any[] | null = [];
  @Output() paginate = new EventEmitter<number>();

  get paginationBtnsCount(): number[] {
    if (!this.list) {
      return [];
    }

    const btnCount = Math.ceil(this.list?.length / 5)
    return Array.from(Array(btnCount).keys()).map(count => count * 5);
  }

  protected goToPage(page: number): void {
    this.paginate.next(page);
  }

}
