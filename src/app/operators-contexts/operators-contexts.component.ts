import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-operators-contexts',
  templateUrl: './operators-contexts.component.html',
  styleUrls: ['./operators-contexts.component.scss'],
})
export class OperatorsContextsComponent implements OnInit {
  contexts = [
    {
      name: 'map',
      goal: 'Mapping',
      code: 'map',
    },
    {
      name: 'mergeMap',
      goal: 'Mapping + flattening',
      code: 'merge-map',
    },
    {
      name: 'merge',
      goal: 'Merging multiple sources',
      code: 'merge',
    },
    {
      name: 'combineLatest',
      goal: 'Combining multiple sources',
      code: 'combine-latest',
    },
    {
      name: 'filter',
      goal: 'Filtering',
      code: 'filter',
    },
    {
      name: 'debounceTime',
      goal: 'Rate Limiting',
      code: 'debounceTime',
    },
    {
      name: 'take',
      goal: 'Taking',
      code: 'take',
    },
    {
      name: 'skip',
      goal: 'Skipping',
      code: 'skip',
    },
    {
      name: 'scan',
      goal: 'Scanning',
      code: 'scan',
    },
    {
      name: 'reduce',
      goal: 'Reducing',
      code: 'reduce',
    },
    {
      name: 'find',
      goal: 'Finding',
      code: 'find',
    },
    {
      name: 'every',
      goal: 'Conditional',
      code: 'every',
    },
    {
      name: 'window',
      goal: 'Windowing',
      code: 'window',
    },
    {
      name: 'buffer',
      goal: 'Buffering',
      code: 'buffer',
    },
    {
      name: 'delay',
      goal: 'Delaying',
      code: 'delay',
    },
    {
      name: 'mergeAll',
      goal: 'Flattening',
      code: 'merge-all',
    },
  ]

  constructor() {}

  ngOnInit(): void {}
}
