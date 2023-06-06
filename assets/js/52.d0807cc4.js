(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{397:function(e,t,a){"use strict";a.r(t);var s=a(7),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("In this post, we will use the "),t("a",{attrs:{href:"https://github.com/RCasatta/rusty-paper-wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rusty Paper Wallet"),t("OutboundLink")],1),e._v(" tool to create a multi-owned descriptor-based paper wallet. We will use "),t("a",{attrs:{href:"https://github.com/bitcoindevkit/bdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("bdk"),t("OutboundLink")],1),e._v(" via the "),t("a",{attrs:{href:"https://github.com/bitcoindevkit/bdk-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("bdk-cli"),t("OutboundLink")],1),e._v(" tool to test our descriptor and to be able to sweep the funds from our paper wallet to a new address.")]),e._v(" "),t("h2",{attrs:{id:"about-paper-wallets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-paper-wallets"}},[e._v("#")]),e._v(" About paper wallets")]),e._v(" "),t("p",[e._v("Paper wallets have a lot of drawbacks, as explained in the "),t("a",{attrs:{href:"https://en.bitcoin.it/wiki/Paper_wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("paper wallet Wiki article"),t("OutboundLink")],1),e._v(", as always, do your own research before deciding to use it with mainnet bitcoins. In this post we will\nonly be using testnet coins.")]),e._v(" "),t("h2",{attrs:{id:"descriptors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#descriptors"}},[e._v("#")]),e._v(" Descriptors")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://github.com/RCasatta/rusty-paper-wallet/tree/339fa4418d94f6fdd96f3d0301cab8a0bc09e8bd",target:"_blank",rel:"noopener noreferrer"}},[e._v("previous version"),t("OutboundLink")],1),e._v(" of the "),t("a",{attrs:{href:"https://github.com/RCasatta/rusty-paper-wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rusty Paper Wallet"),t("OutboundLink")],1),e._v(" followed the original paper wallet design: WIF"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(" as secret part with the option to generate a different kind of addresses (legacy, nested segwit, and segwit).")]),e._v(" "),t("p",[e._v("There were plans to "),t("a",{attrs:{href:"https://github.com/RCasatta/rusty-paper-wallet/issues/5",target:"_blank",rel:"noopener noreferrer"}},[e._v("support mnemonic"),t("OutboundLink")],1),e._v(" instead of WIF keys because it may"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn2",id:"fnref2"}},[e._v("[2]")])]),e._v(" save the sweep transaction"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn3",id:"fnref3"}},[e._v("[3]")])]),e._v(" and there are more wallets capable of importing a mnemonic instead of a WIF.")]),e._v(" "),t("p",[e._v("However, choosing a single address type or having wallet support for a specific format is the kind of problem "),t("a",{attrs:{href:"/descriptors"}},[e._v("descriptors")]),e._v(" solve perfectly, so the latest "),t("a",{attrs:{href:"https://github.com/RCasatta/rusty-paper-wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rusty Paper Wallet"),t("OutboundLink")],1),e._v(" version now accepts a descriptor and the network as parameters.")]),e._v(" "),t("h2",{attrs:{id:"example-use-case"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-use-case"}},[e._v("#")]),e._v(" Example use case")]),e._v(" "),t("p",[e._v("So let's say your grandma wants to buy bitcoin and asked for your help.")]),e._v(" "),t("p",[e._v("You are a little afraid she may lose the private key. At the same time, you don't want to duplicate the keys and give those to her daughters Alice and Barbara, because both of them could spend and accuse the other of having done so.")]),e._v(" "),t("p",[e._v("Even though we trust everyone in the family it is better to play it safe and divide the responsibility of protecting Grandma's bitcoin.")]),e._v(" "),t("p",[e._v("This is a perfect case for a 2 of 3 multi-signature paper wallet. This way also protects the participants from having their copy of the wallet stolen. To compromise Grandma's wallet a thief would need to find and steal at least two of them.")]),e._v(" "),t("p",[e._v("Note that you as the wallet creator are still the single point of trust because you are going to generate the keys for everyone. Setups combining self generated keys from the participants is possible future work.")]),e._v(" "),t("h2",{attrs:{id:"creating-the-paper-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-the-paper-wallet"}},[e._v("#")]),e._v(" Creating the paper wallet")]),e._v(" "),t("p",[e._v("For this example the spending descriptor would be:")]),e._v(" "),t("p",[t("code",[e._v("wsh(multi(2,Grandma,Alice,Barbara))")])]),e._v(" "),t("p",[e._v("You need "),t("a",{attrs:{href:"https://www.rust-lang.org/tools/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("rust"),t("OutboundLink")],1),e._v(" installed to use "),t("a",{attrs:{href:"https://github.com/RCasatta/rusty-paper-wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rusty Paper Wallet"),t("OutboundLink")],1),e._v(". The -n option below explicitly selects\ngenerating "),t("code",[e._v("testnet")]),e._v(" keys. Use "),t("code",[e._v("rusty-paper-wallet --help")]),e._v(" to see usage instructions and other\noptions.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cargo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" rusty-paper-wallet\n$ rusty-paper-wallet "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wsh(multi(2,Grandma,Alice,Barbara))"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" testnet\ndata:text/html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("base64,PCFET0N"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),t("p",[e._v("The "),t("a",{attrs:{href:"/descriptor-based-paper-wallets/data-url.txt"}},[e._v("output")]),e._v(" of the command is very long and has been shortened. The string is a "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Data_URI_scheme",target:"_blank",rel:"noopener noreferrer"}},[e._v("data URI scheme"),t("OutboundLink")],1),e._v(" paste-able in the address bar of a browser. By using a data URI no files are written on the hard disk, leaving less trace of secret material on the computer.\nIt's also a good idea to use incognito mode in the browser to prevent it from saving the page in the history.")]),e._v(" "),t("p",[e._v("The following is the result:")]),e._v(" "),t("iframe",{staticClass:"example",attrs:{src:"/descriptor-based-paper-wallets/Bitcoin_Paper_Wallet.html"}}),e._v(" "),t("p",[e._v("Under the hood, the command created a key pair randomly for every alias present in the descriptor, then replaced the aliases with the created keys and generated the corresponding address. This address is the same for every paper wallet and it is shown in the upper part of the paper wallet (the public part) along with the alias, linking the paper wallet to the owner.")]),e._v(" "),t("p",[e._v("The lower part is the secret part, the written part is the descriptor with the aliases, followed by a legend linking the aliases with the keys. In the legend, all the keys are public but the one of the owner which is a private WIF. The secret QR code instead contains the descriptor already with the keys.")]),e._v(" "),t("p",[e._v("The paper wallet must then be printed, and it is better to use a printer without wifi and also to be aware that some sensitive data may remain in the printer's cache.")]),e._v(" "),t("p",[e._v("Then the paper wallet must be cut along the dotted lines, the secret part should be folded twice over the black zone"),t("sup",{staticClass:"footnote-ref"},[t("a",{attrs:{href:"#fn4",id:"fnref4"}},[e._v("[4]")])]),e._v(". The black zone helps to avoid showing the secret parts in the presence of back-light. Once the folding is done the paper wallet should be plasticized to prevent being damaged by water.")]),e._v(" "),t("h2",{attrs:{id:"bdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bdk"}},[e._v("#")]),e._v(" BDK")]),e._v(" "),t("p",[e._v("Any descriptor based wallet can be used to check the balance of and sweep the funds from\nGrandma's paper wallet. For this post we'll demonstrate using the "),t("a",{attrs:{href:"https://github.com/bitcoindevkit/bdk-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("bdk-cli"),t("OutboundLink")],1),e._v(" tool to do these steps.\nAnother area where "),t("a",{attrs:{href:"https://github.com/bitcoindevkit/bdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("bdk"),t("OutboundLink")],1),e._v(" could be used with "),t("a",{attrs:{href:"https://github.com/RCasatta/rusty-paper-wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rusty Paper Wallet"),t("OutboundLink")],1),e._v(" is to compile a more\ncomplicated miniscript spending policy into a descriptor, as we have done in the "),t("RouterLink",{attrs:{to:"/blog/2021/02/spending-policy-demo/#step-4-create-wallet-descriptors-for-each-participant"}},[e._v("spending policy demo")]),e._v(" post.")],1),e._v(" "),t("h2",{attrs:{id:"funding-tx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#funding-tx"}},[e._v("#")]),e._v(" Funding tx")]),e._v(" "),t("p",[e._v("Since Grandma's wallet was created as a "),t("code",[e._v("wsh")]),e._v(" descriptor, bitcoin can be sent to it from any\nsegwit capable wallet, we'll use a public "),t("a",{attrs:{href:"https://bitcoinfaucet.uo1.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitcoin testnet faucet"),t("OutboundLink")],1),e._v(". Once the funds are sent the\ndeposit address "),t("code",[e._v("tb1qu6lcua9w2zkarjj5xwxh3l3qtcxh84hsra3jrvpszh69j2e54x7q3thycw")]),e._v(" we can also use this\naddress and a testnet explorer to "),t("a",{attrs:{href:"https://mempool.space/testnet/address/tb1qu6lcua9w2zkarjj5xwxh3l3qtcxh84hsra3jrvpszh69j2e54x7q3thycw",target:"_blank",rel:"noopener noreferrer"}},[e._v("confirm the funds were received"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"sweep-tx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sweep-tx"}},[e._v("#")]),e._v(" Sweep tx")]),e._v(" "),t("p",[e._v("Now that Grandma's paper wallet is funded it's time to demonstrate how to use "),t("a",{attrs:{href:"https://github.com/bitcoindevkit/bdk-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("bdk-cli"),t("OutboundLink")],1),e._v(" to sweep these\nfunds to a new address. Let's assume Grandma lost her original paper wallet and has asked\nher daughters to sweep them to a new single signature wallet so she can spend them.")]),e._v(" "),t("h3",{attrs:{id:"step-1-alice-creates-and-signs-a-psbt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-alice-creates-and-signs-a-psbt"}},[e._v("#")]),e._v(" Step 1: Alice creates and signs a PSBT")]),e._v(" "),t("p",[e._v("Alice uses the private text or QR code from her paper wallet to find her private key and the\npublic keys for Grandma and Barbara. With this info she creates a PSBT to sweep Grandma's funds\nto a new address (in this example we'll send them back to our "),t("a",{attrs:{href:"https://bitcoinfaucet.uo1.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitcoin testnet faucet"),t("OutboundLink")],1),e._v("). Notice how Alice\nincludes her wallet's descriptor checksum '#em3q73l5', this "),t("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md#checksums",target:"_blank",rel:"noopener noreferrer"}},[e._v("guarantees"),t("OutboundLink")],1),e._v(" she has entered her descriptor correctly.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("SWEEP_TO_ADDR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("tb1qm5tfegjevj27yvvna9elym9lnzcf0zraxgl8z2\n\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ALICE_WIF")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("cSSKRHDmQEEutp5LD14tAcixu2ehSNPDTqNek1zMa9Pet98qxHq3\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BARBARA_PUBKEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("02a3f3f2658b9812ddeabfbde2fde03f8a65369e4ed621f29fa8ba0cc519b789fb\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GRANDMA_PUBKEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("03f1bd2bff8e9c61f58a8d46d18fd8f3149b1f2d76b3c423a7874a5d5811d67cee\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ALICE_DESCRIPTOR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wsh(multi(2,'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$GRANDMA_PUBKEY")]),e._v(","),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ALICE_WIF")]),e._v(","),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BARBARA_PUBKEY")]),e._v('))#em3q73l5"')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# confirm descriptor creates the expected deposit address")]),e._v("\n$ bdk-cli wallet "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-w")]),e._v(" alice "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ALICE_DESCRIPTOR")]),e._v(" get_new_address\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"address"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tb1qu6lcua9w2zkarjj5xwxh3l3qtcxh84hsra3jrvpszh69j2e54x7q3thycw"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sync the wallet and show the balance")]),e._v("\n$ bdk-cli wallet "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-w")]),e._v(" alice "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ALICE_DESCRIPTOR")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sync")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n$ bdk-cli wallet "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-w")]),e._v(" alice "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ALICE_DESCRIPTOR")]),e._v(" get_balance\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"satoshi"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# create and sign PSBT")]),e._v("\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("UNSIGNED_PSBT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("bdk-cli wallet "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-w")]),e._v(" alice "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" $ALICE_DESCRIPTOR create_tx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--send_all")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--to")]),e._v(" $SWEEP_TO_ADDR:0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-r")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('".psbt"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ALICE_SIGNED_PSBT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("bdk-cli wallet "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-w")]),e._v(" alice "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" $ALICE_DESCRIPTOR sign "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--psbt")]),e._v(" $UNSIGNED_PSBT "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-r")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('".psbt"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n")])])]),t("h3",{attrs:{id:"step-2-barbara-signs-alices-signed-psbt-and-broadcasts-the-tx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-barbara-signs-alices-signed-psbt-and-broadcasts-the-tx"}},[e._v("#")]),e._v(" Step 2: Barbara signs Alice's signed PSBT and broadcasts the tx")]),e._v(" "),t("p",[e._v("Now it's Barbara's turn to use the private text or QR code from her paper wallet to get her private\nkey and the public keys for Grandma and Alice. With this info plus Alice's signed PSBT she can\ncreate a fully signed PSBT to broadcast and complete the sweep of Grandma's funds.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ALICE_PUBKEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("02e486e32f0f87136fa042cb53219ace8537ea1d036deb2f4293570b94325d11cb\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BARBARA_WIF")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("cSfMLzSZ9NjWUTqL3sFpgWJssnu2qgmE2cm5N1jPDRRJuDcrsPEB\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GRANDMA_PUBKEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("03f1bd2bff8e9c61f58a8d46d18fd8f3149b1f2d76b3c423a7874a5d5811d67cee\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BARBARA_DESCRIPTOR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"wsh(multi(2,'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$GRANDMA_PUBKEY")]),e._v(","),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ALICE_PUBKEY")]),e._v(","),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BARBARA_WIF")]),e._v('))#nxfa5n0z"')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# confirm descriptor creates the expected deposit address")]),e._v("\n$ bdk-cli wallet "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-w")]),e._v(" barbara "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BARBARA_DESCRIPTOR")]),e._v(" get_new_address\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"address"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tb1qu6lcua9w2zkarjj5xwxh3l3qtcxh84hsra3jrvpszh69j2e54x7q3thycw"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# sync the wallet and show the balance")]),e._v("\n$ bdk-cli wallet "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-w")]),e._v(" barbara "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BARBARA_DESCRIPTOR")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sync")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n$ bdk-cli wallet "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-w")]),e._v(" barbara "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BARBARA_DESCRIPTOR")]),e._v(" get_balance\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"satoshi"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("FINAL_PSBT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("bdk-cli wallet "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-w")]),e._v(" barbara "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" $BARBARA_DESCRIPTOR sign "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--psbt")]),e._v(" $ALICE_SIGNED_PSBT "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" jq "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-r")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('".psbt"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n\n$ bdk-cli wallet "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-w")]),e._v(" barbara "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BARBARA_DESCRIPTOR")]),e._v(" broadcast "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--psbt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$FINAL_PSBT")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"txid"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"9ecd8e6be92b7edd8bf1799f8f7090e58f813825f826bdb771b4cdb444cdeb59"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("And finally we verify that Alice and Barbara successfully created and broadcast Grandma's "),t("a",{attrs:{href:"https://mempool.space/testnet/tx/9ecd8e6be92b7edd8bf1799f8f7090e58f813825f826bdb771b4cdb444cdeb59",target:"_blank",rel:"noopener noreferrer"}},[e._v("sweep tx"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),t("p",[e._v("In this post we showed how to create a multi-sig descriptor based paper wallet using\n"),t("a",{attrs:{href:"https://github.com/RCasatta/rusty-paper-wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rusty Paper Wallet"),t("OutboundLink")],1),e._v(" and then sweep the funds from our example paper wallet to a new address. If you\nfound this post interesting please comment below. Or give it a try yourself and if you run into any\nproblems or would like to suggest improvements leave an issue in the "),t("a",{attrs:{href:"https://github.com/RCasatta/rusty-paper-wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rusty Paper Wallet"),t("OutboundLink")],1),e._v(" or\n"),t("a",{attrs:{href:"https://github.com/bitcoindevkit/bdk-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("bdk-cli"),t("OutboundLink")],1),e._v(" github repos. Thanks!")]),e._v(" "),t("hr",{staticClass:"footnotes-sep"}),e._v(" "),t("section",{staticClass:"footnotes"},[t("ol",{staticClass:"footnotes-list"},[t("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[t("p",[e._v("Wallet Input Format, a string encoding a ECDSA private key  https://en.bitcoin.it/wiki/Wallet_import_format "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[t("p",[e._v("Unless the user import the WIF directly into bitcoin core "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[e._v("↩︎")])])]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[t("p",[e._v("Some wallets refers to sweep as the action to create a transaction taking all the funds from the paper wallet and sending those to the wallet itself. "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[e._v("↩︎")])])]),e._v(" "),t("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[t("p",[e._v("Ideally, the black zone should be twice as long as the secret part to cover it back and front, long descriptor may leave a shorter black zone, ensure to have you printer set with vertical layout for best results. "),t("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);