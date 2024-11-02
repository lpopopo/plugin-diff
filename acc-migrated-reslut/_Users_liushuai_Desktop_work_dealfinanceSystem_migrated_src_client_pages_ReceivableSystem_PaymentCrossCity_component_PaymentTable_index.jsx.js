operation:"+=","accAdd",left:Simple(Ident(BindingIdent { id: Ident { span: 2771663..2771666, ctxt: #42, sym: "sum", optional: false }, type_ann: None })),right:Member(MemberExpr { span: 2771670..2771716, obj: Member(MemberExpr { span: 2771670..2771693, obj: Member(MemberExpr { span: 2771670..2771688, obj: This(ThisExpr { span: 2771670..2771674 }), prop: Ident(IdentName { span: 2771675..2771688, sym: "selectedStore" }) }), prop: Computed(ComputedPropName { span: 2771688..2771693, expr: Ident(Ident { span: 2771689..2771692, ctxt: #43, sym: "key", optional: false }) }) }), prop: Ident(IdentName { span: 2771694..2771716, sym: "current_payment_amount" }) })
start:2771663,end:2771716
operation:"/","accDiv",left:Ident(Ident { span: 2771796..2771799, ctxt: #42, sym: "sum", optional: false }),right:Lit(Num(Number { span: 2771802..2771805, value: 100.0, raw: Some("100") }))
start:2771796,end:2771805
operation:"/","accDiv",left:Paren(ParenExpr { span: 2772152..2772164, expr: Bin(BinExpr { span: 2772153..2772163, op: "||", left: Ident(Ident { span: 2772153..2772158, ctxt: #46, sym: "value", optional: false }), right: Lit(Num(Number { span: 2772162..2772163, value: 0.0, raw: Some("0") })) }) }),right:Lit(Num(Number { span: 2772167..2772170, value: 100.0, raw: Some("100") }))
start:2772152,end:2772170
operation:"/","accDiv",left:Ident(Ident { span: 2774124..2774132, ctxt: #48, sym: "maxValue", optional: false }),right:Lit(Num(Number { span: 2774135..2774138, value: 100.0, raw: Some("100") }))
start:2774124,end:2774138
operation:"/","accDiv",left:Ident(Ident { span: 2774180..2774188, ctxt: #48, sym: "minValue", optional: false }),right:Lit(Num(Number { span: 2774191..2774194, value: 100.0, raw: Some("100") }))
start:2774180,end:2774194
operation:"+","accAdd",left:Ident(Ident { span: 2774476..2774480, ctxt: #53, sym: "prev", optional: false }),right:Member(MemberExpr { span: 2774483..2774499, obj: Ident(Ident { span: 2774483..2774493, ctxt: #48, sym: "$tableData", optional: false }), prop: Computed(ComputedPropName { span: 2774493..2774499, expr: Ident(Ident { span: 2774494..2774498, ctxt: #53, sym: "_key", optional: false }) }) })
start:2774476,end:2774499