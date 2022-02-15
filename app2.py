from web3 import Web3
ganache_url = "HTTP://127.0.0.1:7545"
web3 = Web3(Web3.HTTPProvider(ganache_url))
# print(web3.eth.blockNumber)
# print(web3.eth.accounts)
# # print(web3.eth.syncing)

# account1 = "0x6F40aaE90a43F0b1F97c38042CEe5BA96603E4B9"
# account2 = "0x4810180b93E824E28f168772847B52bb8fE7f880"

# private_key = "a852eeab056d0d124c55d7702a0c05bc9dcd280d385a43731b4cfa90082b3bab"

# # get nonce
# nonce = web3.eth.getTransactionCount(account1)
# # build transaction
# txn = {
#     'nonce': nonce,
#     'gas': 2000000,
#     'gasPrice': web3.toWei('50', 'gwei'),
#     'to': account2,
#     'value': web3.toWei(1, 'ether'),

# }
# # sign transaction
# signed_txn = web3.eth.account.signTransaction(txn, private_key)
# # send transaction
# txn_hash = web3.eth.sendRawTransaction(signed_txn.rawTransaction)
# # get transaction hash
# print(web3.toHex(txn_hash))

# module 3
print(web3.eth.accounts)

for i in web3.eth.accounts.__len__:
    print(web3.eth.getBlock(i))
