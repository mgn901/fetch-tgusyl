import SendTerminal from '../../asyncify-events/SendTerminal';
import ServerTerminal from '../../asyncify-events/ServerTerminal';

export const sendTerminal = new SendTerminal({
  channel: '',
  sendMessageFunction: chrome.runtime.sendMessage,
});

export const serverTerminal = new ServerTerminal({
  channel: '',
  messageListenerAdder: chrome.runtime.onMessage.addListener,
  messageListenerRemover: chrome.runtime.onMessage.removeListener,
  sendMessageFunction: chrome.runtime.sendMessage,
  paramsProcessor: () => {},
});

// この後sendTerminalとserverTerminalをいくつか用意する。
// channelFunctionMapやchannelMessageMapを舐めてもよい。
