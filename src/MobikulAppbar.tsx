import { useMemo } from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  type TextStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface AppbarProps {
  leftIcon?: React.ReactNode;
  actionsIcon?: React.ReactNode;
  headerTitle: string;
  headerStyle?: {
    backgroundColor: string;
  };
  headerTintColor?: string;
  headerTitleStyle?: {
    fontSize?: number | undefined;
    fontFamily?: string | undefined;
    fontWeight?: TextStyle['fontWeight'];
  };
}
function MobikulAppbar({
  leftIcon,
  actionsIcon,
  headerTitle,
  headerStyle = styles.headerStyle,
  headerTintColor = '#000',
  headerTitleStyle = styles.headerTitleTextStyle,
}: AppbarProps) {
  const headerTextStyle = useMemo(
    () => ({ color: headerTintColor }),
    [headerTintColor]
  );

  return (
    <SafeAreaView key={'Appbar'} style={[headerStyle]} edges={['top']}>
      <View style={styles.container}>
        <View style={styles.leftIconStyle}>{leftIcon ? leftIcon : null}</View>
        <View style={styles.headerTitleStyle}>
          <Text style={[headerTextStyle, headerTitleStyle]}>{headerTitle}</Text>
        </View>
        <View style={styles.actionsIcon}>{actionsIcon}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#3498db',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    paddingHorizontal: '2%',
  },
  headerTitleStyle: {
    position: 'absolute',
    top: '20%',
    bottom: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  headerTitleTextStyle: {
    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
    fontWeight: 'bold',
  },
  leftIconStyle: {
    flexDirection: 'row',
    // paddingVertical: "1%",
    // position: 'absolute',
    // left: '2%',
    // top: "0%",
  },
  actionsIcon: {
    flexDirection: 'row',
    gap: '2%',
    // position: 'absolute',
    // right: '2%',
    // top: "0%",
  },
});
export default MobikulAppbar;
