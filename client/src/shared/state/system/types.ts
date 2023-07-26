export enum EmailStatus {
    PREPARING = 'Отправить',
    SENDING = 'Отправляется',
    SENT = 'Отправлено 👍',
    SEND_ERROR = 'Ошибка'
}

export interface SystemState {
    toShowIntro: boolean;
    isIFrame: boolean;
    isShutdown: boolean;
    shutdownCount: number;
    volume: number;
    emailStatus: EmailStatus;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

