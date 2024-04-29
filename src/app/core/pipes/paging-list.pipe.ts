import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagingList'
})
export class PagingListPipe implements PipeTransform {

  private readonly ITEMS_PER_PAGE = 5;

  transform(list: any[] | null, page: number): any[] {
    if (!list) {
      return [];
    }

    const LAST_ITEM_INDEX: number = page * this.ITEMS_PER_PAGE;
    return list.slice(LAST_ITEM_INDEX - this.ITEMS_PER_PAGE, LAST_ITEM_INDEX);
  }

}
