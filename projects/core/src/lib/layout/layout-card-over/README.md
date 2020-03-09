## KbLayoutCardOverComponent: kb-layout-card-over

`<kb-layout-card-over>` is a layout component which lets you customize a `card over` view.


## API Summary

#### Inputs

+ cardTitle: string 
  + Title set in card.
+ cardSubtitle: string 
  + Subtitle set in card.
+ cardWidth: string 
  + Card flex width in %. 
  + Defaults to 70.
+ color: string 
  + Optional toolbar color. 
  + Defaults to primary.

## Usage

`[kb-after-card]` is used to include content after the main card over content.

`kb-layout-footer` is used to include items in the footer.

Example for Card Over Layout / Nav Layout combo:

```html
<kb-layout-nav toolbarTitle="title" logo="logo" icon="icon" color="primary">
  <kb-layout-card-over cardTitle="title" cardSubtitle="subtitle" cardWidth="widthIn%" color="primary">
    .. main content
    <div kb-after-card>
      .. content after card
    </div>
  </kb-layout-card-over>
  <kb-layout-footer color="primary"> // color is optional
    ... main footer content
  </kb-layout-footer>
</kb-layout-nav>
```
