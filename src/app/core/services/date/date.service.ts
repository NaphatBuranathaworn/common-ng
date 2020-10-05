import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import * as th from 'dayjs/locale/th';
import * as buddhistEra from 'dayjs/plugin/buddhistEra';

dayjs.extend(buddhistEra);

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  formatDate(d: string) {
    return d ? dayjs(d).locale(th).format('DD MMM BBBB') : '-';
  }
}
