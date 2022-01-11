function compiler(input) {
    console.log('------_input------')
    console.log(input)

    let tokens = tokenizer(input);
    console.log('------_tokens------')
    console.log(tokens)

    let ast = parser(tokens);
    console.log('------_ast------')
    console.log(ast)

    let newAst = transformer(ast);
    console.log('------_newAst------')
    console.log(newAst)

    let output = codeGenerator(newAst);
    console.log('------_output------')
    console.log(output)

    // and simply return the output!
    return output;
}