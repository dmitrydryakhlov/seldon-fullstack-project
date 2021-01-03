import {IRequest} from "./Models";

export const random = (min: number, max: number): number => min + Math.random() * (max - min);

export const isEmpty = (str: string): boolean => str.trim() === '';

export const validateData = (request: IRequest): Error => {
    const Errors: string[] = [];

    (/[^A-Za-zА-Яа-яёЁ]/).test(request.word) && Errors.push(`key: word, reason: "${request.word}" contains not a letter `);
    isNaN(Number(request.number)) && Errors.push(`key: number, reason: "${request.number}" not a number`);
    isEmpty(request.word) && Errors.push("key: word, reason: empty");
    isEmpty(request.number) && Errors.push("key: number, reason: empty");

    return Errors.length ? new Error(Errors.join(', ')) : null;
}