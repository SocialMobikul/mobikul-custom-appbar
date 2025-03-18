import { MobikulAppbar } from 'mobikul-custom-appbar';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <MobikulAppbar
        key={'shsh'}
        headerTitle="Mobikul"
        headerTintColor="#fff"
        actionsIcon={[
          <Text
            key="cart"
            style={{
              fontSize: 30,
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            &#x2661;
          </Text>,
        ]}
        leftIcon={
          <Text
            key="menu"
            style={{
              fontSize: 30,
              color: '#fff',
              fontWeight: 'bold',
            }}
          >
            &#x2630;
          </Text>
        }
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={styles.textStyle}>Hello Mobikul 👋</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});
