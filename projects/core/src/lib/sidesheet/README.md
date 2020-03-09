# kb-sidesheet

Wrap the sidesheet elements you need in a `kb-sidesheet` element.

## kb-sidesheet-header

`kb-sidesheet-header` creates a header that can hold a title and an action (optional)

## kb-sidesheet-title

`kb-sidesheet-title` adds a title to the header (optional)

## kb-sidesheet-header-action

`kb-sidesheet-header-action` creates an action in the header (optional)

## kb-sidesheet-content

`kb-sidesheet-content` creates an element to hold the content with margins that follow Material spec

## kb-sidesheet-actions

`kb-sidesheet-actions` creates a sticky footer that can hold multiple actions (optional)

## Setup

Import the [KbSidesheetModule] in your NgModule:

```typescript
import { KbSidesheetModule } from '@covalent/core/sidesheet';
@NgModule({
  imports: [
    KbSidesheetModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

```html
<kb-sidesheet>
  Sidesheet Content
</kb-sidesheet>
```

Example with optional components:

```html
<kb-sidesheet>
  <kb-sidesheet-header>
    <kb-sidesheet-title>Sidesheet Title</kb-sidesheet-title>
    <button mat-icon-button kb-sidesheet-header-action>
      ... add button for sidesheet action
    </button>
  </kb-sidesheet-header>
  <kb-sidesheet-content>
    Sidesheet Content
  </kb-sidesheet-content>
  <kb-sidesheet-actions>
    ... add button elements
  </kb-sidesheet-actions>
</kb-sidesheet>  
```
