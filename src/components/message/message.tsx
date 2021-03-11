import React, {useEffect, useState} from 'react'
import {Icon} from 'annar';
import {MessageIProps} from "@/interface/message";

const Message: React.FC<MessageIProps> = (props: MessageIProps) => {
    const {content, icon, color = '#FFF', eType} = props;
    const [initShow, setShow] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setShow(eType === 'on' && true);
        }, 50)
    }, [])

    return (
        <div className={`g-message ${initShow && eType === 'on' ? 'g-message-fade-in' : 'g-message-fade-out'}`}>
            <div className="g-message-content">
                {icon ? (
                    <div className="g-icon">
                        <Icon type={icon} color={color} size={40}/>
                    </div>
                ) : null}
                <div className="g-text">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Message;
