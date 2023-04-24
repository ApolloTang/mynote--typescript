import {IsEqual} from  'type-fest'

type Person = { age: number; name: string; alive: boolean; foo: 'foo' };

type I1a = Person["age" | "foo"];
type I1b = Person["age"] | Person["foo"];

type keyofPerson = keyof Person
type expectedKey =  "name" | "alive" | "foo"
type assert = IsEqual<keyofPerson, expectedKey>

type AssignableToString<T>  = T extends string ? true : false
type assert2 = IsEqual<AssignableToString<expectedKey>, true>


