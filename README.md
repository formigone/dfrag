# dfrag

A minimalist functional abstraction to create DOM fragments.

# Why this project?

The two target users for this project are:

 + Developers stuck with an old codebase that creates DOM via string concats (or worse yet, via jQuery).
 + Developers building simple apps that don't merit the overhead of setting up Babel, WebPack, React, etc.
 
The goal of this project is to not be used at all. The target audience is the sad developer that needs to maintain an old codebase where you create lots of HTML by concatenating strings. If this describes a project you're working on, and refactoring that codebase to use React or something slightly more advanced to simplify the DOM creation is not an option, then this project might be a reasonable alternative.

This single function module exists to simplify creation of DOM fragments in a way that is both terse and clear. When you need to concatenate multiple strings to create a tag with a few attributes, mixing those single quotes and double quotes can get difficult to look at, and easy to mess up. With the API exposed in this module, that issue should be solved completely.

This project is not meant to be a new silver bullet. If you're building a new application, or if you have the option to use a full-fledged view framework/library, by all means, use the other alternative. 

# Demo

The API exposed by `dfrag` is simple:

    dfrag(type: string, props: Object, children: string|Array<Element>): Element
    
If you squint hard enough, you can see `React.createElement` in there...

 + `type` is the name of the element being created. Example: `'p'` or `'div'`
 + `props` is an optional object of DOM properties. Example: `{ className: 'btn btn-primary', id: 'main-button', onClick: () => alert('Clicked!'), dataCustomAttribute: 23 }`
 + `children` is an optional parameter. If it is a string or a number, it will be set as the element's `textContent`. If it is an array, each of the elements will be assumed to be DOM elements, and will be appended to the main element.


    var title = dfrag('h1', { className: 'title', style: 'color: #c00' }, 'DOM Fragments');
    var container = dfrag('div', {}, [
       title,
       dfrag('hr'),
       dfrag('ul', {}, [
         dfrag('li', {}, 'Aint no virtual dom'),
         dfrag('li', { style: 'text-decoration: line-through' }, 'Better than Angular'),
         dfrag('li', {}, '...')
       ]),
       dfrag('button', { disabled: true }, 'Submit'),
    ])
    
    document.body.appendChild(container);