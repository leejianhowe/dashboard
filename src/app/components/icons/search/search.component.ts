import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const SEARCH_ICON = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6.5" cy="6.5" r="5.75" stroke="#C5C7CD" stroke-width="1.5"/>
<path d="M11 11L15 15" stroke="#C5C7CD" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`;

@Component({
  selector: 'icon-search',
  templateUrl: 'search.component.html',
})
export class IconSearch {
  @Input() iconHeight: string = '1rem';
  @Input() iconWidth: string = '1rem';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral(
      'search',
      sanitizer.bypassSecurityTrustHtml(SEARCH_ICON
      )
    );
  }
}
