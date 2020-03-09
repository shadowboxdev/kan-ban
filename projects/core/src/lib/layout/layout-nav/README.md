## KbLayoutNavComponent: kb-layout-nav

`<kb-layout-nav>` is a layout component which lets you customize a `navigation` view with toolbar items and footers.


## API Summary

#### Inputs

+ toolbarTitle: string
  + Title set in toolbar.
+ icon: string
  + Icon name to be displayed before the title.
+ logo: string
  + Logo icon name to be displayed before the title. 
  + If [icon] is set, then this will not be shown.
+ color: string
  + Optional toolbar color. 
  + Defaults to primary.
+ navigationRoute: string 
  + Option to set the combined route for the icon, logo, and toolbarTitle.

## Usage

`[kb-menu-button]` is used to include a menu button before the logo and title.

`[kb-toolbar-content]` is used to include items in the toolbar.

`kb-layout-footer` is used to include items in the footer.

Example for Nav Layout:

```html
<kb-layout-nav toolbarTitle="title" logo="logo" icon="icon" color="primary" navigationRoute="/">
  <button mat-icon-button kb-menu-button> // can use `[kbLayoutToggle]` to toggle main sidenav
    <mat-icon>menu</mat-icon>
  </button>
  <div kb-toolbar-content>
    .. main toolbar content
  </div>
  ... main content
  <kb-layout-footer color="primary"> // color is optional
    ... main footer content
  </kb-layout-footer>
</kb-layout-nav>
```
