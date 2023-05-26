import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { StoriesManagementService } from 'src/app/services/stories-management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = [
    'id',
    'author_name',
    'story_name',
    'email',
    'published_on',
  ];
  storyData: any[] = [];
  dataSource = new MatTableDataSource();
  dataSourceWithPageSize = new MatTableDataSource(this.storyData);
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(private storiesServices: StoriesManagementService) {
  }

  ngOnInit() {
    this.storiesServices.getStories().subscribe((res: any) => {
      this.storyData = res;
      this.dataSource = new MatTableDataSource(this.storyData);
      this.dataSourceWithPageSize = new MatTableDataSource(this.storyData);
      this.dataSource.paginator = this.paginator;
    })
  }

}
