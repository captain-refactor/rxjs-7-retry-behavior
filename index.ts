import { of } from 'rxjs';
import { map, share, retry, tap, take, delay, toArray } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5).pipe(
  share(),
  tap(n => {
    if (n === 3) throw 'boom';
  }),
  retry()
);

source
  .pipe(
    take(100),
    toArray()
  )
  .subscribe(result => {
    document.getElementById('result').innerText = JSON.stringify(result);
  });
