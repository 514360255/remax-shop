import { MessageIProps } from "@/interface/message";

class EventEmit {
    private trigger: Function = () => {};

    public init(data: MessageIProps) {
        setTimeout(() => {
            this.trigger(data);
        });
    }

    public on(callback: Function) {
        this.trigger = callback;
    }
}

export default new EventEmit();
