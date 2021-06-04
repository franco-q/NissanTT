import React, { useEffect } from 'react'
import type { FC } from 'react'
import { Input, Text, Div, Button } from 'react-native-magnus'
import { TouchableOpacity } from 'react-native'
import { useHeaderHeight } from '@react-navigation/stack'

const Regular = 'Nissan Brand Regular'
const Bold = 'Nissan Brand Bold'
const Italic = 'Nissan Brand Italic'
const Light = 'Nissan Brand Light'

interface Props {
	navigation: any
}

const Signin: FC<Props> = ({ navigation }) => {
	const headerHeight = useHeaderHeight()
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={() => navigation.navigate('Intro')}>
					<Text p={'md'} mr={'md'} fontFamily={Light} fontSize={'xl'}>
						Volver atrás
					</Text>
				</TouchableOpacity>
			)
		})
	}, [])

	return (
		<Div
			p={'md'}
			pt={headerHeight}
			bgImg={require('../Assets/bg-pattern.jpg')}
			flex={1}>
			<Div mb={'2xl'}>
				<Text fontSize={'7xl'} fontFamily={Regular}>
					Inicio de Sesión
				</Text>
				<Div row>
					<Text fontSize={'lg'} fontFamily={Light} mr={'sm'}>
						¿Eres un nuevo usuario?
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Register')}>
						<Text fontSize={'lg'} fontFamily={Light} color={'redNissan'}>
							Crear una cuenta
						</Text>
					</TouchableOpacity>
				</Div>
			</Div>

			<Div mb={'lg'}>
				<Text fontSize={'lg'} fontFamily={Regular}>
					Dirección de correo electrónico:
				</Text>
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
				<Text fontSize={'lg'} fontFamily={Regular}>
					Contraseña:
				</Text>
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
				<Text fontSize={'lg'} fontFamily={Regular}>
					¿Olvidaste tu contraseña?{' '}
				</Text>
			</Div>

			<Div row>
				<Button
					rounded={0}
					ml={'auto'}
					px="xl"
					py="sm"
					bg="redNissan"
					color="white"
					onPress={() => navigation.navigate('Welcome')}>
					Ingresar
				</Button>
			</Div>
		</Div>
	)
}

export default Signin
