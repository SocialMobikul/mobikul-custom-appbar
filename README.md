# MobikulAppbar

A customizable Appbar component for React Native, built using `react-native-safe-area-context`. This component provides a flexible and easily configurable app bar with optional icons and styling.

## Installation

### Install Mobikul Custom Appbar

```sh
npm install mobikul-custom-appbar
```

or

```sh
yarn add mobikul-custom-appbar
```

### Install Required Dependency

```sh
npm install react-native-safe-area-context
```

or

```sh
yarn add react-native-safe-area-context
```

## Usage

```tsx
import MobikulAppbar from 'mobikul-custom-appbar';
import { View, Text } from 'react-native';

export default function App() {
    return (
        <MobikulAppbar
            leftIcon={<Text>{'<'}</Text>}
            actionsIcon={<Text>{'⋮'}</Text>}
            headerTitle="My App"
            headerStyle={{ backgroundColor: '#ff5733' }}
            headerTintColor="#fff"
            headerTitleStyle={{ fontSize: 20, fontWeight: 'bold' }}
        />
    );
}
```

## Dependencies

This package requires the following dependencies:

- `react-native-safe-area-context`

## Props

| Prop               | Type                   | Description                                                                      |
| ------------------ | ---------------------- | -------------------------------------------------------------------------------- |
| `leftIcon`         | `React.ReactNode`      | Optional left icon component. Defaults to a back arrow (`&#8249;`).              |
| `actionsIcon`      | `React.ReactNode`      | Optional right icon component.                                                   |
| `headerTitle`      | `string`               | Title text for the app bar.                                                      |
| `headerStyle`      | `object`               | Styles for the app bar background. Defaults to `{ backgroundColor: '#3498db' }`. |
| `headerTintColor`  | `string`               | Color of the header text and icons. Defaults to `#000`.                          |
| `headerTitleStyle` | `StyleProp<TextStyle>` | Custom styles for the title text.                                                |

## Customization

You can customize the appearance of the app bar by overriding the `headerStyle`, `headerTintColor`, and `headerTitleStyle` props.

## Contributing

If you would like to contribute, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
