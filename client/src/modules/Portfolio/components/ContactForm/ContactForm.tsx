import React from 'react';
import * as Styled from './ContactForm.styles';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import ActionButton from '../ActionButton/ActionButton';
import { FiSend } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '../../../../shared/state/hooks';
import { selectSystemEmailStatus, sendEmail } from '../../../../shared/state/system/slice';
import { EmailStatus } from '../../../../shared/state/system/types';
import { FormInput, FormTextInput } from '../FormElements';
import AnimationSlide from '../AnimationSlide/AnimationSlide';

const messageSchema = z.object({
    name: z.string().min(1, 'Введите имя').max(100),
    email: z.string().min(1, 'Введите email').email('Недействительный адрес'),
    message: z.string().min(1, 'Введите сообщение').max(1000)
});
type MessageType = z.infer<typeof messageSchema>;

/**
 Contact form component for sending emails.
 @returns {JSX.Element} Contact form JSX element.
 */
const ContactForm: React.FC = () => {
    const emailStatus = useAppSelector(selectSystemEmailStatus);
    const dispatch = useAppDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<MessageType>({
        resolver: zodResolver(messageSchema)
    });

    const onSubmit = (data: MessageType) => {
        if (emailStatus === EmailStatus.PREPARING) {
            console.log('fuc2');
            dispatch(sendEmail({
                formData: data
            }));
        }
    };

    return (
        <AnimationSlide>
            <Styled.FormStyled
                data-testid='contact-form'
                onSubmit={handleSubmit(onSubmit)}
            >
                <Styled.InputWrapper>
                    <FormInput
                        id={'name'}
                        type={'text'}
                        {...register('name')}
                        error={errors.name?.message}
                        label='Имя'
                    />
                    <FormInput
                        id={'email'}
                        type={'email'}
                        {...register('email')}
                        error={errors.email?.message}
                        label='Email'
                    />
                </Styled.InputWrapper>
                <FormTextInput
                    id={'message'}
                    {...register('message')}
                    error={errors.message?.message}
                    label='Сообщение'
                />
                <ActionButton
                    buttonText={emailStatus}
                    icon={<FiSend className={'action-icon'} />}
                    isLoading={emailStatus === EmailStatus.SENDING}
                    disabled={emailStatus === EmailStatus.SENT}
                    type='submit'
                />
            </Styled.FormStyled>
        </AnimationSlide>
    );
};

export default ContactForm;
