import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of, map, filter, merge, range, concat, interval, take, skip, skipLast, find, every, delay, Subject, from, multicast, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { ChildnewComponent } from "../childnew/childnew.component";

@Component({
  selector: 'app-learn-rxjs',
  standalone: true,
  imports: [CommonModule, ChildnewComponent],
  templateUrl: './learn-rxjs.component.html',
  styleUrl: './learn-rxjs.component.css'
})
export class LearnRxjsComponent {
  observable = new Observable((subscriber) => {
    //Promise只能push一个value，Observable可以一次性push多个value
    //promise和observable都是push类型的，即producer决定什么时候push数据，但consumer不知道producer什么时候push数据
    subscriber.next(1);
    subscriber.next(2);
    //subscriber.complete();
    //complete will stop this chain, operators not executed will not run again
    //we can use subscriber.complete() manually or this will be executed automatically when unscribe
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 10);
    setTimeout(() => {
      subscriber.next(5);
      subscriber.complete();
    }, 2000);
    // subscriber.complete()

  });

  ticketInfo = [
    { 'id': 1, 'name': 'angular', color: 'green' },
    { 'id': 2, 'name': 'react', color: 'red' },
    { 'id': 3, 'name': 'vue', color: 'blue' },
  ]

  ticketInfo$ = of(this.ticketInfo)


  subscribeFn() {
    console.log('just before subscribe');
    const subscription = this.observable.subscribe({
      next(x) {
        console.log('got value ' + x);
        console.log('secondlog')
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('done');
      },
    });
    console.log('just after subscribe');
    setTimeout(() => {
      subscription.unsubscribe()
      console.log('after unsubscribe')
    }, 1000)
  }



  subscribeTicket() {
    this.ticketInfo$.subscribe({
      next: item => {
        console.log('ticketInfoValue:', item)
      }
    })
  }

  pipeableFn() {
    const mergeOb = of(12, 6, 9)
    //merge并行处理，concat顺序处理
    // concat(mergeOb, range(1, 10), of(1, 2, 3, 4))
    //   .pipe(map(x => x * x))
    //   .pipe(filter(x => x != 9))
    //   .subscribe({
    //     next: item => {
    //       console.log(item)
    //     }
    //   })
    merge(mergeOb, range(1, 10), of(1, 2, 3, 4))
      .pipe(map(x => x * x))
      .pipe(filter(x => x != 9))
      .subscribe({
        next: item => {
          // console.log(item)
        }
      })

    interval(1000)
      .pipe(
        map(item => item * item),
        take(6), //只取前6个
        filter(item => item != 16),
        skip(1), //忽略前1个
        skipLast(2), //忽略最后两个
        // every(x => x >= 4)  //返回true或者false
        // find(x => x % 5 !== 0)  //find找到符合条件的后会退出
      )
      .subscribe({
        next: item => {
          console.log(item)
        }
      })
  }

  /*a basic subject that can emit and listen to events */
  subjectFn() {
    console.log('Every Subject is an Observable')
    const subject = new Subject<number>();
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });
    subject.next(1);
    subject.next(2);

    console.log('Every Subject is an Observer')
    const observable = from([1, 2, 3]);
    observable.subscribe(subject);
  }

  multicastObservableFn() {
    const source = from([1, 2, 3]);
    const subject = new Subject();
    const multicasted = source.pipe(multicast(subject));

    // These are, under the hood, `subject.subscribe({...})`:
    multicasted.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    multicasted.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    // This is, under the hood, `source.subscribe(subject)`:
    // multicasted.connect();
  }

  /* Emits the last value to new subscribers */
  behaviorSubjectFn() {
    const subject = new BehaviorSubject(0); // 0 is the initial value

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(3);
  }

  /* compared to behavior subject, replay subject emeits all previously emitted values to new subscribers */
  replaySubjectFn() {
    const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(5);
  }

  /* emeits the last value emitted before completion */
  asyncSubjectFn() {
    const subject = new AsyncSubject();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(5);
    subject.complete();
  }

  voidSubjectFn() {
    const subject = new Subject(); // Shorthand for Subject<void>

    subject.subscribe({
      next: () => console.log('One second has passed'),
    });

    setTimeout(() => subject.next(1), 1000);
  }

}
