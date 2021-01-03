import {IDeleteRequest, IHistory, IResponse} from "./Models";
import {random, validateData} from "./utils";
import uniqId from "uniqid";

let history: IHistory[] = [];

export const rootResolvers = {
    getHistory: (): IHistory[] => history,
    deleteItem: (params: IDeleteRequest) => {
        history = history.filter(historyElem => historyElem.requestId !== params.id);
        return true;
    },
    sendData: ({request}): Promise<IResponse | Error> => {
        const delay: number = random(500, 2000);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (random(0, 100) > 35) {
                    reject(new Error('You are unlucky!'));
                } else {
                    const validationError: Error = validateData(request);
                    if (validationError) {
                        reject(validationError)
                    } else {
                        const response: IResponse = {
                            count: request.word.length,
                            square: String(parseInt(request.number, 0) ** 2),
                        }
                        history.unshift({
                            action: 'post',
                            response,
                            request,
                            requestId: uniqId(),
                            responseTime: delay
                        })
                        resolve(response)
                    }
                }
            }, delay)
        })
    }
}