import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../../models/product';
import {Category} from '../../models/category';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: Product[] | Category [], search: string = ''): any[] {
    if (!search.trim()) {
      return list;
    }
    return list.filter(t =>  t.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

}
