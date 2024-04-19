import { createNativeStackNavigator} from '@react-navigation/native-stack';

import registerTravel from '../pages/registerTravel'

const Stack = createNativeStackNavigator ();

export default function Routes (){
  return(  
    <Stack.Navigator>
      <Stack.Screen
        nome="registerTravel"
        component={registerTravel}
      />
    </Stack.Navigator>
  )
}