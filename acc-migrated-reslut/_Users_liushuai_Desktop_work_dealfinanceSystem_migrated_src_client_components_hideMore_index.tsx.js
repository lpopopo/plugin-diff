operation:"+","accAdd",left:Ident(Ident { span: 4091673..4091678, ctxt: #8, sym: "width", optional: false }),right:Lit(Str(Str { span: 4091681..4091685, value: "px", raw: Some("\"px\"") }))
start:4091673,end:4091685
operation:"-","accSub",left:Lit(Num(Number { span: 4091777..4091778, value: 0.0, raw: Some("0") })),right:Ident(Ident { span: 4091781..4091786, ctxt: #8, sym: "width", optional: false })
start:4091777,end:4091786
operation:"+","accAdd",left:Call(CallExpr { span: 0..0, ctxt: #0, callee: Expr(Ident(Ident { span: 0..0, ctxt: #0, sym: "accSub", optional: false })), args: [ExprOrSpread { spread: None, expr: Lit(Num(Number { span: 4091777..4091778, value: 0.0, raw: Some("0") })) }, ExprOrSpread { spread: None, expr: Ident(Ident { span: 4091781..4091786, ctxt: #8, sym: "width", optional: false }) }], type_args: None }),right:Lit(Str(Str { span: 4091789..4091793, value: "px", raw: Some("\"px\"") }))
start:4091777,end:4091793