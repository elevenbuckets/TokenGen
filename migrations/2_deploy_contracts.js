var SafeMath = artifacts.require("./SafeMath.sol");
var TradeTokenA = artifacts.require("./TradeTokenA.sol");
var TradeTokenB = artifacts.require("./TradeTokenB.sol");
var TradeTokenC = artifacts.require("./TradeTokenC.sol");
var TradeTokenD = artifacts.require("./TradeTokenD.sol");
var TradeTokenE = artifacts.require("./TradeTokenE.sol");
var TradeTokenF = artifacts.require("./TradeTokenF.sol");
var ERC20 = artifacts.require("./ERC20.sol");
var StandardToken = artifacts.require("./StandardToken.sol");
const fs = require('fs');

module.exports = function (deployer) {
	deployer.deploy(SafeMath).then(() => {
		deployer.link(SafeMath, StandardToken);
		deployer.link(SafeMath, TradeTokenA);
		deployer.link(SafeMath, TradeTokenB);
		deployer.link(SafeMath, TradeTokenC);
		deployer.link(SafeMath, TradeTokenD);
		deployer.link(SafeMath, TradeTokenE);
		deployer.link(SafeMath, TradeTokenF);
	}).then(() => {
		return deployer.deploy(StandardToken);
	}).then(() => {
		deployer.link(StandardToken, TradeTokenA);
		deployer.link(StandardToken, TradeTokenB);
		deployer.link(StandardToken, TradeTokenC);
		deployer.link(StandardToken, TradeTokenD);
		deployer.link(StandardToken, TradeTokenE);
		deployer.link(StandardToken, TradeTokenF);
	}).then(() => {
		let configs = {};

		let TokenList = [
			TradeTokenA,
			TradeTokenB,
			TradeTokenC,
			TradeTokenD,
			TradeTokenE,
			TradeTokenF,
		];

		const deployNote = (TokenList) => {
			let D = {};
			let stage = Promise.resolve(D);

			TokenList.forEach((Token) => {
				stage = stage.then((D) => {
					return deployer.deploy(Token)
						.then(() => {
							let T = Token.at(Token.address);
							return Promise.all([T.name(), T.symbol(), T.decimals(), Promise.resolve(T)]);
						}).then((data) => {
							D[data[1]] = { name: data[0], decimals: parseInt(data[2]), addr: data[3].address };
							return D;
						});
				})
			});

			stage = stage.then((D) => {
				D.ETH = {
					addr: "0x0000000000000000000000000000000000000000",
					name: "ETH",
					decimals: parseInt(18)
				};
				return JSON.stringify(D, 0, 2);
			});

			return stage;
		}

		deployNote(TokenList).then((out) => {
			try {
				fs.unlinkSync('./Tokens.json');
			} catch (err) {
				true;
			}

			console.log(out);

			fs.writeFileSync('./Tokens.json', out);
		})
	})
};
