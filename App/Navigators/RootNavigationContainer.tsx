import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import AuthStack from './AuthStack'

import { Register, Intro, Signin, Welcome, Main } from '../Screens'
import Menu from '../Components/Menu'
import HeaderLogo from '../Components/HeaderLogo'

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
				<RootStack.Screen
					options={{
						title: '',
						headerLeft: null,
						headerTransparent: true
					}}
					name="Welcome"
					component={Welcome}
				/>
				<RootStack.Screen
					options={{
						title: '',
						headerStyle: {
							backgroundColor: '#3D3D3D'
						},
						headerLeft: () => <HeaderLogo />,
						headerRight: () => <Menu />
					}}
					name="Main"
					component={Main}
				/>
			</RootStack.Navigator>
		</NavigationContainer>
	)
}

export default RootNavigationContainer
