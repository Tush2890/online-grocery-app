import { ITEM_ADDED, ITEM_REMOVED } from "../../utils/constants"


const initialState = {
    count: 0
}

interface Action {
    type: string
}

export default function cartReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ITEM_ADDED: {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case ITEM_REMOVED: {
            return {
                ...state,
                count: state.count - 1
            }
        }
        default:
            return state
    }
}
