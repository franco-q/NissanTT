import React, { useEffect } from 'react'
import type { FC } from 'react'
import { Input, Text, Div, Button } from 'react-native-magnus'
import { TouchableOpacity } from 'react-native'
import { useHeaderHeight } from '@react-navigation/stack'

interface Props {
	navigation: any
}

const Signin: FC<Props> = ({ navigation }) => {
	const headerHeight = useHeaderHeight()
	useEffect(() => {
		navigation.setOptions({
			headerRight: props => (
				<TouchableOpacity onPress={() => navigation.navigate('Intro')}>
					<Text p={'md'} mr={'md'}>
						Volver atrás
					</Text>
				</TouchableOpacity>
			)
		})
	}, [])

	return (
		<Div p={'md'} pt={headerHeight}>
			<Text fontSize={'6xl'}>Inicio de Sesión</Text>
			<Div mb={'xl'} row>
				<Text fontSize={'xl'}>¿Eres un nuevo usuario? </Text>
				<TouchableOpacity onPress={() => navigation.navigate('Register')}>
					<Text fontSize={'xl'} color={'redNissan'}>Crear una cuenta</Text>
				</TouchableOpacity>
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
				<Text fontSize={'xl'}>¿Olvidaste tu contraseña? </Text>
			</Div>

			<Div row>
				<Button
					rounded={0}
					ml={'auto'}
					px="xl"
					py="sm"
					bg="redNissan"
					color="white">
					Ingresar
				</Button>
			</Div>
		</Div>
	)
}

export default Signin
