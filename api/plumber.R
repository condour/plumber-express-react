#
# Sample some random words from the parts_of_speech dictionary.
#
#* @apiTitle Get some random passwords
#* @apiDescription Create a random series of adjectives in front of a random word.
#* 
library(plumber)
library(tidytext)

#* @serializer unboxedJSON
#* @param numberOfPasswords how many random passwords to generate
#* @param numberOfAdjectives how many adjectives to use
#* @param maxLetters omits any word of greater length
#* @param seed optional random seed, in case client wants to do it.
#* @get /random
function(numberOfPasswords = 3, numberOfAdjectives = 3, maxLetters = 10, seed = randomSeed()) {
  set.seed(seed)
  shortwords <- parts_of_speech[nchar(parts_of_speech$word) <= as.numeric(maxLetters) & !is.na(parts_of_speech$pos),]
  adjectives <- shortwords[shortwords$pos == "Adjective", ]
  nouns <- shortwords[shortwords$pos == "Noun", ]
  list_of_passwords <- lapply(1:numberOfPasswords, function(num) {
    first_two <- sample(adjectives$word, numberOfAdjectives)
    last_one <- sample(nouns$word, 1) 
    final <- paste(c(first_two,last_one), collapse=".")
    final  
  })
  list_of_passwords
}

randomSeed <- function () {
  unixTime = as.integer(Sys.time())
  seed = unixTime %% 10000
}