//! 3 Phases in Event Propagation...

//? 1. Capturing Phase
//? 2. bubbling Phase
//? 3. Target Phase

//* 1. Target Phase :
//todo : Target phase is the phase where the user cliked any Element or any parent element or any child element this is the starting 

//* 2. Capturing Phase :
//todo : the Capturing Phase is the path which work like top to bottom means if we put click event into any parent div than if we click it so it also affect on their child elements like [top - bottom]

//todo : also it check all the click events until it travel from up to down and which element we clicked it will be triggerd at last means checks all the events from parents to child [ parents are trigged first and target triggers at the End]

//* 3. Bubbling Phase :
///todo : bubbling phase is using while the target will triggerd first and the parents will triggerd at the end means it will work like DOwn to up also the it work like the target phase is trigged first and the other phases will be at the End 

