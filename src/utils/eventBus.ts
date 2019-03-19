interface Listeners {
  [type: string]: ((...args: any) => any)[];
}

class EventEmitter {
  public listeners: Listeners = {};

  public on(type: string, callback: (...args: any) => any): () => void {
    const callbackArray = this.listeners[type] || [];
    callbackArray.push(callback);
    this.listeners[type] = callbackArray;
    return () => {
      this.remove(type);
    };
  }

  public emit(type: string, ...args: any): void {
    const callbackArray = this.listeners[type];
    if (Array.isArray(callbackArray)) {
      for (let i = 0; i < callbackArray.length; i++) {
        const callback = callbackArray[i];
        if (typeof callback === 'function') {
          callback(...args);
        }
      }
    }
  }

  public remove(type: string): void {
    if (this.listeners[type]) delete this.listeners[type];
  }
}

export default new EventEmitter();
