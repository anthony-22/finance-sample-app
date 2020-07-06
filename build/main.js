uni._rawComponents={balance:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n            var balance = 2584.77;\n            var currentAnim = 0;\n            var amount = this.find("#amount");\n            function sleep(ms) {\n                return new Promise(resolve => setTimeout(resolve, ms));\n            }\n            (async function() {\n                for (let i = 0; i < 100; i ++){\n                    await sleep(2);\n                    currentAnim += balance / 100;\n                    amount.innerText = "$ "+parseFloat(currentAnim.toFixed(2)).toLocaleString();\n                }\n            })()\n        ',children:[{context:1,closure:"",children:[]},{context:3,closure:"",children:[]}]}]},srcBuffer:'<template>\n    <div id="balance">\n        \n        <h6 id="label-balance" style="color: #eee">Balance:</h6>\n        <h1 id="amount">$ 0.00</h1>\n    </div>\n</template>'},history:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n            this.imports = ["navbar", "transaction"];\n        ',children:[{context:1,closure:"",children:[]},{context:3,closure:"",children:[]}]}]},srcBuffer:'<template>\n    <div id="history">\n        \n        <navbar></navbar>\n        <transaction></transaction>\n    </div>\n</template>'},navbar:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n            this.imports = ["round-ico"];\n        ',children:[{context:1,closure:"",children:[]},{context:3,closure:"",children:[]},{context:5,closure:"",children:[]},{context:7,closure:"",children:[]}]}]},srcBuffer:'<template>\n    <div id="navbar">\n        \n        <round-ico squared="true" color="#ff6e6e" title="History" src="res/wallet.png"></round-ico>\n        <round-ico squared="true" color="#ffec99" title="Transfer" src="res/bank.png"></round-ico>\n        <round-ico squared="true" color="#ccff99" title="Invest" src="res/invest.png"></round-ico>\n        <round-ico squared="true" color="#a4fcde" title="Settings" src="res/settings.png"></round-ico>\n    </div>\n</template>'},root:{execTree:{context:0,closure:"",children:[{context:1,closure:'\n      this.imports = ["history", "balance"];\n    ',children:[{context:1,closure:"",children:[]},{context:3,closure:"",children:[]}]}]},srcBuffer:'<template>\n  <div id="root">\n    \n    <history></history>\n    <balance></balance>\n  </div>\n</template>'},"round-ico":{execTree:{context:0,closure:"",children:[{context:1,closure:'\n            var img = this.find("img");\n            img.src = this.props.src;\n            if (this.props.color){\n                this.style["background-color"] = this.props.color;\n            }\n            if (this.props.squared){\n                this.style["border-radius"] = "12px";\n            }\n        ',children:[{context:1,closure:"",children:[]},{context:3,closure:"\n                if (this.props.title){\n                    this.innerText = this.props.title;\n                }\n            ",children:[]}]}]},srcBuffer:'<template>\n    <div class="round-ico light-shadow">\n        \n        <img>\n        <span>\n            \n        </span>\n    </div>\n</template>'},"transact-cell":{execTree:{context:0,closure:"",children:[{context:1,closure:'\n            this.imports = ["round-ico"];\n            console.log("hi")\n            this.onFullLoad = () => {\n                console.log(this.props)\n                this.find("img").src = "res/"+this.props.cat.toLowerCase()+".png";\n            }\n        ',children:[{context:1,closure:"",children:[]},{context:3,closure:"\n            this.innerText = this.props.desc;\n        ",children:[]},{context:5,closure:'\n            this.style.color = this.props.amount.indexOf("-") == -1 ? "green" : "red"; \n            this.innerText = this.props.amount;\n        ',children:[]},{context:7,closure:"\n            this.innerText = this.props.date;\n        ",children:[]}]}]},srcBuffer:'<template>\n    <div class="transact-cell">\n        \n        <round-ico color="#eee"></round-ico>\n        <span class="desc"></span>\n        <span class="amount v-center"></span>\n        <span class="date"></span>\n    </div>\n</template>'},transaction:{execTree:{context:0,closure:"",children:[{context:1,closure:"",children:[{context:1,closure:"",children:[]},{context:3,closure:'\n            this.imports = ["transact-cell"];\n            ',children:[{context:1,closure:"",children:[]},{context:3,closure:"",children:[]},{context:5,closure:"",children:[]},{context:7,closure:"",children:[]},{context:9,closure:"",children:[]},{context:11,closure:"",children:[]}]}]}]},srcBuffer:'<template>\n    <div id="transaction">\n        <h2>History</h2>\n        <div class="listview">\n            \n            <transact-cell desc="Starbucks" date="Today 2:31 PM" cat="drink" amount="-5.49">\n            </transact-cell>\n            <transact-cell desc="ECORP PAY" date="Yesterday 10:24 AM" cat="money" amount="+2,788.44">\n            </transact-cell>\n            <transact-cell desc="McDonalds" date="7/5/20 3:42 PM" cat="food" amount="-11.99">\n            </transact-cell>\n            <transact-cell desc="Spotify Premium" date="7/5/20 12:01 PM" cat="money" amount="-10.99">\n            </transact-cell>\n            <transact-cell desc="Chatime" date="7/4/20 11:44 AM" cat="drink" amount="-6.49">\n            </transact-cell>\n            <transact-cell desc="Uber Eats" date="7/4/20 10:26 AM" cat="food" amount="-15.45">\n            </transact-cell>\n        </div>\n    </div>\n</template>'}};const execTree={context:"document.body",closure:'\n            this.imports = ["root"];\n        ',children:[{context:1,closure:"",children:[]}]};uni._evalExecTree(execTree,document.body);