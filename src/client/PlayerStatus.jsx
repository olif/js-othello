import React from 'react'
import styled from 'styled-components'

const common = require('../common.js')

const StatusLight = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 1em;
    background-color: #ccc;
    display: inline-block;
`

const Connected = styled(StatusLight)`
    background-color: #00ff00;
`

const Disconnected = styled(StatusLight)`
    background-color: #ff0000;
`

const StatusArea = styled.div`
    display: block;
    padding: 1em;
    background-color: #eee;
    border-radius: 3px;
    > p {
        margin: 0;
    }
`

const PlayerStatus = ({ item: { opponentStatus } }) => {
  const getStatusElement = function () {
    switch (opponentStatus) {
      case common.opponentStatus.NOT_CONNECTED:
        return <p><StatusLight /> No opponent yet</p>
      case common.opponentStatus.CONNECTED:
        return <p><Connected /> Opponent is connected</p>
      case common.opponentStatus.DISCONNECTED:
        return <p><Disconnected /> Opponent has disconnected</p>
    }
  }

  return (
    <StatusArea>
      {getStatusElement()}
    </StatusArea>
  )
}

export default PlayerStatus
