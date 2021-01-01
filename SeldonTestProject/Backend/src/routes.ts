import {Router} from 'express';
import {IDeleteRequest, IHistory, IRequest, IResponse} from "./Models";
import uniqId from 'uniqid';
import {body, validationResult} from 'express-validator';
import {random} from "./utils";

export const router = Router();

let history: IHistory[] = [];

router.get('/history', (req, res) => {
        res.send(JSON.stringify(history));
    }
)

router.delete('/history', (req, res) => {
        const body: IDeleteRequest = req.body;
        history = history.filter(historyElem => historyElem.requestId !== body.requestId);
        res.send({result: 'deleted!'});
    }
)

router.post('/converter',
    body('word').notEmpty({ignore_whitespace: true}).custom(value => isNaN(Number(value))),
    body('number').notEmpty({ignore_whitespace: true}).custom(value => !isNaN(Number(value))),
    (req, res) => {
        const delay: number = random(500, 2000)

        if (random(0, 100) > 35) {
            setTimeout(() => {
                res.status(500).send({error: 'You are unlucky!'});
            }, delay)
            return;
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            setTimeout(() => {
                res.status(400).json({errors: errors.array()});
            }, delay)
            return;
        }
        const body: IRequest = req.body;
        const response: IResponse = {
            count: body.word.length,
            square: parseInt(body.number) ** 2,
        }
        history.push({
            action: 'post',
            response,
            request: body,
            requestId: uniqId(),
            responseTime: delay
        })
        setTimeout(() => {
            res.send(JSON.stringify(response));
        }, delay)
    }
)
