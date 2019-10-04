function theBeatlesPlay(musicians, instruments){
  var theyPlay = []
  for (var i=0; i < musicians.length; ++i){
    theyPlay.push(`${musicians[i]}`+ " plays " + `${instruments[i]}`)
  }
  return theyPlay
}

function johnLennonFacts(facts){
  var newFacts[]
  var i = 0
  while ( i < johnLennonFacts.length){
    newFacts.push(`${facts[i]}` +"!!!")
    i++
  }
  return newFacts
}
