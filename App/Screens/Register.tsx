import React, { useEffect } from 'react'
import type { FC } from 'react'
import { Input, Text, Div, Button } from 'react-native-magnus'
import { TouchableOpacity } from 'react-native'
import { useHeaderHeight } from '@react-navigation/stack'

interface Props {
	navigation: any
}
const Register: FC<Props> = ({ navigation }) => {
	const headerHeight = useHeaderHeight()
	useEffect(() => {
		navigation.setOptions({
			headerRight: props => (
				<TouchableOpacity onPress={() => navigation.navigate('Signin')}>
					<Text p={'md'} mr={'md'}>
						Volver atrás
					</Text>
				</TouchableOpacity>
			)
		})
	}, [])
	return (
		<Div p={'md'} pt={headerHeight}>
			<Div mb={'xl'}>
				<Text fontSize={'6xl'}>Creá tu cuenta</Text>
				<Text fontSize={'xl'}>Completa los siguientes campos:</Text>
			</Div>
			<Div mb={'lg'}>
				<Text fontSize={'xl'}>Dirección de correo electrónico:</Text>
				<Input
					h={32}
					pt={0}
					pb={0}
					rounded={0}
					bg={'transparent'}
					borderBottomColor={'#3D3D3D'}
					borderBottomWidth={0.5}
					borderTopWidth={0}
					borderRightWidth={0}
					borderLeftWidth={0}
				/>
			</Div>

			<Div mb={'lg'}>
				<Text fontSize={'xl'}>Contraseña:</Text>
				<Input
					h={32}
					pt={0}
					pb={0}
					rounded={0}
					bg={'transparent'}
					borderBottomColor={'#3D3D3D'}
					borderBottomWidth={0.5}
					borderTopWidth={0}
					borderRightWidth={0}
					borderLeftWidth={0}
				/>
			</Div>

			<Div mb={'lg'}>
				<Text fontSize={'xl'}>Repite tu contraseña:</Text>
				<Input
					h={32}
					pt={0}
					pb={0}
					rounded={0}
					bg={'transparent'}
					borderBottomColor={'#3D3D3D'}
					borderBottomWidth={0.5}
					borderTopWidth={0}
					borderRightWidth={0}
					borderLeftWidth={0}
				/>
			</Div>

			<Div row>
				<Button
					rounded={0}
					ml={'auto'}
					px="xl"
					py="sm"
					bg="redNissan"
					color="white">
					Registrarse
				</Button>
			</Div>
		</Div>
	)
}

export default Register
