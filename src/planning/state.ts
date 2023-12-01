// We need to create a small state machine to handle the different states of the DataFrame code execution.
// This is a very simple state machine with only 3 states: idle, running, and done.

// 
type StateList = {
  id: string,
  name: string,
  description: string,
  configs: {
    [key: string]: any;
  },
  execFunction: Function,
}


class State {
    private state: string = "idle";
    private stateChangeListeners: Function[] = [];
    private stateExecKiller: Function | null = null;
    private stateLists: StateList[] | [] = []

    constructor() {}

    public getCurrentState(): string {
        return this.state;
    }

    public setState(newState: string): void {
        this.state = newState;
        this.stateChangeListeners.forEach((listener: Function) => {
            listener(newState);
        });
    }

    public addStateChangeListener(listener: Function): void {
        this.stateChangeListeners.push(listener);
    }
}