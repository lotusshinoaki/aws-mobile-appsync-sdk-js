import { NetInfoStateType } from '@react-native-community/netinfo';

export interface NetInfoState {
  isConnectionExpensive: boolean;
  isInternetReachable: boolean;
  type: NetInfoStateType;
}

interface __NetInfo {
  fetch: () => Promise<NetInfoState>;
}

class _NetInfo {
  _netInfo: __NetInfo;
  constructor() {
    console.log('aws-appsync-react.NetInfo#constructor');
    this._netInfo = null;
  }
  fetch = () => {
    console.log('aws-appsync-react.NetInfo#fetch');
    return this._netInfo
      ? this._netInfo.fetch()
      : Promise.resolve({
          isConnectionExpensive: true,
          isInternetReachable: false,
          type: 'none' as NetInfoStateType,
        });
  };
  setNetInfo = (netInfo: __NetInfo) => {
    console.log('aws-appsync-react.NetInfo#setNetInfo');
    this._netInfo = netInfo;
  };
}

const NetInfo = new _NetInfo();

export default NetInfo;
