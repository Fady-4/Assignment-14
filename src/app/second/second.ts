import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { POSTS } from '../posts-data';

@Component({
  selector: 'app-second',
  imports: [FormsModule],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.activeCategory = params['category'];
        this.currentPage = 1;
      }
    });
  }
  searchTerm: string = '';
  activeCategory: string = 'كل المقالات';
  currentPage: number = 1;
  itemsPerPage: number = 6;

  allPosts: Post[] = POSTS;

  selectCategory(category: string) {
    this.activeCategory = category;
    this.currentPage = 1; 
  }
  clearFilters() {
  this.selectCategory('كل المقالات');
  this.searchTerm="";
  this.currentPage=1;
}

get filteredArticles(): Post[] {
  let result = this.allPosts;

  if (this.activeCategory !== 'كل المقالات') {
    result = result.filter(p => p.category === this.activeCategory);
  }

  if (this.searchTerm.trim() !== '') {
    result = result.filter(p =>
      p.title.includes(this.searchTerm) || p.excerpt.includes(this.searchTerm)
    );
  }

  return result;
}

  get totalPages(): number {
    return Math.ceil(this.filteredArticles.length / this.itemsPerPage);
  }

  get pagedArticles(): Post[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredArticles.slice(start, start + this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  prevPage() {
    this.goToPage(this.currentPage - 1);
  }
  viewMode: 'grid' | 'list' = 'grid';

setViewMode(mode: 'grid' | 'list') {
  this.viewMode = mode;
}
}