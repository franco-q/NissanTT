import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'react-native-magnus'
import AuthStack from './AuthStack'

import { Register, Intro, Signin } from '../Screens'
import { TouchableOpacity } from 'react-native'

const RootStack = createStackNavigator()

function RootNavigationContainer(): JSX.Element {
	return (
		<NavigationContainer>
			<RootStack.Navigator initialRouteName="Intro">
				{/* <RootStack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} /> */}

				<RootStack.Screen
					options={{
						title: '',
						headerTransparent: true
					}}
					name="Intro"
					component={Intro}
				/>
				<RootStack.Screen
					options={{
						title: '',
						headerLeft: null,
						headerTransparent: true
					}}
					name="Register"
					component={Register}
				/>
				<RootStack.Screen
					options={{
						title: '',
						headerLeft: null,
						headerTransparent: true
					}}
					name="Signin"
					component={Signin}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	)
}

export default RootNavigationContainer
