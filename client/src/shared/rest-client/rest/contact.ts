import { AxiosResponse } from 'axios';
import { makeRequest } from '../makeRequest';
import { ContactFormData } from '../../state/system/types';

/**
 *@api will make POST request to /contact, thereby sending email
 *@function sendEmail
 *@returns {object} - promise with success status
 */
export const sendEmailWithApi = (
    contactFormData: ContactFormData
): Promise<AxiosResponse<{ success: boolean }>> => {
    return makeRequest({
        url: '/api/send-email',
        method: 'POST',
        data: contactFormData,
        headers: { 'Content-Type': 'application/json' }
    });
};
