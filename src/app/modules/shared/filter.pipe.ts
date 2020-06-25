import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Product} from '../../models/product';
import {Category} from '../../models/category';
@Injectable({providedIn: 'root'})
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(list: Product[] | Category [], search: string = '', minPrice: number = -1, maxPrice: number = -1, minAmount: number = -1, maxAmount: number = -1): any[] {
    search = search.trim();
    if (!search.trim()&&minAmount ===-1&&maxAmount===-1&&minPrice===-1&&maxPrice===-1) {
      return list;
    }
    if(minPrice!=-1)
      list = list.filter(t=> t.price>=minPrice);
    if(maxPrice!=-1)
      list = list.filter(t=> t.price<=maxPrice);
    if(minAmount!=-1)
      list = list.filter(t=> t.amount>=minAmount);
    if(maxAmount!=-1)
      list = list.filter(t=> t.amount<=maxAmount);
    return list.filter(t =>  t.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

}
