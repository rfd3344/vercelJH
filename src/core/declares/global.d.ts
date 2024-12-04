declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

interface Obj {
  [key: string]: any;
}

type Component = React.ReactNode;
// interface ChangeEvent extends React.SyntheticEvent<HTMLInputElement> {}
type ChangeEvent = React.SyntheticEvent;
type BaseChangeEvent = React.BaseSyntheticEvent;
// type ChangeEvent = SyntheticEvent;

interface EventTarget {
  name: string;
  value: string;
  checked: string;
}
