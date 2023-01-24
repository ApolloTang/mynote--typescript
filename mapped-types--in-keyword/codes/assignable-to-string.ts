import {IsEqual} from  'type-fest'

type AssignableToString<T>  = T extends string ? true : false

type ExpectedToAssiganbleToString =  "name" | "alive" | "foo"
type assert1 = IsEqual<AssignableToString<ExpectedToAssiganbleToString>, true> // true

type ExpectedToNotAssiganbleToString =  1 | "alive" | "foo"
type assert2 = IsEqual<AssignableToString<ExpectedToNotAssiganbleToString>, false> // true
