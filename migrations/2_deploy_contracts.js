var SafeMath     = artifacts.require("./SafeMath.sol");
var TradeTokenA  = artifacts.require("./TradeTokenA.sol");
var TradeTokenB  = artifacts.require("./TradeTokenB.sol");
var TradeTokenC  = artifacts.require("./TradeTokenC.sol");
var TradeTokenD  = artifacts.require("./TradeTokenD.sol");
var TradeTokenE  = artifacts.require("./TradeTokenE.sol");
var TradeTokenF  = artifacts.require("./TradeTokenF.sol");
var TradeTokenG  = artifacts.require("./TradeTokenG.sol");
var TradeTokenH  = artifacts.require("./TradeTokenH.sol");
var TradeTokenI  = artifacts.require("./TradeTokenI.sol");
var TradeTokenJ  = artifacts.require("./TradeTokenJ.sol");
var TradeTokenK  = artifacts.require("./TradeTokenK.sol");
var TradeTokenL  = artifacts.require("./TradeTokenL.sol");
var TradeTokenM  = artifacts.require("./TradeTokenM.sol");
var TradeTokenN  = artifacts.require("./TradeTokenN.sol");
var TradeTokenO  = artifacts.require("./TradeTokenO.sol");
var TradeTokenP  = artifacts.require("./TradeTokenP.sol");
var TradeTokenQ  = artifacts.require("./TradeTokenQ.sol");
var TradeTokenR  = artifacts.require("./TradeTokenR.sol");
var TradeTokenS  = artifacts.require("./TradeTokenS.sol");
var TradeTokenU  = artifacts.require("./TradeTokenU.sol");
var ERC20        = artifacts.require("./ERC20.sol");
var StandardToken = artifacts.require("./StandardToken.sol");
const fs = require('fs');

module.exports = function(deployer) {
	deployer.deploy(SafeMath).then(() => {
  		deployer.link(SafeMath, StandardToken);
		deployer.link(SafeMath, TradeTokenA);
		deployer.link(SafeMath, TradeTokenB);
		deployer.link(SafeMath, TradeTokenC);
		deployer.link(SafeMath, TradeTokenD);
		deployer.link(SafeMath, TradeTokenE);
		deployer.link(SafeMath, TradeTokenF);
		deployer.link(SafeMath, TradeTokenG);
		deployer.link(SafeMath, TradeTokenH);
		deployer.link(SafeMath, TradeTokenI);
		deployer.link(SafeMath, TradeTokenJ);
		deployer.link(SafeMath, TradeTokenK);
		deployer.link(SafeMath, TradeTokenL);
		deployer.link(SafeMath, TradeTokenM);
		deployer.link(SafeMath, TradeTokenN);
		deployer.link(SafeMath, TradeTokenO);
		deployer.link(SafeMath, TradeTokenP);
		deployer.link(SafeMath, TradeTokenQ);
		deployer.link(SafeMath, TradeTokenR);
		deployer.link(SafeMath, TradeTokenS);
		deployer.link(SafeMath, TradeTokenU);
	}).then(() => {
		return deployer.deploy(StandardToken);
	}).then(() => {
	  	deployer.link(StandardToken, TradeTokenA);
	  	deployer.link(StandardToken, TradeTokenB);
	  	deployer.link(StandardToken, TradeTokenC);
	  	deployer.link(StandardToken, TradeTokenD);
	  	deployer.link(StandardToken, TradeTokenE);
	  	deployer.link(StandardToken, TradeTokenF);
	  	deployer.link(StandardToken, TradeTokenG);
	  	deployer.link(StandardToken, TradeTokenH);
	  	deployer.link(StandardToken, TradeTokenI);
	  	deployer.link(StandardToken, TradeTokenJ);
	  	deployer.link(StandardToken, TradeTokenK);
	  	deployer.link(StandardToken, TradeTokenL);
	  	deployer.link(StandardToken, TradeTokenM);
	  	deployer.link(StandardToken, TradeTokenN);
	  	deployer.link(StandardToken, TradeTokenO);
 	 	deployer.link(StandardToken, TradeTokenP);
	  	deployer.link(StandardToken, TradeTokenQ);
	  	deployer.link(StandardToken, TradeTokenR);
  		deployer.link(StandardToken, TradeTokenS);
  		deployer.link(StandardToken, TradeTokenU);
	}).then(() => {
		let configs = {};
	
		let TokenList = [
			TradeTokenA,
		        TradeTokenB,
			TradeTokenC, 
			TradeTokenD, 
			TradeTokenE, 
			TradeTokenF, 
			TradeTokenG, 
			TradeTokenH, 
			TradeTokenI, 
			TradeTokenJ, 
			TradeTokenK, 
			TradeTokenL, 
			TradeTokenM,
			TradeTokenN, 
	       		TradeTokenO,	
			TradeTokenP, 
			TradeTokenQ, 
			TradeTokenR, 
			TradeTokenS, 
			TradeTokenU
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
						D[data[1]] = {name: data[0], decimals: data[2], addr: data[3].address};
						return D;
					});
				})
			});
	
			stage = stage.then((D) => {
				return JSON.stringify(D,0,2);
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
	
		/*
		deployer.deploy(TradeTokenA);
		deployer.deploy(TradeTokenB);
		deployer.deploy(TradeTokenC);
		deployer.deploy(TradeTokenD);
		deployer.deploy(TradeTokenE);
		deployer.deploy(TradeTokenF);
		deployer.deploy(TradeTokenG);
		deployer.deploy(TradeTokenH);
		deployer.deploy(TradeTokenI);
		deployer.deploy(TradeTokenJ);
		deployer.deploy(TradeTokenK);
		deployer.deploy(TradeTokenL);
		deployer.deploy(TradeTokenM);
		deployer.deploy(TradeTokenN);
		deployer.deploy(TradeTokenO);
		deployer.deploy(TradeTokenP);
		deployer.deploy(TradeTokenQ);
		deployer.deploy(TradeTokenR);
		deployer.deploy(TradeTokenS);
		deployer.deploy(TradeTokenU);
		*/
	})
};
