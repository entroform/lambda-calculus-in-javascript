https://medium.com/swlh/y-and-z-combinators-in-javascript-lambda-calculus-with-real-code-31f25be934ec

# Context-Free Grammars

Production Rules
A -> a
A -> b
This means A can be replaced by either a or b.
All rules are one-to-one, one-to-many, or one-to-none.
The left hand side of the production rule is always a non-terminal symbol.
Which means they do not appear in the resulting formal language.

## Kleene Star

- https://en.wikipedia.org/wiki/Kleene_star

Kleene star is a unary operator, either on sets or strings.
It generally means "zero or more"

## MetaSyntax

- https://en.wikipedia.org/wiki/Metasyntax

Terminals can be denoted by double quoting
`"if" "while"`

Non-terminals could be denoted by angle bracketing the name of the nonterminals.
`<int> <char>`

meta-symbols
| = () etc

## Backus-Naur Form (BNF)

`::=` -> "is defined as"
`|` -> "or"

Names are enclosed in `<>` these are non-terminals.

`<symbol> ::= __expression__`

Quoted strings for symbols of the target language

Symbols that never appear on the left side are terminals.
Symbols that appear on the left side are non-terminals and are 
always enclosed in `<>`.

The `::=` means that the symbol on the left must be replaced
with the expression on the right.