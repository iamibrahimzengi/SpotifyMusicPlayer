/**
 * @format
 */
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import {playbackService} from './musicPlayerServices';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(...);
//since playbackService is import as function
TrackPlayer.registerPlaybackService(() => playbackService);
