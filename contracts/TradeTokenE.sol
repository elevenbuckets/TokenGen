pragma solidity ^0.4.15;

import "./SafeMath.sol";
import "./StandardToken.sol";

contract TradeTokenE is StandardToken {
        string public name = "Trade Token E";
        string public symbol = "TKE";
        uint public decimals = 18;

	// constructor
	function TradeTokenE() {
                balances[0x9Bd699c08607d0a9914C923917b86fEb9745163d] = uint(9000000).mul(uint(10**decimals));
		balances[0xD0Edda5bcc34d27781AdA7C97965a4fF4Ac5530a] = uint(9000000).mul(uint(10**decimals));
	}
}

