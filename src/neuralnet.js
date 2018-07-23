const brain = require('brain.js')

module.exports = RED => {
  function Brain(config) {
    RED.nodes.createNode(this, config)
    this.options = config
    this.nntype = config.nntype
    const node = this

    node.status({
      fill: 'grey',
      shape: 'dot',
      text: 'waiting',
    })

    switch (this.nntype) {
      case 1:
        node.net = new brain.RNNTimeStep()
        break
      case 2:
        node.net = new brain.recurrent.LSTMTimeStep()
        break
      case 3:
        node.net = new brain.recurrent.GRUTimeStep()
        break
      case 4:
        node.net = new brain.recurrent.RNN()
        break
      case 5:
        node.net = new brain.recurrent.LSTM()
        break
      case 6:
        node.net = new brain.recurrent.GRU()
        break
      case 0:
      default:
        node.net = new brain.NeuralNetwork()
        break
    }

    const netLog = (iterationsStr, iter, errorStr, error) => {
      const m = {
        neuralnetLog: {
          iterations: iter,
          error,
        },
      }

      node.log(`${iterationsStr} ${iter} ${errorStr} ${error}`)
      node.send(m)
    }

    this.on('input', msg => {
      if (msg.neuralNetworkOptions && msg.trainData) {
        this.options = msg.neuralNetworkOptions
      }

      if (this.options.log) {
        this.options.log = netLog
      }

      if (msg.netJSON) {
        node.net.fromJSON(msg.netJSON)
      }

      if (msg.runData) {
        msg.decision = node.net.run(msg.runData)

        node.status({
          fill: 'green',
          shape: 'dot',
          text: 'running done',
        })

        node.send(msg)
      } else if (msg.trainData) {
        node.status({
          fill: 'yellow',
          shape: 'dot',
          text: 'training',
        })

        const res = node.net.train(msg.trainData, this.options)

        node.status({
          fill: 'green',
          shape: 'dot',
          text: 'trainning done',
        })

        msg.net = node.net.toJSON()
        msg.result = res

        node.send(msg)
      }
    })
  }

  RED.nodes.registerType('neuralnet', Brain)
}
