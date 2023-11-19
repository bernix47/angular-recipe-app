import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recognition-dropdown',
  templateUrl: './recognition-dropdown.component.html',
  styleUrls: ['./recognition-dropdown.component.css'],
})
export class RecognitionDropdownComponent {
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedOptions: string[] = [];
  searchTerm: string = '';
  dropdownOpen: boolean = false;

  @ViewChild('searchInput') searchInput: ElementRef;

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen && this.searchInput) {
      setTimeout(() => this.searchInput.nativeElement.focus(), 0);
    }
  }

  onInputClick(): void {
    if (!this.dropdownOpen) {
      this.toggleDropdown();
    }
  }

  onInputFocus(): void {
    if (!this.dropdownOpen) {
      this.toggleDropdown();
    }
  }

  onBlur(): void {
    setTimeout(() => {
      if (!this.searchInput.nativeElement.contains(document.activeElement)) {
        this.dropdownOpen = false;
      }
    }, 0);
  }

  toggleOption(option: string): void {
    if (this.isSelected(option)) {
      this.selectedOptions = this.selectedOptions.filter(o => o !== option);
    } else {
      this.selectedOptions.push(option);
    }
  }

  removeOption(option: string): void {
    this.selectedOptions = this.selectedOptions.filter(o => o !== option);
  }

  isSelected(option: string): boolean {
    return this.selectedOptions.includes(option);
  }

  get filteredOptions(): string[] {
    return this.options.filter(option =>
      option.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
