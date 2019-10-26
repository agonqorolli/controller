// Controller.js
import ReactDOM from 'react-dom';

let _instance = null;

export default class Controller {

  static get instance() {
    return _instance ? _instance : _instance = new Controller();
  }

  constructor() {
    this._core = {
      subscribers: [],
    };

    window.Controller = this; //for debugging purposes
  }

  get core() {
    return this._core;
  }

  editCore(prop, value) {
    this._core[prop] = value;
    this._core.subscribers && this.emit();
  }

  emit() {
    this._core.subscribers.forEach(component => {
      try {
        ReactDOM.findDOMNode(component);
      }
      catch (error) {
        this.unsubscribe(component);
        return; //this jump to next iteration of forEach, and it doesn't kill emit()
      }
      finally {
        typeof component.next === 'function' &&
          component.next(this._core);
      }
    });
  }

  subscribe(component) {
    !this._core.subscribers.includes(component) &&
      this._core.subscribers.push(component);
  }

  unsubscribe(component) {
    this._core.subscribers.includes(component) &&
      this._core.subscribers.splice(this._core.subscribers.indexOf(component), 1);
  }

  foo(prop, value) {
    let todo = 1 + value; //some logic here
    this.editCore(prop, todo);
  }
}