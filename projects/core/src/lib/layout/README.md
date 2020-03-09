## KbLayoutComponent - kb-layout

`<kb-layout>` is a blank main sidenav component that gets hooked as parent of all the other layouts. (triggered by their menu buttons)


## API Summary

#### Inputs

+ mode: 'over' | 'side' | 'push'
  + The mode or styling of the sidenav. Defaults to 'over'.
+ opened: boolean
  + Whether or not the sidenav is opened. Use this binding to open/close the sidenav. 
  + Defaults to 'false'.
+ sidenavWidth: string
  + Sets the 'width' of the sidenav in either 'px' or '%'. 
  + Defaults to '320px'.
+ containerAutosize: boolean
  + Sets 'autosize' of the sidenav-container.
  + Defaults to 'false'.

## Usage

`[kb-sidenav-content]` is used to include content in the main sidenav.

Example for Main Layout:

```html
<kb-layout [mode]="'side'" [opened]="true" [sidenavWidth]="'257px'">
  <div kb-sidenav-content>
   .. more sidenav content
  </div>
  .. main content
</kb-layout>
```

To toggle/close/open the main sidenav from child layouts/components, you can use the `[kbLayoutToggle]`, `[kbLayoutClose]` or `[kbLayoutOpen]` directives on any element and its click event will trigger the sidenav action.

Example:

```html
<button mat-icon-button [kbLayoutToggle]="true"> // or kbLayoutOpen / kbLayoutClose
  <mat-icon>menu</mat-icon>
</button>
```

To disable the sidenav action, just set the input to false.

```html
<button mat-icon-button [kbLayoutToggle]="false">
  <mat-icon>menu</mat-icon>
</button>
```

## Setup

Import the **[KbLayoutModule]** in your NgModule:

```typescript
import { KbLayoutModule } from '@core/layout';
@NgModule({
  imports: [
    KbLayoutModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## KbNavigationDrawerComponent - kb-navigation-drawer

`<kb-navigation-drawer>` is a component that follows the [material design spec](https://material.io/guidelines/patterns/navigation-drawer.html#navigation-drawer-specs) is used as an addon component for `kb-layout`.


## API Summary

#### Inputs

+ sidenavTitle: string
  + Title set in toolbar.
+ icon: string
  + Icon name to be displayed before the title.
+ logo: string
  + Logo icon name to be displayed before the title. 
  + If [icon] is set, then this will not be shown.
+ avatar: string
  + Avatar url to be displayed before the title.
  + If [icon] or [logo] are set, then this will not be shown.
+ color: string
  + Optional sidenav toolbar color.
+ navigationRoute: string
  + Option to set the combined route for the icon, logo, and sidenavTitle.
+ backgroundUrl: SafeResourceUrl
  + Image to be displayed as the background of the toolbar. 
  + URL used will be sanitized, but it should be always from a trusted source to avoid XSS.
+ name: string
  + String to be displayed as part of the navigation drawer sublabel.
  + If [email] is not set, then [name] will be the toggle menu text.
+ email: string
  + String to be displayed as part of the navigation drawer sublabel in the [toggle] menu text. 
  + If [email] and [name] are not set, then the toggle menu is not rendered.

## Usage

`[kb-sidenav-content]` is used to include content in the main sidenav.

`[kb-navigation-drawer-menu]` is used to include content to the `toggle` user menu. if no tag is used, then the toggle button dissapears.

Example for Main Layout / Navigation Drawer Combo:

```html
<kb-layout>
  <kb-navigation-drawer sidenavTitle="title" logo="logo" icon="icon" name="name" password="password" color="color" navigationRoute="/">
    .. main drawer content
    <div kb-navigation-drawer-menu>
      .. menu drawer content
    </div>
  </kb-navigation-drawer>
  <div kb-sidenav-content>
   .. more sidenav content
  </div>
  .. main content
</kb-layout>
```
