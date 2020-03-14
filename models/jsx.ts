
import * as rc from 'react';
import * as Components from './components';
import {
  NativeInstance, NativeTextInstance, NativeInputInstance, NativeToggleInstance,
} from './renderer';

type Children<T = any> = { children?: T };

type Textable = string | number | boolean | null | undefined;

declare module 'react' {
  export namespace JSX {
    export interface ElementChildrenAttribute {
      children: {};
    }

    export interface IntrinsicElements {
      atom: Components.Atom & rc.RefAttributes<NativeInstance> & Children;
      text: Components.Atom & rc.RefAttributes<NativeTextInstance> & Children<Textable | Textable[]>;
      button: Components.Button & rc.RefAttributes<NativeInstance> & Children;
      input: Components.Input & rc.RefAttributes<NativeInputInstance> & Children<never>;
      scroll: Components.Atom & rc.RefAttributes<NativeInstance> & Children;
      image: Components.Image & rc.RefAttributes<NativeInstance> & Children<never>;
      toggle: Components.Toggle & rc.RefAttributes<NativeToggleInstance> & Children<never>;
    }
  }
}
