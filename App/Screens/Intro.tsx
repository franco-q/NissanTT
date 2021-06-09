import React, { FC, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { Button, Div, Text } from 'react-native-magnus'

const Regular = 'Nissan Brand Regular'
const Bold = 'Nissan Brand Bold'
const Italic = 'Nissan Brand Italic'
const Light = 'Nissan Brand Light'

interface Props {
	navigation: any
}

const Intro: FC<Props> = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={() => navigation.navigate('Signin')}>
					<Text
						p={'md'}
						mr={'md'}
						fontFamily={Light}
						fontSize={'xl'}
						color={'white'}>
						Iniciar Sesión
					</Text>
				</TouchableOpacity>
			)
		})
	}, [])

	return (
		<Div
			p={'md'}
			flex={1}
			bgImg={require('../Assets/bg-intro.jpg')}
			justifyContent={'flex-end'}>
			<Div
				p={'md'}
				alignItems="center"
				mb={70}
				justifyContent={'center'}>
				<Div>
					<Button
						m="auto"
						rounded={0}
						px="2xl"
						py="md"
						bg={'redNissan'}
						color="white"
						fontFamily={Light}
						onPress={() => navigation.navigate('Register')}>
						Crear Cuenta
					</Button>
				</Div>
			</Div>
		</Div>
	)
}

export default Intro
