import { MobikulAppbar } from 'mobikul-custom-appbar';
import { Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <>
      <MobikulAppbar
        key={'shsh'}
        headerTitle="Mobikul"
        headerTintColor="#fff"
        actionsIcon={[
          <Text key="cart" style={{ fontSize: 20, color: '#fff' }}>
            &#x2661;
          </Text>,
        ]}
      />
      <View>
        <View style={{ ...styles.container }}>
          <Text>Safe Area Insets Top:20</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
