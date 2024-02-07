import { useState } from 'react';
import { StyleSheet, Text, TextInput , View  } from 'react-native';
import Icons from '../../UI/Icons.js'
import {Button, ButtonTray} from '../../UI/Button.js'

const defaultModule = {
    ModuleID: null, 
    ModuleCode: null,
    ModuleName: null, 
    ModuleLevel: null,
    ModuleLeaderID: null, 
    ModuleLeaderName: null, 
    ModuleImage:null, 
  };


const  ModuleForm = ({ onSubmit, onCancel }) => {
  // Initialisations -----
  defaultModule.ModuleId = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImage = 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg';

  // State ---------------    
  const [module, setModule] = useState({ defaultModule, ModuleID: Math.floor(100000 + Math.random() * 900000),
    ModuleImage: 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg'
  });

  // Handlers ------------
  const handleChange = (field, value) => setModule( { ...module, [field]: value } );
  const handleSubmit = () => onSubmit(module);

  // View ----------------
  const submitLabel = 'Add';
  const submitIcon= <Icons.Add/> ;
  return (
    <View style={styles.formContainer}>

            <View style={styles.item} >
            <Text style={styles.itemLabel}>Module Code</Text>
            <TextInput value={module.ModuleCode} onChangeText={(value) => handleChange('ModuleCode', value)} style={styles.itemTextInput} />
        </View>

        <View style={styles.item} >
            <Text style={styles.itemLabel}>Module name</Text>
            <TextInput value={module.ModuleName} onChangeText={(value) => handleChange('ModuleName', value)} style={styles.itemTextInput} />
        </View>

        <View style={styles.item} >
            <Text style={styles.itemLabel}>Module Level</Text>
            <TextInput value={module.ModuleLevel} onChangeText={(value) => handleChange('ModuleLevel', value)} style={styles.itemTextInput} />
        </View>

        <View style={styles.item} >
            <Text style={styles.itemLabel}>Module Leader</Text>
            <TextInput value={module.ModuleLeaderName} onChangeText={(value) => handleChange('ModuleLeaderName', value)} style={styles.itemTextInput} />
        </View>

        <View style={styles.item} >
            <Text style={styles.itemLabel}>Module image URL</Text>
            <TextInput value={module.ModuleImage} onChangeText={(value) => handleChange('ModuleImage', value)} style={styles.itemTextInput} />
        </View>

        <ButtonTray>
        <Button label= {submitLabel} icon={submitIcon} onClick={handleSubmit}/>
        <Button label="Cancel" icon={<Icons.Close />}  onClick={onCancel}/>

        </ButtonTray>
 </View>
  );
}

const styles = StyleSheet.create({
    itemLabel:{
        color:'grey',
        fontSize: 16,
        marginBottom:5,
      },
      itemTextInput:{
        height: 50,
        paddingLeft:10,
        fontSize:16,
        backgroundColor:'white',
        borderRadius:7,
        borderWidth:1,
        borderColor:'lightgrey',
      },
    });


export default ModuleForm;