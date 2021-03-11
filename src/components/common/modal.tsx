import React, {ReactNode} from 'react';
import { Modal } from "remax/one";

const BaseModal = (component: ReactNode) => {
    return <Modal children={component} />
}

export default BaseModal;
