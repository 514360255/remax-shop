import React, { useEffect, useState } from 'react';
import Message from './message';
import event from '@/utils/event';
import { MessageIProps } from '@/interface/message';

export const MessageContainer = () => {
    const [initNotice, setNotice] = useState<MessageIProps | undefined>(undefined);

    const handleClose = (data: MessageIProps) => {
        setNotice({...data, eType: 'off'});
        setTimeout(() => {
            setNotice(undefined);
        }, 400)
    }

    useEffect(() => {
        event.on((data: MessageIProps) => {
            const { duration = 2000, type } = data || {};
            setNotice({...data, eType: 'on'});
            if(type !== 'showLoading' && type !== 'hideLoading') {
                setTimeout(() => {
                    handleClose(data);
                }, duration)
            }else {
                type === 'hideLoading' && handleClose(data);
            }
        });
    }, [])

    return initNotice ? <Message {...initNotice} /> : null
}
