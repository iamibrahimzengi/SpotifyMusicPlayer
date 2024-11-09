import React, {useEffect, useState} from 'react';

import {ActivityIndicator, SafeAreaView, View, StyleSheet} from 'react-native';
import {SetPlayer, AddTrack} from '../musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';

function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);

  async function setup() {
    let isSetup = await SetPlayer();

    if (isSetup) {
      await AddTrack();
    }
    setIsPlayerReady(isSetup);
  }
  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.container}>
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
