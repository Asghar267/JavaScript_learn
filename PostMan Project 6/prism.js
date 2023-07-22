// /* PrismJS 1.27.0
// https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+java+js-extras+json+jsonp+python&plugins=toolbar+copy-to-clipboard+download-button */
// !function (e) {
//     var n = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/
//         , t = "(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*"
//         , s = {
//             pattern: RegExp("(^|[^\\w.])" + t + "[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),
//             lookbehind: !0,
//             inside: {
//                 namespace: {
//                     pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
//                     inside: {
//                         punctuation: /\./
//                     }
//                 },
//                 punctuation: /\./
//             }
//         };
//     e.languages.java = e.languages.extend("clike", {
//         string: {
//             pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
//             lookbehind: !0,
//             greedy: !0
//         },
//         "class-name": [s, {
//             pattern: RegExp("(^|[^\\w.])" + t + "[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()]|\\s*(?:\\[[\\s,]*\\]\\s*)?::\\s*new\\b)"),
//             lookbehind: !0,
//             inside: s.inside
//         }, {
//                 pattern: RegExp("(\\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\\s+)" + t + "[A-Z]\\w*\\b"),
//                 lookbehind: !0,
//                 inside: s.inside
//             }],
//         keyword: n,
//         function: [e.languages.clike.function, {
//             pattern: /(::\s*)[a-z_]\w*/,
//             lookbehind: !0
//         }],
//         number: /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
//         operator: {
//             pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
//             lookbehind: !0
//         }
//     }),
//         e.languages.insertBefore("java", "string", {
//             "triple-quoted-string": {
//                 pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
//                 greedy: !0,
//                 alias: "string"
//             },
//             char: {
//                 pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
//                 greedy: !0
//             }
//         }),
//         e.languages.insertBefore("java", "class-name", {
//             annotation: {
//                 pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
//                 lookbehind: !0,
//                 alias: "punctuation"
//             },
//             generics: {
//                 pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
//                 inside: {
//                     "class-name": s,
//                     keyword: n,
//                     punctuation: /[<>(),.:]/,
//                     operator: /[?&|]/
//                 }
//             },
//             import: [{
//                 pattern: RegExp("(\\bimport\\s+)" + t + "(?:[A-Z]\\w*|\\*)(?=\\s*;)"),
//                 lookbehind: !0,
//                 inside: {
//                     namespace: s.inside.namespace,
//                     punctuation: /\./,
//                     operator: /\*/,
//                     "class-name": /\w+/
//                 }
//             }, {
//                 pattern: RegExp("(\\bimport\\s+static\\s+)" + t + "(?:\\w+|\\*)(?=\\s*;)"),
//                 lookbehind: !0,
//                 alias: "static",
//                 inside: {
//                     namespace: s.inside.namespace,
//                     static: /\b\w+$/,
//                     punctuation: /\./,
//                     operator: /\*/,
//                     "class-name": /\w+/
//                 }
//             }],
//             namespace: {
//                 pattern: RegExp("(\\b(?:exports|import(?:\\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\\s+)(?!<keyword>)[a-z]\\w*(?:\\.[a-z]\\w*)*\\.?".replace(/<keyword>/g, function () {
//                     return n.source
//                 })),
//                 lookbehind: !0,
//                 inside: {
//                     punctuation: /\./
//                 }
//             }
//         })
// }(prism);
// !function (a) {
//     function e(a, e) {
//         return RegExp(a.replace(/<ID>/g, function () {
//             return "(?!\\s)[_$a-zA-Z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*"
//         }), e)
//     }
//     a.languages.insertBefore("javascript", "function-variable", {
//         "method-variable": {
//             pattern: RegExp("(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source),
//             lookbehind: !0,
//             alias: ["function-variable", "method", "function", "property-access"]
//         }
//     }),
//         a.languages.insertBefore("javascript", "function", {
//             method: {
//                 pattern: RegExp("(\\.\\s*)" + a.languages.javascript.function.source),
//                 lookbehind: !0,
//                 alias: ["function", "property-access"]
//             }
//         }),
//         a.languages.insertBefore("javascript", "constant", {
//             "known-class-name": [{
//                 pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
//                 alias: "class-name"
//             }, {
//                 pattern: /\b(?:[A-Z]\w*)Error\b/,
//                 alias: "class-name"
//             }]
//         }),
//         a.languages.insertBefore("javascript", "keyword", {
//             imports: {
//                 pattern: e("(\\bimport\\b\\s*)(?:<ID>(?:\\s*,\\s*(?:\\*\\s*as\\s+<ID>|\\{[^{}]*\\}))?|\\*\\s*as\\s+<ID>|\\{[^{}]*\\})(?=\\s*\\bfrom\\b)"),
//                 lookbehind: !0,
//                 inside: a.languages.javascript
//             },
//             exports: {
//                 pattern: e("(\\bexport\\b\\s*)(?:\\*(?:\\s*as\\s+<ID>)?(?=\\s*\\bfrom\\b)|\\{[^{}]*\\})"),
//                 lookbehind: !0,
//                 inside: a.languages.javascript
//             }
//         }),
//         a.languages.javascript.keyword.unshift({
//             pattern: /\b(?:as|default|export|from|import)\b/,
//             alias: "module"
//         }, {
//             pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
//             alias: "control-flow"
//         }, {
//             pattern: /\bnull\b/,
//             alias: ["null", "nil"]
//         }, {
//             pattern: /\bundefined\b/,
//             alias: "nil"
//         }),
//         a.languages.insertBefore("javascript", "operator", {
//             spread: {
//                 pattern: /\.{3}/,
//                 alias: "operator"
//             },
//             arrow: {
//                 pattern: /=>/,
//                 alias: "operator"
//             }
//         }),
//         a.languages.insertBefore("javascript", "punctuation", {
//             "property-access": {
//                 pattern: e("(\\.\\s*)#?<ID>"),
//                 lookbehind: !0
//             },
//             "maybe-class-name": {
//                 pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
//                 lookbehind: !0
//             },
//             dom: {
//                 pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
//                 alias: "variable"
//             },
//             console: {
//                 pattern: /\bconsole(?=\s*\.)/,
//                 alias: "class-name"
//             }
//         });
//     for (var t = ["function", "function-variable", "method", "method-variable", "property-access"], r = 0; r < t.length; r++) {
//         var n = t[r]
//             , s = a.languages.javascript[n];
//         "RegExp" === a.util.type(s) && (s = a.languages.javascript[n] = {
//             pattern: s
//         });
//         var o = s.inside || {};
//         (s.inside = o)["maybe-class-name"] = /^[A-Z][\s\S]*/
//     }
// }(Prism);
// Prism.languages.json = {
//     property: {
//         pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
//         lookbehind: !0,
//         greedy: !0
//     },
//     string: {
//         pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
//         lookbehind: !0,
//         greedy: !0
//     },
//     comment: {
//         pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
//         greedy: !0
//     },
//     number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
//     punctuation: /[{}[\],]/,
//     operator: /:/,
//     boolean: /\b(?:false|true)\b/,
//     null: {
//         pattern: /\bnull\b/,
//         alias: "keyword"
//     }
// },
//     Prism.languages.webmanifest = Prism.languages.json;
// Prism.languages.jsonp = Prism.languages.extend("json", {
//     punctuation: /[{}[\]();,.]/
// }),
//     Prism.languages.insertBefore("jsonp", "punctuation", {
//         function: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/
//     });
