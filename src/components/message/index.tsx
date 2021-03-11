import React from 'react';
import event from '@/utils/event';
import './index.scss';
import { MessageIProps, MessageObj } from '@/interface/message';

const message: MessageObj = {

    /**
     * success message
     * @param props
     */
    success: (props: MessageIProps) => event.init({icon: 'roundcheck', ...props}),

    /**
     * error message
     * @param props
     */
    error: (props: MessageIProps) => event.init({icon: 'roundclose', ...props}),

    /**
     * waning message
     * @param props
     */
    waning: (props: MessageIProps) => event.init({icon: 'warn', ...props}),

    /**
     * info message
     * @param props
     */
    info: (props: MessageIProps) => event.init(props),

    /**
     * show loading
     * @param props
     */
    showLoading: (props: MessageIProps) => event.init({...props, type: 'showLoading'}),

    /**
     * hide loading
     */
    hideLoading: () => event.init({type: 'hideLoading'})

};

export default message;
