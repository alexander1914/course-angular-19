# course-angular-19
Present day, I'm currently learning more about new angular version 19 and features.

<h3 align="left">Languages and Tools:</h3>
<p align="left">
    <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" width="40" height="40"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
</p>

# Migrate control flow syntax to update ngIF and etc.
    ng generate @angular/core:control-flow

# Feature on Angular 19

**control-flow**: we can use @if, @else if, @else to validation now

**Pipes**: are a special operator in Angular template expressions that allows you to transform data declaratively in your template

**ViewChild**: Property decorator that configures a view query. 
The change detector looks for the first element or the directive matching the selector in the view DOM.

**ViewChildren**: Initializes a view children query.
Query results are represented as a signal of a read-only collection containing all matched elements.

**ContentChild**:Initializes a content child query. 
Consider using contentChild.required for queries that should always match.

**Directives**:

    ng generate directive directives/highlighted

_@HostBinding_: Angular automatically checks host bindings during change detection, and if a binding changes it updates the host element of the directive.
_@HostListener_: Angular invokes the supplied handler method when the host element emits the specified event, and updates the bound element with the result.

