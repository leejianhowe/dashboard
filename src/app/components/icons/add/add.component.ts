import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

const ADD_ICON = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" rx="8" fill="#F0F1F7"/>
<path d="M12 7V17" stroke="#9FA2B4" stroke-width="2" stroke-linecap="round"/>
<path d="M17 12L7 12" stroke="#9FA2B4" stroke-width="2" stroke-linecap="round"/>
</svg>

`

@Component({
  selector: 'icon-add',
  templateUrl: 'add.component.html',
})
export class IconAdd {
  @Input() iconHeight: string = '1rem';
  @Input() iconWidth: string = '1rem';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral(
      'add',
      sanitizer.bypassSecurityTrustHtml(ADD_ICON
      )
    );
  }
}
