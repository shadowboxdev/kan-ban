## KbLayoutManageListComponent: kb-layout-manage-list

`<kb-layout-manage-list>` is a layout component which lets you customize a `management` view with toolbar items, item selections and footers.


## API Summary

#### Inputs

+ mode: 'over' | 'side' | 'push'
  + The mode or styling of the sidenav. Defaults to 'side'.
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

To toggle/close/open the manage list sidenav from child layouts/components, you can use the `[kbLayoutManageListToggle]`, `[kbLayoutManageListClose]` or `[kbLayoutManageListOpen]` directives on any element and its click event will trigger the sidenav action.

Example:

```html
<button mat-icon-button [kbLayoutManageListToggle]="true" [hideWhenOpened]="true"> // or kbLayoutManageListOpen / kbLayoutManageListClose
  <mat-icon>menu</mat-icon>
</button>
```

To disable the sidenav action, just set the input to false.

```html
<button mat-icon-button [kbLayoutManageListToggle]="false">
  <mat-icon>menu</mat-icon>
</button>
```

`[kb-sidenav-content]` is used to include items in the left side list.

`[kb-toolbar-content]` is used to include items in the toolbar.

`kb-layout-footer-inner` is used to include items in the inner footer.

`[kbLayoutManageListToggle]` is used to add the sidenav toggle behavior to any clickable element.

`[kbLayoutManageListClose]` is used to add the sidenav close behavior to any clickable element.

`[kbLayoutManageListOpen]` is used to add the sidenav open behavior to any clickable element.

Example for Manage List Layout / Nav Layout combo:

```html
<kb-layout-nav sidenavTitle="title" logo="logo" icon="icon" color="primary">
  <div kb-toolbar-content>
    .. main toolbar content
  </div>
  <kb-layout-manage-list opened="true" mode="side" sidenavWidth="257px">
    <mat-toolbar kb-sidenav-content>
      ... toolbar in sidenav
    </mat-toolbar>
    <mat-nav-list kb-sidenav-content>
      ... sidenav content
    </mat-nav-list>
    <mat-toolbar>
      <button mat-icon-button kbLayoutManageListOpen [hideWhenOpened]="true">
        <mat-icon>arrow_back</mat-icon>
      </button>
      ... sub toolbar content
    </mat-toolbar>
    ... main content
    <kb-layout-footer-inner>
      ... sub footer content
    </kb-layout-footer-inner>
  </kb-layout-manage-list>
  <kb-layout-footer color="primary"> // color is optional
    ... main footer content
  </kb-layout-footer>
</kb-layout-nav>
```
