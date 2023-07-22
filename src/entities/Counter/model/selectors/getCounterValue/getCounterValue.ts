import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

export const getCounterValue = createSelector(getCounter, (counter:CounterSchema) => counter.value);
//  здесь реселект использовать необязательно, потому что никаких вычислений внутри не проводим
