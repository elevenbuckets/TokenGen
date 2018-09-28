pragma solidity ^0.4.15;

import "./SafeMath.sol";
import "./StandardToken.sol";

contract TradeTokenF is StandardToken {
        string public name = "Rinkeby Trade Token F";
        string public symbol = "RTKF";
        uint public decimals = 18;

	// constructor
	function TradeTokenF() {
                balances[0xaF7400787c54422Be8B44154B1273661f1259CcD] = uint(9000000).mul(uint(10**decimals));
		balances[0xB440ea2780614b3c6a00e512f432785E7dfAFA3E] = uint(9000000).mul(uint(10**decimals));
	}
}

