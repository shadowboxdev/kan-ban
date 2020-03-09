## KbLayoutNavListComponent: kb-layout-nav-list

`<kb-layout-nav-list>` is a layout component which lets you customize a `navigation` list view with toolbar items, item selections and footers.


## API Summary

#### Inputs

+ toolbarTitle: string
  + Title set in toolbar.
+ icon: string
  + Icon name to be displayed before the title.
+ logo: string
  + Logo icon name to be displayed before the title. 
  + If [icon] is set, then this will not be shown.
+ color:  string
  + optional toolbar color. 
  + Defaults to primary.
+ navigationRoute: string
  + option to set the combined route for the icon, logo, and toolbarTitle.
+ mode: 'over' | 'side' | 'push'
  + The mode or styling of the sidenav. 
  + Defaults to 'side'.
+ opened: boolean
  + Whether or not the sidenav is opened. 
  + Use this binding to open/close the sidenav. 
  + Defaults to 'true'.
+ sidenavWidth: string
  + Sets the 'width' of the sidenav in either 'px' or '%'. 
  + Defaults to '257px'.
+ containerAutosize: boolean
  + Sets 'autosize' of the sidenav-container.
  + Defaults to 'false'.

## Usage

To toggle/close/open the nav list sidenav from child layouts/components, you can use the `[kbLayoutNavListToggle]`, `[kbLayoutNavListClose]` or `[kbLayoutNavListOpen]` directives on any element and its click event will trigger the sidenav action.

Example:

```html
<button mat-icon-button [kbLayoutNavListToggle]="true" [hideWhenOpened]="true"> // or kbLayoutNavListOpen / kbLayoutNavListClose
  <mat-icon>menu</mat-icon>
</button>
```

To disable the sidenav action, just set the input to false.

```html
<button mat-icon-button [kbLayoutNavListToggle]="false">
  <mat-icon>menu</mat-icon>
</button>
```

`[kb-menu-button]` is used to include a menu button before the logo and title.

`[kb-sidenav-content]` is used to include items in the left side list.

`[kb-sidenav-toolbar-content]` is used to include items in the left toolbar.

`[kb-toolbar-content]` is used to include items in the right toolbar.

`kb-layout-footer-inner` is used to include items in the inner footer.

`kb-layout-footer` is used to include items in the main footer.

`[kbLayoutNavListToggle]` is used to add the sidenav toggle behavior to any clickable element.

`[kbLayoutNavListClose]` is used to add the sidenav close behavior to any clickable element.

`[kbLayoutNavListOpen]` is used to add the sidenav open behavior to any clickable element.

Example for Nav List Layout:

```html
<kb-layout-nav-list sidenavTitle="title" logo="logo" icon="icon" opened="true" mode="side" sidenavWidth="350px" color="primary" navigationRoute="/">
  <button mat-icon-button kb-menu-button> // can use `[kbLayoutToggle]` to toggle main sidenav
    <mat-icon>menu</mat-icon>
  </button>
  <div kb-sidenav-toolbar-content>
    ... left toolbar content
  </div>
  <mat-nav-list kb-sidenav-content>
    <button mat-icon-button kbLayoutNavListOpen [hideWhenOpened]="true">
      <mat-icon>arrow_back</mat-icon>
    </button>
    ... sidenav content
  </mat-nav-list>
  <div kb-toolbar-content>
    ... right toolbar content
  </div>
  ... main content
  <kb-layout-footer-inner>
    ... sub footer content
  </kb-layout-footer-inner>
  <kb-layout-footer color="primary"> // color is optional
    ... main footer content
  </kb-layout-footer>
</kb-layout-nav-list>
```
