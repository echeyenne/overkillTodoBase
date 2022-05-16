import { Pipe, PipeTransform } from '@angular/core';
import { FormatDateModel, LanguageFormat } from '../models/date';
import * as DateFormatUtils from '../utils/date.utils';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(date: string , type?: LanguageFormat): string {
    return DateFormatUtils.formatDate({ type , date: new Date(date)});
  }

}
