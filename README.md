# node-red-contrib-brain-js

[![npm version](https://badge.fury.io/js/node-red-contrib-brain-js.svg)](https://badge.fury.io/js/node-red-contrib-brain-js)

This node provides neural networks.
It is based on [brain.js](https://github.com/harthur-org/brain.js)

### Install

From your node-red directory:

npm install node-red-contrib-brain-js

or

in the Node-red, Manage palette, Install node-red-contrib-brain-js

### Usage

This node provides neural networks.<br>
At first you need to see the [brain.js](https://github.com/harthur-org/brain.js) documentation<p>

The following neural networks are available :<p>

- 0: [`brain.NeuralNetwork`](src/neural-network.js) - [Feedforward Neural Network](https://en.wikipedia.org/wiki/Feedforward_neural_network) with backpropagation

- 1: [`brain.recurrent.RNNTimeStep`](src/recurrent/rnn-time-step.js) - [Time Step Recurrent Neural Network or "RNN"](https://en.wikipedia.org/wiki/Recurrent_neural_network)
- 2: [`brain.recurrent.LSTMTimeStep`](src/recurrent/lstm-time-step.js) - [Time Step Long Short Term Memory Neural Network or "LSTM"](https://en.wikipedia.org/wiki/Long_short-term_memory)
- 3: [`brain.recurrent.GRUTimeStep`](src/recurrent/gru-time-step.js) - [Time Step Gated Recurrent Unit or "GRU"](https://en.wikipedia.org/wiki/Gated_recurrent_unit)
- 4: [`brain.recurrent.RNN`](src/recurrent/rnn.js) - [Recurrent Neural Network or "RNN"](https://en.wikipedia.org/wiki/Recurrent_neural_network)
- 5: [`brain.recurrent.LSTM`](src/recurrent/lstm.js) - [Long Short Term Memory Neural Network or "LSTM"](https://en.wikipedia.org/wiki/Long_short-term_memory)
- 6: [`brain.recurrent.GRU`](src/recurrent/gru.js) - [Gated Recurrent Unit or "GRU"](https://en.wikipedia.org/wiki/Gated_recurrent_unit)

### Training

The training data need to be stored in **msg.trainData** and the format is described [here](https://github.com/harthur-org/brain.js#training).<br>
The network options can be provided in **msg.neuralNetworkOptions**.

When the training is done, the network is available in **msg.net** and can be stored to be imported next time.

### Run

The running data need to be stored in **msg.runData**.<p>

The result is available in **msg.decision**.

### Import network

When the input message contains **msg.netJSON**, the network is loaded from the JSON provided.

### License

MIT License

### Credits

This is fork of the [fchanson/node-red-contrib-neuralnet](https://github.com/fchanson/node-red-contrib-neuralnet), all credits to the original author.
