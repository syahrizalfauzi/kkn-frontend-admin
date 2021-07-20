import {number, required} from 'react-admin';

export const numberValidator = [number(), required()];
export const requiredValidator = [required()];