(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),i=(n(0),n(243)),o={},c={unversionedId:"smart-contracts/VaultAPI",id:"version-0.3.1/smart-contracts/VaultAPI",isDocsHomePage:!1,title:"VaultAPI",description:"Functions",source:"@site/versioned_docs/version-0.3.1/smart-contracts/VaultAPI.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/VaultAPI",permalink:"/yearn-devdocs/v2/0.3.1/smart-contracts/VaultAPI",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.1/smart-contracts/VaultAPI.md",version:"0.3.1",frontMatter:{},sidebar:"version-0.3.1/mySidebar",previous:{title:"StrategyAPI",permalink:"/yearn-devdocs/v2/0.3.1/smart-contracts/StrategyAPI"},next:{title:"Registry.vy",permalink:"/yearn-devdocs/v2/0.3.1/smart-contracts/registry"}},s=[{value:"Functions",id:"functions",children:[{value:"apiVersion",id:"apiversion",children:[]},{value:"withdraw",id:"withdraw",children:[]},{value:"token",id:"token",children:[]},{value:"strategies",id:"strategies",children:[]},{value:"creditAvailable",id:"creditavailable",children:[]},{value:"debtOutstanding",id:"debtoutstanding",children:[]},{value:"expectedReturn",id:"expectedreturn",children:[]},{value:"report",id:"report",children:[]},{value:"revokeStrategy",id:"revokestrategy",children:[]},{value:"governance",id:"governance",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("h3",{id:"apiversion"},"apiVersion"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function apiVersion(\n  ) external returns (string)\n")),Object(i.b)("h3",{id:"withdraw"},"withdraw"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) external returns (uint256)\n")),Object(i.b)("h3",{id:"token"},"token"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function token(\n  ) external returns (address)\n")),Object(i.b)("h3",{id:"strategies"},"strategies"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function strategies(\n  ) external returns (struct StrategyParams)\n")),Object(i.b)("h3",{id:"creditavailable"},"creditAvailable"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function creditAvailable(\n  ) external returns (uint256)\n")),Object(i.b)("p",null,"View how much the Vault would increase this Strategy's borrow limit,\nbased on its present performance (since its last report). Can be used to\ndetermine expectedReturn in your Strategy."),Object(i.b)("h3",{id:"debtoutstanding"},"debtOutstanding"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function debtOutstanding(\n  ) external returns (uint256)\n")),Object(i.b)("p",null,"View how much the Vault would like to pull back from the Strategy,\nbased on its present performance (since its last report). Can be used to\ndetermine expectedReturn in your Strategy."),Object(i.b)("h3",{id:"expectedreturn"},"expectedReturn"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function expectedReturn(\n  ) external returns (uint256)\n")),Object(i.b)("p",null,"View how much the Vault expect this Strategy to return at the current\nblock, based on its present performance (since its last report). Can be\nused to determine expectedReturn in your Strategy."),Object(i.b)("h3",{id:"report"},"report"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function report(\n  ) external returns (uint256)\n")),Object(i.b)("p",null,"This is the main contact point where the Strategy interacts with the\nVault. It is critical that this call is handled as intended by the\nStrategy. Therefore, this function will be called by BaseStrategy to\nmake sure the integration is correct."),Object(i.b)("h3",{id:"revokestrategy"},"revokeStrategy"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function revokeStrategy(\n  ) external\n")),Object(i.b)("p",null,'This function should only be used in the scenario where the Strategy is\nbeing retired but no migration of the positions are possible, or in the\nextreme scenario that the Strategy needs to be put into "Emergency Exit"\nmode in order for it to exit as quickly as possible. The latter scenario\ncould be for any reason that is considered "critical" that the Strategy\nexits its position as fast as possible, such as a sudden change in\nmarket conditions leading to losses, or an imminent failure in an\nexternal dependency.'),Object(i.b)("h3",{id:"governance"},"governance"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-solidity"},"  function governance(\n  ) external returns (address)\n")),Object(i.b)("p",null,"View the governance address of the Vault to assert privileged functions\ncan only be called by governance. The Strategy serves the Vault, so it\nis subject to governance defined by the Vault."))}u.isMDXComponent=!0},243:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);