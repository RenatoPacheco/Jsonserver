import guid from 'guid';
import { dateNow } from '../helper/dateNow';

export interface IErrorMessage {
    id: guid,
    message: string,
    reference: string,
    date: string
}

export function errorMessage(message: string, reference: string = null): IErrorMessage {
    return {
        id: guid.create(),
        message: message,
        reference: reference,
        date: dateNow()
    }
}