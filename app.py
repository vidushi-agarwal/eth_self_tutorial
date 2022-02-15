from web3 import Web3
from web3.middleware import geth_poa_middleware
from web3.auto import w3
from eth_account.messages import encode_defunct

infura_url = "https://goerli.infura.io/v3/b8cdccd184624e938022708762b2c119"
web3 = Web3(Web3.HTTPProvider(infura_url))

test_address = "0x769d869E29566Aaaaa14eA28bef7b735df7Fef75"

print("isConnected:", web3.isConnected())

balance = web3.eth.get_balance(test_address)
print("balance", web3.fromWei(balance, "ether"))

web3.eth.get_block('latest')


msg = "gEth is Money"
private_key = "318623538b847cb43d35145eac0014efaf7a5f09df220c05c6d5b3548539d30b"
message = encode_defunct(text=msg)
signed_message = w3.eth.account.sign_message(message, private_key=private_key)
print(signed_message)


# print(web3.eth.syncing)
