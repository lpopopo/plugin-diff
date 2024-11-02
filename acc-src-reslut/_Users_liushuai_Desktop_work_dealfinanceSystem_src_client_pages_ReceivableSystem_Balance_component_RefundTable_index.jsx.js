operation:"-","accSub",left:Member(MemberExpr { span: 356653..356676, obj: Ident(Ident { span: 356653..356669, ctxt: #4, sym: "sign_first_party", optional: false }), prop: Ident(IdentName { span: 356670..356676, sym: "length" }) }),right:Lit(Num(Number { span: 356679..356680, value: 1.0, raw: Some("1") }))
start:356653,end:356680
operation:"-","accSub",left:Member(MemberExpr { span: 357126..357145, obj: Ident(Ident { span: 357126..357138, ctxt: #6, sym: "second_party", optional: false }), prop: Ident(IdentName { span: 357139..357145, sym: "length" }) }),right:Lit(Num(Number { span: 357148..357149, value: 1.0, raw: Some("1") }))
start:357126,end:357149
operation:"*","accMul",left:Ident(Ident { span: 360358..360362, ctxt: #9, sym: "text", optional: false }),right:Lit(Num(Number { span: 360365..360368, value: 100.0, raw: Some("100") }))
start:360358,end:360368
operation:"*","accMul",left:Ident(Ident { span: 360608..360612, ctxt: #10, sym: "text", optional: false }),right:Lit(Num(Number { span: 360615..360618, value: 100.0, raw: Some("100") }))
start:360608,end:360618
operation:"*","accMul",left:Ident(Ident { span: 364423..364427, ctxt: #22, sym: "text", optional: false }),right:Lit(Num(Number { span: 364430..364433, value: 100.0, raw: Some("100") }))
start:364423,end:364433
operation:"+","accAdd",left:Ident(Ident { span: 365218..365223, ctxt: #25, sym: "index", optional: false }),right:Lit(Num(Number { span: 365226..365227, value: 1.0, raw: Some("1") }))
start:365218,end:365227
operation:"/","accDiv",left:Ident(Ident { span: 366400..366405, ctxt: #29, sym: "value", optional: false }),right:Lit(Num(Number { span: 366408..366411, value: 100.0, raw: Some("100") }))
start:366400,end:366411
operation:"*","accMul",left:Call(CallExpr { span: 367244..367296, ctxt: #0, callee: Expr(Ident(Ident { span: 367244..367254, ctxt: #1, sym: "parseFloat", optional: false })), args: [ExprOrSpread { spread: None, expr: Member(MemberExpr { span: 367255..367295, obj: Member(MemberExpr { span: 367255..367277, obj: This(ThisExpr { span: 367255..367259 }), prop: Ident(IdentName { span: 367260..367277, sym: "lastBalanceAmount" }) }), prop: Computed(ComputedPropName { span: 367277..367295, expr: Member(MemberExpr { span: 367278..367294, obj: Ident(Ident { span: 367278..367284, ctxt: #33, sym: "record", optional: false }), prop: Ident(IdentName { span: 367285..367294, sym: "refund_id" }) }) }) }) }], type_args: None }),right:Lit(Num(Number { span: 367299..367302, value: 100.0, raw: Some("100") }))
start:367244,end:367302
operation:"*","accMul",left:Call(CallExpr { span: 367546..367563, ctxt: #0, callee: Expr(Ident(Ident { span: 367546..367556, ctxt: #1, sym: "parseFloat", optional: false })), args: [ExprOrSpread { spread: None, expr: Ident(Ident { span: 367557..367562, ctxt: #33, sym: "value", optional: false }) }], type_args: None }),right:Lit(Num(Number { span: 367566..367569, value: 100.0, raw: Some("100") }))
start:367546,end:367569
operation:"/","accDiv",left:Ident(Ident { span: 367636..367644, ctxt: #33, sym: "maxValue", optional: false }),right:Lit(Num(Number { span: 367647..367650, value: 100.0, raw: Some("100") }))
start:367636,end:367650
operation:"*","accMul",left:Call(CallExpr { span: 367790..367807, ctxt: #0, callee: Expr(Ident(Ident { span: 367790..367800, ctxt: #1, sym: "parseFloat", optional: false })), args: [ExprOrSpread { spread: None, expr: Ident(Ident { span: 367801..367806, ctxt: #33, sym: "value", optional: false }) }], type_args: None }),right:Lit(Num(Number { span: 367810..367813, value: 100.0, raw: Some("100") }))
start:367790,end:367813