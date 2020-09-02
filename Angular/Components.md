# 80-20 Guide to Angular

## Angular Components, Directives and Pipes

### Components

[Angular Components - Ten Basic Concepts](https://angularfirebase.com/lessons/angular-components-basics-top-ten/)

`ng g component home`

Creates four Angular Component files **home** folder:

- .ts (logic)
- .html (view)
- .scss (style)
- .spec.ts (testing)

Component files are **classes** with a **TypeScript Class Decorator** that sprinkles on the Angular magic.

The TypeScript logic file binds properties to the HTML view template.

We can use regular JavaScript/HTML attributes and bind them to our TypeScript variables in several ways. From the template:

- [property]="typescript-variable-or-method-that-returns-value"
- (event)="typescript-method-has-event-handler"
- {{typescript-value}} - handlebars syntax that **interpolates value**

Load with **Angular Router** - see [Router Basics](https://www.youtube.com/redirect?redir_token=QUFFLUhqa0hwajVGanVMOW40c01jVFNsWWVxOFNGZ0l2UXxBQ3Jtc0ttdnVkbFNkUERSa2ROSkYwUkg2OTRCU3RsOWstNTVXZFJYZGxCY3cza3FhTGZ1bDdEMUNkSXM1SDNZNWE0bkxNM05xUk9KaThoRXBhVWRXaVdkRm9ZWFlsOWNtdVFCVEtscUFXcmdhZ2ptVmRMYkRyWQ%3D%3D&event=video_description&v=23o0evRtrFI&q=https%3A%2F%2Fangularfirebase.com%2Flessons%2Fbasics-angular-router%2F) or by placing **Component Tag** directly in an HTML file that gets loaded.

**Reference:** [Angular Component docs](https://www.youtube.com/redirect?redir_token=QUFFLUhqa2lvRklocC1wS0k2ZS0yUVVBVzlrRy1ld3QyQXxBQ3Jtc0tsVXQxYjFnR0sxODFETlpteDR1UGNQMFByeDlBV2NKT2RIMnZ5Nk9hbEFSRjhHbHFWRE1XenI1ZkhQRE41Z1U1RkpMblpsVlprZGszV3hnSFEyN3A4SERqejF6Tzc1TS03TzktcER2c1Q2VmxwNXhXTQ%3D%3D&event=video_description&v=23o0evRtrFI&q=https%3A%2F%2Fangular.io%2Fguide%2Farchitecture-components)

**Note:** Another way to load is using Angular Elements which converts to a **web component**.

### Directives

Writing Components and Directives together can create some very **DRY** and **Reuseable** code.

Similar to Components except is does not have its own view (HTML).

Instead it attaches to a host component to change its behavior.

You can create your own **directives** but Angular has some **key built-in** ones including:

- structural directives (`*ngIf` , `*ngFor` , etc.)
  - controls how elements are rendered in the DOM
  - `*ngIf` will only display element if value returned is true
  - `*ngFor` will loop over an array of values from the TypeScript file.

- other directives (changes behavior of element)

- create your own with `ng g directive [directive-name]`
  - class as a **@Directive** TypeScript **Decorator**
  - you can bind to a property using **@HostBinding** TypeScript **Property Decorator**.
  - you can bind to events using **@HostListner** TypeScript **Input Decorator**.

### Pipes

Used in an **Interpolated** values to modify output

Angular ships with some useful built-in Pipes.

One very special Pipe is **Async** which handles asynchronus actions (such as fetching data) directly in the HTML such as `*ngFor="let car of cars | async"`

- great for working with **RxJS Observables** (data streams)
- the other great thing about the async pipe is that it takes care of **subcribing** and **unsubscribing** when object destroyed.

You can also create your own Pipes but changes are someone has already created a Pipe for your Use Case so checkout **Angular Pipes GitHub Repo** for a list of examples.

Pipes are simple to create because in essence all it does is take it one value and returns a modified version of that value.

Create Pipes using `ng g pipe [pipe-name]`

This creates a TypeScript file with a class that implements **PipeTransform** and has a TypeScript Decorator of **@Pipe**. Both **Pipe** and **PipeTransform** are imported from @angular/core as follows `import {Pipe, PipeTransform} from '@angular/core';`

There is one required method which is **transform** which takes in a value and returns the modified value based on any logic you provide.

### Never Touch the DOM

Web developers are used to touching the DOM directly with vanilla JavaScript or libraries such as jQuery but since Angular Apps are designed to be cross-platform and cross-device there may not always be a **DOM** available. Angular knows how to take care of this under the hood so its best to such modify values in the logic and display them in the Angular view templates.

### Component Lifecycle

In Angular, you typically don't do anything in the **contructor** except add your dependencies.

This is because the property bindings from the HTML are not guarenteed to be available until you run Angular's **Lifecycle Method ngOnInit**. This is the first time that Angular runs **change detection**. We can hook into this lifecycle method to initialize our variables, fetch data from an API or database and generally do any setup we want to do for this component.

The last thing that happens to a component is when it is **destroyed**. This triggers Angular's **Lifecycle Method ngOnDestroy**. By including this method in our component we can run any tear-down logic (such as unsubscribing from an Observable to prevent memory leaks and performance issues) or anything we want to do before the component disappears.

<!-- 90-10 -->
While **ngOnInit** is the most common lifecycle hook you will use there are other methods such as if you have child views loaded (**ngAfterViewInit**)

<!-- 90-10 -->
An important thing Angular is doing behind the scenes is **change detection**. It does this by using some called **zone.js**.

You can check for change detection with **Lifecycle Method ngDoCheck**. While you wouldn't use this in production to do anything significant (could impact performance) it can be useful during development.

### Component Type (Smart/Dumb; Stateful/Stateless; Container/Presentation)

This is simply a way to simplify your app to make it more testable and reduce the areas where hard to find bugs can occur (generally wherever data can change).

The Smart/Stateful/Container type is concerned with logic and data while the **Dumb/Stateless/Presentation** type is only concerned with rendering the view.

This is a way of structuring your app for more real-world use cases.

### Component Composition

This video demonstrates four different ways to share data between components.

[Sharing Data between Components](https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/)

GitHub Source Code: [Fireship-io: Sharing Data between Angular Components - Four Methods](https://github.com/fireship-io/fireship.io/tree/master/hugo/content/lessons/sharing-data-between-angular-components-four-methods)

Learning Angular? Check out the full [Angular 9 Course](/courses/angular)

Data sharing is an essential concept to understand before diving into your first Angular project. In this lesson, I provide four different methods for sharing data between Angular components.

<!-- {{< figure src="img/parent-child-sibling-angular-components.png" caption="The Parent-Child-Sibling structure of our Angular app." >}} -->

![The Parent-Child-Sibling structure of our Angular app](../img 1-parent-child-sibling-angular-components.png)

## Parent to Child: Sharing Data via Input

This is probably the most common and straightforward method of sharing data. It works by using the [`@Input()`decorator](https://angular.io/docs/ts/latest/api/core/index/Input-interface.html) to allow data to be passed via the template.

### parent.component.ts

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-child [childMessage]="parentMessage"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  parentMessage = "message from parent"
  constructor() { }
}
```

### child.component.ts

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      Say {{ message }}
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childMessage: string;

  constructor() { }

}
```

## Child to Parent: Sharing Data via ViewChild

[ViewChild](https://angular.io/api/core/ViewChild) allows a one component to be injected into another, giving the parent access to its attributes and functions. One caveat, however, is that child won't be available until after the view has been initialized. This means we need to implement the AfterViewInit lifecycle hook to receive the data from the child.  

### parent.component.ts

```typescript
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  template: `
    Message: {{ message }}
    <app-child></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {

  @ViewChild(ChildComponent) child;

  constructor() { }

  message:string;

  ngAfterViewInit() {
    this.message = this.child.message
  }
}

```

### child.component.ts

```typescript
import { Component} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message = 'Hola Mundo!';

  constructor() { }

}
```

## Child to Parent: Sharing Data via Output() and EventEmitter

Another way to share data is to emit data from the child, which can be listed to by the parent. This approach is ideal when you want to share data changes that occur on things like button clicks, form entires, and other user events.

In the parent, we create a function to receive the message and set it equal to the message variable.

In the child, we declare a messageEvent variable with the Output decorator and set it equal to a new event emitter. Then we create a function named sendMessage that calls emit on this event with the message we want to send. Lastly, we create a button to trigger this function.

The parent can now subscribe to this messageEvent that's outputted by the child component, then run the receive message function whenever this event occurs.

### parent.component.ts

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    Message: {{message}}
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor() { }

  message:string;

  receiveMessage($event) {
    this.message = $event
  }
}
```

### child.component.ts

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <button (click)="sendMessage()">Send Message</button>
  `,
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}
```

## Unrelated Components: Sharing Data with a Service

When passing data between components that lack a direct connection, such as siblings, grandchildren, etc, you should you a shared service. When you have data that should aways been in sync, I find the [RxJS BehaviorSubject](https://xgrommx.github.io/rx-book/content/subjects/behavior_subject/index.html) very useful in this situation.

You can also use a regular RxJS Subject for sharing data via the service, but here's why I prefer a BehaviorSubject.

- It will always return the current value on subscription - there is no need to call `onnext`
- It has a `getValue()` function to extract the last value as raw data.
- It ensures that the component always receives the most recent data.

In the service, we create a private BehaviorSubject that will hold the current value of the message. We define a currentMessage variable handle this data stream as an observable that will be used by the components. Lastly, we create function that calls next on the BehaviorSubject to change its value.

The parent, child, and sibling components all receive the same treatment. We inject the DataService in the constructor, then subscribe to the currentMessage observable and set its value equal to the message variable.

Now if we create a function in any one of these components that changes the value of the message. when this function is executed the new data it's automatically broadcast to all other components.

### data.service.ts

```typescript
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}
```

### parent.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-parent',
  template: `
    {{message}}
  `,
  styleUrls: ['./sibling.component.css']
})
export class ParentComponent implements OnInit {

  message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

}
```

### sibling.component.ts

```typescript
import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-sibling',
  template: `
    {{message}}
    <button (click)="newMessage()">New Message</button>
  `,
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {

  message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

}
```
