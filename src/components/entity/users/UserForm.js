import { useState } from "react";

import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

import Icons from "../../UI/Icons.js";
import Form from "../../UI/Form.js";

const defaultUser = {
  UserID: null,
  UserFirstname: null,
  UserLastname: null,
  UserEmail: null,
  UserImageURL: null,
  UserUsertypeName: null,
  UserYear: null,
};

const UserForm = ({ originalUser, onSubmit, onCancel }) => {
  // Initialisations -----
  defaultUser.UserID = Math.floor(100000 + Math.random() * 900000);
  defaultUser.UserImageURL =
    "https://www.twst.com/wp-content/uploads/2019/01/toby-loftin.jpg";

  // State ---------------
  const [user, setUser] = useState(originalUser || defaultUser);

  // Handlers ------------
  const handleChange = (field, value) => setUser({ ...user, [field]: value });
  const handleSubmit = () => onSubmit(user);

  // View ----------------
  const submitLabel = originalUser ? "Modify" : "Add";
  const submitIcon = originalUser ? <Icons.Edit /> : <Icons.Add />;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <ScrollView>
        <Form
          onSubmit={handleSubmit}
          onCancel={onCancel}
          submitLabel={submitLabel}
          submitIcon={submitIcon}
        >
          <Form.InputText
            label="User Firstname"
            value={user.UserFirstname}
            onChange={(value) => handleChange("UserFirstname", value)}
          />

          <Form.InputText
            label="User Lastname"
            value={user.UserLastname}
            onChange={(value) => handleChange("UserLastname", value)}
          />

          <Form.InputText
            label="User Image URL"
            value={user.UserImageURL}
            onChange={(value) => handleChange("UserImageURL", value)}
          />

          <Form.InputSelect
            label="User Type"
            prompt="Select User type"
            options={[
              { value: "Student", label: "Student" },
              { value: "Staff", label: "Staff" },
            ]}
            value={user.UserUsertypeName}
            onChange={(value) => handleChange("UserUsertypeName", value)}
          />

          <Form.InputText
            label="User Year"
            value={user.UserYear}
            onChange={(value) => handleChange("UserYear", value)}
          />
          <Form.InputText
            label="User Emial"
            value={user.UserEmail}
            onChange={(value) => handleChange("UserEmail", value)}
          />
        </Form>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({});

export default UserForm;
