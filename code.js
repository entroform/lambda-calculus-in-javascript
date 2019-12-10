// https://plato.stanford.edu/entries/lambda-calculus/#ComLog
// <expression> ::= <name/variable> | <function> | <application>
// <function> ::= λ<name/variable>.<body>
// <body> ::= <expression>
// <application> ::= (<expression> <expression>)

// ::= symbolizes 'symbol derivation rule' in Backus–Naur form.
// <symbol> ::= __expression__

// https://en.wikipedia.org/wiki/Context-free_grammar
// https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form
// https://en.wikipedia.org/wiki/Expression_(mathematics)
// https://en.wikipedia.org/wiki/Terminal_and_nonterminal_symbols

// Variable: x
// Abstraction: (λx.M) (M is a Lambda term)
// Application: (M N) (M and N are Lambda terms)

// Operations
// α-conversion: (λx.M[x]) -> (λy.M[y])
// β-reduction: ((λx.M) E) -> (M[x := E])

// https://en.wikipedia.org/wiki/Lambda_calculus

// identity λx.x
export const IDENTITY = x => x;

// self-apply λx.x x
export const SELF_APPLY = x => x(x);

// apply λfunc.λarg.func arg
export const APPLY = func => arg => func(arg);

// y-combinator λf.((λx.f(x x)) λx.f(x x))
export const Y = f => ((x => f(x(x)))(x => f(x(x))));

// λf.λx.x
export const ZERO  = f => x => x
// λf.λx.f x
export const ONE   = f => x => f(x);
// λf.λx.f (f x)
export const TWO   = f => x => f(f(x));
// λf.λx.f (f (f x))
export const THREE = f => x => f(f(f(x)));


// TRUE  := λx.λy.x
// FALSE := λx.λy.y
// False is identical to ZERO
export const TRUE  = x => y => x
export const FALSE = x => y => y

export const AND = p => q => p(q(p));
export const OR  = p => q => p(p(q));
export const NOT = p => p(FALSE(TRUE()));

export const IFTHENELSE = p => a => b => p(a(b));