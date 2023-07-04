// numbers
let x = 10.5;
// let y = 1234n;
let z = NaN;

// string
let str1: string
str1 = 'Hello World'
let symb = Symbol('as')
// let d = str1 + symb

// boolean
let o = true
o = false

// nothing
let h: undefined = undefined
let g:null = null

// literal
const num = 108
const str2 = 'str'

// universal - тип крайнего случая (любой)
let mm: any = 1
mm = 'str'
mm = []

let xx: unknown = 2
if (typeof xx === "string") xx.toUpperCase()