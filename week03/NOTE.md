# 周总结
```
找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的，这些对象都有哪些特性
```
###String Exotic Objects
>特性:[[GetOwnProperty]] [[DefineOwnProperty]] [[OwnPropertyKeys]]
>> StringCreate(value,prototype) StringGetOwnProperty(S,P)

###Array Exotic Objects
>特性:[[DefineOwnProperty]]
>> ArrayCreate(length[,proto]) ArraySpeciesCreate(originalArray,length) ArraySetLength(A,Desc)

###Arguments Exotic Objects
>特性:[[GetOwnProperty]] [[DefineOwnProperty]] [[Get]] [[Set]] [[Delete]]
>> CreateUnmappedArgumentsObject(argumentsList) CreateMappedArgumentsObject(func,formals,argumentsList,env)

###Integer-Indexed Exotic Objects
>特性:[[GetOwnProperty]] [[HasProperty]] [[DefineOwnProperty]] [[Get]] [[Set]] [[OwnPropertyKeys]]
>> IntegerIndexedObjectCreate(prototype,internalSlotsList)
IntegerIndexedElementGet(O,index) IntegerIndexedElementSet(O,index,value)
