import {View, Text} from 'react-native'
import { useForm, Controller } from "react-hook-form"
import { TextInput, Button } from 'react-native-paper';
export default function HomeScreen({navigation, route}) {
    
  const {
    control,reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      iduser:"",
      fullname: "",
      email: "",
      password : "",
      uri:"",
      age: ""
    },
  })
  const onSubmit = (data)=> console.log (data)
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenid@ {route.params.email}</Text>
        <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 12,
          minLength: 4
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Identification"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="iduser"
      />
      {errors.iduser?.type=="required" && <Text style={{color:'red'}}>identification user is obligatory.</Text>}
      {errors.iduser?.type=='maxLength' && <Text style={{color:'red'}}>tmaxim 30 caracthers.</Text>}
      {errors.iduser?.type=='minLength' && <Text style={{color:'red'}}>tminim 4 caracthers.</Text>}

      <Button
                    style={{ marginTop: 20, backgroundColor: 'powderblue' }}
                    icon="content-save"
                    mode="outlined"
                    onPress={handleSubmit(onSubmit)}
                >
                Guardar
                </Button>
      </View>
    );
  }