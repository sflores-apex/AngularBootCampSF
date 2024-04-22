import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../models/item';

@Pipe({
  name: 'listFiltering'
})
export class ListFilteringPipe implements PipeTransform {

  transform(list: any[] | null, filter: string, prop: string): Item[] {
    if (!list) {
      return [];
    }

    const filterLowerCase = filter.toLowerCase();
    return list.filter(item => item[prop].toLowerCase().includes(filterLowerCase));
  }

}
