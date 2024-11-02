operation:"+=","accAdd",left:Simple(Ident(BindingIdent { id: Ident { span: 780938..780939, ctxt: #5, sym: "i", optional: false }, type_ann: None })),right:Lit(Num(Number { span: 780943..780944, value: 1.0, raw: Some("1") }))
start:780938,end:780944
operation:"*","accMul",left:Call(CallExpr { span: 780995..781008, ctxt: #0, callee: Expr(Member(MemberExpr { span: 780995..781006, obj: Ident(Ident { span: 780995..780999, ctxt: #1, sym: "Math", optional: false }), prop: Ident(IdentName { span: 781000..781006, sym: "random" }) })), args: [], type_args: None }),right:Lit(Num(Number { span: 781011..781015, value: 16.0, raw: Some("0x10") }))
start:780995,end:781015
operation:"+","accAdd",left:Ident(Ident { span: 788807..788812, ctxt: #23, sym: "index", optional: false }),right:Lit(Num(Number { span: 788815..788816, value: 1.0, raw: Some("1") }))
start:788807,end:788816
operation:"+","accAdd",left:Ident(Ident { span: 788884..788889, ctxt: #23, sym: "index", optional: false }),right:Lit(Num(Number { span: 788892..788893, value: 1.0, raw: Some("1") }))
start:788884,end:788893
operation:"+=","accAdd",left:Simple(Ident(BindingIdent { id: Ident { span: 790811..790814, ctxt: #20, sym: "sum", optional: false }, type_ann: None })),right:Member(MemberExpr { span: 790818..790838, obj: Ident(Ident { span: 790818..790823, ctxt: #28, sym: "value", optional: false }), prop: Ident(IdentName { span: 790824..790838, sym: "invoice_amount" }) })
start:790811,end:790838
operation:"+=","accAdd",left:Simple(Ident(BindingIdent { id: Ident { span: 793163..793170, ctxt: #20, sym: "tempSum", optional: false }, type_ann: None })),right:Member(MemberExpr { span: 793174..793202, obj: Ident(Ident { span: 793174..793179, ctxt: #36, sym: "value", optional: false }), prop: Ident(IdentName { span: 793180..793202, sym: "current_payment_amount" }) })
start:793163,end:793202
operation:"/","accDiv",left:Ident(Ident { span: 793298..793305, ctxt: #20, sym: "tempSum", optional: false }),right:Lit(Num(Number { span: 793308..793311, value: 100.0, raw: Some("100") }))
start:793298,end:793311
operation:"-","accSub",left:Member(MemberExpr { span: 804592..804604, obj: Ident(Ident { span: 804592..804597, ctxt: #95, sym: "value", optional: false }), prop: Ident(IdentName { span: 804598..804604, sym: "length" }) }),right:Lit(Num(Number { span: 804607..804608, value: 1.0, raw: Some("1") }))
start:804592,end:804608
operation:"-","accSub",left:Member(MemberExpr { span: 804867..804879, obj: Ident(Ident { span: 804867..804872, ctxt: #95, sym: "value", optional: false }), prop: Ident(IdentName { span: 804873..804879, sym: "length" }) }),right:Call(CallExpr { span: 804882..804900, ctxt: #0, callee: Expr(Member(MemberExpr { span: 804882..804895, obj: Ident(Ident { span: 804882..804887, ctxt: #95, sym: "value", optional: false }), prop: Ident(IdentName { span: 804888..804895, sym: "indexOf" }) })), args: [ExprOrSpread { spread: None, expr: Lit(Str(Str { span: 804896..804899, value: ".", raw: Some("'.'") })) }], type_args: None })
start:804867,end:804900
operation:"+","accAdd",left:Call(CallExpr { span: 805065..805083, ctxt: #0, callee: Expr(Member(MemberExpr { span: 805065..805078, obj: Ident(Ident { span: 805065..805070, ctxt: #95, sym: "value", optional: false }), prop: Ident(IdentName { span: 805071..805078, sym: "indexOf" }) })), args: [ExprOrSpread { spread: None, expr: Lit(Str(Str { span: 805079..805082, value: ".", raw: Some("'.'") })) }], type_args: None }),right:Lit(Num(Number { span: 805086..805087, value: 3.0, raw: Some("3") }))
start:805065,end:805087