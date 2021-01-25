import { Vue } from "./vue";

export type ScopedSlot = (props: any) => ScopedSlotReturnValue;
type ScopedSlotReturnValue = VNode | string | boolean | null | undefined | ScopedSlotReturnArray;
interface ScopedSlotReturnArray extends Array<ScopedSlotReturnValue> {}

// Scoped slots are guaranteed to return Array of VNodes starting in 2.6
export type NormalizedScopedSlot = (props: any) => ScopedSlotChildren;
export type ScopedSlotChildren = VNode[] | undefined;

// Relaxed type compatible with $createElement
export type VNodeChildren = VNodeChildrenArrayContents | [ScopedSlot] | string | boolean | null | undefined;
export interface VNodeChildrenArrayContents extends Array<VNodeChildren | VNode> {}

export interface VNode {
  tag?: string;
  data?: VNodeData;
  children?: VNode[];
  text?: string;
  elm?: Node;
  ns?: string;
  context?: Vue;
  key?: string | number;
  componentOptions?: VNodeComponentOptions;
  componentInstance?: Vue;
  parent?: VNode;
  raw?: boolean;
  isStatic?: boolean;
  isRootInsert: boolean;
  isComment: boolean;
}

export interface VNodeComponentOptions {
  Ctor: typeof Vue;
  propsData?: object;
  listeners?: object;
  children?: VNode[];
  tag?: string;
}

export interface VNodeData { // vnode.data
  key?: string | number;
  slot?: string; // 插槽
  scopedSlots?: { [key: string]: ScopedSlot | undefined };
  ref?: string;
  refInFor?: boolean;
  tag?: string;
  staticClass?: string; // 静态的值
  class?: any; // 动态class属性 绑定的值
  staticStyle?: { [key: string]: any }; // 静态的style
  style?: string | object[] | object; // 绑的style
  props?: { [key: string]: any };
  attrs?: { [key: string]: any }; // 属性
  domProps?: { [key: string]: any };
  hook?: { [key: string]: Function };
  on?: { [key: string]: Function | Function[] }; //自定义事件
  nativeOn?: { [key: string]: Function | Function[] }; // 原生事件
  transition?: object;
  show?: boolean;
  inlineTemplate?: {
    render: Function;
    staticRenderFns: Function[];
  };
  directives?: VNodeDirective[];
  keepAlive?: boolean;
}

export interface VNodeDirective {
  name: string;
  value?: any;
  oldValue?: any;
  expression?: any;
  arg?: string;
  oldArg?: string;
  modifiers?: { [key: string]: boolean };
}
