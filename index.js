
var katzDeli = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push (name)
   return "Welcome, " + katzDeliLine[katzDeliLine.length-1] + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeli){
  if (katzDeli.length == 0){
    return "There is nobody waiting to be served!"
  } else return "Currently serving " + katzDeli.shift() + "."
}

function currentLine(line){
 for (let i = 1; i < line.length; i++){
    line.splice(i, 1 , i + ". " + line[i-1])
  }
  return line
}




// function currentLine(line){
// var lineNum = []
// if (line.length == 0){
//    return "The line is currently empty."
//  } 
// for (var i = 0; i <= line.length; i++ ){
//      lineNum.push(`${i+1}. ${line[i]},`)
//    return "The line is currently: " + lineNum
// }
// } 