operation:"+","accAdd",left:Ident(Ident { span: 759265..759270, ctxt: #59, sym: "index", optional: false }),right:Lit(Num(Number { span: 759273..759274, value: 1.0, raw: Some("1") }))
start:759265,end:759274
operation:"+","accAdd",left:Ident(Ident { span: 759342..759347, ctxt: #59, sym: "index", optional: false }),right:Lit(Num(Number { span: 759350..759351, value: 1.0, raw: Some("1") }))
start:759342,end:759351
operation:"+=","accAdd",left:Simple(Ident(BindingIdent { id: Ident { span: 760467..760474, ctxt: #58, sym: "tempSum", optional: false }, type_ann: None })),right:Member(MemberExpr { span: 760478..760506, obj: Ident(Ident { span: 760478..760483, ctxt: #63, sym: "value", optional: false }), prop: Ident(IdentName { span: 760484..760506, sym: "current_payment_amount" }) })
start:760467,end:760506
operation:"/","accDiv",left:Ident(Ident { span: 761033..761040, ctxt: #58, sym: "tempSum", optional: false }),right:Lit(Num(Number { span: 761043..761046, value: 100.0, raw: Some("100") }))
start:761033,end:761046
operation:"+=","accAdd",left:Simple(Ident(BindingIdent { id: Ident { span: 761295..761296, ctxt: #67, sym: "i", optional: false }, type_ann: None })),right:Lit(Num(Number { span: 761300..761301, value: 1.0, raw: Some("1") }))
start:761295,end:761301
operation:"*","accMul",left:Call(CallExpr { span: 761352..761365, ctxt: #0, callee: Expr(Member(MemberExpr { span: 761352..761363, obj: Ident(Ident { span: 761352..761356, ctxt: #1, sym: "Math", optional: false }), prop: Ident(IdentName { span: 761357..761363, sym: "random" }) })), args: [], type_args: None }),right:Lit(Num(Number { span: 761368..761372, value: 16.0, raw: Some("0x10") }))
start:761352,end:761372
operation:"+","accAdd",left:Ident(Ident { span: 764325..764328, ctxt: #76, sym: "acc", optional: false }),right:Member(MemberExpr { span: 764331..764339, obj: Ident(Ident { span: 764331..764334, ctxt: #76, sym: "cur", optional: false }), prop: Computed(ComputedPropName { span: 764334..764339, expr: Ident(Ident { span: 764335..764338, ctxt: #75, sym: "key", optional: false }) }) })
start:764325,end:764339