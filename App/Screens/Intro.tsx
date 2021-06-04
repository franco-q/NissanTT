import React, { FC } from 'react'
import { Button, Div } from 'react-native-magnus'

const Regular = 'Nissan Brand Regular'
const Bold = 'Nissan Brand Bold'
const Italic = 'Nissan Brand Italic'
const Light = 'Nissan Brand Light'

interface Props {
	navigation: any
}

const Intro: FC<Props> = ({ navigation }) => {
	return (
		<Div
			p={'md'}
			flex={1}
			bgImg={require('../Assets/bg-intro.jpg')}
			justifyContent={'center'}>
			<Div
				alignItems="center"
				m={'auto'}
				p={'md'}
				alignSelf={'center'}
				justifyContent={'center'}>
				<Button
					m="auto"
					rounded={0}
					px="2xl"
					py="sm"
					bg="redNissan"
					color="white"
					fontFamily={Light}
					onPress={() => navigation.navigate('Signin')}>
					Entrar
				</Button>
			</Div>
		</Div>
	)
}

export default Intro
