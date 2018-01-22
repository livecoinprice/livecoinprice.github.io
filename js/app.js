/*! livecoinprice - v1.0.0 - 2018-01-22 */
window.app=angular.module("app",["ngMaterial","ngMessages","ngAnimate"]);;/*! livecoinprice - v1.0.0 - 2018-01-22 */
!function(){app.controller("mainController",["$scope","$log","$q","$timeout","$mdDialog",function(e,a,n,i,t){var m,s=[{symbol:"BTCUSD",name:"Bitcoin"},{symbol:"XRPUSD",name:"Ripple"},{symbol:"ETHUSD",name:"Ethereum"},{symbol:"LTCUSD",name:"Litecoin"},{symbol:"BCHUSD",name:"Bitcoin Cash"},{symbol:"IOTUSD",name:"Iota"},{symbol:"EOSUSD",name:"EOS"},{symbol:"ETCUSD",name:"Ethereum Classic"},{symbol:"NEOUSD",name:"NEO"},{symbol:"OMGUSD",name:"OmiseGO"},{symbol:"SNTUSD",name:"Status"},{symbol:"ZECUSD",name:"Zcash"},{symbol:"XMRUSD",name:"Monero"},{symbol:"DSHUSD",name:"Dash"},{symbol:"QTMUSD",name:"Qtum"},{symbol:"ETPUSD",name:"ETP"},{symbol:"QSHUSD",name:"QASH"},{symbol:"BTGUSD",name:"BTG"},{symbol:"DATUSD",name:"Streamr"},{symbol:"YYWUSD",name:"YOYOW"},{symbol:"GNTUSD",name:"Golem"},{symbol:"SANUSD",name:"Santiment"},{symbol:"EDOUSD",name:"Eidoo"},{symbol:"AVTUSD",name:"Aventus"},{symbol:"RRTUSD",name:"Recorvery Right Tokens"},{symbol:"BATUSD",name:"Basic Attention Token"},{symbol:"FUNUSD",name:"FunFair"},{symbol:"MNAUSD",name:"Decentraland"},{symbol:"ZRXUSD",name:"0x"},{symbol:"SPKUSD",name:"SpankChain"},{symbol:"TNBUSD",name:"Time New Bank"},{symbol:"BTCEUR",name:"Bitcoin EUR"},{symbol:"ETHBTC",name:"Ethereum BTC",digit:8},{symbol:"XRPBTC",name:"Ripple BTC",digit:8},{symbol:"BCHBTC",name:"Bitcoin Cash BTC",digit:8},{symbol:"BCHETH",name:"Bitcoin Cash ETH",digit:8},{symbol:"LTCBTC",name:"Litecoin BTC",digit:8},{symbol:"EOSBTC",name:"EOS BTC",digit:8},{symbol:"EOSETH",name:"EOS ETH",digit:8},{symbol:"IOTEUR",name:"Iota EUR"},{symbol:"IOTBTC",name:"Iota BTC",digit:8},{symbol:"IOTETH",name:"Iota ETH",digit:8},{symbol:"ETCBTC",name:"Ethereum Classic BTC",digit:8},{symbol:"NEOBTC",name:"NEO BTC",digit:8},{symbol:"NEOETH",name:"NEO ETH",digit:8},{symbol:"OMGBTC",name:"OmiseGO BTC",digit:8},{symbol:"OMGETH",name:"OmiseGO ETH",digit:8},{symbol:"ZECBTC",name:"Zcash BTC",digit:8},{symbol:"XMRBTC",name:"Monero BTC",digit:8},{symbol:"DSHBTC",name:"Dash BTC",digit:8},{symbol:"QTMBTC",name:"Qtum BTC",digit:8},{symbol:"QTMETH",name:"Qtum ETH",digit:8},{symbol:"BTGBTC",name:"BTG BTC",digit:8},{symbol:"QSHBTC",name:"QASH BTC",digit:8},{symbol:"QSHETH",name:"QASH ETH",digit:8},{symbol:"SNTBTC",name:"Status BTC",digit:8},{symbol:"SNTETH",name:"Status ETH",digit:8},{symbol:"ETPBTC",name:"ETP BTC",digit:8},{symbol:"ETPETH",name:"ETP ETH",digit:8},{symbol:"EDOBTC",name:"Eidoo BTC",digit:8},{symbol:"EDOETH",name:"Eidoo ETH",digit:8},{symbol:"SANBTC",name:"Santiment BTC",digit:8},{symbol:"SANETH",name:"Santiment ETH",digit:8},{symbol:"GNTBTC",name:"Golem BTC",digit:8},{symbol:"GNTETH",name:"Golem ETH",digit:8},{symbol:"DATBTC",name:"Streamr BTC",digit:8},{symbol:"DATETH",name:"Streamr ETH",digit:8},{symbol:"YYWBTC",name:"YOYOW BTC",digit:8},{symbol:"YYWETH",name:"YOYOW ETH",digit:8},{symbol:"ZRXBTC",name:"0x BTC",digit:8},{symbol:"ZRXETH",name:"0x ETH",digit:8},{symbol:"SPKBTC",name:"SpankChain BTC",digit:8},{symbol:"SPKETH",name:"SpankChain ETH",digit:8},{symbol:"FUNBTC",name:"FunFair BTC",digit:8},{symbol:"FUNETH",name:"FunFair ETH",digit:8},{symbol:"TNBBTC",name:"Time New Bank BTC",digit:8},{symbol:"TNBETH",name:"Time New Bank ETH",digit:8},{symbol:"AVTBTC",name:"Aventus BTC",digit:8},{symbol:"EVTETH",name:"Aventus ETH",digit:8},{symbol:"BATBTC",name:"Basic Attention Token BTC",digit:8},{symbol:"BATETH",name:"Basic Attention Token ETH",digit:8},{symbol:"MNABTC",name:"Decentraland BTC",digit:8},{symbol:"MNAETH",name:"Decentraland ETH",digit:8},{symbol:"RRTBTC",name:"Recorvery Right Tokens BTC",digit:8}];function o(){var a=[];e.surface.datas.forEach(function(e){a.push(e.symbol)}),localStorage.setItem("surface",a)}function T(a){for(var n="string"==typeof a?"symbol":"chanId",i=!1,t=0;t<e.surface.datas.length;t++)if(e.surface.datas[t][n]==a){i=!0;break}return i&&(i=e.surface.datas[t]),i}e.isView=!0,function a(){m=new WebSocket("wss://api.bitfinex.com/ws/");m.onmessage=function(a){var n=JSON.parse(a.data),i=typeof n;switch(i){case"object":if("subscribed"==n.event){var t=T(n.pair);t&&(t.chanId=n.chanId)}if("error"==n.event&&console.log(n),n instanceof Array&&"hb"!==n[1]){var t=T(n[0]);t&&(t.surface.prePrice=t.surface.price,t.surface.price=n[7],t.surface.percent=n[6],t.surface.change=n[5],t.surface.volume=n[8],t.surface.buy=n[1],t.surface.sell=n[3],t.surface.high=n[9],t.surface.low=n[10],e.$digest())}}};m.onopen=function(){e.surface.datas.forEach(function(e){var a={event:"subscribe",channel:"ticker",pair:e.symbol};m.send(JSON.stringify(a))})};m.onclose=function(){console.log("bağlantı koptu"),e.sub={},a()};var t=e;e.noCache=!0;e.simulateQuery=!1;e.isDisabled=!1;e.states=function(){var e=[];return s.forEach(function(a){e.push({value:a.symbol,name:a.name,digit:a.digit,display:angular.uppercase(a.symbol+" - "+a.name)})}),e}();e.querySearch=function(e){var a,m=e?t.states.filter(function(e){var a=angular.uppercase(e);return function(e){return e.display.indexOf(a)>=0}}(e)):t.states;return t.simulateQuery?(a=n.defer(),i(function(){a.resolve(m)},1e3*Math.random(),!1),a.promise):m};e.selectedItemChange=function(e){};e.selectedItemChangeSurface=function(a){a&&e.addSurface(a.value,a.name,a.digit)};e.searchTextChange=function(e){};e.newState=function(e){alert("Sory "+e)};e.searchData={searchTextSurface:"",searchText:"",selectedItemSurface:null,selectedItem:null}}(),e.surface={datas:[]},function(){var a=[];try{a=localStorage.getItem("surface").split(",")}catch(e){}0==a.length&&(a=["BTCUSD","XRPUSD","ETHUSD","LTCUSD","BCHUSD","IOTUSD","EOSUSD","ETCUSD","NEOUSD","OMGUSD","SNTUSD","ZECUSD","XMRUSD","DSHUSD","QTMUSD","SPKUSD","ETPUSD","QSHUSD","BTGUSD","DATUSD","YYWUSD","GNTUSD","SANUSD","EDOUSD","AVTUSD","RRTUSD","BATUSD","FUNUSD","MNAUSD","ZRXUSD","TNBUSD"]);a.forEach(function(a){var n=function(e){for(var a=!1,n=0;n<s.length;n++)if(s[n].symbol==e){a=!0;break}a&&(a=s[n]);return a}(a);n&&e.surface.datas.push({symbol:n.symbol,name:n.name,digit:n.digit,surface:{}})})}(),e.$on("$destroy",function(){}),e.deleteSurface=function(a){var n=e.surface.datas[a];if(n){e.surface.datas.splice(a,1);var i={event:"unsubscribe",chanId:n.chanId};m.send(JSON.stringify(i)),o()}},e.addSurface=function(a,n,i){var t=T(a);if(!t){e.surface.datas.push({symbol:a,name:n,digit:i,surface:{}});var s={event:"subscribe",channel:"ticker",pair:a};m.send(JSON.stringify(s)),o()}}}]),app.directive("animateOnChange",["$animate","$timeout",function(e,a){return function(n,i,t){n.$watch(t.animateOnChange,function(n,t){if(n!=t){var m=n>t?"change-up":"change";e.addClass(i,m).then(function(){a(function(){e.removeClass(i,m)},1e3)})}})}}])}();