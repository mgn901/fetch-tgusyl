import { TChannelFunctionMap } from './TChannelFunctionMap';
import clientify from './clientify';

interface IClientifyMapOptions<M extends TChannelFunctionMap> {
  mapKeys: (Extract<keyof M, string>)[];
  replyListenerAdder: Parameters<typeof clientify>[0]['replyListenerAdder'];
  sendRequestFunction: Parameters<typeof clientify>[0]['sendRequestFunction'];
}

type TClientifiedMap<M extends TChannelFunctionMap> = {
  [k in Extract<keyof M, string>]: ReturnType<typeof clientify<M, k>>;
};

const clientifyMap = <M extends TChannelFunctionMap>(
  options: IClientifyMapOptions<M>,
): TClientifiedMap<M> => {
  const { mapKeys, replyListenerAdder, sendRequestFunction } = options;

  const serverifiedEntries = mapKeys.map((key) => [
    key,
    clientify({
      channel: key,
      replyListenerAdder,
      sendRequestFunction,
    }),
  ]);

  return Object.fromEntries(serverifiedEntries);
};

export default clientifyMap;
