operation:"-","accSub",left:Member(MemberExpr { span: 265699..265722, obj: Ident(Ident { span: 265699..265715, ctxt: #4, sym: "sign_first_party", optional: false }), prop: Ident(IdentName { span: 265716..265722, sym: "length" }) }),right:Lit(Num(Number { span: 265725..265726, value: 1.0, raw: Some("1") }))
start:265699,end:265726
operation:"-","accSub",left:Member(MemberExpr { span: 266172..266191, obj: Ident(Ident { span: 266172..266184, ctxt: #6, sym: "second_party", optional: false }), prop: Ident(IdentName { span: 266185..266191, sym: "length" }) }),right:Lit(Num(Number { span: 266194..266195, value: 1.0, raw: Some("1") }))
start:266172,end:266195
operation:"*","accMul",left:Ident(Ident { span: 269591..269595, ctxt: #9, sym: "text", optional: false }),right:Lit(Num(Number { span: 269598..269601, value: 100.0, raw: Some("100") }))
start:269591,end:269601
operation:"*","accMul",left:Ident(Ident { span: 269841..269845, ctxt: #10, sym: "text", optional: false }),right:Lit(Num(Number { span: 269848..269851, value: 100.0, raw: Some("100") }))
start:269841,end:269851
operation:"*","accMul",left:Ident(Ident { span: 274034..274038, ctxt: #23, sym: "text", optional: false }),right:Lit(Num(Number { span: 274041..274044, value: 100.0, raw: Some("100") }))
start:274034,end:274044
operation:"+","accAdd",left:Ident(Ident { span: 274817..274822, ctxt: #25, sym: "index", optional: false }),right:Lit(Num(Number { span: 274825..274826, value: 1.0, raw: Some("1") }))
start:274817,end:274826
operation:"/","accDiv",left:Ident(Ident { span: 278121..278126, ctxt: #39, sym: "value", optional: false }),right:Lit(Num(Number { span: 278129..278132, value: 100.0, raw: Some("100") }))
start:278121,end:278132
operation:"-","accSub",left:Member(MemberExpr { span: 279194..279219, obj: Ident(Ident { span: 279194..279206, ctxt: #44, sym: "$balanceList", optional: false }), prop: Ident(IdentName { span: 279207..279219, sym: "post_payment" }) }),right:Member(MemberExpr { span: 279222..279257, obj: Ident(Ident { span: 279222..279234, ctxt: #44, sym: "$balanceList", optional: false }), prop: Ident(IdentName { span: 279235..279257, sym: "already_balance_amount" }) })
start:279194,end:279257
operation:"*","accMul",left:Call(CallExpr { span: 279293..279347, ctxt: #0, callee: Expr(Ident(Ident { span: 279293..279303, ctxt: #1, sym: "parseFloat", optional: false })), args: [ExprOrSpread { spread: None, expr: Member(MemberExpr { span: 279304..279346, obj: Member(MemberExpr { span: 279304..279326, obj: This(ThisExpr { span: 279304..279308 }), prop: Ident(IdentName { span: 279309..279326, sym: "lastBalanceAmount" }) }), prop: Computed(ComputedPropName { span: 279326..279346, expr: Member(MemberExpr { span: 279327..279345, obj: Ident(Ident { span: 279327..279333, ctxt: #44, sym: "record", optional: false }), prop: Ident(IdentName { span: 279334..279345, sym: "relation_id" }) }) }) }) }], type_args: None }),right:Lit(Num(Number { span: 279350..279353, value: 100.0, raw: Some("100") }))
start:279293,end:279353
operation:"*","accMul",left:Call(CallExpr { span: 279695..279712, ctxt: #0, callee: Expr(Ident(Ident { span: 279695..279705, ctxt: #1, sym: "parseFloat", optional: false })), args: [ExprOrSpread { spread: None, expr: Ident(Ident { span: 279706..279711, ctxt: #44, sym: "value", optional: false }) }], type_args: None }),right:Lit(Num(Number { span: 279715..279718, value: 100.0, raw: Some("100") }))
start:279695,end:279718
operation:"*","accMul",left:Call(CallExpr { span: 280002..280019, ctxt: #0, callee: Expr(Ident(Ident { span: 280002..280012, ctxt: #1, sym: "parseFloat", optional: false })), args: [ExprOrSpread { spread: None, expr: Ident(Ident { span: 280013..280018, ctxt: #44, sym: "value", optional: false }) }], type_args: None }),right:Lit(Num(Number { span: 280022..280025, value: 100.0, raw: Some("100") }))
start:280002,end:280025
operation:"/","accDiv",left:Member(MemberExpr { span: 280048..280083, obj: Ident(Ident { span: 280048..280060, ctxt: #44, sym: "$balanceList", optional: false }), prop: Ident(IdentName { span: 280061..280083, sym: "current_balance_amount" }) }),right:Member(MemberExpr { span: 280086..280111, obj: Ident(Ident { span: 280086..280098, ctxt: #44, sym: "$balanceList", optional: false }), prop: Ident(IdentName { span: 280099..280111, sym: "post_payment" }) })
start:280048,end:280111
operation:"-","accSub",left:Member(MemberExpr { span: 280291..280310, obj: Ident(Ident { span: 280291..280297, ctxt: #44, sym: "record", optional: false }), prop: Ident(IdentName { span: 280298..280310, sym: "post_payment" }) }),right:Member(MemberExpr { span: 280313..280342, obj: Ident(Ident { span: 280313..280319, ctxt: #44, sym: "record", optional: false }), prop: Ident(IdentName { span: 280320..280342, sym: "already_balance_amount" }) })
start:280291,end:280342
operation:"-","accSub",left:Call(CallExpr { span: 0..0, ctxt: #0, callee: Expr(Ident(Ident { span: 0..0, ctxt: #0, sym: "accSub", optional: false })), args: [ExprOrSpread { spread: None, expr: Member(MemberExpr { span: 280291..280310, obj: Ident(Ident { span: 280291..280297, ctxt: #44, sym: "record", optional: false }), prop: Ident(IdentName { span: 280298..280310, sym: "post_payment" }) }) }, ExprOrSpread { spread: None, expr: Member(MemberExpr { span: 280313..280342, obj: Ident(Ident { span: 280313..280319, ctxt: #44, sym: "record", optional: false }), prop: Ident(IdentName { span: 280320..280342, sym: "already_balance_amount" }) }) }], type_args: None }),right:Member(MemberExpr { span: 280345..280374, obj: Ident(Ident { span: 280345..280351, ctxt: #44, sym: "record", optional: false }), prop: Ident(IdentName { span: 280352..280374, sym: "current_balance_amount" }) })
start:280291,end:280374
operation:"+=","accAdd",left:BytePos(281832),right:BytePos(281832)
start:281832,end:281875
operation:"-=","accSub",left:BytePos(282033),right:BytePos(282033)
start:282033,end:282076