import React, { Component } from 'react'

export default class Wallet extends Component {
  render() {
    return (
      <div>
  <div class="container mx-auto p-4">
    <div class="bg-white rounded-lg shadow p-4 mb-4">
      <h1 class="text-2xl font-semibold text-gray-700">My Crypto Wallet</h1>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-4">
      <h2 class="text-xl font-semibold text-gray-700">Balance</h2>
      <div class="text-3xl text-green-500 font-bold">$1234.56</div>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-4">
      <h2 class="text-xl font-semibold text-gray-700 mb-2">Transaction History</h2>
      <ul>
        <li class="flex justify-between items-center py-2 border-b">
          <span>Received BTC</span>
          <span class="text-green-500">+0.5 BTC</span>
        </li>
        <li class="flex justify-between items-center py-2 border-b">
          <span>Sent ETH</span>
          <span class="text-red-500">-0.2 ETH</span>
        </li>
        <li class="flex justify-between items-center py-2">
          <span>Received LTC</span>
          <span class="text-green-500">+1.0 LTC</span>
        </li>
      </ul>
    </div>

    <div class="bg-white rounded-lg shadow p-4 mb-4">
      <h2 class="text-xl font-semibold text-gray-700 mb-2">Send/Receive</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 class="text-lg font-semibold text-gray-600 mb-2">Send Crypto</h3>
          <form>
            <div class="mb-4">
              <label class="block text-gray-700">Recipient Address</label>
              <input type="text" class="w-full border rounded px-3 py-2 mt-1 text-gray-700" placeholder="Enter address"/>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700">Amount</label>
              <input type="number" class="w-full border rounded px-3 py-2 mt-1 text-gray-700" placeholder="Enter amount"
              />
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send</button>
          </form>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-600 mb-2">Receive Crypto</h3>
          <form>
            <div class="mb-4">
              <label class="block text-gray-700">Your Address</label>
              <input type="text" class="w-full border rounded px-3 py-2 mt-1 text-gray-700" value="your-wallet-address" readonly/>
            </div>
            <button type="button" class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Copy Address</button>
          </form>
        </div>
      </div>
    </div>
  </div>

      </div>
    )
  }
}
