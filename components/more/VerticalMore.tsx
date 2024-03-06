import { MoreVertical } from 'lucide-react-native'
import { useState } from 'react';
import { StyleProp, TextStyle, TouchableWithoutFeedback } from 'react-native'

interface VerticalMoreProps {
    style: StyleProp<TextStyle>;
    children: React.ReactNode
}

export const VerticalMore = ({ style, children }: VerticalMoreProps) => {

    const [Show, setShow] = useState<boolean>(false);

    return (
        <MoreVertical
            style={style}
            color={'#666'}
            onPress={() => setShow(!Show)}
        >
            {
                Show ? children : null
            }
        </MoreVertical>

    )
}
