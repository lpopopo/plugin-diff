operation:"+","accAdd",left:Call(CallExpr { span: 77241..77296, ctxt: #0, callee: Expr(Member(MemberExpr { span: 77241..77251, obj: Ident(Ident { span: 77241..77245, ctxt: #1, sym: "Math", optional: false }), prop: Ident(IdentName { span: 77246..77251, sym: "round" }) })), args: [ExprOrSpread { spread: None, expr: Bin(BinExpr { span: 77252..77295, op: "*", left: Member(MemberExpr { span: 77252..77289, obj: Member(MemberExpr { span: 77252..77274, obj: This(ThisExpr { span: 77252..77256 }), prop: Ident(IdentName { span: 77257..77274, sym: "rebateInvoiceForm" }) }), prop: Ident(IdentName { span: 77275..77289, sym: "invoice_amount" }) }), right: Lit(Num(Number { span: 77292..77295, value: 100.0, raw: Some("100") })) }) }], type_args: None }),right:Ident(Ident { span: 77299..77302, ctxt: #39, sym: "pre", optional: false })
start:77241,end:77302
operation:"-","accSub",left:Paren(ParenExpr { span: 77240..77303, expr: Call(CallExpr { span: 0..0, ctxt: #0, callee: Expr(Ident(Ident { span: 0..0, ctxt: #0, sym: "accAdd", optional: false })), args: [ExprOrSpread { spread: None, expr: Call(CallExpr { span: 77241..77296, ctxt: #0, callee: Expr(Member(MemberExpr { span: 77241..77251, obj: Ident(Ident { span: 77241..77245, ctxt: #1, sym: "Math", optional: false }), prop: Ident(IdentName { span: 77246..77251, sym: "round" }) })), args: [ExprOrSpread { spread: None, expr: Bin(BinExpr { span: 77252..77295, op: "*", left: Member(MemberExpr { span: 77252..77289, obj: Member(MemberExpr { span: 77252..77274, obj: This(ThisExpr { span: 77252..77256 }), prop: Ident(IdentName { span: 77257..77274, sym: "rebateInvoiceForm" }) }), prop: Ident(IdentName { span: 77275..77289, sym: "invoice_amount" }) }), right: Lit(Num(Number { span: 77292..77295, value: 100.0, raw: Some("100") })) }) }], type_args: None }) }, ExprOrSpread { spread: None, expr: Ident(Ident { span: 77299..77302, ctxt: #39, sym: "pre", optional: false }) }], type_args: None }) }),right:Ident(Ident { span: 77306..77309, ctxt: #39, sym: "old", optional: false })
start:77240,end:77309