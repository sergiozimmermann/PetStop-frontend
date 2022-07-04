/* eslint-disable */
import * as moment from 'moment';

export const notifications = [
    {
        id         : '493190c9-5b61-4912-afe5-78c21f1044d7',
        icon       : 'heroicons_solid:star',
        title      : 'Bem Vindo!',
        description: 'Seja muito bem vindo ao PetStop.',
        time       : moment().subtract(25, 'minutes').toISOString(), // 25 minutes ago
        read       : false
    }
];
