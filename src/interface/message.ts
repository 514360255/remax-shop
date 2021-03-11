
export interface MessageIProps {
    content?: string;
    duration?: number;
    icon?: string;
    onClose?: string;
    color?: string;
    type?: 'success' | 'error' | 'waning' | 'info' | 'showLoading' | 'hideLoading';
    eType?: string;
}

export interface MessageLoadingType {
    type?: 'anna' | 'wave' | 'default';
}

export interface MessageObj {
    success: (data: MessageIProps) => void;
    error: (data: MessageIProps) => void;
    waning: (data: MessageIProps) => void;
    info: (data: MessageIProps) => void;
    showLoading: (data: MessageIProps) => void;
    hideLoading: () => void;
}
