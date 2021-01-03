import {gql} from '@apollo/client'

export const DELETE_ITEM = gql`
    mutation deleteItem($id: ID!) {
        deleteItem(id: $id)
    }
`

export const GET_HISTORY = gql`
    query getHistory {
        getHistory {
            responseTime
            request {
                number
                word
            }
            response {
                count
                square
            }
            action
            requestId
        }
    }
`

export const SEND_DATA = gql`
    mutation SendData($request: IRequestInput!) {
        sendData(request: $request) {
            count
            square
        }
    }
`

