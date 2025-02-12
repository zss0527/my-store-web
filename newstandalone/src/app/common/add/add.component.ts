import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {
  routevalue: any
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.routevalue = this.router.snapshot.paramMap.get('id')
  }
}
