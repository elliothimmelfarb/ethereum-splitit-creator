function initiateDeploy() {
  console.log(interface.getAddresses())
}

// console.log({Web3})
//
// if (typeof web3 !== 'undefined') {
//   web3 = new Web3(web3.currentProvider);
// } else {
//   // set the provider you want from Web3.providers
//   web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// }
//
// var contractCode
//
// web3.eth.getAccounts((error, result) => {
//
// 	if (!error) {
// 		web3.eth.defaultAccount = result[0]
// 	}
//
// 	console.log(error || result)
//
// })
//
// function createContractCode() {
//
// 	var addressesString = document.getElementById("addresses").value
//
// 	var addresses = addressesString.split(",").map(a => a.trim())
//
// 	contractCode = `
//
//   pragma solidity ^0.4.4;
//
//   contract SplitIt {
//
//       address[] employees = [${addresses.join(", ") }];
//       uint totalReceived;
//       mapping (address => uint) withdrawnAmounts;
//
//       function SplitIt() payable public {
//           updateTotalReceived();
//       }
//
//       function () payable public {
//           updateTotalReceived();
//       }
//
//       function updateTotalReceived() internal {
//           totalReceived = msg.value;
//       }
//
//       modifier canWithdraw() {
//
//           bool contains = false;
//
//           for(uint i = 0; i < employees.length; i) {
//               if (employees[i] == msg.sender) {
//                   contains = true;
//               }
//           }
//
//           require(contains);
//           _;
//
//       }
//
//       function withdraw() canWithdraw public {
//
//           uint amountAllocated = totalReceived/employees.length;
//           uint amountWithdrawn = withdrawnAmounts[msg.sender];
//           uint amount = amountAllocated - amountWithdrawn;
//           withdrawnAmounts[msg.sender] = amountWithdrawn  amount;
//
//           if (amount > 0) {
//              msg.sender.transfer(amount);
//           }
//
//       }
//   }`
//
//   document.getElementById("codePreviewParagraph").innerHTML = contractCode
//
// }
//
// function publishContract() {
//
// 	web3.eth.compile.solidity(contractCode, (error, compiled) => {
//
// 		console.log(error || compiled[":SplitIt"])
//
// 		web3.eth.sendTransaction({data:compiled[":SplitIt"].bytecode}, (error, transactionHash) => {
//
// 			console.log(error || transactionHash)
//
// 			if (!error) {
//
// 				var statusDisplay = document.getElementById("transactionObjectParagraph")
// 				statusDisplay.innerHTML = "Pending"
// 				var checkInterval = window.setInterval(() => {
//
// 					web3.eth.getTransaction(transactionHash, (error, transaction) => {
//
// 						console.log(error || transaction)
// 						statusDisplay.innerHTML = statusDisplay.innerHTML  "."
//
// 						if (!error && transaction.blockNumber) {
//
// 							web3.eth.getTransactionReceipt(transactionHash, (error, receipt) => {
//
// 								console.log(error || receipt)
//
// 								statusDisplay.innerHTML = receipt.contractAddress
// 								clearInterval(checkInterval)
//
// 							})
//
// 						} else if (error) {
//
// 							clearInterval(checkInterval)
//
// 						}
//
// 					})
//
// 				}, 5000)
//
// 			}
//
// 		})
//
// 	})
//
// }
