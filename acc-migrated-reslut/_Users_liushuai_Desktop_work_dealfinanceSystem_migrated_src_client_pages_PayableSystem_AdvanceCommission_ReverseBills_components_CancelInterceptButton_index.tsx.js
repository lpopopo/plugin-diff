operation:"+=","accAdd",left:BytePos(2204319),right:BytePos(2204319)
start:2204319,end:2204343
operation:"+","accAdd",left:Lit(Str(Str { span: 2208699..2208725, value: "最多申请", raw: Some("\"\\u6700\\u591A\\u7533\\u8BF7\"") })),right:Ident(Ident { span: 2208728..2208735, ctxt: #2, sym: "LIMITED", optional: false })
start:2208699,end:2208735
operation:"+","accAdd",left:Call(CallExpr { span: 0..0, ctxt: #0, callee: Expr(Ident(Ident { span: 0..0, ctxt: #0, sym: "accAdd", optional: false })), args: [ExprOrSpread { spread: None, expr: Lit(Str(Str { span: 2208699..2208725, value: "最多申请", raw: Some("\"\\u6700\\u591A\\u7533\\u8BF7\"") })) }, ExprOrSpread { spread: None, expr: Ident(Ident { span: 2208728..2208735, ctxt: #2, sym: "LIMITED", optional: false }) }], type_args: None }),right:Lit(Str(Str { span: 2208738..2208806, value: "条，单据数量超过上限！", raw: Some("\"\\u6761\\uFF0C\\u5355\\u636E\\u6570\\u91CF\\u8D85\\u8FC7\\u4E0A\\u9650\\uFF01\"") }))
start:2208699,end:2208806
operation:"+","accAdd",left:Ident(Ident { span: 2212943..2212946, ctxt: #31, sym: "idx", optional: false }),right:Lit(Num(Number { span: 2212949..2212950, value: 1.0, raw: Some("1") }))
start:2212943,end:2212950
operation:"+","accAdd",left:Call(CallExpr { span: 0..0, ctxt: #0, callee: Expr(Ident(Ident { span: 0..0, ctxt: #0, sym: "accAdd", optional: false })), args: [ExprOrSpread { spread: None, expr: Ident(Ident { span: 2212943..2212946, ctxt: #31, sym: "idx", optional: false }) }, ExprOrSpread { spread: None, expr: Lit(Num(Number { span: 2212949..2212950, value: 1.0, raw: Some("1") })) }], type_args: None }),right:Lit(Str(Str { span: 2212953..2212957, value: ". ", raw: Some("\". \"") }))
start:2212943,end:2212957