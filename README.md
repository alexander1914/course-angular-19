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

_ViewChild_: Property decorator that configures a view query. 
The change detector looks for the first element or the directive matching the selector in the view DOM.

_ViewChildren_: Initializes a view children query.
Query results are represented as a signal of a read-only collection containing all matched elements.

_ContentChild_: Initializes a content child query. 
Consider using contentChild.required for queries that should always match.

**Directives**: Angular directives offer a great way to encapsulate reusable behaviors— directives can apply attributes, CSS classes, and event listeners to an element.

    ng generate directive directives/highlighted

_@HostBinding_: Angular automatically checks host bindings during change detection, and if a binding changes it updates the host element of the directive.

_@HostListener_: Angular invokes the supplied handler method when the host element emits the specified event, and updates the bound element with the result.

**Service**: provide a way for you to separate Angular app data and functions that can be used by multiple components in your app.

_@Injectable_: Decorator that marks a class as available to be provided and injected as a dependency.

_@Inject_: Parameter decorator on a dependency parameter of a class constructor that specifies a custom provider of the dependency.

_@Optional_: Parameter decorator to be used on constructor parameters, which marks the parameter as being an optional dependency. The DI framework provides null if the dependency is not found.

_SkipSelf()_: Parameter decorator to be used on constructor parameters, which tells the DI framework to start dependency resolution from the parent injector. Resolution works upward through the injector hierarchy, so the local injector is not checked for a provider.

_@Self_: Parameter decorator to be used on constructor parameters, which tells the DI framework to start dependency resolution from the local injector.

_Host_: Parameter decorator on a view-provider parameter of a class constructor that tells the DI framework to resolve the view by checking injectors of child elements, and stop when reaching the host element of the current component.