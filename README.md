# Pure JavaScript pattern for state management

This JavaScript pattern offers:

1. One object to rule them all!
2. No third complex or semi-complex libraries to manage the app state.
3. Very intuitive and easy-to-learn curve, compare to thick boilerplates of other libraries.
4. Works in any framework that uses JavaScript.
5. 28 JavaScript lines to deliver a fully functional state management tool.
6. There are no possible memory leaks on subscriptions, because in emit() is implemented an automatic check for unmounted Components. While in such cases emit() executes another branch, which simply removes the corresponding component from core.subscribers object.

A detailed explanation can be found [here](https://medium.com/@agonqorolli/pure-javascript-pattern-for-state-management-75fedf0916f6). While the GitHub repo is [here](https://github.com/agonqorolli/controller).


