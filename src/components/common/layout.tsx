import React from 'react';
import { MessageContainer } from '@/components/message/messageContainer';
import { Modal } from 'remax/one';
import { usePageInstance } from 'remax'

const Layout: React.FC = ({children}) => {
    console.log(usePageInstance())
    return (
        <>
            <Modal children={<MessageContainer />} />
            {children}
        </>
    )
}

export default Layout;
