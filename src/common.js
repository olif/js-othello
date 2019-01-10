const events = {
  STATE_CHANGED: 'state-changed',
  OPPONENT_CONNECTED: 'opponent-connected',
  OPPONENT_DISCONNECTED: 'opponent-disconnected',
  CHAT_MESSAGE: 'chat-message',
  REMATCH_REQUESTED: 'rematch requested',
  REMATCH_ACCEPTED: 'rematch accepted'
}

const opponentStatus = {
  NOT_CONNECTED: 'not connected',
  CONNECTED: 'connected',
  DISCONNECTED: 'disconnected'
}

const gameStatus = {
  STATUS_FINISHED: 'finished',
  STATUS_PENDING: 'pending',
  STATUS_WAITING_FOR_OPPONENT: 'waiting for opponent',
  STATUS_REMATCH_REQUESTED: 'rematch requested',
  STATUS_AWAIT_REMATCH_RESPONSE: 'await rematch response'
}

module.exports.events = events
module.exports.opponentStatus = opponentStatus
module.exports.gameStatus = gameStatus
