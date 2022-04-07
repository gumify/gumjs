
# Gum.js

Gum.js is a JavaScript library for creating and manipulating DOM elements.


## Usage

- `get(index)` returns the element at the given index as Gum object.

- `append(element)` appends the given element to all selected elements.

- `prepend(element)` prepends the given element to all selected elements.

- `addClass(className)` adds the given class to all selected elements.

- `removeClass(className)` removes the given class from all selected elements.

- `toggleClass(className)` toggles the given class on all selected elements.

- `hasClass(className)` returns true if all selected elements have the given class.

- `find(selector)` returns all elements that match the given selector. (perform selection on all selected elements)

- `filter(selector)` returns all elements that match the given selector.

- `on(eventName, callback)` adds the given callback to all selected elements.

- `off(event)` removes the given event from all selected elements.

- `clear()` removes all events from selected elements.

- `children()` returns all children of first selected element.

- `parent()` returns the parent of first selected element.

- `html([html])` returns the HTML of first selected element or set HTML to all selected elements.

- `text([text])` returns the text of first selected element or set text to all selected elements.

- `val([value])` returns the value of first selected element or set value to all selected elements.

- `attr(attributeName, [value])` returns the value of the given attribute (first element) or set the value of the given attribute to all selected elements.

- `removeAttr(attributeName)` removes the given attribute from all selected elements.

- `remove()` removes all selected elements from DOM.

- `css(propertyName, [value])` returns the value of the given css property (first element) or set the value of the given style to all selected elements.

- `each(callback)` executes the given callback for each selected element.

- `enable()` enables all selected elements.

- `disable()` disables all selected elements.

- `extend(selector)` extends the selected elements with the given selector.

- `first()` returns the first selected element.

- `last()` returns the last selected element.

- `hide()` hides all selected elements.

- `show()` shows all selected elements.

- `height([value])` returns the height of first selected element or set height to all selected elements.

- `width([value])` returns the width of first selected element or set width to all selected elements.

- `innerWidth([value])` returns the inner width of first selected element or set inner width to all selected elements.

- `innerHeight([value])` returns the inner height of first selected element or set inner height to all selected elements.

- `disabled()` returns true if first element is disabled.

- `offset()` returns the offset of first selected element.

- `position()` returns the position of first selected element.

- `scrollTop([value])` returns the scroll top of first selected element or set scroll top to all selected elements.

-  `scrollLeft([value])` returns the scroll left of first selected element or set scroll left to all selected elements.

- `scrollWidth()` returns the scroll width of first selected element.

- `scrollHeight()` returns the scroll height of first selected element.

- `offsetParent()` returns the offset parent of first selected element.

- `siblings()` returns all siblings of first selected element.


## Extensions

- `any(collection, callback)` returns true if any element in the collection matches the given callback.

- `all(collection, callback)` returns true if all elements in the collection matches the given callback.

- `map(collection, callback)` returns a new collection with the results of calling the given callback for each element in the collection.

- `filter(collection, callback)` returns a new collection with the elements that pass the test implemented by the given callback.


- `reduce(collection, callback, initialValue)` returns a single value by iterating through the collection, successively calling the callback function for each element in the collection, and carrying the previous return value into the next invocation.

- `reduceRight(collection, callback, initialValue)` returns a single value by iterating through the collection in reverse, successively calling the callback function for each element in the collection, and carrying the previous return value into the next invocation.

- `reverse(collection)` returns a new collection with the elements of the given collection in reverse order.

- `find(collection, callback)` returns the first element in the collection that matches the given callback.

- `findIndex(collection, callback)` returns the index of the first element in the collection that matches the given callback.

- `findLast(collection, callback)` returns the last element in the collection that matches the given callback.

- `findLastIndex(collection, callback)` returns the index of the last element in the collection that matches the given callback.

- `dropLast(collection, n)` returns a new collection with the last n elements removed.

- `drop(collection, n)` returns a new collection with the first n elements removed.

- `clone(collection)` returns a new collection with the same elements as the given collection.

- `flatten(collection)` returns a new collection with the flattened elements of the given collection.

- `isArray(val)` returns true if the given collection is an array.

- `isObject(val)` returns true if the given collection is an object.

- `isString(val)` returns true if the given collection is a string.

- `isNumber(val)` returns true if the given collection is a number.

- `isFunction(val)` returns true if the given collection is a function.

- `isBoolean(val)` returns true if the given collection is a boolean.

- `isNull(val)` returns true if the given collection is null.

- `isUndefined(val)` returns true if the given collection is undefined.

- `isEmpty(val)` returns true if the given collection is empty.

- `isEqual(val1, val2)` returns true if the given collections are equal.

