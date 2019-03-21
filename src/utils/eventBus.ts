class EventEmitter {
  public listeners = new Map();

  public on(type: any, callback: (...args: any) => any): () => void {
    const callbackArray = this.listeners.get(type) || [];
    callbackArray.push(callback);
    this.listeners.set(type, callbackArray);
    return () => {
      this.remove(type);
    };
  }

  public emit(type: any, ...args: any): void {
    const callbackArray = this.listeners.get(type);
    if (Array.isArray(callbackArray)) {
      for (let i = 0; i < callbackArray.length; i++) {
        const callback = callbackArray[i];
        if (typeof callback === 'function') {
          callback(...args);
        }
      }
    }
  }

  public remove(type: any): void {
    if (this.listeners.has(type)) this.listeners.delete(type);
  }
}

export default new EventEmitter();
