import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'sortArray'
})
export class SortArrayPipe implements PipeTransform {

  transform(value: any[], sortField: string, direction: 'asc' | 'desc'): any[] {
    value = _.orderBy(value, [sortField], direction);
    return value;
  }

}
